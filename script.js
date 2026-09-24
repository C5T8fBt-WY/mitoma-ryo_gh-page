const translations = {
  en: {
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
  },
  ja: {
    skip: "本文へスキップ",
    navLabel: "ページ内ナビゲーション",
    languageLabel: "表示言語",
    navAbout: "概要",
    navResearch: "研究",
    navWork: "研究業績",
    navContact: "連絡先",
    affiliation: "横浜国立大学大学院 環境情報学府 情報環境専攻 博士課程後期",
    labLink: "島研究室",
    emailButtonLabel: "メール",
    githubLink: "GitHub",
    researchTitle: "研究テーマ",
    topicOneTitle: "少ない例から学ぶ方法",
    topicOneCopy: "正解が分からないデータも活用し、予測に役立つ情報を見極めます。",
    topicTwoTitle: "人の動きとリズムゲーム",
    topicTwoCopy: "姿勢から行動を読み取る仕組みや、譜面を自動で作る方法に取り組んでいます。",
    workTitle: "主な研究業績",
    workOneCitation: "三苫 凌・迎田 隆幸・島 圭介，「Neural Tangent Kernelを導入したData Shapley型疑似ラベル法に関する基礎検討」，人工知能学会全国大会論文集，第40回，5Yin-A-53，2026.",
    paperLink: "論文",
    codeLink: "コード",
    demoLink: "デモ",
    workTwoCitation: "R. Mitoma, T. Mukaeda, K. Shima, H. Kai, M. Suzuki, and K. Kato, “Behavior Monitoring System Leveraging Human Pose Estimation,” Proceedings of the 2025 IEEE/SICE International Symposium on System Integration (SII), pp. 1010–1015, 2025.",
    ipsj2023Citation: "三苫 凌・迎田 隆幸・島 圭介，「混合余事象分布に基づく未学習推定畳込みニューラルネット」，情報処理学会第85回全国大会講演論文集，Vol. 2023, No. 1, pp. 469–470，7S-02，2023.",
    ipsj2023Award: "情報処理学会第85回全国大会 大会奨励賞",
    awardLink: "受賞者一覧",
    routeCitation: "三苫 凌，「深層学習によるリズムゲーム譜面の自動生成モデルの改善」，横浜国立大学 2021年度ROUTE成果発表会，2022.",
    routeAward: "最優秀研究発表賞",
    routeAwardLink: "受賞記事",
    qrShow: "このページの QR コードを表示",
    qrHide: "QR コードを隠す",
    qrAlt: "プロフィールページへの QR コード"
  }
};

function setLanguage(language) {
  const messages = translations[language] ?? translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const message = messages[element.dataset.i18n];
    if (message) element.textContent = message;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const message = messages[element.dataset.i18nAriaLabel];
    if (message) element.setAttribute("aria-label", message);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const message = messages[element.dataset.i18nAlt];
    if (message) element.alt = message;
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  const description = language === "ja"
    ? "三苫 凌 — 横浜国立大学大学院 環境情報学府 情報環境専攻 博士課程後期。"
    : "Ryo Mitoma — Doctoral Program in Information Environment, Yokohama National University.";
  document.querySelector('meta[name="description"]').setAttribute("content", description);
  document.title = language === "ja" ? "Ryo Mitoma | 三苫 凌" : "Ryo Mitoma | Profile";

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
