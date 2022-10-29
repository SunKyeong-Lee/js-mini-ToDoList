// id가 clock인 문서 객체를 들고옴
const clock = document.querySelector("#clock");

// 인터벌 함수에 통째로 넣어주기 위함
function getClock() {
  // 현재 시간을 가져오는 객체
  const time = new Date();
  // 00:00:00 포맷을 맞추기 위해 String의 padStart() 메소드 사용
  // 숫자형을 문자열로 바꿀 때,
  // 앞으로 숫자로 연산할 일이 있는지 생각해보고 바꾸는게 좋다.
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  // return을 통해서 현재 시간을 내보내줌
  return (clock.innerHTML = `${hours}:${minutes}:${seconds}`);
}

// 없다면 1초의 딜레이 때문에 새로고침할 때 00:00:00으로 ㅅ ㅣ작
clock.innerHTML = getClock();
// 타이머 - 인터벌 함수를 사용하여 1초마다 반복
setInterval(() => {
  clock.innerHTML = getClock();
}, 1000);
