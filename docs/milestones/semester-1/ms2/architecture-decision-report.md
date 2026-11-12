---
title: Architecture Decision Report
description: Summary and status of the MS2 architectural decisions.
sidebar_position: 9
---

import StaticLink from '@site/src/components/StaticLink';

## Decision status

> The MS2 report contained an earlier Keycloak proposal. It is superseded by the current mandatory direction WSO2 + UA IdP. Keycloak is not part of the current architecture or MVP. The integration is not proven operational by the code reviewed.

The report labels decisions as accepted proposals, conditional proposals, recommendations, deferred, rejected for the MVP or still open. These are the statuses recorded in the MS2 report; they do not mean components have been implemented.

| ADR | Decision | MS2 status | Boundary or rationale |
| --- | --- | --- | --- |
| ADR-01 | React, TypeScript, Vite; TanStack Router and TanStack Query | Accepted proposal | Single-page frontend and structured API interaction. |
| ADR-02 | Python, FastAPI, modular monolith; REST/OpenAPI | Accepted proposal | One backend deployment with module boundaries. |
| ADR-03 | WSO2 integrated with the University of Aveiro IdP | Current architectural direction (MS3); operational setup pending | External identity is associated with a permanent internal ID; application authorization remains in ApontaUA. The team requests an access token from STIC through the supervisor; OIDC is intended and technical parameters follow STIC guidance. |
| ADR-04 | Institutional authorization and configuration | Pending operational dependency | WSO2/IdP integration is the next integration step after the team requests and receives the access token from STIC and applies the service configuration. |
| ADR-05 | PostgreSQL for structured data and workflow state | Accepted proposal | Relational source of truth. |
| ADR-06 | PostgreSQL full-text search initially; no Elasticsearch at first | Accepted for MVP | Reconsider only if measured need justifies added complexity. |
| ADR-07 | Persistent volume for original uploads; metadata in PostgreSQL | Proposed | Backup and restore procedures are required before a pilot. |
| ADR-08 | Python worker with Celery and Redis for long-running jobs | Conditional proposal | Adopt only if OCR/extraction jobs are included in the MVP. |
| ADR-09 | Exact-file hash first, then candidate text similarity warnings | Proposed staged implementation | Similarity must not automatically reject a submission. |
| ADR-10 | Evaluate TipTap or ProseMirror; define each imported format's capabilities | Open implementation decision | Upload, preview, indexing and editing are separate. |
| ADR-11 | Docker Compose locally; GitHub Actions checks/tests where feasible | Recommended | Add CI incrementally to support reproducible integration. |
| ADR-12 | Do not split business capabilities into microservices for the MVP | Rejected for MVP | The optional processing worker is a separate process, not a business microservice. |

## Decisions that still need confirmation

The report leaves OCR and asynchronous processing scope, exact file formats and upload limits, per-format preview/index/edit behavior, role and resource-level authorization, institutional IdP protocol/configuration, database and file backups, search/OCR/duplicate quality criteria, and institutional identity integration for confirmation.

## Complete source report

<StaticLink to="/ms2/architecture-decision-report.pdf" target="_blank" rel="noopener noreferrer">Open or download the original Architecture Decision Report</StaticLink>.
