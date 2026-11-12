> Requisitos NFR v2.0 (73 IDs) enquadrados pela arquitetura MS3. A equipa solicitará o token necessário aos STIC através do orientador; OIDC é o protocolo pretendido. O token e parâmetros técnicos ainda não estão registados como obtidos/configurados. O texto normativo de origem é preservado.

# APONTAUA

# NON-FUNCTIONAL REQUIREMENTS

**Version:** 2.0\
**Project:** ApontaUA — Academic Document Management System\
**Academic Year:** 2026/2027\
**Status:** Updated Working Version\
**Institution:** University of Aveiro — DETI

---

# Document Control

| Field                      | Description                               |
| -------------------------- | ----------------------------------------- |
| Document                   | Non-Functional Requirements Specification |
| Version                    | 2.0                                       |
| Previous version           | 1.0 — Working Draft                       |
| Project                    | ApontaUA                                  |
| Backend                    | FastAPI — Modular Monolith                |
| Frontend                   | React + Vite                              |
| Main Database              | PostgreSQL                                |
| Reverse Proxy / Web Server | NGINX                                     |
| SSL Certificate Management | Certbot                                   |
| Authentication Integration | WSO2 / University of Aveiro IdP           |
| Email Infrastructure       | Exim SMTP / mail.ua.pt                    |
| Deployment Environment     | IT Provided Host                          |

## 1. Purpose and Scope

This document defines the non-functional requirements (NFRs) for ApontaUA. These requirements establish the quality attributes, technical constraints and operational expectations that guide the system's architecture, implementation, deployment and validation.

The specification has been revised to reflect the updated architectural direction of ApontaUA, taking the PI-main project as a reference for infrastructure and external service integration.

The system will use a modular monolithic backend rather than multiple API instances or a microservices architecture.

The requirements cover:

- Security and access control.
- Privacy and data protection.
- Performance and responsiveness.
- Scalability and capacity.
- Reliability, recovery and data integrity.
- Usability and accessibility.
- Compatibility and file handling.
- Maintainability and testability.
- Document processing quality.
- Auditability.
- Availability and operations.
- Infrastructure and deployment.
- External service integration.

## 1.1 Priority Definitions

| Priority | Meaning                                                                              |
| -------- | ------------------------------------------------------------------------------------ |
| Must     | Required for the MVP.                                                                |
| Should   | Important requirement that should be implemented when feasible within the MVP scope. |
| Could    | Desirable improvement that may be postponed.                                         |

Requirements explicitly identified as second-semester evolution are not considered mandatory for the first-semester MVP.

## 1.2 MVP Scale Assumption

The initial deployment scenario considers a University of Aveiro / DETI environment with approximately 300 registered users.

This value represents the expected registered-user population, not the number of simultaneous active users.

The team shall define representative concurrent-user and document-volume assumptions before conducting final load tests.

## 1.3 Availability and Performance Targets

The MVP shall be designed to support reliable operation, but strict service-level targets are not fixed in this version.

The following values remain to be established through deployment information and testing:

- Expected simultaneous users.
- Initial document volume.
- Maximum acceptable response times.
- Availability percentage.
- Recovery Time Objective (RTO).
- Recovery Point Objective (RPO).

These targets shall be reviewed once the IT hosting environment and monitoring capabilities are known.

---

# 2. Security and Access Control

| ID     | Requirement                                                                                                                                                                                   | Priority |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-01 | The system shall enforce authorization on the backend for every protected operation.                                                                                                          | Must     |
| NFR-02 | The system shall never store passwords in plaintext. Authentication credentials shall be handled by the configured identity provider.                                                         | Must     |
| NFR-03 | All communication between clients and the deployed application shall use HTTPS.                                                                                                               | Must     |
| NFR-04 | Uploaded files shall be checked against the supported file formats, size restrictions and basic security validation before being accepted.                                                    | Must     |
| NFR-05 | Access to uploaded files and associated document information shall be restricted according to the user's permissions.                                                                         | Must     |
| NFR-06 | Administrative, moderation and course-representative permissions shall follow the principle of least privilege.                                                                               | Must     |
| NFR-53 | The NGINX reverse proxy shall act as the public entry point for the deployed application and shall forward requests only to the configured internal services.                                 | Must     |
| NFR-54 | The deployed application shall use TLS certificates managed through Certbot, with a documented renewal procedure.                                                                             | Must     |
| NFR-55 | The application shall validate authentication information received through the WSO2 / University of Aveiro Identity Provider integration according to the configured authentication protocol. | Must     |
| NFR-56 | The application shall maintain a separation between external identity-provider identifiers and the internal ApontaUA user identifier.                                                         | Must     |
| NFR-57 | The system shall not expose internal service ports directly to public clients when those services are intended to be accessed through NGINX.                                                  | Must     |

