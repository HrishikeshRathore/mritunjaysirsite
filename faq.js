let items = document.querySelectorAll(".faq");

let length = items.length;

items.forEach((item) => {
  item.addEventListener("click", function () {
    item.children[1].style.display =
      item.children[1].style.display === "block"
        ? (item.children[1].style.display = "none")
        : (item.children[1].style.display = "block");
    item.children[0].classList.toggle("to-bottom");
    item.children[0].classList.toggle("to-top");
  });
});
