// Showing Menu
let nav_menu1 = document.getElementById("nav_menu");
let toggle1 = document.getElementById("toggle");
let close1 = document.getElementById("close");

if (toggle1){
    toggle1.addEventListener('click', () =>{
        nav_menu1.classList.add('showmenu');
    });
}

if (close1){
    close1.addEventListener('click', () =>{
        nav_menu1.classList.remove('showmenu');
    });
}

// Removing menu when using clicks on particular links.
let link1 = document.querySelectorAll('.link');
function linkAction(){
    let nav_menu1 = document.getElementById('nav_menu');
    nav_menu1.classList.remove('showmenu');
}
link1.forEach(n => n.addEventListener('click', linkAction));


// Showing some magic on skills:
// Will update in future for some event on skills;


// Qualification Tabs:
// Will update in future for both Job and Tabs:


// Services Modal for view:
let serviceBtn = document.querySelector('.service-button');
let servicemod = document.querySelector('.services-modal');
let Close1 = document.querySelector('.services-modal-close');

serviceBtn.onclick = function(){
    servicemod.classList.add('active-modal');
}

Close1.onclick = function(){
    servicemod.classList.remove('active-modal');
}

let B1 = document.getElementById('b1');
let C1 = document.getElementById('c1');
let S1 = document.getElementById('s1');

B1.onclick = function(){
    S1.classList.add('active-modal');
}

C1.onclick = function(){
    S1.classList.remove('active-modal');
}


//  Scroll Section Active Link;
// Will Update in future.


// Show ScrollUp Icon
function scrollUp(){
    let scrollup = document.getElementById('scroll-up');

    if (this.scrollY >= 500){
        scrollup.classList.add('show-scroll');
    }else{
        scrollup.classList.remove('show-scroll');
    }
} 
window.addEventListener('scroll', scrollUp)


// Dark Light Theme:
// Will Update in future: