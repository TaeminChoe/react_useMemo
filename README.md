# react 성능 개선 고민해보기

## react.useMemo() 실습

-   함수형 컴포넌트는 말 그대로 함수이기 때문에, 렌더링 된다는 것은 함수가 실행되는 것이다.
-   컴포넌트는 자신의 state가 변경되거나, 부모에게서 받은 props가 변경되면 다시 렌더링 된다.
-   반복되어 렌더링 할 컴포넌트를 미리 저장해두었다가 사용함으로써 렌더링 시간을 단축

### 실습

-   좋아하는 색과, 영화 장르를 영어로 입력받으면, 아래에 한글로 표현해주는 app

App.js

![image](https://user-images.githubusercontent.com/92558961/148504137-2fd781ba-691a-4bdd-8762-67e64b252272.png)

-   6: color : 사용자가 입력한 color의 값을 저장할 state
-   7: movie : 사용자가 선택한 영화 장르 값을 저장할 state
-   9: onChagneHandler : 사용자가 입력한 값을 적절한 state에 저장해줄 함수

![image](https://user-images.githubusercontent.com/92558961/148504155-081ca602-6bf9-4041-82d7-d615cce9dc00.png)

-   color, movie state를 하위 컴포넌트인 Info에 전달합니다.

info.js

![image](https://user-images.githubusercontent.com/92558961/148504167-adb884c7-b140-451e-8627-05459b228b85.png)

-   입력한 color값에 따라 한글로 변환해주는 함수. 함수가 호출될 때 log가 출력된다.

![image](https://user-images.githubusercontent.com/92558961/148504177-fcfc14ff-90fa-4e21-80f3-385170b3e109.png)

-   입력한 movie값에 따라 한글로 변환해주는 함수. 함수가 호출될 때 log가 출력됨.

![image](https://user-images.githubusercontent.com/92558961/148504186-980b5832-7441-44f3-8be9-cc458da9cee3.png)

실행결과.

![image](https://user-images.githubusercontent.com/92558961/148504201-a728c120-b3ba-4186-9e78-a9bc62791bab.png)

console

![image](https://user-images.githubusercontent.com/92558961/148504210-57172fda-cdf2-4f01-ac8f-e127b2ec91f9.png)

-   앱이 실행되면서 각각의 함수가 호출되어 log가 출력됩니다.
-   state 2개를 props로 받는 Info 컴포넌트는 둘 중 하나의 state가 변해도 리렌더링 됩니다.

![image](https://user-images.githubusercontent.com/92558961/148504221-98b23ef1-6f29-4a5d-a6f8-3ad8a91f3562.png)

-   state중 하나가 바뀌어도 다시 렌더링 되며 두 함수가 모두 실행되는 모습.

### 성능 개선

![image](https://user-images.githubusercontent.com/92558961/148504233-2efe0f46-bfdc-4023-9ebf-365c735b11bd.png)

-   useMemo를 활용해 함수를 정의한다.
-   color state가 변하면, getMovieGenreKor 함수는 미리 저장되어 있으므로 실행되지 않는다.
-   movie state가 변하면, getColorKor 함수는 미리 저장되어 있으므로 실행되지 않는다.

![image](https://user-images.githubusercontent.com/92558961/148504242-1a9d5543-c658-4cca-a4f9-129bab4700fa.png)

-   각 함수, 컴포넌트의 크기가 커질수록, 성능의 개선의 도움이 될 수 있다.

### react.useCallback()

-   useMemo()는 state를 하위 컴포넌트에 전달했을 때, 리렌더링을 방지한다.
-   useCallback()는 컨셉이 완전 동일하지만, 대상이 state가 아닌 function이다.

참조: [https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html](https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html)
