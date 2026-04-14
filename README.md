# 🚀 P08 — Multi-Agent Content Pipeline

Sistema de orquestación de agentes de IA diseñado para transformar una simple idea en contenido editorial de alta calidad, optimizado para SEO y listo para publicar.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Anthropic](https://img.shields.io/badge/Anthropic-Claude%204.6-7C3AED?style=flat-square)

## ✨ Características Principales

- 🤖 **Multi-Agent Pipeline**: 6 agentes especializados trabajando en secuencia.
- 🔄 **Handoff Estructurado**: Cada etapa valida y refina el trabajo del agente anterior.
- 📡 **Live Streaming**: Visualización en tiempo real del progreso de cada agente vía SSE.
- 📝 **Markdown Output**: Generación de archivos listos para sistemas CMS o generadores de sitios estáticos.
- ⚡ **Arquitectura Moderna**: Construido sobre Next.js 16 con React 19 y Server Actions.

## 🏗️ Arquitectura del Pipeline

El pipeline opera de forma secuencial, asegurando que cada etapa tenga todo el contexto necesario para producir el mejor resultado.

```text
[ Idea Generator ] → [ Deep Researcher ] → [ Content Drafter ]
                                                    ↓
[ Meta-Exporter ] ← [ SEO Optimizer ]    ← [ Senior Editor ]
```

### 📋 Etapas del Pipeline

1.  **Idea**: Refina el concepto inicial y define el ángulo editorial.
2.  **Research**: Recopila información clave, datos y puntos de interés.
3.  **Draft**: Redacta la primera versión estructurada del contenido.
4.  **Edit**: Pule el tono, la claridad y la fluidez narrativa.
5.  **SEO**: Optimiza encabezados, keywords y metadatos.
6.  **Publish**: Formatea el resultado final en Markdown profesional.

## 💻 Tech Stack

- **Core**: Next.js 16 (App Router) + TypeScript
- **Agent Orchestration**: Custom sequential logic in `lib/pipeline`
- **AI Model**: Claude 3.5 Sonnet (Anthropic SDK)
- **UI/UX**: Tailwind CSS + shadcn/ui + Lucide Icons
- **Real-time**: Server-Sent Events (SSE) para el dashboard
- **Testing**: Vitest para la lógica de orquestación

## 🚀 Inicio Rápido

### 1. Requisitos Previos

- Node.js 18+
- Anthropic API Key

### 2. Instalación

```bash
git clone ...
cd p08-content-pipeline
npm install
```

### 3. Configuración

Crea un archivo `.env.local` basado en `.env.example`:

```env
ANTHROPIC_API_KEY=your_key_here
```

### 4. Lanzar Aplicación

```bash
npm run dev
```

Accede a `http://localhost:3000/dashboard` para comenzar a generar contenido.

## 📁 Estructura del Proyecto

- `app/api/pipeline`: Endpoint que maneja el streaming del pipeline.
- `app/dashboard`: Interfaz de usuario para control y progreso.
- `lib/pipeline/agents`: Definición de los prompts y lógica de cada agente.
- `lib/pipeline/orchestrator.ts`: Motor de ejecución y gestión de handoffs.
- `output/`: Directorio donde se persisten los resultados de cada ejecución.

---

*Este proyecto es el número 08 del currículum **Full Stack AI Developer**, enfocado en la orquestación secuencial y contratos de interfaz entre agentes.*
