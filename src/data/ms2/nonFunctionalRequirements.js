export const nonFunctionalRequirements = [
  {
    "title": "1. Security and Access Control",
    "requirements": [
      {
        "id": "NFR-01",
        "description": "The system shall enforce authorization on the server for every protected operation.",
        "priority": "Must"
      },
      {
        "id": "NFR-02",
        "description": "If passwords are managed locally, they shall never be stored in plaintext.",
        "priority": "Must"
      },
      {
        "id": "NFR-03",
        "description": "Communication between client and server shall use HTTPS in deployed environments.",
        "priority": "Must"
      },
      {
        "id": "NFR-04",
        "description": "Uploaded files shall be checked for allowed type, size and basic safety before processing.",
        "priority": "Must"
      },
      {
        "id": "NFR-05",
        "description": "Access to uploaded files and extracted document text shall be restricted according to permissions.",
        "priority": "Must"
      },
      {
        "id": "NFR-06",
        "description": "Administrative and course-unit validation permissions shall follow the principle of least privilege.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "2. Privacy and Data Protection",
    "requirements": [
      {
        "id": "NFR-07",
        "description": "Personal information shall be accessible only to users with appropriate permissions and a legitimate purpose.",
        "priority": "Must"
      },
      {
        "id": "NFR-08",
        "description": "The project shall define retention and deletion rules for user data, uploaded files, extracted text, reports and audit records.",
        "priority": "Must"
      },
      {
        "id": "NFR-09",
        "description": "Public material pages and search results shall not expose private user information unless explicitly authorized.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "3. Performance and Responsiveness",
    "requirements": [
      {
        "id": "NFR-10",
        "description": "The team shall measure search and commonrequest response times under a documented load-test scenario; no strict two-second target is imposed at this stage.",
        "priority": "Must"
      },
      {
        "id": "NFR-11",
        "description": "The system should provide visible status feedback when OCR, conversion or similarity analysis takes longer than an ordinary interactive request.",
        "priority": "Must"
      },
      {
        "id": "NFR-12",
        "description": "OCR, file conversion and similarity detection should run without unnecessarily blocking unrelated user operations.",
        "priority": "Must"
      },
      {
        "id": "NFR-13",
        "description": "Performance targets shall be revisited after the initial MVP implementation and measurements.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "4. Scalability and Capacity",
    "requirements": [
      {
        "id": "NFR-14",
        "description": "The MVP shall be tested against a reference deployment of approximately 300 registered DETI users.",
        "priority": "Must"
      },
      {
        "id": "NFR-15",
        "description": "The team shall define a representative number of concurrent users and an initial expected document volume for load testing.",
        "priority": "Must"
      },
      {
        "id": "NFR-16",
        "description": "The system architecture should allow documentprocessing workloads to be scaled or moved to background workers if measurements show a need.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "5. Reliability, Recovery and Data Integrity",
    "requirements": [
      {
        "id": "NFR-17",
        "description": "OCR, conversion or analysis failures shall not corrupt or replace the original uploaded file.",
        "priority": "Must"
      },
      {
        "id": "NFR-18",
        "description": "The system shall preserve consistency between materials, metadata, version history and validation records.",
        "priority": "Must"
      },
      {
        "id": "NFR-19",
        "description": "The project shall document a backup and recovery approach for stored materials and essential application data.",
        "priority": "Must"
      },
      {
        "id": "NFR-20",
        "description": "Document-processing failures shall be logged sufficiently to support diagnosis by authorized personnel.",
        "priority": "Must"
      },
      {
        "id": "NFR-21",
        "description": "The MVP shall be tested for recovery from common application and processing failures.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "6. Usability",
    "requirements": [
      {
        "id": "NFR-22",
        "description": "The interface shall use consistent terminology and interaction patterns across the platform.",
        "priority": "Must"
      },
      {
        "id": "NFR-23",
        "description": "The material-submission workflow shall clearly communicate required fields, errors and processing status.",
        "priority": "Must"
      },
      {
        "id": "NFR-24",
        "description": "When OCR detects uncertain text, users shall be able to inspect the source image and correct the extracted text without re-entering the entire document.",
        "priority": "Must"
      },
      {
        "id": "NFR-25",
        "description": "The interface shall clearly distinguish pending review, academically validated and not-yetvalidated materials.",
        "priority": "Must"
      },
      {
        "id": "NFR-26",
        "description": "Error messages shall explain the problem and, where possible, suggest a corrective action.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "7. Accessibility",
    "requirements": [
      {
        "id": "NFR-27",
        "description": "The interface should follow WCAG 2.2 Level AA guidelines where applicable.",
        "priority": "Should"
      },
      {
        "id": "NFR-28",
        "description": "Interactive functionality shall be operable using a keyboard.",
        "priority": "Must"
      },
      {
        "id": "NFR-29",
        "description": "Meaningful images and non-text interface elements shall have appropriate text alternatives.",
        "priority": "Must"
      },
      {
        "id": "NFR-30",
        "description": "Information shall not be conveyed by colour alone.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "8. Compatibility and File Handling",
    "requirements": [
      {
        "id": "NFR-31",
        "description": "The MVP shall support uploads of PNG, JPG/JPEG, PDF, DOCX, PPTX, Markdown (.md) and XLSX files.",
        "priority": "Must"
      },
      {
        "id": "NFR-32",
        "description": "The original uploaded file shall be preserved even when a preview or converted representation is generated.",
        "priority": "Must"
      },
      {
        "id": "NFR-33",
        "description": "Upload/download support shall be distinguished from preview, text extraction and in-platform editing capabilities.",
        "priority": "Must"
      },
      {
        "id": "NFR-34",
        "description": "Browser support shall be defined and tested during implementation based on the team's selected target browsers.",
        "priority": "Must"
      },
      {
        "id": "NFR-35",
        "description": "Failure to generate a preview shall not prevent access to an otherwise accepted original file.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "9. Maintainability and Testability",
    "requirements": [
      {
        "id": "NFR-36",
        "description": "The codebase shall be organized into modules with clearly defined responsibilities.",
        "priority": "Must"
      },
      {
        "id": "NFR-37",
        "description": "Critical business logic, including permissions, validation workflows and duplicate detection, shall be covered by automated tests.",
        "priority": "Must"
      },
      {
        "id": "NFR-38",
        "description": "The project shall use version control and a documented process for integrating code changes.",
        "priority": "Must"
      },
      {
        "id": "NFR-39",
        "description": "Logs shall support diagnosis without unnecessarily exposing passwords, private document content or other sensitive information.",
        "priority": "Must"
      },
      {
        "id": "NFR-40",
        "description": "Deployment and local development steps shall be documented and reproducible.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "10. OCR and Similarity Detection Quality",
    "requirements": [
      {
        "id": "NFR-41",
        "description": "The OCR process shall identify uncertain text when confidence information is available and preserve the original document.",
        "priority": "Must"
      },
      {
        "id": "NFR-42",
        "description": "Users shall be able to correct OCR errors before uncertain extracted text is treated as confirmed content.",
        "priority": "Must"
      },
      {
        "id": "NFR-43",
        "description": "Exact-duplicate detection shall remain available even when text extraction fails.",
        "priority": "Must"
      },
      {
        "id": "NFR-44",
        "description": "Similarity detection shall be evaluated on representative documents to estimate falsepositive and false-negative rates.",
        "priority": "Must"
      },
      {
        "id": "NFR-45",
        "description": "The system shall not treat a similarity score as definitive proof that two materials are duplicates.",
        "priority": "Must"
      },
      {
        "id": "NFR-46",
        "description": "Moderation and OCR decisions shall be presented as automated assessments, not as guarantees of academic correctness.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "11. Auditability",
    "requirements": [
      {
        "id": "NFR-47",
        "description": "The system shall keep traceable records of relevant administrative actions, moderation decisions and academic validation actions.",
        "priority": "Must"
      },
      {
        "id": "NFR-48",
        "description": "Audit records shall identify the action, timestamp and responsible account where appropriate.",
        "priority": "Must"
      },
      {
        "id": "NFR-49",
        "description": "Access to audit records shall be restricted to authorized roles.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "12. Availability and Operations",
    "requirements": [
      {
        "id": "NFR-50",
        "description": "The MVP shall include a documented availability objective and a way to measure service interruptions before pilot use.",
        "priority": "Must"
      },
      {
        "id": "NFR-51",
        "description": "The system should provide health checks or equivalent monitoring for critical application components.",
        "priority": "Should"
      },
      {
        "id": "NFR-52",
        "description": "Planned maintenance and known service interruptions should be communicated to users where practical.",
        "priority": "Could"
      }
    ]
  }
];
