---
title: Product Concept
description: Product vision, target users, operating model and initial scope of ApontaUA.
sidebar:
  order: 1
---

# ApontaUA — Product Concept

**Project:** ApontaUA  
**Institution:** University of Aveiro  
**Department:** Department of Electronics, Telecommunications and Informatics (DETI)  
**Academic Year:** 2026/2027  
**Document Purpose:** Define the product concept, problem, vision, target users, operating model and initial scope of ApontaUA.

---

# 1. Product Concept

## 1.1. Context and Background

ApontaUA is a web platform intended to centralize, organize and facilitate access to academic study materials associated with curricular units at the Department of Electronics, Telecommunications and Informatics (DETI), University of Aveiro.

Students frequently rely on materials from previous academic years, including lecture slides, practical-class resources, exercises, examinations, solutions, summaries and personal notes. These materials may be available through the university's eLearning platform, shared drives, messaging applications, student communities and other websites.

Existing platforms already address parts of this problem. Learning management systems provide course-specific resources, while student-oriented websites and online communities facilitate the sharing of notes and other educational materials. The analysis presented during Milestone 2 considered existing solutions, including Resumos de Informática, NEI, Studocu, Moodle and OpenStax.

ApontaUA does not aim to introduce an entirely new concept. Instead, it seeks to provide a solution adapted to the academic context of DETI, bringing together structured access to existing teaching resources and collaborative contributions from students and teachers.

The platform is intended to make academic materials easier to discover, understand in context, reuse and improve over time.

## 1.2. Problem Overview

Academic materials are distributed across different platforms and communication channels, often organized according to different structures and conventions.

The availability of a document does not necessarily mean that students can find it easily, determine which curricular unit or academic year it belongs to, or assess its relevance to their needs.

Several problems arise from this situation:

- **Fragmented access:** students must search through multiple platforms, course pages, shared folders and informal communication channels.
- **Inconsistent organization:** materials may be grouped differently across curricular units and academic years, making it difficult to navigate between related resources.
- **Limited context:** the source, author, academic year and type of material may not always be immediately apparent.
- **Repeated effort:** students may recreate summaries, exercise collections and other study resources without knowing that similar materials already exist.
- **Uneven visibility of quality:** users may struggle to determine whether a material is useful, outdated, incomplete or potentially incorrect.
- **Limited collaboration:** students may share materials without having a structured way to discuss them, suggest improvements or receive feedback.

The central problem is therefore not simply the absence of academic materials. It is the difficulty of finding, organizing, contextualizing and collaboratively improving materials that already exist or are produced by the academic community.

## 1.3. Product Vision

> To provide the DETI academic community with a centralized and collaborative platform where students and teachers can easily discover, consult, share and improve academic materials, supported by a clear academic structure, transparent information about each material and meaningful community participation.

ApontaUA aims to complement existing academic systems rather than replace them.

The eLearning platform remains an important source of teaching materials. ApontaUA provides an additional environment in which relevant resources can be organized and discovered across academic years, while students and teachers can contribute their own materials and participate in their improvement.

The platform should encourage collaboration without making participation dependent on mandatory approval by teachers or placing excessive control in the hands of a small group of users.

## 1.4. Product Objectives

The initial product objectives are:

**O1 — Centralize academic materials**

Provide a single point of access to relevant academic materials from different academic years and sources.

**O2 — Improve academic organization and discovery**

Organize materials by course, curricular year, semester, curricular unit, academic year and material type, enabling users to navigate the academic structure and find relevant resources.

**O3 — Support community contributions**

Allow authenticated students and teachers to publish materials, comment on existing publications, rate their usefulness and suggest improvements.

**O4 — Improve material context and traceability**

Make relevant information available about each material, including its author, origin, associated curricular unit, academic year and publication or update date, where applicable.

**O5 — Encourage continuous improvement**

Provide mechanisms for feedback, revision requests, suggested changes, version history and notifications that help authors improve their contributions.

**O6 — Promote balanced and transparent governance**

Distribute responsibilities according to user roles and permissions, while supporting moderation, reporting and traceability of relevant administrative actions.

