const btnE1 = document.getElementById("btn");

const apiURL = "https://api.quotable.io/random";

const quoteE1= document.getElementById("quote");

const authorE1 = document.getElementById("author");



async function getQuote(){
  try {
    btnE1.innerText = "loading....";
    btnE1.disable = true;
    quoteE1.innerText = "Updating...";
    authorE1.innerText = "Updating...";
 
  const response = await fetch(apiURL);
  const data = await response.json();
  const quoteContent = data.content;
  const quoteAuthor = data.author;
  quoteE1.innerText = quoteContent;
  authorE1.innerText = "~" +" " + quoteAuthor;
  btnE1.innerText = "Get a Quote";
  btnE1.disable = false;
  console.log(data); 
  } catch (error) {
    console.log(error);
    quoteE1.innerText = "An error happened , please try again later";
    authorE1.innerText = "error occur !!! ";
    btnE1.innerText = "Get a quote";
    btnE1.disable = false;
  }
  
}

getQuote();


btnE1.addEventListener("click", getQuote)