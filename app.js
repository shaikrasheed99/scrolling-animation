const observer = new IntersectionObserver((entities) => {
    entities.forEach((entity) => {
        if (entity.isIntersecting) {
            entity.target.classList.add('show');
        } else {
            entity.target.classList.remove('show');
        }
    })
});

const hidden = document.querySelectorAll('.hide');

hidden.forEach((element) => {
    observer.observe(element);
});