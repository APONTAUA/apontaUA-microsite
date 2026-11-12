# ApontaUA — Business Rules

**Version:** 1.1  
**Project:** ApontaUA — Academic Document Management Platform  
**Scope:** MVP and planned second-semester evolution

---

## 1. Authentication, Registration and Identity

### RN-001 — Institutional Account Eligibility
During the MVP, account eligibility must be based on successful authentication through the University of Aveiro IdP. The email suffix is not an independent proof of affiliation. Any separate contact-email domain policy must not override the institutional authentication result and remains subject to the configured service.

### RN-002 — Email Address Verification
When the platform collects a separate contact email, verification confirms control of that address only. It does not replace the institutional authentication performed through the University of Aveiro IdP.

### RN-003 — Protected Access Requires Institutional Authentication
Users may access protected platform features only after successful institutional authentication. Contact-email verification, if required, is an additional check and is not institutional verification.

### RN-004 — Accepted Institutional Identifiers
The system may associate institutional identifiers made available by the authorized IdP integration with an account, subject to the attributes STIC makes available. User-declared identifiers remain explicitly unverified. These may include:
- Student number (NMEC), for students;
- Institutional identifier for teaching or non-teaching staff, where available;
- Institutional email address, where applicable.

### RN-005 — Verification of DETI Teaching and Non-Teaching Staff
During the MVP, verified affiliation and user category must rely on the authorized University of Aveiro IdP information made available through WSO2. The public department directory is not an authentication mechanism or substitute for IdP verification.

### RN-006 — Student Verification
A student-provided NMEC may be stored as user-declared information, but it must not independently create an account or be treated as verified affiliation. Account eligibility follows successful institutional authentication through the University of Aveiro IdP.

### RN-007 — Institutional Verification Status
The system must distinguish institutional affiliation confirmed by attributes returned through the authorized IdP integration from information that is user-declared or unavailable. Missing attributes must not be treated as verified.

### RN-008 — Email Verification Does Not Equal Institutional Verification
Email address verification only demonstrates control over that address and must not be considered sufficient proof of affiliation with the University of Aveiro.

### RN-009 — Storage of the Student Number
The NMEC provided by a student must be associated with the respective account and remain classified as declared, unverified information until an institutional verification mechanism becomes available.

### RN-010 — Assignment of User Category
The user category must be assigned according to the available information and the applicable verification process. Providing an NMEC alone does not grant the status of an institutionally verified student.

### RN-011 — Updating Institutional Information
Institutional affiliation and category used for authorization must come from the configured, institutionally authorized source. If STIC authorizes a maintained reference list as a fallback, its source and update date must be recorded; the team must not assume this fallback.

### RN-012 — Authentication Service
The target architecture is WSO2 integrated with the University of Aveiro IdP. The team must request the required access token from STIC through the supervisor, as recorded in Minute 05. OIDC is the intended protocol in the MS3 risk analysis; endpoints, attributes and session rules follow STIC configuration. The integration is not yet evidenced as implemented.

### RN-013 — Separation Between Authentication and Authorization
Authentication must be independent of permission management. Identifying a user must not automatically determine all their permissions within the platform.

### RN-014 — Permanent Internal Identifier
Each user must have a unique and permanent internal identifier within ApontaUA, independent of identifiers supplied by any external identity provider.

### RN-015 — Association of External Identities
The system must allow one or more external identities to be associated with the same internal account, preventing the creation of duplicate accounts.

### RN-016 — Password Recovery
During the MVP, password recovery and reset must be managed through the mechanism made available by the configured identity provider; the concrete flow is not specified and requires institutional confirmation.

### RN-017 — Institutional Authentication Integration
The WSO2 / UA IdP integration must associate the external institutional identity with the existing ApontaUA account while preserving the user's data and history.

### RN-018 — Preservation of Internal Identity
A change or reconfiguration of the authentication provider must not change the user's internal identifier or break existing associations with materials, comments, ratings, suggestions or reputation.

### RN-019 — Email Is Not a Permanent Identifier
The email address must not be used as a permanent identifier for relationships between users and other platform entities.

---

## 2. User Roles and Permissions

