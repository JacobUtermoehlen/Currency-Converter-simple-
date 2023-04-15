
function convert(){
    var input = document.getElementById("input").value;
    var currencyTo = document.getElementById("currencyTo").value;
    var currencyFrom = document.getElementById("currencyFrom").value;
    var currencyOptionsLength = document.getElementById("currencyTo").length;
    var  output = document.getElementById("output");


    if(currencyFrom == "eur"){
        if(currencyTo == "USD"){
            currencyTo = 1.10
        }else if(currencyTo == "TRY"){
            currencyTo = 21.27
        }else if(currencyTo == "GBP"){
            currencyTo = 0.88
        }else if(currencyTo == "EUR"){
            currencyTo = 1
        }else if(currencyTo == "JPY"){
            currencyTo = 147.21
        }
    }else if(currencyFrom == "usd"){
        if(currencyTo == "USD"){
            currencyTo = 1
        }else if(currencyTo == "TRY"){
            currencyTo = 19.36
        }else if(currencyTo == "GBP"){
            currencyTo = 0.81
        }else if(currencyTo == "EUR"){
            currencyTo = 0.91
        }else if(currencyTo == "JPY"){
            currencyTo = 133.77
        }
    }else if(currencyFrom == "try"){
        if(currencyTo == "USD"){
            currencyTo = 0.052
        }else if(currencyTo == "TRY"){
            currencyTo = 1
        }else if(currencyTo == "GBP"){
            currencyTo = 0.042
        }else if(currencyTo == "EUR"){
            currencyTo = 0.047
        }else if(currencyTo == "JPY"){
            currencyTo = 6.90
        }
    }else if(currencyFrom == "gbp"){
        if(currencyTo == "USD"){
            currencyTo = 1.24
        }else if(currencyTo == "TRY"){
            currencyTo = 24.05
        }else if(currencyTo == "GBP"){
            currencyTo = 1
        }else if(currencyTo == "EUR"){
            currencyTo = 1.13
        }else if(currencyTo == "JPY"){
            currencyTo = 166.05
        }
    }else if(currencyFrom == "jpy"){
        if(currencyTo == "USD"){
            currencyTo = 0.0075
        }else if(currencyTo == "TRY"){
            currencyTo = 0.14
        }else if(currencyTo == "GBP"){
            currencyTo = 0.0060
        }else if(currencyTo == "EUR"){
            currencyTo = 0.0068
        }else if(currencyTo == "JPY"){
            currencyTo = 1
        }
    }    


    var newCurrencyTag = ""    
    switch(currencyTo){

        case "USD":
            newCurrencyTag = "test";
            break;
        case "TRY":
            newCurrencyTag = "₺";
            break;
        case "GBP":
            newCurrencyTag = "£";
            break;
        case "EUR":
            newCurrencyTag = "€";
            break;          
    }

    var newCurrency = input * currencyTo;
    output.value = newCurrency.toFixed(2);
}

function swap() {
    var currencyFrom = document.getElementById("currencyFrom").value;
    var currencyTo = document.getElementById("currencyTo").value;

    var FromStorage = document.getElementById("FromStorage").value;
    var ToStorage = document.getElementById("ToStorage").value;

    FromStorage = currencyFrom.toUpperCase();
    ToStorage = currencyTo.toLowerCase();

    document.getElementById("currencyFrom").value = ToStorage;  //Das Gleiche wie: 
    document.getElementById("currencyTo").value = FromStorage;  //      |
                                                                //      V
    /*if(ToStorage == "EUR"){
        document.getElementById("currencyFrom").value = "eur";
    }else if(ToStorage == "USD"){
        document.getElementById("currencyFrom").value = "usd";  
    }else if(ToStorage == "TRY"){
        document.getElementById("currencyFrom").value = "try";      <---
    }else if(ToStorage == "GBP"){
        document.getElementById("currencyFrom").value = "gbp";
    }else if(ToStorage == "JPY"){
        document.getElementById("currencyFrom").value = "jpy";
    }

    if(FromStorage == "eur"){
        document.getElementById("currencyTo").value = "EUR";
    }else if(FromStorage == "usd"){
        document.getElementById("currencyTo").value = "USD";
    }else if(FromStorage == "try"){
        document.getElementById("currencyTo").value = "TRY";        <---
    }else if(FromStorage == "gbp"){
        document.getElementById("currencyTo").value = "GBP";
    }else if(FromStorage == "jpy"){
        document.getElementById("currencyTo").value = "JPY";
    }*/

    convert()
}
