const url = 'https://type.fit/api/quotes';
const hText = document.querySelector("[data-text]");
const hAuthor = document.querySelector("[data-author]");
const gearImg = document.querySelector(".gear-img");
const smallGearImg = document.querySelector(".smallgear-img");

async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        let max = data.length;
        let min = 0;
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let random = getRandomInt(min,max);
        let resText = data[random].text;
        let resAuthor = data[random].author;
        console.log(resText);
        console.log(resAuthor);
        hText.textContent = resText;
        hAuthor.textContent = resAuthor;
        gearImg.style.transform = "rotate(360deg)";
        gearImg.style.transitionDuration = "2s";
        smallGearImg.style.transform = "rotate(-360deg)";
        smallGearImg.style.transitionDuration = "2s";
}
getData();

function changeData(){
    gearImg.style.transform = "rotate(0deg)";
    gearImg.style.transitionDuration = "0s";
    smallGearImg.style.transform = "rotate(0deg)";
    smallGearImg.style.transitionDuration = "0s";
    getData();
}