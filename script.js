"use strict";

const translations = {
  pt: {
    pageTitle: "Musaintellect — Pesquisa, dados e software.",
    pageDescription: "Musaintellect: pesquisa, ciência de dados, anotação, línguas moçambicanas e desenvolvimento de software. De Moçambique para o mundo.",
    socialDescription: "Pesquisa, análise de dados e desenvolvimento de software em Moçambique.",
    skip: "Saltar para o conteúdo",
    navLabel: "Navegação principal",
    navServices: "Serviços",
    navLanguages: "Línguas & IA",
    navApproach: "Como trabalhamos",
    navAbout: "Sobre nós",
    navProducts: "Produtos",
    navContact: "Vamos conversar",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    heroEyebrow: "MUSAINTELLECT · MOÇAMBIQUE",
    heroLine1: "Pesquisa, dados",
    heroLine2: "e software.",
    heroDescription: "Prestamos serviços de pesquisa científica, análise e anotação de dados, desenvolvimento de software e tradução em línguas moçambicanas.",
    heroCta: "Conheça os nossos serviços",
    heroSecondary: "Fale-nos do seu projecto",
    heroImageAlt: "Ilustração de programadores com camisolas da Musaintellect a ajudar uma comerciante de capulana e lenço a usar um tablet no mercado.",
    servicesEyebrow: "01 / SERVIÇOS",
    servicesTitle1: "Serviços para",
    servicesTitle2: "a sua organização.",
    servicesIntro: "Apoiamos projectos de pesquisa, tratamento de dados e desenvolvimento tecnológico. O âmbito de cada trabalho é definido em conjunto com o cliente.",
    filterLabel: "Filtrar serviços",
    filterAll: "Todas as soluções",
    filterData: "Pesquisa & dados",
    filterLanguage: "Línguas & IA",
    filterTech: "Software & TI",
    filterStatus: "{count} serviços apresentados.",
    serviceCta: "Consultar este serviço",
    service1Title: "Pesquisa & ciência de dados",
    service1Body: "Pesquisa científica, análise estatística e visualização de dados para estudos e decisões nas organizações.",
    service2Title: "Recolha & anotação de dados",
    service2Body: "Recolha, digitalização, classificação e anotação de texto, áudio e imagem, de acordo com os requisitos do projecto.",
    service3Title: "Línguas & inteligência artificial",
    service3Body: "Tradução, interpretação, transcrição e preparação de recursos linguísticos em línguas moçambicanas.",
    service4Title: "Software & automação",
    service4Body: "Desenvolvimento de software, análise de sistemas e automação de processos para as necessidades da sua organização.",
    service5Title: "Infra-estrutura & suporte TI",
    service5Body: "Montagem e manutenção de redes, assistência informática, auditoria, backup e recuperação de dados.",
    service6Title: "Formação & atendimento",
    service6Body: "Formação em tecnologia e serviços de atendimento ao cliente em línguas moçambicanas.",
    languagesEyebrow: "02 / LÍNGUAS MOÇAMBICANAS",
    languagesTitle1: "Serviços em",
    languagesTitle2: "línguas moçambicanas.",
    languagesBody: "Trabalhamos com tradução, interpretação, transcrição e anotação linguística para projectos de pesquisa, tecnologia e atendimento ao cliente.",
    languagesCta: "Consultar disponibilidade",
    languageDetailsTitle: "Como podemos ajudar",
    languageAvailability: "Confirmamos a língua, a variante e a disponibilidade durante a avaliação de cada pedido.",
    languageValue1: "Tradução & interpretação",
    languageValue2: "Transcrição de áudio",
    languageValue3: "Anotação linguística",
    languageValue4: "Atendimento multilingue",
    approachEyebrow: "03 / COMO TRABALHAMOS",
    approachTitle1: "Do pedido",
    approachTitle2: "à entrega.",
    approachIntro: "Definimos consigo os objectivos, os prazos e os critérios de qualidade antes de iniciar o trabalho.",
    step1Title: "Compreender",
    step1Body: "Alinhamos os objectivos, o contexto e os requisitos do seu projecto.",
    step2Title: "Desenhar",
    step2Body: "Definimos a metodologia, os critérios de qualidade e o plano de trabalho.",
    step3Title: "Desenvolver",
    step3Body: "Recolhemos, analisamos ou desenvolvemos, com acompanhamento ao longo do processo.",
    step4Title: "Entregar & evoluir",
    step4Body: "Validamos os resultados e partilhamos o conhecimento para os próximos passos.",
    aboutEyebrow: "04 / SOBRE A MUSAINTELLECT",
    aboutTitle1: "Uma empresa",
    aboutTitle2: "moçambicana.",
    aboutBody1: "Somos uma empresa moçambicana de pesquisa, análise de dados e soluções tecnológicas, sediada em Marracuene, na província de Maputo.",
    aboutBody2: "Constituída em 2023, a Musaintellect presta serviços de pesquisa, informática e línguas moçambicanas. Avaliamos cada pedido para propor o trabalho adequado às necessidades do cliente.",
    aboutFact1: "Ano de constituição",
    aboutFact2Value: "Moçambique",
    aboutFact2: "Sede em Marracuene, província de Maputo.",
    productEyebrow: "05 / OS NOSSOS PRODUTOS",
    productTitle: "Conheça a Catfrica.",
    productDescription: "A Catfrica é um produto desenvolvido pela Musaintellect. Visite o site para conhecer o projecto.",
    productCta: "Visitar a Catfrica",
    productLabel: "UM PRODUTO MUSAINTELLECT",
    newTab: " (abre num novo separador)",
    faqEyebrow: "BOM SABER",
    faqTitle: "Vamos esclarecer.",
    faqIntro: "Algumas respostas antes da nossa primeira conversa.",
    faq1Question: "Que tipos de projectos podemos desenvolver em conjunto?",
    faq1Answer: "Podemos colaborar em pesquisa científica, análise de dados, recolha e anotação, serviços linguísticos, desenvolvimento de software, automação, infra-estrutura TI e formação. Partilhe o seu desafio para definirmos o âmbito adequado.",
    faq2Question: "Trabalham com línguas moçambicanas?",
    faq2Answer: "Os serviços linguísticos fazem parte da nossa actividade: tradução, interpretação, transcrição e atendimento. A disponibilidade para uma língua específica, a variante e o volume de trabalho são confirmados na avaliação de cada projecto.",
    faq3Question: "É possível colaborar à distância?",
    faq3Answer: "Sim. Conforme a natureza do projecto, podemos organizar a colaboração à distância. Actividades presenciais, recolha no terreno e requisitos de infra-estrutura são acordados durante a definição do trabalho.",
    faq4Question: "Como posso pedir uma proposta?",
    faq4Answer: "Escreva para info@musaintellect.co.mz ou prepare um email no formulário abaixo. Indique o objectivo, o tipo de serviço, os prazos e, se aplicável, as línguas e o volume de dados. Não inclua dados confidenciais no primeiro contacto.",
    contactEyebrow: "CONTACTO",
    contactTitle1: "Fale-nos do",
    contactTitle2: "seu projecto.",
    contactBody: "Indique o serviço de que precisa, os objectivos e os prazos. Para serviços linguísticos, indique também a língua e a variante.",
    contactLocation: "Marracuene, Maputo · Moçambique",
    formTitle: "Pedir informações",
    formName: "O seu nome",
    formEmail: "Email profissional",
    formService: "Em que podemos ajudar?",
    formMessage: "O seu projecto",
    formOther: "Outro / Vamos explorar",
    namePlaceholder: "Como se chama?",
    emailPlaceholder: "nome@empresa.com",
    messagePlaceholder: "Partilhe os seus objectivos, necessidades e prazos...",
    formNote: "Este formulário prepara um email na sua aplicação de correio. Não envia nem guarda os seus dados neste site.",
    formSubmit: "Preparar email",
    formStatus: "Foi pedido à sua aplicação de correio que abrisse um rascunho. Reveja-o e envie-o para concluir o contacto. Se não abrir, escreva directamente para info@musaintellect.co.mz.",
    emailSubject: "Pedido de contacto",
    footerTagline: "Pesquisa, dados e software. Marracuene, Moçambique.",
    backTop: "De volta ao topo",
    privacyLink: "Privacidade",
    privacyTitle: "A sua privacidade.",
    privacyBody1: "Este site estático não utiliza cookies, ferramentas de análise, fontes externas ou formulários com armazenamento num servidor. As suas preferências de idioma e visual podem ser guardadas apenas no armazenamento local do seu navegador.",
    privacyBody2: "O formulário de contacto abre a sua aplicação de email. Os dados só são enviados se decidir enviar esse email, através do seu fornecedor de correio. Para questões sobre o tratamento de correspondência, contacte info@musaintellect.co.mz.",
    privacyBody3: "O fornecedor de alojamento pode processar dados técnicos de acesso, como o endereço IP, de acordo com a sua própria política de privacidade.",
    closeDialog: "Fechar"
  },
  en: {
    pageTitle: "Musaintellect — Research, data and software.",
    pageDescription: "Musaintellect: research, data science, annotation, Mozambican languages and software development. From Mozambique to the world.",
    socialDescription: "Research, data analysis and software development in Mozambique.",
    skip: "Skip to content",
    navLabel: "Main navigation",
    navServices: "Services",
    navLanguages: "Languages & AI",
    navApproach: "Our approach",
    navAbout: "About us",
    navProducts: "Products",
    navContact: "Let's talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroEyebrow: "MUSAINTELLECT · MOZAMBIQUE",
    heroLine1: "Research, data",
    heroLine2: "and software.",
    heroDescription: "We provide scientific research, data analysis and annotation, software development and translation in Mozambican languages.",
    heroCta: "View our services",
    heroSecondary: "Tell us about your project",
    heroImageAlt: "Illustration of developers in Musaintellect T-shirts helping a market trader in a capulana and headscarf use a tablet at her stall.",
    servicesEyebrow: "01 / SERVICES",
    servicesTitle1: "Services for",
    servicesTitle2: "your organisation.",
    servicesIntro: "We support research, data processing and technology projects. The scope of each assignment is agreed with the client.",
    filterLabel: "Filter services",
    filterAll: "All solutions",
    filterData: "Research & data",
    filterLanguage: "Languages & AI",
    filterTech: "Software & IT",
    filterStatus: "{count} services displayed.",
    serviceCta: "Enquire about this service",
    service1Title: "Research & data science",
    service1Body: "Scientific research, statistical analysis and data visualisation for organisational studies and decision-making.",
    service2Title: "Data collection & annotation",
    service2Body: "Collection, digitisation, classification and annotation of text, audio and images, according to project requirements.",
    service3Title: "Languages & artificial intelligence",
    service3Body: "Translation, interpreting, transcription and preparation of language resources in Mozambican languages.",
    service4Title: "Software & automation",
    service4Body: "Software development, systems analysis and process automation for your organisation's needs.",
    service5Title: "IT infrastructure & support",
    service5Body: "Network installation and maintenance, IT support, auditing, backup and data recovery.",
    service6Title: "Training & customer support",
    service6Body: "Technology training and customer service in Mozambican languages.",
    languagesEyebrow: "02 / MOZAMBICAN LANGUAGES",
    languagesTitle1: "Services in",
    languagesTitle2: "Mozambican languages.",
    languagesBody: "We offer translation, interpreting, transcription and language annotation for research, technology and customer service projects.",
    languagesCta: "Check availability",
    languageDetailsTitle: "How we can help",
    languageAvailability: "We confirm the language, variety and availability when assessing each request.",
    languageValue1: "Translation & interpreting",
    languageValue2: "Audio transcription",
    languageValue3: "Language annotation",
    languageValue4: "Multilingual customer support",
    approachEyebrow: "03 / HOW WE WORK",
    approachTitle1: "From enquiry",
    approachTitle2: "to delivery.",
    approachIntro: "We agree on objectives, timelines and quality criteria with you before starting work.",
    step1Title: "Understand",
    step1Body: "We align on your project's objectives, context and requirements.",
    step2Title: "Design",
    step2Body: "We define the methodology, quality criteria and work plan.",
    step3Title: "Develop",
    step3Body: "We collect, analyse or build, keeping you involved throughout the process.",
    step4Title: "Deliver & evolve",
    step4Body: "We validate the results and share the knowledge to support your next steps.",
    aboutEyebrow: "04 / ABOUT MUSAINTELLECT",
    aboutTitle1: "A Mozambican",
    aboutTitle2: "company.",
    aboutBody1: "We are a Mozambican research, data analysis and technology company based in Marracuene, Maputo province.",
    aboutBody2: "Established in 2023, Musaintellect provides research, IT and Mozambican language services. We assess each enquiry to propose work suited to the client's needs.",
    aboutFact1: "Year established",
    aboutFact2Value: "Mozambique",
    aboutFact2: "Based in Marracuene, Maputo province.",
    productEyebrow: "05 / OUR PRODUCTS",
    productTitle: "Meet Catfrica.",
    productDescription: "Catfrica is a product developed by Musaintellect. Visit the website to learn about the project.",
    productCta: "Visit Catfrica",
    productLabel: "A MUSAINTELLECT PRODUCT",
    newTab: " (opens in a new tab)",
    faqEyebrow: "GOOD TO KNOW",
    faqTitle: "A little clarity.",
    faqIntro: "A few answers before our first conversation.",
    faq1Question: "What kinds of projects can we work on together?",
    faq1Answer: "We can collaborate on scientific research, data analysis, collection and annotation, language services, software development, automation, IT infrastructure and training. Share your challenge so we can define the right scope.",
    faq2Question: "Do you work with Mozambican languages?",
    faq2Answer: "Language services are part of our business: translation, interpreting, transcription and customer support. Availability for a specific language, variety and volume is confirmed when we assess each project.",
    faq3Question: "Can we collaborate remotely?",
    faq3Answer: "Yes. Depending on the project, we can arrange remote collaboration. On-site activities, fieldwork and infrastructure requirements are agreed upon when defining the work.",
    faq4Question: "How do I request a proposal?",
    faq4Answer: "Write to info@musaintellect.co.mz or prepare an email using the form below. Include your objective, service, timeline and, where relevant, languages and data volume. Please leave confidential data out of your first message.",
    contactEyebrow: "CONTACT",
    contactTitle1: "Tell us about",
    contactTitle2: "your project.",
    contactBody: "Tell us which service you need, your objectives and timeline. For language services, please also specify the language and variety.",
    contactLocation: "Marracuene, Maputo · Mozambique",
    formTitle: "Request information",
    formName: "Your name",
    formEmail: "Work email",
    formService: "How can we help?",
    formMessage: "Your project",
    formOther: "Other / Let's explore",
    namePlaceholder: "What should we call you?",
    emailPlaceholder: "name@company.com",
    messagePlaceholder: "Share your goals, requirements and timeline...",
    formNote: "This form prepares an email in your mail app. It does not send or store your information on this website.",
    formSubmit: "Prepare email",
    formStatus: "Your mail app has been asked to open a draft. Review and send it to complete your enquiry. If it does not open, write directly to info@musaintellect.co.mz.",
    emailSubject: "Project enquiry",
    footerTagline: "Research, data and software. Marracuene, Mozambique.",
    backTop: "Back to top",
    privacyLink: "Privacy",
    privacyTitle: "Your privacy.",
    privacyBody1: "This static website does not use cookies, analytics, external fonts or server-stored forms. Your language and appearance preferences may be saved only in your browser's local storage.",
    privacyBody2: "The contact form opens your email app. Your details are only sent if you choose to send that email, through your email provider. For questions about the handling of correspondence, contact info@musaintellect.co.mz.",
    privacyBody3: "The hosting provider may process technical access data, such as your IP address, under its own privacy policy.",
    closeDialog: "Close"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const filters = document.querySelectorAll("[data-filter]");
const serviceCards = document.querySelectorAll(".service-card");
const form = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");
let currentLanguage = "pt";
let draftRequested = false;

function updateMenuLabel() {
  const key = menuButton.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen";
  menuButton.setAttribute("aria-label", translations[currentLanguage][key]);
}

function updateFilterStatus() {
  const count = Array.from(serviceCards).filter((card) => !card.hidden).length;
  document.querySelector(".filter-status").textContent =
    translations[currentLanguage].filterStatus.replace("{count}", String(count));
}

function setLanguage(language, updateUrl = false) {
  if (!Object.hasOwn(translations, language)) return;
  currentLanguage = language;
  const text = translations[language];
  document.documentElement.lang = language === "pt" ? "pt-MZ" : "en";
  document.title = text.pageTitle;
  document.querySelector('meta[name="description"]').content = text.pageDescription;
  document.querySelector('meta[property="og:title"]').content = text.pageTitle;
  document.querySelector('meta[property="og:description"]').content = text.socialDescription;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", text[element.dataset.i18nPlaceholder]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", text[element.dataset.i18nAlt]);
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  updateMenuLabel();
  updateFilterStatus();
  if (draftRequested) formStatus.textContent = text.formStatus;
  try {
    localStorage.setItem("musaintellect-language", language);
  } catch {
    // Language switching also works when browser storage is unavailable.
  }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    try {
      history.replaceState(null, "", url);
    } catch {
      // Some browsers restrict history updates when opening local files.
    }
  }
}

function getInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (Object.hasOwn(translations, requested)) return requested;
  try {
    const stored = localStorage.getItem("musaintellect-language");
    if (Object.hasOwn(translations, stored)) return stored;
  } catch {
    // Portuguese remains the default in private or restricted contexts.
  }
  return "pt";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language, true));
});

function closeMenu(returnFocus = false) {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  updateMenuLabel();
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("is-open", isOpen);
  updateMenuLabel();
});
menuButton.classList.add("is-ready");

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu(true);
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 721px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    serviceCards.forEach((card) => {
      card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
    });
    updateFilterStatus();
  });
});
document.querySelector(".service-filters").hidden = false;

const services = ["research", "annotation", "languages", "software", "it", "training"];
serviceCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    form.elements.service.value = services[index];
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const text = translations[currentLanguage];
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim().replace(/\r?\n/g, "\r\n");
  if (!name || !message) {
    const input = !name ? form.elements.name : form.elements.message;
    input.setCustomValidity(currentLanguage === "pt" ? "Preencha este campo." : "Please fill in this field.");
    input.reportValidity();
    return;
  }
  const service = form.elements.service.selectedOptions[0].textContent;
  const body = [
    `${text.formName}: ${name}`,
    `${text.formEmail}: ${email}`,
    `${text.formService}: ${service}`,
    "",
    `${text.formMessage}:`,
    message
  ].join("\r\n");
  const subject = `${text.emailSubject} — ${service}`;
  draftRequested = true;
  formStatus.textContent = text.formStatus;
  window.location.href = `mailto:info@musaintellect.co.mz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
form.addEventListener("input", (event) => {
  if (typeof event.target.setCustomValidity === "function") event.target.setCustomValidity("");
  draftRequested = false;
  formStatus.textContent = "";
});

const privacyDialog = document.querySelector("#privacy-dialog");
const privacyButton = document.querySelector(".privacy-button");
if (typeof privacyDialog.showModal === "function") {
  privacyButton.hidden = false;
  privacyButton.addEventListener("click", () => privacyDialog.showModal());
  document.querySelector(".dialog-close").addEventListener("click", () => privacyDialog.close());
  privacyDialog.addEventListener("click", (event) => {
    const bounds = privacyDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) privacyDialog.close();
  });
}

document.querySelector("#year").textContent = String(new Date().getFullYear());
setLanguage(getInitialLanguage());

const validThemes = ["original", "chain"];

function setTheme(theme, updateUrl = false) {
  if (!validThemes.includes(theme)) return;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "chain" ? "#ffffff" : "#f7f7f2";
  try {
    const requested = new URLSearchParams(window.location.search).get("theme");
    if (updateUrl || validThemes.includes(requested)) {
      localStorage.setItem("musaintellect-theme-choice", theme);
    }
  } catch {
    // Appearance selection remains available when storage is blocked.
  }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("theme", theme);
    try {
      history.replaceState(null, "", url);
    } catch {
      // Local-file previews may not allow history updates.
    }
  }
}

function getInitialTheme() {
  const requested = new URLSearchParams(window.location.search).get("theme");
  if (validThemes.includes(requested)) return requested;
  try {
    const stored = localStorage.getItem("musaintellect-theme-choice");
    if (validThemes.includes(stored)) return stored;
  } catch {
    // Use the site's configured default if storage is unavailable.
  }
  return document.documentElement.dataset.defaultTheme === "chain" ? "chain" : "original";
}

const density = new URLSearchParams(window.location.search).get("density");
const defaultDensity = document.documentElement.dataset.defaultDensity;
document.documentElement.dataset.density = ["compact", "comfortable"].includes(density)
  ? density
  : defaultDensity === "comfortable" ? "comfortable" : "compact";
setTheme(getInitialTheme());
