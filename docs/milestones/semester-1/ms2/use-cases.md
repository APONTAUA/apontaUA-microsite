---
title: Use Cases
description: Actors, use-case groups and relationships in the supplied MS2 diagram.
sidebar_position: 5
---

import Diagram from '@site/src/components/ms2/Diagram';

## Purpose and source

The diagram records the use-case model produced during MS2. It shows user goals within the ApontaUA system boundary and includes relationships between user actions and system-level checks. The diagram is presented unchanged.

<Diagram
  src="/ms2/use-case-diagram.png"
  alt="MS2 ApontaUA use-case diagram with Student, Teacher and Administrator actors"
  caption="Use-case diagram supplied for MS2."
/>

## Student

The diagram connects Student to **Search Materials**, **Publish Material**, **Edit Material**, **View Version History** and **Comment on Material**. Publishing includes **Detect Similar Materials** and **Moderate Submitted Content**. Editing includes **Record New Version**.

## Teacher

The diagram connects Teacher to **Publish Official Material** and **Validate Academic Material**. Validation includes **Notify Author** and is extended by **Revoke Validation** and **Define Validation Criteria**.

The requirements further describe unit-scoped validation delegation by a Course Unit Responsible Teacher. That role refinement is in the requirements document and is not drawn as a fourth actor in this image.

## Administrator

The diagram connects Administrator to **Manage Users and Roles**, **Handle Reports**, **Moderate Content**, **Manage Courses and Curricular Units**, **Configure Platform Rules** and **View Audit Logs**.

## System-level interactions and relationships

The `include` relationships show steps the model expects to accompany a use case, such as similarity detection and content moderation during material publication, recording a version when editing, and notifying the author as part of academic validation. The `extend` relationships show optional or conditional actions around validation: revoking validation or defining criteria. These are use-case relationships in the MS2 proposal, not proof that any workflow is implemented.

The diagram depicts **Log in** as a shared system interaction. Its actor links and the responsible-teacher role should be reviewed alongside the functional-requirements draft; see [Actors](./actors.md).