### RN-020 — User Roles
The system must support different roles and authorization levels according to each user's responsibilities.

### RN-021 — Principle of Least Privilege
Each user may only perform operations authorized for their role and scope of responsibility.

### RN-022 — Absence of a Curator Role
The platform must not include a curator role responsible for the mandatory prior approval of all published materials.

### RN-023 — Publication Without Mandatory Prior Approval
Users authorized to publish materials may make them available without requiring prior approval from a lecturer or course representative.

### RN-024 — Course Representative
A user may be appointed as a course representative, receiving additional permissions limited to the course assigned to them.

### RN-025 — Course Representative's Scope of Activity
The representative may manage the organization of course units and materials originating from eLearning within the scope of their assigned course.

### RN-026 — Course Representative's Limitations
The representative may not directly edit materials published by other community users or assume general control over the platform's content.

### RN-027 — Appointment of the Course Representative
The appointment and removal of course representatives must be performed by a user with administrative permissions.

### RN-028 — Management of Administrative Permissions
Only authorized users may assign, modify or revoke roles and permissions.

### RN-029 — Moderation Permissions
Moderators may review reports and perform the moderation actions for which they are authorized.

### RN-030 — Separation Between Moderation and Administration
Report handling must be separated from administrative management of accounts and permissions, unless a user has explicitly been granted both sets of permissions.

---

## 3. Academic Structure

### RN-031 — Hierarchical Organization
The platform's academic structure must follow the hierarchy:

**Degree Programme → Course Unit → Topic → Study Note.**

### RN-032 — Association of Study Notes
Each study note must be associated with a topic and, consequently, with a course unit.

### RN-033 — Course Unit Identification
Each course unit must have identifying information, including, where applicable, its name, code, degree programme, academic year and semester.

### RN-034 — Topic Organization
Topics must allow study notes related to a particular subject or component of a course unit to be grouped together.

### RN-035 — Management of the Academic Structure
The creation, updating and organization of the academic structure must be performed by users with appropriate permissions.

### RN-036 — Consistency of Associations
A study note cannot be associated with a non-existent topic or with a course unit that does not correspond to its academic structure.

---

## 4. Materials Originating from eLearning

### RN-037 — Identification of Origin
All materials imported from eLearning must retain an explicit identification of their origin.

### RN-038 — Manual Import
During the MVP, materials originating from eLearning must be imported manually by the course representative or another explicitly authorized user.

### RN-039 — eLearning Materials Area
Materials originating from eLearning must be identified and organized in a dedicated area of the platform while remaining integrated into the same browsing and search environment.

### RN-040 — Operational Presumption of Good Faith
During the MVP, course representatives are assumed to act in good faith when managing eLearning materials. This presumption does not prevent content from being reported or subsequently reviewed.

### RN-041 — Metadata Extraction
During import, the system must attempt to automatically identify relevant metadata, such as:
- Lecturer's name;
- Course unit;
- Academic year;
- Semester;
- Academic year of publication;
- Other identifying information available in the document.

### RN-042 — Metadata Review
Automatically extracted metadata must be presented to the representative for review, correction and confirmation before being considered definitive.

### RN-043 — Preservation of Origin
The eLearning origin of a material must remain recorded throughout its updates and organizational operations.

### RN-044 — Updating Imported Materials
Updating a material originating from eLearning must preserve its history and origin identification.

---

## 5. Material Publication and Management

### RN-045 — Material Publication
Users with publishing permissions may submit materials for available course units and topics.

### RN-046 — Supported File Formats
The system must support the following formats during the MVP:
- PDF;
- Markdown (MD);
- Word (DOC and DOCX);
- Excel (XLS and XLSX);
- PowerPoint (PPT and PPTX);
- JPEG;
- PNG.

### RN-047 — Mandatory Association with the Academic Structure
Each published material must be associated with an existing course unit and topic.

### RN-048 — Author Identification
Each material must be associated with the internal identifier of the user responsible for publishing it.

### RN-049 — Publication Date Recording
The system must automatically record the publication date and time of each material.

### RN-050 — Immutability of Other Users' Publications
A user may not directly modify the content of a material published by another user.