## 3. Privacy and Data Protection

| ID     | Requirement                                                                                                      | Priority |
| ------ | ---------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-07 | Personal information shall only be accessible to users with appropriate permissions and a legitimate purpose.    | Must     |
| NFR-08 | The project shall define retention and deletion rules for user data, uploaded files, reports and audit records.  | Must     |
| NFR-09 | Public material pages and search results shall not expose private user information unless explicitly authorized. | Must     |

## 4. Performance and Responsiveness

| ID     | Requirement                                                                                                                                                                | Priority |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-10 | The team shall measure search and common-request response times under a documented load-test scenario. No strict two-second response-time target is imposed at this stage. | Must     |
| NFR-11 | The interface shall provide appropriate feedback when an operation takes longer than an ordinary interactive request.                                                      | Must     |
| NFR-12 | Potentially expensive processing operations shall not unnecessarily block unrelated user operations.                                                                       | Should   |
| NFR-13 | Performance targets shall be reviewed after the initial MVP implementation and the collection of performance measurements.                                                 | Must     |

**Scope clarification:** OCR and advanced similarity analysis are not part of the first-semester MVP. Performance requirements for those operations shall be revisited when these capabilities are introduced.

## 5. Scalability and Capacity

| ID     | Requirement                                                                                                                                                                                           | Priority |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-14 | The MVP shall be tested against a reference deployment scenario of approximately 300 registered DETI users.                                                                                           | Must     |
| NFR-15 | The team shall define a representative number of concurrent users and an initial expected document volume for load testing.                                                                           | Must     |
| NFR-16 | The backend architecture shall maintain clear module boundaries so that processing workloads or individual modules can be evolved independently if future measurements justify architectural changes. | Should   |

The initial backend shall operate as a modular monolith. The use of multiple API instances, microservices or distributed processing components is not a mandatory MVP requirement.

## 6. Reliability, Recovery and Data Integrity

| ID     | Requirement                                                                                                                                 | Priority |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-17 | Failures during file validation, preview generation or other processing operations shall not corrupt or replace the original uploaded file. | Must     |
| NFR-18 | The system shall preserve consistency between academic materials, metadata, version history, authorship and validation records.             | Must     |
| NFR-19 | The project shall document a backup and recovery approach for PostgreSQL data and stored files.                                             | Must     |
| NFR-20 | Application and file-processing failures shall be logged sufficiently to support diagnosis by authorized personnel.                         | Must     |
| NFR-21 | The MVP should be tested for recovery from common application and storage failures.                                                         | Should   |

## 7. Usability

| ID     | Requirement                                                                                                                    | Priority |
| ------ | ------------------------------------------------------------------------------------------------------------------------------ | -------- |
| NFR-22 | The interface shall use consistent terminology and interaction patterns across the platform.                                   | Must     |
| NFR-23 | The material-submission workflow shall clearly communicate required fields, validation errors and submission status.           | Must     |
| NFR-24 | When OCR functionality is introduced, users shall be able to inspect the source document and correct uncertain extracted text. | Should   |
| NFR-25 | The interface shall clearly distinguish materials that are pending review, academically validated or not yet validated.        | Must     |
| NFR-26 | Error messages shall explain the problem and, where possible, suggest a corrective action.                                     | Must     |

## 8. Accessibility

| ID     | Requirement                                                                                 | Priority |
| ------ | ------------------------------------------------------------------------------------------- | -------- |
| NFR-27 | The interface should follow WCAG 2.2 Level AA guidelines where applicable.                  | Should   |
| NFR-28 | Interactive functionality shall be operable using a keyboard.                               | Must     |
| NFR-29 | Meaningful images and non-text interface elements shall have appropriate text alternatives. | Must     |
| NFR-30 | Information shall not be conveyed by colour alone.                                          | Must     |

WCAG 2.2 AA is the proposed accessibility target. Compliance shall be evaluated through accessibility testing and review.

## 9. Compatibility and File Handling

| ID     | Requirement                                                                                                            | Priority |
| ------ | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-31 | The MVP shall support the upload of PDF, MD, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPEG, JPG and PNG files.                 | Must     |
| NFR-32 | The original uploaded file shall be preserved even when a preview or converted representation is generated.            | Must     |
| NFR-33 | Upload and download support shall be distinguished from preview, text extraction and in-platform editing capabilities. | Must     |
| NFR-34 | Browser support shall be defined and tested during implementation based on the team's selected target browsers.        | Must     |
| NFR-35 | Failure to generate a preview shall not prevent access to an otherwise accepted original file.                         | Must     |

## 10. Maintainability and Testability

