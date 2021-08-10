1. Routes 분리, 상수 처리

2. api utils 따로 분리, 상수처리

3. js 쓸꺼면 propType 쓰자

4. SEO 없음

5. 참조형 데이터 사용 여부 -> 사용한다면 상수로 빼라

6. 에러 페이지 없음.

7. 버그 있을 거임

## 수정 순서.

1. app.js에서 index.js 로냄
2. Routes.js에서 한줄로 구현
3. form, label, input
   input의 id, label의 htmlFor 변경
   https://runebook.dev/ko/docs/html/element/input/search
   아니 이름을 q로 짓네?
   근데 id까지 q로 지을 필요는 없다.

   [https://neul-carpediem.tistory.com/266](https://neul-carpediem.tistory.com/266)
   label안에 input을 사용하면서 암시적 작성 방법을 사용하고 있음. htmlFor을 사용하는데 굳이 암시적 사용할 필요 없음. 명시적 작성해라
   또 암시적 작성 방법은 오래된 기기에선 호화안됨.

   type="serach" name='q'를 이용해 서버로 전송한다.

   span hidden 혹시 input type submit을 의미하는 건가 ?
   <input type='hidden' id="search_value" value={state.q}>

4. useForm
   handleSelect 지워. 쓰지도 않고 handleSubmit과 겹치는 듯
   로직은 대충 맞아보임. useForm 네이밍이 문제인 듯 싶음.

5. main의 if문 그냥 위로 올리는게 낫지 않나
