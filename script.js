function createCard(tittle, cname, views, years, duration, image) {

    let viewStr

    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K"
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${image}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
<h1>${tittle}</h1>
<p>${cname}. ${viewStr} views. ${years} years old</p>
    </div>
</div> `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("K.G.F", "Film Industry", 560000, 6, "2:56:15", "img.jpg")

createCard("K.G.F CHAPTER 2", "Film Industry", 2600000 , 2, "2:56:15", "img.jpg")

