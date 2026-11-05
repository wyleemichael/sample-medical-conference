const CONFERENCE = {
  shortName: "HKIMC 2027",
  name: "Hong Kong International Medical Conference",
  theme: "Precision Care Across Borders",
  dates: "18–20 March 2027",
  venue: "Hong Kong Convention and Exhibition Centre",
  city: "Wan Chai, Hong Kong",
  email: "secretariat@hkimc.org",
};

const HALLS = ["Lecture Hall 1", "Lecture Hall 2", "Lecture Hall 3"];

const REGISTRATION_TIERS = [
  { id: "physician", name: "Physician", price: 680, note: "Specialists and consultants" },
  { id: "trainee", name: "Trainee / allied health", price: 380, note: "Residents, nurses, pharmacists, therapists" },
  { id: "student", name: "Student", price: 180, note: "Full-time undergraduate or postgraduate" },
  { id: "industry", name: "Industry", price: 920, note: "Company and exhibitor delegates" },
];

const SPEAKERS = [
  {
    id: "vargas",
    name: "Prof. Elena Vargas",
    title: "Professor of Medical Oncology",
    affiliation: "University of Barcelona",
    photo: "img/speakers/vargas.jpg",
    bio: "Elena Vargas leads translational oncology programmes spanning liquid biopsy, adaptive trial design, and equitable access to targeted therapy. She has chaired ESMO educational tracks and advises ministries on cancer-service redesign.",
    sessions: [
      { day: "Thursday 18 March", time: "09:00–09:25", hall: "Lecture Hall 1", topic: "Opening address: a meeting that changes Monday morning", role: "Speaker" },
      { day: "Thursday 18 March", time: "09:30–10:15", hall: "Lecture Hall 1", topic: "Precision oncology that travels with the patient", role: "Speaker" },
      { day: "Saturday 20 March", time: "11:45–12:45", hall: "Lecture Hall 1", topic: "Closing panel: what we will change on Monday", role: "Chair" },
    ],
  },
  {
    id: "chen",
    name: "Dr. James Chen",
    title: "Consultant Cardiologist",
    affiliation: "Queen Mary Hospital, Hong Kong",
    photo: "img/speakers/chen.jpg",
    bio: "James Chen’s work focuses on HFpEF phenotyping, cardio-oncology, and region-specific risk models for East Asian populations. He directs the HKU heart-failure clinic network.",
    sessions: [
      { day: "Friday 19 March", time: "09:30–10:15", hall: "Lecture Hall 2", topic: "Acute coronary syndromes: what to stop doing", role: "Speaker" },
      { day: "Friday 19 March", time: "11:00–11:45", hall: "Lecture Hall 2", topic: "HFpEF: what clinics can change this year", role: "Speaker" },
    ],
  },
  {
    id: "rahman",
    name: "Prof. Amina Rahman",
    title: "Professor of Infectious Diseases",
    affiliation: "Aga Khan University",
    photo: "img/speakers/rahman.jpg",
    bio: "Amina Rahman studies drug-resistant infections and practical stewardship in resource-variable settings. She has advised WHO regional offices on AMS implementation toolkits.",
    sessions: [
      { day: "Friday 19 March", time: "09:30–10:15", hall: "Lecture Hall 3", topic: "Sepsis bundles that still fail", role: "Speaker" },
      { day: "Friday 19 March", time: "14:00–14:45", hall: "Lecture Hall 1", topic: "Antimicrobial stewardship after the pandemic", role: "Speaker" },
    ],
  },
  {
    id: "tanaka",
    name: "Dr. Hiroshi Tanaka",
    title: "Consultant Neurosurgeon",
    affiliation: "Kyoto University Hospital",
    photo: "img/speakers/tanaka.jpg",
    bio: "Hiroshi Tanaka specialises in functional mapping, intra-operative imaging, and long-term survivorship after glioma resection. He teaches microsurgery courses across the Asia-Pacific.",
    sessions: [
      { day: "Thursday 18 March", time: "11:00–11:45", hall: "Lecture Hall 3", topic: "Awake mapping and glioma surgery", role: "Speaker" },
      { day: "Thursday 18 March", time: "14:00–14:45", hall: "Lecture Hall 3", topic: "Survivorship after brain tumour surgery", role: "Speaker" },
    ],
  },
  {
    id: "okafor",
    name: "Prof. Margaret Okafor",
    title: "Professor of Public Health",
    affiliation: "University of Ibadan / LSHTM",
    photo: "img/speakers/okafor.jpg",
    bio: "Margaret Okafor researches NCD delivery systems, community health-worker models, and the economics of prevention. She previously served as a national public-health advisor.",
    sessions: [
      { day: "Saturday 20 March", time: "09:00–09:45", hall: "Lecture Hall 1", topic: "Primary care as infrastructure", role: "Speaker" },
      { day: "Saturday 20 March", time: "10:00–10:45", hall: "Lecture Hall 2", topic: "Community health workers and NCD control", role: "Speaker" },
    ],
  },
  {
    id: "nair",
    name: "Dr. Priya Nair",
    title: "Consultant Endocrinologist",
    affiliation: "All India Institute of Medical Sciences",
    photo: "img/speakers/nair.jpg",
    bio: "Priya Nair’s practice and research sit at the intersection of metabolic disease, women’s health, and culturally grounded counselling. She co-leads a multi-city obesity registry.",
    sessions: [
      { day: "Friday 19 March", time: "14:00–14:45", hall: "Lecture Hall 2", topic: "Obesity, diabetes, and the clinic visit we keep getting wrong", role: "Speaker" },
      { day: "Friday 19 March", time: "16:00–16:45", hall: "Lecture Hall 2", topic: "Women’s metabolic health across midlife", role: "Speaker" },
    ],
  },
];

