var val1="";
var val2="";
var operator="";


function addNum(n) {
  let total_sum = document.getElementById("result");
  let c = total_sum.innerHTML;
  if(n == ".") {
    // Corner case check: do not allow multiple periods
    if(c.indexOf(".") > -1) {
      return null;
    }
    // Corner case check: add 0 if total_sum is blank
    if (c == "") {
      total_sum.innerHTML = "0.";
      return null;
    }
  }


  total_sum.innerHTML = c.concat(n);


}


function clearButt () {
  let total_sum = document.getElementById("result");
  total_sum.innerHTML = "";
  val1 = "";
  val2 = "";
  operator = "";
}





function solve() {
  var numTotal;
  // if = is entered without an operator sign used, nothing happens.
  if (operator == "") {
    return null;

}

  val2 = document.getElementById("result").innerHTML;
  if (operator == "+") {
    numTotal = parseFloat(val1) + parseFloat(val2);
    document.getElementById('result').innerHTML = numTotal;
    val1 = numTotal;
  }

  if (operator == "-") {
    numTotal = val1 - val2;
    document.getElementById('result').innerHTML = numTotal;
    val1 = numTotal;
  }


  if (operator == "*") {
    numTotal = val1 * val2;
    document.getElementById('result').innerHTML = numTotal;
    val1 = numTotal;
  }

  if (operator == "/") {
    numTotal = val1 / val2;
    document.getElementById('result').innerHTML = numTotal;
    val1 = numTotal;
  }

}

function oppe(o) {
  solve();
  val1 = document.getElementById("result").innerHTML;
  operator = o;
  document.getElementById('result').innerHTML = "";

}
