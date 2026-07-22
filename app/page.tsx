"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "pt";

const content = {
  en: {
    nav: ["Work", "Experience", "About", "Contact"],
    eyebrow: "Senior Software Engineer · Portugal",
    headline: "Backend systems, modernisation & technical leadership.",
    intro: "I design, modernise and operate reliable Java platforms across public services, mobility, healthcare, telecommunications and data-intensive products.",
    explore: "Explore my work",
    facts: ["8+ years", "Java / Spring", "Based in Portugal"],
    profile: "Engineering profile",
    availability: "Open to the right challenge",
    focus: [
      ["Backend systems", "Designing dependable Java services, APIs and integrations for business-critical platforms."],
      ["Modernisation", "Moving legacy products forward through measured upgrades, refactoring and cleaner architecture."],
      ["Technical leadership", "Giving teams clarity through reviews, technical decisions, mentoring and delivery ownership."],
    ],
    signals: ["RELIABILITY", "QUALITY", "IMPACT", "OWNERSHIP"],
    workKicker: "Selected impact",
    workTitle: "Engineering work with real-world weight.",
    workIntro: "A career shaped by systems where identity, public services, clinical data and infrastructure have real operational consequences. Client-sensitive detail stays private; the engineering substance does not.",
    projects: [
      ["Public services", "Systems people rely on", "Built applications connected to Portuguese public-sector and mainframe services, translating complex registration flows and SOAP integrations into dependable software."],
      ["Mobility & identity", "Access at enterprise scale", "Developed identity, permission and application-management capabilities for a global automotive group, integrating external applications through a multilingual platform."],
      ["Clinical software", "Traceability by design", "Refactored service layers and delivered permissions, roles, validation and auditable clinical workflows, protected by BDD, TDD and traceable automated tests."],
      ["Infrastructure data", "From sensor data to decisions", "Worked on water-network analytics that processed operational data and supported predictive models for supply, wastewater and infrastructure performance."],
      ["Telecommunications", "Shared core, local realities", "Adapted recharge and mobile-data flows for operators in Brazil and the Middle East, combining production analysis, effort estimation and client-specific business rules."],
    ],
    experience: "Experience",
    experienceTitle: <>Built in production.<br /><em>Sharpened by change.</em></>,
    roles: [
      ["2022 — Now", "Team IT", "Senior Software Engineer", "Delivering and modernising Java platforms across telecommunications and other demanding client environments: recharge and data-plan flows, proprietary integrations, batch processing, platform upgrades, production analysis and effort estimation. Regularly supporting technical decisions, code reviews, team organisation and junior engineers."],
      ["2020 — 2022", "ITClinical", "Software Developer", "Built clinical-trial and pharmacovigilance functionality with Java, Spring, Struts and Hibernate, using Cucumber, BDD and TDD to protect critical paths and maintain meaningful coverage."],
      ["2019 — 2020", "Alter Solutions", "Software Developer", "Developed a Java identity and access platform for the automotive sector: SSO, permissions, application management, external integrations and multilingual content across a microservice environment."],
      ["2018 — 2019", "Atos · Baseform", "Software Developer", "Delivered public-administration integrations and water-infrastructure analytics with Java, SQL, SOAP and REST. Also helped establish a shared UI framework and supported a junior colleague."],
      ["2017 — 2018", "Li-no Design", "Web Developer", "Started professionally with interactive commerce and content-managed websites, building practical foundations across PHP, Symfony, JavaScript, HTML and CSS."],
      ["The through-line", "How I work", "Make the system better than I found it", "Understand the domain, reduce accidental complexity, test the important paths and leave a codebase that the next engineer can reason about."],
    ],
    toolkit: "Toolkit",
    toolkitTitle: "Deep backend foundations. Broad delivery context.",
    skillLabels: ["Core", "Data", "Quality", "Platforms", "Integration"],
    credentials: "Foundations",
    credentialsTitle: "Education, technical foundations and languages.",
    credentialsItems: [
      ["Higher education", "Computer Science studies", "Polytechnic of Leiria", "University studies in computer science that established the software-engineering foundation for a career developed primarily through production experience."],
      ["Technical qualification", "Networks & IT systems", "Polytechnic of Leiria · Completed 2013 · 16/20", "Completed a technological specialisation course in installation and maintenance of networks and information systems."],
      ["Languages", "Portuguese & English", "Native Portuguese · English C1", "Comfortable working, documenting and collaborating in both Portuguese- and English-speaking environments."],
      ["First end-to-end system", "Internship management", "School of Health · Polytechnic of Leiria · 2013", "Co-designed the data model and built a web interface to replace fragmented paper and spreadsheet workflows, including requirements discovery, prototyping, relational modelling and a user guide."],
    ],
    beyond: "Beyond the stack",
    quote: <>“Good engineering makes complexity <em>understandable</em> — then makes it useful.”</>,
    about: [
      "I’m a Portuguese backend engineer with more than eight years of experience building, maintaining and modernising software that has to work outside a demo environment.",
      "I’m at my best where engineering depth meets ownership: understanding a difficult domain, challenging weak assumptions, helping a team make a sound decision and carrying the solution through to production.",
      "My next step is a natural extension of that work: greater architecture responsibility while staying close enough to the code to keep decisions practical.",
    ],
    talk: "Let’s talk",
    contactTitle: "Have a difficult system that needs a clear path?",
    email: "Email me",
    connect: "Connect on LinkedIn",
    back: "Back to top",
  },
  pt: {
    nav: ["Trabalho", "Experiência", "Sobre", "Contacto"],
    eyebrow: "Engenheiro de Software Sénior · Portugal",
    headline: "Sistemas backend, modernização e liderança técnica.",
    intro: "Desenho, modernizo e mantenho plataformas Java fiáveis nos setores dos serviços públicos, mobilidade, saúde, telecomunicações e produtos intensivos em dados.",
    explore: "Conhecer o meu trabalho",
    facts: ["Mais de 8 anos", "Java / Spring", "Em Portugal"],
    profile: "Perfil de engenharia",
    availability: "Disponível para o desafio certo",
    focus: [
      ["Sistemas backend", "Desenho de serviços Java, APIs e integrações fiáveis para plataformas críticas para o negócio."],
      ["Modernização", "Evolução de produtos legacy através de atualizações ponderadas, refatoração e uma arquitetura mais limpa."],
      ["Liderança técnica", "Criação de clareza nas equipas através de revisões, decisões técnicas, mentoria e responsabilidade pela entrega."],
    ],
    signals: ["FIABILIDADE", "QUALIDADE", "IMPACTO", "RESPONSABILIDADE"],
    workKicker: "Impacto selecionado",
    workTitle: "Engenharia com peso no mundo real.",
    workIntro: "Uma carreira construída em sistemas onde identidade, serviços públicos, dados clínicos e infraestruturas têm consequências operacionais reais. Os detalhes sensíveis dos clientes permanecem privados; a substância técnica não.",
    projects: [
      ["Serviços públicos", "Sistemas de que as pessoas dependem", "Construção de aplicações ligadas a serviços públicos portugueses e sistemas mainframe, transformando fluxos de registo e integrações SOAP complexas em software fiável."],
      ["Mobilidade e identidade", "Acessos à escala empresarial", "Desenvolvimento de identidade, permissões e gestão de aplicações para um grupo automóvel global, integrando aplicações externas numa plataforma multilingue."],
      ["Software clínico", "Rastreabilidade desde a conceção", "Refatoração das camadas de serviço e desenvolvimento de permissões, perfis, validações e fluxos clínicos auditáveis, protegidos por BDD, TDD e testes automatizados rastreáveis."],
      ["Dados de infraestruturas", "Dos sensores às decisões", "Trabalho em análise de redes de água, processando dados operacionais e apoiando modelos preditivos para abastecimento, águas residuais e desempenho das infraestruturas."],
      ["Telecomunicações", "Núcleo comum, realidades locais", "Adaptação de fluxos de carregamentos e planos de dados para operadores no Brasil e no Médio Oriente, combinando análise de produção, estimativas de esforço e regras de negócio específicas de cada cliente."],
    ],
    experience: "Experiência",
    experienceTitle: <>Construído em produção.<br /><em>Aperfeiçoado pela mudança.</em></>,
    roles: [
      ["2022 — Presente", "Team IT", "Engenheiro de Software Sénior", "Desenvolvimento e modernização de plataformas Java em telecomunicações e noutros ambientes exigentes: fluxos de carregamentos e planos de dados, integrações proprietárias, processamento batch, atualizações de plataforma, análise de produção e estimativas de esforço. Apoio regular a decisões técnicas, revisões de código, organização da equipa e engenheiros juniores."],
      ["2020 — 2022", "ITClinical", "Programador de Software", "Desenvolvimento de funcionalidades de ensaios clínicos e farmacovigilância com Java, Spring, Struts e Hibernate, recorrendo a Cucumber, BDD e TDD para proteger os fluxos críticos."],
      ["2019 — 2020", "Alter Solutions", "Programador de Software", "Desenvolvimento de uma plataforma Java de identidade e acessos para o setor automóvel: SSO, permissões, gestão de aplicações, integrações externas e conteúdos multilingues num ambiente de microsserviços."],
      ["2018 — 2019", "Atos · Baseform", "Programador de Software", "Entrega de integrações para a administração pública e análise de infraestruturas de água com Java, SQL, SOAP e REST. Contributo para um framework visual comum e acompanhamento de um colega júnior."],
      ["2017 — 2018", "Li-no Design", "Programador Web", "Início profissional com comércio interativo e sites geridos por CMS, criando bases práticas em PHP, Symfony, JavaScript, HTML e CSS."],
      ["O fio condutor", "Como trabalho", "Deixar o sistema melhor do que o encontrei", "Compreender o domínio, reduzir a complexidade acidental, testar os caminhos importantes e deixar uma base de código que o próximo engenheiro consiga compreender."],
    ],
    toolkit: "Tecnologias",
    toolkitTitle: "Bases sólidas de backend. Contexto alargado de entrega.",
    skillLabels: ["Base", "Dados", "Qualidade", "Plataformas", "Integração"],
    credentials: "Formação",
    credentialsTitle: "Formação, bases técnicas e idiomas.",
    credentialsItems: [
      ["Ensino superior", "Estudos em Engenharia Informática", "Politécnico de Leiria", "Formação universitária em engenharia informática que estabeleceu as bases de software para uma carreira desenvolvida sobretudo através de experiência em produção."],
      ["Qualificação técnica", "Redes e sistemas informáticos", "Politécnico de Leiria · Concluído em 2013 · 16/20", "Curso de especialização tecnológica concluído em instalação e manutenção de redes e sistemas informáticos."],
      ["Idiomas", "Português e inglês", "Português nativo · Inglês C1", "Experiência a trabalhar, documentar e colaborar em contextos profissionais tanto em português como em inglês."],
      ["Primeiro sistema completo", "Gestão de estágios", "Escola Superior de Saúde · Politécnico de Leiria · 2013", "Codesenho do modelo de dados e construção de uma interface web para substituir processos dispersos em papel e folhas de cálculo, incluindo levantamento de requisitos, prototipagem, modelação relacional e manual de utilizador."],
    ],
    beyond: "Para além da tecnologia",
    quote: <>“Boa engenharia torna a complexidade <em>compreensível</em> — e depois torna-a útil.”</>,
    about: [
      "Sou um engenheiro de backend português com mais de oito anos de experiência a construir, manter e modernizar software que tem de funcionar fora de um ambiente de demonstração.",
      "É na combinação entre profundidade técnica e responsabilidade que trabalho melhor: compreender um domínio difícil, questionar pressupostos frágeis, ajudar a equipa a tomar uma decisão sólida e acompanhar a solução até produção.",
      "O meu próximo passo é uma extensão natural desse trabalho: assumir maior responsabilidade de arquitetura, mantendo proximidade suficiente ao código para que as decisões continuem práticas.",
    ],
    talk: "Vamos falar",
    contactTitle: "Tem um sistema difícil que precisa de um caminho claro?",
    email: "Enviar email",
    connect: "Contactar no LinkedIn",
    back: "Voltar ao início",
  },
} as const;

