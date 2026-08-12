---
name: 06 독립 편집·품질 검토
slug: 06-independent-editorial-qa
assignee: editorial-qa-reviewer
project: middle-school-math-assessment-pack
---

## Input

고정된 검토 버전의 브리프, 추적표, 근거 메모, 청사진, 24개 문항, 정답·풀이·채점 기준, 상호작용 패키지와 제작자 점검 기록.

## Output

검토 인벤토리, 수학·편집·추적성·상호작용·접근성 증거, 심각도별 결함, 재현 단계, 시정 책임자, 재검증 결과, 통과 또는 차단 권고가 있는 독립 QA 보고서.

## Dependency

`05-interactive-package` 완료 및 검토 중 버전 동결. 검토자는 제작 조직과 독립적이어야 한다.

## Acceptance

- 24개 문항의 정답·풀이·채점 기준이 독립적으로 재계산된다.
- 모든 결함은 정확한 위치, 관찰, 기대 결과, 재현 절차가 있다.
- 차단·중대 결함은 수정 후 재검증된다.
- 통과 권고가 인간 출시 승인으로 표현되지 않는다.

## Human gate

범위 또는 교육과정 적합성 문제는 인간 승인권자에게 이관한다. 검토자는 접근성 면제나 외부 출시를 승인하지 않는다.
