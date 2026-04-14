/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const header = document.getElementById('header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('bg-bg-dark', 'border-b', 'border-border-accent');
        header?.classList.remove('py-4');
        header?.classList.add('py-2');
      } else {
        header?.classList.remove('bg-bg-dark', 'border-b', 'border-border-accent');
        header?.classList.add('py-4');
        header?.classList.remove('py-2');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-accent selection:text-black">
      {/* Visual Accent from Design HTML */}
      <div className="fixed bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_bottom_right,rgba(197,160,89,0.08),transparent)] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 py-4" id="header">
        <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
          <a href="#" className="font-serif text-[28px] tracking-[4px] uppercase text-accent font-normal">
            Spazio
          </a>
          <nav className="hidden md:flex gap-[30px]">
            <a href="#visagismo" className="text-[12px] uppercase tracking-[2px] text-text-secondary hover:text-accent transition-colors">Visagismo</a>
            <a href="#diferenciais" className="text-[12px] uppercase tracking-[2px] text-text-secondary hover:text-accent transition-colors">A Experiência</a>
            <a href="#depoimentos" className="text-[12px] uppercase tracking-[2px] text-text-secondary hover:text-accent transition-colors">Depoimentos</a>
            <a href="#localizacao" className="text-[12px] uppercase tracking-[2px] text-text-secondary hover:text-accent transition-colors">Localização</a>
          </nav>
          <a href="https://wa.me/5548991469518" target="_blank" rel="noreferrer" className="hidden md:inline-block py-[18px] px-[40px] bg-accent text-black font-bold uppercase text-[13px] tracking-[2px] hover:bg-opacity-90 transition-all">
            Agendar Horário
          </a>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-accent focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" alt="Barbearia Spazio Ambiente" className="w-full h-full object-cover object-center opacity-20 scale-105" id="hero-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">
          <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[20px] block">
            Experiência & Tradição
          </span>
          <h1 className="font-serif text-5xl md:text-[82px] font-normal leading-[0.9] mb-[30px] italic">
            Barbearia <br />
            de Classe.
          </h1>
          <p className="text-text-secondary text-[16px] leading-[1.6] max-w-[400px] mb-[40px]">
            Localizada no coração da Pedra Branca em Palhoça, a Spazio oferece mais que um corte, um ritual de cuidado masculino exclusivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
            <a href="https://wa.me/5548991469518" target="_blank" rel="noreferrer" className="inline-block py-[18px] px-[40px] bg-accent text-black font-bold uppercase text-[13px] tracking-[2px] w-fit hover:bg-opacity-90 transition-all">
              Agendar Horário
            </a>
          </div>
          
          <div className="mt-[40px] flex items-center gap-[15px]">
            <div className="w-[20px] h-[20px] border border-accent flex items-center justify-center text-[10px] text-accent font-serif">
              P
            </div>
            <div className="text-[13px] text-text-secondary">
              Passeio Pedra Branca, Palhoça — SC
            </div>
          </div>
        </div>
      </section>

      {/* Authority Marquee */}
      <div className="border-y border-border-accent bg-[#0a0a0a] py-4 overflow-hidden flex relative z-20">
        <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap flex items-center gap-16 px-8">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-[12px] uppercase tracking-[2px] text-text-secondary flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> +10 Mil Atendimentos
              </span>
              <span className="text-[12px] uppercase tracking-[2px] text-text-secondary flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 4.9/5 no Google
              </span>
              <span className="text-[12px] uppercase tracking-[2px] text-text-secondary flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Especialistas em Visagismo
              </span>
              <span className="text-[12px] uppercase tracking-[2px] text-text-secondary flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Produtos Premium
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Visagismo Section */}
      <section id="visagismo" className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 border border-border-accent translate-x-4 translate-y-4 -z-10"></div>
              <img src="https://images.unsplash.com/photo-1598908314732-07113901949e?q=80&w=2070&auto=format&fit=crop" alt="Visagismo Masculino" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="order-1 lg:order-2 md:pl-[60px] md:border-l border-border-accent">
              <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[20px] block">
                O Propósito
              </span>
              <h2 className="font-serif text-4xl md:text-[50px] font-normal leading-[1.1] italic mb-[30px]">
                Sim, a Spazio não é barata.<br />
                <span className="text-text-secondary">E não, não vamos mudar isso.</span>
              </h2>
              <div className="text-text-secondary text-[16px] leading-[1.6] space-y-6">
                <p>
                  Enquanto outras barbearias cortam o preço, nós cortamos o cabelo com profissionais que transformam cada detalhe, produtos importados e um ambiente pensado exclusivamente pra você.
                </p>
                <p>
                  Aqui você não paga pelo corte. <strong className="text-text-primary font-normal">Você paga pela experiência de sair diferente.</strong>
                </p>
                <p>
                  Parece outra pessoa e é exatamente esse o ponto. Quando o visagismo é feito com técnica, o rosto abre, a expressão melhora e a imagem passa a transmitir o que você sempre quis mostrar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais (Bento Grid) */}
      <section id="diferenciais" className="py-24 bg-[#0a0a0a] relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:pl-[60px] md:border-l border-border-accent">
            <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[20px] block">
              A Experiência
            </span>
            <h2 className="font-serif text-4xl md:text-[50px] font-normal leading-[1.1] italic mb-4">Um refúgio para o homem contemporâneo.</h2>
            <p className="text-text-secondary text-[16px] leading-[1.6] max-w-2xl">Exige excelência, pontualidade e um ambiente de alto padrão.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            
            {/* Item 1: Large (Visagismo) */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 border border-border-accent p-8 relative overflow-hidden group flex flex-col justify-end bg-bg-dark">
              <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" alt="Consultoria" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[15px] block">O Core</span>
                <h3 className="font-serif text-[28px] mb-3">Consultoria Visagista</h3>
                <p className="text-[14px] text-text-secondary uppercase tracking-[1px] leading-[1.6]">Avaliamos o formato do seu rosto, tipo de cabelo e estilo de vida para recomendar o corte que harmoniza com a sua identidade.</p>
              </div>
            </div>

            {/* Item 2: Medium (Ambiente) */}
            <div className="md:col-span-1 lg:col-span-2 row-span-1 border border-border-accent p-8 relative overflow-hidden flex flex-col justify-center bg-bg-dark">
              <div className="relative z-10">
                <h3 className="font-serif text-[24px] mb-3">Ambiente Sofisticado</h3>
                <p className="text-[12px] text-text-secondary uppercase tracking-[1px] leading-[1.6]">Espaço elegante, climatizado, com bebidas gourmet e decoração inspiradora para o seu momento de pausa.</p>
              </div>
            </div>

            {/* Item 3: Medium (Produtos) */}
            <div className="md:col-span-1 lg:col-span-1 row-span-1 border border-border-accent p-8 relative overflow-hidden flex flex-col justify-center bg-bg-dark">
              <div className="relative z-10">
                <h3 className="font-serif text-[20px] mb-3">Produtos Premium</h3>
                <p className="text-[12px] text-text-secondary uppercase tracking-[1px] mb-4">Trabalhamos exclusivamente com marcas renomadas.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] border border-border-accent px-2 py-1 text-accent uppercase tracking-[1px]">Keune</span>
                  <span className="text-[10px] border border-border-accent px-2 py-1 text-accent uppercase tracking-[1px]">B.urb</span>
                </div>
              </div>
            </div>

            {/* Item 4: Medium (Detalhes) */}
            <div className="md:col-span-2 lg:col-span-1 row-span-1 border border-border-accent p-8 relative overflow-hidden flex flex-col justify-center bg-bg-dark">
              <div className="relative z-10 text-center">
                <h3 className="font-serif text-[40px] text-accent mb-2 italic">100%</h3>
                <p className="text-[14px] text-text-primary uppercase tracking-[2px] mb-2">Respeito ao seu tempo</p>
                <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">Pontualidade britânica no seu agendamento.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section (Extracted from Design HTML) */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="md:pl-[60px] md:border-l border-border-accent flex flex-col justify-center max-w-3xl">
            <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[20px] block">
              Nossos Serviços
            </span>
            <h2 className="font-serif text-4xl md:text-[50px] font-normal leading-[1.1] italic mb-[40px]">O Ritual Spazio</h2>
            
            <div className="flex justify-between items-end mb-[25px] pb-[8px] border-b border-white/5">
                <div>
                    <h3 className="font-serif text-[20px] mb-1">Corte Executivo</h3>
                    <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">Tesoura ou Máquina + Lavagem</p>
                </div>
                <div className="font-serif text-accent text-[20px]">R$ 65</div>
            </div>

            <div className="flex justify-between items-end mb-[25px] pb-[8px] border-b border-white/5">
                <div>
                    <h3 className="font-serif text-[20px] mb-1">Barba & Toalha Quente</h3>
                    <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">Barboterapia com óleos essenciais</p>
                </div>
                <div className="font-serif text-accent text-[20px]">R$ 55</div>
            </div>

            <div className="flex justify-between items-end mb-[25px] pb-[8px] border-b border-white/5">
                <div>
                    <h3 className="font-serif text-[20px] mb-1">Combo Spazio</h3>
                    <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">Corte + Barba + Bebida Cortesia</p>
                </div>
                <div className="font-serif text-accent text-[20px]">R$ 110</div>
            </div>

            <div className="flex justify-between items-end mb-[25px] pb-[8px] border-b border-white/5">
                <div>
                    <h3 className="font-serif text-[20px] mb-1">Pigmentação</h3>
                    <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">Cobertura de fios brancos</p>
                </div>
                <div className="font-serif text-accent text-[20px]">R$ 40</div>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <h3 className="font-serif text-[20px] mb-1">Limpeza de Pele</h3>
                    <p className="text-[12px] text-text-secondary uppercase tracking-[1px]">Remoção de impurezas</p>
                </div>
                <div className="font-serif text-accent text-[20px]">R$ 35</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:pl-[60px] md:border-l border-border-accent">
            <div className="max-w-2xl">
              <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[20px] block">
                Prova Social
              </span>
              <h2 className="font-serif text-4xl md:text-[50px] font-normal leading-[1.1] italic mb-4">A palavra de quem já transformou a imagem.</h2>
              <p className="text-text-secondary text-[16px] leading-[1.6]">Mais de 250 avaliações 5 estrelas no Google.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="border border-border-accent p-8 flex flex-col justify-between bg-bg-dark">
              <p className="text-text-secondary text-[14px] leading-[1.8] italic mb-8">"O meu principal objetivo era ter a opinião de um visagista, para identificar um corte de cabelo que fizesse sentido pra mim. O Jonathan me passou muita segurança desde o início. Recomendo a todos os homens que buscam fortalecer ainda mais a sua autoestima."</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 border border-accent flex items-center justify-center font-serif text-accent">JA</div>
                <div>
                  <h4 className="font-serif text-[16px]">José Augusto Kuhn</h4>
                  <p className="text-[10px] text-text-secondary uppercase tracking-[1px]">Cliente Visagismo</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="border border-border-accent p-8 flex flex-col justify-between bg-bg-dark">
              <p className="text-text-secondary text-[14px] leading-[1.8] italic mb-8">"Pensa em um lugar TOP. Nunca gostei dos cortes que vinha fazendo a anos. Me explicaram como funciona a questão de perfil de rosto, me sugeriram um corte... hoje me sinto mais bonito, mais seguro e com a autoestima a mil."</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 border border-accent flex items-center justify-center font-serif text-accent">LV</div>
                <div>
                  <h4 className="font-serif text-[16px]">Leonardo Villanova</h4>
                  <p className="text-[10px] text-text-secondary uppercase tracking-[1px]">Cliente Mensal</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="border border-border-accent p-8 flex flex-col justify-between bg-bg-dark">
              <p className="text-text-secondary text-[14px] leading-[1.8] italic mb-8">"Já testei várias... barbearia VIP e outras... Faço questão de sair do centro de Floripa até a Pedra Branca todos os sábados. Nenhuma delas chega, nem de perto, na qualidade dos serviços da Spazio. Atendimento incrível!"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 border border-accent flex items-center justify-center font-serif text-accent">MP</div>
                <div>
                  <h4 className="font-serif text-[16px]">Marco Pelepenko</h4>
                  <p className="text-[10px] text-text-secondary uppercase tracking-[1px]">Cliente Fiel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <section id="localizacao" className="relative pt-24 pb-12 border-t border-border-accent z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="md:pl-[60px] md:border-l border-border-accent flex flex-col justify-center">
              <span className="text-[12px] uppercase tracking-[5px] text-accent mb-[20px] block">
                Agendamento
              </span>
              <h2 className="font-serif text-4xl md:text-[50px] font-normal leading-[1.1] italic mb-6">Pronto para a sua melhor versão?</h2>
              <p className="text-text-secondary text-[16px] leading-[1.6] mb-10 max-w-md">Agende seu horário e descubra o que um corte alinhado à sua identidade pode fazer pela sua presença.</p>
              
              <a href="https://wa.me/5548991469518" target="_blank" rel="noreferrer" className="inline-block py-[18px] px-[40px] bg-accent text-black font-bold uppercase text-[13px] tracking-[2px] w-fit hover:bg-opacity-90 transition-all">
                Agendar Agora
              </a>
            </div>
            
            <div className="border border-border-accent p-10 bg-[#0a0a0a]">
              <h3 className="font-serif text-[24px] mb-8 border-b border-white/5 pb-4 italic">Informações</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-[20px] h-[20px] border border-accent flex items-center justify-center text-[10px] text-accent font-serif shrink-0 mt-1">
                    P
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] uppercase tracking-[2px] text-text-primary mb-2">Endereço</h4>
                    <p className="text-text-secondary text-[14px] leading-[1.6]">Av. Pedra Branca, 303 - Sala 03<br/>Pedra Branca, Palhoça - SC, 88137-270</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-[20px] h-[20px] border border-accent flex items-center justify-center text-[10px] text-accent font-serif shrink-0 mt-1">
                    H
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] uppercase tracking-[2px] text-text-primary mb-2">Horários</h4>
                    <p className="text-text-secondary text-[14px] leading-[1.6]">Seg a Sex: 10:00 - 21:00<br/>Sábado: 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-[20px] h-[20px] border border-accent flex items-center justify-center text-[10px] text-accent font-serif shrink-0 mt-1">
                    C
                  </div>
                  <div>
                    <h4 className="font-sans text-[14px] uppercase tracking-[2px] text-text-primary mb-2">Contato</h4>
                    <p className="text-text-secondary text-[14px] leading-[1.6]">(48) 99146-9518</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[12px] text-text-secondary uppercase tracking-[1px]">
            <p>&copy; 2026 Barbearia Spazio. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://instagram.com/barbeariaspazio" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Instagram</a>
              <a href="https://allmylinks.com/barbeariaspazio" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Links</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
