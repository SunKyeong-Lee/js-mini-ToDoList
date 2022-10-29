// 배경 이미지 이름을 배열에 저장
const images = ["back0.jpg", "back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg"];

// 랜덤 함수 Math.random()의 특징 : 0~1 사이의 실수
// 배열 > 요소를 넣어주면 인덱스 값으로 접근 가능
const randomNum = Math.floor(Math.random()*images.length);  // 0 ~ 원하는 정수
const chooseImg = images[randomNum];

// body 객체를 가져옴
const bodyBackground = document.querySelector("body");

// body에 이미지 추가
// css에서 이미지 추가하는 방식과 동일
bodyBackground.style.background = `url(./img/${chooseImg})`;