| ID     | Requirement                                                                                                                                                   | Priority |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-36 | The backend shall be organized as a modular monolith, with clearly defined modules and responsibilities.                                                      | Must     |
| NFR-37 | Critical business logic, including authorization, material validation, version management and exact duplicate detection, shall be covered by automated tests. | Must     |
| NFR-38 | The project shall use version control and a documented process for integrating code changes.                                                                  | Must     |
| NFR-39 | Logs shall support diagnosis without unnecessarily exposing passwords, private document content or other sensitive information.                               | Must     |
| NFR-40 | Deployment and local development procedures shall be documented and reproducible.                                                                             | Should   |

## 11. Document Processing and Duplicate Detection Quality

| ID     | Requirement                                                                                                                                                       | Priority |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-41 | When OCR is introduced, the process shall identify uncertain extracted text when confidence information is available and preserve the original document.          | Should   |
| NFR-42 | When OCR is introduced, users shall be able to correct extraction errors before uncertain text is treated as confirmed content.                                   | Should   |
| NFR-43 | Exact duplicate detection shall remain available independently of OCR or text-extraction functionality.                                                           | Must     |
| NFR-44 | Advanced similarity detection shall be evaluated on representative documents to estimate false-positive and false-negative rates before being used operationally. | Should   |
| NFR-45 | The system shall not treat a similarity score as definitive proof that two materials are duplicates or plagiarized.                                               | Must     |
| NFR-46 | Automated document-processing assessments shall not be presented as guarantees of academic correctness or authorship.                                             | Must     |

**MVP limitation:** Exact duplicate detection shall use a cryptographic file hash, such as SHA-256. A matching hash shall trigger a duplicate warning; it shall not automatically establish plagiarism.

OCR, approximate similarity detection and advanced potential-plagiarism detection are planned for the second semester.

## 12. Auditability

| ID     | Requirement                                                                                                                       | Priority |
| ------ | --------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-47 | The system shall keep traceable records of relevant administrative actions, moderation decisions and academic validation actions. | Must     |
| NFR-48 | Audit records shall identify the action, timestamp and responsible account where appropriate.                                     | Must     |
| NFR-49 | Access to audit records shall be restricted to authorized roles.                                                                  | Must     |

## 13. Availability and Operations

| ID     | Requirement                                                                                                            | Priority |
| ------ | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-50 | The MVP shall include a documented availability objective and a way to measure service interruptions before pilot use. | Must     |
| NFR-51 | The system should provide health checks or equivalent monitoring for critical application components.                  | Should   |
| NFR-52 | Planned maintenance and known service interruptions should be communicated to users where practical.                   | Could    |

## 14. Infrastructure and Deployment

| ID     | Requirement                                                                                                                                                          | Priority |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-58 | The application shall be deployed on the IT-provided hosting environment, subject to the infrastructure and access conditions defined by the IT services.            | Must     |
| NFR-59 | The deployment shall use Docker-based containerization to provide a reproducible application environment.                                                            | Must     |
| NFR-60 | The deployment architecture shall include NGINX as the reverse proxy and web server for routing external requests to the frontend and backend.                       | Must     |
| NFR-61 | Certbot shall be used for SSL/TLS certificate management, including certificate renewal.                                                                             | Must     |
| NFR-62 | The backend shall be deployed as a single FastAPI application organized as a modular monolith.                                                                       | Must     |
| NFR-63 | PostgreSQL shall be used as the primary relational database for structured application data.                                                                         | Must     |
| NFR-64 | Uploaded documents shall be stored in persistent storage, independently of the lifecycle of the application container.                                               | Must     |
| NFR-65 | Database and file-storage persistence shall be configured so that restarting or replacing application containers does not cause unintended data loss.                | Must     |
| NFR-66 | Deployment configuration and sensitive credentials shall be provided through environment-specific configuration and shall not be committed to the source repository. | Must     |
| NFR-67 | The deployment process shall include documented procedures for application startup, shutdown, updates and recovery.                                                  | Must     |
| NFR-68 | The application shall expose only the network ports required for its operation, keeping internal services inaccessible to unauthorized external connections.         | Must     |

## 15. External Service Integration

| ID     | Requirement                                                                                                                                                                            | Priority |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| NFR-69 | The system shall integrate with the WSO2 component and the University of Aveiro Identity Provider according to the authentication mechanism adopted for the institutional environment. | Must     |
| NFR-70 | The system shall use the Exim SMTP server and mail.ua.pt infrastructure for email delivery, following the same integration approach as PI-main.                                        | Must     |
| NFR-71 | Email delivery shall be handled through the external SMTP infrastructure rather than implementing an independent email server inside the ApontaUA application.                         | Must     |
| NFR-72 | The application shall handle external authentication and email-service failures without silently granting access or corrupting application data.                                       | Must     |
| NFR-73 | External service configuration shall be separated from application business logic so that service settings can be maintained independently.                                            | Must     |

