const quoteText=document.querySelector(".quote-text");
const quoteAuthor=document.querySelector(".quote-by");
const quoteButton=document.querySelector(".quote-btn");
const tweetButton=document.querySelector(".tweet-btn");
const spinWheel=document.querySelector(".loader");
const quoteCard=document.querySelector(".quote-card");
let quoteData='';

function loading(){
    spinWheel.hidden=false;
    quoteCard.hidden=true;

}

function complete(){
    spinWheel.hidden=true;
    quoteCard.hidden=false;

}

async function getQuote(){
    loading();
const response=await fetch("https://api.quotable.io/random");
 quoteData=await response.json();
    if(response.ok){
        complete();
    quoteText.textContent=`"${quoteData.content}"`;
    quoteAuthor.textContent=quoteData.author;
    console.log(quoteData);
    }
    else{
        quoteText.textContent="Error Occured";
        console.log(quoteData);
    }
}

function clickHandler(){
    getQuote();
    }
    
function tweetHandler(){
        if(quoteData){
            const tweetURL=`https://twitter.com/intent/tweet?text=${quoteData.content} - ${quoteData.author}`;
            window.open(tweetURL,'_blank');
        }
        else{
            console.log("No data yet");
        }
    }

getQuote();



quoteButton.addEventListener('click',clickHandler);
tweetButton.addEventListener('click',tweetHandler);
