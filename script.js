const apiurl='https://api.quotable.io/random'
let quotecontent=document.getElementById("quotecontent")
let quoteauthor=document.getElementById("quoteauthor")

async function getquote(url){
    const response=await fetch(url)
    var data=await response.json()
    quotecontent.innerHTML=data.content
    quoteauthor.innerHTML=data.author

}
getquote(apiurl)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quotecontent.innerHTML + "----by " + quoteauthor.innerHTML,"Tweet Window","width:600","height:300")
}