# axios를 위한 mytodo

## Project setup : axios다운로드
```
yarn install
```

## project순서

1. /src/store/api/BaseAxios.js에 axios관련하여 작성
- 식별값은 store에 있는(/src/store/modules/myTodo.js) state중 deviceId로 임시 사용=> 추후 변경 예정
- 글번호 id값은 작성한 후 나오는 값 중 id값
<pre>
{
	"success": "Boolean",
	"data": [
		{
			"id": "Number",        // 할일 아이디
			"text": "String",      // 할일 내용
			"state": "Number",     // 1: 미완료 2: 완료
			"created_at": "String" // 생성일
			"updated_at": "String" // 수정일
		}
	]
}
</pre>

<h3>GET :리스트</h3>
http://api.stickinteractive.com/api/v1/todos/식별값

<h3>POST : 글입력</h3>
http://api.stickinteractive.com/api/v1/todos/식별값
<pre>
{
	text : "할일내용"
}
</pre>

<h3>patch : 글 수정</h3>
http://api.stickinteractive.com/api/v1/todos/글번호id값
<pre>
{
	//text : "수정내용",
	state : 1  // 1 미완료, 2 완료
}
</pre>

<h3>delete</h3>
http://api.stickinteractive.com/api/v1/todos/글번호id값

## 코드 규칙
: 가능한 하나의 기능으로 function 구분한다. 한 function안에 두개 이상의 기능 x<br>
: function명칭은 동사로 시작하고 camelCase기법을 사용한다.(첫문자는 소문자로)<br>

## GET : todo리스트가져오기
<h3>store</h3>
- action/mutaion의 getAllWriteList부분 수정=>기존에 sessionStorage를 이용했으나 axios로 가져오기<br>
<h3>component</h3>
- list내의 체크박스 css 변경필요,기존에는 true,fale였으나 axios data값이 1,2로 되어 있어서 이 부분 변경
- TodoList.vue내 changeFormat method지우기
- TodoList.vue내 key값은 axios data의 id값이 되야함(현재 id-날짜로 되어 있음)

## POST : todo리스트보내기
<h3>store</h3>
- action/mutaion의 addList사용 =>수정필요

## PATCH : todo리스트 업데이트(완료여부)
<h3>store</h3>
- action/mutaion의 updateList사용 =>수정필요

## DELETE : todo리스트 삭제(하나만)
<h3>store</h3>
- action/mutaion의 removeList필요

## DELETE : todo리스트 삭제(전체삭제)
<h3>store</h3>
- action/mutaion의 removeAllList사용 => 전체삭제에 대한 api가 없어서 현재 가지고 있는 state값내의 id를 반복문으로 돌려서 해야할 듯.
- 

