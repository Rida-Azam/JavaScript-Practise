function getNum(num) {
    console.log(num)
 document.getElementById('result').value+=num;
    
}

function clearSrc() {

     document.getElementById('result').value="";

}

function remNum() {
var res=document.getElementById('result').value;
document.getElementById('result').value=document.getElementById('result').value.slice(0,res.length-1);

}

function getAns() {
    document.getElementById('result').value= eval(document.getElementById('result').value)
    console.log(document.getElementById('result').value);
    
}

    function generateRandomNumber() {
        var randomNumber = Math.random();
        document.getElementById("result").value = randomNumber;
      }



      function calculateFactorial() {
        var value = parseInt(document.getElementById("result").value);
        var factorial = 1;
        for (var i = 2; i <= value; i++) {
          factorial *= i;
        }
        document.getElementById("result").value = factorial;
      }



      function calculatePower() {
        var expression = document.getElementById("result").value;
        var base = expression.split('^')[0];
        var exponent = expression.split('^')[1];
        var power = Math.pow(base, exponent);
        document.getElementById("result").value = power;
      }
