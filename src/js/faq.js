export function initFaq() {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
      const answer = item.querySelector(".faq__answer");
      const arrow = item.querySelector(".faq__arrow");
      answer.classList.toggle("faq__answer--active");
      arrow.classList.toggle("faq__arrow--active");
    });
  });
}
