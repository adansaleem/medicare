let navlinks = document.querySelector('.navlinks');
document.querySelector('#menu-btn').onclick = () =>{
    navlinks.classList.toggle('active');
}

window.onscroll = () => {
    navlinks.classList.remove('active');
}