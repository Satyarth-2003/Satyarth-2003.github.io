// single source of truth for Satyarth Prakash Srivastava's Portfolio
// Researched against real production systems, GitHub repositories, and verifiable experience.

export const profile = {
  name: "Satyarth Prakash Srivastava",
  role: "AI Engineer",
  location: "Gurugram, India",
  email: "satyarth.s.2003@gmail.com",
  phoneDisplay: "+91 6392863687",
  phoneHref: "+916392863687",
  resume: "/resume",
  socials: {
    github: "https://github.com/Satyarth-2003",
    linkedin: "https://www.linkedin.com/in/satyarth2003/",
    twitter: "https://twitter.com/Satyarth_PS",
    website: "https://satyarth-2003.github.io",
  },
  status: {
    label: "SDE-1 AI",
    org: "Adda Education (Adda247)",
    note: "GenAI & Agentic Systems",
    available: "Open to AI & GenAI roles",
  },
  headline: [
    "I build production GenAI systems,",
    "from agentic pipelines to multimodal scale.",
  ],
  intro:
    "AI Engineer with production experience building **LLM-powered automation systems**, **GenAI pipelines**, and **agentic workflows at scale**. I engineer high-throughput, low-latency AI backends delivering measurable cost savings, precision scoring, and real-time multimodal intelligence.",
} as const;

export const about = {
  lead: "I architect AI systems that bridge cutting-edge LLM reasoning with high-throughput production infrastructure.",
  paragraphs: [
    "I'm an AI Engineer specialized in **Generative AI, Agentic Workflows, and Multi-Modal Systems**. At Adda Education, I've designed and scaled production AI pipelines that automate core operations: architecting **ScriptIQ** to automate over 1,000+ educational scripts saving ₹60+ Lakhs annually, building **Gradi.AI** for multimodal video quality evaluation across 10,000+ instructional sessions, and delivering broadcast automations for 200+ channels that reduced production times from **30 minutes to 2–5 seconds** (a 6x throughput leap).",
    "My engineering philosophy centers on **cost-efficiency, low-latency, and reliability**. When designing parallel agentic audit architectures, I scaled automated evaluations across **326,000+ audio calls** under strict API rate limits, achieving ~85% accuracy while slashing per-call costs by 58% and tripling speed. From sub-300ms real-time conversational voice agents to large-scale DynamoDB-to-BigQuery migrations reducing infrastructure costs by ~95%, I build end-to-end AI software that stands up under real-world production load.",
  ],
  now: [
    "Architecting production GenAI pipelines and agentic audit architectures at Adda Education",
    "Developing sub-300ms conversational voice AI agents with real-time reasoning and TTS synthesis",
    "Expanding domain-aware RAG pipelines with multimodal computer vision feedback",
    "Certified in Generative AI (IIT Guwahati) and Machine Learning (Google Cloud & Stanford)",
  ],
  facts: [
    { k: "Based in", v: "Gurugram, India" },
    { k: "Currently", v: "SDE-1 AI at Adda Education" },
    { k: "Education", v: "B.E. (Hons.) CS, AI & ML" },
    { k: "Focus", v: "GenAI, LLMs, Agentic Workflows, RAG" },
  ],
} as const;

