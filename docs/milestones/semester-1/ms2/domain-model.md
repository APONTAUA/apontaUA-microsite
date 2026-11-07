---
title: Domain Model
description: Detailed entities and relationships in the MS2 domain diagram.
sidebar_position: 10
---

import Diagram from '@site/src/components/ms2/Diagram';

## Diagram and scope

The image below is the detailed domain model supplied for MS2. It is reproduced without changing its entities, attributes or cardinalities. The diagram is an analysis artefact; the model may require refinement before implementation.

<Diagram
  src="/ms2/domain-model.png"
  alt="MS2 domain model with Course, Course Unit, Topic, Note, Tag, Version, User, Comment, Rating, Report, Material Relation, Notification and Badge entities"
  caption="Domain Model supplied for MS2. Open the image at full size to inspect its attributes and multiplicities."
/>

## Academic hierarchy

The diagram links **Course → Course Unit → Topic → Note**. Course units include code, year, semester and academic-year attributes; topics and notes provide the next levels of organization. A note carries title, description, material type, status, academic year, timestamps and validation-related fields.

## Materials, versions and relations

A **Note** may be tagged with **Tag** entities and is associated with **Version** records. A version contains a number, Markdown content and/or file URL, format, content hash, change note and creation timestamp. **MaterialRelation** records a relation type, similarity score, description and creation time, with source and destination relationships shown in the diagram.

## People, feedback and governance

**User** includes identity, email, role, reputation, registration date and status fields. The diagram connects users to authored or validated notes and to **Comment**, **Rating** and **Report** activity. It also includes **Notification** records received by users and **Badge** records earned by users. Reports include reason, description, status, result and resolution timestamps.

The image is the authoritative source for exact attributes and cardinalities. The MS2 presentation also contains a simplified conceptual model with different labels such as `Material`, `MaterialVersion` and `Review`; that version is not substituted here. The difference is recorded for team validation on the [MS2 overview](./index.mdx).
