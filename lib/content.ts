// Palm Guard — single source of content. All copy is verbatim EN | AR from the spec.

export type Pair = { en: string; ar: string };

export const brand: Pair = { en: "Palm Guard", ar: "بالم جارد" };

export const meta = {
  title: "Palm Guard — Early Acoustic Detection of Red Palm Weevil | بالم جارد",
  titleAr: "بالم جارد — نظام كشف مبكر لسوسة النخيل الحمراء | Palm Guard",
  description:
    "Solar-powered acoustic AI that detects Red Palm Weevil 3–6 months before visible symptoms. 93% accuracy, 6–8 JOD per unit, built in Jordan.",
};

export const nav = {
  links: [
    { label: { en: "The Problem", ar: "المشكلة" }, href: "#problem" },
    { label: { en: "Solution", ar: "الحل" }, href: "#solution" },
    { label: { en: "How it Works", ar: "آلية العمل" }, href: "#how" },
    { label: { en: "Traction", ar: "الإنجازات" }, href: "#traction" },
    { label: { en: "Roadmap", ar: "خارطة الطريق" }, href: "#roadmap" },
    { label: { en: "Team", ar: "الفريق" }, href: "#team" },
  ] as { label: Pair; href: string }[],
  cta: { en: "Request a Pilot", ar: "اطلب تجربة ميدانية" } as Pair,
};

export const hero = {
  eyebrow: {
    en: "AI-Powered Agritech · Made in Jordan",
    ar: "تقنية زراعية بالذكاء الاصطناعي · صُنعت في الأردن",
  } as Pair,
  h1a: { en: "Trees can't speak.", ar: "النخيل لا يتكلم." } as Pair,
  h1b: { en: "We gave them a voice.", ar: "نحن منحناه صوتًا." } as Pair,
  sub: {
    en: "Palm Guard is a solar-powered acoustic AI device that mounts on a palm, hears Red Palm Weevil larvae feeding inside the trunk, and alerts the farmer 3–6 months before any visible symptom appears.",
    ar: "بالم جارد جهاز ذكي يعمل بالطاقة الشمسية، يُثبَّت على النخلة ويستمع لصوت يرقات سوسة النخيل الحمراء داخل الجذع، ويُنذر المزارع قبل 3–6 أشهر من ظهور أي أعراض.",
  } as Pair,
  ctaPrimary: { en: "Request a Field Pilot", ar: "اطلب تجربة ميدانية" } as Pair,
  ctaSecondary: { en: "See How it Works", ar: "شاهد آلية العمل" } as Pair,
  chips: [
    { en: "93% detection accuracy", ar: "دقة الكشف 93%" },
    { en: "3–6 months early warning", ar: "إنذار مبكر 3–6 أشهر" },
    { en: "LoRa — works without internet", ar: "LoRa — يعمل دون إنترنت" },
    { en: "6–8 JOD per unit", ar: "6–8 دنانير للوحدة" },
  ] as Pair[],
  floatA: {
    en: "Solar-powered · Autonomous",
    ar: "طاقة شمسية · تشغيل ذاتي",
  } as Pair,
  floatB: {
    en: "Steel acoustic trunk probe",
    ar: "مسبار صوتي فولاذي للجذع",
  } as Pair,
  listening: { en: "LISTENING", ar: "يستمع الآن" } as Pair,
};

export const stats = {
  items: [
    {
      prefix: "",
      from: 0,
      to: 700,
      suffix: "K+",
      label: { en: "date palms at risk in Jordan", ar: "نخلة مهددة في الأردن" },
    },
    {
      prefix: "$",
      from: 0,
      to: 5,
      suffix: "B+",
      label: {
        en: "annual losses across MENA",
        ar: "خسائر سنوية في الشرق الأوسط",
      },
    },
    {
      prefix: "70–",
      from: 70,
      to: 80,
      suffix: "%",
      label: {
        en: "projected reduction in tree losses",
        ar: "خفض متوقع في خسائر الأشجار",
      },
    },
    {
      prefix: "",
      from: 0,
      to: 50,
      suffix: "%",
      label: { en: "less pesticide use", ar: "خفض في استخدام المبيدات" },
    },
  ],
};

