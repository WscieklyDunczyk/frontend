const plneur = 0.23;
const plnusd = 0.27;
const eurpln = 4.29;
const eurusd = 1.14;
const usdpln = 3.75;
const usdeur = 0.87;

document.getElementById("oblicz").addEventListener("click", function(){
    var wartosc = document.getElementById("wartosc").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    if(p1 == "pln" && p2 == "eur"){
        var obl = ((wartosc*plneur).toFixed(2));
        document.getElementById("return").innerHTML = (`Kwota ${wartosc} po przeliczeniu z ${p1} na ${p2} jest równa ${obl} `);
    }
    else if(p1 == "pln" && p2 == "usd"){
        var obl = ((wartosc*plnusd).toFixed(2));
        document.getElementById("return").innerHTML = (`Kwota ${wartosc} po przeliczeniu z ${p1} na ${p2} jest równa ${obl} `);
    }
    else if(p1 == "eur" && p2 == "usd"){
        var obl = ((wartosc*eurusd).toFixed(2));
        document.getElementById("return").innerHTML = (`Kwota ${wartosc} po przeliczeniu z ${p1} na ${p2} jest równa ${obl} `);
    }
    else if(p1 == "eur" && p2 == "pln"){
        var obl = ((wartosc*eurpln).toFixed(2));
        document.getElementById("return").innerHTML = (`Kwota ${wartosc} po przeliczeniu z ${p1} na ${p2} jest równa ${obl} `);
    }
    else if(p1 == "usd" && p2 == "pln"){
        var obl = ((wartosc*usdpln).toFixed(2));
        document.getElementById("return").innerHTML = (`Kwota ${wartosc} po przeliczeniu z ${p1} na ${p2} jest równa ${obl} `);
    }
    else if(p1 == "usd" && p2 == "eur"){
        var obl = ((wartosc*usdeur).toFixed(2));
        document.getElementById("return").innerHTML = (`Kwota ${wartosc} po przeliczeniu z ${p1} na ${p2} jest równa ${obl} `);
    }
    else if(p1 == p2){
        document.getElementById("return").innerHTML = " BEZ SENSU ";
    }
});
