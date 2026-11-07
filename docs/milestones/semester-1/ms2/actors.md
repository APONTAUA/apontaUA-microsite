---
title: Actors
description: Roles described in the MS2 requirements and use-case model.
sidebar_position: 4
---

## Student

The Student actor searches and browses academic materials, publishes materials, edits their material, views version history and comments on material. The exact permissions and publication workflow are defined in the functional-requirements draft and remain subject to validation.

## Teacher

The use-case diagram associates Teacher with publishing official material and academic validation. The functional-requirements draft also describes teachers reviewing and validating material within their permissions and course-unit scope.

## Course Unit Responsible Teacher

The functional-requirements document defines this role separately: the responsible teacher may define validation criteria for a course unit, delegate validation to other teachers who teach that unit, view current delegates and revoke a delegation. Delegated permissions are scoped to the relevant course unit. The diagram itself does not show this as a separate actor; see the validation note below.

## Administrator

The diagram and requirements describe administration of users and roles, reports and moderation, course and curricular-unit structure, platform rules and audit records. No additional permissions are inferred here.

## Role-model note

The use-case diagram displays Student, Teacher and Administrator. The requirements add Course Unit Responsible Teacher as a role with unit-specific validation responsibilities. Treat this as an MS2 model difference for the team to confirm; this page does not silently add an actor to the supplied diagram.
