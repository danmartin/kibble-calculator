function calcKibble() {
   var costInput = document.frm.bagCost.value.replace(/\$/g, ''); //strip dollar sign out of input for error control
   var step1 = document.frm.bagWeight.value * 2.5; //number of cups in bag
   var step2 = costInput / step1; //cost per cup
   var perDay = document.frm.feedCups.value * step2; // num of cups per day x cost per cup
   var perMonth = perDay * 30;
   var perYear = perDay * 365;
   var costArray = [perDay, perMonth, perYear];
   var term = ["day", "month", "year"];

   len = costArray.length; // length of array
  for (var i = 0; i < len; i++){
	   costArray[i] = parseInt(costArray[i] * 100); // Math
       costArray[i] = parseFloat(costArray[i]/100).toFixed(2); // Round and float decimal two points


       if(newVar != null){ // if newVar exists
newVar = newVar +  "<div class='" + term[i] + "'>The cost per " + term[i] + " is <span>$" + costArray[i].toString() + "</span></div>"; // then append string newVar
	   }else{
		  var newVar = "<div class='" + term[i] + "'>The cost per " + term[i] + " is <span>$" + costArray[i].toString() + "</span></div>"; // otherwise create variable of newVar as converted numeral to string
	   }
   }

          document.getElementById("footer").innerHTML= newVar; // print calculations to user

}

function submitEnter(){
          var keycode = window.event.keyCode;
          if(keycode == 13){ //checks to see if key pressed is 13 "Carriage Return"
	           calcKibble(); // If 13 , call function calcKibble
	           }
}
