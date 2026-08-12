---
name: learning-analytics-release
description: Prepare a versioned educational-content release and a minimal, decision-linked learning analytics plan. Use after independent QA and before human-authorized external release.
---

# Learning Analytics Release

## Required inputs

- Frozen release candidate and change history
- Learning questions and evidence statements
- QA/gate record, approved data boundaries, and delivery constraints

## Procedure

1. Write each learning or operational question before choosing a metric.
2. For each metric, define decision served, event, minimum fields, aggregation, denominator, quality checks, interpretation limits, and owner.
3. Remove direct identifiers and fields that do not change a stated decision; flag any child-data or privacy processing for human approval.
4. Version the content inventory, analytics schema, release notes, verification steps, and rollback trigger together.
5. Confirm QA and gate evidence references the same candidate version.
6. Produce a human execution checklist; do not publish, transmit, or enable collection without recorded approval.

## Durable output

A release manifest, change note, metric dictionary, event/data-minimization table, validation plan, rollback criteria, approval status, and post-release review questions.

## Done checks

- Every metric answers a named question and has an interpretation limit.
- Every collected field is necessary and within approved boundaries.
- Candidate, QA evidence, and analytics schema versions agree.
- External release and any child-data processing remain blocked pending human approval.
