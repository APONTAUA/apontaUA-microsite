# ApontaUA — Functional Requirements

**Project:** ApontaUA  
**Institution:** University of Aveiro — DETI  
**Version:** 1.3  

---

# 1. Authentication and User Management

### RF-001 — User Registration
The system must allow eligible University of Aveiro users to create an ApontaUA account through the WSO2 integration with the official University of Aveiro IdP. Access-token acquisition is tracked as a team action with STIC; the exact protocol configuration and identity attributes are subject to the institutional integration.

### RF-002 — Institutional Eligibility Verification
The system must determine eligibility through successful institutional authentication with the University of Aveiro IdP; an email suffix alone must not be treated as proof of institutional affiliation. Contact-email domain handling is separate from institutional authentication.

### RF-003 — Institutional Authentication Before Protected Access
The system must use the configured institutional authentication result to grant access to protected features. Any separate verification of a contact email must not replace institutional authentication.

### RF-004 — Institutional Identifier Verification
The system must use institutional identity information made available through the authorized WSO2 / University of Aveiro IdP integration to determine affiliation where the required attribute is provided. A user-declared identifier alone is not verified affiliation.

### RF-005 — Institutional Attributes from the Identity Provider
The system must process the institutional identity attributes made available through the configured IdP integration, when authorized and provided. A separate API lookup, endpoint, attribute or direct service is not assumed; these details require STIC confirmation.

### RF-006 — User Type Identification
The system must record an institutional user category only when it is provided by an authorized institutional verification source. It must not infer a verified category from an email address or a user-declared NMEC.

### RF-007 — User Authentication
The system must allow users authenticated through the configured institutional identity integration to access the platform using their respective credentials.

### RF-008 — Password Recovery
The system must direct account-recovery operations to the mechanism made available by the configured institutional identity provider. The concrete recovery flow is not specified in the project documents and must follow the STIC-provided integration.

### RF-009 — Session Management
The system must manage authenticated users' sessions, including session termination and expiration.

### RF-010 — Role and Permission Management
The system must allow different roles and permissions to be assigned to users, determining which features and operations each user can access.

### RF-011 — Profile Management
The system must allow users to view and update the editable information in their profiles.

### RF-012 — Authentication Identity Association
The system must allow one or more external authentication identities to be associated with an internal ApontaUA account, while maintaining a permanent internal identifier for each user.

---

# 2. Public Page and Platform Access

### RF-013 — Public Presentation of ApontaUA
The system must provide a public landing page presenting the purpose, objectives and main features of ApontaUA.

### RF-014 — Platform Entry
The public page must provide an entry option that redirects users to the authentication process.

### RF-015 — Restriction of Access to Protected Features
The system must prevent unauthenticated users from accessing academic materials and internal platform features.

---

# 3. Academic Structure and Organization

### RF-016 — Academic Structure Management
The system must allow the management of the academic structure used to organize materials, including degree programmes, course units, academic years, semesters and academic years of study.

### RF-017 — Course Unit Association
The system must allow course units to be associated with their respective degree programmes and academic years.

### RF-018 — Organization of Materials by Course Unit
The system must allow materials to be organized according to their respective course units.

### RF-019 — Organization by Categories
The system must allow materials to be classified using categories such as study notes, presentations, exercises, exams, solutions and other types of academic resources.

### RF-020 — Organization by Academic Year
The system must allow each material to be associated with its respective academic year, where applicable.

### RF-021 — Navigation Through the Academic Structure
The system must allow users to navigate through degree programmes, course units, academic years, semesters and academic years of study in order to find materials.

---

# 4. Material Management and Publication

### RF-022 — Community Material Publication
The system must allow authenticated users to publish academic materials associated with a course unit.

### RF-023 — Manual Import of eLearning Materials
The system must allow course representatives to manually import academic materials originating from eLearning into ApontaUA.

### RF-024 — Organization of eLearning Materials
The system must allow course representatives to add, update, organize and remove materials originating from eLearning, as well as maintain the organization of their respective course units.

### RF-025 — Restriction of Course Representative Permissions
The system must restrict course representatives' operations to the management of the academic structure and materials originating from eLearning within the scope of the degree programme or course units assigned to them.

### RF-026 — Metadata Registration
The system must allow information associated with each material to be registered, including title, description, category, course unit, academic year, author and publication date.

### RF-027 — Material Origin Registration
The system must record the origin of each material, distinguishing at least between materials published directly by the community and materials imported from eLearning.

### RF-028 — File Format Support
The system must allow materials to be published and made available in the following formats: PDF, Markdown (MD), Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), JPEG and PNG.

### RF-029 — Material Details Consultation
The system must allow users to view the details of each material, including its metadata, author, origin, course unit and community interactions.

### RF-030 — Material Preview
The system must allow materials in supported formats to be previewed whenever technically possible.

### RF-031 — Material Download
The system must allow users to download files made available on the platform, subject to the applicable access permissions.

### RF-032 — Editing Own Publications
The system must allow users to edit materials published through their own accounts.

### RF-033 — Removal of Own Publications
The system must allow authors to remove their own publications while retaining the corresponding historical record on the platform.

