export const functionalRequirements = [
  {
    "title": "1. Authentication and Access",
    "requirements": [
      {
        "id": "FR-001",
        "description": "The system shall allow users to sign in through an authentication mechanism supported by the platform.",
        "priority": "Must"
      },
      {
        "id": "FR-002",
        "description": "The system shall identify each authenticated user's role and enforce role-based permissions.",
        "priority": "Must"
      },
      {
        "id": "FR-003",
        "description": "The system shall support at least the Student, Teacher and Administrator roles.",
        "priority": "Must"
      },
      {
        "id": "FR-004",
        "description": "The system shall allow an administrator to suspend and reactivate user accounts.",
        "priority": "Must"
      },
      {
        "id": "FR-005",
        "description": "The system shall prevent users from performing actions for which they do not have permission.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "2. Academic Structure and Discovery",
    "requirements": [
      {
        "id": "FR-006",
        "description": "The system shall organize academic materials by course, course unit and topic.",
        "priority": "Must"
      },
      {
        "id": "FR-007",
        "description": "The system shall allow users to browse materials associated with a course unit or topic.",
        "priority": "Must"
      },
      {
        "id": "FR-008",
        "description": "The system shall allow users to search materials using keywords.",
        "priority": "Must"
      },
      {
        "id": "FR-009",
        "description": "The system should allow users to filter results by course unit, topic and material type.",
        "priority": "Should"
      },
      {
        "id": "FR-010",
        "description": "Search results shall display title, author, material type and publication date.",
        "priority": "Must"
      },
      {
        "id": "FR-011",
        "description": "The system shall display the academic validation status of a material when applicable.",
        "priority": "Must"
      },
      {
        "id": "FR-012",
        "description": "The system should allow users to browse materials from previous academic years.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "3. Material Submission and File Handling",
    "requirements": [
      {
        "id": "FR-013",
        "description": "The system shall allow authenticated students to submit academic materials.",
        "priority": "Must"
      },
      {
        "id": "FR-014",
        "description": "The system shall allow teachers to publish official academic materials.",
        "priority": "Must"
      },
      {
        "id": "FR-015",
        "description": "The system shall accept PNG, JPG/JPEG, PDF, DOCX, PPTX, Markdown (.md) and XLSX files, and explain when a file is rejected as unsupported.",
        "priority": "Must"
      },
      {
        "id": "FR-016",
        "description": "The system shall require a title, course unit, material type and topic metadata where applicable for each material.",
        "priority": "Must"
      },
      {
        "id": "FR-017",
        "description": "The system shall record the material's author and publication date.",
        "priority": "Must"
      },
      {
        "id": "FR-018",
        "description": "The system shall preserve the original uploaded file without modifying it during text extraction or conversion.",
        "priority": "Must"
      },
      {
        "id": "FR-019",
        "description": "The system shall allow authorized users to view or download the original file.",
        "priority": "Must"
      },
      {
        "id": "FR-020",
        "description": "The system should provide an in-platform preview when technically supported for the format.",
        "priority": "Should"
      },
      {
        "id": "FR-021",
        "description": "The system shall allow editing of materials created in formats supported by the platform editor.",
        "priority": "Must"
      },
      {
        "id": "FR-022",
        "description": "The system should allow an uploaded file to be replaced by a newer version while preserving previous versions.",
        "priority": "Should"
      },
      {
        "id": "FR-023",
        "description": "The system shall report file-processing failures without silently discarding an otherwise accepted original file.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "4. OCR and Text Extraction",
    "requirements": [
      {
        "id": "FR-024",
        "description": "The system shall attempt to extract text from submitted PNG, JPG and JPEG images using OCR.",
        "priority": "Must"
      },
      {
        "id": "FR-025",
        "description": "The system shall attempt OCR on scanned PDFs or PDF pages that contain images rather than extractable text.",
        "priority": "Must"
      },
      {
        "id": "FR-026",
        "description": "The system shall identify text segments whose OCR confidence is below a configurable threshold, when confidence information is available.",
        "priority": "Must"
      },
      {
        "id": "FR-027",
        "description": "The system shall highlight uncertain extracted text and allow the user to inspect the corresponding region of the original image or page.",
        "priority": "Must"
      },
      {
        "id": "FR-028",
        "description": "The system shall allow users to correct or manually transcribe text that was extracted incorrectly or could not be recognized.",
        "priority": "Must"
      },
      {
        "id": "FR-029",
        "description": "For uncertain segments, the system shall ask the user to confirm or correct the text and may suggest uploading a clearer image with more legible handwriting.",
        "priority": "Must"
      },
      {
        "id": "FR-030",
        "description": "The system shall distinguish automatically extracted text from text confirmed or corrected by the user.",
        "priority": "Must"
      },
      {
        "id": "FR-031",
        "description": "The system shall preserve the original image or document regardless of OCR results or corrections.",
        "priority": "Must"
      },
      {
        "id": "FR-032",
        "description": "The system shall make usable extracted or userconfirmed text available for search and similarity detection.",
        "priority": "Must"
      },
      {
        "id": "FR-033",
        "description": "The system shall attempt to extract text from PDF, DOCX, PPTX, XLSX and Markdown files when technically possible.",
        "priority": "Must"
      },
      {
        "id": "FR-034",
        "description": "The system should indicate whether text extraction succeeded, failed or produced limited results.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "5. Duplicate and Similarity Detection",
    "requirements": [
      {
        "id": "FR-035",
        "description": "The system shall perform a duplicate or similarity check for every material submission, regardless of supported file format.",
        "priority": "Must"
      },
      {
        "id": "FR-036",
        "description": "The system shall identify exact file duplicates using a suitable file fingerprint or hash.",
        "priority": "Must"
      },
      {
        "id": "FR-037",
        "description": "When usable text is available, the system shall compare normalized text to identify potentially similar materials.",
        "priority": "Must"
      },
      {
        "id": "FR-038",
        "description": "The system should use MinHash with banded Locality-Sensitive Hashing (LSH) to retrieve candidate documents with similar text.",
        "priority": "Should"
      },
      {
        "id": "FR-039",
        "description": "The system shall present potentially duplicate or similar materials to the submitter before finalizing publication.",
        "priority": "Must"
      },
      {
        "id": "FR-040",
        "description": "The system shall allow the submitter to inspect candidate materials before deciding how to proceed.",
        "priority": "Must"
      },
      {
        "id": "FR-041",
        "description": "The system shall not automatically reject a material solely because it is similar to another material.",
        "priority": "Must"
      },
      {
        "id": "FR-042",
        "description": "The system shall allow distinct materials on the same topic to coexist when they serve different purposes or contain meaningfully different content.",
        "priority": "Must"
      },
      {
        "id": "FR-043",
        "description": "When text extraction is unavailable, the system shall still attempt exact-file duplicate detection and shall not imply that text similarity was checked successfully.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "6. Content Moderation and Reports",
    "requirements": [
      {
        "id": "FR-044",
        "description": "Before making submitted content publicly available, the system shall run the configured content-moderation checks.",
        "priority": "Must"
      },
      {
        "id": "FR-045",
        "description": "The moderation process shall return one of three outcomes: Approved, Pending Review or Blocked.",
        "priority": "Must"
      },
      {
        "id": "FR-046",
        "description": "The system shall route content for human review when the automated assessment is ambiguous or insufficiently confident.",
        "priority": "Must"
      },
      {
        "id": "FR-047",
        "description": "The system shall prevent publication when content meets a clearly defined blocking rule.",
        "priority": "Must"
      },
      {
        "id": "FR-048",
        "description": "The system shall inform the submitter when content is blocked or sent for review and provide an appropriate explanation.",
        "priority": "Must"
      },
      {
        "id": "FR-049",
        "description": "The system shall allow administrators to inspect content awaiting moderation review.",
        "priority": "Must"
      },
      {
        "id": "FR-050",
        "description": "The system shall allow users to report materials they believe violate platform rules.",
        "priority": "Must"
      },
      {
        "id": "FR-051",
        "description": "The system shall allow administrators to review reports and decide whether content should remain available, be hidden or be removed.",
        "priority": "Must"
      },
      {
        "id": "FR-052",
        "description": "The system shall record moderation decisions, timestamps and the responsible actor for audit purposes.",
        "priority": "Must"
      },
      {
        "id": "FR-053",
        "description": "The system shall keep content moderation separate from academic validation; passing one process shall not imply passing the other.",
        "priority": "Must"
      },
      {
        "id": "FR-054",
        "description": "The system should account for academic context and avoid blocking content solely because it contains quoted offensive language, technical terms or controversial subject matter.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "7. Academic Validation and Delegation",
    "requirements": [
      {
        "id": "FR-055",
        "description": "The system shall allow the responsible teacher for a course unit to validate materials associated with that course unit.",
        "priority": "Must"
      },
      {
        "id": "FR-056",
        "description": "The system shall allow the responsible teacher to delegate validation permissions to other teachers who teach the same course unit.",
        "priority": "Must"
      },
      {
        "id": "FR-057",
        "description": "The system shall allow the responsible teacher to view current validation delegates for the course unit.",
        "priority": "Must"
      },
      {
        "id": "FR-058",
        "description": "The system shall allow the responsible teacher to revoke a previously granted validation delegation.",
        "priority": "Must"
      },
      {
        "id": "FR-059",
        "description": "The system shall scope each delegated permission to the relevant course unit and shall not grant access to other course units by default.",
        "priority": "Must"
      },
      {
        "id": "FR-060",
        "description": "The system shall allow authorized teachers to approve or reject materials submitted for academic validation.",
        "priority": "Must"
      },
      {
        "id": "FR-061",
        "description": "The system should allow the responsible teacher to define validation criteria for their course unit.",
        "priority": "Should"
      },
      {
        "id": "FR-062",
        "description": "The system shall notify the material's author when its validation status changes.",
        "priority": "Must"
      },
      {
        "id": "FR-063",
        "description": "The system shall allow an authorized teacher to revoke a previous validation within the scope of their permissions.",
        "priority": "Must"
      },
      {
        "id": "FR-064",
        "description": "The system shall display the material's current academic validation status to authorized viewers.",
        "priority": "Must"
      },
      {
        "id": "FR-065",
        "description": "The system shall record who approved, rejected or revoked validation and when the action occurred.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "8. Comments and Interaction",
    "requirements": [
      {
        "id": "FR-066",
        "description": "The system shall allow authorized users to post comments associated with academic materials.",
        "priority": "Must"
      },
      {
        "id": "FR-067",
        "description": "The system shall display comments to users authorized to view the corresponding material.",
        "priority": "Must"
      },
      {
        "id": "FR-068",
        "description": "The system should allow users to report comments they consider inappropriate.",
        "priority": "Should"
      },
      {
        "id": "FR-069",
        "description": "The system shall allow administrators to moderate comments that violate platform rules.",
        "priority": "Must"
      }
    ]
  },
  {
    "title": "9. Version History",
    "requirements": [
      {
        "id": "FR-070",
        "description": "The system shall create a new version when an editable material is changed and saved.",
        "priority": "Must"
      },
      {
        "id": "FR-071",
        "description": "The system shall retain previous versions of each material.",
        "priority": "Must"
      },
      {
        "id": "FR-072",
        "description": "The system shall allow authorized users to view a material's version history.",
        "priority": "Must"
      },
      {
        "id": "FR-073",
        "description": "The system shall record the author and timestamp of each version.",
        "priority": "Must"
      },
      {
        "id": "FR-074",
        "description": "The system should record the validation status associated with each version, where applicable.",
        "priority": "Should"
      },
      {
        "id": "FR-075",
        "description": "The system shall preserve previous versions when an uploaded file is replaced.",
        "priority": "Must"
      },
      {
        "id": "FR-076",
        "description": "The system should require a changed material to undergo the applicable validation workflow again rather than automatically carrying over the previous version's validation.",
        "priority": "Should"
      }
    ]
  },
  {
    "title": "10. Administration and Audit",
    "requirements": [
      {
        "id": "FR-077",
        "description": "The system shall allow administrators to manage general user roles and permissions.",
        "priority": "Must"
      },
      {
        "id": "FR-078",
        "description": "The system shall allow administrators to manage the platform's course and course-unit structure.",
        "priority": "Must"
      },
      {
        "id": "FR-079",
        "description": "The system should allow administrators to configure general platform rules within their authorized scope.",
        "priority": "Should"
      },
      {
        "id": "FR-080",
        "description": "The system shall allow administrators to consult audit logs of relevant system operations.",
        "priority": "Must"
      },
      {
        "id": "FR-081",
        "description": "The system shall record relevant administrative actions, including permission changes and moderation decisions.",
        "priority": "Must"
      }
    ]
  }
];
