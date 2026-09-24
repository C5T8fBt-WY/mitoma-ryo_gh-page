const english = {
    skip: "Skip to content",
    navLabel: "Page navigation",
    languageLabel: "Display language",
    navAbout: "About",
    navResearch: "Research",
    navWork: "Selected work",
    navContact: "Contact",
    affiliation: "Doctoral Program, Department of Information Environment, Graduate School of Environment and Information Sciences, Yokohama National University",
    labLink: "Shima Laboratory",
    emailButtonLabel: "Email",
    githubLink: "GitHub",
    researchTitle: "Research",
    topicOneTitle: "Learning from few examples",
    topicOneCopy: "I examine which data improves predictions, including data whose answers are unknown.",
    topicTwoTitle: "Human movement and rhythm-game charts",
    topicTwoCopy: "This includes recognizing actions from posture and designing ways to generate charts automatically.",
    workTitle: "Selected work",
    workOneCitation: "R. Mitoma, T. Mukaeda, and K. Shima, “Fundamental Study on Data Shapley-based Pseudo-Labeling via Neural Tangent Kernel,” Proceedings of the 40th Annual Conference of the Japanese Society for Artificial Intelligence (JSAI), 5Yin-A-53, 2026.",
    paperLink: "Paper",
    codeLink: "Code",
    demoLink: "Interactive demo",
    workTwoCitation: "R. Mitoma, T. Mukaeda, K. Shima, H. Kai, M. Suzuki, and K. Kato, “Behavior Monitoring System Leveraging Human Pose Estimation,” Proceedings of the 2025 IEEE/SICE International Symposium on System Integration (SII), pp. 1010–1015, 2025.",
    ipsj2023Citation: "R. Mitoma, T. Mukaeda, and K. Shima, “混合余事象分布に基づく未学習推定畳込みニューラルネット,” Proceedings of the 85th National Convention of the Information Processing Society of Japan, vol. 2023, no. 1, pp. 469–470, 7S-02, 2023.",
    ipsj2023Award: "IPSJ 85th National Convention — Best Paper Award for Young Researcher",
    awardLink: "Award recipients",
    routeCitation: "R. Mitoma, “Improving a Deep Learning Model for Rhythm Game Chart Generation,” Yokohama National University ROUTE Research Presentation (2021 academic year), 2022.",
    routeAward: "Best Research Presentation Award",
    routeAwardLink: "Award announcement",
    qrShow: "Show page QR code",
    qrHide: "Hide QR code",
    qrAlt: "QR code linking to this profile page"
};

// Japanese wording is the text and labels in index.html. Capture it before
// switching languages so edits to the HTML remain authoritative.
const japaneseText = new Map(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [element, element.textContent])
);
const japaneseAriaLabels = new Map(
  [...document.querySelectorAll("[data-i18n-aria-label]")].map((element) => [element, element.getAttribute("aria-label")])
);
const japaneseAltText = new Map(
  [...document.querySelectorAll("[data-i18n-alt]")].map((element) => [element, element.alt])
);
const descriptionMeta = document.querySelector('meta[name="description"]');
const japaneseDescription = descriptionMeta.content;
const japaneseTitle = document.title;

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const message = language === "ja" ? japaneseText.get(element) : english[element.dataset.i18n];
    if (message !== undefined) element.textContent = message;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const message = language === "ja" ? japaneseAriaLabels.get(element) : english[element.dataset.i18nAriaLabel];
    if (message !== undefined && message !== null) element.setAttribute("aria-label", message);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const message = language === "ja" ? japaneseAltText.get(element) : english[element.dataset.i18nAlt];
    if (message !== undefined) element.alt = message;
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  descriptionMeta.content = language === "ja"
    ? japaneseDescription
    : "Ryo Mitoma — Doctoral Program in Information Environment, Yokohama National University.";
  document.title = language === "ja" ? japaneseTitle : "Ryo Mitoma | Profile";

  try {
    localStorage.setItem("profile-language", language);
  } catch {
    // The language switch remains usable when browser storage is disabled.
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelector("[data-email-contact]").addEventListener("click", () => {
  const address = atob("bWl0b21hLXJ5by1waEB5bnUuanA=");
  window.location.href = `mailto:${address}`;
});

let initialLanguage = navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
try {
  const savedLanguage = localStorage.getItem("profile-language");
  if (savedLanguage === "en" || savedLanguage === "ja") initialLanguage = savedLanguage;
} catch {
  // Fall back to the browser language when storage is disabled.
}
setLanguage(initialLanguage);

document.getElementById("year").textContent = new Date().getFullYear();
