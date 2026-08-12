---
name: 05 상호작용 패키지 제작
slug: 05-interactive-package
assignee: interactive-content-producer
project: middle-school-math-assessment-pack
---

## Input

버전이 고정된 평가 청사진·문항 세트, 응답·채점·피드백 규칙, 지원 전달 환경과 접근성 요구.

## Output

24개 문항을 제공하는 버전이 있는 상호작용 패키지, 문항·화면 매핑, 상태 전이표, 실행 지침, 접근성 확인 기록, 자산 목록과 알려진 제한.

## Dependency

`04-assessment-blueprint-items` 완료.

## Acceptance

- 정답·오답·무효·경계·재시도·초기화 상태가 명세대로 동작한다.
- 핵심 응시 흐름을 키보드만으로 완료할 수 있다.
- 포커스, 레이블, 상태 안내, 색상 외 구분 증거가 있다.
- 미승인 외부 자산, 네트워크 호출, 추적기, 개인정보 필드가 없다.

## Human gate

접근성 요구를 충족하지 못한 예외는 사람의 명시적 면제 없이는 통과할 수 없다. 개인정보 처리를 추가하려면 별도 인간 승인이 필요하다.