export const problem = {
  eyebrow: { en: "01 · The Problem", ar: "01 · المشكلة" } as Pair,
  h2: {
    en: "The silent killer of date palms",
    ar: "القاتل الصامت لأشجار النخيل",
  } as Pair,
  intro: {
    en: "The Red Palm Weevil (Rhynchophorus ferrugineus) is the most destructive palm pest in the Middle East and North Africa. Its larvae devour the trunk from the inside — by the time symptoms appear, the tree is already collapsing.",
    ar: "سوسة النخيل الحمراء أخطر آفة تهدد النخيل في الشرق الأوسط وشمال أفريقيا. تلتهم يرقاتها الجذع من الداخل، ولا تظهر الأعراض إلا بعد فوات الأوان — حين تكون النخلة في طور الانهيار الكامل.",
  } as Pair,
  cards: [
    {
      title: { en: "Invisible from outside", ar: "غير مرئية من الخارج" },
      desc: {
        en: "Larvae feed deep inside the trunk for 3–6 months with zero visible signs. The infestation is silent — but it isn't soundless.",
        ar: "تتغذى اليرقات في عمق الجذع لمدة 3–6 أشهر دون أي علامة ظاهرة. الإصابة صامتة للعين — لكنها ليست صامتة للأذن.",
      },
    },
    {
      title: { en: "Manual inspection fails", ar: "الفحص التقليدي يفشل" },
      desc: {
        en: "Visual checks only catch infestations at late stages, and no farm can inspect every tree continuously, day and night.",
        ar: "الفحص البصري لا يكشف الإصابة إلا في مراحلها المتأخرة، ولا تستطيع أي مزرعة فحص كل شجرة بشكل مستمر ليلًا ونهارًا.",
      },
    },
    {
      title: { en: "The loss is irreversible", ar: "الخسارة لا تُعوَّض" },
      desc: {
        en: "One mature palm equals 50–100 years of production. Imported detection tools cost 150–250 JOD per tree — out of reach for most farmers.",
        ar: "خسارة نخلة واحدة تعني خسارة 50–100 سنة من الإنتاج، فيما تكلف أجهزة الكشف المستوردة 150–250 دينارًا للشجرة — بعيدًا عن متناول معظم المزارعين.",
      },
    },
  ],
};

export const solution = {
  eyebrow: { en: "02 · The Solution", ar: "02 · الحل" } as Pair,
  h2: {
    en: "A device that listens to the tree",
    ar: "جهاز يستمع إلى النخلة",
  } as Pair,
  intro: {
    en: "Palm Guard mounts on the trunk, drives a steel acoustic probe into the fibre, and runs the entire AI pipeline on the device itself — no cloud, no internet, no recurring cost.",
    ar: "يُثبَّت بالم جارد على الجذع بمسبار صوتي فولاذي، ويشغّل نموذج الذكاء الاصطناعي كاملًا على الجهاز نفسه — بلا سحابة، بلا إنترنت، وبلا أي تكاليف متكررة.",
  } as Pair,
  badge: {
    en: "All AI runs on-device — no cloud, no subscriptions",
    ar: "الذكاء الاصطناعي يعمل بالكامل على الجهاز — بلا سحابة، بلا اشتراكات",
  } as Pair,
  specs: [
    {
      label: "MIC",
      title: { en: "INMP441 MEMS microphone", ar: "ميكروفون INMP441 رقمي" },
      desc: {
        en: "Captures larvae acoustic signatures at 44.1 kHz",
        ar: "يلتقط البصمة الصوتية لليرقات بتردد 44.1 كيلوهرتز",
      },
    },
    {
      label: "PRB",
      title: { en: "Steel acoustic probe", ar: "مسبار صوتي فولاذي" },
      desc: {
        en: "Direct trunk-contact sensing, deep inside the fibre",
        ar: "استشعار بالتلامس المباشر في عمق ألياف الجذع",
      },
    },
    {
      label: "S3",
      title: { en: "ESP32-S3 edge AI", ar: "معالجة طرفية ESP32-S3" },
      desc: {
        en: "The full ensemble model runs locally on the chip",
        ar: "النموذج الهجين الكامل يعمل محليًا على المتحكم",
      },
    },
    {
      label: "LoRa",
      title: { en: "LoRa SX1276 long-range", ar: "اتصال LoRa بعيد المدى" },
      desc: {
        en: "Up to 10 km coverage — no internet or cellular needed",
        ar: "تغطية تصل إلى 10 كم — دون إنترنت أو شبكة خلوية",
      },
    },
    {
      label: "SUN",
      title: { en: "Solar + Li-ion power", ar: "طاقة شمسية وبطارية ليثيوم" },
      desc: {
        en: "Fully autonomous, 24/7, zero maintenance",
        ar: "تشغيل ذاتي على مدار الساعة دون صيانة",
      },
    },
    {
      label: "IP65",
      title: { en: "IP65 weatherproof body", ar: "تغليف بمعيار IP65" },
      desc: {
        en: "Field-ready in heat, dust and rain — plus OTA updates",
        ar: "جاهز للميدان في الحر والغبار والمطر — مع تحديثات عن بُعد",
      },
    },
  ],
};