**O7 — Reduce unnecessary duplication**

Identify identical files and potentially similar text contributions, warning users when similar materials already exist without automatically rejecting complementary content.

---

# 2. Target Users and Actors

ApontaUA is intended primarily for the academic community of DETI, particularly students who need to find and share materials associated with their curricular units.

The platform also supports teachers and designated student representatives who contribute to the organization of academic resources.

## 2.1. Students

Students are the primary users of the platform.

They should be able to:

- Navigate the academic structure relevant to their course.
- Search for, preview and download available materials.
- Publish summaries, notes, exercises and other permitted academic resources.
- Comment on materials published by other users.
- Rate materials and provide feedback.
- Request revisions and suggest specific improvements.
- Upload supporting files when proposing changes, where supported.
- Manage their own publications and consult their contribution history.
- Receive notifications about activity related to their materials.

Students may also hold additional responsibilities related to the organization of materials originating from eLearning, depending on the permissions assigned to them.

## 2.2. Teachers

Teachers can use the platform to consult academic materials and participate in the community.

Depending on the final requirements, they may:

- Publish academic resources and supplementary materials.
- Share teaching materials associated with curricular units.
- Comment on and evaluate community contributions.
- Receive notifications about comments, ratings, revision requests and suggested changes.
- Maintain a profile containing relevant academic information and their contributions.

The system should not require teachers to review and approve every material before it becomes available to the community.

## 2.3. Designated Student Representatives

Students associated with the nuclei of the relevant courses may help maintain the organization of teaching materials originating from eLearning.

Their responsibilities may include:

- Adding available teaching resources to the platform.
- Organizing materials by curricular unit, semester, academic year and material type.
- Correcting incorrect classifications and metadata.
- Updating the organization when new academic resources become available.
- Removing materials when justified and permitted by the applicable rules.

These responsibilities are limited to the relevant organizational tasks.

Being a designated representative should not grant unrestricted authority over community publications, user profiles, ratings or comments.

Important actions should be traceable, and the platform should define appropriate safeguards for material removal and structural changes. The precise permissions and review procedures remain subject to formalization.

## 2.4. Administrators

Administrators are responsible for the operational governance of the platform.

Their responsibilities may include:

- Managing user accounts and assigned roles.
- Maintaining the academic structure.
- Reviewing reported materials and comments.
- Applying moderation decisions according to established rules.
- Handling requests concerning inappropriate content or copyright.
- Consulting audit records and managing platform-level settings.

Administrative permissions should be separated from ordinary user permissions. Relevant actions should be recorded to support accountability.

## 2.5. Authentication and User Profiles

The proposed registration process uses a University of Aveiro email address.

The initial profile concept includes:

- Name.
- Student or teacher role.
- Student number, where applicable.
- Course.
- Academic year or enrolment information, as applicable.
- Profile photograph, optional.
- Relevant academic information.

For teachers, the proposal also includes a teacher email address and the number of years of teaching experience.

The final registration requirements must distinguish mandatory from optional information and establish how the information will be verified and protected.

Only information necessary for the platform's purposes should be collected, and the visibility of profile information must be defined explicitly.

---

# 3. Product Organization and Academic Structure

ApontaUA is conceived as a single platform rather than two independent systems.

Materials may originate from different sources and be subject to different management rules, but users should access them through a consistent academic structure.

## 3.1. Academic Navigation

The proposed navigation hierarchy is:

**Course → Curricular Year → Semester → Curricular Unit → Material Category → Material**

The home page should present the curricular units relevant to the authenticated user's course.

Within each curricular unit, materials should be grouped into appropriate categories.

Examples include:

- Lecture slides.
- Theoretical-class resources.
- Practical-class resources.
- Exercises and worksheets.
- Teacher-provided solutions.
- Student-provided solutions.
- Summaries and notes.
- Previous examinations and tests.
- Other relevant academic resources.

The final category structure should be defined consistently and remain adaptable to the different needs of curricular units.

## 3.2. Materials Originating from eLearning

Teaching materials previously made available through eLearning may be incorporated into ApontaUA to improve their organization and accessibility across academic years.

