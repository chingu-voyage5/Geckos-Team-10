const btn3 = document.getElementById('btn3');
const btn5 = document.getElementById('btn5');
const btn7 = document.getElementById('btn7');
const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.startBtn');
let duration;
let diffTime;
let timeCount;
let time;
startBtn.disabled = true;
startBtn.style.visibility = 'hidden';

function update(t) {
  time = t;
  timer.innerHTML = t + ":00";
  btn3.disabled = true;
  btn5.disabled = true;
  btn7.disabled = true;
  startBtn.disabled = false;
  startBtn.style.visibility = 'visible';
  let currTime = moment().unix();
  let medTime = moment().add(t, 'minutes').unix();
  diffTime = medTime - currTime;
  duration = moment.duration(diffTime * 1000, 'milliseconds');
}

function meditateNow() {
  duration = moment.duration(duration.asMilliseconds() - 1000, 'milliseconds');
  let min = moment.duration(duration).minutes();
  let sec = moment.duration(duration).seconds();
  timer.innerHTML = min + ":" + sec;
  if(sec <= 0 && min <= 0) {
    clearInterval(timeCount);
    timer.innerHTML = "You have completed " + time + " minutes of meditation";
  }
}

function startInterval() {
  if(diffTime > 0) {
    timeCount = setInterval(meditateNow, 1000);
  }
}

btn3.addEventListener("click", () => {update(3);});
btn5.addEventListener("click", () => {update(5);});
btn7.addEventListener("click", () => {update(7);});
startBtn.addEventListener("click", startInterval);
