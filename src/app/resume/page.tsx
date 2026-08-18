import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { profile, experiences, education, certifications } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { ResumeActions } from "@/components/resume/resume-actions";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Satyarth Prakash Srivastava's resume: AI Engineer with production experience building LLM-powered automation systems, GenAI pipelines, and agentic workflows at scale.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="print-page pt-32 pb-28">
      <Container>
        <div className="no-print flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>curriculum vitae</Eyebrow>
            <h1 className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] text-bone sm:text-5xl">
              Satyarth Prakash Srivastava
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-bone-dim">
              AI Engineer specializing in production GenAI pipelines, agentic workflows,
              and multimodal systems.
            </p>
          </div>
          <ResumeActions />
        </div>

        {/* Structured Resume Canvas */}
        <div className="print-sheet mx-auto mt-14 max-w-[880px] rounded-xl border border-line bg-surface/50 p-6 shadow-float backdrop-blur-sm sm:p-10">
          {/* Header */}
          <div className="border-b border-line pb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-bone sm:text-4xl">
                  SATYARTH PRAKASH SRIVASTAVA
                </h2>
                <p className="mt-1 font-mono text-sm text-ember font-medium">
                  AI Engineer · SDE-1 AI @ Adda Education
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
              <span className="flex items-center gap-1.5 text-bone-dim">
                <MapPin className="h-3.5 w-3.5 text-ember" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-bone-dim transition-colors hover:text-ember"
              >
                <Mail className="h-3.5 w-3.5 text-ember" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center gap-1.5 text-bone-dim transition-colors hover:text-ember"
              >
                <Phone className="h-3.5 w-3.5 text-ember" />
                {profile.phoneDisplay}
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-bone-dim transition-colors hover:text-ember"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-ember" />
                LinkedIn
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-bone-dim transition-colors hover:text-ember"
              >
                <GithubIcon className="h-3.5 w-3.5 text-ember" />
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="border-b border-line py-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
              SUMMARY
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-bone-dim">
              AI Engineer with production experience building LLM-powered automation systems,
              GenAI pipelines, and agentic workflows at scale, delivering measurable cost savings,
              throughput gains, and efficiency improvements. Skilled in prompt engineering, RAG
              architectures, LangChain/LangGraph orchestration, and multimodal AI deployment.
              Certified by IIT Guwahati (GenAI) and Stanford (ML).
            </p>
          </div>

          {/* Technical Skills */}
          <div className="border-b border-line py-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
              TECHNICAL SKILLS
            </h3>
            <div className="mt-4 space-y-2.5 font-mono text-xs">
              <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
                <span className="text-muted">GenAI & LLMs:</span>
                <span className="text-bone-dim">
                  LangChain, LangGraph, Prompting, RAG, OpenAI, Claude, Gemini, Hugging Face,
                  Embeddings, Fine Tuning, Agentic Workflows, n8n, TTS/STT
                </span>
              </div>
              <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
                <span className="text-muted">ML / DL:</span>
                <span className="text-bone-dim">
                  PyTorch, TensorFlow, Keras, Scikit-learn, NLTK, SpaCy, CNN, LSTM, RNN
                </span>
              </div>
              <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
                <span className="text-muted">Software Eng:</span>
                <span className="text-bone-dim">
                  Python, SQL, JavaScript, TypeScript, React, Flask, FastAPI, REST APIs
                </span>
              </div>
              <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
                <span className="text-muted">Cloud & Tools:</span>
                <span className="text-bone-dim">
                  OpenCV, MediaPipe, AWS SageMaker, GCP BigQuery, Docker, Tableau, Git, Jupyter, Excel
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="border-b border-line py-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
              EXPERIENCE
            </h3>
            <div className="mt-5 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.company + exp.start}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-bone">
                        {exp.company}
                      </h4>
                      <div className="font-mono text-xs text-ember font-medium">{exp.role}</div>
                    </div>
                    <div className="font-mono text-xs text-muted">
                      {exp.location} · {exp.start} — {exp.end}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[0.92rem] leading-relaxed text-bone-dim"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="border-b border-line py-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
              KEY PROJECTS
            </h3>
            <div className="mt-5 space-y-6">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-base font-semibold text-bone">
                    RAG-Powered Interview Simulator — Interview Bar
                  </h4>
                  <span className="font-mono text-xs text-muted">July 2025</span>
                </div>
                <div className="mt-1 font-mono text-[0.72rem] text-ember">
                  LangChain • OpenAI API • Speech-to-Text • OpenCV • MediaPipe • Python • React
                </div>
                <ul className="mt-3 space-y-1.5 text-[0.92rem] leading-relaxed text-bone-dim">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
                    <span>
                      Built a retrieval-augmented generation (RAG) pipeline for domain-aware Q&A
                      achieving 95% STT accuracy and real-time multimodal feedback in &lt;2 seconds.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
                    <span>
                      Integrated facial emotion detection across 7 classes at 90% precision using
                      OpenCV + MediaPipe.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-base font-semibold text-bone">
                    Conversational Voice AI Agent
                  </h4>
                  <span className="font-mono text-xs text-muted">Jan 2026</span>
                </div>
                <div className="mt-1 font-mono text-[0.72rem] text-ember">
                  GPT-4.1 • ElevenLabs API • WebSocket • LangChain • FastAPI • Python
                </div>
                <ul className="mt-3 space-y-1.5 text-[0.92rem] leading-relaxed text-bone-dim">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
                    <span>
                      Built a low-latency real-time conversational AI agent with sub-300ms response
                      time using LLM reasoning, TTS synthesis, and multilingual prompt engineering.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
                  EDUCATION
                </h3>
                <div className="mt-4">
                  <h4 className="font-display text-base font-semibold text-bone">
                    {education.school}
                  </h4>
                  <div className="font-mono text-xs text-muted">{education.program}</div>
                  <div className="mt-2 font-mono text-xs text-bone-dim">
                    GPA: 8.29 · 50% Merit-Based Scholarship (CUCET)
                  </div>
                  <div className="mt-1 font-mono text-xs text-muted">Jun 2025</div>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ember">
                  CERTIFICATIONS
                </h3>
                <ul className="mt-4 space-y-2.5 font-mono text-xs">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex justify-between gap-2">
                      <span className="text-bone-dim">
                        {c.name} <span className="text-muted">— {c.issuer}</span>
                      </span>
                      <span className="shrink-0 text-muted">{c.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
