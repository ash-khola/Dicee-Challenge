document.body.addEventListener("click", function () {
    var ran1 = Math.floor(Math.random() * 6) + 1;
    var ran2 = Math.floor(Math.random() * 6) + 1;

    var imageNumber1 = "images/" + "dice" + ran1 + ".png";

    var newImg1 = document.querySelectorAll("img")[0];

    newImg1.setAttribute("src", imageNumber1);

    var imageNumber2 = "images/" + "dice" + ran2 + ".png";

    var newImg2 = document.querySelectorAll("img")[1];

    newImg2.setAttribute("src", imageNumber2);

    if (ran1 > ran2) {
        document.querySelector("h1").innerHTML = "&#128681 Player 1 wins!"
    }
    else if (ran2 > ran1) {
        document.querySelector("h1").innerHTML = "Player 2 wins! &#128681"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

});