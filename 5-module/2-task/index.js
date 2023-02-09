function toggleText() {
  const toggleBtn = document.querySelector(".toggle-text-button");
  const toggleTxtBtn = document.querySelector("#text");

  toggleBtn.addEventListener("click", () => {
    return (toggleTxtBtn.hasAttribute("hidden")) ? toggleTxtBtn.hidden = "" : toggleTxtBtn.hidden = "true"
  })
}