### RN-051 — Author Editing
The author may edit their own materials, subject to versioning and history rules.

### RN-052 — Material Removal
The author may request or perform the removal of their materials, in accordance with the defined permissions.

### RN-053 — Preservation of Removal History
Removing a material must not delete its historical record, including the author's identification and the date of the operation.

### RN-054 — Identification of Material Origin
The system must distinguish between materials published by the community and materials originating from eLearning.

### RN-055 — Preservation of the Original File
The original submitted file must be preserved, even when derived content is produced through OCR or other processing mechanisms.

---

## 6. OCR and Content Extraction

### Scope boundary — second-semester evolution (RN-056 to RN-063 and RN-065 to RN-080)

The MS3 technical-risk analysis classifies OCR, text extraction and advanced similarity analysis as second-semester evolution. These rules remain future requirements and are not MVP acceptance criteria. RN-064 exact-file hash duplicate detection remains in the MVP. OCR, text extraction and advanced similarity rules are future scope; similarity must never be described as proof of plagiarism.

### RN-056 — Text Recognition
The system must allow text to be extracted from images and scanned documents through OCR mechanisms.

### RN-057 — OCR Application
OCR must be applied when a document does not provide directly extractable text or when text present in images needs to be recognized.

### RN-058 — Preservation of the Original Document
OCR output must not replace or modify the original file.

### RN-059 — Storage of Extracted Text
Recognized text must be stored separately from the original file, allowing it to be used for search and similarity analysis.

### RN-060 — Manual OCR Correction
The system must allow users to manually correct errors or omissions identified in the extracted text.

### RN-061 — Identification of OCR Limitations
The system must flag situations in which document quality or recognition accuracy may compromise the reliability of the extracted text.

### RN-062 — Use of OCR Text
Extracted and corrected text may be used in search, indexing and similarity detection mechanisms.

---

## 7. Duplicate, Similarity and Potential Plagiarism Detection

### RN-063 — Distinction Between Similarity and Plagiarism
The system must distinguish between the detection of similar content and the identification of potential plagiarism or misappropriation.

### RN-064 — Detection of Exactly Identical Files
The system must use file identification mechanisms, such as SHA-256, to detect exactly identical submissions.

### RN-065 — Detection of Similar Content
The system must analyze the textual content of documents to identify materials with a high degree of similarity, even when the files are not exactly identical.

### RN-066 — Identification of Candidate Documents
The detection mechanism must use techniques such as MinHash and Locality-Sensitive Hashing (LSH) to identify candidate documents for more detailed analysis.

### RN-067 — Similarity Calculation
Textual similarity between documents must be estimable through metrics such as Jaccard similarity.

### RN-068 — Comparison Independent of Page Order
The analysis must attempt to identify similar content even when document pages have been rearranged.

### RN-069 — Detection of Superficial Changes
The system must attempt to identify cases in which a document retains substantially similar content to another document despite superficial changes, such as:
- Changing the file name;
- Changing the cover page;
- Modifying minor textual elements;
- Rearranging pages;
- Changing the document layout.

### RN-070 — Page-Level Comparison
Where applicable, the system must allow individual pages to be compared in order to identify identical or substantially similar pages, regardless of their position in the document.

### RN-071 — Initial Similarity Threshold
The initial threshold for triggering a similarity warning must be 80% and may be adjusted after testing with real documents.

### RN-072 — Similarity Warning
When the estimated similarity reaches or exceeds the defined threshold, the system must display a warning to the user before the submission is completed.

### RN-073 — Display of Similar Documents
The warning must display the documents identified as similar, allowing the user to consult the relevant elements for comparison, subject to access permissions.

### RN-074 — Similarity Does Not Imply Plagiarism
High similarity must not be presented as automatic proof of plagiarism.

### RN-075 — No Automatic Blocking Based on Similarity
Similarity detection must not automatically block the publication of a material.

### RN-076 — Flagging of Potential Plagiarism
When evidence of substantial copying or misappropriation of another user's content is identified, the system must allow the case to be flagged for review.

