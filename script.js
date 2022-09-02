getJoke() ;
const jokeElement = document.getElementById("jokeText") ;

async function getJoke(){
    const joke = await fetch("https://icanhazdadjoke.com/slack");
    const jokeData = await joke.json() ;
    const jokeText = jokeData.attachments[0].text ;
    jokeElement.innerText = jokeText ;
}

getNews() ;
const newsImage = document.getElementById("news-image") ;
const titleEl = document.getElementById("news-title") ;

let article_number =0 ;
async function getNews(){
    const news = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1460467628fa4cb185f899bc5c55bc92") ;
    const newsData = await news.json() ;
    const newsTitle = newsData.articles[article_number].title ;
    titleEl.innerText = newsTitle ;
}

const buttonEl = document.getElementById("button") ;

buttonEl.addEventListener("click",function(){
    article_number++ ;
    getNews() ;
})