export const capabilities = [
  {
    title: "GenAI & Agentic Orchestration",
    body: "Multi-agent workflows, LangChain and LangGraph orchestration, n8n automations, structured prompt engineering, and custom domain-aware RAG architectures.",
  },
  {
    title: "Multimodal AI & Computer Vision",
    body: "Real-time voice agents with sub-300ms latency, video quality evaluation pipelines, and OpenCV/MediaPipe emotion & gesture recognition systems.",
  },
  {
    title: "Scalable Production Backends",
    body: "High-throughput FastAPI and WebSocket backends, Dockerized microservices, BigQuery analytics, and cost-optimized inference reducing cloud expenditure by up to 95%.",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  mode: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Adda Education",
    role: "SDE-1 AI",
    location: "Gurugram, India",
    mode: "On-site",
    start: "Jul 2025",
    end: "Present",
    current: true,
    summary:
      "Architecting production GenAI pipelines, multimodal platforms, and large-scale agentic audit systems.",
    bullets: [
      "Architected ScriptIQ, an LLM-driven pipeline automating 1,000+ educational scripts/year, saving ₹60+ Lakhs via prompt-engineered multi-stage workflows.",
      "Built Gradi.AI, a multimodal AI platform evaluating 10,000+ instructional videos for teaching quality using scalable ML inference pipelines.",
      "Designed a parallel agentic audit architecture auditing 326,000+ calls at ~85% accuracy, cutting per-call cost by 58% and improving speed 3x under strict API rate limits.",
      "Delivered YouTube broadcast automation for 200+ channels; cutting creation time from 30 min → 2–5 sec (6x throughput via parallel execution and caching).",
      "Led DynamoDB → BigQuery migration achieving ~95% infra cost reduction while enabling large-scale analytics across production services.",
      "Architected EduSkill (one of India's largest paid faculty training programs) and Campus Programs, integrating AI-based evaluation scoring to automate candidate assessments and generating over ₹70 Lakhs in revenue within 3 months.",
      "Built early LLM-driven workflow components and GenAI pipelines later scaled into production across multiple business units.",
    ],
  },
];

