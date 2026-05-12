# **🏛️ Barbearia Spazio | Hub de Triagem High-Ticket & Sovereign Aesthetic**

A **Barbearia Spazio** não é um site institucional de barbearia. É uma aplicação web de alto padrão arquitetada para funcionar como um **Hub de Triagem High-Ticket**, focada na venda de consultorias de Visagismo (ticket de R$ 800,00) e na filtragem do público-alvo.

Desenvolvido com foco absoluto em ancoragem de preço, performance móvel e imersão visual (*Cinematic Scroll*), o projeto eleva a percepção de valor da marca para os padrões de uma clínica de estética avançada.

## **📖 O Desafio de Negócios e a Estratégia**

A Spazio enfrentava um paradoxo de posicionamento: entregava um serviço premium de Visagismo (R$ 800\) pelo profissional Jonathan Keeper, mas a recepção digital do cliente era feita através de um agregador genérico (Linktree) que direcionava para o aplicativo de agendamento padrão (AppBarber), misturando o serviço premium com cortes comuns de R$ 70\.

**O Pivot Estratégico:** Substituir o AppBarber seria um erro operacional crítico, pois o sistema já gerencia assinaturas, fidelidade e estoque de produtos físicos. A solução foi construir uma "Recepção Digital de Luxo". O site em Next.js atua como um filtro:

1. **Isolamento VIP:** Educa o cliente sobre o Visagismo, ancora o preço alto e direciona o fluxo para um Concierge (WhatsApp) de alta conversão.  
2. **Roteamento Padrão:** Funciona como vitrine de luxo para os serviços comuns, redirecionando o cliente perfeitamente para o AppBarber, mantendo a operação da barbearia intacta.

## **🧠 Arquitetura Visual: The "Sovereign Aesthetic"**

Para fugir dos templates datados de "barbearias rústicas", implementamos uma arquitetura de design baseada em contrastes dramáticos:

* **Portal de Entrada:** Fundo escuro absoluto (\#050505) no Hero, criando impacto e foco exclusivo na tipografia minimalista.  
* **A Abordagem Clínica (Bento Grid):** Transição abrupta para um fundo "Gelo" claro (\#fafafa) na seção de serviços. A estética remete a clínicas de estética avançada, comunicando higiene, precisão cirúrgica e alto valor agregado.  
* **Psicologia de Ancoragem:** Exibição explícita apenas do ticket de R$ 800,00. Valores de serviços periféricos foram substituídos por copys de luxo (*"Valor sob avaliação"*, *"Mediante diagnóstico"*), elevando o valor percebido de todo o ecossistema Spazio.

## **⚙️ Engenharia de Performance e Resolução de Desafios**

O uso intenso de animações interativas exigiu refatorações profundas para garantir 60fps em dispositivos móveis (90% do tráfego do Instagram):

1. **Fuga do GPU Crash (Cinematic Hero):** A tentativa inicial de usar mask-image em um SVG escalonado 150x no scroll gerava falhas severas de renderização (telas pretas) no Safari e Android. **Solução:** Refatoração para um *Cinematic Clip-Path Reveal*, utilizando a propriedade CSS nativa clip-path: circle() controlada pelo GSAP ScrollTrigger, empurrando a animação de forma segura para a GPU.  
2. **Scroll Hijacking:** O componente de Antes/Depois (*Transformation Showcase*) utilizava um \<input type="range"\> invisível que sequestrava os eventos de toque da tela, travando o scroll do usuário. **Solução:** Remoção completa do input. A revelação do Antes/Depois foi estritamente mapeada à posição do scroll nativo em conjunto com o Lenis, eliminando a fricção e mantendo a rolagem fluida.  
3. **Smooth Scroll Global:** Integração nativa da biblioteca Lenis envelopada em um LenisProvider no nível do Layout, garantindo que o scrub: 1 das animações do GSAP opere sobre uma matriz matemática de rolagem perfeita, sem engasgos.

## **🛠️ Stack Tecnológico**

* **Framework:** Next.js 15 (App Router) \+ React 19  
* **Styling:** Tailwind CSS \+ Design Tokens Customizados  
* **Motion & Físicas:** GSAP (GreenSock) \+ ScrollTrigger  
* **Smooth Scroll:** Lenis  
* **Linguagem:** TypeScript estrito

## **💻 Como rodar localmente**

1. **Clone o repositório:**  
   git clone \[https://github.com/jefheee/barbearia-spazio.git\](https://github.com/jefheee/barbearia-spazio.git)  
   cd barbearia-spazio

2. **Instale as dependências:**  
   npm install

3. **Inicie o servidor de desenvolvimento:**  
   npm run dev

   *Acesse http://localhost:3000 para visualizar.*

## **🔮 Roadmap & Expansão**

* \[x\] Arquitetura de contraste Sovereign Aesthetic (Dark Hero to Light Bento).  
* \[x\] Refatoração do Hero para Clip-Path Reveal em 60fps.  
* \[x\] Componente ConciergeTrigger (Flutuante) ancorado para WhatsApp direto.  
* \[ \] **Fase 2 \- Agente Autônomo:** Substituir o roteamento do ConciergeTrigger por um webhook conectado ao **n8n**. A implementação injetará um Agente de IA com RAG para realizar a triagem inicial, responder dúvidas sobre o visagismo 24/7 e enviar o link correto do AppBarber automaticamente.
