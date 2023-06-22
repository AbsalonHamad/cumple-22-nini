let wellcome = document.querySelector("#wellcome");
let happybirthday = document.querySelector("#happybirthday");

const next = () => {
  if (wellcome && happybirthday && wellcome.classList.contains("show")) {
    wellcome.classList.remove("show");
    happybirthday.classList.add("show");
  }
}

const preview = () => {
  if (wellcome && happybirthday && !wellcome.classList.contains("show")) {
    wellcome.classList.add("show");
    happybirthday.classList.remove("show");
  }
}