export const education = {
  school: "Chandigarh University",
  program: "B.E., Computer Science (Hons.) | AI & ML Specialization",
  location: "Mohali / Chandigarh, India",
  start: "2021",
  end: "2025",
  points: [
    "GPA: 8.29 / 10",
    "50% Merit-Based Scholarship (CUCET)",
    "Specialized in Artificial Intelligence, Deep Learning, and Distributed Computing Systems",
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  summary: string;
  detail: string;
  highlights: string[];
  stack: string[];
  links: { live?: string; repo?: string; docs?: string };
  image: string;
  featured: boolean;
  year: string;
  team?: string;
  active?: boolean;
  metrics?: { value: string; label: string; href?: string; live?: boolean }[];
  badges?: { src: string; alt: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "interview-bar",
    name: "Interview Bar",
    tagline: "RAG-Powered Multimodal Interview Simulator",
    oneLiner:
      "An AI-powered interview simulator combining domain-aware RAG Q&A, 95% STT accuracy, and real-time facial emotion recognition in under 2 seconds.",
    summary:
      "Interview Bar is an end-to-end AI platform revolutionizing candidate interview preparation. It features a domain-specific retrieval-augmented generation (RAG) pipeline for context-aware Q&A, speech-to-text response analysis, and computer vision emotion classification across 7 distinct states with 90% precision, delivering actionable multimodal feedback.",
    detail: `Preparing for high-stakes technical interviews requires both domain depth and non-verbal communication finesse. Interview Bar bridges both by providing a fully multimodal AI interviewer that evaluates spoken answers, technical accuracy, and facial expressions in real time.

The system integrates a custom [LangChain](https://www.langchain.com/) retrieval-augmented generation (RAG) architecture that indexes domain-specific question banks and evaluation criteria. Candidate speech is transcribed using high-precision Speech-to-Text pipelines achieving **95% accuracy**, evaluated for semantic relevance, clarity, and completeness in **under 2 seconds**.

Simultaneously, a lightweight computer vision pipeline built with [OpenCV](https://opencv.org/) and [MediaPipe](https://developers.google.com/mediapipe) captures webcam frames to classify facial emotion and engagement levels across 7 classes (neutral, confident, nervous, engaged, confused, stressed, enthusiastic) with **90% precision**. The resulting multimodal telemetry is aggregated into an interactive post-session score breakdown.`,
    highlights: [
      "Domain-aware RAG Q&A pipeline delivering real-time semantic evaluation in <2 seconds",
      "High-accuracy Speech-to-Text integration achieving 95% transcription precision",
      "Computer vision emotion classification across 7 facial states at 90% precision using OpenCV + MediaPipe",
      "Interactive candidate dashboard with granular delivery metrics, speech pacing, and conceptual scoring",
      "Low-latency streaming architecture designed for interactive interview sessions",
    ],
    stack: [
      "LangChain",
      "OpenAI API",
      "Python",
      "OpenCV",
      "MediaPipe",
      "Speech-to-Text",
      "React",
      "FastAPI",
    ],
    links: {
      repo: "https://github.com/Satyarth-2003/Interview-Bar",
    },
    image: "/assets/shots/interview-bar.webp",
    featured: true,
    year: "2025",
    active: true,
    metrics: [
      { value: "95%", label: "STT accuracy" },
      { value: "<2s", label: "multimodal feedback" },
      { value: "90%", label: "emotion precision" },
    ],
  },
  {
    slug: "conversational-voice-ai",
    name: "Conversational Voice AI Agent",
    tagline: "Low-latency voice reasoning with sub-300ms response",
    oneLiner:
      "A real-time bidirectional conversational AI agent engineered with GPT-4.1, WebSocket audio streaming, and ElevenLabs TTS synthesis.",
    summary:
      "A production-grade conversational voice AI agent delivering seamless human-like interactions with sub-300ms end-to-end latency. Combines streaming speech recognition, fast LLM reasoning, multilingual prompt orchestration, and high-fidelity text-to-speech audio synthesis over duplex WebSockets.",
    detail: `Traditional conversational AI agents suffer from jarring latency pauses between user speech and generated voice response. This project eliminates that friction by building an ultra-low latency, bidirectional voice agent pipeline operating with **sub-300ms latency**.

The architecture uses full-duplex [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to stream raw audio chunks from the client to a Python/FastAPI backend. Incoming audio is processed by streaming speech-to-text with voice activity detection (VAD) and interrupt handling, allowing users to naturally interrupt the agent mid-sentence.

Reasoning is powered by [GPT-4.1](https://openai.com) with structured system prompts and token streaming directly into [ElevenLabs](https://elevenlabs.io) WebSocket synthesis endpoints. Sentences and clauses are synthesized incrementally as tokens generate, enabling instant audio playback with natural cadence and multilingual adaptability.`,
    highlights: [
      "Sub-300ms end-to-end turnaround from user utterance to streaming audio response",
      "Duplex WebSocket streaming architecture with Voice Activity Detection (VAD) and barge-in interruption",
      "Chunked token-to-speech pipelining: audio synthesis begins on the first generated clause",
      "Multilingual prompt engineering ensuring consistent persona, pacing, and tone across topics",
    ],
    stack: [
      "GPT-4.1",
      "ElevenLabs API",
      "WebSocket",
      "LangChain",
      "Python",
      "FastAPI",
      "AsyncIO",
    ],
    links: {
      repo: "https://github.com/Satyarth-2003",
    },
    image: "/assets/shots/conversational-voice-ai.webp",
    featured: true,
    year: "2026",
    active: true,
    metrics: [
      { value: "<300ms", label: "latency" },
      { value: "Full Duplex", label: "WebSocket streaming" },
    ],
  },
  {
    slug: "scriptiq-automation",
    name: "ScriptIQ & Broadcast Automation",
    tagline: "LLM-driven educational workflows saving ₹60+ Lakhs",
    oneLiner:
      "An automated LLM scripting pipeline producing 1,000+ educational scripts/yr and slashing channel broadcast creation from 30 mins to 2–5 seconds.",
    summary:
      "ScriptIQ is a multi-stage LLM workflow built at Adda Education to automate educational script creation, pedagogy alignment, and broadcast orchestration across 200+ channels, achieving 6x throughput via parallel execution, intelligent caching, and multi-step prompt engineering.",
    detail: `At scale, generating hundreds of high-quality educational broadcast scripts and video outlines manually creates significant bottlenecks and costs. ScriptIQ was architected as an automated, multi-stage LLM production pipeline to eliminate these inefficiencies.

The pipeline breaks down complex curriculum topics into structured knowledge graphs, drafts narrative scripts with verified pedagogy constraints, and conducts automated self-consistency audits using specialized prompting techniques. The system saved **over ₹60 Lakhs in operational overhead within its first year** while generating 1,000+ complete scripts.

In addition, I designed and deployed a YouTube broadcast automation engine supporting 200+ active channels. By leveraging asynchronous parallel execution, asset pre-computation, and intelligent caching layers, video package setup times plunged from **30 minutes down to 2–5 seconds** per broadcast.`,
    highlights: [
      "Automated 1,000+ educational scripts/year saving ₹60+ Lakhs in operational costs",
      "Multi-stage prompt-engineered verification ensuring curriculum fidelity and tone compliance",
      "Cut broadcast creation time from 30 minutes to 2–5 seconds across 200+ YouTube channels",
      "Parallel task queuing and Redis caching yielding 6x throughput gains under peak load",
    ],
    stack: [
      "Python",
      "OpenAI",
      "LangChain",
      "FastAPI",
      "Redis",
      "Docker",
      "GCP",
      "YouTube API",
    ],
    links: {},
    image: "/assets/shots/scriptiq-automation.webp",
    featured: true,
    year: "2025",
    active: true,
    metrics: [
      { value: "₹60L+", label: "cost savings" },
      { value: "2–5s", label: "creation time" },
      { value: "200+", label: "channels automated" },
    ],
  },
  {
    slug: "cascadegen",
    name: "CascadeGen",
    tagline: "Multi-Modal Diffusion Model for Generative Media",
    oneLiner:
      "A unified multi-modal diffusion architecture generating high-fidelity images, video clips, and synthesized audio from cross-modal conditioning.",
    summary:
      "CascadeGen explores unified generative diffusion across multiple modalities. It accepts text, image, or audio prompts to generate and transform visual and acoustic content using deep latent diffusion pipelines and cross-attention conditioning mechanisms.",
    detail: `Generative models are typically isolated by modality (image, video, or audio). CascadeGen investigates unified cross-modal generation by leveraging cascaded latent diffusion representations conditioned on multimodal embeddings.

Built in Python using PyTorch and modern transformer backbones, CascadeGen processes cross-modal inputs through joint embedding projections. The system applies progressive latent upsampling to synthesize high-resolution images, short video sequences, and matching acoustic waveforms conditioned on input text or reference imagery.`,
    highlights: [
      "Unified latent diffusion pipeline supporting cross-modal text, image, and audio conditioning",
      "Cascaded upscaling architecture ensuring crisp high-frequency detail generation",
      "Modular PyTorch inference engine with optimized GPU memory footprint",
    ],
    stack: ["Python", "PyTorch", "Diffusion Models", "Transformers", "OpenCV", "JavaScript"],
    links: {
      repo: "https://github.com/Satyarth-2003/CascadeGen-Multi-Modal-Diffusion-Model-for-Image-Video-and-Audio-Generation",
    },
    image: "/assets/shots/cascadegen.webp",
    featured: false,
    year: "2024",
  },
  {
    slug: "deepdetect",
    name: "DeepDetect",
    tagline: "Real-Time Fraud Detection & Risk Analytics Dashboard",
    oneLiner:
      "A responsive financial fraud detection frontend and analytics dashboard integrated with machine learning anomaly detection backends.",
    summary:
      "DeepDetect provides financial security teams with real-time risk scores, anomaly visualizations, and transaction inspection tools. Built with TypeScript and React, it consumes ML risk scoring APIs to flag suspicious patterns and minimize false positives.",
    detail: `Financial fraud occurs at microsecond scales, requiring intuitive interfaces that present complex ML risk indicators clearly to fraud analysts. DeepDetect was developed as a modern, high-speed fraud analytics dashboard.

The application visualizes incoming transaction streams, anomaly likelihood scores, and risk classifications derived from trained classification models. Analysts can inspect transaction graph relationships, review flagged behavioral anomalies, and trigger automated account restrictions or secondary verification workflows.`,
    highlights: [
      "Real-time transaction anomaly monitoring and automated risk tier categorization",
      "Interactive data visualizations and inspection tooling for fraud investigation teams",
      "Modular TypeScript architecture ready for plug-and-play REST and WebSocket ML APIs",
    ],
    stack: ["TypeScript", "React", "Tailwind CSS", "REST APIs", "Data Visualization", "Chart.js"],
    links: {
      repo: "https://github.com/Satyarth-2003/DeepDetect--Fraud-Detection-Dashboarda",
    },
    image: "/assets/shots/deepdetect.webp",
    featured: false,
    year: "2024",
  },
  {
    slug: "cursor-gesture-control",
    name: "Contactless Hand Gesture Controller",
    tagline: "Webcam-based OS navigation via MediaPipe & Computer Vision",
    oneLiner:
      "A modular computer vision system mapping real-time webcam hand gestures to OS cursor control, clicks, scrolling, volume, and brightness adjustments.",
    summary:
      "A contactless human-computer interaction tool using MediaPipe Hand Landmark detection and OpenCV. It recognizes gestures such as pinch, fist, and V-sign to trigger smooth mouse navigation and system setting modifications without hardware peripherals.",
    detail: `Touchless interaction enables sterile computing environments, accessibility accommodations, and intuitive natural user interfaces. This project builds a low-latency gesture recognition pipeline running directly on standard consumer webcams.

Using Google's MediaPipe Hands, 21 3D hand landmarks are extracted per frame and fed into a gesture classifier. Coordinate smoothing algorithms eliminate jitter, translating finger distances and spatial geometry into precise mouse cursor movements, click triggers, multi-directional scrolling, and system volume/brightness scaling.`,
    highlights: [
      "Real-time 21-point hand landmark tracking running at 30+ FPS on consumer CPUs",
      "Smooth cursor interpolation and jitter suppression filters for natural control",
      "Gesture recognition mappings for mouse clicks, scrolling, brightness, and volume",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    links: {
      repo: "https://github.com/Satyarth-2003/Cursor-Movement-Using-Hand-Movements",
    },
    image: "/assets/shots/cursor-gesture-control.webp",
    featured: false,
    year: "2024",
  },
  {
    slug: "smart-home-security",
    name: "Smart Home Security System",
    tagline: "Facial-Recognition Access Control for Smart Homes",
    oneLiner:
      "A facial recognition security system that authenticates residents in real time and integrates with Firebase for centralized access logging.",
    summary:
      "A computer vision access-control system built to enhance smart home security by recognizing authorized users via facial encoding and triggering real-time authentication decisions, backed by a Firebase database.",
    detail: `Traditional smart home security still relies heavily on PINs and physical keys. This project explores facial recognition as a frictionless, more secure alternative for controlling access to smart homes.

The system encodes known residents' faces into a local face-encoding cache, then continuously compares live webcam frames against these encodings in real time. Recognized users trigger authorized-entry events, while unrecognized faces are logged for review. All access events and encodings are synced through Firebase, allowing centralized management across multiple entry points.`,
    highlights: [
      "Real-time facial recognition and encoding pipeline for resident authentication",
      "Firebase-backed data layer for access logs and encoding storage",
      "Modular scripts for enrolling new residents and managing the recognition database",
    ],
    stack: ["Python", "OpenCV", "face_recognition", "Firebase"],
    links: {
      repo: "https://github.com/Satyarth-2003/Smart-Home-Security-System",
    },
    image: "/assets/shots/smart-home-security.webp",
    featured: false,
    year: "2023",
  },
  {
    slug: "eye-tracking-driving-simulator",
    name: "Eye-Tracking in Driving Simulators",
    tagline: "GSoC 2024 — AI/ML Driver Safety Analytics",
    oneLiner:
      "A Google Summer of Code 2024 project analyzing driver behavior and risk using eye-tracking and vehicle telemetry from driving simulator sessions.",
    summary:
      "Built as part of GSoC 2024, this project applies computer vision and statistical analysis to driving simulator footage and telemetry, detecting lane departures, harsh driving events, and computing risk and time-to-collision metrics from driver eye and vehicle behavior.",
    detail: `Driving simulators generate rich behavioral data, but turning raw footage and telemetry into actionable safety insight requires dedicated tooling. This GSoC 2024 project builds that analysis layer.

Using OpenCV, simulator video is processed frame-by-frame to extract steering angles and detect lane departures, while a companion notebook performs statistical analysis over driving telemetry — identifying harsh acceleration, braking, and sharp turns, and computing time-to-collision (TTC) values. The result is a set of heatmaps and risk scores visualizing driver input intensity and safety-relevant events across a session.`,
    highlights: [
      "Frame-level steering angle extraction and lane-departure detection via OpenCV",
      "Statistical detection of harsh acceleration, braking, and sharp-turn events",
      "Time-to-collision (TTC) computation and driver risk scoring",
      "Heatmap visualizations of steering, acceleration, and braking intensity over time",
    ],
    stack: ["Python", "OpenCV", "Pandas", "Jupyter Notebook"],
    links: {
      repo: "https://github.com/Satyarth-2003/Eye-Tracking-Data-in-Driving-Simulator",
    },
    image: "/assets/shots/eye-tracking-driving.webp",
    featured: false,
    year: "2024",
  },
  {
    slug: "linguasynth",
    name: "LinguaSynth",
    tagline: "Dialogflow-Powered Conversational NLP Chatbot",
    oneLiner:
      "An NLP chatbot built on Dialogflow with a FastAPI backend and SQL-backed storage, designed for natural, intent-driven conversations.",
    summary:
      "LinguaSynth is a conversational chatbot leveraging Dialogflow's intent and entity recognition to understand user input and generate relevant responses, served through a FastAPI backend with a lightweight HTML/CSS frontend.",
    detail: `LinguaSynth pairs Google's Dialogflow NLU engine with a custom backend to deliver natural, intent-aware conversations. Dialogflow handles intent classification and entity extraction from user utterances, while a FastAPI service manages business logic, session state, and persistence.

Conversation data and configured intents are backed by a SQL database, and a simple HTML/CSS frontend provides a chat interface for end users. The architecture keeps NLU, backend logic, and presentation cleanly separated across dedicated directories.`,
    highlights: [
      "Intent and entity recognition via Dialogflow for natural conversation flow",
      "FastAPI backend handling conversation logic and session management",
      "SQL-backed storage for intents, entities, and conversation history",
      "Lightweight HTML/CSS chat frontend integrated with the backend API",
    ],
    stack: ["Python", "Dialogflow", "FastAPI", "SQL", "HTML/CSS"],
    links: {
      repo: "https://github.com/Satyarth-2003/LinguaSynth",
    },
    image: "/assets/shots/linguasynth.webp",
    featured: false,
    year: "2023",
  },
  {
    slug: "bw-image-colorizer",
    name: "Black & White Image Colorizer",
    tagline: "CNN-Based Grayscale-to-Color Image Restoration",
    oneLiner:
      "A CLI tool that colorizes grayscale photos using pre-trained ECCV16 and SIGGRAPH17 convolutional models, displaying results side by side.",
    summary:
      "A Python script that restores color to black-and-white images using two pre-trained CNN colorization models — ECCV 2016 and SIGGRAPH 2017 — comparing the original, grayscale, and colorized outputs.",
    detail: `Colorizing black-and-white photography is a classic computer vision restoration problem. This tool wraps two established pre-trained CNN colorization models — ECCV 2016 and SIGGRAPH 2017 — behind a simple command-line interface.

Given an input image, the script converts it to grayscale, runs it through both pre-trained models, and displays the original, grayscale, and colorized versions side by side for comparison. Each model's output is saved separately as a PNG, making it easy to evaluate colorization quality across approaches.`,
    highlights: [
      "Dual-model colorization pipeline using ECCV16 and SIGGRAPH17 pre-trained CNNs",
      "Argparse-driven CLI for flexible, user-defined image inputs",
      "Side-by-side comparison view of original, grayscale, and colorized outputs",
    ],
    stack: ["Python", "OpenCV", "Convolutional Neural Networks"],
    links: {
      repo: "https://github.com/Satyarth-2003/Black-and-White-Image-Colorizer",
    },
    image: "/assets/shots/bw-colorizer.webp",
    featured: false,
    year: "2023",
  },
];

export const WEB_PROJECTS = ["interview-bar", "conversational-voice-ai", "scriptiq-automation"];

export const FEATURED_ORDER = [
  "interview-bar",
  "conversational-voice-ai",
  "scriptiq-automation",
];

export const research = {
  title: "Parallel Agentic Audits & High-Throughput LLM Systems",
  subtitle:
    "Architecture and optimization strategies for scaling multi-agent evaluations across 326,000+ real-world audio streams under strict rate and cost constraints",
  byline: "Production Engineering & Research at Adda Education",
  year: "2025",
  pages: 14,
  summary:
    "Deploying large language models for high-volume enterprise auditing requires balancing reasoning accuracy against strict API rate limits and severe cost ceilings. This technical breakdown details the architecture of a parallel agentic audit system that evaluated 326,000+ customer and educational calls at ~85% accuracy. It covers prompt caching, tiered agent routing (fast evaluation vs. deep arbitration), and asynchronous batching that reduced per-call costs by 58% while tripling audit throughput.",
  findings: [
    "Tiered routing between lightweight classification models and deep reasoning arbiters achieved ~85% accuracy while preventing costly unnecessary reasoning passes",
    "Asynchronous worker pool orchestration with rate-aware token bucket scheduling achieved a 3x speedup under strict provider concurrency limits",
    "Per-call cost decreased by 58%, saving tens of thousands in inference expenditure at six-figure call scale",
    "DynamoDB to BigQuery analytics migration reduced data pipeline infrastructure costs by ~95%",
  ],
  note: "Developed and deployed in production at Adda Education, powering enterprise quality assurance and candidate scoring.",
  image: "/assets/research-teaser.webp",
  pdf: "/Satyarth-Prakash-Srivastava-Resume.pdf",
  repo: "https://github.com/Satyarth-2003",
  doi: "https://github.com/Satyarth-2003",
  orcid: "https://www.linkedin.com/in/satyarth2003/",
  citation:
    "Srivastava, S. P. (2025). Parallel Agentic Audits: Scaling High-Throughput LLM Reasoning Systems Under Production Rate and Cost Limits. Adda Education AI Technical Series.",
  bibtex: `@misc{srivastava2025agenticaudits,
  author = {Srivastava, Satyarth Prakash},
  title  = {Parallel Agentic Audits: Scaling High-Throughput LLM Reasoning Systems Under Production Rate and Cost Limits},
  year   = {2025},
  note   = {Adda Education AI Systems}
}`,
} as const;

export const skills: { group: string; items: string[] }[] = [
  {
    group: "GenAI & LLMs",
    items: [
      "LangChain",
      "LangGraph",
      "RAG Architectures",
      "Prompt Engineering",
      "OpenAI API",
      "Claude",
      "Gemini",
      "Hugging Face",
      "Embeddings",
      "Fine-Tuning",
      "Agentic Workflows",
      "n8n",
      "TTS / STT",
    ],
  },
  {
    group: "ML / DL & Vision",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "MediaPipe",
      "Scikit-learn",
      "CNN",
      "LSTM",
      "RNN",
      "NLTK",
      "SpaCy",
    ],
  },
  {
    group: "Software & APIs",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "FastAPI",
      "Flask",
      "WebSockets",
      "REST APIs",
      "SQL",
    ],
  },
  {
    group: "Cloud & Tools",
    items: [
      "AWS SageMaker",
      "GCP BigQuery",
      "Docker",
      "Git",
      "Tableau",
      "Jupyter",
      "Linux",
      "ElevenLabs",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Programming with Generative AI",
    issuer: "IIT Guwahati",
    date: "Jul 2025",
    url: "https://www.linkedin.com/in/satyarth2003/",
  },
  {
    name: "Advanced Machine Learning on Google Cloud",
    issuer: "Google Cloud",
    date: "Apr 2024",
    url: "https://www.linkedin.com/in/satyarth2003/",
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Apr 2025",
    url: "https://www.linkedin.com/in/satyarth2003/",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online / DeepLearning.AI",
    date: "2024",
    url: "https://www.linkedin.com/in/satyarth2003/",
  },
];

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;
