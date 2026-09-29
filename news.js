// News shown on the homepage, newest first.
//
// To add news, copy one entry to the top of the list and edit it.
// To hide an item, set  show: false.
// The text can contain links, e.g. <a href="https://...">my paper</a>.
//
// Fields:
//   date   free text shown on the left, e.g. "Oct 2026"
//   text   the news item (HTML allowed)
//   show   true = visible, false = hidden

const NEWS_VISIBLE = 5; // how many items to show before "Show all"

const NEWS = [
  {
    date: "Oct 2026",
    text: "Started my Marie Skłodowska-Curie Postdoctoral Fellowship at Universitat Pompeu Fabra, with the project <strong>GenEval: Linking Generation and Evaluation for Reliable NLG Assessment</strong>.",
    show: true,
  },
  {
    date: "Sep 2026",
    text: "<a href=\"https://arxiv.org/abs/2601.15809\">SteerEval</a> accepted at EMNLP 2026!",
    show: true,
  },
  {
    date: "2026",
    text: "Invited talks on <em>Evaluation Under Variation: References, Annotators, and Languages</em> at the University of Turin, TU Munich, and Dublin City University.",
    show: true,
  },
  {
    date: "Nov 2025",
    text: "Two papers at EMNLP 2025 (<a href=\"https://aclanthology.org/2025.emnlp-main.1137/\">PERSEVAL</a> and <a href=\"https://aclanthology.org/2025.emnlp-main.437/\">Reason to Rote</a>), and co-organised the <a href=\"https://aclanthology.org/2025.nlperspectives-1.16/\">LeWiDi 2025 shared task</a>.",
    show: true,
  },
  {
    date: "Sep 2024",
    text: "Joined the <a href=\"https://mainlp.github.io/\">MaiNLP lab</a> at LMU Munich as a postdoc.",
    show: true,
  },
  {
    date: "Aug 2024",
    text: "<a href=\"https://aclanthology.org/2024.acl-long.849/\">MultiPICo</a> won an <strong>Outstanding Paper Award</strong> at ACL 2024! 🏆",
    show: true,
  },
];

// ---- Rendering (no need to edit below) ----
(function () {
  const container = document.getElementById("news");
  if (!container) return;

  const items = NEWS.filter((n) => n.show);
  const row = (n) => `<li><span class="news-date">${n.date}</span><span class="news-text">${n.text}</span></li>`;

  const render = (all) => {
    const shown = all ? items : items.slice(0, NEWS_VISIBLE);
    const more = items.length > NEWS_VISIBLE
      ? `<button type="button" class="more">${all ? "Show less" : `Show all (${items.length})`}</button>`
      : "";
    container.innerHTML = `<ul class="news">${shown.map(row).join("")}</ul>${more}`;
    const btn = container.querySelector(".more");
    if (btn) btn.addEventListener("click", () => render(!all));
  };

  render(false);
})();
