
function convertCurrency(){
    var input = document.getElementById("inputCurrency").value;
    var currencyTo = document.getElementById("currencyTo").value;
    var currencyFrom = document.getElementById("currencyFrom").value;
    var currencyOptionsLength = document.getElementById("currencyTo").length;
    var output = document.getElementById("outputCurrency");


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

function swapCurrency() {
    var currencyFrom = document.getElementById("currencyFrom").value;
    var currencyTo = document.getElementById("currencyTo").value;

    var FromStorageCurrency = document.getElementById("FromStorageCurrency").value;
    var ToStorageCurrency = document.getElementById("ToStorageCurrency").value;

    FromStorageCurrency = currencyFrom.toUpperCase();
    ToStorageCurrency = currencyTo.toLowerCase();

    document.getElementById("currencyFrom").value = ToStorageCurrency;  //Das Gleiche wie: 
    document.getElementById("currencyTo").value = FromStorageCurrency;  //      |
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

    convertCurrency()
}








function convertMeasurementUnits(){
    var input = document.getElementById("inputMeasurementUnits").value;
    var measurementUnitsTo = document.getElementById("measurementUnitsTo").value;
    var measurementUnitsFrom = document.getElementById("measurementUnitsFrom").value;
    var MeasurementUnitsOptionsLength = document.getElementById("measurementUnitsTo").length;
    var output = document.getElementById("outputMeasurementUnits");


    if(measurementUnitsFrom == "km"){
        if(measurementUnitsTo == "KM"){
            measurementUnitsTo = 1
        }else if(measurementUnitsTo == "M"){
            measurementUnitsTo = 1000
        }else if(measurementUnitsTo == "CM"){
            measurementUnitsTo = 100000
        }else if(measurementUnitsTo == "MM"){
            measurementUnitsTo = 1000000
        }else if(measurementUnitsTo == "MIM"){
            measurementUnitsTo =  1000000000
        }
    }else if(measurementUnitsFrom == "m"){
        if(measurementUnitsTo == "KM"){
            measurementUnitsTo = 0.001
        }else if(measurementUnitsTo == "M"){
            measurementUnitsTo = 1
        }else if(measurementUnitsTo == "CM"){
            measurementUnitsTo = 100
        }else if(measurementUnitsTo == "MM"){
            measurementUnitsTo = 1000
        }else if(measurementUnitsTo == "MIM"){
            measurementUnitsTo = 1000000
        }
    }else if(measurementUnitsFrom == "cm"){
        if(measurementUnitsTo == "KM"){
            measurementUnitsTo = 0.00001
        }else if(measurementUnitsTo == "M"){
            measurementUnitsTo = 0.01
        }else if(measurementUnitsTo == "CM"){
            measurementUnitsTo = 1
        }else if(measurementUnitsTo == "MM"){
            measurementUnitsTo = 10
        }else if(measurementUnitsTo == "MIM"){
            measurementUnitsTo = 10000
        }
    }else if(measurementUnitsFrom == "mm"){
        if(measurementUnitsTo == "KM"){
            measurementUnitsTo = 0.000001
        }else if(measurementUnitsTo == "M"){
            measurementUnitsTo = 0.001
        }else if(measurementUnitsTo == "CM"){
            measurementUnitsTo = 0.1
        }else if(measurementUnitsTo == "MM"){
            measurementUnitsTo = 1
        }else if(measurementUnitsTo == "MIM"){
            measurementUnitsTo = 1000
        }
    }else if(measurementUnitsFrom == "mim"){
        if(measurementUnitsTo == "KM"){
            measurementUnitsTo =  0.000000001
        }else if(measurementUnitsTo == "M"){
            currencyTo = 0.000001
        }else if(measurementUnitsTo == "CM"){
            measurementUnitsTo = 0.0001
        }else if(measurementUnitsTo == "MM"){
            measurementUnitsTo = 0.001
        }else if(measurementUnitsTo == "MIM"){
            measurementUnitsTo = 1
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

    var newMeasurementUnits = input * measurementUnitsTo;
    output.value = newMeasurementUnits;
}

function swapMeasurementUnits() {
    var measurementUnitsFrom = document.getElementById("measurementUnitsFrom").value;
    var measurementUnitsTo = document.getElementById("measurementUnitsTo").value;

    var FromStorageMeasurementUnits = document.getElementById("FromStorageMeasurementUnits").value;
    var ToStorageMeasurementUnits = document.getElementById("ToStorageMeasurementUnits").value;

    FromStorageMeasurementUnits = measurementUnitsFrom.toUpperCase();
    ToStorageMeasurementUnits = measurementUnitsTo.toLowerCase();



    document.getElementById("measurementUnitsFrom").value = ToStorageMeasurementUnits;  //Das Gleiche wie: 
    document.getElementById("measurementUnitsTo").value = FromStorageMeasurementUnits;  //      |
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

    convertMeasurementUnits()
}