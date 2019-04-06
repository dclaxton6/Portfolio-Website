var i = 0; 
var c = 0;
$(document).ready(function() {
  var quotes = ["Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning.","To iterate is human, to recurse divine."," Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris."];
   var authors = ["- Rick Cook","- L. Peter Deutsch","- Larry Wall"];
  var colors = ["blue", "red", "green", "grey", "purple", "orange"]
  var twitterLinks = [
"http://twitter.com/share?text="+quotes[0]+" by "+authors[0]+"&url=https://codepen.io/daclaxton6/pen/yvgbZQ&hashtags=quotes,freeCodeCamp",
  "http://twitter.com/share?text="+quotes[1]+" by "+authors[1]+"&url=https://codepen.io/daclaxton6/pen/yvgbZQ&hashtags=quotes,freeCodeCamp",
    "http://twitter.com/share?text="+quotes[2]+" by "+authors[2]+"&url=https://codepen.io/daclaxton6/pen/yvgbZQ&hashtags=quotes,freeCodeCamp",
  
];
    $("#quoteButton").on("click", function(){
      
      $("#quote").html(quotes[i]);
      $("#author").html(authors[i]);
      document.getElementById("twitterLink").href=twitterLinks[i];
      document.getElementsByTagName("BODY")[0].style.backgroundColor = colors[c];
      document.getElementsByTagName("BODY")[0].style.transition = "background-color 3s";
document.getElementById("quote").style.color = colors[c];  
      document.getElementById("twitter").style.color = colors[c];  
      document.getElementById("tumblr").style.color = colors[c];  
document.getElementById("author").style.color = colors[c];   document.getElementById("copyright").style.backgroundColor = colors[c];
    var x = document.getElementsByClassName("changingColor2");
    x[0].style.backgroundColor = colors[c];
       i++;
      c++;
      if(i >= quotes.length){
        i = 0;
      }
      if(c >= colors.length){
        c = 0;
      }
    });  
  });