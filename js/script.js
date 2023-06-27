function isValid(input) {
  console.log(input)
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.match(validRegex)) {
    return false;
  }
  return true;
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let input = document.getElementById("email").value;
  if (!isValid(input)) {
    var label1 = document.getElementById("label2");
    label1.style.visibility = "visible";
    var inputStyle = document.getElementById("email");
    inputStyle.style.backgroundColor = "rgb(255, 210, 207)";
    inputStyle.style.color =  "hsl(4, 100%, 67%)";

  } else {
    if (localStorage) {
      localStorage.setItem("email", input);
    }
    input.value = "";
    window.location.href = "success.html";
  }

  document.getElementById("email").value = "";
  //   console.log(input);
});
