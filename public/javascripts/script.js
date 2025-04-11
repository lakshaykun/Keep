const cards = document.querySelectorAll(".card");
const cardModal = document.querySelector("#cardModal");
const contentModal = document.querySelector('#contentModal');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        cardModal.classList.add('show');
    })
})


cardModal.addEventListener('click', (event) => {
    if (!contentModal.contains(event.target)) {
        cardModal.classList.remove('show');
    }
});