const COMMITTEE = [
  { name: "Prof. Elena Vargas", position: "Conference Chair" },
  { name: "Prof. Wei-Ling Tam", position: "Scientific Chair" },
  { name: "Dr. Samuel Ortiz", position: "Programme Chair" },
  { name: "Prof. Mei Lin Koh", position: "Local Host Chair" },
  { name: "Dr. Fatima Al-Hassan", position: "Abstracts Chair" },
  { name: "Mr. David Leung", position: "Operations & Sponsorship" },
];

const PROGRAMME_OVERVIEW = [
  {
    day: "Day 1",
    date: "Thursday 18 March",
    title: "Foundations",
    points: ["Opening in Lecture Hall 1", "Oncology, methods, and neurosurgery in parallel halls", "Welcome reception"],
  },
  {
    day: "Day 2",
    date: "Friday 19 March",
    title: "Practice",
    points: ["Cardiology in Lecture Hall 2", "Infectious disease in Lecture Hall 3", "Metabolic and stewardship plenaries"],
  },
  {
    day: "Day 3",
    date: "Saturday 20 March",
    title: "Systems",
    points: ["Public health and primary care", "Oral abstract finals across three halls", "Closing panel"],
  },
];

const PROGRAMME_DETAILED = [
  {
    day: "Thursday 18 March",
    blocks: [
      { time: "08:00–09:00", type: "break", title: "Registration and coffee", place: "Foyer" },
      {
        time: "09:00–09:25",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Opening address: a meeting that changes Monday morning", speaker: "Prof. Elena Vargas", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 2": { topic: "Housekeeping and how to use the three-hall programme", speaker: "Dr. Samuel Ortiz", chair: "Prof. Mei Lin Koh" },
          "Lecture Hall 3": { topic: "Abstracts briefing for presenting authors", speaker: "Dr. Fatima Al-Hassan", chair: "Mr. David Leung" },
        },
      },
      {
        time: "09:30–10:15",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Precision oncology that travels with the patient", speaker: "Prof. Elena Vargas", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 2": { topic: "Reading a trial like a clinician, not a statistician", speaker: "Dr. Samuel Ortiz", chair: "Dr. James Chen" },
          "Lecture Hall 3": { topic: "Consent conversations after glioma surgery", speaker: "Dr. Hiroshi Tanaka", chair: "Prof. Mei Lin Koh" },
        },
      },
      { time: "10:15–10:45", type: "break", title: "Refreshment break and exhibition", place: "Hall 5B" },
      {
        time: "11:00–11:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Liquid biopsy in routine oncology clinics", speaker: "Prof. Elena Vargas", chair: "Dr. Fatima Al-Hassan" },
          "Lecture Hall 2": { topic: "Writing a protocol that reviewers will fund", speaker: "Dr. Samuel Ortiz", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 3": { topic: "Awake mapping and glioma surgery", speaker: "Dr. Hiroshi Tanaka", chair: "Prof. Mei Lin Koh" },
        },
      },
      { time: "12:00–13:00", type: "break", title: "Lunch", place: "Foyer and exhibition" },
      {
        time: "14:00–14:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Oral abstracts: oncology", speaker: "Selected authors", chair: "Prof. Elena Vargas" },
          "Lecture Hall 2": { topic: "Oral abstracts: methods and education", speaker: "Selected authors", chair: "Dr. Samuel Ortiz" },
          "Lecture Hall 3": { topic: "Survivorship after brain tumour surgery", speaker: "Dr. Hiroshi Tanaka", chair: "Prof. Mei Lin Koh" },
        },
      },
      { time: "16:20–17:30", type: "break", title: "Welcome reception", place: "Foyer Terrace" },
    ],
  },
  {
    day: "Friday 19 March",
    blocks: [
      { time: "08:30–09:15", type: "break", title: "Meet-the-professor breakfasts (ticketed)", place: "Rooms 201–204" },
      {
        time: "09:30–10:15",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Cardio-oncology for the general oncologist", speaker: "Dr. James Chen", chair: "Prof. Elena Vargas" },
          "Lecture Hall 2": { topic: "Acute coronary syndromes: what to stop doing", speaker: "Dr. James Chen", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 3": { topic: "Sepsis bundles that still fail", speaker: "Prof. Amina Rahman", chair: "Dr. Fatima Al-Hassan" },
        },
      },
      { time: "10:15–10:45", type: "break", title: "Refreshment break", place: "Exhibition" },
      {
        time: "11:00–11:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Hospital AMS committees that actually meet", speaker: "Prof. Amina Rahman", chair: "Dr. Samuel Ortiz" },
          "Lecture Hall 2": { topic: "HFpEF: what clinics can change this year", speaker: "Dr. James Chen", chair: "Prof. Mei Lin Koh" },
          "Lecture Hall 3": { topic: "Drug-resistant infection in the referral hospital", speaker: "Prof. Amina Rahman", chair: "Dr. Fatima Al-Hassan" },
        },
      },
      { time: "12:00–13:00", type: "break", title: "Lunch", place: "Foyer and exhibition" },
      {
        time: "14:00–14:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Antimicrobial stewardship after the pandemic", speaker: "Prof. Amina Rahman", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 2": { topic: "Obesity, diabetes, and the clinic visit we keep getting wrong", speaker: "Dr. Priya Nair", chair: "Dr. James Chen" },
          "Lecture Hall 3": { topic: "Primary-care antibiotics: what to retire", speaker: "Prof. Amina Rahman", chair: "Prof. Margaret Okafor" },
        },
      },
      {
        time: "16:00–16:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Meet the editors", speaker: "Journal editors panel", chair: "Dr. Samuel Ortiz" },
          "Lecture Hall 2": { topic: "Women’s metabolic health across midlife", speaker: "Dr. Priya Nair", chair: "Prof. Mei Lin Koh" },
          "Lecture Hall 3": { topic: "Poster orals: infectious disease", speaker: "Selected authors", chair: "Prof. Amina Rahman" },
        },
      },
    ],
  },
  {
    day: "Saturday 20 March",
    blocks: [
      {
        time: "09:00–09:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Primary care as infrastructure", speaker: "Prof. Margaret Okafor", chair: "Prof. Elena Vargas" },
          "Lecture Hall 2": { topic: "Diabetes programmes that survive a budget cut", speaker: "Dr. Priya Nair", chair: "Dr. James Chen" },
          "Lecture Hall 3": { topic: "Measuring what matters in NCD clinics", speaker: "Prof. Margaret Okafor", chair: "Dr. Fatima Al-Hassan" },
        },
      },
      {
        time: "10:00–10:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Oral abstract finals: clinical science", speaker: "Selected authors", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 2": { topic: "Community health workers and NCD control", speaker: "Prof. Margaret Okafor", chair: "Dr. Priya Nair" },
          "Lecture Hall 3": { topic: "Oral abstract finals: health systems", speaker: "Selected authors", chair: "Dr. Samuel Ortiz" },
        },
      },
      {
        time: "11:45–12:45",
        type: "parallel",
        sessions: {
          "Lecture Hall 1": { topic: "Closing panel: what we will change on Monday", speaker: "Prof. Elena Vargas", chair: "Prof. Wei-Ling Tam" },
          "Lecture Hall 2": { topic: "Awards: clinical abstracts", speaker: "Dr. Fatima Al-Hassan", chair: "Dr. Samuel Ortiz" },
          "Lecture Hall 3": { topic: "Awards: systems and education", speaker: "Prof. Margaret Okafor", chair: "Prof. Mei Lin Koh" },
        },
      },
    ],
  },
];

