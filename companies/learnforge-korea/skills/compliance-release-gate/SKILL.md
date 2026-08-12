---
name: compliance-release-gate
description: Assemble evidence and block or recommend release based on rights, privacy, accessibility, scope, and QA gates without claiming legal compliance. Use before any external educational-content release.
---

# Compliance Release Gate

This procedure organizes evidence and decisions. It is not legal advice and does not certify compliance.

## Required inputs

- Release-candidate inventory and version
- Source and asset provenance records
- Data-flow description, accessibility evidence, QA report, and human approval log

## Procedure

1. Freeze the candidate inventory and classify every text, image, font, code, dataset, and source as original, licensed, approved, excluded, or unresolved.
2. Describe data collected, purpose, fields, recipients, storage, retention, deletion, and learner/child-data involvement; treat missing information as unresolved.
3. Compare accessibility evidence to project requirements and list exceptions without granting a waiver.
4. Confirm independent QA status, scope traceability, open defects, and rollback readiness.
5. Verify explicit human records for final scope/curriculum, rights/license acceptance, child-data/privacy, any accessibility waiver, and external release.
6. Issue a gate table: pass, block, or human decision required, with evidence and owner/action for every non-pass.

## Durable output

A dated gate record tied to the candidate version, evidence locations, open risks, human approval records, and a release recommendation or block.

## Done checks

- No asset or data flow is unclassified.
- No missing approval is treated as consent.
- Every block names an unblock owner and action.
- The record makes no legal-compliance claim and grants no autonomous release authority.
