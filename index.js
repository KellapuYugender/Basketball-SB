let homeScr = document.getElementById("homeScr");
let guestScr = document.getElementById("guestScr");

let homeCount = 0;
let guestCount = 0;

function increment_1(str) {
  //   console.log(str);
  if (str === "home1") {
    homeCount += 1;
    homeScr.textContent = homeCount;
  } else {
    guestCount += 1;
    guestScr.textContent = guestCount;
  }
}

function increment_2(str) {
  //   console.log(str);
  if (str === "home2") {
    homeCount += 2;
    homeScr.textContent = homeCount;
  } else {
    guestCount += 2;
    guestScr.textContent = guestCount;
  }
}
function increment_3(str) {
  //   console.log(str);
  if (str === "home3") {
    homeCount += 3;
    homeScr.textContent = homeCount;
  } else {
    guestCount += 3;
    guestScr.textContent = guestCount;
  }
}

function reset() {
  homeCount = 0;
  homeScr.textContent = homeCount;
  guestCount = 0;
  guestScr.textContent = guestCount;
}