const SPONSORS = {
  platinum: [
    { name: "Meridian BioPharma", url: "https://example.com", blurb: "Oncology and rare-disease medicines." },
    { name: "Harbour Diagnostics", url: "https://example.com", blurb: "Laboratory and genomic testing platforms." },
  ],
  gold: [
    { name: "NovaPulse Devices", url: "https://example.com", blurb: "Cardiac monitoring and imaging." },
    { name: "Lumen Health Systems", url: "https://example.com", blurb: "Hospital EHR and clinical decision support." },
    { name: "Pacific Vaccines", url: "https://example.com", blurb: "Immunisation programmes and adult vaccines." },
  ],
  silver: [
    { name: "ClearPath Imaging", url: "https://example.com", blurb: "Point-of-care ultrasound." },
    { name: "Eastwind Nutrition", url: "https://example.com", blurb: "Clinical nutrition and metabolic care." },
    { name: "Aether Simulation", url: "https://example.com", blurb: "Medical education simulation." },
    { name: "Kindred Journals", url: "https://example.com", blurb: "Open-access clinical publishing." },
  ],
};

const ABSTRACT_CATEGORIES = [
  "Original research",
  "Systematic review / meta-analysis",
  "Case report / case series",
  "Quality improvement",
  "Medical education",
  "Public health / health systems",
];