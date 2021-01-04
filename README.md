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

