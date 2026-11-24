export type Lang = "ar" | "fr" | "en";
export type T = Record<Lang, string>;

export const nights: { n: number; title: T; parts: T[] }[] = [
  { n: 1, title: { ar: "حين يلتقي الإنشاد بالإبداع الموسيقي", fr: "Quand l'Inshad rencontre la création musicale", en: "Where Inshad Meets Musical Creativity" },
    parts: [{ ar: "سهرة الافتتاح: فنان دولي مقترح (ماهر زين / سامي يوسف / لطفي بوشناق) في عمل مشترك مع منشد جزائري", fr: "Ouverture : artiste international proposé (Maher Zain / Sami Yusuf / Lotfi Bouchnak) avec un munshid algérien", en: "Opening: proposed international artist (Maher Zain / Sami Yusuf / Lotfi Bouchnak) with an Algerian munshid" }] },
  { n: 2, title: { ar: "حوار إنشادي جزائري مصري", fr: "Dialogue d'Inshad algéro-égyptien", en: "Algerian–Egyptian Inshad Dialogue" },
    parts: [{ ar: "الجزء الأول: العود والإنشاد مع مصطفى سعيد", fr: "Partie 1 : Oud & Inshad avec Mustafa Said", en: "Part 1: Oud & Inshad with Mustafa Said" }, { ar: "الجزء الثاني: عرض جزائري مصري مشترك", fr: "Partie 2 : performance commune algéro-égyptienne", en: "Part 2: Joint Algerian–Egyptian performance" }] },
  { n: 3, title: { ar: "الإنشاد التونسي وتجربة الجمهور الجماعية", fr: "Inshad tunisien & expérience collective", en: "Tunisian Inshad & Collective Audience Experience" },
    parts: [{ ar: "الجزء الأول: فرقة تونسية", fr: "Partie 1 : ensemble tunisien", en: "Part 1: Tunisian ensemble" }, { ar: "الجزء الثاني: «ننشد معاً» جوقة الجمهور التفاعلية عبر رموز QR والشاشات", fr: "Partie 2 : « Chantons ensemble » chœur du public via QR et écrans", en: "Part 2: “Let's Sing Together” interactive audience choir via QR & screens" }] },
  { n: 4, title: { ar: "التنوع العالمي والإفريقي", fr: "Diversité mondiale & africaine", en: "Global & African Diversity" },
    parts: [{ ar: "الجزء الأول: فرقة دولية من ماليزيا أو البوسنة أو ألمانيا", fr: "Partie 1 : ensemble de Malaisie, Bosnie ou Allemagne", en: "Part 1: Ensemble from Malaysia, Bosnia or Germany" }, { ar: "الجزء الثاني: فرقة إنشاد إفريقية", fr: "Partie 2 : ensemble d'Inshad africain", en: "Part 2: African Inshad ensemble" }] },
  { n: 5, title: { ar: "حوار المقامات", fr: "Dialogue des Maqamat", en: "Dialogue of Maqamat" },
    parts: [{ ar: "الجزء الأول: تريو تقسيم", fr: "Partie 1 : Trio Taksim", en: "Part 1: Trio Taksim" }, { ar: "الجزء الثاني: عرض مشترك مع منشد تركي أو أذربيجاني (سهرة الاختتام)", fr: "Partie 2 : avec un munshid turc ou azerbaïdjanais (clôture)", en: "Part 2: With a Turkish or Azerbaijani munshid (closing)" }] },
];

