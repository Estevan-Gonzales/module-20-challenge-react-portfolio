import { useState } from 'react';

function Form() {

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'userName') {
          setUserName(inputValue);
        } else {
          setPassword(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
          setErrorMessage('Email or username is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!checkPassword(password)) {
          setErrorMessage(
            `Choose a more secure password for the account: ${userName}`
          );
          return;
        }
        alert(`Hello ${userName}`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setPassword('');
        setEmail('');
      };

      return (
        <div className="container text-center">
          <h1>Hello</h1>
          <form className="form" onSubmit={handleFormSubmit}>

            <input
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
            <input
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />

            <input
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Message"
            />
            <button type="submit">Submit</button>
          </form>

        </div>
      );

}

export default Form;
