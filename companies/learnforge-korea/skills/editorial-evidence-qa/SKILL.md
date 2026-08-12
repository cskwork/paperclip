---
name: editorial-evidence-qa
description: Perform independent, evidence-backed editorial and functional QA on educational content. Use when a production-ready content bundle requires pass, correction, or block findings.
---

# Editorial Evidence QA

## Required inputs

- Frozen review version and scope baseline
- Trace table, item records, interactive package, and producer checks
- Severity definitions and expected behavior

## Procedure

1. Confirm the review version and inventory; reject incomplete or changing inputs.
2. Recalculate answers and inspect prompts, solutions, scoring, feedback, notation, reading level, consistency, and trace links independently.
3. Reproduce representative and risk-based interactive states, including keyboard flow and error feedback.
4. For each finding, record severity, artifact/version, exact location, observed evidence, expected result, and reproduction steps.
5. Keep production and review roles separate; do not downgrade findings merely to meet a date.
6. Recheck corrected artifacts against the original finding and nearby affected behavior, then record pass or remaining failure.

## Durable output

An immutable review report with inventory, coverage, evidence, findings, correction ownership, retest results, unresolved risks, and pass/block recommendation.

## Done checks

- Every reviewed artifact and version is identified.
- Every finding is reproducible and assigned.
- Blocking and major findings are retested after correction.
- A recommendation is supported by evidence and is not represented as human release approval.