export const how = {
  eyebrow: { en: "03 · How it Works", ar: "03 · آلية العمل" } as Pair,
  h2: {
    en: "From a faint chew to the farmer's phone",
    ar: "من قضمةٍ خافتة إلى هاتف المزارع",
  } as Pair,
  intro: {
    en: "A five-stage pipeline turns vibrations inside the trunk into a precise, geolocated alert.",
    ar: "خمس مراحل تحوّل الاهتزازات داخل الجذع إلى تنبيه دقيق بموقع النخلة المصابة.",
  } as Pair,
  steps: [
    {
      title: { en: "Capture", ar: "الالتقاط" },
      desc: {
        en: "The I2S microphone and DS18B20 temperature sensor sample the trunk continuously.",
        ar: "الميكروفون وحساس الحرارة DS18B20 يلتقطان البيانات من الجذع باستمرار.",
      },
    },
    {
      title: { en: "Edge processing", ar: "المعالجة المحلية" },
      desc: {
        en: "ESP32-S3 extracts 33 MFCC coefficients plus spectral features, filtering field noise.",
        ar: "يستخرج ESP32-S3 ثلاثة وثلاثين معاملًا صوتيًا (MFCC) مع خصائص طيفية، ويرشّح ضوضاء الميدان.",
      },
    },
    {
      title: { en: "Ensemble AI", ar: "الذكاء الاصطناعي" },
      desc: {
        en: "GMM, SVM and CNN-LSTM models vote on the probability of larval activity.",
        ar: "نماذج GMM وSVM وCNN-LSTM تصوّت معًا على احتمالية نشاط اليرقات.",
      },
    },
    {
      title: { en: "LoRa uplink", ar: "الإرسال عبر LoRa" },
      desc: {
        en: "The verdict travels to the gateway, then to the cloud dashboard — no internet on site.",
        ar: "تُرسل النتيجة إلى البوابة ثم إلى لوحة التحكم السحابية — دون إنترنت في الموقع.",
      },
    },
    {
      title: { en: "Instant alert", ar: "التنبيه الفوري" },
      desc: {
        en: "The farmer receives a notification with the exact tree's GPS location and risk level.",
        ar: "يصل المزارع إشعار فوري بموقع النخلة المصابة بدقة GPS ومستوى الخطر.",
      },
    },
  ],
  footer: {
    en: "✓ 93%+ detection accuracy — before any visual sign appears",
    ar: "✓ دقة كشف تتجاوز 93% — قبل ظهور أي علامة بصرية",
  } as Pair,
  models: ["GMM · 20%", "SVM · 30%", "CNN-LSTM · 50%"],
};

