let img_src = document.querySelector('img');

let pic  = 1;
setInterval(()=>{
    let imgLink = `img/pic${pic}.png`;
    img_src.src  = imgLink;
    pic++;
    if(pic>3){
        pic  =1;
    }
},3000)


const menuActivator = (option)=>{
    let menuBtn = document.querySelector('#menu-btn');
    let searchBtn = document.querySelector('#search-btn');
    menuBtn.addEventListener("click",()=>{
    let navBar  = document.querySelector('nav');
    navBar.classList.toggle('active');
    if(option){
        console.log('here')
        let searchBox = document.querySelector('.search');
        // searchBox.style.zIndex = "-1";
        searchBox.classList.toggle('deactive');
    }
    else{
        console.log('here not')
        let searchBox = document.querySelector('.search');
        // searchBox.style.zIndex = "1";
    }
    })
}

menuActivator();






