---
title: Requirements Elicitation
description: Sources, sample sizes and limitations for the MS2 requirements work.
sidebar_position: 1
---

import StaticLink from '@site/src/components/StaticLink';
import StatCards from '@site/src/components/ms2/StatCards';

## Sources and method

The MS2 elicitation used two questionnaires: one addressed to students and one to teachers. The statistical report describes analysis of the exported responses and uses descriptive counts and percentages. Several student questions allowed multiple selections, so their percentages are not expected to total 100%.

<StatCards items={[
  { value: '52', label: 'Student responses', note: 'Student questionnaire sample (n=52)' },
  { value: '6', label: 'Teacher responses', note: 'Teacher questionnaire sample (n=6)' },
]} />

These are the sizes and profiles of the responding samples, not estimates representative of all students or teachers at the University of Aveiro. The student sample was concentrated in Informatics-related course variants (47/52) and in year 2 (46/52). The teacher sample is small, so each response has a large effect on its percentages.

## How the evidence was used

The questionnaires informed discussion of where students look for resources, what material types they need, the problems they encounter, and how teachers view validation and collaboration. The resulting requirements are proposals in working drafts; the survey responses do not prove that a feature is needed by every user or that it should be implemented without further validation.

The statistical report notes that no inferential tests or causal conclusions were produced. Open responses were summarized thematically and were not converted into counts unless categories were explicit and comparable.

## Related pages and source

- [Statistical Analysis](./statistical-analysis.md) presents the reported counts and limitations.
- [Functional Requirements](/apontaUA-microsite/docs/milestones/semester-1/ms2/functional-requirements/) and [Non-Functional Requirements](/apontaUA-microsite/docs/milestones/semester-1/ms2/non-functional-requirements/) contain the proposed requirement baselines.

<StaticLink to="/ms2/questionnaire-statistical-analysis.pdf" target="_blank" rel="noopener noreferrer">Open the complete statistical analysis (PDF)</StaticLink>.
