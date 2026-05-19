"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import RegistrationModal from "@/app/components/RegistrationModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const objetivo = document.getElementById("objetivo");
      const cta = document.getElementById("cta");
      if (!objetivo || !cta) return;

      const objetivoTop = objetivo.getBoundingClientRect().top;
      const ctaTop = cta.getBoundingClientRect().top;

      setShowStickyBtn(objetivoTop <= 0 && ctaTop > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main className="bg-black text-white overflow-hidden">
      <RegistrationModal
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* BOTÃO FLUTUANTE */}
      {showStickyBtn && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm">
          <div className="bg-black/70 backdrop-blur-md border border-green-500/20 rounded-2xl px-4 py-2">
            <button
              onClick={() => setOpen(true)}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black px-6 py-3 rounded-xl transition-all text-base glow"
            >
              Fazer Pré-inscrição
            </button>
          </div>
        </div>
      )}

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
                A 1ª Expedição Brasileiros para o Brasil - Sul ao Norte, Leste a Oeste, independente do objetivo principal dessa jornada, será para todos os participantes e cidades visitadas, uma oportunidade única de conhecermos nosso país sob um prisma muito especial. 
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
              src="/expedicao-banner-landing-page.png"
              alt="Expedição"
              width={900}
              height={750}
              className="drop-shadow-[0_0_60px_rgba(0,255,100,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section id="objetivo" className="py-28 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title mb-10">
            O Objetivo
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed">
            Esta 1ª Expedição é uma iniciativa social de pessoas e não uma sociedade jurídica, empreendimento comercial, político, eclesiástico, religioso, excursão produzida por agências de viagens ou algo assim. A organização aqui apresentada é voluntária e totalmente sem interesse de monetizar esse evento.
          </p>
          <h4 className="section-subtitle my-10">
            O único objetivo é a materialização do canal Brasileiros para o Brasil.
          </h4>
          <p className="text-zinc-300 text-xl leading-relaxed">
            A 1ª Expedição é uma iniciativa CRISTÃ, VOLUNTÁRIA, SOCIAL, FILANTRÓPICA, ORDEIRA, PACÍFICA, CÍVICA e LEGAL de CIDADÃOS que desejam tornar concreta a criação do canal BRASILEIROS PARA O BRASIL, confirmando assim, que trata-se de uma ação real do POVO para o POVO e para o ESTADO. 
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Uma Expedição<span className="text-gradient"> com Propósito</span>
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Muito mais que turistar pelo nosso país conhecendo e explorando novos destinos e lugares, o que está mobilizando concretizar esta viagem é gerar um impacto positivo na sociedade brasileira a partir das cidades visitadas, apresentando cuidados praticados com as novas gerações, iniciativas sociais locais que fazem diferença na comunidade, atenção ao meio ambiente, necessidades e demandas dos cidadãos.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-black mb-4 text-green-400">
                Volunturismo
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                Essa é a modalidade de turismo que possibilita uma real e verdadeira imersão cultural nos locais visitados e que será feito pela 1ª EXPEDIÇÃO ao visitar Organizações Sociais locais, que atuam positivamente junto às crianças e jovens, semeando RESPEITO À PÁTRIA E TEMOR A DEUS. Com a intenção clara de divulgar e apresentar essas ações exitosas realizadas em prol das crianças brasileiras.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-black mb-4 text-green-400">
                Corpo a Corpo
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                  Sem vínculo político, ideológico ou partidário serão realizadas também rodas de conversas com famílias, organizações sociais, empresariais, religiosas e representantes do Governo nas cidades visitadas para apresentação do canal BRASILEIROS PARA O BRASIL e realizarmos trocas de experiências de boas práticas. O CANAL será usado para mostrar essas iniciativas sociais inspirando outras localidades a fazer o mesmo.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-black mb-4 text-green-400">
                Turismo
              </h3>

              <p className="text-zinc-300 leading-relaxed">
                  Tão importante e também motivação para os VIAJANTES, é PRATICAR O TURISMO TRADICIONAL, conhecendo as belezas dos destinos escolhidos, valorizando a cidade visitada e divulgando seu potencial turístico, não só pelo CANAL, mas ESPECIALMENTE PELAS REDES SOCIAIS DOS EXPEDICIONÁRIOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Função do Canal */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Função do<span className="text-gradient"> Canal</span>
          </h2>
          <h4 className="section-subtitle mb-10">Ser a VOZ DO POVO PARA O POVO E PARA O ESTADO. </h4>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Vislumbramos a real necessidade do povo ser ouvido por nosso Estado, mas também que o temor a Deus e o amor à Pátria sejam restaurados, que haja respeito a lei, tanto pelo cidadão, quanto pelos nossos governantes. Que vivamos uma verdadeira transformação para que todos trabalhem pelo BEM COMUM.
          </p>
        </div>
      </section>

      {/* Integrantes da Expedição */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Integrantes da<span className="text-gradient"> Expedição</span>
          </h2>
          <h4 className="section-subtitle mb-10">Toda expedição via de regra é uma viagem organizada. Participar dessa jornada é uma escolha individual, podendo ser feito todo ou parte do trajeto.  </h4>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            O pré-requisito fundamental para participar dessa 1ª Expedição é evidentemente comungar dos objetivos do CANAL BRASILEIROS PARA O BRASIL, por isso, pedimos que visite nossas redes sociais e conheça atenciosamente nossa proposta.
Nossas atitudes por onde passarmos será o maior argumento. Assim, apresentamos aqui os nossos valores e princípios inegociáveis que temos e entendemos como fundamentais para todos que pretendem ingressar nessa expedição. 

          </p>
        </div>
      </section>

      {/* Quem pode participar */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Quem pode<span className="text-gradient"> Participar</span>
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Motociclistas, turistas em carros de passeio, campistas, caravanistas, motorhomeiros, enfim, qualquer pessoa maior de idade, gozando de perfeito estado de saúde, em veículo próprio ou alugado. As pessoas menor de idade, somente poderão participar mediante a presença dos pais ou acompanhado por seu responsável legal. 

          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Valores da<span className="text-gradient block"> Expedição</span>
          </h2>
          <h4 className="section-subtitle mb-10">São estes os valores que a 1ª Expedição pretende levar por onde passarmos e no convívio interno com os expedicionários:</h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                title: "Amor",
                desc: "A melhor e mais pura maneira de nos relacionarmos.",
              },
              {
                title: "Honestidade",
                desc: "Em todos os momentos, situações e convívios que experimentarmos.",
              },
              {
                title: "Justiça",
                desc: "Dar àquele que nos acompanha na viagem e àqueles que encontrarmos pelo caminho, exatamente o que desejamos receber.",
              },
              {
                title: "Respeito",
                desc: "Sempre com todos que iremos conviver durante essa jornada.",
              },
              {
                title: "Serviço",
                desc: "Estarmos todos dispostos a ajudar uns aos outros e por onde passarmos, deixando o egoísmo fora da nossa bagagem.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card text-center py-10 flex flex-col gap-4"
              >
                <h3 className="text-2xl font-black text-green-400">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS INEGOCIÁVEIS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Princípios<span className="text-gradient block"> Inegociáveis</span>
          </h2>
          <h4 className="section-subtitle mb-10">Em todos os momentos devemos lembrar que os nossos princípios são:</h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                title: "AMOR"
              },
              {
                title: "ALEGRIA"
              },
              {
                title: "PAZ"
              },
              {
                title: "PACIÊNCIA"
              },
              {
                title: "BENEVOLÊNCIA"
              },
              {
                title: "FIDELIDADE"
              },
              {
                title: "BONDADE"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="card text-center py-10 flex flex-col gap-4"
              >
                <h3 className="text-2xl font-black text-green-400">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          <h4 className="section-subtitle mb-10">ELES SÃO ABSOLUTAMENTE INEGOCIÁVEIS.</h4>
        </div>
      </section>

      {/* Responsabilidades e funções do integrante da expedição */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Responsabilidades e Funções do <span className="text-gradient block"> Integrante da Expedição</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                letter: "a",
                desc: "Como dito acima, a participação na 1ª Expedição é uma escolha individual e o expedicionário está participando por livre e espontânea vontade, porém é necessário concordar e anuir com os VALORES E PRINCÍPIOS INEGOCIÁVEIS propostos."
              },
              {
                letter: "b",
                desc: "Os expedicionários que estiverem presentes nas visitas e eventos realizados na viagem, deverão estar sempre vestidos com a camiseta da 1ª Expedição."
              },
              {
                letter: "c",
                desc: "Participar do grupo de WhatsApp da 1ª Expedição para sugerir e votar. Assim, todas as decisões da caravana serão o mais democrático possível."
              },
              {
                letter: "d",
                desc: "Participar das ações sociais e filantrópicas nas cidades visitadas."
              },
              {
                letter: "e",
                desc: "Cada um deve se responsabilizar por suas escolhas, providências individuais e recursos para custeio da viagem, podendo inclusive participar pelo trecho total ou parcial da forma como desejar."
              }
            ].map((item) => (
              <div key={item.letter} className="border-l-4 border-green-400 pl-6 py-4">
                <span className="text-2xl font-black text-green-400 mr-3">{item.letter}.</span>
                <p className="text-zinc-300 leading-relaxed inline">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normas Complementares */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Normas<span className="text-gradient"> Complementares</span>
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Será criado com os inscritos um grupo no WhatsApp com o objetivo de tirar dúvidas, trazer esclarecimentos, troca de experiências e para apresentação das normas complementares visando o melhor funcionamento do comboio.
          </p>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Estas normas serão apresentadas no grupo em 01/07/2026 tentando atender as necessidades da maioria e em conjunto, de forma totalmente democrática, serem votadas.
            Qualquer pessoa que ingressar ao grupo após essa data, terá obrigatoriamente que acompanhar as decisões coletivas definidas na data acima, bem como todas aqui apresentadas.

          </p>
        </div>
      </section>

      {/* Investimento*/}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            <span className="text-gradient block">Investimento</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                letter: "a",
                desc: "Para fins de padronização e identificação da participação na 1ª Expedição, cada inscrito deverá adquirir diretamente da indústria contratada, as suas camisetas da 1ª Expedição, boné, badana, conforme modelo a ser apresentado, na quantidade mínima de uma peça ou quantas achar conveniente."
              },
              {
                letter: "b",
                desc: "Os adesivos que serão utilizados nos veículos, serão pagos diretamente ao fabricante, porém, serão retirados na organização da expedição no momento que integrar ao comboio."
              },
              {
                letter: "c",
                desc: "Cada inscrito arcará com todos os seus custos. A saber: manutenção preventiva e durante a viagem do seu veículo, combustível, lubrificantes, pneus, alimentação, hospedagens, seguros, medicamentos, despesas médicas, multas e todas as despesas relacionadas a viagem."
              }
            ].map((item) => (
              <div key={item.letter} className="border-l-4 border-green-400 pl-6 py-4">
                <span className="text-2xl font-black text-green-400 mr-3">{item.letter}.</span>
                <p className="text-zinc-300 leading-relaxed inline">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ação Social */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-14">
            Ação<span className="text-gradient"> Social</span>
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Em todas as cidades onde iremos parar no trajeto, visitaremos instituições que atuam com crianças dentro do escopo previsto no item 3. A escolha será feita previamente por meio de sugestões dos participantes da expedição e aprovadas pela maioria através de votação no WhatsApp, assim que forem definidas quais instituições a serem visitadas, será apresentado uma sugestão de apoio que podemos realizar, tais como: doações, brinquedos, apoio de carinho, incentivo nas redes sociais, entre outros.
          </p>
        </div>
      </section>

      {/* CRONOGRAMA ORGANIZACIONAL */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-14">
            Cronograma <span className="text-gradient"> Organizacional</span>
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed mb-14">
            A seguir apresentaremos o cronograma geral da 1ª Expedição, para que todos os interessados possam analisar, conhecer possíveis participantes, se planejar e tomar a decisão ou não, de participar. Esta 1ª Expedição será realizada em 04 fases e 5 etapas (rotas).
          </p>

          <div className="space-y-8">
            {[
              {
                phase: "Primeira Fase",
                title: "10 de Maio de 2026",
                desc: "Apresentação oficial das informações gerais, do roteiro preliminar e abertura oficial das inscrições. Formação do grupo de WhatsApp para troca de experiências e para conhecermos os possíveis expedicionários.",
              },
              {
                phase: "Segunda Fase",
                title: "01 de Junho de 2026",
                desc: "Apresentação do roteiro com as cidades a serem visitadas, para que em conjunto todos possam realizar pesquisas e contribuições visando a realização mais eficiente possível de VOLUNTURISMO, ações de CORPO a CORPO e se for o caso, ajustes de rota e definições democráticas de normas para o melhor convívio e êxito da 1ª EXPEDIÇÃO.",
              },
              {
                phase: "Terceira Fase",
                title: "01 de Julho de 2026",
                desc: "Apresentação a todos, das definições estabelecidas ao longo do mês de JUNHO por meio de debates e votações das NORMAS COMPLEMENTARES, DO ROTEIRO FINAL COM AS CIDADES, AÇÕES SOCIAIS, DE CORPO A CORPO E DESTINOS TURÍSTICOS A SEREM VISITADOS. O roteiro final deverá contemplar uma apresentação de distâncias, tempo de estadia, possíveis campings, hotéis e pontos de apoio.",
              },
              {
                phase: "Quarta Fase",
                title: "02 de Julho de 2026",
                desc: "A partir de agora é hora de preparar os carros, as bagagens e se aprontar para participar da MAIOR EXPEDIÇÃO de VOLUNTURISMO realizada no Brasil. E sim a MELHOR, pois VOCÊ que irá, estará participando para o OBJETIVO DA EXPEDIÇÃO SER ALCANÇADO COM SUCESSO.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card flex flex-col gap-3 p-8"
              >
                <span className="text-sm font-bold text-green-400/70 uppercase tracking-widest">
                  {item.phase}
                </span>
                <h3 className="text-2xl font-black text-green-400">
                  {item.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
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