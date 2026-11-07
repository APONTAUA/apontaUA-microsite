---
title: Risks
description: Risks and mitigations presented as exploratory MS2 proposals.
sidebar_position: 13
---

## Risk register from the MS2 presentation

The following risks and mitigations are from the presentation. They are exploratory proposals to validate with the University of Aveiro; they are not evidence that controls have been implemented.

| Risk | Impact in presentation | Proposed mitigation |
| --- | --- | --- |
| Incorrect or outdated material | High | Record author and update date; have the responsible course-unit lecturer assess scientific correctness and course alignment. |
| Duplicate or near-duplicate noise | Medium–high | Use exact hashes and similarity warnings; do not automatically delete; keep accessible adaptations as linked variants. |
| OCR or extraction errors | Medium–high | Preserve originals, surface uncertain extracted text, allow correction and retry. |
| File or database loss | High | Use persistent volumes, define backups and test restore before a pilot. |
| Copyright or unclear licence | High | Confirm upload rights, record author/source/DOI/licence where available, and provide a report/removal path. |
| Scope or operational complexity | High | Start with a modular monolith; defer Elasticsearch and optional processing infrastructure until justified. |

## Cost assumptions

The presentation assumes no paid platform for the MVP. Hosting, storage and backups, a domain and operational time still need estimates once deployment options are agreed.
