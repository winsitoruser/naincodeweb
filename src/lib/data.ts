export const siteConfig = {
  name: "Naincode",
  fullName: "PT. Naincode Inti Technology",
  tagline: "Engineering Digital Excellence",
  description:
    "Partner teknologi terpercaya untuk transformasi digital bisnis Anda. Kami membangun solusi software custom, aplikasi mobile, dan sistem enterprise yang scalable.",
  url: "https://naincode.id",
  email: "hello@naincode.id",
  phone: "+62 21 5050 1234",
  whatsapp: "6281234567890",
  address: "Jakarta, Indonesia",
  socials: {
    linkedin: "https://linkedin.com/company/naincode",
    instagram: "https://instagram.com/naincode.id",
    github: "https://github.com/naincode",
    youtube: "https://youtube.com/@naincode",
  },
};

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  subServices: SubService[];
  benefits: string[];
  techStack: string[];
}

export interface SubService {
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Application Development",
    shortTitle: "Web Development",
    tagline: "Membangun Aplikasi Web yang Powerful & Scalable",
    description:
      "Kami mengembangkan aplikasi web modern dengan teknologi terkini yang dirancang untuk performa tinggi, keamanan optimal, dan pengalaman pengguna terbaik. Dari landing page hingga enterprise platform, setiap solusi dibangun dengan arsitektur yang scalable.",
    icon: "Globe",
    features: [
      "Single Page Application (SPA) & Progressive Web App (PWA)",
      "Server-Side Rendering untuk SEO optimal",
      "Real-time features dengan WebSocket",
      "API Development & Integration",
      "Responsive & cross-browser compatible",
      "Performance optimization & caching strategies",
    ],
    subServices: [
      {
        title: "Custom Web Application",
        description:
          "Aplikasi web tailor-made yang dibangun dari nol sesuai kebutuhan bisnis spesifik Anda. Menggunakan arsitektur microservices untuk skalabilitas dan maintainability jangka panjang.",
        features: [
          "Arsitektur microservices",
          "RESTful & GraphQL API",
          "Real-time dashboard",
          "Role-based access control",
          "Automated testing & CI/CD",
        ],
      },
      {
        title: "E-Commerce Platform",
        description:
          "Platform e-commerce kustom dengan fitur lengkap: manajemen produk, payment gateway, inventori, dan analytics. Dioptimalkan untuk konversi dan pengalaman belanja terbaik.",
        features: [
          "Multi payment gateway integration",
          "Inventory management system",
          "Customer analytics & reporting",
          "Promo & discount engine",
          "Multi-vendor marketplace support",
        ],
      },
      {
        title: "Content Management System (CMS)",
        description:
          "CMS kustom atau headless CMS yang memudahkan tim Anda mengelola konten tanpa ketergantungan developer. Fleksibel, aman, dan mudah digunakan.",
        features: [
          "Headless CMS architecture",
          "Visual page builder",
          "Multi-language support",
          "Media management",
          "Version control & workflow approval",
        ],
      },
      {
        title: "Landing Page & Corporate Website",
        description:
          "Website company profile dan landing page yang memukau dengan animasi modern, SEO-friendly, dan dioptimalkan untuk lead generation.",
        features: [
          "Modern UI/UX design",
          "SEO optimization",
          "Lead capture forms",
          "Analytics integration",
          "Lightning-fast performance",
        ],
      },
    ],
    benefits: [
      "Performa web 3x lebih cepat dari rata-rata industri",
      "SEO-ready architecture untuk ranking Google lebih baik",
      "Scalable hingga jutaan pengguna",
      "Code quality terjamin dengan automated testing",
    ],
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Development",
    tagline: "Aplikasi Mobile Native & Cross-Platform Berkualitas Tinggi",
    description:
      "Kami membangun aplikasi mobile yang tidak hanya indah secara visual, tetapi juga powerful dalam fungsionalitas. Dari konsep hingga deployment di App Store & Play Store, kami handle semuanya.",
    icon: "Smartphone",
    features: [
      "iOS & Android native development",
      "Cross-platform dengan React Native & Flutter",
      "Offline-first architecture",
      "Push notification & deep linking",
      "Biometric authentication",
      "App Store & Play Store optimization",
    ],
    subServices: [
      {
        title: "iOS Native Development",
        description:
          "Aplikasi iOS native dengan Swift yang memanfaatkan penuh ekosistem Apple. Performa optimal, UI smooth, dan integrasi seamless dengan Apple services.",
        features: [
          "Swift & SwiftUI",
          "Apple Pay integration",
          "HealthKit & ARKit support",
          "Widget & App Clips",
          "Apple Watch companion app",
        ],
      },
      {
        title: "Android Native Development",
        description:
          "Aplikasi Android native dengan Kotlin menggunakan arsitektur modern. Support berbagai device dan resolusi layar dengan performa konsisten.",
        features: [
          "Kotlin & Jetpack Compose",
          "Material Design 3",
          "Google Pay integration",
          "Background services & workers",
          "Multi-device support",
        ],
      },
      {
        title: "Cross-Platform Development",
        description:
          "Satu codebase untuk iOS & Android menggunakan React Native atau Flutter. Efisiensi biaya development hingga 40% tanpa mengorbankan kualitas.",
        features: [
          "React Native / Flutter",
          "Shared business logic",
          "Native module integration",
          "Hot reload development",
          "Single codebase maintenance",
        ],
      },
      {
        title: "Progressive Web App (PWA)",
        description:
          "Aplikasi web yang berjalan seperti native app. Dapat diinstall, bekerja offline, dan memberikan pengalaman app-like tanpa perlu download dari store.",
        features: [
          "Installable web app",
          "Offline functionality",
          "Push notifications",
          "Fast loading & caching",
          "Cross-platform compatibility",
        ],
      },
    ],
    benefits: [
      "Time-to-market 2x lebih cepat",
      "Cross-platform hemat 40% biaya development",
      "Rating App Store 4.5+ untuk setiap project",
      "Post-launch support & maintenance",
    ],
    techStack: [
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "Firebase",
      "GraphQL",
      "CI/CD",
      "TestFlight",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Research",
    shortTitle: "UI/UX Design",
    tagline: "Desain yang Mengubah Pengguna Menjadi Pelanggan Setia",
    description:
      "Tim desainer kami menggabungkan riset mendalam, kreativitas, dan data-driven approach untuk menciptakan pengalaman digital yang intuitif, memukau, dan mengkonversi. Setiap pixel dirancang dengan purpose.",
    icon: "Palette",
    features: [
      "User Research & Persona Development",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design System Development",
    ],
    subServices: [
      {
        title: "User Research & Strategy",
        description:
          "Riset mendalam tentang pengguna target Anda melalui interview, survey, dan analisis kompetitor. Hasilnya menjadi fondasi strategi desain yang tepat sasaran.",
        features: [
          "User interviews & surveys",
          "Competitive analysis",
          "User persona creation",
          "Journey mapping",
          "Stakeholder workshops",
        ],
      },
      {
        title: "UX Design & Wireframing",
        description:
          "Merancang alur pengguna yang optimal dan wireframe interaktif. Setiap interaksi divalidasi melalui testing sebelum masuk tahap visual design.",
        features: [
          "User flow optimization",
          "Low & high-fidelity wireframes",
          "Interactive prototypes",
          "A/B testing framework",
          "Accessibility compliance (WCAG)",
        ],
      },
      {
        title: "UI Visual Design",
        description:
          "Transformasi wireframe menjadi desain visual yang stunning. Konsisten dengan brand identity dan mengikuti tren desain terkini.",
        features: [
          "Modern visual design",
          "Micro-interactions & animations",
          "Responsive design for all screens",
          "Brand consistency",
          "Dark & light mode support",
        ],
      },
      {
        title: "Design System & Guidelines",
        description:
          "Membangun design system komprehensif yang menjamin konsistensi di seluruh produk digital Anda. Reusable components, tokens, dan documentation lengkap.",
        features: [
          "Component library",
          "Design tokens & variables",
          "Style guide documentation",
          "Figma library management",
          "Developer handoff specs",
        ],
      },
    ],
    benefits: [
      "Conversion rate meningkat rata-rata 200%",
      "User satisfaction score 90%+",
      "Reduced development rework by 60%",
      "Consistent brand experience across platforms",
    ],
    techStack: [
      "Figma",
      "Adobe Creative Suite",
      "Maze",
      "Hotjar",
      "Principle",
      "Lottie",
      "Storybook",
      "Zeplin",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    shortTitle: "Cloud & DevOps",
    tagline: "Infrastruktur Cloud yang Andal, Aman, dan Auto-Scaling",
    description:
      "Kami merancang dan mengelola infrastruktur cloud yang robust untuk bisnis Anda. Dari migrasi cloud hingga setup CI/CD pipeline, kami memastikan sistem Anda selalu available, secure, dan cost-efficient.",
    icon: "Cloud",
    features: [
      "Cloud architecture design",
      "Container orchestration (Kubernetes)",
      "CI/CD pipeline automation",
      "Infrastructure as Code (IaC)",
      "24/7 monitoring & alerting",
      "Cost optimization",
    ],
    subServices: [
      {
        title: "Cloud Migration & Architecture",
        description:
          "Migrasi infrastruktur on-premise ke cloud dengan zero-downtime. Desain arsitektur cloud yang optimal untuk workload spesifik Anda.",
        features: [
          "AWS / GCP / Azure migration",
          "Lift & shift or re-architecture",
          "Multi-cloud & hybrid cloud",
          "Disaster recovery planning",
          "Cost analysis & optimization",
        ],
      },
      {
        title: "CI/CD & Automation",
        description:
          "Otomatisasi proses development hingga deployment. Dari code commit hingga production dalam hitungan menit, bukan hari.",
        features: [
          "GitHub Actions / GitLab CI",
          "Automated testing pipeline",
          "Blue-green & canary deployments",
          "Infrastructure as Code (Terraform)",
          "Secret management",
        ],
      },
      {
        title: "Container & Orchestration",
        description:
          "Containerisasi aplikasi dengan Docker dan orchestration dengan Kubernetes. Scalable, portable, dan easily manageable.",
        features: [
          "Docker containerization",
          "Kubernetes cluster management",
          "Service mesh (Istio)",
          "Auto-scaling policies",
          "Resource optimization",
        ],
      },
      {
        title: "Monitoring & Observability",
        description:
          "Monitoring proaktif 24/7 dengan alerting real-time. Identifikasi dan resolve masalah sebelum berdampak ke pengguna.",
        features: [
          "Real-time monitoring dashboard",
          "Log aggregation & analysis",
          "APM & distributed tracing",
          "Custom alerting rules",
          "Incident response automation",
        ],
      },
    ],
    benefits: [
      "99.99% uptime guarantee",
      "Deployment time berkurang 90%",
      "Cloud cost optimization hingga 40%",
      "Auto-scaling sesuai traffic",
    ],
    techStack: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Prometheus",
      "Grafana",
      "ArgoCD",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Consulting",
    shortTitle: "Digital Transformation",
    tagline: "Akselerasi Transformasi Digital Bisnis Anda",
    description:
      "Kami membantu perusahaan menavigasi perjalanan transformasi digital — dari assessment, strategi, hingga implementasi. Dengan pendekatan holistik, kami memastikan teknologi benar-benar mendorong pertumbuhan bisnis.",
    icon: "Zap",
    features: [
      "Digital maturity assessment",
      "Technology roadmap planning",
      "Legacy system modernization",
      "Process automation (RPA)",
      "Data analytics & BI",
      "Change management support",
    ],
    subServices: [
      {
        title: "Digital Strategy & Consulting",
        description:
          "Assessment menyeluruh terhadap kematangan digital perusahaan Anda dan penyusunan roadmap transformasi yang realistis dan terukur.",
        features: [
          "Digital maturity assessment",
          "Technology audit",
          "Competitive benchmarking",
          "Transformation roadmap",
          "ROI projection & KPI setting",
        ],
      },
      {
        title: "System Integration",
        description:
          "Mengintegrasikan berbagai sistem dan platform yang ada menjadi ekosistem digital yang terhubung dan efisien. API-first approach untuk interoperabilitas maksimal.",
        features: [
          "API gateway development",
          "ERP/CRM integration",
          "Third-party service integration",
          "Data synchronization",
          "Legacy system bridging",
        ],
      },
      {
        title: "Legacy Modernization",
        description:
          "Transformasi sistem lama menjadi platform modern tanpa mengganggu operasional bisnis. Pendekatan bertahap dengan risiko minimal.",
        features: [
          "Strangler fig pattern migration",
          "Monolith to microservices",
          "Database modernization",
          "UI/UX refresh",
          "Performance optimization",
        ],
      },
      {
        title: "Process Automation",
        description:
          "Otomatisasi proses bisnis repetitif menggunakan RPA dan AI. Tingkatkan efisiensi operasional dan kurangi human error.",
        features: [
          "Business process analysis",
          "RPA implementation",
          "Workflow automation",
          "Document processing AI",
          "Chatbot & virtual assistant",
        ],
      },
    ],
    benefits: [
      "Efisiensi operasional meningkat 50%+",
      "Time-to-market produk digital lebih cepat 3x",
      "Integrasi seamless antar departemen",
      "Data-driven decision making",
    ],
    techStack: [
      "Python",
      "Apache Kafka",
      "Elasticsearch",
      "Power BI",
      "Zapier",
      "n8n",
      "TensorFlow",
      "OpenAI",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Penetration Testing",
    shortTitle: "Cybersecurity",
    tagline: "Lindungi Aset Digital Anda dari Ancaman Siber",
    description:
      "Tim cybersecurity bersertifikasi kami membantu mengidentifikasi, mencegah, dan merespons ancaman keamanan siber. Dari penetration testing hingga security audit menyeluruh, kami pastikan sistem Anda terlindungi.",
    icon: "Shield",
    features: [
      "Penetration Testing (Web, Mobile, Network)",
      "Vulnerability Assessment",
      "Security Code Review",
      "Compliance Consulting (ISO 27001, PCI-DSS)",
      "Incident Response",
      "Security Awareness Training",
    ],
    subServices: [
      {
        title: "Penetration Testing",
        description:
          "Simulasi serangan siber oleh ethical hacker bersertifikasi untuk menemukan celah keamanan sebelum dieksploitasi oleh pihak jahat.",
        features: [
          "Web application pentest",
          "Mobile application pentest",
          "Network & infrastructure pentest",
          "API security testing",
          "Social engineering assessment",
        ],
      },
      {
        title: "Security Audit & Assessment",
        description:
          "Evaluasi menyeluruh terhadap postur keamanan organisasi Anda. Identifikasi risiko, gaps, dan rekomendasi perbaikan yang actionable.",
        features: [
          "Infrastructure security audit",
          "Application security review",
          "Configuration assessment",
          "Risk scoring & prioritization",
          "Remediation roadmap",
        ],
      },
      {
        title: "Compliance & Certification",
        description:
          "Pendampingan untuk memenuhi standar keamanan internasional. Kami bantu dari gap analysis hingga proses sertifikasi.",
        features: [
          "ISO 27001 readiness",
          "PCI-DSS compliance",
          "GDPR compliance",
          "SOC 2 preparation",
          "Security policy development",
        ],
      },
      {
        title: "Managed Security Services",
        description:
          "Layanan keamanan terkelola 24/7. Tim SOC kami memantau, mendeteksi, dan merespons ancaman secara real-time.",
        features: [
          "24/7 security monitoring",
          "SIEM management",
          "Threat intelligence",
          "Incident response team",
          "Monthly security reports",
        ],
      },
    ],
    benefits: [
      "Deteksi 95% vulnerability sebelum deployment",
      "Compliance-ready infrastructure",
      "Respon insiden dalam < 30 menit",
      "Pengurangan risiko keamanan hingga 80%",
    ],
    techStack: [
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "OWASP ZAP",
      "Wireshark",
      "Splunk",
      "CrowdStrike",
      "Snyk",
    ],
  },
];

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
}

export const products: Product[] = [
  {
    slug: "nainboard",
    name: "NainBoard",
    tagline: "Smart Project Management Platform",
    description:
      "Platform manajemen proyek all-in-one yang dirancang khusus untuk tim teknologi. Tracking progress, sprint planning, resource allocation, dan real-time collaboration dalam satu dashboard.",
    features: [
      "Kanban & Sprint board",
      "Time tracking & reporting",
      "Resource allocation",
      "Automated workflows",
      "Integration dengan 50+ tools",
    ],
    icon: "LayoutDashboard",
    category: "Productivity",
  },
  {
    slug: "nainsecure",
    name: "NainSecure",
    tagline: "Automated Security Scanning Platform",
    description:
      "Platform scanning keamanan otomatis yang terintegrasi dengan CI/CD pipeline. Deteksi vulnerability, misconfigurations, dan compliance issues secara real-time.",
    features: [
      "Automated vulnerability scanning",
      "CI/CD integration",
      "Compliance monitoring",
      "Risk dashboard",
      "Remediation guidance",
    ],
    icon: "ShieldCheck",
    category: "Security",
  },
  {
    slug: "nainanalytics",
    name: "NainAnalytics",
    tagline: "Business Intelligence & Data Platform",
    description:
      "Platform analytics dan business intelligence yang mengubah data mentah menjadi insights actionable. Visualisasi interaktif, automated reporting, dan predictive analytics.",
    features: [
      "Interactive data visualization",
      "Automated report generation",
      "Predictive analytics",
      "Custom dashboard builder",
      "Data warehouse integration",
    ],
    icon: "BarChart3",
    category: "Analytics",
  },
  {
    slug: "nainflow",
    name: "NainFlow",
    tagline: "Workflow Automation Engine",
    description:
      "Engine otomatisasi workflow yang menghubungkan berbagai sistem dan mengotomatisasi proses bisnis tanpa coding. Drag-and-drop builder dengan 200+ connector.",
    features: [
      "Visual workflow builder",
      "200+ pre-built connectors",
      "Conditional logic & branching",
      "Error handling & retry",
      "Audit trail & logging",
    ],
    icon: "Workflow",
    category: "Automation",
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  testimonial?: { text: string; name: string; role: string };
  duration: string;
  techStack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-payment-platform",
    title: "Platform Pembayaran Digital untuk Fintech Terkemuka",
    client: "FinPay Indonesia",
    industry: "Fintech",
    services: ["Web Development", "Mobile Development", "Cloud & DevOps"],
    challenge:
      "Klien membutuhkan platform pembayaran digital yang dapat menangani 100,000+ transaksi per hari dengan latensi rendah, keamanan tinggi, dan compliance terhadap regulasi OJK.",
    solution:
      "Kami membangun platform microservices dengan event-driven architecture, real-time fraud detection system, dan multi-layer security. Mobile app cross-platform untuk end-user dan dashboard admin untuk monitoring.",
    results: [
      { metric: "Transaksi Harian", value: "150K+" },
      { metric: "Uptime", value: "99.99%" },
      { metric: "Response Time", value: "<200ms" },
      { metric: "Fraud Detection", value: "99.7%" },
    ],
    testimonial: {
      text: "Naincode berhasil membangun platform yang melampaui ekspektasi kami. Kualitas kode dan arsitekturnya sangat solid.",
      name: "Ahmad Rizaldi",
      role: "CTO, FinPay Indonesia",
    },
    duration: "8 bulan",
    techStack: ["Node.js", "React Native", "Kubernetes", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    slug: "healthcare-management-system",
    title: "Sistem Manajemen Rumah Sakit Terintegrasi",
    client: "RS Medika Nusantara",
    industry: "Healthcare",
    services: ["Web Development", "UI/UX Design", "Digital Transformation"],
    challenge:
      "Rumah sakit dengan 500+ tempat tidur membutuhkan digitalisasi menyeluruh — dari pendaftaran pasien, rekam medis elektronik, hingga sistem billing yang terintegrasi.",
    solution:
      "Kami mengembangkan HMS (Hospital Management System) terintegrasi dengan modul registrasi online, EMR, pharmacy management, billing, dan reporting dashboard. Fokus pada UX yang mudah digunakan oleh staf medis.",
    results: [
      { metric: "Waktu Registrasi", value: "-70%" },
      { metric: "Paperless", value: "95%" },
      { metric: "Efisiensi Staff", value: "+45%" },
      { metric: "Patient Satisfaction", value: "92%" },
    ],
    testimonial: {
      text: "Transformasi digital yang dilakukan Naincode mengubah cara kami melayani pasien. Proses yang dulunya manual kini otomatis dan efisien.",
      name: "Dr. Sarah Wijaya",
      role: "Direktur RS Medika Nusantara",
    },
    duration: "12 bulan",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "HL7 FHIR"],
  },
  {
    slug: "ecommerce-marketplace",
    title: "Marketplace B2B untuk Distribusi FMCG",
    client: "DistribusiKu",
    industry: "E-Commerce / FMCG",
    services: ["Web Development", "Mobile Development", "Cloud & DevOps"],
    challenge:
      "Platform B2B marketplace yang menghubungkan 5,000+ retailer dengan distributor FMCG. Membutuhkan sistem ordering, inventori real-time, dan logistik tracking.",
    solution:
      "Marketplace platform dengan fitur smart ordering, real-time inventory sync, route optimization untuk delivery, dan analytics dashboard untuk semua stakeholder.",
    results: [
      { metric: "Retailer Aktif", value: "8,000+" },
      { metric: "Order Volume", value: "+300%" },
      { metric: "Delivery Efficiency", value: "+55%" },
      { metric: "Revenue Growth", value: "+180%" },
    ],
    duration: "10 bulan",
    techStack: ["Next.js", "React Native", "Go", "PostgreSQL", "Elasticsearch", "AWS"],
  },
  {
    slug: "smart-building-iot",
    title: "Smart Building Management System",
    client: "PropertyTech Group",
    industry: "PropTech / IoT",
    services: ["Digital Transformation", "Cloud & DevOps", "Web Development"],
    challenge:
      "Mengelola 20+ gedung perkantoran dengan monitoring energy, HVAC, security, dan occupancy secara terpusat melalui satu platform.",
    solution:
      "IoT platform dengan 10,000+ sensor terintegrasi, real-time monitoring dashboard, predictive maintenance AI, dan automated building controls. Menghemat energy cost secara signifikan.",
    results: [
      { metric: "Energy Saving", value: "35%" },
      { metric: "Maintenance Cost", value: "-40%" },
      { metric: "Sensor Uptime", value: "99.8%" },
      { metric: "Response Time", value: "<5 detik" },
    ],
    duration: "14 bulan",
    techStack: ["Python", "React", "InfluxDB", "MQTT", "TensorFlow", "GCP"],
  },
];

export interface IndustryApproach {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  cta: string;
}

export const industryApproaches: IndustryApproach[] = [
  {
    slug: "enterprise",
    title: "Enterprise",
    subtitle: "Solusi Teknologi untuk Korporasi & Perusahaan Besar",
    description:
      "Kami memahami kompleksitas organisasi besar. Dari legacy modernization, system integration, hingga digital transformation — kami menyediakan solusi enterprise-grade yang aman, scalable, dan compliant dengan standar industri.",
    icon: "Building2",
    challenges: [
      "Sistem legacy yang sulit dimodernisasi tanpa mengganggu operasional",
      "Integrasi antar departemen dan platform yang berbeda-beda",
      "Kebutuhan keamanan dan compliance yang ketat (ISO, SOC2)",
      "Skalabilitas untuk ribuan pengguna concurrent",
      "Change management dan adopsi teknologi baru oleh karyawan",
    ],
    solutions: [
      "Pendekatan strangler fig untuk modernisasi bertahap tanpa downtime",
      "Enterprise Service Bus (ESB) dan API Gateway untuk integrasi seamless",
      "Security-first architecture dengan penetration testing berkala",
      "Cloud-native architecture dengan auto-scaling dan load balancing",
      "Training program dan change management support untuk tim internal",
    ],
    benefits: [
      "ROI terukur dengan KPI yang jelas sejak awal project",
      "Dedicated project manager dan solution architect",
      "SLA 99.99% dengan 24/7 support",
      "Compliance-ready infrastructure (ISO 27001, PCI-DSS)",
      "Knowledge transfer dan documentation lengkap",
    ],
    cta: "Jadwalkan Enterprise Consultation",
  },
  {
    slug: "umkm",
    title: "UMKM",
    subtitle: "Solusi Digital Terjangkau untuk UMKM Indonesia",
    description:
      "Kami percaya setiap UMKM berhak mendapatkan solusi teknologi berkualitas. Paket kami dirancang khusus untuk UMKM — affordable, mudah digunakan, dan langsung berdampak pada pertumbuhan bisnis Anda.",
    icon: "Store",
    challenges: [
      "Budget teknologi yang terbatas namun butuh solusi profesional",
      "Proses bisnis masih manual dan tidak efisien",
      "Kesulitan menjangkau pelanggan secara digital",
      "Tidak memiliki tim IT internal",
      "Kompetisi dengan pemain besar yang sudah digital-first",
    ],
    solutions: [
      "Paket solusi digital all-in-one dengan harga transparan",
      "Website + e-commerce yang siap pakai dan mudah dikelola",
      "Digitalisasi proses operasional dengan tools low-code",
      "Training dan pendampingan penggunaan teknologi",
      "Strategi digital marketing untuk menjangkau pelanggan baru",
    ],
    benefits: [
      "Mulai dari Rp 5 juta — solusi profesional harga terjangkau",
      "Go digital dalam 2-4 minggu",
      "Template siap pakai yang bisa dikustomisasi",
      "Support via WhatsApp — mudah dan cepat",
      "Paket maintenance bulanan yang ringan",
    ],
    cta: "Konsultasi Gratis untuk UMKM",
  },
  {
    slug: "startup",
    title: "Startup",
    subtitle: "Partner Teknologi untuk Mewujudkan Visi Startup Anda",
    description:
      "Dari ide menjadi MVP dalam hitungan minggu. Kami adalah partner teknologi yang memahami speed, iteration, dan growth mindset startup. Kami bantu validasi ide, bangun MVP, dan scale produk Anda.",
    icon: "Rocket",
    challenges: [
      "Perlu memvalidasi ide produk secepatnya dengan budget terbatas",
      "Membutuhkan MVP yang cepat namun berkualitas untuk pitching investor",
      "Arsitektur yang bisa scale dari 100 ke 1 juta user",
      "Tim teknis yang belum lengkap atau belum ada",
      "Pivot dan iterasi cepat berdasarkan feedback market",
    ],
    solutions: [
      "Rapid prototyping: dari ide ke prototype interaktif dalam 1-2 minggu",
      "MVP development dengan lean methodology — fitur essential first",
      "Scalable architecture dari hari pertama — tidak perlu re-write",
      "Fractional CTO service — expertise tanpa full-time cost",
      "Agile development dengan sprint 2 mingguan dan demo berkala",
    ],
    benefits: [
      "MVP ready dalam 4-8 minggu",
      "Equity partnership option untuk early-stage startup",
      "Technical co-founder mentorship",
      "Investor-ready technical documentation",
      "Flexible engagement — scale up/down sesuai kebutuhan",
    ],
    cta: "Diskusikan Ide Startup Anda",
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "Kami mulai dengan memahami bisnis, tujuan, dan tantangan Anda secara mendalam melalui sesi discovery terstruktur.",
    details: [
      "Stakeholder interview & requirement gathering",
      "Business process analysis",
      "Technical assessment & audit",
      "Competitive & market research",
      "Project scoping & estimation",
    ],
    duration: "1-2 Minggu",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Menyusun strategi teknologi, arsitektur sistem, dan project plan yang terukur dengan milestone jelas.",
    details: [
      "Solution architecture design",
      "Technology stack selection",
      "Project roadmap & milestones",
      "Resource planning & team formation",
      "Risk assessment & mitigation plan",
    ],
    duration: "1-2 Minggu",
  },
  {
    number: "03",
    title: "Design & Prototype",
    description:
      "Tim desainer kami merancang UI/UX yang memukau dan memvalidasi melalui prototype interaktif sebelum development.",
    details: [
      "User research & persona development",
      "Wireframing & information architecture",
      "Visual design & branding",
      "Interactive prototype development",
      "Usability testing & iteration",
    ],
    duration: "2-4 Minggu",
  },
  {
    number: "04",
    title: "Agile Development",
    description:
      "Development iteratif dengan sprint 2 mingguan. Setiap sprint menghasilkan fitur yang siap di-review dan di-test.",
    details: [
      "Sprint planning & backlog grooming",
      "Frontend & backend development",
      "Code review & quality assurance",
      "Sprint demo & stakeholder review",
      "Continuous integration & testing",
    ],
    duration: "8-16 Minggu",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "Testing menyeluruh untuk memastikan produk bebas bug, performant, dan siap untuk production.",
    details: [
      "Unit testing & integration testing",
      "Performance & load testing",
      "Security testing & penetration test",
      "User acceptance testing (UAT)",
      "Cross-browser & cross-device testing",
    ],
    duration: "2-3 Minggu",
  },
  {
    number: "06",
    title: "Deployment & Launch",
    description:
      "Deployment ke production dengan strategi zero-downtime. Monitoring ketat di periode awal untuk memastikan stabilitas.",
    details: [
      "Production environment setup",
      "Data migration & seeding",
      "Blue-green deployment strategy",
      "Performance monitoring setup",
      "Launch support & war room",
    ],
    duration: "1 Minggu",
  },
  {
    number: "07",
    title: "Support & Evolution",
    description:
      "Setelah launch, kami terus mendampingi dengan maintenance, optimization, dan pengembangan fitur baru.",
    details: [
      "24/7 monitoring & incident response",
      "Bug fixes & performance optimization",
      "Feature enhancement & iteration",
      "Monthly reporting & review",
      "Technology upgrade & security patches",
    ],
    duration: "Ongoing",
  },
];

export const stats = [
  { value: "150+", label: "Project Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Engineers" },
  { value: "8+", label: "Tahun Pengalaman" },
];

export const whyNaincode = [
  {
    title: "Engineering Excellence",
    description:
      "Kode berkualitas tinggi dengan best practices — clean architecture, automated testing, dan code review ketat di setiap project.",
    icon: "Code2",
  },
  {
    title: "Agile & Transparent",
    description:
      "Proses development transparan dengan sprint demo reguler. Anda selalu tahu progress dan bisa memberikan feedback langsung.",
    icon: "Eye",
  },
  {
    title: "Scalable Architecture",
    description:
      "Setiap solusi didesain untuk tumbuh bersama bisnis Anda. Dari 100 user hingga jutaan — arsitektur kami siap.",
    icon: "TrendingUp",
  },
  {
    title: "Security-First",
    description:
      "Keamanan bukan afterthought. Kami menerapkan security best practices sejak hari pertama development.",
    icon: "Lock",
  },
  {
    title: "Dedicated Team",
    description:
      "Tim dedicated yang benar-benar memahami bisnis Anda. Bukan freelancer, tapi partner teknologi jangka panjang.",
    icon: "Users",
  },
  {
    title: "Post-Launch Support",
    description:
      "Hubungan kami tidak berakhir saat launch. Kami terus mendampingi dengan maintenance, optimization, dan evolusi produk.",
    icon: "HeartHandshake",
  },
];

export const testimonials = [
  {
    text: "Naincode berhasil mengubah visi kami menjadi platform digital yang luar biasa. Tim mereka sangat profesional dan responsif.",
    name: "Budi Santoso",
    role: "CEO, TechVenture Indonesia",
    company: "TechVenture",
  },
  {
    text: "Kualitas development dan desain dari Naincode konsisten sangat tinggi. Mereka bukan sekadar vendor, tapi true technology partner.",
    name: "Linda Hartono",
    role: "VP of Product, RetailMax",
    company: "RetailMax",
  },
  {
    text: "Dari startup dengan 0 user hingga 500K+ user, Naincode selalu ada mendampingi growth kami. Arsitektur yang mereka bangun benar-benar scalable.",
    name: "Reza Firmansyah",
    role: "CTO, GrowthLab",
    company: "GrowthLab",
  },
];

export const navLinks = [
  {
    label: "Layanan",
    href: "/layanan",
    children: services.map((s) => ({
      label: s.shortTitle,
      href: `/layanan/${s.slug}`,
      description: s.tagline,
    })),
  },
  { label: "Produk", href: "/produk" },
  { label: "Paket", href: "/paket" },
  { label: "Studi Kasus", href: "/studi-kasus" },
  {
    label: "Industri",
    href: "/industri",
    children: industryApproaches.map((i) => ({
      label: i.title,
      href: `/industri/${i.slug}`,
      description: i.subtitle,
    })),
  },
  {
    label: "Perusahaan",
    href: "/tentang",
    children: [
      { label: "Tentang Kami", href: "/tentang", description: "Visi, misi, dan tim Naincode" },
      { label: "Proses Kami", href: "/proses", description: "Workflow development terstruktur" },
      { label: "Blog & Insight", href: "/blog", description: "Artikel dan wawasan teknologi" },
      { label: "FAQ", href: "/faq", description: "Pertanyaan yang sering ditanyakan" },
    ],
  },
];