These resources may include lecture slides, theoretical and practical teaching materials, exercises and other resources made available by teachers.

Designated student representatives may maintain their organization and update their classification when necessary.

The platform should preserve relevant information about each resource, such as:

- Source.
- Teacher or original author, when known.
- Associated curricular unit.
- Academic year.
- Material type.
- Publication or upload date.
- Last update date, where applicable.

The fact that a resource originated from a teacher or eLearning does not automatically establish that it is current, scientifically correct for the present academic year or authorized for unrestricted redistribution.

The platform must therefore distinguish provenance from validation and account for applicable copyright and usage restrictions.

## 3.3. Community Contributions

Students and teachers should be able to contribute materials within the relevant curricular units.

Community contributions may include summaries, personal notes, exercise solutions, explanations and other permitted educational resources.

Users should be able to interact with these materials through comments, ratings, revision requests and suggestions for improvement.

A user may propose a change to another person's material, but should not directly modify that person's publication without the author's authorization.

Where suggestions are accepted, the platform should support an appropriate update process and preserve previous versions when version history is available.

The purpose is to support collaborative improvement while respecting authorship and maintaining a traceable record of changes.

---

# 4. Core Product Capabilities

The following capabilities describe the initial functional direction of ApontaUA. They are a product-level overview, not yet the complete specification of functional requirements.

## 4.1. Search and Discovery

Users should be able to:

- Navigate by course, curricular year, semester, curricular unit and academic year.
- Search for materials using keywords.
- Filter results by curricular unit, material type, academic year and origin.
- Preview and download original files, subject to applicable permissions.
- Discover related materials where relevant information is available.

## 4.2. Publication and Contribution

Authenticated users should be able to publish permitted materials.

The system should associate each publication with its author and relevant academic metadata.

Publication should include appropriate validation of required fields and file formats.

Identical files should be detected using file hashes. Similar text contributions may be identified using MinHash with Locality-Sensitive Hashing (LSH).

Similarity detection should warn users about potentially duplicated content without automatically preventing the publication of complementary materials.

## 4.3. Comments, Ratings and Revision

Users should be able to participate in the improvement of community materials.

The proposed capabilities include:

- Commenting on publications.
- Rating materials using stars.
- Requesting that a material be reviewed or updated.
- Suggesting specific changes.
- Attaching supporting files to suggestions, where supported.
- Accepting or rejecting suggestions through an appropriate workflow.
- Maintaining a history of material versions where applicable.

The system should distinguish between ratings of a material and the reputation of its author.

A positive rating reflects a user's assessment of a contribution; it is not a guarantee of scientific correctness.

## 4.4. Notifications

Users should receive relevant notifications about activity involving their contributions.

The proposed notification events include:

- New comments on their materials.
- New ratings.
- Revision requests.
- Suggested changes.
- Relevant updates to suggestions they submitted.

The final notification rules should specify which events generate notifications, how users can manage them and how excessive or repetitive notifications will be avoided.

## 4.5. User Profiles and Reputation

Each user should have a profile presenting relevant academic information and community contributions.

The profile may include:

- Name and optional photograph.
- Student or teacher status.
- Course and relevant academic information.
- Graduation year, where applicable.
- Published materials.
- Contribution history.
- Ratings received.
- Relevant community activity.
- A reputation indicator or contribution level.

The reputation system should help users understand how the community evaluates a person's contributions.

It should not be interpreted as an official academic qualification or proof that all materials published by a user are correct.

The reputation model, calculation rules and safeguards against rating manipulation require further specification.

## 4.6. Moderation and Administration

The platform should allow users to report inappropriate materials and comments, including potential copyright violations.

Authorized administrators should be able to review reports and take appropriate actions, such as retaining, temporarily hiding or removing content according to established rules.

The system should record relevant moderation actions and support appropriate handling of requests concerning authorship, provenance and content removal.

The exact procedures, permissions and appeal mechanisms must be defined before implementation.

---

# 5. Product Principles

The following principles should guide product decisions and implementation.

## 5.1. One Platform, Consistent Experience

Teaching resources and community contributions should be accessible through the same platform and academic navigation structure.

