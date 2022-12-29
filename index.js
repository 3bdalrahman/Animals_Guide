let landingpage = document.querySelector(".main");
let imgsarray = ["pexels-tom-fisk-2739666.jpg","wallpaperflare.com_wallpaper (3).jpg"];


setInterval(() => {
    let random = Math.floor(Math.random() * imgsarray.length);
    landingpage.style.backgroundImage = 'url("imgs/' +imgsarray[random] +'")';
}, 2000);