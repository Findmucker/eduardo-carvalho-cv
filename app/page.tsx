"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "pt";

const content = {
  en: {
    nav: ["Work", "Experience", "About", "Contact"],
    eyebrow: "Senior Software Engineer · Portugal",
    headline: "Backend systems, modernisation & technical leadership.",
    intro: "I build and evolve reliable Java platforms across public services, mobility, healthcare and data-intensive products.",
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
    workIntro: "Representative domains from consultancy and product work. Client-sensitive detail stays private; the engineering substance does not.",
    projects: [
      ["Public services", "Systems people rely on", "Built and evolved applications connected to Portuguese public-sector services, turning complex rules and integrations into dependable software."],
      ["Mobility & identity", "Secure platform evolution", "Contributed to identity and access tooling in the automotive space, combining new feature delivery with production analysis and platform upgrades."],
      ["Healthcare & data", "Complex domains, clear systems", "Delivered software across healthcare, clinical-trial and infrastructure analytics contexts where traceability, data quality and reliability matter."],
    ],
    experience: "Experience",
    experienceTitle: <>Built in production.<br /><em>Sharpened by change.</em></>,
    roles: [
      ["2022 — Now", "Team IT", "Senior Software Engineer", "Feature delivery, architecture decisions, platform migrations and production problem-solving across demanding client environments. Regularly supporting team organisation, reviews and junior engineers."],
      ["2018 — 2022", "Consulting & product teams", "Software Engineer", "Backend development across public administration, mobility, telecommunications, healthcare and analytics. Progressed from feature implementation to owning integrations, technical decisions and complete delivery streams."],
      ["The through-line", "How I work", "Make the system better than I found it", "Understand the domain, reduce accidental complexity, test the important paths and leave a codebase that the next engineer can reason about."],
    ],
    toolkit: "Toolkit",
    toolkitTitle: "Deep backend foundations. Broad delivery context.",
    skillLabels: ["Core", "Data", "Quality", "Delivery"],
    credentials: "Foundations",
    credentialsTitle: "Education and languages.",
    credentialsItems: [
      ["Education", "Computer Science", "Polytechnic of Leiria", "Academic foundation in software engineering, preceded by technical studies in information systems installation and maintenance."],
      ["Languages", "Portuguese & English", "Native Portuguese · Advanced English", "Comfortable working, documenting and collaborating in both Portuguese and English-speaking environments."],
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
    intro: "Desenvolvo e evoluo plataformas Java fiáveis nos setores dos serviços públicos, mobilidade, saúde e produtos intensivos em dados.",
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
    workIntro: "Domínios representativos do meu trabalho em consultoria e produto. Os detalhes sensíveis dos clientes permanecem privados; a substância técnica não.",
    projects: [
      ["Serviços públicos", "Sistemas de que as pessoas dependem", "Construção e evolução de aplicações ligadas a serviços públicos portugueses, transformando regras e integrações complexas em software fiável."],
      ["Mobilidade e identidade", "Evolução segura de plataformas", "Contributo para ferramentas de identidade e acessos no setor automóvel, conciliando novas funcionalidades com análise de produção e atualização de plataformas."],
      ["Saúde e dados", "Domínios complexos, sistemas claros", "Entrega de software nos contextos da saúde, ensaios clínicos e análise de infraestruturas, onde a rastreabilidade, a qualidade dos dados e a fiabilidade são essenciais."],
    ],
    experience: "Experiência",
    experienceTitle: <>Construído em produção.<br /><em>Aperfeiçoado pela mudança.</em></>,
    roles: [
      ["2022 — Presente", "Team IT", "Engenheiro de Software Sénior", "Desenvolvimento de funcionalidades, decisões de arquitetura, migrações de plataformas e resolução de problemas em produção em ambientes exigentes. Apoio regular à organização da equipa, revisões de código e engenheiros juniores."],
      ["2018 — 2022", "Equipas de consultoria e produto", "Engenheiro de Software", "Desenvolvimento backend nos setores da administração pública, mobilidade, telecomunicações, saúde e análise de dados. Evolução da implementação de funcionalidades para a responsabilidade por integrações, decisões técnicas e ciclos completos de entrega."],
      ["O fio condutor", "Como trabalho", "Deixar o sistema melhor do que o encontrei", "Compreender o domínio, reduzir a complexidade acidental, testar os caminhos importantes e deixar uma base de código que o próximo engenheiro consiga compreender."],
    ],
    toolkit: "Tecnologias",
    toolkitTitle: "Bases sólidas de backend. Contexto alargado de entrega.",
    skillLabels: ["Base", "Dados", "Qualidade", "Entrega"],
    credentials: "Formação",
    credentialsTitle: "Educação e idiomas.",
    credentialsItems: [
      ["Educação", "Engenharia Informática", "Politécnico de Leiria", "Formação académica em engenharia de software, antecedida por estudos técnicos em instalação e manutenção de sistemas informáticos."],
      ["Idiomas", "Português e inglês", "Português nativo · Inglês avançado", "Experiência a trabalhar, documentar e colaborar em contextos profissionais tanto em português como em inglês."],
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
  ["Java", "Spring", "JPA", "Oracle", "Integrations"],
  ["Java", "Spring Boot", "Microservices", "REST", "Testing"],
  ["Java", "PostgreSQL", "Docker", "Azure", "XLSX"],
];

const skillGroups = [
  ["Java 8–21", "Spring Boot", "Spring Framework", "REST APIs", "Microservices"],
  ["JPA / Hibernate", "Oracle", "PostgreSQL", "MySQL", "MongoDB", "Lucene"],
  ["JUnit", "Mockito", "TDD / BDD", "Cucumber", "Code review", "Clean code"],
  ["Docker", "Kubernetes", "Jenkins", "Maven", "Git", "Linux", "Azure"],
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
