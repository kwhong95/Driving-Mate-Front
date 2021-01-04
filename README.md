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