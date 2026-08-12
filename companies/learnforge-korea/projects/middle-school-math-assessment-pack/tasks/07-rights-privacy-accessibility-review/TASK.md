---
name: 07 권리·개인정보·접근성 검토
slug: 07-rights-privacy-accessibility-review
assignee: quality-compliance-director
project: middle-school-math-assessment-pack
---

## Input

출시 후보 인벤토리, 모든 자산·출처의 유래 기록, 데이터 흐름 설명, 접근성 증거, 독립 QA 보고서, 인간 승인 기록.

## Output

후보 버전에 연결된 권리·라이선스, 개인정보·아동 데이터, 접근성, 범위, QA 게이트 표와 각 항목의 증거·판정·소유자·조치. 이는 법률 자문이나 준수 인증이 아니다.

## Dependency

`06-independent-editorial-qa` 완료와 차단·중대 결함 재검증.

## Acceptance

- 모든 자산과 출처가 원본·허가·승인·제외·미해결 중 하나로 분류된다.
- 데이터 필드, 목적, 수신자, 보존·삭제, 아동 데이터 여부가 명시된다.
- 접근성 예외가 자동 면제로 처리되지 않는다.
- 모든 비통과 항목에 unblock owner와 action이 있다.

## Human gate

사람만 권리·라이선스를 수락하고, 아동 데이터·개인정보 처리를 승인하며, 접근성 면제를 승인한다. 기록이 없으면 해당 항목과 출시는 차단된다.
