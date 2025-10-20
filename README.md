# 맛집 찾기 프로젝트

> 등록된 맛집 목록을 현재 위치 기준으로 가까운 순서대로 확인할 수 있는 웹 서비스

## 주요 기능

- 전체 맛집 정보 가져오기
- 현재 위치와 가장 가까운 맛집 순서로 표시하기
- 맛집 저장
- 저장한 맛집 조회 및 삭제

## 기술 스택

### 주요 라이브러리

**Axios**

- HTTP 요청 처리
- 자동 에러 핸들링

**React Query**

- 서버 상태 관리
- 자동 로딩/에러 상태 관리
- 캐싱

**TypeScript**

- 타입 안정성

### API

- Swagger API 문서 기반 통신
- Backend: eatingMarket-BE

## 핵심 구현

### 위치 기반 거리 계산

- `navigator.geolocation.getCurrentPosition()`으로 사용자 위치 가져오기
- Haversine 공식을 사용한 두 지점 간 거리 계산
- 계산된 거리를 기준으로 맛집 목록 자동 정렬

### 데이터 관리

- React Query: 맛집 목록 서버 데이터 관리