export const comparison = {
  eyebrow: { en: "04 · Why Palm Guard", ar: "04 · لماذا بالم جارد" } as Pair,
  h2: {
    en: "A different economics of protection",
    ar: "اقتصاد مختلف لحماية النخيل",
  } as Pair,
  traditionalTitle: {
    en: "Traditional methods",
    ar: "الطرق التقليدية",
  } as Pair,
  traditional: [
    {
      en: "Late visual detection — after the damage is done",
      ar: "كشف بصري متأخر — بعد وقوع الضرر",
    },
    {
      en: "150–250 JOD per tree for imported detection tools",
      ar: "150–250 دينارًا للشجرة في الحلول المستوردة",
    },
    {
      en: "Intensive blanket pesticide spraying",
      ar: "رشّ مكثف وعشوائي للمبيدات",
    },
    {
      en: "No continuous, around-the-clock coverage",
      ar: "لا توجد مراقبة مستمرة على مدار اليوم",
    },
  ] as Pair[],
  palmguardTitle: { en: "Palm Guard", ar: "بالم جارد" } as Pair,
  palmguard: [
    {
      en: "Acoustic early warning, 3–6 months ahead",
      ar: "إنذار صوتي مبكر قبل 3–6 أشهر",
    },
    {
      en: "6–8 JOD per unit — designed and built in Jordan",
      ar: "6–8 دنانير للوحدة — تصميم وتصنيع أردني",
    },
    {
      en: "Targeted treatment cuts pesticide use by 50%",
      ar: "معالجة موجّهة تخفض المبيدات بنسبة 50%",
    },
    {
      en: "24/7 solar-powered monitoring of every tree",
      ar: "مراقبة شمسية لكل شجرة على مدار الساعة",
    },
  ] as Pair[],
};

export const traction = {
  eyebrow: {
    en: "05 · Traction & Recognition",
    ar: "05 · الإنجازات والاعتراف",
  } as Pair,
  h2: {
    en: "Validated in the lab. Recognized in the field.",
    ar: "تحقق في المختبر. واعتراف في الميدان.",
  } as Pair,
  cards: [
    {
      tag: { en: "Award", ar: "جائزة" },
      title: { en: "Best Innovation Award", ar: "جائزة أفضل ابتكار" },
      desc: {
        en: "Jordan International Date Palm Festival — best agricultural technology solution.",
        ar: "مهرجان نخيل الأردن الدولي للتمور — أفضل حل تكنولوجي زراعي.",
      },
    },
    {
      tag: { en: "2nd Place", ar: "المركز الثاني" },
      title: {
        en: "AAU Robotics & AI 2026",
        ar: "مسابقة AAU للروبوتات والذكاء الاصطناعي 2026",
      },
      desc: {
        en: "Second place among dozens of competing university teams.",
        ar: "المركز الثاني من بين عشرات الفرق الجامعية المتنافسة.",
      },
    },
    {
      tag: { en: "Submitted", ar: "تقديم رسمي" },
      title: { en: "Khalifa International Award", ar: "جائزة خليفة الدولية" },
      desc: {
        en: "Official submission — Khalifa International Award for Date Palm & Agricultural Innovation.",
        ar: "تقديم رسمي لجائزة خليفة الدولية لنخيل التمر والابتكار الزراعي.",
      },
    },
    {
      tag: { en: "Phase 2", ar: "المرحلة الثانية" },
      title: { en: "RoboCraft Competition", ar: "مسابقة RoboCraft" },
      desc: {
        en: "Advanced to Phase 2 with a comprehensive technical report.",
        ar: "التأهل للمرحلة الثانية بتقرير تقني شامل.",
      },
    },
  ],
};

