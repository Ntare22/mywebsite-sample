function nextQuote(){
      let next;
      const quotes = document.getElementsByClassName("pwrap");
      for(i=0; i< quotes.length; ++i) {
        if(quotes[i].classList[1] == "active"){
          quotes[i].classList.remove("active");
          next = ++i;
        };
      };
      if(next == quotes.length){
        next = 0;
      }
      quotes[next].classList.add("active")
      setTimeout(nextQuote, 4000);
    }

    function callQuotes(){
      setTimeout(nextQuote, 4000);
    }
    callQuotes();