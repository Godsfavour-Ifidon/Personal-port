const text = document.querySelector(".text p");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (body.getAttribute("data-theme") === "dark") {
    icon.innerHTML = "Light mode";
    body.setAttribute("data-theme", null);
  } else {
    body.setAttribute("data-theme", "dark");
    icon.innerHTML = "Dark mode";
  }
});

text.innerHTML = text.innerText
  .split(" ")
  .forEach((char, i) => {
    ` <span style="transfrom: rotate(${i * 8.3}deg)">${char}</span>`;
  })
  .join("-");
