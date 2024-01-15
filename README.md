### **과제**

아날로그 시계 구현

[배포링크](https://adriel-online-fe-test.vercel.app)

### **구현 상세**

1. 현재 시간을 기준으로 한 시침, 분침, 초침(옵션)

- 구현

  - 처음에는 setInterval를 customHook을 만들어 구현했으나 Clock.tsx컴포넌트에서 useEffect로 setInterval를 실행해도 recoil을 통해 컴포넌트에서 해당 값이 변화해도 리렌더링이 발생하지 않기 때문에 customHook 사용하지 않음

- 이슈사항
  - 시간에 따라 css 1초마다 setInterval을 통해 time 업데이트 되므로
  - setInterval을 통한 new Date() 생성은 브라우저의 설정상 한국날짜로 객체가 설정되었으나 첫 recoil Date의 UTC 시간이 0으로 되어있어 timeZone을 한국 시간 기준으로 변경하여 Date를 설정

2. 시계에 마우스 오버시 현재 시간을 툴팁으로 표시(툴팁은 마우스 포인터 우상단에 위치 하며, 마우스의 움직임을 따라 지속적으로 포지션이 업데이트 되어야 함)

- 구현

  - 시계 HTMLDivElement에 마우스 이벤트인 onMouseEnter, onMouseLeave 이벤트 리스너를 이용하여 hover state(boolean type)를 변경
  - hover 시 TooltipContainer Component에서 mousemove 이벤트를 등록해 마우스 position 좌표 감지해 tooltip 위치 표시

- 이슈사항

  - 처음엔 Tooltip component에 text를 props로 받아 Clock.tsx에서 child로 drilling 했었으나 1초마다 setInterval을 통해 time recoil state가 업데이트되므로 TooltipContainer를 따로 만들어 tooltip 레이아웃을 재사용 가능하게 만들고 시간을 표시해주는 CurrentTimeTooltip.tsx 생성함

  ### **폴더구조**

```
├── pages
│   ├── app.tsx
│   ├── index.tsx
│
├── libs
│   ├── utils
│       ├── time.ts
│
├── components
│   ├── tooltip
│   │   ├── TooltipContainer.tsx
│   │   ├── CurrentTimeTooltip.tsx
│   │
│   │
│   ├── clock
│   │   ├── Hour.tsx
│   │   ├── Minute.tsx
│   │   ├── Second.tsx
│   │   ├── TimeLine.tsx
│
│
├── recoil
│   ├── atoms
│       ├── timeAtom.ts
│
├── styles
│
│
└── type

```
