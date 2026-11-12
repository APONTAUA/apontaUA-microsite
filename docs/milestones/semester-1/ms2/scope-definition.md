---
title: Scope and Milestone Plan
description: Proposed MVP scope and future or conditional work shown in the MS2 presentation.
sidebar_position: 14
---

## Proposed MVP scope in the presentation

The presentation places the following capabilities in its proposed MVP scope. This is a plan, not a report of completed implementation:

- Institutional authentication via WSO2 + UA IdP and basic application roles (target architecture; service operation depends on institutional authorization/configuration).
- Navigation by course, curricular unit and topic.
- Upload and search, capturing author, source and licence.
- Version history, review status and lecturer sign-off.
- Duplicate warnings and preservation of accessible variants.

## Future or conditional scope

The presentation defers or conditions these items:

- Operational integration with the University of Aveiro IdP remains dependent on institutional authorization and configuration; it is not a separate alternative provider.
- Advanced OCR and evaluation of handwritten content.
- Celery and Redis, if asynchronous jobs are needed.
- Elasticsearch, if search evidence justifies it.
- Advanced recommendations and reputation features.

The Architecture Decision Report also makes OCR, asynchronous processing, exact format support and maximum upload size open decisions. These scope boundaries should be confirmed against the functional and non-functional drafts before implementation.

## Dates shown in the presentation

The presentation is dated **13 October 2026** and gives **20 October 2026** as the official M2 architecture validation date. Its timeline also shows 10 November for MS3 usability/accessibility, 24 November for a checkpoint and 15 December for an MVP demonstration. The slide attributes these dates to the PEI 2026/27 calendar and notes that the presentation date precedes the official M2 deadline. The separate elaboration guide cover says 2025–2026; confirm this academic-year discrepancy with the team.
