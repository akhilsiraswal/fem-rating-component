let p_tag = document.getElementById("email_conformation");
// console.log(p_tag)
p_tag.textContent = ` A confirmation email has been sent to ${localStorage.getItem(
  "email"
)}. Please
open it and click the button inside to confirm your subscription.
`;
