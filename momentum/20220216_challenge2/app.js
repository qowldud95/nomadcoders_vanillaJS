const clockTitle = document.querySelector(".js-clock");
const christmasDay = new Date(2022, 11, 25);

function dday() {
  const today = new Date();
  const gap = christmasDay.getTime() - today.getTime();
  const gapDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const gapHour = String(Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const gapMin = String(Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const gapSec = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2, "0");

  clockTitle.innerText = `${gapDay}d ${gapHour}h ${gapMin}d ${gapSec}s`;
}

dday();
setInterval(dday, 1000);