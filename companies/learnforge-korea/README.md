# LearnForge Korea

LearnForge Korea는 한국 초중등 교육과정에 맞춘 중립적 디지털 학습 콘텐츠를 기획·제작·검토하는 Agent Company 패키지다. 첫 프로젝트는 중학교 1학년 **정수와 유리수** 평가 팩이다. 모든 문항과 설명은 자체 작성하며 특정 출판사, 상품, 상표 또는 독점 자산에 의존하지 않는다.

## Organization

| Agent slug | 이름 / 역할 | Reports to | Local skills |
|---|---|---|---|
| `ceo` | 대표 / 목표·우선순위·인간 승인 조정 | — | `curriculum-traceability`, `compliance-release-gate`, `learning-analytics-release` |
| `curriculum-product-director` | 교육과정·제품 디렉터 / 범위와 제작 흐름 | `ceo` | `curriculum-traceability`, `math-content-evidence`, `assessment-item-design`, `interactive-content-production` |
| `quality-compliance-director` | 품질·준법 디렉터 / 독립 게이트 | `ceo` | `editorial-evidence-qa`, `compliance-release-gate` |
| `release-analytics-lead` | 출시·학습분석 리드 / 출시 후보와 최소 데이터 측정 | `ceo` | `compliance-release-gate`, `learning-analytics-release` |
| `math-curriculum-specialist` | 수학 교육과정 전문가 / 추적표와 오개념 근거 | `curriculum-product-director` | `curriculum-traceability`, `math-content-evidence` |
| `assessment-designer` | 평가 문항 설계자 / 청사진과 자체 작성 문항 | `curriculum-product-director` | `math-content-evidence`, `assessment-item-design` |
| `interactive-content-producer` | 상호작용 콘텐츠 제작자 / 접근 가능한 디지털 패키지 | `curriculum-product-director` | `assessment-item-design`, `interactive-content-production` |
| `editorial-qa-reviewer` | 편집·품질 검토자 / 독립 편집·수학·기능 QA | `quality-compliance-director` | `math-content-evidence`, `editorial-evidence-qa`, `compliance-release-gate` |

품질·준법 조직은 제작 조직에서 독립되어 있다. 각 에이전트는 필요할 때 할당된 단발 이슈를 수행하며, 이 패키지에는 일정이나 반복 루틴이 없다. 모든 에이전트는 로컬 Codex 어댑터 `codex_local`을 사용한다.

## Workflow

1. 제품 브리프를 확정한다.
2. 교육과정 범위와 학습 증거를 추적한다.
3. 오개념 근거를 조사한다.
4. 평가 청사진과 자체 작성 문항 24개를 만든다.
5. 접근 가능한 상호작용 패키지를 제작한다.
6. 제작 조직과 독립적으로 편집·수학·기능 QA를 수행한다.
7. 권리·개인정보·접근성 증거와 승인을 게이트한다.
8. 버전이 있는 출시 후보와 최소 데이터 학습분석 계획을 만든다.

수정은 영향받은 추적 ID를 따라 제작 단계로 되돌아가며 독립 QA와 게이트를 다시 거친다. 최종 범위·교육과정 적합성, 권리·라이선스 수락, 아동 데이터·개인정보, 접근성 면제, 외부 출시는 사람만 승인한다.

## Import

Paperclip 저장소 루트에서 서버가 실행 중일 때 먼저 가져오기 계획을 확인한다.

```bash
pnpm paperclipai company import ./companies/learnforge-korea --target new --new-company-name "LearnForge Korea" --dry-run --json --api-base http://localhost:3100
```

확인 후 대화형으로 가져온다.

```bash
pnpm paperclipai company import ./companies/learnforge-korea --target new --new-company-name "LearnForge Korea" --api-base http://localhost:3100
```

비대화형 적용에는 `--yes --json`을 추가한다. 가져온 에이전트는 활성화 전에 구성과 예산을 검토한다. `COMPANY.md`의 목표는 설명용 메타데이터이므로, 가져오기 후 사람이 `middle-school-math-assessment-pack`의 런타임 목표를 만들고 starter task를 연결한다.

## References

- [Agent Companies specification](https://agentcompanies.io/specification)
- [Paperclip](https://github.com/paperclipai/paperclip)

## License

MIT. 자세한 내용은 [LICENSE](LICENSE)를 참조한다.