### RN-077 — Human Review of Potential Violations
A potential plagiarism case must undergo human review before any penalty or disciplinary measure is applied within the platform.

### RN-078 — Recording of Evidence
The system must preserve relevant information for review, including the documents compared, similarity percentages, matching elements and submission dates.

### RN-079 — Temporal Priority Within the Platform
The date and time of a material's first submission must be recorded to identify the earliest registration of that content within ApontaUA.

### RN-080 — Limits of Proof of Authorship
The first submission recorded on the platform demonstrates temporal priority within ApontaUA but does not constitute absolute proof of original authorship.

---

## 8. Suggestions, Collaboration and Versioning

### RN-081 — Suggestions on Materials
Users may submit suggestions for improving materials published by other users.

### RN-082 — Separation Between Suggestions and Original Content
A suggestion must not automatically modify the content of the material to which it relates.

### RN-083 — Author's Decision
The author of the material must have the final decision on whether to accept or reject received suggestions.

### RN-084 — Acceptance of Suggestions
An accepted suggestion may only be incorporated into the material after being applied by the author or through a mechanism explicitly authorized by them.

### RN-085 — Rejection of Suggestions
A rejected suggestion must not modify the original material.

### RN-086 — Suggestion History
The system must maintain a record of submitted suggestions and their respective decisions.

### RN-087 — Version History
Each change to a material's content must create a new version, preserving all previous versions.

### RN-088 — Version Identification
Each version must identify, at a minimum, the user responsible for the change and the corresponding date and time.

### RN-089 — Restoration of Previous Versions
The author must be able to restore a previous version of their material, provided they have the required permissions.

### RN-090 — Restoration Without Deleting History
Restoring a previous version must create a new version containing the restored content, without deleting or overwriting existing versions.

### RN-091 — Comments
Users may comment on materials, subject to the platform's access and moderation rules.

### RN-092 — Preservation of Contribution Authorship
Each comment and suggestion must be associated with the user who submitted it and the corresponding date and time.

---

## 9. Material Ratings

### RN-093 — Star Rating System
Users may rate materials using a star-based rating system.

### RN-094 — Prohibition of Self-Rating
A user may not rate a material they authored.

### RN-095 — One Active Rating per User
Each user may maintain only one active rating per material.

### RN-096 — Rating Updates
Users may change their previous rating, with only the most recent active rating being considered.

### RN-097 — Separation Between Rating and Reputation
The rating assigned to a material must be distinguished from the overall reputation of its author.

---

## 10. Reputation System

### RN-098 — Purpose of Reputation
The reputation system must reflect users' participation and contributions to the platform and must not constitute scientific or academic validation of published content.

### RN-099 — Reputation Scale
Each user's reputation must be represented on a scale from 0 to 100 points.

### RN-100 — Reputation Criteria
Reputation must consider five criteria:
- Quality: 30%;
- Usefulness: 20%;
- Collaboration: 15%;
- Continuous Improvement: 20%;
- Reliability: 15%.

### RN-101 — Reputation Formula
Overall reputation must be calculated using the following formula:

**R = 0.30Q + 0.20U + 0.15C + 0.20M + 0.15F**

Where:
- R represents overall reputation;
- Q represents quality;
- U represents usefulness;
- C represents collaboration;
- M represents continuous improvement;
- F represents reliability.

### RN-102 — Quality
The quality component must consider the ratings received by the user's materials, taking into account both the average rating and the number of ratings.

### RN-103 — Usefulness
The usefulness component must consider valid views and downloads of materials, avoiding repeated or artificial counting of the same actions.

### RN-104 — Collaboration
The collaboration component must consider constructive contributions, including comments and suggestions considered useful.

### RN-105 — Continuous Improvement
The continuous improvement component must consider accepted suggestions and improvements effectively incorporated into materials.

### RN-106 — Reliability
The reliability component must consider confirmed violations and their corresponding penalties. A mere report must not negatively affect a user's reputation.

### RN-107 — Protection Against Manipulation
The system must implement mechanisms to reduce attempts to manipulate reputation, including self-ratings, repeated actions and artificial interactions.

### RN-108 — Reputation Updates
Reputation must be updated whenever relevant changes occur in the indicators that compose it.

### RN-109 — Reputation Consultation
Users must be able to consult their overall reputation and the indicators contributing to the result.

### RN-110 — Contribution Indicators
The user's profile may display indicators such as:
- Number of published materials;
- Average rating received;
- Number of accepted suggestions;
- Number of comments considered useful;
- Number of valid downloads.

---

## 11. Notifications

### RN-111 — Notification Channels
The system must provide internal platform notifications and email notifications.

### RN-112 — Notifiable Events
The system must notify users about relevant events, including:
- New comments on their materials;
- New ratings;
- New suggestions;
- Decisions regarding submitted suggestions;
- Relevant updates related to their contributions.

### RN-113 — Recipients
Each notification must be sent to the users directly involved in the event that triggered it.

### RN-114 — Notification Status
Internal notifications must allow users to distinguish between read and unread notifications.

### RN-115 — Prevention of Duplicate Notifications
The system must prevent the repeated sending of the same notification for the same event.

---

## 12. Moderation and Reports

### RN-116 — Content Reporting
Any authenticated user may report materials or comments they consider inappropriate or in violation of the platform's rules.

### RN-117 — Report Justification
A report must identify the content in question and allow the user to provide a justification.

### RN-118 — Report Review
Reports must be reviewed by users with moderation permissions.

### RN-119 — No Automatic Penalties
Submitting a report must not automatically result in a penalty for the author of the reported content.

### RN-120 — Decisions on Reports
After review, the moderator must be able to dismiss the report as unfounded or apply an appropriate measure according to the circumstances and their available permissions.

### RN-121 — Moderation Measures
Depending on the severity of the case and the permissions assigned, the following measures may be applied:
- User warning;
- Content hiding;
- Content removal;
- Escalation of cases to the administration.

### RN-122 — Account Restrictions
Account restrictions or suspensions may only be performed by users with appropriate administrative permissions.

### RN-123 — Recording of Moderation Actions
All moderation actions must be recorded, including the person responsible, date, affected content and justification for the decision.

### RN-124 — Preservation of Evidence
Moderation must not delete records required for auditing and subsequent case analysis.

### RN-125 — Moderation Does Not Equal Academic Validation
Report review is intended to verify compliance with the platform's rules and must not be confused with a scientific or academic assessment of the material.

---

## 13. Administration and Auditing

### RN-126 — User Management
Authorized administrators may view and manage user accounts, in accordance with the defined permission levels.

### RN-127 — Management of the Academic Structure
Users with administrative permissions may manage degree programmes, course units and their respective associations.

### RN-128 — Role Management
The assignment, modification and removal of roles must be restricted to authorized users.

### RN-129 — Recording of Relevant Operations
The system must maintain records of operations relevant to the platform's security, administration and auditing.

### RN-130 — Identification of the Responsible User
Each administrative or moderation operation must allow the user responsible for its execution to be identified.

### RN-131 — Preservation of History
Relevant historical records must not be deleted through normal content management operations.

### RN-132 — Traceability
The system must allow the history of relevant changes and decisions concerning materials, users and the academic structure to be reconstructed.

---

## 14. Platform Access

### RN-133 — Public Landing Page
The platform must provide a public landing page presenting ApontaUA, including information about its purpose and main features.

### RN-134 — Access to Internal Features
Access to materials and use of internal features must require authentication.

### RN-135 — Unauthenticated Access
Unauthenticated users may access the public landing page but may not access materials or perform internal operations.

---

## 15. General Principles

### RN-136 — Protection of Authorship
Operations performed on materials must preserve the identification of their respective authors and the history of their contributions.

### RN-137 — Transparency of Operations
Relevant actions involving content must be traceable and associated with the users responsible for them.

### RN-138 — Separation Between Reputation and Authority
A high reputation score must not automatically grant administrative, moderation or institutional verification permissions.

### RN-139 — Separation Between Publication and Validation
The ability to publish a material does not mean that its content has been scientifically or institutionally validated.

### RN-140 — Integrity of History
Editing, restoration, removal and moderation operations must preserve the records required to understand the evolution of content on the platform.