// Publication list shown on the homepage.
//
// To hide a paper, set  show: false  (set it back to true to show it again).
// To put a paper in the short "Selected" list, set  selected: true.
// To add a paper, copy one entry and edit it. Papers are shown in the order
// they appear here ("All" also groups them by year).
//
// Fields:
//   title   paper title
//   authors author list; "Silvia Casola" is highlighted automatically (* = equal contribution)
//   venue   where it was published
//   year    publication year (used for grouping)
//   url     link to the paper (leave "" if there is none yet)
//   award    optional, e.g. "Outstanding Paper Award"
//   selected true = also appears in the "Selected" list (the default view)
//   show     true = visible on the site, false = hidden everywhere

const PUBLICATIONS = [
  // ---- 2026 ----
  {
    title: "SteerEval: Inference-time Interventions Strengthen Multilingual Generalization in Neural Summarization Metrics",
    authors: "Silvia Casola*, Ryan Soh-Eun Shim*, Felicia Körner, Yuchen Mao, Barbara Plank",
    venue: "EMNLP 2026",
    year: 2026,
    url: "https://arxiv.org/abs/2601.15809",
    selected: true,
    show: true,
  },
  {
    title: "Evaluating with Disagreement: Metrics for Soft and Perspectivist Evaluation of Categorical and Ordinal Judgments",
    authors: "Giulia Rizzi, Silvia Casola, Elisabetta Fersini, Elisa Leonardelli, Barbara Plank, Massimo Poesio",
    venue: "PANDORA Workshop @ EMNLP 2026",
    year: 2026,
    url: "",
    selected: false,
    show: true,
  },
  {
    title: "Challenging the Abilities of Large Language Models in Italian: a Community Initiative",
    authors: "Malvina Nissim, …, Silvia Casola, …, Andrea Zugarini",
    venue: "Italian Journal of Computational Linguistics",
    year: 2026,
    url: "https://arxiv.org/abs/2512.04759",
    selected: false,
    show: true,
  },
  {
    title: "The Teacher, the Slides, the Classroom",
    authors: "Arianna Longo, Silvia Casola, Davide Martignetti, Giuseppe Noto, Marco Antonio Stranisci",
    venue: "CLiC-it 2026",
    year: 2026,
    url: "",
    selected: false,
    show: true,
  },
  {
    title: "Generative AI Practices, Literacy, and Divides: An Empirical Analysis in the Italian Context",
    authors: "Beatrice Savoldi, Giuseppe Attanasio, Olga Gorodetskaya, Marta Marchiori Manerba, Elisa Bassignana, Silvia Casola, Matteo Negri, Tommaso Caselli, Luisa Bentivogli, Alan Ramponi, Arianna Muti, Nicoletta Balbo, Debora Nozza",
    venue: "arXiv preprint",
    year: 2026,
    url: "https://arxiv.org/abs/2512.03671",
    selected: false,
    show: true,
  },
  {
    title: "The Last Translation Benchmark",
    authors: "Vilém Zouhar, …, Silvia Casola, …, Zaid Alyafeai",
    venue: "arXiv preprint",
    year: 2026,
    url: "https://arxiv.org/abs/2609.04173",
    selected: false,
    show: true,
  },

  // ---- 2025 ----
  {
    title: "PERSEVAL: A Framework for Perspectivist Classification Evaluation",
    authors: "Soda Marem Lo*, Silvia Casola*, Erhan Sezerer, Valerio Basile, Franco Sansonetti, Antonio Uva, Davide Bernardi",
    venue: "EMNLP 2025",
    year: 2025,
    url: "https://aclanthology.org/2025.emnlp-main.1137/",
    selected: true,
    show: true,
  },
  {
    title: "Reason to Rote: Rethinking Memorization in Reasoning",
    authors: "Yupei Du, Philipp Mondorf, Silvia Casola, Yuekun Yao, Robert Litschko, Barbara Plank",
    venue: "EMNLP 2025",
    year: 2025,
    url: "https://aclanthology.org/2025.emnlp-main.437/",
    selected: true,
    show: true,
  },
  {
    title: "References Matter: Investigating the Impact of Reference Set Variation on Summarization Evaluation",
    authors: "Silvia Casola*, Yang Janet Liu*, Siyao Peng*, Oliver Kraus, Albert Gatt, Barbara Plank",
    venue: "INLG 2025",
    year: 2025,
    url: "https://aclanthology.org/2025.inlg-main.18/",
    selected: true,
    show: true,
  },
  {
    title: "LeWiDi-2025 at NLPerspectives: The Third Edition of the Learning with Disagreements Shared Task",
    authors: "Elisa Leonardelli, Silvia Casola, Siyao Peng, Giulia Rizzi, Valerio Basile, Elisabetta Fersini, Diego Frassinelli, Hyewon Jang, Maja Pavlovic, Barbara Plank, Massimo Poesio",
    venue: "NLPerspectives Workshop @ EMNLP 2025",
    year: 2025,
    url: "https://aclanthology.org/2025.nlperspectives-1.16/",
    selected: true,
    show: true,
  },

  // ---- 2024 ----
  {
    title: "MultiPICo: Multilingual Perspectivist Irony Corpus",
    authors: "Silvia Casola*, Simona Frenda*, Soda Marem Lo*, Erhan Sezerer, Antonio Uva, Valerio Basile, Cristina Bosco, Alessandro Pedrani, Chiara Rubagotti, Viviana Patti, Davide Bernardi",
    venue: "ACL 2024",
    year: 2024,
    url: "https://aclanthology.org/2024.acl-long.849/",
    award: "Outstanding Paper Award",
    selected: true,
    show: true,
  },
  {
    title: "I'm sure you're a real scholar yourself: Exploring Ironic Content Generation by Large Language Models",
    authors: "Pier Felice Balestrucci*, Silvia Casola*, Soda Marem Lo*, Valerio Basile, Alessandro Mazzei",
    venue: "Findings of EMNLP 2024",
    year: 2024,
    url: "https://aclanthology.org/2024.findings-emnlp.847/",
    selected: true,
    show: true,
  },
  {
    title: "Data Augmentation through Back-Translation for Stereotypes and Irony Detection",
    authors: "Tom Bourgeade, Silvia Casola, Adel Mahmoud Wizani, Cristina Bosco",
    venue: "CLiC-it 2024",
    year: 2024,
    url: "https://aclanthology.org/2024.clicit-1.12/",
    selected: false,
    show: true,
  },
  {
    title: "PERSEID – Perspectivist Irony Detection: A CALAMITA Challenge",
    authors: "Valerio Basile, Silvia Casola, Simona Frenda, Soda Marem Lo",
    venue: "CLiC-it 2024",
    year: 2024,
    url: "https://aclanthology.org/2024.clicit-1.118/",
    selected: false,
    show: true,
  },
  {
    title: "GFG – Gender-Fair Generation: A CALAMITA Challenge",
    authors: "Simona Frenda, Andrea Piergentili, Beatrice Savoldi, Marco Madeddu, Martina Rosola, Silvia Casola, Chiara Ferrando, Viviana Patti, Matteo Negri, Luisa Bentivogli",
    venue: "CLiC-it 2024",
    year: 2024,
    url: "https://aclanthology.org/2024.clicit-1.122/",
    selected: false,
    show: true,
  },

  // ---- 2023 ----
  {
    title: "Confidence-based Ensembling of Perspective-aware Models",
    authors: "Silvia Casola, Soda Marem Lo, Valerio Basile, Simona Frenda, Alessandra Teresa Cignarella, Viviana Patti, Cristina Bosco",
    venue: "EMNLP 2023",
    year: 2023,
    url: "https://aclanthology.org/2023.emnlp-main.212/",
    selected: true,
    show: true,
  },
  {
    title: "Creating a Silver Standard for Patent Simplification",
    authors: "Silvia Casola, Alberto Lavelli, Horacio Saggion",
    venue: "SIGIR 2023",
    year: 2023,
    url: "https://doi.org/10.1145/3539618.3591657",
    selected: true,
    show: true,
  },
  {
    title: "Testing ChatGPT for Stability and Reasoning: A Case Study Using Italian Medical Specialty Tests",
    authors: "Silvia Casola, Tiziano Labruna, Alberto Lavelli, Bernardo Magnini",
    venue: "CLiC-it 2023",
    year: 2023,
    url: "https://aclanthology.org/2023.clicit-1.15/",
    selected: false,
    show: true,
  },
  {
    title: "Does anyone see the irony here? Analysis of perspective-aware model predictions in irony detection",
    authors: "Simona Frenda, Soda Marem Lo, Silvia Casola, Bianca Scarlini, Cristina Marco, Valerio Basile, Davide Bernardi",
    venue: "NLPerspectives Workshop @ ECAI 2023",
    year: 2023,
    url: "https://ceur-ws.org/Vol-3494/paper9.pdf",
    selected: false,
    show: true,
  },
  {
    title: "Benchmarking Natural Language Processing Algorithms for Patent Summarization",
    authors: "Silvia Casola, Alberto Lavelli",
    venue: "PatentSemTech Workshop @ SIGIR 2023",
    year: 2023,
    url: "https://ceur-ws.org/Vol-3604/paper6.pdf",
    selected: false,
    show: true,
  },

  // ---- 2022 ----
  {
    title: "What's in a (dataset's) name? The case of BigPatent",
    authors: "Silvia Casola, Alberto Lavelli, Horacio Saggion",
    venue: "GEM Workshop @ EMNLP 2022",
    year: 2022,
    url: "https://aclanthology.org/2022.gem-1.34/",
    selected: false,
    show: true,
  },
  {
    title: "Exploring the limits of a base BART for multi-document summarization in the medical domain",
    authors: "Ishmael Obonyo, Silvia Casola, Horacio Saggion",
    venue: "Scholarly Document Processing Workshop @ COLING 2022",
    year: 2022,
    url: "https://aclanthology.org/2022.sdp-1.23/",
    selected: false,
    show: true,
  },
  {
    title: "Summarization, Simplification, and Generation: The Case of Patents",
    authors: "Silvia Casola, Alberto Lavelli",
    venue: "Expert Systems with Applications",
    year: 2022,
    url: "https://doi.org/10.1016/j.eswa.2022.117627",
    selected: true,
    show: true,
  },
  {
    title: "Pre-trained Transformers: An Empirical Comparison",
    authors: "Silvia Casola, Ivano Lauriola, Alberto Lavelli",
    venue: "Machine Learning with Applications",
    year: 2022,
    url: "https://doi.org/10.1016/j.mlwa.2022.100334",
    selected: true,
    show: true,
  },

  // ---- 2021 ----
  {
    title: "WITS: Wikipedia for Italian Text Summarization",
    authors: "Silvia Casola, Alberto Lavelli",
    venue: "CLiC-it 2021",
    year: 2021,
    url: "https://aclanthology.org/2021.clicit-1.11/",
    selected: false,
    show: true,
  },
  {
    title: "Investigating Continued Pretraining for Zero-Shot Cross-Lingual Spoken Language Understanding",
    authors: "Samuel Louvan, Silvia Casola, Bernardo Magnini",
    venue: "CLiC-it 2021",
    year: 2021,
    url: "https://aclanthology.org/2021.clicit-1.33/",
    selected: false,
    show: true,
  },

  // ---- 2020 ----
  {
    title: "FBK@SMM4H2020: RoBERTa for Detecting Medications on Twitter",
    authors: "Silvia Casola, Alberto Lavelli",
    venue: "SMM4H Workshop @ COLING 2020",
    year: 2020,
    url: "https://aclanthology.org/2020.smm4h-1.15/",
    selected: false,
    show: true,
  },
  {
    title: "Internalizing-Externalizing Symptoms as Predictors of Problematic Smartphone Use among Adolescents: A Machine Learning Approach",
    authors: "Giulia Bassi, Silvia Casola, Elisa Mancinelli, Tatiana Lai, Silvia Salcuni",
    venue: "International Congress of Clinical and Health Psychology in Children and Adolescents",
    year: 2020,
    url: "",
    selected: false,
    show: false,
  },

  // ---- 2017 ----
  {
    title: "Mental Workload Assessment for UAV Traffic Control Using Consumer-Grade BCI Equipment",
    authors: "Federica Bazzano, Paolo Montuschi, Fabrizio Lamberti, Gianluca Paravati, Silvia Casola, Gabriel Cerón, Jaime Londoño, Flavio Tanese",
    venue: "IHCI 2017",
    year: 2017,
    url: "https://doi.org/10.1007/978-3-319-72038-8_6",
    selected: false,
    show: true,
  },
];

