# DOWITTER

### React + TypeScript + Redux Toolkit CRUD mini project

<br>

<p align='center'>
<img src="https://user-images.githubusercontent.com/92723332/176997865-fe03db77-5944-44e0-916f-ae9d86e24ab7.gif" width="400">
</p>
<p align='center'>
우측 상단에 재생버튼 클릭!
</p>
<br>

## 🛠 Using

<p align='center'>
    <img src="https://img.shields.io/badge/React-^18.2.0-blue?logo=React"/>
    <img src="https://img.shields.io/badge/react_dom-^18.2.0-blueviolet?logo=ReactOS"/>
    <img src="https://img.shields.io/badge/react_router_dom-^6.3.0-critical?logo=React Table"/>
    <img src="https://img.shields.io/badge/TypeScript-^4.7.4-3178C6?logo=TypeScript"/>
    <img src="https://img.shields.io/badge/Redux Toolkit-^1.8.2-764ABC?logo=Redux"/>
    <img src="https://img.shields.io/badge/React Redux-^8.0.2-764ABC?logo=Redux"/>
    <img src="https://img.shields.io/badge/Styled components-^5.3.5-ff69b4?logo=styled-components"/>
</p>

<br>

## 📖 Project Review

<br>

원래 React Context로 주로 전역적인 데이터 관리를 해왔던 난, 하고 있는 프로젝트 사이즈가 점점 커지자 이것만으로는 한계가 느껴져서 필요에 의해 전역 상태 관리 라이브러리를 제대로 공부하고 싶어졌다. <br><br> 기존에 공부해봤던 React Redux는 사용해봤을 때 간단한 기능 하나 구현하는데도 너무 많은 코드를 적어야해서 불편한 점이 많았는데, Redux 문서 맨 하단에 Redux Toolkit이란 것이 있길래 눌러보니 Redux를 써야한다면 이것을 사용하기를 강력 추천한다는 말을 보았다. 그 전에도 강의를 통해 존재하고 있는 것은 알고 있었으나 이번 계기로 사용해보니 왜 Redux 개발자도 Toolkit 사용을 권장하는지 알 것 같았다. <br><br> 일단 바로 직관적으로 보이는 장점으로는 코드량이 많이 줄어들고, 이미 내장되어 있는 것들이 많아서(immer, redux thunk 등등), 많은 패키지를 설치할 필요가 없었다. TypeScript와 함께 사용할 때도 불편한 점은 거의 없었고, 좋은 개발 경험이었다고 생각한다.

<br>

> ### Redux Toolkit의 장점 요약

- action type이나 action creator를 따로 생성해주지 않아도 된다.
- 미들웨어 추가가 편리하다.
- immer가 내장되어 있어 mutable 객체를 사용해도 된다.
- redux thunk가 내장되어 있어 비동기를 지원한다.
- 타입스크립트 지원이 잘된다.
