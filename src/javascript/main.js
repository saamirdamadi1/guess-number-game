let gameLoading = document.getElementsByClassName("game-loading");

let body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".game-loading").remove();
    body.classList.remove("overflow-hidden")
  }, 5000);
});

let secretBox = document.querySelector(".secret-box");
let forminp = document.querySelector(".forminp");
let numinp1 = document.querySelector(".numinp");
let container = document.querySelector(".game-container");
let container2 = document.querySelector(".game-container2");
let container3 = document.querySelector(".game-container3");
let container4 = document.querySelector(".game-container4");
let container5 = document.querySelector(".game-container5");
let mnumber = document.querySelector(".mnumber");
let startGameText = document.querySelector(".start-game-text");
let check = document.querySelector(".check");
let again = document.querySelector(".again");
let recordt = document.querySelector(".recordt");
let secretNum = Math.trunc(Math.random() * 20) + 1;
let numberm = 20;
let numberm2 = 0;
mnumber.textContent = `💯 تعداد دفعات باقی مانده: ${numberm}`;
recordt.textContent = `🏆 رکورد: ${numberm2}`;
check.addEventListener("click", (e) => {
  e.preventDefault();
  let numinp = Number(numinp1.value);
  let cheked = numinp === secretNum;
  if (!numinp) {
    startGameText.textContent = "⛔ عدد به درستی وارد نشده";
  } else if (cheked) {
    startGameText.textContent = "🎉 شما برنده شدید";
    container.classList.add("bg-green-200");
    container2.classList.add("bg-green-300");
    container3.classList.add("bg-green-400");
    container4.classList.add("bg-green-500");
    secretBox.textContent = secretNum;
    container5.classList.add("bg-green-600");
    again.classList.add("bg-green-700");
    check.classList.add("hidden");
    if (numberm2 < numberm) {
      numberm2 = numberm;
      recordt.textContent = `🏆 رکورد: ${numberm2}`;
    }
  } else if (numinp > secretNum) {
    startGameText.textContent = "📉 عدد مخفی کوچکتر است";
    numberm--;
    mnumber.textContent = `💯 تعداد دفعات باقی مانده: ${numberm}`;
        if (numberm === 0) {
        startGameText.textContent = "❌ شما بازی را باختید";
        secretBox.textContent = secretNum;
      check.classList.add("hidden");
      again.classList.add("bg-red-700");
      container.classList.add("bg-red-400");
      container2.classList.add("bg-red-300");
      container3.classList.add("bg-red-400");
    container4.classList.add("bg-red-500");
    container5.classList.add("bg-red-600");      
  }
  } else if (numinp < secretNum) {
    startGameText.textContent = "📈 عدد مخفی بزرگتر است";
    numberm--;
    mnumber.textContent = `💯 تعداد دفعات باقی مانده: ${numberm}`;
    if (numberm === 0) {
      startGameText.textContent = "❌ شما بازی را باختید";
      secretBox.textContent = secretNum;
      check.classList.add("hidden");
      again.classList.add("bg-red-700");
      container.classList.add("bg-red-400");
      container2.classList.add("bg-red-300");
      container3.classList.add("bg-red-400");
    container4.classList.add("bg-red-500");
    container5.classList.add("bg-red-600");      
  }
}
});

again.addEventListener("click", () => {
  startGameText.textContent = "";
  container.classList.remove("bg-green-200");
  container2.classList.remove("bg-green-300");
  container3.classList.remove("bg-green-400");
    container4.classList.remove("bg-green-500");
    container5.classList.remove("bg-green-600");
    again.classList.remove("bg-green-700");
    check.classList.remove("hidden");
    again.classList.remove("bg-red-700");
    container.classList.remove("bg-red-400");
    container2.classList.remove("bg-red-300");
    container3.classList.remove("bg-red-400");
    container4.classList.remove("bg-red-500");
    container5.classList.remove("bg-red-600");      
    container.classList.add("bg-[#75777c]");
    container2.classList.add("bg-[#777c86ea]");
    container3.classList.add("bg-[#75777c]");
    container4.classList.add("bg-[#75777c]");
    container5.classList.add("bg-gray-400");
    again.classList.add("bg-gray-700");
    check.classList.add("block");
    secretNum = Math.trunc(Math.random() * 20) + 1;
    secretBox.textContent = "?";
    numberm = 20;
    mnumber.textContent = `💯 تعداد دفعات باقی مانده: ${numberm}`;
})
