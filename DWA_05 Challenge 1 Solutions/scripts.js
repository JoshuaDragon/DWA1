// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values from form
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario: Starting program state
  // GIVEN that the submit button has not been pressed yet
  // AND the code has just loaded
  // THEN “NO calculation performed” should be displayed at the bottom
  if (!dividend && !divider) {
    result.innerText = "No calculation performed";
    return;
  }

  // Scenario: Dividing numbers result in a whole number
  // GIVEN that the submit button is pressed
  // WHEN 20 is entered into the first input
  // AND 10 is entered into the second input
  // THEN 2 should be displayed at the bottom
  if (dividend && divider) {
    // Validation: Check if values are numbers
    if (isNaN(dividend) || isNaN(divider)) {
      // Log error and display message
      console.error("Invalid input. Please enter valid numbers.");
      result.innerText = "Something critical went wrong. Please reload the page";
      return;
    }

    // Validation: Check if values are not empty
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
    }

    // Validation: Check if divider is not zero
    if (divider == 0) {
      console.error("Cannot divide by zero.");
      result.innerText = "Division not performed. Cannot divide by zero. Try again";
      return;
    }

    // Perform division
    const quotient = dividend / divider;

    // Scenario: Dividing numbers result in a decimal number
    // GIVEN that the submit button is pressed
    // WHEN 20 is entered into the first input
    // AND 3 is entered into the second input
    // THEN the number 6 with no decimal should be shown
    if (Number.isInteger(quotient)) {
      result.innerText = quotient;
    } else {
      result.innerText = "The number " + quotient.toFixed(0) + " with no decimal should be shown";
    }
  } else {
    result.innerText = "Invalid input. Please enter valid numbers.";
    console.error("Invalid input. Please enter valid numbers.");
  }
});