export const roadmap = {
  eyebrow: { en: "06 · Roadmap", ar: "06 · خارطة الطريق" } as Pair,
  h2: {
    en: "From prototype to the region",
    ar: "من النموذج الأولي إلى المنطقة",
  } as Pair,
  items: [
    {
      period: { en: "Now", ar: "الآن" },
      title: { en: "Working prototype", ar: "نموذج أولي عامل" },
      tag: { en: "DONE ✓", ar: "منجز ✓" } as Pair,
      done: true,
      desc: {
        en: "Functional prototype validated at 93% accuracy on real acoustic data from infested palms.",
        ar: "نموذج عامل تم التحقق منه بدقة 93% على بيانات صوتية حقيقية من نخيل مصاب.",
      },
    },
    {
      period: { en: "0–6 Months", ar: "0–6 أشهر" },
      title: { en: "Jordan Valley field pilot", ar: "تجربة ميدانية في وادي الأردن" },
      tag: null,
      done: false,
      desc: {
        en: "Scaled deployment across Jordan Valley farms, in partnership with the Ministry of Agriculture, to build the region's largest RPW acoustic dataset.",
        ar: "نشر موسّع في مزارع الأغوار بالشراكة مع وزارة الزراعة الأردنية، لبناء أكبر قاعدة بيانات صوتية لسوسة النخيل في المنطقة.",
      },
    },
    {
      period: { en: "6–15 Months", ar: "6–15 شهرًا" },
      title: { en: "Commercial launch", ar: "الإطلاق التجاري" },
      tag: null,
      done: false,
      desc: {
        en: "Local manufacturing in Jordan, a distributor network, and a service subscription model for farmers and cooperatives.",
        ar: "تصنيع محلي في الأردن، وبناء شبكة موزعين، وإطلاق نموذج اشتراك خدمي للمزارعين والتعاونيات.",
      },
    },
    {
      period: { en: "15+ Months", ar: "بعد 15 شهرًا" },
      title: { en: "Regional expansion", ar: "التوسع الإقليمي" },
      tag: null,
      done: false,
      desc: {
        en: "Saudi Arabia, the UAE, Egypt and Morocco — then adapting the platform to olives, citrus and other crops threatened by internal pests.",
        ar: "السعودية والإمارات ومصر والمغرب — ثم تكييف المنصة لحماية الزيتون والحمضيات والمحاصيل الأخرى المعرّضة لآفات داخلية.",
      },
    },
  ],
};

export const sdg = {
  mission: {
    en: "Protecting date palms. Securing livelihoods. Building a sustainable future.",
    ar: "نحمي النخيل. نؤمّن سبل العيش. نبني مستقبلًا مستدامًا.",
  } as Pair,
  tags: [
    { en: "SDG 2 · Zero Hunger", ar: "هدف التنمية 2 · القضاء على الجوع" },
    { en: "SDG 15 · Life on Land", ar: "هدف التنمية 15 · الحياة في البر" },
    { en: "National food security", ar: "الأمن الغذائي الوطني" },
  ] as Pair[],
};

export const team = {
  eyebrow: { en: "07 · The Team", ar: "07 · الفريق" } as Pair,
  h2: {
    en: "Team Vcoders — University of Petra",
    ar: "فريق Vcoders — جامعة البترا",
  } as Pair,
  intro: {
    en: "Three engineers covering the full stack of the problem: intelligence, hardware, and the field.",
    ar: "ثلاثة مهندسين يغطون المشكلة من أطرافها كلها: الذكاء الاصطناعي، والعتاد، والميدان.",
  } as Pair,
  members: [
    {
      initials: "AK",
      name: { en: "Abdelrahman Al-Kurdi", ar: "عبد الرحمن الكردي" },
      role: { en: "AI Engineer", ar: "مهندس الذكاء الاصطناعي" },
      desc: {
        en: "System architecture, the CNN-LSTM acoustic classification model, cloud backend and the farmer app.",
        ar: "تصميم بنية النظام، نموذج التصنيف الصوتي CNN-LSTM، البرمجيات السحابية وتطبيق المزارع.",
      },
    },
    {
      initials: "AH",
      name: { en: "Abdulrahman Al-Hammouni", ar: "عبد الرحمن الهمّوني" },
      role: { en: "Embedded Systems Engineer", ar: "مهندس الأنظمة المدمجة" },
      desc: {
        en: "ESP32-S3 firmware and sensors, LoRa protocol and power management, circuit and enclosure design.",
        ar: "برمجة ESP32-S3 وإدارة الحساسات، بروتوكول LoRa واستهلاك الطاقة، تصميم الدائرة والتغليف.",
      },
    },
    {
      initials: "ZA",
      name: { en: "Zaid Abu Al-Shaar", ar: "زيد أبو الشعر" },
      role: { en: "Data & Field Validation", ar: "مهندس البيانات والاختبار الميداني" },
      desc: {
        en: "Acoustic data collection from real farms, training dataset preparation, and field accuracy testing.",
        ar: "جمع البيانات الصوتية من مزارع حقيقية، تجهيز مجموعات التدريب، واختبار الدقة الميدانية.",
      },
    },
  ],
};

