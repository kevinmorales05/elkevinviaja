
export function openMenuOptions() {
        console.log('Open');
        let menu = document.querySelector('.navigation');
        menu.style.display='block';
        let closeMenuBTN = document.querySelector('#close');
        menu.style.display='block';
        let openMenuBTN = document.querySelector('#open');
        menu.style.display='none';
    }
export function closeMenuOptions() {
        console.log('Close');
        let menu = document.querySelector('.navigation');
        menu.style.display='none';
        let closeMenuBTN = document.querySelector('#close');
        menu.style.display='none';
        let openMenuBTN = document.querySelector('#open');
        menu.style.display='block';    
    }
  