### RF-034 — Association of Related Materials
The system must allow materials related to the currently viewed material to be identified and displayed, considering the course unit, category and other relevance criteria.

---

# 5. Material Search and Discovery

### RF-035 — Keyword Search
For the first-semester MVP, the system must allow users to search material titles, descriptions and metadata. Search over extracted document text is a second-semester evolution and is excluded from MVP acceptance.

### RF-036 — Filtering by Course Unit
The system must allow search results to be filtered by course unit.

### RF-037 — Filtering by Category
The system must allow search results to be filtered by category or material type.

### RF-038 — Filtering by Academic Year
The system must allow search results to be filtered by academic year.

### RF-039 — Filtering by Origin
The system must allow materials to be filtered according to their origin, distinguishing between materials originating from eLearning and materials published by the community.

### RF-040 — Combination of Filters
The system must allow different filtering criteria to be combined within a single search.

### RF-041 — Search Result Sorting
The system must allow search results to be sorted according to criteria such as relevance, publication date and community rating.

---

# 6. Collaboration and Community Participation

### RF-042 — Comments on Materials
The system must allow users to post comments on available materials.

### RF-043 — Viewing Comments
The system must allow users to view the comments associated with each material.

### RF-044 — Material Rating
The system must allow users to rate materials using a star-based rating system.

### RF-045 — Self-Rating Restriction
The system must prevent users from rating their own materials.

### RF-046 — Viewing Ratings
The system must display material ratings based on the ratings submitted by users.

### RF-047 — Review Request
The system must allow users to request a review of a material, indicating the reasons or aspects they consider necessary to improve.

### RF-048 — Suggestion of Changes
The system must allow users to propose changes or improvements to materials published by other users.

### RF-049 — File Attachments to Suggestions
The system must allow supporting files to be attached to change suggestions whenever necessary.

### RF-050 — Suggestion Management by the Author
The system must allow the author of a publication to view, accept or reject change suggestions submitted by other users.

### RF-051 — Final Decision on Suggestions
The system must ensure that the final decision to accept or reject a suggestion concerning a publication belongs exclusively to its respective author.

### RF-052 — Implementation of Accepted Suggestions
The system must allow suggestions accepted by the author to be incorporated into the publication while preserving the author's identification and the history of changes.

### RF-053 — Viewing Version History
The system must allow users to view the version history of a material, identifying the changes made, their respective authors and dates.

### RF-054 — Restoration of Previous Versions
The system must allow the author to restore a previous version of their material.

### RF-055 — Preservation of History During Restoration
The system must ensure that restoring a previous version creates a new version without deleting or overwriting previously recorded versions.

---

# 7. Text Extraction and Detection of Duplicates, Similarities and Potential Plagiarism

### Scope boundary — second-semester evolution (RF-056 to RF-058 and RF-060 to RF-068)

The MS3 technical-risk analysis places OCR, text extraction and advanced similarity analysis in the second semester. These requirements remain in the catalogue as future scope and do not constitute first-semester MVP acceptance criteria. RF-059, exact-file hash comparison, remains an MVP requirement; only extracted-text search, OCR and advanced similarity are deferred.

### RF-056 — Text Extraction from Documents
The system must allow text to be extracted from submitted files in order to enable text search and content analysis.

### RF-057 — Optical Character Recognition (OCR)
The system must allow text to be extracted from scanned documents and images, including photographs and scanned PDF documents, using OCR technology.

### RF-058 — Display of Extracted Text
The system must provide users with a way to view text extracted through OCR, allowing them to verify the recognition results.

### RF-059 — Detection of Exactly Identical Files
The system must check whether a submitted file already exists on the platform by using cryptographic hash comparison mechanisms.

### RF-060 — Detection of Similar Textual Content
The system must identify materials with similar textual content by using approximate comparison techniques, namely MinHash and Locality-Sensitive Hashing (LSH).

### RF-061 — Calculation of Textual Similarity
The system must calculate or estimate the degree of similarity between candidate documents using a textual comparison metric, such as Jaccard similarity.

### RF-062 — Similar Content Warning
When textual similarity reaches or exceeds the initial threshold of 80%, the system must display a warning to the user, allowing them to review the identified materials before completing the publication.

### RF-063 — Similarity Threshold Configuration
The system must allow the similarity threshold used to generate warnings to be configured, maintaining 80% as the initially proposed value.

### RF-064 — Detection of Potential Misappropriation
The system must identify documents that contain substantial matches with previously submitted materials, taking into account superficial changes such as changes to the file name, formatting, cover page or page order.

### RF-065 — Page Comparison
The system must allow individual document pages to be compared in order to identify identical or substantially similar pages, regardless of their position within the documents.

### RF-066 — Content Fingerprinting
The system must use representations or fingerprints of textual content to identify copies containing minor changes to the text or document structure.

### RF-067 — Flagging of Potential Plagiarism Cases
The system must flag documents that show evidence of potential content misappropriation, forwarding the cases for human review.

### RF-068 — Consultation of Matching Documents
The system must allow users to view previously submitted documents that match the document being analyzed, including information about their respective submission and authorship as recorded on the platform.

