export default function faq() {
    document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.faq-arrow');

  question.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight;

    document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
    document.querySelectorAll('.faq-arrow').forEach(ar => ar.classList.remove('open'));

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.classList.add('open');
    }
  });
});
}