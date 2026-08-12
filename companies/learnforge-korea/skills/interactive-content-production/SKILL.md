---
name: interactive-content-production
description: Turn assessment specifications into reviewable, accessible digital interactions with deterministic states and no unapproved data collection. Use when producing interactive learning content.
---

# Interactive Content Production

## Required inputs

- Versioned item and response specifications
- Feedback, state, and scoring rules
- Supported delivery environment and accessibility requirements

## Procedure

1. Define the state model for initial, editing, submitted, correct, incorrect, invalid, retry, and completed states that apply.
2. Map each UI control and feedback message to the item specification without changing mathematical meaning.
3. Implement semantic labels, logical focus order, keyboard operation, visible focus, text alternatives, and status communication not based on color alone.
4. Exercise correct, incorrect, invalid, boundary, retry, reset, and persistence behavior as applicable; record observed results.
5. Include only approved local/original assets and no learner identifiers, trackers, network calls, or data retention not explicitly approved.
6. Package version, run instructions, item mapping, limitations, and review evidence together.

## Durable output

A versioned interactive package with item-to-screen map, state-transition table, accessibility evidence, exercised scenario results, asset inventory, and known limitations.

## Done checks

- Every specified state has an observable result.
- The core flow completes using only a keyboard.
- No unapproved asset, external call, or personal-data field is present.
- Deviations from item specifications are resolved or blocking.
