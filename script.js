let button = document.querySelector(".submit");
let writtenResult = document.querySelector(".written-result");
let robImg = document.querySelector(".rob-img");
let rossImg = document.querySelector(".ross-img");
let andrewImg = document.querySelector(".andrew-img");
let zubinImg = document.querySelector(".zubin-img");
let joeImg = document.querySelector(".joe-img");
let aboutButton = document.querySelector(".about");
let aboutText = document.querySelector(".about-p");
let count = 0;
let countText = document.querySelector(".counter");
let scrollText = document.querySelector(".scroll-text");
let resultBox = document.querySelector(".result");

let zubin = "Zubin! (Bass)";
let rob = "Rob! (Guitar)";
let ross = "Ross! (Drums)";
let joe = "Joe! (Guitar)";
let andrew = "Andrew! (Keyboard)";

/* my dad taught me how to make a function like this - pretty useful i must say */
let reset = function() {
    zubinImg.style.display = "none";
    rossImg.style.display = "none";
    andrewImg.style.display = "none";
    robImg.style.display = "none";
    joeImg.style.display = "none";
};
let robFunction = function() {
    robImg.style.display = "block";
    robImg.style.marginLeft = "auto";
    robImg.style.marginRight = "auto";
};
let joeFunction = function() {
    joeImg.style.display = "block";
    joeImg.style.marginLeft = "auto";
    joeImg.style.marginRight = "auto";
};
let rossFunction = function() {
    rossImg.style.display = "block";
    rossImg.style.marginLeft = "auto";
    rossImg.style.marginRight = "auto";
};
let andrewFunction = function() {
    andrewImg.style.display = "block";
    andrewImg.style.marginLeft = "auto";
    andrewImg.style.marginRight = "auto";
};
let zubinFunction = function() {
    zubinImg.style.display = "block";
    zubinImg.style.marginLeft = "auto";
    zubinImg.style.marginRight = "auto";
};


aboutButton.onclick = function() {
    aboutText.style.display = "block";
};


button.onclick = function() {
    /* Saving user input */
    let animalInput = document.querySelector(".animalInput").value;
    let animal = animalInput.toLowerCase();
    let heightInput = document.querySelector(".heightInput").value;
    let height = Number(heightInput);
    let fruitvegInput = document.querySelector(".fruitvegInput").value;
    let fruitveg = fruitvegInput.toLowerCase();
    let weatherInput = document.querySelector(".weatherInput").value;
    let weather = weatherInput.toLowerCase();
    console.log(animal);
    console.log(height);
    console.log(fruitveg);
    console.log(weather);
    let resultSentence = "You are " + height + " inches tall, your favorite animal is a " + animal + ", you prefer " + fruitveg + ", and you like " + weather + " weather, so you must be ";

    scrollText.style.display = "block";

    count++;
    if (count <= 1) {
        countText.innerHTML = "This quiz has been taken " + count + " time.";
    } else {
        countText.innerHTML = "This quiz has been taken " + count + " times.";
    }
    countText.style.display = "block";

    /* RESULTS: ROB */
    if (animal === "parrot" && height <= 65 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "chinchilla" && height <= 65 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "shark" && height >= 66 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "penguin" && height >= 66 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    }

    /**/
    else if (animal === "tiger" && height <= 65 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "shark" && height <= 65 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "parrot" && height <= 65 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    }

    /**/
    else if (animal === "chinchilla" && height <= 65 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "shark" && height >= 66 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "penguin" && height >= 66 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + rob;
        robFunction();
    }






    /* RESULTS: ANDREW */
    else if (animal === "penguin" && height <= 65 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "chinchilla" && height >= 66 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    }

    /**/
    else if (animal === "shark" && height <= 65 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "penguin" && height <= 65 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    }

    /**/
    else if (animal === "shark" && height <= 65 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "tiger" && height <= 65 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "parrot" && height <= 65 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    } else if (animal === "chinchilla" && height >= 66 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + andrew;
        andrewFunction();
    }





    /* RESULTS: ZUBIN */
    else if (animal === "shark" && height <= 65 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "tiger" && height <= 65 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "parrot" && height <= 65 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "chinchilla" && height >= 66 && fruitveg === "fruits" && weather === "rainy") {
        button.innerHTML = "Scroll down!";
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    }

    /**/
    else if (animal === "penguin" && height <= 65 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "tiger" && height <= 65 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "chinchilla" && height >= 66 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    }

    /**/
    else if (animal === "shark" && height <= 65 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "penguin" && height <= 65 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    } else if (animal === "chinchilla" && height >= 66 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + zubin;
        zubinFunction();
    }





    /* RESULTS: ROSS */
    else if (animal === "shark" && height <= 65 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "penguin" && height <= 65 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    }

    /**/
    else if (animal === "shark" && height >= 66 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "penguin" && height >= 66 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "chinchilla" && height <= 65 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    }

    /**/
    else if (animal === "penguin" && height <= 65 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "tiger" && height <= 65 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    } else if (animal === "chinchilla" && height >= 66 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + ross;
        rossFunction();
    }





    /* RESULTS: JOE */
    else if (animal === "penguin" && height >= 66 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "shark" && height >= 66 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "vegetables" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "chinchilla" && height <= 65 && fruitveg === "fruits" && weather === "rainy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    }

    /**/
    else if (animal === "shark" && height >= 66 && fruitveg === "fruits" && weather === "sunny") {
        button.innerHTML = "Scroll down!";
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "penguin" && height >= 66 && fruitveg === "vegetables" && weather === "sunny") {
        button.innerHTML = "Scroll down!";
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "parrot" && height <= 65 && fruitveg === "fruits" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "chinchilla" && height <= 65 && fruitveg === "vegetables" && weather === "sunny") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    }

    /**/
    else if (animal === "shark" && height <= 65 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "penguin" && height <= 65 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "tiger" && height >= 66 && fruitveg === "fruits" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    } else if (animal === "parrot" && height >= 66 && fruitveg === "vegetables" && weather === "cloudy") {
        reset();
        writtenResult.innerHTML = resultSentence + joe;
        joeFunction();
    }
    /* lonely little else.... poor guy... */
    else /* (⌐■_■) */ {
        /* now he has a friend */
        writtenResult.innerHTML = "Something went wrong... make sure you answered every question! (Check for typos)";
    }
};