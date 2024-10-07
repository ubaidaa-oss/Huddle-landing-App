let overlayInput = document.querySelector('.overlay-input')
function validateEmail(email) {
    // Regular expression for validating email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Test the email against the regular expression
    if (regex.test(email)) {
      console.log( "Valid email address!");
      overlayInput.classList.add('none')


    } else {
       console.log("Invalid email address!");
      overlayInput.classList.remove('none')
    }
  }
  
  function btnHandler(){
      // Example usage
      const emailInput = document.querySelector('.inputs');
      let emailValue = emailInput.value;
      validateEmail(emailValue);
      console.log(emailValue)      
  }
