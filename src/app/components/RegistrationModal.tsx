"use client";

import { useEffect, useState } from "react";

const FIRST_TOUCH_KEY = "bpb_first_touch";
const LAST_TOUCH_KEY = "bpb_last_touch";

interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  gclid: string;
  ttclid: string;
  li_fat_id: string;
  referrer: string;
  landing_page: string;
  captured_at: string;
}

const ATTRIBUTION_KEYS: Array<keyof AttributionData> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
  "li_fat_id",
];

function parseAttributionFromUrl(): AttributionData {
  const params = new URLSearchParams(window.location.search);
  const attribution: AttributionData = {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_content: params.get("utm_content") ?? "",
    utm_term: params.get("utm_term") ?? "",
    fbclid: params.get("fbclid") ?? "",
    gclid: params.get("gclid") ?? "",
    ttclid: params.get("ttclid") ?? "",
    li_fat_id: params.get("li_fat_id") ?? "",
    referrer: document.referrer || "",
    landing_page: window.location.href,
    captured_at: new Date().toISOString(),
  };

  return attribution;
}

function hasAttributionSignals(data: AttributionData): boolean {
  return ATTRIBUTION_KEYS.some((key) => data[key].trim() !== "");
}

function readStoredAttribution(key: string): AttributionData | null {
  const raw = localStorage.getItem(key);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AttributionData;
  } catch {
    return null;
  }
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  open,
  onClose,
}: Props) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    perfilSocial: "",
  });
  useEffect(() => {
    const fromStorageFirst = readStoredAttribution(
      FIRST_TOUCH_KEY,
    );

    const currentVisit = parseAttributionFromUrl();

    if (!hasAttributionSignals(currentVisit)) {
      return;
    }

    if (!fromStorageFirst) {
      localStorage.setItem(
        FIRST_TOUCH_KEY,
        JSON.stringify(currentVisit),
      );
    }

    localStorage.setItem(
      LAST_TOUCH_KEY,
      JSON.stringify(currentVisit),
    );
  }, []);

  if (!open) return null;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        attribution: {
          first_touch: readStoredAttribution(FIRST_TOUCH_KEY),
          last_touch: readStoredAttribution(LAST_TOUCH_KEY),
          conversion_page: window.location.href,
          conversion_at: new Date().toISOString(),
        },
      };

      const apiUrl =
        process.env.NEXT_PUBLIC_REGISTRATION_API_URL;

      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Falha ao enviar inscrição.");
        }
      } else {
        console.log("Payload de inscrição:", payload);
      }

      alert("Pré-inscrição realizada!");
      onClose();
    } catch {
      alert(
        "Nao foi possivel concluir sua inscricao agora. Tente novamente.",
      );
    }
  }

  const source =
    (typeof window !== "undefined" &&
      (new URLSearchParams(window.location.search).get(
        "utm_source",
      ) ||
        readStoredAttribution(LAST_TOUCH_KEY)?.utm_source ||
        readStoredAttribution(FIRST_TOUCH_KEY)?.utm_source)) ||
    "direto";

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5">
      <div className="bg-zinc-950 border border-green-500/20 rounded-3xl w-full max-w-xl p-8 relative glow">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-black mb-2">
          Faça sua Pré-inscrição
        </h2>

        <p className="text-zinc-400 mb-8">
          Participe da maior expedição de volunturismo do Brasil.
        </p>

        <p className="text-xs text-zinc-500 mb-5">
          Origem detectada: {source}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-green-500"
            value={form.nome}
            onChange={(e) =>
              setForm({ ...form, nome: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-green-500"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Telefone"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-green-500"
            value={form.telefone}
            onChange={(e) =>
              setForm({ ...form, telefone: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Seu @ do Instagram/LinkedIn (opcional)"
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-green-500"
            value={form.perfilSocial}
            onChange={(e) =>
              setForm({
                ...form,
                perfilSocial: e.target.value,
              })
            }
          />

          <p className="text-xs text-zinc-500">
            Ao enviar, voce concorda com o uso dos dados para
            contato e analise de origem da campanha.
          </p>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 transition-all text-black font-black py-4 rounded-xl text-lg"
          >
            Quero Participar
          </button>
        </form>
      </div>
    </div>
  );
}