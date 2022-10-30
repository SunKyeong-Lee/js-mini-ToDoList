// 제이쿼리 문법으로 수정해보기

// todo 입력 공간 가져오기
const todoInput = $("#todo_form #todo");

// button : click 이벤트로 실행
// button에 id를 주지 않았기 때문에, 노드로 접근하거나
// querySelector(선택자)를 이용해 접근해서 객체를 가져온다.
const todoBtn = todoInput.next();

// todoboard 객체 가져오기
const todoBoard = $("#todo_board");

// 완료한 할 일 DOM 가져오기
const todoCount = $("#done p:first");
let count = 0;

// 버튼에 이벤트 리스너 : button이므로 click
// (todo를 작성하고 추가 버튼을 누르면 아래 todolist 추가)
todoBtn.on("click", addTodo);

function addTodo(e) {
  // todoInput의 value 값을 들고옴
  const todo = todoInput.val();

  if (todo === "") {
    alert("할 일을 입력해주세요");
    return;
  }

  // 새로 요소 생성
  // li, label, input type="checkbox", textNode, button
  const li = $("<li>");
  li.addClass("unchecked");  // 체크 상태에 따라 스타일 변화를 위함
  const checkbox = $("<input>").attr("type", "checkbox");  // input 타입 설정
  const textNode = $("<span>").html(todo);
  const button = $("<button>");
  button.html("X");        // button에 x 문자열 추가

  // li 요소에 label, input type="checkbox", textNode, button 추가
  li.append(checkbox).append(textNode).append(button);

  // todoBoard에 li 추가
  todoBoard.append(li);

  // todoInput.value 값을 빈 값으로 만들기
  todoInput.val("");

  // 체크박스를 눌렀을 때, 이벤트 리스너 실행 : click
  // (완료한 todolist의 글자를 회색으로)
  checkbox.on("click", todoCheck);

  // X 버튼을 눌렀을 때, 이벤트 리스너 실행 : click
  // (원하는 todolist 삭제)
  button.on("click", todoDelete);
}

// 체크박스 이벤트 리스너에 들어갈 함수
function todoCheck(e) {
  const li = e.target.parentElement;
  if (e.target.checked) {
    $("li").removeClass("unchecked")
    $("li").addClass("checked")
    // count 값을 1 증가
    count++;
    todoCount.html(`오늘 완료한 할 일 : ${count}개`);
  } else {
    $("li").removeClass("checked")
    $("li").addClass("unchecked")
    // count 값을 1 감소
    count--;
    todoCount.html(`오늘 완료한 할 일 : ${count}개`);
  }
}

// X 버튼 이벤트 리스너에 들어갈 함수
function todoDelete(e) {
  // li 요소를 삭제
  const li = e.target.parentElement;
  if (li.children[0].checked) {
    count--;
    todoCount.html(`오늘 완료한 할 일 : ${count}개`);
  }
  li.remove();
}