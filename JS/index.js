const btnSidebar = document.querySelector('#btnSidebar');
const sidebar = document.querySelector('.sidebar');

btnSidebar.addEventListener('click', sideHandler)
function sideHandler(){
    btnSidebar.classList.toggle('btnOpen')
    sidebar.classList.toggle('showSidebar')
    sidebar.classList.toggle('hideSidebar')
}
//          Shuttle 


//          info shuttle !!!

const more_info = document.querySelector('#more-info')
const infoShuttle = document.querySelector('.information_shuttle');
more_info.addEventListener('click' , more_infoHandler)
function more_infoHandler(){
    infoShuttle.classList.toggle('show_infoShuttle');
    infoShuttle.classList.toggle('hight_info_shuttle')
}

// close information shuttle 
const closeInfo = document.querySelector('#close-info');
closeInfo.addEventListener('click',closeInfoHandler);
function closeInfoHandler(){
    infoShuttle.classList.toggle('show_infoShuttle');
    infoShuttle.classList.toggle('hight_info_shuttle')
}

//                  type text info shuttle
