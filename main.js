let inputBox = document.querySelector(".input-box"),
  textArea = inputBox.querySelector("textarea"),
  minNum = inputBox.querySelector(".min_num");

textArea.addEventListener("keyup", () => {
  let valLenght = textArea.value.length;

  minNum.innerHTML = valLenght;

  valLenght > 0
    ? inputBox.classList.add("active")
    : inputBox.classList.remove("active");

  valLenght > 100
    ? inputBox.classList.add("error")
    : inputBox.classList.remove("error");

});
