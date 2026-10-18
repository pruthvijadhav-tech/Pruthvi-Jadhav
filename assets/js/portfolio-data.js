/**
 * Pruthvi Jadhav — Portfolio Data
 * Centralized, structured data store for Multi-Page Architecture
 */

window.PORTFOLIO_DATA = {
  info: {
  "name": "Pruthvi Jadhav",
  "title": "Computer Science Student & Software Developer",
  "tagline": "Building Ideas. Creating Impact.",
  "university": "Pimpri Chinchwad University (PCU)",
  "location": "Pune, Maharashtra, India",
  "coordinates": {
    "lat": 18.6279,
    "lng": 73.8009
  },
  "email": "jadhavpruthvi20069@gmail.com",
  "github": "https://github.com/pruthvijadhav-tech",
  "linkedin": "https://www.linkedin.com/in/pruthvi-jadhav-045a3937b/",
  "resumePdf": "assets/Pruthvi_Jadhav_Resume.pdf",
  "portrait": "assets/images/pruthvi-jadhav.jpg"
},
  projects: [
  {
    "id": "poverty-aid",
    "short": "Poverty Aid",
    "title": "Poverty Aid Identifier",
    "status": "LIVE CIVIC-TECH APP",
    "category": "civic",
    "featured": true,
    "live": true,
    "blurb": "A multilingual civic-tech web app that helps low-income individuals discover government welfare schemes they qualify for, powered by an AI-assisted need score and transparent anti-corruption grievance tracking.",
    "problem": "Finding the right government welfare schemes and reporting corruption around benefits delivery is often impossible for low-income citizens without accessible, multilingual, and frictionless tools.",
    "solution": "Citizens answer 9 simple questions (no Aadhaar or intrusive personal data required) to receive an instant need score and a personalized list of eligible central and Maharashtra state schemes. Features corruption reporting with complaint tracking and a public grievance heatmap.",
    "features": [
      "Multilingual support: English, Hindi, and Marathi",
      "9-question eligibility assessment without requiring Aadhaar",
      "AI-assisted vulnerability & need score using Google Gemini",
      "Comprehensive database of 16+ central and Maharashtra schemes",
      "Corruption complaint system with unique tracking IDs, status reports, and live heatmap",
      "Civic Impact / Success Stories showcase",
      "AI chat and voice assistant guidance",
      "Installable Progressive Web App (PWA) with offline capability",
      "Admin dashboard with fake-complaint flagging and rate limiting"
    ],
    "role": "Lead Architect & Developer. Designed, developed, and deployed end-to-end; full open-source codebase on GitHub.",
    "tech": [
      [
        "Python Flask",
        "Backend & Routing"
      ],
      [
        "Google Gemini AI",
        "Need Scoring & Assistant"
      ],
      [
        "SQLite",
        "Relational Database"
      ],
      [
        "HTML5 / Vanilla CSS / JS",
        "Frontend & PWA"
      ],
      [
        "Leaflet.js + OpenStreetMap",
        "Grievance Heatmap"
      ]
    ],
    "links": [
      [
        "Live Demo",
        "https://poverty-aid-identifier.onrender.com/"
      ],
      [
        "GitHub Repository",
        "https://github.com/pruthvijadhav-tech/poverty-aid-identifier"
      ]
    ],
    "highlights": [
      "Scheme discovery",
      "Need score",
      "Hindi \u00b7 Marathi \u00b7 English",
      "Grievance heatmap"
    ]
  },
  {
    "id": "stadiumpulse",
    "short": "StadiumPulse",
    "title": "StadiumPulse \u2014 GenAI Venue Intelligence",
    "status": "GENAI PROTOTYPE",
    "category": "ai",
    "featured": true,
    "live": false,
    "blurb": "A GenAI-powered smart stadium operations and fan experience prototype tailored for a FIFA World Cup 2026 / MetLife Stadium scenario, built during Virtual Prompt Wars.",
    "problem": "Operating high-capacity arenas requires real-time congestion mitigation, rapid bottleneck prediction, and context-grounded live assistance for tens of thousands of simultaneous attendees.",
    "solution": "A live-simulated arena state feeds telemetry into an operations cockpit, generates instant Gemini 1.5 Flash security/crowd alerts, updates an interactive SVG heat map, and powers a fan concierge grounded in live venue state.",
    "features": [
      "Modern React + Vite single-page interface",
      "Simulated live telemetry (crowd density, queue wait times, gate flux) updating every 5s",
      "Gemini 1.5 Flash alerts automatically triggered when simulated zones breach density thresholds",
      "Interactive color-coded SVG stadium congestion and zone map",
      "Real-time operations dashboard with key performance indicators and analytics",
      "Context-aware Fan Concierge bot grounded in live venue state",
      "Local fallback responses ensuring continuity if external AI APIs throttle",
      "Documented prototype based on synthetic telemetry (demonstration concept)"
    ],
    "role": "Solo Developer. Created for Virtual Prompt Wars; repository and documentation on GitHub.",
    "tech": [
      [
        "React",
        "UI Components"
      ],
      [
        "Vite",
        "Build Tool & Dev Environment"
      ],
      [
        "Gemini 1.5 Flash",
        "@google/generative-ai"
      ],
      [
        "JavaScript ES6+",
        "State & Simulation Engine"
      ],
      [
        "SVG",
        "Vector Congestion Map"
      ]
    ],
    "links": [
      [
        "GitHub Repository",
        "https://github.com/pruthvijadhav-tech/stadiumpulse"
      ]
    ],
    "highlights": [
      "Simulated telemetry",
      "Gemini alerts",
      "SVG congestion map",
      "Fan Concierge"
    ]
  },
  {
    "id": "sssb",
    "short": "SSSB",
    "title": "Smart Street Safety Beacon (SSSB)",
    "status": "TEAM PROJECT \u00b7 2026",
    "category": "iot",
    "featured": false,
    "live": false,
    "blurb": "An Arduino-based smart-city street safety system engineered for low-cost urban and suburban safety, documented in an IEEE-format research paper and technical presentation.",
    "problem": "Suburban and unmonitored roads often lack affordable, automated emergency signaling and rapid distress alert systems for vulnerable pedestrians and commuters.",
    "solution": "A modular, low-power Arduino hardware beacon concept incorporating emergency trigger protocols, acoustic/optical signaling, and smart-city mesh alerts.",
    "features": [
      "Low-cost Arduino-based embedded controller architecture",
      "Integration with smart-city mesh and local emergency signaling protocols",
      "Comprehensive IEEE-format technical research paper",
      "In-depth architectural presentation and simulation findings"
    ],
    "role": "Core Team Member. Co-authored the IEEE-format technical research paper and designed system documentation.",
    "tech": [
      [
        "Arduino",
        "Microcontroller"
      ],
      [
        "C/C++",
        "Embedded Firmware"
      ],
      [
        "Smart City Protocols",
        "Architecture"
      ],
      [
        "IEEE Technical Writing",
        "Research Paper"
      ]
    ],
    "links": [],
    "highlights": [
      "Arduino-based",
      "Smart-city mesh",
      "IEEE-format paper"
    ]
  },
  {
    "id": "nirantar",
    "short": "NIRANTAR",
    "title": "NIRANTAR \u2014 Vulnerability Support System",
    "status": "IN ACTIVE DEVELOPMENT",
    "category": "civic",
    "featured": false,
    "live": false,
    "blurb": "A human-centred case tracking and rehabilitation platform designed to monitor long-term needs of vulnerable citizens through structured assessment and stabilization cycles.",
    "problem": "Aid programs for homeless, displaced, or ultra-vulnerable populations frequently suffer from post-aid abandonment, lack of progress tracking, and unrecorded secondary needs.",
    "solution": "A 4-phase closed-loop workflow moving each vulnerable individual from Initial Assessment \u2192 Targeted Intervention \u2192 Continuous Reassessment \u2192 Sustainable Stabilization.",
    "features": [
      "Structured humanitarian support workflow and case timeline tracking",
      "Privacy-first, anonymized personal data protection",
      "Explainable AI prioritization for critical intervention needs",
      "Dynamic dashboards highlighting unresolved secondary requirements"
    ],
    "role": "Lead System Architect & Developer. Conception, design, and software implementation.",
    "tech": [
      [
        "System Architecture",
        "Workflow Design"
      ],
      [
        "Full-Stack Web",
        "Implementation"
      ],
      [
        "Explainable AI",
        "Prioritization"
      ]
    ],
    "links": [],
    "highlights": [
      "Assess \u2192 Intervene",
      "Reassess \u2192 Stabilize",
      "Human-centred"
    ]
  },
  {
    "id": "fraudgraph",
    "short": "FraudGraph-AI",
    "title": "FraudGraph-AI \u2014 Network Anomaly Detection",
    "status": "RESEARCH PROTOTYPE",
    "category": "ai",
    "featured": false,
    "live": false,
    "blurb": "A graph-based financial transaction analysis prototype that uncovers suspicious circular transactions and mule-account syndicates using network topology and relationship modeling.",
    "problem": "Sophisticated financial fraud syndicates bypass traditional single-transaction threshold rules by dispersing funds across intricate webs of intermediary accounts.",
    "solution": "Models multi-hop account relationships as directed graphs, running cycle-detection and topological anomaly scoring to flag high-risk transaction clusters with human-readable rationales.",
    "features": [
      "Interactive transaction network graph visualization",
      "Multi-hop relationship modeling and circular flow detection",
      "Synthetic transaction generator replicating real-world laundering topologies",
      "Explainable anomaly reporting breaking down risk factors"
    ],
    "role": "Solo Prototype Developer. Developed on synthetic graph data to explore algorithmic relationship analysis.",
    "tech": [
      [
        "Graph Algorithms",
        "Network Analysis"
      ],
      [
        "Python",
        "Data Processing"
      ],
      [
        "Synthetic Data Modeling",
        "Simulation"
      ],
      [
        "Vector Visualization",
        "Topology Display"
      ]
    ],
    "links": [],
    "highlights": [
      "Graph network analysis",
      "Cycle detection",
      "Explainable anomaly scores"
    ]
  }
],
  skills: {
  "Programming Languages": [
    {
      "name": "Python",
      "level": "Advanced",
      "type": "Project",
      "desc": "Flask, Gemini SDK, Data Analysis, Scripting"
    },
    {
      "name": "JavaScript (ES6+)",
      "level": "Advanced",
      "type": "Project",
      "desc": "Modern async/await, DOM APIs, Canvas, State"
    },
    {
      "name": "C / C++",
      "level": "Proficient",
      "type": "Coursework",
      "desc": "Data Structures, OOP, Systems Programming"
    }
  ],
  "Web & Frontend Technologies": [
    {
      "name": "React.js",
      "level": "Advanced",
      "type": "Project",
      "desc": "Hooks, SPA routing, state management, Vite"
    },
    {
      "name": "HTML5 & Semantic Markup",
      "level": "Expert",
      "type": "Project",
      "desc": "SEO, ARIA Accessibility, microdata"
    },
    {
      "name": "Vanilla CSS & Modern Layouts",
      "level": "Expert",
      "type": "Project",
      "desc": "Grid, Flexbox, Glassmorphism, Responsive CSS"
    },
    {
      "name": "Progressive Web Apps (PWA)",
      "level": "Proficient",
      "type": "Project",
      "desc": "Service Workers, offline caching, web app manifests"
    },
    {
      "name": "Leaflet.js & OpenStreetMap",
      "level": "Proficient",
      "type": "Project",
      "desc": "Geospatial coordinate mapping & heatmaps"
    }
  ],
  "Backend & Databases": [
    {
      "name": "Python Flask",
      "level": "Advanced",
      "type": "Project",
      "desc": "REST APIs, Blueprints, Template engines, Auth"
    },
    {
      "name": "SQLite",
      "level": "Advanced",
      "type": "Project",
      "desc": "Relational schemas, queries, ORM integration"
    },
    {
      "name": "RESTful API Engineering",
      "level": "Advanced",
      "type": "Project",
      "desc": "JSON endpoints, CORS, payload validation"
    }
  ],
  "Artificial Intelligence & Data": [
    {
      "name": "Google Gemini API",
      "level": "Advanced",
      "type": "Project",
      "desc": "Gemini 1.5 Flash, structured outputs, prompt grounding"
    },
    {
      "name": "Prompt Engineering",
      "level": "Advanced",
      "type": "Project",
      "desc": "Few-shot, role prompting, context constraints"
    },
    {
      "name": "Machine Learning & Deep Learning",
      "level": "Proficient",
      "type": "Coursework",
      "desc": "Supervised learning, classification, neural nets (IBM Certified)"
    },
    {
      "name": "Data Acquisition & Cleansing",
      "level": "Proficient",
      "type": "Coursework",
      "desc": "ETL, web scraping, schema normalization (Accenture Certified)"
    },
    {
      "name": "Data Visualization",
      "level": "Proficient",
      "type": "Coursework",
      "desc": "Exploratory analysis, charts, SVG heatmaps (Accenture Certified)"
    }
  ],
  "Tools, DevOps & Security": [
    {
      "name": "Git & GitHub",
      "level": "Advanced",
      "type": "Project",
      "desc": "Version control, branching, pull requests, collaboration"
    },
    {
      "name": "Vite & Modern Bundlers",
      "level": "Advanced",
      "type": "Project",
      "desc": "HMR, optimized production builds, tree-shaking"
    },
    {
      "name": "Cloud Deployment (Render)",
      "level": "Proficient",
      "type": "Project",
      "desc": "CI/CD web service builds, env vars, health checks"
    },
    {
      "name": "Web Security Principles",
      "level": "Proficient",
      "type": "Project",
      "desc": "Password hashing (bcrypt), rate limiting, CSRF defenses"
    },
    {
      "name": "Phishing & Threat Analysis",
      "level": "Proficient",
      "type": "Coursework",
      "desc": "Simulation design, social engineering audits (Mastercard/Forage)"
    }
  ],
  "Hardware & Embedded Systems": [
    {
      "name": "Arduino & Microcontrollers",
      "level": "Proficient",
      "type": "Team Project",
      "desc": "Sensor interfacing, low-cost smart-city nodes"
    }
  ]
},
  achievements: [
  {
    "id": "techneon-2025",
    "tag": "Award",
    "title": "First Prize \u2014 PCU TECHNEON 2K25",
    "date": "29 March 2025",
    "sub": "Team-based Project Competition \u00b7 Pimpri Chinchwad University, Pune",
    "notes": "Won First Position in the University-wide Project / Poster / Model Innovation Competition among collegiate engineering teams.",
    "certIndex": 7,
    "photo": "assets/images/certs/cert_10.jpg"
  },
  {
    "id": "sih-2026",
    "tag": "Selection",
    "title": "Smart India Hackathon 2026 \u2014 Certificate of Selection",
    "date": "20\u201321 August 2026",
    "sub": "Team AidLink AI (012) \u00b7 Pimpri Chinchwad University",
    "notes": "Selected as a core team member representing the university at the prestigious Smart India Hackathon after passing rigorous internal hackathon rounds.",
    "certIndex": 6,
    "photo": "assets/images/certs/cert_9.jpg"
  },
  {
    "id": "promptwars-2026",
    "tag": "Appreciation",
    "title": "PromptWars Virtual \u2014 Certificate of Appreciation",
    "date": "25 August 2026",
    "sub": "Google for Developers \u00b7 Hack2skill (H2S)",
    "notes": "Awarded for valuable contribution and verified submission of an innovative Generative AI application (StadiumPulse) for Challenge 4.",
    "certIndex": 8,
    "photo": "assets/images/certs/cert_11.jpg"
  },
  {
    "id": "adobe-hackathon-2026",
    "tag": "Participant",
    "title": "Adobe University Hackathon \u2014 Certificate of Participation",
    "date": "9 August 2026",
    "sub": "Organized by Adobe",
    "notes": "Participated in national collegiate hackathon tackling complex developer challenges using modern creative and web technologies.",
    "certIndex": 9,
    "photo": "assets/images/certs/cert_12.jpg"
  },
  {
    "id": "prompt-engineering-workshop",
    "tag": "Workshop",
    "title": "Prompt Engineering Workshop \u2014 Certificate of Participation",
    "date": "22 August 2026",
    "sub": "CSE Department & Developers Club, Pimpri Chinchwad University",
    "notes": "Hands-on participation in LLM prompting methodologies, system prompt design, and context window optimization.",
    "certIndex": 10,
    "photo": "assets/images/certs/cert_13.jpg"
  },
  {
    "id": "unstop-daily-quiz",
    "tag": "Quiz Ranks",
    "title": "Unstop Engineering Daily Quiz \u2014 September Series",
    "date": "26\u201329 September 2025",
    "sub": "Unstop National Competitive Series",
    "notes": "Achieved four Certificates of Excellence with nationwide daily ranks of 31st, 20th, 40th, and 79th among thousands of engineering participants.",
    "certIndex": 5,
    "photo": "assets/images/certs/cert_5.jpg"
  },
  {
    "id": "pitch-fest-2026",
    "tag": "Participant",
    "title": "Pitch Fest 2026 \u2014 Startup & Project Pitching",
    "date": "2026",
    "sub": "Pimpri Chinchwad University, Pune",
    "notes": "Presented technology-driven social impact prototype to panel of academic mentors and student innovators.",
    "certIndex": null,
    "photo": null
  }
],
  certificates: [
  {
    "index": 0,
    "title": "Mastercard Cybersecurity Job Simulation",
    "issuer": "Forage",
    "date": "May 13, 2026",
    "type": "Certificate of Completion",
    "notes": "Hands-on security simulation: designed a realistic phishing email vector simulation, interpreted organizational metrics, and recommended mitigation workflows.",
    "verify": "",
    "ach": false,
    "images": [
      "assets/images/certs/cert_0.jpg"
    ]
  },
  {
    "index": 1,
    "title": "Artificial Intelligence Fundamentals",
    "issuer": "IBM SkillsBuild",
    "date": "January 4, 2026",
    "type": "Digital Badge & Credential",
    "notes": "Foundations of AI architectures, natural language processing, computer vision, and responsible artificial intelligence principles.",
    "verify": "https://www.credly.com/badges/8ba68846-590c-4c26-8603-e42b84c2cbae",
    "ach": false,
    "images": [
      "assets/images/certs/cert_1.jpg"
    ]
  },
  {
    "index": 2,
    "title": "Machine Learning and Deep Learning",
    "issuer": "IBM SkillsBuild (Adobe Learning Manager)",
    "date": "January 4, 2026",
    "type": "Certificate of Completion",
    "notes": "Comprehensive training on supervised/unsupervised machine learning models, loss functions, optimization, and deep neural networks.",
    "verify": "",
    "ach": false,
    "images": [
      "assets/images/certs/cert_2.jpg"
    ]
  },
  {
    "index": 3,
    "title": "Acquiring Data (Level 1 \u2014 AI Fundamentals of AI ASCEND)",
    "issuer": "Accenture \u00b7 FutureSkills Prime",
    "date": "December 27, 2025",
    "type": "Certificate of Competency",
    "notes": "Competency in modern data ingestion pipelines, structured/unstructured dataset cleansing, ETL flows, and data ethics.",
    "verify": "",
    "ach": false,
    "images": [
      "assets/images/certs/cert_3.jpg"
    ]
  },
  {
    "index": 4,
    "title": "Data Processing and Visualisation (Level 2 \u2014 AI Ready of AI ASCEND)",
    "issuer": "Accenture \u00b7 FutureSkills Prime",
    "date": "December 28, 2025",
    "type": "Certificate of Competency",
    "notes": "Advanced exploratory data analysis, statistical metric visualization, feature engineering, and preparation of training data for AI models.",
    "verify": "",
    "ach": false,
    "images": [
      "assets/images/certs/cert_4.jpg"
    ]
  },
  {
    "index": 5,
    "title": "Unstop Engineering Daily Quiz \u2014 September Series",
    "issuer": "Unstop",
    "date": "September 26\u201329, 2025",
    "type": "4\u00d7 Certificates of Excellence",
    "notes": "Ranked 31st, 20th, 40th, and 79th in national competitive programming and computer science daily examinations.",
    "verify": "",
    "ach": false,
    "images": [
      "assets/images/certs/cert_5.jpg",
      "assets/images/certs/cert_6.jpg",
      "assets/images/certs/cert_7.jpg",
      "assets/images/certs/cert_8.jpg"
    ]
  },
  {
    "index": 6,
    "title": "Smart India Hackathon 2026 \u2014 Certificate of Selection",
    "issuer": "Pimpri Chinchwad University \u00b7 Team AidLink AI",
    "date": "20\u201321 August 2026",
    "type": "Certificate of Selection",
    "notes": "Selected as a core university representative for the Smart India Hackathon after evaluation of innovative problem-solving capability.",
    "verify": "",
    "ach": true,
    "images": [
      "assets/images/certs/cert_9.jpg"
    ]
  },
  {
    "index": 7,
    "title": "First Prize \u2014 PCU TECHNEON 2K25",
    "issuer": "Pimpri Chinchwad University, Pune",
    "date": "29 March 2025",
    "type": "First Position / Certificate of Achievement",
    "notes": "First Prize Winner in the university-wide Techneon 2k25 Project / Poster / Model Competition.",
    "verify": "",
    "ach": true,
    "images": [
      "assets/images/certs/cert_10.jpg"
    ]
  },
  {
    "index": 8,
    "title": "PromptWars Virtual \u2014 Certificate of Appreciation",
    "issuer": "Google for Developers \u00b7 Hack2skill",
    "date": "25 August 2026",
    "type": "Certificate of Appreciation",
    "notes": "Awarded for exceptional Generative AI solution submission for Challenge 4 (StadiumPulse).",
    "verify": "",
    "ach": true,
    "images": [
      "assets/images/certs/cert_11.jpg"
    ]
  },
  {
    "index": 9,
    "title": "Adobe University Hackathon \u2014 Participant",
    "issuer": "Adobe",
    "date": "9 August 2026",
    "type": "Certificate of Participation",
    "notes": "Certificate of Participation in the nationwide collegiate engineering hackathon organized by Adobe.",
    "verify": "",
    "ach": true,
    "images": [
      "assets/images/certs/cert_12.jpg"
    ]
  },
  {
    "index": 10,
    "title": "Prompt Engineering Workshop \u2014 Participant",
    "issuer": "CSE Department & Developers Club, PCU",
    "date": "22 August 2026",
    "type": "Certificate of Participation",
    "notes": "Completed practical workshop on prompt strategies, chain-of-thought, and application integration.",
    "verify": "",
    "ach": true,
    "images": [
      "assets/images/certs/cert_13.jpg"
    ]
  }
]
};
