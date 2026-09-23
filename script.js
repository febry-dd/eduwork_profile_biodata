const portfolioModal = document.getElementById('portfolioModal');

portfolioModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const title = button.getAttribute('data-title');
    const description = button.getAttribute('data-description');

    portfolioModal.querySelector('.modal-title').textContent = title;
    portfolioModal.querySelector('#portfolioModalDescription').textContent = description;
});