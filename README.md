# Firebase authentication with React, Redux and Typescript

## 1. 패키지 설치
```
npm i bulma redux react-redux react-router-dom firebase redux-thunk redux-devtools-extension @types/react-redux @types/react-router-dom
```

## 2. Firebase 프로젝트 생성하기

[FireBase Console](https://console.firebase.google.com/)에서 원하는 방식에 따라서 세팅하고 프로젝트에 SDK를 추가한다.

- `.env`로 SDK 환경설정을 해주고 firebase를 연동할 `config.ts`로 설정

## 3. Firebase DataBase 생성하기

## 3.1 규칙 수정하기
```json
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    match/users/{userId} {
    	allow read, update, delete: if request.auth != null && request.auth.uid == userId;
    	allow create: if true;
    }
    
  }
}
```
- 규칙을 위와 같게 수정한 뒤 게시한다.

## 4. Redux를 활용하여 로그인 & 유저 상태 관리하기
### 4.1 필요한 타입 먼저 정의하기
> src > store > type.ts 에 필요한 타입들 설정

### 4.2 Auth Reducer 생성하기
- Auth 관련 초기 상태와 각 Action의 type에 따라 변경되는 상태들을 설정함

### 4.3 Store 생성하기
- AuthReducer와 각 Redux Tools 을 합쳐 Store를 생성하고 App 전체에 Provide!

## 4.4 Auth Actions 정의하기
```
[로그인 관련 기능 9가지 액션 정의]
- 유저 생성 액션
- 유저의 아이디를 가져오는 액션
- 로딩 처리 액션
- 로그인 상태 저장 액션
- 로그아웃 기능 액션
- 에러 처리 액션
- 검증 요구 액션
- 성공 처리 액션
- 암호 재설정 이메일 전송 액션
```

## 5. UI 컴포넌트 생성하기
> 각 UI별 사용할 인터페이스를 생성하고 속성들을 정의해서 추후에 유동적으로 변화를 주어   
사용할 수 있는 컴포넌트를 구축한다.
```
[Component List]
- Button
- Input
- Custom Loader
- Message by Circumstance
```