export const contact = {
  eyebrow: { en: "08 · Get in Touch", ar: "08 · تواصل معنا" } as Pair,
  h2: {
    en: "Protect your palms before it's too late.",
    ar: "احمِ نخيلك قبل فوات الأوان.",
  } as Pair,
  sub: {
    en: "Farmers, cooperatives, ministries and award committees — request a field pilot, a live demo, or the full technical dossier.",
    ar: "للمزارعين والتعاونيات والوزارات ولجان التحكيم — اطلبوا تجربة ميدانية أو عرضًا حيًا أو الملف التقني الكامل.",
  } as Pair,
  whatsappUrl:
    "https://wa.me/962776171814?text=Hi%2C%20I%27m%20interested%20in%20a%20Palm%20Guard%20field%20pilot.",
  whatsappLabel: { en: "WhatsApp Us", ar: "راسلنا واتساب" } as Pair,
  emailUrl:
    "mailto:abdalrhmankurdi12@gmail.com?subject=Palm%20Guard%20—%20Pilot%20Request",
  emailLabel: { en: "Email the Team", ar: "راسلنا عبر البريد" } as Pair,
  location: { en: "Amman, Jordan", ar: "عمّان، الأردن" } as Pair,
  phone: "+962 7 7617 1814",
  email: "abdalrhmankurdi12@gmail.com",
};

export const footer = {
  blurb: {
    en: "An early-warning acoustic detection system for Red Palm Weevil. Designed and built in Jordan by Team Vcoders, University of Petra.",
    ar: "نظام كشف مبكر لإصابات سوسة النخيل الحمراء بالصوت والذكاء الاصطناعي. صُمم وطُوّر في الأردن بأيدي فريق Vcoders — جامعة البترا.",
  } as Pair,
  exploreTitle: { en: "Explore", ar: "استكشف" } as Pair,
  explore: [
    { label: { en: "The Problem", ar: "المشكلة" }, href: "#problem" },
    { label: { en: "Solution", ar: "الحل" }, href: "#solution" },
    { label: { en: "How it Works", ar: "آلية العمل" }, href: "#how" },
    { label: { en: "Roadmap", ar: "خارطة الطريق" }, href: "#roadmap" },
  ] as { label: Pair; href: string }[],
  companyTitle: { en: "Company", ar: "الشركة" } as Pair,
  company: [
    { label: { en: "Traction", ar: "الإنجازات" }, href: "#traction" },
    { label: { en: "Team", ar: "الفريق" }, href: "#team" },
    { label: { en: "Get in Touch", ar: "تواصل معنا" }, href: "#contact" },
  ] as { label: Pair; href: string }[],
  copyright: {
    en: "© 2026 Palm Guard · Team Vcoders · University of Petra",
    ar: "© 2026 بالم جارد · فريق Vcoders · جامعة البترا",
  } as Pair,
  madeWith: {
    en: "Made with care in Amman, Jordan",
    ar: "صُنع بعناية في عمّان، الأردن",
  } as Pair,
};