const projectTags = [
  ["Java", "Spring", "Oracle", "SOAP", "Mainframe"],
  ["Java", "JSF", "Spring Boot", "Microservices", "AWS"],
  ["Java", "Struts2", "Hibernate", "BDD", "Cucumber"],
  ["Java", "PL/SQL", "REST", "JavaScript", "Analytics"],
  ["Java", "Spring Batch", "Keycloak", "Camel K", "IBM MQ"],
];

const skillGroups = [
  ["Java 8–21", "Spring Boot", "Spring Framework", "Spring Batch", "REST APIs", "Microservices"],
  ["JPA / Hibernate", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Lucene"],
  ["JUnit", "Mockito", "TDD / BDD", "Cucumber", "Code review", "Clean code"],
  ["Docker", "Kubernetes", "Jenkins", "Keycloak", "Maven", "Git", "Linux", "Azure", "AWS"],
  ["SOAP", "JSP", "JSF / PrimeFaces", "Struts2", "Apache Camel / Camel K", "IBM MQ", "JavaScript"],
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = content[locale];

  useEffect(() => {
    const preferred = window.localStorage.getItem("cv-locale") as Locale | null;
    const initial = preferred ?? (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
    const frame = window.requestAnimationFrame(() => setLocale(initial));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en";
    window.localStorage.setItem("cv-locale", locale);
  }, [locale]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Eduardo Carvalho, home">EC<span>.</span></a>
        <nav aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
          <a href="#work">{copy.nav[0]}</a><a href="#experience">{copy.nav[1]}</a><a href="#about">{copy.nav[2]}</a>
          <a className="nav-contact" href="#contact">{copy.nav[3]} <span>↗</span></a>
          <div className="locale-switch" aria-label={locale === "pt" ? "Escolher idioma" : "Choose language"}>
            <button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")} aria-pressed={locale === "en"}>EN</button>
            <span>/</span>
            <button className={locale === "pt" ? "active" : ""} onClick={() => setLocale("pt")} aria-pressed={locale === "pt"}>PT</button>
          </div>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> {copy.eyebrow}</p>
          <h1>Eduardo<br /><em>Carvalho</em></h1>
          <h2>{copy.headline}</h2>
          <p className="hero-intro">{copy.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">{copy.explore} <span>↓</span></a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/eduardo-carvalho-399238b6/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
          <div className="quick-facts" aria-label="Quick facts"><span>{copy.facts[0]}</span><i /><span>{copy.facts[1]}</span><i /><span>{copy.facts[2]}</span></div>
        </div>
        <aside className="focus-panel">
          <div className="panel-heading"><span>{copy.profile}</span><span className="available"><i /> {copy.availability}</span></div>
          <div className="focus-list">{copy.focus.map((area, index) => <article key={area[0]}><span className="focus-number">0{index + 1}</span><div><h3>{area[0]}</h3><p>{area[1]}</p></div><span className="focus-arrow">↗</span></article>)}</div>
          <div className="panel-geometry" aria-hidden="true"><b /><b /><b /></div>
        </aside>
      </section>

      <div className="signal-bar" aria-hidden="true">{copy.signals.map((signal, index) => <span key={signal}>{String(index + 1).padStart(2, "0")} / {signal}{index < 3 && <i />}</span>)}</div>

      <section className="section work-section" id="work">
        <div className="section-heading"><p className="section-kicker">{copy.workKicker}</p><h2>{copy.workTitle}</h2><p>{copy.workIntro}</p></div>
        <div className="project-grid">{copy.projects.map((project, index) => <article className="project-card" key={project[1]}><div className="card-top"><span>0{index + 1}</span><span>{project[0]}</span></div><div className={`project-art art-0${index + 1}`} aria-hidden="true"><i /><i /><i /></div><h3>{project[1]}</h3><p>{project[2]}</p><ul>{projectTags[index].map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="experience-title"><p className="section-kicker">{copy.experience}</p><h2>{copy.experienceTitle}</h2></div>
        <div className="timeline">{copy.roles.map((role, index) => <article key={role[0]}><div className="timeline-date">{role[0]}</div><div className="timeline-content"><p className="timeline-company">{role[1]}</p><h3>{role[2]}</h3><p>{role[3]}</p></div><span className={`timeline-mark ${index === 2 ? "coral" : ""}`}>●</span></article>)}</div>
      </section>

      <section className="section toolkit-section"><div className="section-heading compact"><p className="section-kicker">{copy.toolkit}</p><h2>{copy.toolkitTitle}</h2></div><div className="skills-grid">{skillGroups.map((skills, index) => <article key={copy.skillLabels[index]}><div className="skill-label"><span>0{index + 1}</span>{copy.skillLabels[index]}</div><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>

      <section className="section credentials-section">
        <div className="section-heading compact"><p className="section-kicker">{copy.credentials}</p><h2>{copy.credentialsTitle}</h2></div>
        <div className="credentials-grid">{copy.credentialsItems.map((item, index) => <article key={item[0]}><span className="credential-number">0{index + 1}</span><p>{item[0]}</p><h3>{item[1]}</h3><strong>{item[2]}</strong><div>{item[3]}</div></article>)}</div>
      </section>

      <section className="section about-section" id="about"><div className="about-statement"><p className="section-kicker">{copy.beyond}</p><blockquote>{copy.quote}</blockquote></div><div className="about-copy">{copy.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-shape" aria-hidden="true"><i /><i /></div><p className="section-kicker">{copy.talk}</p><h2>{copy.contactTitle}</h2><div className="contact-actions"><a className="button button-light" href="mailto:eduardo.fb.carvalho.10@gmail.com">{copy.email} <span>↗</span></a><a className="text-link" href="https://www.linkedin.com/in/eduardo-carvalho-399238b6/" target="_blank" rel="noreferrer">{copy.connect} <span>↗</span></a></div></section>

      <footer><span>Eduardo Carvalho</span><span>{copy.eyebrow}</span><a href="#top">{copy.back} ↑</a></footer>
    </main>
  );
}
