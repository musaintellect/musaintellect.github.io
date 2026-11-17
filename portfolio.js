"use strict";

const portfolioTranslations = {
  pt: {
    pageTitle: "Portfólio | Musaintellect",
    pageDescription: "Portfólio da Musaintellect: dados de voz, recursos Português–Emakhuwa, pesquisa, trabalho de campo e produtos de software em Moçambique.",
    skip: "Saltar para o conteúdo",
    home: "Site principal",
    eyebrow: "MUSAINTELLECT / PORTFÓLIO",
    title: "Pesquisa, línguas e software.",
    intro: "Empresa moçambicana de pesquisa científica, dados e desenvolvimento de software. Experiência em recursos linguísticos e coordenação de projectos.",
    viewWork: "Ver trabalhos seleccionados",
    contactLink: "Fale connosco",
    companyLabel: "A empresa",
    companyLocation: "Sede",
    companySince: "Constituída em",
    companyEmail: "Contacto",
    mozambique: "Moçambique",
    collaborations: "Experiência e colaboração",
    workEyebrow: "01 / EXPERIÊNCIA SELECCIONADA",
    workTitle: "Projectos e âmbito de trabalho.",
    workIntro: "Experiência em dados de voz, tradução automática, investigação, trabalho de campo e aplicações web.",
    voiceCategory: "DADOS DE VOZ",
    voicePeriod: "5 Maio – 18 Julho 2025",
    voiceTitle: "Localização e recolha de dados de voz",
    voiceBody: "Localização de uma plataforma de dados de voz para Ekoti e Nyungwe.",
    voice1: "Preparação de conteúdos e recrutamento de participantes.",
    voice2: "Recolha de 10 horas de áudio por língua.",
    voice3: "Transcrição e organização dos dados recolhidos.",
    translationCategory: "RECURSOS LINGUÍSTICOS",
    translationPeriod: "Entregas em 2023–2024",
    translationTitle: "Dataset Português–Emakhuwa",
    translationBody: "Anotação, tradução e preparação de recursos para sistemas de tradução automática.",
    translation1: "Tradução e anotação de conteúdos.",
    translation2: "Preparação de um dataset Português–Emakhuwa.",
    translation3: "Organização de recursos para tradução automática.",
    fieldCategory: "PESQUISA E TRABALHO DE CAMPO",
    fieldPeriod: "Prazo contratual: 31 Agosto 2026",
    fieldTitle: "Pesquisa, tradução e coordenação",
    fieldBody: "Projecto MOZNLP-UP.",
    field1: "Planificação, coordenação e mobilização de recursos.",
    field2: "Logística e organização do trabalho de campo.",
    field3: "Organização de conteúdos e produção de documentação.",
    ntxuvaCategory: "DESENVOLVIMENTO DE SOFTWARE",
    ntxuvaMeta: "Three.js · Jogo no navegador",
    ntxuvaTitle: "Ntxuva — jogo de tabuleiro 3D",
    ntxuvaBody: "Versão digital em 3D do jogo tradicional moçambicano Ntxuva, desenvolvida para o navegador.",
    ntxuva1: "Tabuleiro interactivo 3D com Three.js.",
    ntxuva2: "Jogo contra o computador, prática e dois jogadores no mesmo dispositivo.",
    ntxuva3: "Tutorial interactivo e controlos por rato, toque e teclado.",
    mapaCategory: "CORPORA E TECNOLOGIA LINGUÍSTICA",
    mapaMeta: "Emakhuwa e Português",
    mapaTitle: "MAPA — Explorar o Emakhuwa",
    mapaBody: "Relatório interactivo e ferramentas de exploração de corpora, léxico e morfologia.",
    mapa1: "Visualização de estatísticas do corpus e listas de frequência.",
    mapa2: "Pesquisa de lemas com traduções e classes gramaticais.",
    mapa3: "Analisador morfológico para explorar a estrutura das palavras.",
    viewProject: "Ver projecto",
    productsEyebrow: "02 / PRODUTOS",
    productsTitle: "Produtos da Musaintellect.",
    catfricaBody: "Produto desenvolvido pela Musaintellect. Conheça a plataforma no site da Catfrica.",
    catfricaCta: "Visitar a Catfrica",
    estivaBody: "Plataforma que liga clientes e transportadores em Moçambique para publicar cargas e receber propostas de transporte.",
    estivaCta: "Solicitar demonstração",
    newTab: " (abre num novo separador)",
    contactEyebrow: "CONTACTO",
    contactTitle: "Fale-nos do seu projecto.",
    contactBody: "Partilhe o objectivo, o tipo de serviço, as línguas envolvidas e os prazos para avaliarmos o seu pedido.",
    print: "Imprimir / Guardar PDF"
  },
  en: {
    pageTitle: "Portfolio | Musaintellect",
    pageDescription: "Musaintellect portfolio: voice data, Portuguese–Emakhuwa resources, research, fieldwork and software products in Mozambique.",
    skip: "Skip to content",
    home: "Main website",
    eyebrow: "MUSAINTELLECT / PORTFOLIO",
    title: "Research, languages and software.",
    intro: "A Mozambican scientific research, data and software development company. Experience in language resources and project coordination.",
    viewWork: "View selected work",
    contactLink: "Contact us",
    companyLabel: "The company",
    companyLocation: "Based in",
    companySince: "Established",
    companyEmail: "Contact",
    mozambique: "Mozambique",
    collaborations: "Experience and collaboration",
    workEyebrow: "01 / SELECTED EXPERIENCE",
    workTitle: "Projects and scope of work.",
    workIntro: "Experience in voice data, machine translation, research, fieldwork and web applications.",
    voiceCategory: "VOICE DATA",
    voicePeriod: "5 May – 18 July 2025",
    voiceTitle: "Localisation and voice data collection",
    voiceBody: "Localisation of a voice data platform for Ekoti and Nyungwe.",
    voice1: "Content preparation and participant recruitment.",
    voice2: "Collection of 10 hours of audio per language.",
    voice3: "Transcription and organisation of the collected data.",
    translationCategory: "LANGUAGE RESOURCES",
    translationPeriod: "Deliveries in 2023–2024",
    translationTitle: "Portuguese–Emakhuwa dataset",
    translationBody: "Annotation, translation and resource preparation for machine translation systems.",
    translation1: "Content translation and annotation.",
    translation2: "Preparation of a Portuguese–Emakhuwa dataset.",
    translation3: "Organisation of resources for machine translation.",
    fieldCategory: "RESEARCH AND FIELDWORK",
    fieldPeriod: "Contract deadline: 31 August 2026",
    fieldTitle: "Research, translation and coordination",
    fieldBody: "MOZNLP-UP project.",
    field1: "Planning, coordination and resource mobilisation.",
    field2: "Logistics and fieldwork organisation.",
    field3: "Content organisation and documentation.",
    ntxuvaCategory: "SOFTWARE DEVELOPMENT",
    ntxuvaMeta: "Three.js · Browser game",
    ntxuvaTitle: "Ntxuva — 3D board game",
    ntxuvaBody: "A browser-based 3D adaptation of Mozambique’s traditional Ntxuva board game.",
    ntxuva1: "Interactive 3D board built with Three.js.",
    ntxuva2: "Computer opponents, practice and two players on the same device.",
    ntxuva3: "Interactive tutorial and mouse, touch and keyboard controls.",
    mapaCategory: "CORPORA AND LANGUAGE TECHNOLOGY",
    mapaMeta: "Emakhuwa and Portuguese",
    mapaTitle: "MAPA — Explore Emakhuwa",
    mapaBody: "An interactive report and tools for exploring corpora, vocabulary and morphology.",
    mapa1: "Corpus statistics and frequency-list visualisation.",
    mapa2: "Lemma search with translations and word classes.",
    mapa3: "A morphological analyser for exploring word structure.",
    viewProject: "View project",
    productsEyebrow: "02 / PRODUCTS",
    productsTitle: "Musaintellect products.",
    catfricaBody: "A product developed by Musaintellect. Explore the platform on the Catfrica website.",
    catfricaCta: "Visit Catfrica",
    estivaBody: "A platform connecting customers and carriers in Mozambique to publish loads and receive transport offers.",
    estivaCta: "Request demo",
    newTab: " (opens in a new tab)",
    contactEyebrow: "CONTACT",
    contactTitle: "Tell us about your project.",
    contactBody: "Share your objective, the service you need, the languages involved and your timeline so we can assess your request.",
    print: "Print / Save as PDF"
  }
};

