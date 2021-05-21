document.querySelector('.burger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active')
    document.querySelector('.site-nav__list').classList.toggle('active')
    document.body.classList.toggle('none-scroll')
  });
