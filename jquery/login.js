// 제이쿼리 문법으로 수정해보기

// 입력폼에 작성한 이름 가져오기 - form의 submit 이벤트를 사용하기 위함
const loginForm  = $("#login_form");
// name 값을 가져오기 위한 input
const loginInput = $("#login_form #name");
//  name 값을 가질 h1
const title = $("#todo_container #title");


// 이벤트 리스너 연결
// form의 submit을 사용할 경우 click 이벤트가 아니라
// form의 sunmit 이벤트로 연결해야 함
loginForm.on("submit", onLoginSubmit);

function onLoginSubmit(e) {
  e.preventDefault();     // 새로고침 취소
  // console.log("확인")  // 제대로 실행되는지 확인하는 용도

  // loginInput의 value 값을 가져옴
  const name = loginInput.val();

  // if문을 사용해서, name 값이 없을 때, 아래가 실행되지 않게 함
  // 함수에서 return을 사용하면 종료
  if (name === "") {
    alert("이름을 입력해주세요");
    return;
  }

  // value 값을 title에 넣어줌
  // console.log(name);  // 값이 제대로 들어갔는지 확인하는 용도
  title.html(name + "님 반갑습니다");

  // login_container에 hidden 클래스 추가
  $("#login_container").addClass("hidden");

  // todo_container를 가져와서 hidden 클래스 제거
  $("#todo_container").removeClass("hidden");
}