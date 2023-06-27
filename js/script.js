const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const input = document.getElementById("email").value;
  if (localStorage) {
    localStorage.setItem("email", input);
  }
  input.value = "";
  window.location.href = "success.html"
  
//   console.log(input);
});

