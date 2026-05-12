"use client";

import Image from "next/image";
import { useState } from "react";
import RegistrationModal from "@/app/components/RegistrationModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-black text-white overflow-hidden">
      <RegistrationModal
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* HERO */}
      <section className="hero-bg min-h-screen flex items-center relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/logo-outline.png"
            alt="Brasil"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-green-500/30 text-green-400 text-sm mb-6">
              1ª EXPEDIÇÃO
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              Brasileiros
              <span className="text-gradient block">
                para o Brasil
              </span>
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Uma expedição social, voluntária, cristã,
              filantrópica e patriótica cruzando o Brasil de
              Sul ao Norte e de Leste a Oeste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpen(true)}
                className="bg-green-500 hover:bg-green-400 text-black font-black px-8 py-5 rounded-2xl transition-all text-lg glow"
              >
                Fazer Pré-inscrição
              </button>

              <a
                href="#sobre"
                className="border border-zinc-700 hover:border-green-500 px-8 py-5 rounded-2xl transition-all text-center"
              >
                Conhecer a Expedição
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/logo-main.png"
              alt="Expedição"
              width={650}
              height={650}
              className="drop-shadow-[0_0_60px_rgba(0,255,100,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Uma Expedição
            <span className="text-gradient block">
              com Propósito
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-black mb-4 text-green-400">
                Volunturismo
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                Uma jornada que une turismo e impacto social,
                visitando organizações que atuam junto às
                crianças e jovens brasileiros.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-black mb-4 text-green-400">
                Corpo a Corpo
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                Conversas com famílias, organizações,
                empresários e comunidades para compartilhar
                boas práticas e fortalecer valores.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-black mb-4 text-green-400">
                Turismo
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                Conhecendo o Brasil profundo, valorizando
                cidades, culturas, pessoas e destinos
                incríveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title mb-10">
            O Objetivo
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed">
            Ser a voz do povo para o povo e para o Estado,
            promovendo valores como amor, honestidade,
            respeito, justiça e serviço através de uma
            grande expedição nacional.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Valores da
            <span className="text-gradient block">
              Expedição
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              "Amor",
              "Honestidade",
              "Justiça",
              "Respeito",
              "Serviço",
            ].map((item) => (
              <div
                key={item}
                className="card text-center py-10"
              >
                <h3 className="text-2xl font-black text-green-400">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-14">
            Cronograma
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "10 de Maio de 2026",
                desc: "Abertura oficial das inscrições.",
              },
              {
                title: "01 de Junho de 2026",
                desc: "Apresentação do roteiro preliminar.",
              },
              {
                title: "01 de Julho de 2026",
                desc: "Definição final do roteiro e ações sociais.",
              },
              {
                title: "02 de Julho de 2026",
                desc: "Preparação final para a expedição.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <h3 className="text-2xl font-black text-green-400">
                  {item.title}
                </h3>

                <p className="text-zinc-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
            Faça Parte
            <span className="text-gradient block">
              Dessa Jornada
            </span>
          </h2>

          <p className="text-zinc-300 text-xl mb-10">
            Participe da maior expedição de volunturismo
            realizada no Brasil.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-green-500 hover:bg-green-400 text-black font-black px-10 py-6 rounded-2xl text-xl glow transition-all"
          >
            Quero me Inscrever
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5 items-center">
          <p className="text-zinc-500">
            © 2026 Brasileiros para o Brasil
          </p>

          <p className="text-zinc-600 text-sm">
            Sul ao Norte • Leste a Oeste
          </p>
        </div>
      </footer>
    </main>
  );
}