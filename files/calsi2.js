function calculator() {
    var subject1=parseInt(document.getElementById('sub1').value);
    var subject2=parseInt(document.getElementById('sub2').value);
    var subject3=parseInt(document.getElementById('sub3').value);
    var subject4=parseInt(document.getElementById('sub4').value);
    var subject5=parseInt(document.getElementById('sub5').value);
    var subject6=parseInt(document.getElementById('sub6').value);
    var lab1=parseInt(document.getElementById('lab1').value);
    var lab2=parseInt(document.getElementById('lab2').value);
    var total,total_subject,total_lab;
    total_subject=(subject1+subject2+subject3+subject4+subject5+subject6)*3;
    total_lab=(lab1+lab2)*2;
    total1=total_subject+total_lab;
    total=total1/22;
    percentage=(total-0.7)*10;
    //console.log(total);
    document.getElementById("calci").innerHTML = "The sgpa is :" + total.toFixed(2);
    document.getElementById("calci1").innerHTML = "The percentage is :" + percentage.toFixed(2) +"%";
    }