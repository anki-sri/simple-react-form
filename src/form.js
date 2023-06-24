// import React, { useState } from "react";


// function Form() {

//     // const [userName, setuserName] = useState('');
//     // const [userPass, setuserPass] = useState('');

//     return (
//         <form>
//             <label>NAME:</label>
//             <input type="text" value={userName}
//                 onChange={(e) => {
//                     console.log(e)
//                 }} /><br />
//             <label>PASSWORD:</label>
//             <input type="password" value={userPass}
//                 onChange={(e) => {
//                     console.log(e)
//                 }} /><br />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default Form;

import React, { useState } from 'react';

function Form() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Submitted:', name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onBlur={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