export const countries = [
  ["🇩🇿", { ar: "الجزائر", fr: "Algérie", en: "Algeria" }], ["🇹🇳", { ar: "تونس", fr: "Tunisie", en: "Tunisia" }],
  ["🇪🇬", { ar: "مصر", fr: "Égypte", en: "Egypt" }], ["🇵🇸", { ar: "فلسطين", fr: "Palestine", en: "Palestine" }],
  ["🇸🇾", { ar: "سوريا", fr: "Syrie", en: "Syria" }], ["🇴🇲", { ar: "عُمان", fr: "Oman", en: "Oman" }],
  ["🇲🇾", { ar: "ماليزيا", fr: "Malaisie", en: "Malaysia" }], ["🇧🇦", { ar: "البوسنة", fr: "Bosnie", en: "Bosnia" }],
  ["🇹🇷", { ar: "تركيا", fr: "Turquie", en: "Turkey" }], ["🇦🇿", { ar: "أذربيجان", fr: "Azerbaïdjan", en: "Azerbaijan" }],
  ["🇩🇪", { ar: "ألمانيا", fr: "Allemagne", en: "Germany" }],
] as const;

export const bridges: T[] = [
  { ar: "جسر سيدي مسيد", fr: "Pont Sidi M'Cid", en: "Sidi M'Cid Bridge" },
  { ar: "جسر صالح باي", fr: "Pont Salah Bey", en: "Salah Bey Bridge" },
  { ar: "جسر باب القنطرة", fr: "Pont Bab El Kantara", en: "Bab El Kantara Bridge" },
  { ar: "مطلات وادي الرمال", fr: "Belvédères des gorges du Rhumel", en: "Rhumel Gorge viewpoints" },
];
export const roadmap: T[] = [
  { ar: "الدراسة والتصميم", fr: "Étude & conception", en: "Study & design" },
  { ar: "الشراكات والتراخيص", fr: "Partenariats & autorisations", en: "Partnerships & permits" },
  { ar: "التنفيذ البيئي", fr: "Réalisation écologique", en: "Eco-friendly build" },
  { ar: "التشغيل والاستدامة", fr: "Exploitation & pérennité", en: "Operation & sustainability" },
];

export const labTabs: { title: T; items: T[] }[] = [
  { title: { ar: "معرض المؤسسات الناشئة", fr: "Expo startups", en: "Startup Exhibition" }, items: [
    { ar: "الصوت بالذكاء الاصطناعي", fr: "Audio par IA", en: "AI audio" }, { ar: "التراث الرقمي", fr: "Patrimoine numérique", en: "Digital heritage" },
    { ar: "السياحة الذكية", fr: "Tourisme intelligent", en: "Smart tourism" }, { ar: "التذاكر الرقمية", fr: "Billetterie", en: "Ticketing" }] },
  { title: { ar: "5 ورشات تطبيقية", fr: "5 ateliers appliqués", en: "5 Applied Workshops" }, items: [
    { ar: "الذكاء الاصطناعي في الإنشاد وحماية الملكية الفكرية", fr: "IA & Inshad, propriété intellectuelle", en: "AI in Inshad & IP protection" },
    { ar: "هندسة الصوت الحي", fr: "Ingénierie du son live", en: "Live sound engineering" },
    { ar: "الإسقاط الضوئي والسينوغرافيا", fr: "Projection mapping & scénographie", en: "Projection mapping & scenography" },
    { ar: "الأرشفة الرقمية", fr: "Archivage", en: "Archiving" }, { ar: "ريادة الأعمال الثقافية", fr: "Entrepreneuriat culturel", en: "Cultural entrepreneurship" }] },
  { title: { ar: "عروض حية للصوت والضوء", fr: "Démos son & lumière", en: "Live Audio & Light Demos" }, items: [
    { ar: "معالجة صوتية في الوقت الحقيقي", fr: "Traitement audio en temps réel", en: "Real-time audio processing" }, { ar: "إضاءة تفاعلية", fr: "Lumière interactive", en: "Interactive lighting" }] },
  { title: { ar: "المنتدى الدولي للذكاء الاصطناعي", fr: "Forum international IA", en: "International AI Forum" }, items: [
    { ar: "خبراء من فرنسا، ألمانيا، كوريا الجنوبية، الإمارات، تونس والمغرب", fr: "Experts de France, Allemagne, Corée du Sud, EAU, Tunisie, Maroc", en: "Experts from France, Germany, South Korea, UAE, Tunisia, Morocco" },
    { ar: "تتويجاً بـ «مختبر الابتكار الثقافي قسنطينة»", fr: "Aboutissant au « Constantine Cultural Innovation Lab »", en: "Culminating in the “Constantine Cultural Innovation Lab”" }] },
];

