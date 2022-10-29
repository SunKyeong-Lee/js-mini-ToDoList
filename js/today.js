// 오늘 날짜가 들어갈 공간 가져오기
const todayDate = document.querySelector("#today").children[0];
const today = document.querySelector("#today").children[1];

/** 오늘 년도,월,일을 구하는 함수 */
function getTodayDate() {
  const day = new Date();
  const year = day.getFullYear();
  const month = String(day.getMonth() + 1).padStart(2, "0");
  const date = String(day.getDate() + 1).padStart(2, "0");

  return (todayDate.innerHTML = `${year}/${month}/${date}`);
}

/** 오늘 요일(월~금)을 구하는 함수 */
function getToday() {
  const day = new Date();
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = week[day.getDay()];

  return today.innerHTML = `${dayOfWeek}`;
}

getTodayDate()
getToday();
