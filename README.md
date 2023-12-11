# 🚀 React 온보딩 프로젝트: "동적 검색 기능 구현하기"

### 🎯 프로젝트 목표

이 온보딩 프로젝트의 목표는 입력된 검색어에 따라 결과를 표시하는 간단한 동적 검색 기능을 만드는 것입니다. 사용자가 검색창에 텍스트를 입력하고, 이에 대응하여 서버에서 데이터를 검색한 후 결과를 화면에 표시합니다.

### 🤖 목표 결과물


### 🛠️ 단계별 가이드

### **1️⃣ 프로젝트 설정**

- Vite를 사용하여 React 및 TypeScript 프로젝트를 생성합니다.
- 필요한 패키지 (예: **`styled-components`**, **`axios`, `json-server`**)를 설치합니다.
    - Mock Server(`**json-server**`)는 devDependencies에 설치하세요.
- **`db.json`** 를 추가하고, **`package.json`**에 명령어를 추가하여 Mock Server를 실행하세요.

### **2️⃣ 컴포넌트 작성**

- **`SearchBar`** 컴포넌트를 구현합니다.
- 검색 결과를 표시하는 **`SearchResults`** 컴포넌트를 구현합니다.

### ****3️⃣ 가짜 API 서버와 통신****

- **`axios`** 라이브러리를 사용하여 가짜 API 서버와 통신하는 코드를 작성하세요.
    - `**`GET`**` `/users?name_like=${**name**}`
- **검색 결과 표시**: API 서버로부터 받은 데이터를 화면에 표시해보세요.

### **4️⃣ 검색 로직 구현**

- **`SearchBar`**에서 검색어가 변경될 때마다 검색 함수를 호출하고, 결과를 **`SearchResults`**에 전달합니다.
    - 사용자의 입력을 받고, 검색어가 변경될 때마다 검색을 수행합니다.(onChange)
    - **`SearchBar`**에 커서가 있을때만 **`SearchResults`**를 보여줍니다. (onFocus, onBlur)

### **5️⃣ 스타일링**

- **`styled-components`**를 사용하여 컴포넌트에 스타일을 적용합니다.
- 🔍검색 아이콘은 `**구글 폰트**`에서 가져와 사용합니다.

[Material Symbols and Icons - Google Fonts](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:search:FILL@0;wght@400;GRAD@0;opsz@24)

### 6️⃣ 보너스

- **디바운싱(debouncing)**과 **쓰로틀링(throttling)**을 검색해보고, 과도한 api 호출을 줄여보세요.

made by inshin