// ---- Rendering (no need to edit below) ----
(function () {
  const container = document.getElementById("publications");
  if (!container) return;

  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const highlight = (authors) => esc(authors).replace(/Silvia Casola\*?/g, (m) => `<span class="me">${m}</span>`);

  const visible = PUBLICATIONS.filter((p) => p.show);

  const item = (p) => {
    const title = p.url
      ? `<a class="title" href="${esc(p.url)}">${esc(p.title)}</a>`
      : `<span class="title">${esc(p.title)}</span>`;
    const venue = /\b\d{4}\b/.test(p.venue) ? p.venue : `${p.venue} ${p.year}`;
    const award = p.award ? `<span class="badge award">🏆 ${esc(p.award)}</span>` : "";
    return `<li>${title}<span class="authors">${highlight(p.authors)}</span>` +
      `<span class="badges"><span class="badge venue">${esc(venue)}</span>${award}</span></li>`;
  };

  const render = (mode) => {
    if (mode === "selected") {
      container.innerHTML = `<ul class="pubs">${visible.filter((p) => p.selected).map(item).join("")}</ul>`;
    } else {
      const years = [...new Set(visible.map((p) => p.year))].sort((a, b) => b - a);
      container.innerHTML = years.map((year) =>
        `<h3>${year}</h3><ul class="pubs">${visible.filter((p) => p.year === year).map(item).join("")}</ul>`
      ).join("");
    }
    document.querySelectorAll(".toggle button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.mode === mode));
    });
  };

  document.querySelectorAll(".toggle button").forEach((b) => {
    if (b.dataset.mode === "all") b.textContent = `All (${visible.length})`;
    b.addEventListener("click", () => render(b.dataset.mode));
  });

  render(visible.some((p) => p.selected) ? "selected" : "all");
})();
