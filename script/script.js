// Get the input box where we show the result
let inputBox = document.getElementById("inputBox");

// Get all the calculator buttons
let buttons = document.querySelectorAll('button');

// This will store the numbers and operators entered by the user
let string = "";

// Go through each button
buttons.forEach((element) => {
  // Add a click event for each button
  element.addEventListener('click', (b) => {
    // Get the text written on the button
    let value = b.target.innerText;

    // If the '=' button is clicked
    if (value === "=") {
      try {
        // Calculate the answer and show it in the input box
        string = String(eval(string));
        inputBox.value = string;
      } catch {
        // If something is wrong, show "Error"
        inputBox.value = "Error";
        string = "";
      }
    }

    // If the 'AC' button is clicked, clear everything
    else if (value === "AC") {
      string = "";
      inputBox.value = string;
    }

    // If the 'DEL' button is clicked, remove the last character
    else if (value === "DEL") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    }

    // If the '+/-' button is clicked, change the sign of the number
    else if (element.id === "plusminus") {// plusminus is used for adding +/- btn
      try {
        string = String(-eval(string));
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
        string = "";
      }
    }

    // If any number or operator is clicked, add it to the input
    else {
      string += value;
      inputBox.value = string;
    }
  });
});