function setPortfolioLanguage(language, updateUrl = false) {
  if (!Object.hasOwn(portfolioTranslations, language)) return;
  const text = portfolioTranslations[language];
  document.documentElement.lang = language === "pt" ? "pt-MZ" : "en";
  document.title = text.pageTitle;
  document.querySelector('meta[name="description"]').content = text.pageDescription;
  document.querySelector('meta[property="og:title"]').content = text.pageTitle;
  document.querySelector('meta[property="og:description"]').content = text.pageDescription;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  document.querySelectorAll("[data-home-link]").forEach((link) => {
    link.setAttribute("href", `./index.html?lang=${language}`);
  });
  try {
    localStorage.setItem("musaintellect-language", language);
  } catch {
    // Language controls remain usable when browser storage is blocked.
  }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    try {
      history.replaceState(null, "", url);
    } catch {
      // Local file previews can restrict history updates.
    }
  }
}

function initialPortfolioLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (Object.hasOwn(portfolioTranslations, requested)) return requested;
  try {
    const stored = localStorage.getItem("musaintellect-language");
    if (Object.hasOwn(portfolioTranslations, stored)) return stored;
  } catch {
    // Portuguese is the fallback without a saved preference.
  }
  return "pt";
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setPortfolioLanguage(button.dataset.language, true));
});
const printButton = document.querySelector(".work-print");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());
document.querySelector("#year").textContent = String(new Date().getFullYear());
setPortfolioLanguage(initialPortfolioLanguage());
