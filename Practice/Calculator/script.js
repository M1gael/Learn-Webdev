function addNumbers(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)){   //!isNaN "NOT(isNotaNum)"
        var sum = num1 + num2;
        document.getElementById('result').textContent = 'The sum of the numbers are : ' + sum;
    }else{
        document.getElementById('result').textContent = 'One or both of the inputs are invalid:';
    }
}