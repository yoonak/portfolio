//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const parallax = document.querySelector('.parallax');
M.Parallax.init(parallax, {});

const btnFloating = document.querySelector('.btn-floating');
M.BtnFloating.init(btnFloating, {});

const datePicker = document.querySelector('.datepicker');
M.DatePicker.init(datePicker, {});



const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true,
    transition: 500,
    interval: 6000
    });