---

# 16. Proposed Validation and Test Plan

The following validation activities shall be used to verify the non-functional requirements.

| Area                | Validation Approach                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| Security            | Test backend authorization, role boundaries, protected endpoints and access to uploaded files.                 |
| Authentication      | Test successful authentication, invalid authentication information, expired sessions and identity association. |
| HTTPS               | Verify HTTPS access, certificate validity and renewal configuration.                                           |
| Reverse Proxy       | Verify NGINX routing to the frontend and FastAPI backend.                                                      |
| Email               | Verify email delivery through Exim SMTP and mail.ua.pt.                                                        |
| Performance         | Measure search, material metadata access, upload and download response times under a documented test scenario. |
| Capacity            | Test using a representative dataset and a scenario based on approximately 300 registered users.                |
| Reliability         | Test application restart, database connectivity failures and storage persistence.                              |
| Data Integrity      | Verify that material metadata, authorship, versions and validation records remain consistent.                  |
| Backup and Recovery | Perform a backup and restoration test for PostgreSQL and stored files.                                         |
| Usability           | Evaluate material publication, navigation, search and consultation workflows.                                  |
| Accessibility       | Perform keyboard navigation, text-alternative and WCAG-oriented checks.                                        |
| Maintainability     | Verify module boundaries, automated tests, code review and CI pipeline execution.                              |
| Auditability        | Verify that relevant administrative, moderation and validation actions are recorded and access-controlled.     |

## 16.1 Performance Test Scenario

Before final performance testing, the team shall define:

- Number of registered test accounts.
- Number of simultaneously active users.
- Number of academic materials.
- Average and maximum document size.
- Expected distribution of search and download requests.
- Test duration and execution environment.

The results shall be documented and used to establish realistic performance targets.

## 16.2 Recovery Test Scenario

The recovery validation shall include:

1. Creating a database backup.
2. Creating or verifying a backup of stored documents.
3. Simulating an application or database failure.
4. Restoring the required data.
5. Verifying that materials, metadata, versions and user associations remain consistent.

---

# 17. Open Decisions

The following decisions require additional information, implementation evidence or team agreement.

| Topic                   | Decision to Confirm                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| Concurrent users        | Define the expected number of simultaneous users within the 300 registered-user scenario.   |
| Document volume         | Estimate the number and average size of materials expected during the pilot.                |
| Performance targets     | Establish response-time objectives after initial measurements.                              |
| Availability target     | Define a measurable uptime target based on the IT hosting environment.                      |
| RTO and RPO             | Define recovery objectives based on available backup and restoration capabilities.          |
| Storage capacity        | Confirm the persistent storage capacity available on the IT-provided host.                  |
| File size limits        | Define maximum upload sizes for each supported file type.                                   |
| Browser support         | Select and test the target browsers.                                                        |
| Authentication protocol | Confirm the exact WSO2 / University of Aveiro IdP integration protocol and configuration.   |
| Email configuration     | Confirm the connection parameters and credentials required to use Exim SMTP and mail.ua.pt. |
| Retention and deletion  | Define retention rules for uploaded documents, reports, user data and audit records.        |
| Accessibility           | Define the validation approach for the proposed WCAG 2.2 AA target.                         |

---

# 18. Architectural Constraints

The following constraints establish the architectural baseline for the MVP:

1. The backend shall use FastAPI and follow a modular monolithic architecture.
2. The frontend shall use React with Vite.
3. PostgreSQL shall be the primary relational database.
4. NGINX shall act as the reverse proxy and web server.
5. Certbot shall manage SSL/TLS certificates.
6. Authentication shall follow the WSO2 / University of Aveiro IdP integration approach used as a reference in PI-main.
7. Email delivery shall use Exim SMTP and mail.ua.pt, following PI-main.
8. Uploaded files shall be stored in persistent storage.
9. The application shall be deployed on the IT-provided hosting environment.
10. Docker shall be used to support reproducible development and deployment environments.
11. Advanced OCR and similarity analysis shall remain outside the first-semester MVP scope.

---

# 19. References

- ApontaUA Functional Requirements Specification.
- ApontaUA Business Rules Specification.
- ApontaUA Project Management & Development Plan.
- ApontaUA Project Management & Iteration Plan.
- PI-main project architecture and deployment documentation.
- University of Aveiro identity and authentication infrastructure.
- WCAG 2.2 accessibility guidelines.

---

**End of Document**

**Version 2.0 — Working Version for Team and Supervisor Review**