export const archive = [
  { title: "يا من يرى ما في الضمير", year: 2019, country: "Algérie", maqam: "Sika" },
  { title: "طلع البدر علينا", year: 2021, country: "Tunisie", maqam: "Bayati" },
  { title: "Qasida al-Burda", year: 2022, country: "Égypte", maqam: "Rast" },
  { title: "Ilahi — Sufi Hymn", year: 2023, country: "Turquie", maqam: "Hijaz" },
  { title: "نوبة المالوف القسنطيني", year: 2024, country: "Algérie", maqam: "Raml al-Maya" },
  { title: "Salawat Nusantara", year: 2024, country: "Malaisie", maqam: "Nahawand" },
];

export const initiatives: T[] = [
  { ar: "المسابقة الدولية الرقمية للمواهب الناشئة", fr: "Concours numérique international des jeunes talents", en: "International Digital Competition for Emerging Talents" },
  { ar: "أنشودة واحدة... أصوات متعددة", fr: "Un chant… plusieurs voix", en: "One Song… Multiple Voices" },
  { ar: "صوت من بلادي", fr: "Une voix de mon pays", en: "A Voice from My Country" },
  { ar: "قسنطينة تنشد العالم", fr: "Constantine chante le monde", en: "Constantine Sings the World" },
];

export const pavilions: T[] = [
  { ar: "الحرف التقليدية والتراث", fr: "Artisanat & patrimoine", en: "Traditional Crafts & Heritage" },
  { ar: "الصناعات الإبداعية والتصميم", fr: "Industries créatives & design", en: "Creative Industries & Design" },
  { ar: "المؤسسات الثقافية الناشئة", fr: "Startups culturelles", en: "Cultural Startups" },
  { ar: "السياحة الثقافية الذكية", fr: "Tourisme culturel intelligent", en: "Smart Cultural Tourism" },
];
export const artisans = [
  { name: "دار النحاس القسنطيني", craft: "Dinanderie", pav: 0 }, { name: "Atelier Gandoura Fergani", craft: "Broderie", pav: 0 },
  { name: "Rhumel Design Studio", craft: "Design", pav: 1 }, { name: "Maqam Labs", craft: "AI audio", pav: 2 },
  { name: "Cirta Smart Tours", craft: "Tourisme", pav: 3 }, { name: "بيت الحلويات التقليدية", craft: "Gastronomie", pav: 0 },
];

export const partners: T[] = [
  { ar: "وزارة الثقافة والفنون", fr: "Ministère de la Culture et des Arts", en: "Ministry of Culture & Arts" },
  { ar: "ولاية قسنطينة", fr: "Wilaya de Constantine", en: "Wilaya of Constantine" },
  { ar: "مديرية الثقافة", fr: "Direction de la Culture", en: "Directorate of Culture" },
  { ar: "مديرية السياحة والصناعة التقليدية", fr: "Direction du Tourisme et de l'Artisanat", en: "Directorate of Tourism & Handicrafts" },
  { ar: "البلديات", fr: "Communes", en: "Municipalities" },
  { ar: "المخابر الجامعية", fr: "Laboratoires universitaires", en: "University Labs" },
  { ar: "ترامواي سيترام", fr: "Tramway SETRAM", en: "SETRAM Tramway" },
  { ar: "الرعاة الاقتصاديون", fr: "Sponsors économiques", en: "Economic Sponsors" },
];

export const lyrics = [
  "طَلَعَ البَدْرُ عَلَيْنا", "مِنْ ثَنِيّاتِ الوَداعْ", "وَجَبَ الشُّكْرُ عَلَيْنا", "ما دَعا لِلَّهِ داعْ",
  "أَيُّها المَبْعوثُ فينا", "جِئْتَ بِالأَمْرِ المُطاعْ", "جِئْتَ شَرَّفْتَ المَدينَة", "مَرْحَباً يا خَيْرَ داعْ",
];

export const ui = {
  republic: { ar: "الجمهورية الجزائرية الديمقراطية الشعبية — وزارة الثقافة والفنون", fr: "République Algérienne Démocratique et Populaire — Ministère de la Culture et des Arts", en: "People's Democratic Republic of Algeria — Ministry of Culture and Arts" },
  edition: { ar: "الدورة 12 | قسنطينة", fr: "12ᵉ édition | Constantine", en: "12th Edition | Constantine" },
  title: { ar: "المهرجان الثقافي الدولي للإنشاد", fr: "Festival Culturel International de l'Inshad", en: "International Cultural Festival of Inshad" },
  theme: { ar: "الإنشاد والابتكار: نحو مهرجان ثقافي مستدام", fr: "Inshad et innovation : vers un festival culturel durable", en: "Inshad and Innovation: Towards a Sustainable Cultural Festival" },
  ctaProgram: { ar: "استكشف برنامج الليالي الخمس", fr: "Programme des 5 soirées", en: "Explore 5-Night Program" },
  ctaDigital: { ar: "المهرجان الرقمي والمواهب", fr: "Festival numérique & talents", en: "Digital Festival & Talents" },
  qr: { ar: "ننشد معاً (QR)", fr: "Chantons (QR)", en: "Sing-Along (QR)" },
  nProgram: { ar: "البرنامج", fr: "Programme", en: "Program" }, nCity: { ar: "المدينة", fr: "La ville", en: "City" },
  nLab: { ar: "الابتكار", fr: "Innovation", en: "Innovation" }, nDigital: { ar: "الرقمي", fr: "Numérique", en: "Digital" },
  nExpo: { ar: "المعرض", fr: "Expo", en: "Expo" },
  m1: { ar: "ليالٍ فنية", fr: "soirées artistiques", en: "artistic nights" }, m2: { ar: "محاور استراتيجية", fr: "axes stratégiques", en: "strategic axes" },
  m3: { ar: "منصات جسور مستدامة", fr: "scènes-ponts durables", en: "sustainable bridge stages" }, m4: { ar: "مختبر الذكاء الاصطناعي", fr: "Labo IA & innovation", en: "AI & Innovation Lab" },
  ax1: { ar: "المحور 1 — البرنامج الفني الدولي", fr: "Axe 1 — Programme artistique international", en: "Axis 1 — International Artistic Program" },
  night: { ar: "الليلة", fr: "Soirée", en: "Night" }, ticket: { ar: "معاينة التذكرة الرقمية و QR", fr: "Aperçu du billet & QR", en: "Preview Digital Ticket & QR" },
  legal: { ar: "تنبيه قانوني: جميع الفنانين والفرق المذكورة هي مقترحات برمجة أولية تخضع للمفاوضات الرسمية النهائية، وتوفر الفنانين، والموافقة على الميزانية، وتسوية حقوق المؤلف والتراخيص.", fr: "Avis légal : tous les artistes et ensembles cités sont des propositions de programmation préliminaires, sous réserve des négociations officielles finales, de la disponibilité des artistes, de l'approbation budgétaire et de la libération des droits d'auteur et licences.", en: "Legal notice: all named artists and ensembles are preliminary programming proposals subject to final official negotiations, artist availability, budget approval, and copyright/licensing clearance." },
  ax23: { ar: "المحوران 2 و3 — الإنشاد في الفضاء الحضري", fr: "Axes 2 & 3 — L'Inshad dans l'espace urbain", en: "Axes 2 & 3 — Inshad in Urban Space" },
  citySings: { ar: "قسنطينة تنشد", fr: "Constantine chante", en: "Constantine Sings" },
  citySingsD: { ar: "عروض صوتية مفتوحة في الساحات السياحية والمراكز التجارية والفضاءات العمومية.", fr: "Performances acoustiques en plein air sur les places, centres commerciaux et espaces publics.", en: "Pop-up acoustic performances across tourist squares, malls and public spaces." },
  tram: { ar: "الترامواي ينشد", fr: "Le tramway chante", en: "The Tramway Sings" },
  tramD: { ar: "بالشراكة مع سيترام: منشد يقود الإنشاد الجماعي داخل عربة مخصصة عبر الشاشات ورموز QR.", fr: "En partenariat avec la SETRAM : un munshid anime le chant collectif dans une rame dédiée, écrans et QR à bord.", en: "With SETRAM: a munshid leads live collective singing in a dedicated carriage using onboard screens and QR codes." },
  bridgesT: { ar: "قسنطينة... جسور تنشد", fr: "Constantine… des ponts qui chantent", en: "Constantine… Bridges that Sing" },
  bridgesD: { ar: "أربع منصات مفتوحة صديقة للبيئة مندمجة معمارياً مع الجسور.", fr: "4 scènes ouvertes écologiques intégrées à l'architecture des ponts.", en: "4 eco-friendly open stages architecturally integrated with the bridges." },
  roadmapT: { ar: "خارطة التنفيذ", fr: "Feuille de route", en: "Roadmap" },
  ax45: { ar: "المحوران 4 و5 — الابتكار والذكاء الاصطناعي", fr: "Axes 4 & 5 — Innovation & IA", en: "Axes 4 & 5 — Innovation & AI" },
  uni: { ar: "بالشراكة مع المدرسة العليا للإعلام الآلي ببجاية وكلية الفنون بقسنطينة", fr: "En partenariat avec l'École supérieure d'informatique de Béjaïa et la Faculté des Arts de Constantine", en: "With the Higher School of Computer Science in Béjaïa and the Faculty of Arts in Constantine" },
  ax6: { ar: "المحور 6 — المهرجان الرقمي والذاكرة الرقمية", fr: "Axe 6 — Festival numérique & mémoire", en: "Axis 6 — Digital Festival & Archive" },
  archiveT: { ar: "الذاكرة الرقمية", fr: "La mémoire numérique", en: "Digital Memory" },
  search: { ar: "ابحث...", fr: "Rechercher…", en: "Search…" }, all: { ar: "الكل", fr: "Tous", en: "All" },
  submit: { ar: "سجّل مشاركتك", fr: "Inscrire ma candidature", en: "Submit your entry" },
  ax7: { ar: "المحور 7 — معرض الثقافة والاقتصاد الإبداعي", fr: "Axe 7 — Expo culture & économie créative", en: "Axis 7 — Creative Economy Expo" },
  partnersT: { ar: "الشركاء المؤسساتيون", fr: "Partenaires institutionnels", en: "Institutional Partners" },
  organizer: { ar: "محافظة المهرجان الثقافي الدولي للإنشاد", fr: "Commissariat du Festival Culturel International de l'Inshad", en: "Commissariat of the International Cultural Festival of Inshad" },
  name: { ar: "الاسم الكامل", fr: "Nom complet", en: "Full name" }, country: { ar: "البلد", fr: "Pays", en: "Country" },
  link: { ar: "رابط التسجيل", fr: "Lien de l'enregistrement", en: "Recording link" }, send: { ar: "إرسال", fr: "Envoyer", en: "Send" },
  thanks: { ar: "شكراً! تم استلام مشاركتك.", fr: "Merci ! Candidature reçue.", en: "Thank you! Entry received." },
  singTitle: { ar: "ننشد معاً", fr: "Chantons ensemble", en: "Let's Sing Together" },
  close: { ar: "إغلاق", fr: "Fermer", en: "Close" }, play: { ar: "تشغيل", fr: "Lecture", en: "Play" }, pause: { ar: "إيقاف", fr: "Pause", en: "Pause" },
  tempo: { ar: "الإيقاع", fr: "Tempo", en: "Tempo" },
} satisfies Record<string, T>;