Different sources and permissions should not require users to learn two unrelated systems.

## 5.2. Collaboration Without Mandatory Central Approval

The platform should encourage participation by students and teachers without requiring a teacher to approve every community publication.

Quality and usefulness should be supported through contextual information, feedback, ratings, revision suggestions and appropriate moderation.

## 5.3. Distributed Responsibilities

No ordinary user or designated student representative should have unrestricted control over the platform.

Permissions should reflect responsibilities, and important administrative actions should be traceable.

## 5.4. Transparency of Provenance

The platform should display relevant information about the origin, authorship and academic context of materials whenever that information is available.

Provenance should not be confused with scientific validation or permission to redistribute a document.

## 5.5. Respect for Authorship

Community contributions should preserve attribution to their authors.

Suggestions for changes should not permit the direct modification of another user's publication without the appropriate authorization.

## 5.6. Continuous Improvement

Materials should be capable of improvement through constructive feedback and revision.

Where version history is supported, previous versions should remain traceable according to the applicable retention rules.

## 5.7. Responsible Reputation

Ratings and reputation indicators should help users assess community contributions without presenting popularity as definitive proof of academic correctness.

---

# 6. Initial Product Scope

The product concept identifies the following areas as candidates for the initial release:

- User registration and authentication using a University of Aveiro email address.
- User profiles with relevant academic information.
- Academic navigation by course, curricular year, semester and curricular unit.
- Organization and consultation of materials from previous academic years.
- Publication of community materials.
- Search, filters, preview and file download.
- Comments, ratings and revision suggestions.
- Notifications related to user contributions.
- Detection of identical files and potentially similar text.
- Reporting and moderation of inappropriate content.
- Basic contribution history and user reputation.

This list establishes the product direction. It does not mean that every capability has already been approved for the Minimum Viable Product (MVP).

The MVP scope must be confirmed through prioritization, implementation estimates, technical feasibility and the project's milestone schedule.

Features that are too costly or insufficiently specified may be deferred to later iterations.

---

# 7. Assumptions and Open Decisions

The following matters require further specification before they can be treated as definitive requirements.

## 7.1. Academic Information and Registration

- Which profile fields are mandatory?
- How will student or teacher status be verified?
- How should the platform handle former students?
- Which profile fields will be publicly visible?
- What information is necessary for the platform's purposes?

## 7.2. Academic Structure and Permissions

- Who is authorized to create or modify courses, curricular units and semesters?
- How are designated student representatives appointed?
- Which changes can they make to teaching resources?
- Under what conditions may materials be removed?
- Which actions require an audit record or additional review?

## 7.3. Publication and Revision

- Which file formats are supported in the MVP?
- Which validations must occur before publication?
- Can authors withdraw or replace their own materials?
- How are revision requests handled?
- How are previous versions preserved?
- Which content requires temporary hiding or administrative review?

## 7.4. Reputation and Notifications

- How are material ratings calculated?
- How is user reputation determined?
- How will the system reduce rating manipulation?
- Which events generate notifications?
- Can users configure notification preferences?

## 7.5. Legal and Technical Constraints

- What conditions govern the redistribution of teaching materials originally made available through eLearning?
- How will authorship and provenance be represented?
- What personal data must be collected and retained?
- Which accessibility requirements will be adopted?
- Which technical capabilities are essential for the MVP, and which can be deferred?

These questions should be resolved through the requirements process and documented as explicit decisions.

---

# 8. Product Concept Summary

ApontaUA is a centralized academic materials platform for the DETI community at the University of Aveiro.

It brings together resources originating from previous academic years and materials contributed by students and teachers, organizing them through a consistent academic structure.

The platform combines academic resource discovery with community participation, enabling authenticated users to publish materials, comment, rate contributions, request revisions and suggest improvements.

Its approach emphasizes accessibility of information, transparent provenance, respect for authorship, distributed responsibilities and continuous improvement.

Rather than depending on mandatory teacher approval or unrestricted control by a small group, ApontaUA aims to support a collaborative environment in which materials can be discovered, evaluated and improved through clear rules and appropriate permissions.
