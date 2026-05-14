function learnMore(){

alert("Waste management helps protect the environment!");

}


document.getElementById("feedbackForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

alert("Thank you "+name+" for your feedback!");

});