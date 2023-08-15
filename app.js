function tell(){
    let count = document.getElementById("cart-quantity"); 
    let cartNum = count.innerHTML;
    let newKey = parseInt(cartNum) + 1;
    let newCount = document.getElementById("cart-quantity");
    let nc = newCount.innerHTML = newKey;
    // let message = document.getElementsByClassName("")

    var name = localStorage.username; // Query a stored value.
name = localStorage["username"]; // Array notation equivalent
if (!name) {
 name = prompt("What is your name?"); // Ask the user a question.
 localStorage.username = name; // Store the user's response.
}
// Iterate through all stored name/value pairs
for(var name in localStorage) { // Iterate all stored names 
 var value = localStorage[name]; // Look up the value of each one
}

}