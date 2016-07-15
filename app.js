/****************************************************
*                     Precision                     *
****************************************************/
function myFunction() {
  var x = 999999999999999;
  var y = 9999999999999999;
  document.getElementById("precision").innerHTML = x + "<br>" + y;
}

/****************************************************
*                    Hexadecimal                    *
****************************************************/
function myHex() {
  document.getElementById("hex").innerHTML = "0xFF = " + 0xFF;
}

/****************************************************
*                     Infinity                      *
****************************************************/
function myInfinity() {
    var myNumber = 2;
    var txt = "";
    while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>";
    }
    document.getElementById("infi").innerHTML = txt;
}
