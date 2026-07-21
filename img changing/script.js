let img1 = "https://downloadwap.com/thumbs2/wallpapers/p2/2019/nature/15/d7ce6d1013041081.jpg";
let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zZ578GWZ9O6K_AkPCgoEumr3y2wOZ7oadTtViIksiXuKVw-jTvJqQruk&s=10";
function changeImg() {
    let img = document.querySelector("img");

    if (img.src === img1) {
        img.src = img2;
    } else {
        img.src = img1;
    } }