### RF-069 — Publication Decision
The system must allow users to review similarity warnings and decide whether they wish to proceed with the submission, without textual similarity alone automatically blocking publication.

---

# 8. Notifications

### RF-070 — Comment Notifications
The system must notify authors whenever other users comment on their materials.

### RF-071 — Rating Notifications
The system must notify authors whenever their materials receive new ratings.

### RF-072 — Review Request Notifications
The system must notify authors whenever review requests are submitted for their materials.

### RF-073 — Change Suggestion Notifications
The system must notify authors whenever they receive new change suggestions.

### RF-074 — Notifications of Decisions on Suggestions
The system must notify users who submitted suggestions whenever those suggestions are accepted or rejected by the authors.

### RF-075 — In-Platform and Email Notifications
The system must provide notifications within the platform and also send them by email, according to the events relevant to each user.

### RF-076 — Notification Consultation
The system must provide an area where users can view their notifications and identify those that have not yet been read.

---

# 9. Moderation and Content Management

### RF-077 — Material Reporting
The system must allow users to report materials they consider inappropriate, offensive, fraudulent or in violation of third-party rights.

### RF-078 — Comment Reporting
The system must allow users to report comments they consider inappropriate or in violation of the platform's usage rules.

### RF-079 — Identification of the Reason for a Report
The system must allow users to indicate the reason for a report and provide an additional description.

### RF-080 — Consultation and Review of Reports
The system must allow users with moderation permissions to view and review submitted reports.

### RF-081 — Content Moderation
The system must allow authorized users to hide or remove materials and comments that violate the platform's rules.

### RF-082 — User Management
The system must allow administrators to view and manage user accounts, including applying access restrictions when necessary.

### RF-083 — Permission Management
The system must allow administrators to assign, modify or remove user roles and permissions.

---

# 10. Academic Management and Administration

### RF-084 — Degree Programme Management
The system must allow authorized users to create, view, update and remove degree programme records.

### RF-085 — Course Unit Management
The system must allow authorized users to create, view, update and remove course unit records.

### RF-086 — Assignment of Course Representatives
The system must allow users to be assigned the course representative role, associating them with the degree programmes or course units under their responsibility.

### RF-087 — Management of eLearning Materials by Representatives
The system must allow course representatives to add, update, organize and remove exclusively materials originating from eLearning within their assigned scope.

### RF-088 — Recording of Administrative Activities
The system must record relevant administrative operations, including permission changes, moderation actions and changes to the academic structure.

### RF-089 — Consultation of Audit Logs
The system must allow authorized users to consult audit logs in order to monitor relevant administrative operations.

---

# 11. Profile, Contributions and Reputation

### RF-090 — Viewing User Contributions
The system must allow users to view each user's public contributions, including published materials and other relevant participation.

### RF-091 — User Reputation Calculation
The system must automatically calculate a reputation indicator for each user, considering five criteria: material quality, usefulness, collaboration, continuous improvement and reliability.

### RF-092 — Reputation Calculation Formula
The system must calculate reputation using a weighted formula in which each criterion contributes to an overall score between 0 and 100, according to the following weights:

- Material quality: 30%;
- Usefulness: 20%;
- Collaboration: 15%;
- Continuous improvement: 20%;
- Reliability: 15%.

The formula is:

\[
R = 0.30Q + 0.20U + 0.15C + 0.20M + 0.15F
\]

Where:
- R represents overall reputation;
- Q represents material quality;
- U represents usefulness;
- C represents collaboration;
- M represents continuous improvement;
- F represents reliability.

Each component must be normalized on a scale from 0 to 100.

### RF-093 — Reputation Updates
The system must update the reputation indicator whenever relevant interactions or events occur that influence the evaluation criteria.

### RF-094 — Detailed Reputation Consultation
The system must allow users to view the overall reputation score and the scores of the criteria contributing to its calculation.

### RF-095 — Consultation of Contribution Indicators
The system must allow users to view indicators associated with user participation, including published materials, received ratings, accepted suggestions and other relevant contributions.

### RF-096 — Consideration of Confirmed Violations
The system must only consider confirmed violations of the platform's rules when applying penalties to the reliability component, without automatically penalizing users based on reports that have not been reviewed.

---

# 12. Institutional Authentication Integration

### RF-097 — Integration with the UA Identity Provider
The system must use WSO2 integrated with the official University of Aveiro Identity Provider (IdP). The team requests the required access token from STIC through the supervisor; token issuance and configuration are the remaining operational steps. OIDC is the intended protocol, with technical parameters following STIC guidance.

### RF-098 — Association of Institutional Identity with an Existing Account
The system must allow the institutional identity obtained through the UA IdP to be associated with the user's existing ApontaUA account.

### RF-099 — Account Preservation with Institutional Authentication
The system must preserve user profiles, materials, comments, ratings, reputation and permissions when institutional authentication is enabled or reconfigured; the permanent internal ApontaUA identifier remains the stable account key.

### RF-100 — Independent Management of External Identities
The system must maintain the association between internal ApontaUA accounts and external authentication identifiers independently of the identity provider being used.