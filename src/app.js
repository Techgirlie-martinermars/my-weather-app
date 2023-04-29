function changeCity() {
  let city = prompt("What city do you live in?");
  let temperature = prompt("What is the temparature?");
  let h1 = document.querySelector("h1");
  if (temperature >= 0) {
    h1.innerHTML = "😊<br/> Currently" + "" + temperature + "° in" + "" + city;
  } else {
    h1.innerHTML = "😢<br/> Currently" + "" + temperature + "° in" + "" + city;
  }
}

let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);
