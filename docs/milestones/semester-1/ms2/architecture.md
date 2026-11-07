---
title: System Architecture
description: Proposed MS2 architecture and the status of conditional and future components.
sidebar_position: 8
---

import Diagram from '@site/src/components/ms2/Diagram';
import StaticLink from '@site/src/components/StaticLink';

## Overview

The Architecture Decision Report proposes a **modular monolith**: one FastAPI backend organized into business modules, a separate React frontend, PostgreSQL as the structured-data source of truth, and persistent storage for original uploaded files. This is an MS2 proposal for review, not an implemented or deployed system.

<Diagram
  src="/ms2/architecture-diagram.png"
  alt="MS2 system architecture proposal showing the frontend, FastAPI backend, PostgreSQL, Keycloak, file storage, and conditional or future services"
  caption="Architecture figure extracted from the supplied MS2 Architecture Decision Report; dashed components are marked future or optional in that report."
/>

## Frontend

- **React + TypeScript + Vite** for the web application.
- **TanStack Router** for client-side routes.
- **TanStack Query** for API data fetching, caching and mutation state.

## Backend and API

- **Python + FastAPI**, structured as a modular monolith.
- **REST API**, documented with **OpenAPI**.
- The API retains business rules and permission enforcement server-side; the frontend communicates over HTTPS in deployed environments.

## Database and file storage

- **PostgreSQL** stores structured academic data, relationships, metadata, workflow state, versions and initial full-text search.
- **Persistent file storage** keeps original uploads separate from metadata and extracted text. The source report says originals must survive container recreation and be included in backup and restore procedures.
- Derived previews or extracted text do not replace the original file.

## Authentication

- **Keycloak with OpenID Connect (OIDC)** is the proposed identity provider for the initial phase. FastAPI validates the access token and applies application permissions.
- **University of Aveiro institutional authentication** is deferred to a later phase and depends on confirmation of the supported protocol and access conditions. It is not guaranteed by the MS2 design.

## Processing and search

- **PostgreSQL full-text search** is the initial proposal. **Elasticsearch** is deferred unless measurements show that PostgreSQL search is insufficient.
- A **Python worker with Celery and Redis** is conditional: the report proposes adding it only if long-running OCR, conversion or similarity jobs are included in the MVP. Redis is a task broker in that proposal, not the authoritative application database.
- The proposal separates automated moderation, OCR/similarity processing and academic validation; success in one does not imply approval in another.

## Architectural principles

- Modular monolith first; avoid business microservices without a demonstrated need.
- Keep an API boundary and enforce business rules and authorization on the server.
- Use PostgreSQL as the relational source of truth.
- Preserve uploaded originals separately from derived text and previews.
- Add infrastructure incrementally, guided by requirements and measurements.
- Apply security by default to tokens, permissions, uploads and inputs.

## Deployment and open decisions

The report proposes Docker Compose for local integration of the frontend, API, PostgreSQL and Keycloak. Add Redis and a Python worker only if asynchronous processing is in MVP scope. Production hosting, upload limits, exact format support, backup objectives, search acceptance criteria and the scope of OCR all remain to be confirmed.

<StaticLink to="/ms2/architecture-decision-report.pdf" target="_blank" rel="noopener noreferrer">Open the Architecture Decision Report (PDF)</StaticLink>.
