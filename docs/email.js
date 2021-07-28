const validTime = document.querySelector(".valid-time");
const validBtn = document.querySelector(".valid-btn");
const sendMessage = document.querySelector(".send");
const jwtInput = document.querySelector(".jwt");

let disabled = true;
let timer;
let loop;

function Timer() {
  validTime.innerText = `${Math.floor(timer / 60)}분 ${timer % 60}초`;
  timer -= 1;
  if (timer < 0) {
    validTime.style.display = "none";
    sendMessage.style.display = "none";
    clearInterval(loop);
  }
}

validBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validTime.style.display = "block";
  sendMessage.style.display = "block";

  timer = 60 * 5;
  if (loop) clearInterval(loop);

  Timer();
  loop = setInterval(Timer, 1000);
});

const jwt = new URLSearchParams(window.location.search)
  .get("jwt")
  .replace("<", "&lt;")
  .replace(">", "&gt;")
  .replace('"', "&quot;");
jwtInput.value = jwt;
