const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((button) => {
  button.addEventListener("click", function () {
    const accordionDesc = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    if (accordionDesc.style.maxHeight) {
      accordionDesc.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
