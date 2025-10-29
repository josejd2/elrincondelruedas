"use client"

import type React from "react"

import { ArrowUpRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("sobre-mi")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["sobre-mi", "habilidades", "experiencia", "proyectos"]
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      scrollToSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Saltar al contenido principal
      </a>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:gap-16 lg:px-12 lg:py-24">
        <aside
          className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:max-w-md lg:flex-col lg:justify-between lg:py-24"
          aria-label="Información personal y navegación"
        >
          <div>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Jose Maria Lopez Villena
            </h1>
            <h2 className="mb-4 text-lg font-medium text-foreground/90">Desarrollador Full Stack</h2>
            <p className="mb-8 max-w-xs text-base leading-relaxed text-muted-foreground">
              Construyo experiencias digitales accesibles y centradas en el usuario.
            </p>

            <Link
              href="/cv/Jose-Maria-Lopez-Villena-CV.pdf"
              download
              className="mb-16 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Descargar curriculum vitae en formato PDF"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Descargar CV
            </Link>

            <nav className="hidden lg:block" aria-label="Navegación principal">
              <ul className="space-y-4" role="list">
                <li>
                  <button
                    onClick={() => scrollToSection("sobre-mi")}
                    onKeyDown={(e) => handleKeyDown(e, "sobre-mi")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${
                      activeSection === "sobre-mi" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={activeSection === "sobre-mi" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${
                        activeSection === "sobre-mi"
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    SOBRE MÍ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("habilidades")}
                    onKeyDown={(e) => handleKeyDown(e, "habilidades")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${
                      activeSection === "habilidades"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={activeSection === "habilidades" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${
                        activeSection === "habilidades"
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    HABILIDADES
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experiencia")}
                    onKeyDown={(e) => handleKeyDown(e, "experiencia")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${
                      activeSection === "experiencia"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={activeSection === "experiencia" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${
                        activeSection === "experiencia"
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    EXPERIENCIA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("proyectos")}
                    onKeyDown={(e) => handleKeyDown(e, "proyectos")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${
                      activeSection === "proyectos" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={activeSection === "proyectos" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${
                        activeSection === "proyectos"
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                      }`}
                      aria-hidden="true"
                    />
                    PROYECTOS
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex items-center gap-5 lg:mt-0" role="list" aria-label="Redes sociales">
            <Link
              href="https://github.com/josemaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Visitar perfil de GitHub (se abre en nueva pestaña)"
            >
              <Github className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://linkedin.com/in/josemarialopezvillena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Visitar perfil de LinkedIn (se abre en nueva pestaña)"
            >
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="mailto:jose@elrincondelruedas.com"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Enviar correo electrónico a jose@elrincondelruedas.com"
            >
              <Mail className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </aside>

        <main id="main-content" className="lg:w-1/2 lg:py-24" aria-label="Contenido principal">
          {/* About Section */}
          <section
            id="sobre-mi"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
            aria-labelledby="sobre-mi-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="sobre-mi-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Sobre mí
              </h2>
            </div>
            <h2
              id="sobre-mi-heading"
              className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground"
            >
              Sobre mí
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Soy un desarrollador apasionado por crear experiencias web que combinan diseño elegante con código
                limpio y eficiente. Mi enfoque está en construir aplicaciones que no solo funcionen perfectamente, sino
                que también ofrezcan una experiencia de usuario excepcional y accesible para todos.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Con experiencia en tecnologías modernas como <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Next.js</span> y{" "}
                <span className="text-foreground font-medium">TypeScript</span>, me especializo en crear interfaces
                intuitivas que resuelven problemas reales y mejoran la vida de las personas.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Cuando no estoy programando, disfruto explorando nuevas tecnologías, contribuyendo a proyectos de código
                abierto y compartiendo conocimientos con la comunidad de desarrolladores en{" "}
                <Link
                  href="https://elrincondelruedas.com"
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                >
                  elrincondelruedas
                </Link>
                .
              </p>
            </div>
          </section>

          <section
            id="habilidades"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
            aria-labelledby="habilidades-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="habilidades-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Habilidades
              </h2>
            </div>
            <h2 className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
              Habilidades
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-base font-semibold text-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías frontend">
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    React
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Next.js
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    TypeScript
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    JavaScript
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Tailwind CSS
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    HTML5
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    CSS3
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Responsive Design
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías backend">
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Node.js
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Express
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    PostgreSQL
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    MongoDB
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Prisma
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    REST APIs
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    GraphQL
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-foreground">Herramientas y Otros</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Herramientas y otras tecnologías">
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Git
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    GitHub
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Docker
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Vercel
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Figma
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Accesibilidad Web (WCAG)
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    SEO
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    role="listitem"
                  >
                    Testing (Jest, Playwright)
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experiencia"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
            aria-labelledby="experiencia-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="experiencia-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Experiencia
              </h2>
            </div>
            <h2 className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
              Experiencia
            </h2>
            <div className="space-y-12 group/list" role="list">
              {/* Experience Item 1 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  2023 — Presente
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href="#"
                      className="inline-flex items-baseline gap-1 hover:text-primary transition-colors focus-visible:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        Desarrollador Full Stack · Empresa Tech
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Desarrollo y mantenimiento de aplicaciones web escalables utilizando React, Next.js y Node.js.
                    Implementación de mejores prácticas de accesibilidad (WCAG 2.1 AA) y optimización de rendimiento
                    para mejorar la experiencia del usuario en un 40%.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      React
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Next.js
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      TypeScript
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Node.js
                    </span>
                  </div>
                </div>
              </article>

              {/* Experience Item 2 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  2021 — 2023
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href="#"
                      className="inline-flex items-baseline gap-1 hover:text-primary transition-colors focus-visible:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        Desarrollador Frontend · Startup Digital
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Colaboración con equipos multifuncionales para diseñar e implementar interfaces de usuario
                    responsivas y accesibles. Desarrollo de componentes reutilizables y sistemas de diseño que mejoraron
                    la consistencia del producto en un 60%.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      JavaScript
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      React
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Tailwind CSS
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Git
                    </span>
                  </div>
                </div>
              </article>

              {/* Experience Item 3 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  2020 — 2021
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href="#"
                      className="inline-flex items-baseline gap-1 hover:text-primary transition-colors focus-visible:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        Desarrollador Junior · Agencia Web
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Desarrollo de sitios web y aplicaciones para diversos clientes. Aprendizaje de mejores prácticas de
                    desarrollo web, accesibilidad y colaboración en equipo utilizando metodologías ágiles.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      HTML
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      CSS
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      JavaScript
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      WordPress
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="proyectos"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
            aria-labelledby="proyectos-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="proyectos-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Proyectos
              </h2>
            </div>
            <h2 className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
              Proyectos
            </h2>
            <div className="space-y-12 group/list" role="list">
              {/* Project Item 1 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 sm:col-span-2">
                  <img
                    src="/modern-web-dashboard.png"
                    alt="Captura de pantalla de la plataforma de gestión mostrando dashboard con gráficos y métricas"
                    className="rounded border-2 border-border/50 transition group-hover:border-border/80"
                    loading="lazy"
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href="#"
                      className="inline-flex items-baseline gap-1 hover:text-primary transition-colors focus-visible:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        Plataforma de Gestión
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Aplicación web completa para gestión de proyectos con autenticación, dashboard interactivo y
                    análisis en tiempo real. Implementada con arquitectura escalable, diseño responsivo y cumplimiento
                    total de estándares de accesibilidad WCAG 2.1 AA.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Next.js
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      PostgreSQL
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Prisma
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Tailwind
                    </span>
                  </div>
                </div>
              </article>

              {/* Project Item 2 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 sm:col-span-2">
                  <img
                    src="/ecommerce-mobile-app.png"
                    alt="Captura de pantalla de tienda online mostrando productos y carrito de compras"
                    className="rounded border-2 border-border/50 transition group-hover:border-border/80"
                    loading="lazy"
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href="#"
                      className="inline-flex items-baseline gap-1 hover:text-primary transition-colors focus-visible:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        E-commerce Moderno
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Tienda online con carrito de compras, pasarela de pagos integrada y panel de administración.
                    Optimizada para SEO y rendimiento con carga rápida de imágenes y navegación accesible por teclado.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      React
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Stripe
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      MongoDB
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Node.js
                    </span>
                  </div>
                </div>
              </article>

              {/* Project Item 3 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 sm:col-span-2">
                  <img
                    src="/social-media-app-design.jpg"
                    alt="Captura de pantalla de red social mostrando perfiles y feed de actividades"
                    className="rounded border-2 border-border/50 transition group-hover:border-border/80"
                    loading="lazy"
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <Link
                      href="#"
                      className="inline-flex items-baseline gap-1 hover:text-primary transition-colors focus-visible:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        Red Social de Desarrolladores
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Plataforma social para compartir código y colaborar en proyectos. Incluye sistema de mensajería en
                    tiempo real, perfiles personalizables, feed de actividades y soporte completo para lectores de
                    pantalla.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      TypeScript
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Socket.io
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Redis
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Docker
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-24">
            <p className="text-sm text-muted-foreground">
              Diseñado y construido con accesibilidad en mente por{" "}
              <Link
                href="https://elrincondelruedas.com"
                className="text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              >
                Jose Maria Lopez Villena
              </Link>
              . Inspirado en el trabajo de Brittany Chiang.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
