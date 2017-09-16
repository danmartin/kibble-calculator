function calcKibble() {

    for (var i = 0; i < document.frm.kibbleSize.length; i++) {

        if (document.frm.kibbleSize[i].checked) {
            var kDensity = document.frm.kibbleSize[i].value;

        }

    }
    if (document.frm.kibbleSize[3].checked) {
        var boxerBag = document.frm.bagWeight.value * 4;
    } else {
        var boxerBag = document.frm.bagWeight.value;
    }


    var costInput = document.frm.bagCost.value.replace(/\$/g, ''); //strip dollar sign out of input for error control 


    var step1 = boxerBag * kDensity; //number of cups in bag
    step2 = costInput / step1, //cost per cup
    perDay = document.frm.feedCups.value * step2, // num of cups per day x cost per cup
    perMonth = perDay * 30,
    perYear = isNaN(perDay) ? 'None' : perDay * 365,
    costArray = [perDay, perMonth, perYear],
    term = ["day", "month", "year"];
    if(costArray.indexOf('None') > 0){
        var newVar = "<div class='month'>All fields must be filled with numeric characters only.</div>";
    }else{  
        len = costArray.length; // length of array
        for (var i = 0; i < len; i++) {
            costArray[i] = parseInt(costArray[i] * 100); // Math
            costArray[i] = parseFloat(costArray[i] / 100).toFixed(2); // Round and float decimal two points


            if (newVar != null) { // if newVar exists
                newVar = newVar + "<div class='" + term[i] + " resultblock'><span class='one'>The cost per " + term[i] + " is </span><span class='two'>$" + costArray[i].toString() + "</span></div>"; // then append string newVar
            } else {
                var newVar = "<div class='" + term[i] + " resultblock'><span class='one'>The cost per " + term[i] + " is </span><span class='two'>$" + costArray[i].toString() + "</span></div>"; // otherwise create variable of newVar as converted numeral to string 
            }
        }
    }
    //document.getElementById("calculator").style.display = 'none';
    document.getElementById("footer").innerHTML = newVar; // print calculations to user

    //document.getElementById("kibbledata").style.display = 'block';
    //document.getElementById("kibbledata").style.opacity = '1';

}

function submitEnter() {
    var keycode = window.event.keyCode;
    if (keycode == 13) {
        calcKibble();
    }
}




/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function() {
    'use strict';

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
        document.createTextNode('@-ms-viewport{width:auto!important}'))
        document.querySelector('head').appendChild(msViewportStyle)
    }

})();