@AGENTS.md

## Proyecto

Multi-Agent Content Pipeline — Sistema secuencial de agentes de IA que transforman una idea inicial en un artículo optimizado para SEO y listo para publicar.

## AI Feature

- **Pipeline Secuencial**: 6 agentes especializados (Idea, Research, Draft, Edit, SEO, Publish).
- **Handoff Estructurado**: Cada agente recibe el output formateado del anterior como input.
- **Streaming en Tiempo Real**: Progreso del pipeline visualizado vía Server-Sent Events (SSE).
- **Anthropic SDK**: Uso de Claude 3.5 Sonnet para generación de contenido de alta calidad.

## Stack

- **Framework**: Next.js 16 (App Router) + TypeScript.
- **Styling**: Tailwind CSS + shadcn/ui.
- **Orquestación**: Lógica de pipeline personalizada en `lib/pipeline/orchestrator.ts`.
- **Persistencia**: Local (sistema de archivos) en carpeta `output/` como archivos JSON/Markdown.

## Model

Default: claude-sonnet-4-6, effort: medium
