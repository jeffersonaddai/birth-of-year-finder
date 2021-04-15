function calculate() {
	
    var number = document.getElementById("number").value;
    
    if (number == "" || number == 0) {
        
        window.alert("Please type your correct age!");
        return;
    }
    
    var date = new Date().getFullYear();
    
    var birthyear = number - date;
    
    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your birth year is " + birthyear;
    
}






document.getElementById("year").style.display = "none";

document.getElementById("button").onclick = function() {  calculate();  };
