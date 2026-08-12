---
name: 08 출시·학습분석 계획
slug: 08-release-analytics-plan
assignee: release-analytics-lead
project: middle-school-math-assessment-pack
---

## Input

고정된 출시 후보, 변경 기록, 학습 질문, 교육과정 증거 ID, 독립 QA와 게이트 판정, 승인된 데이터 경계와 전달 제약.

## Output

출시 매니페스트, 버전·변경 기록, 인간 실행 체크리스트, 학습 질문별 지표 사전, 최소 이벤트·필드 표, 품질 확인, 해석 한계, 되돌리기 기준과 사후 검토 계획.

## Dependency

`07-rights-privacy-accessibility-review` 완료. 차단 상태 또는 필수 인간 승인 누락 시 계획은 작성하되 출시 실행은 차단한다.

## Acceptance

- 후보, QA, 게이트, 분석 스키마의 버전이 일치한다.
- 모든 지표가 명시된 학습 또는 운영 결정에 연결된다.
- 불필요한 직접 식별자와 결정에 쓰이지 않는 필드가 없다.
- 검증, 중단, 되돌리기 조건과 담당자가 명확하다.
- 에이전트가 외부 게시·전송·수집 활성화를 수행하지 않는다.

## Human gate

사람이 아동 데이터·개인정보가 포함된 측정 계획을 승인하고 외부 출시를 최종 승인·실행한다. 그 전에는 출시 후보 상태로 유지한다.
