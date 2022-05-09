const btnSidebar = document.querySelector('#btnSidebar');
const sidebar = document.querySelector('.sidebar');

btnSidebar.addEventListener('click', sideHandler)
function sideHandler(){
    btnSidebar.classList.toggle('btnOpen')
    sidebar.classList.toggle('showSidebar')
    sidebar.classList.toggle('hideSidebar')
}
