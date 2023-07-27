const finalDate = "15 March 2024 9:00 AM";
document.getElementById("final-date").innerText = finalDate;

const inputs = document.querySelectorAll("input");

const end = new Date(finalDate);

function clock() {
  const now = new Date();
  const end = new Date(finalDate);
  const diff = (end - now) / 1000;

  const day = Math.floor(diff / 3600 / 24);
  inputs[0].value = day;

  const hours = Math.floor((diff / 3600) % 24);
  inputs[1].value = hours;

  const minutes = Math.floor((diff / 60) % 60);
  inputs[2].value = minutes;

  const seconds = Math.floor(diff % 60);
  inputs[3].value = seconds;
}

clock();

setInterval(() => {
  clock();
}, 1000);
