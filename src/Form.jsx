import React from "react";
import { useState } from "react";

export const registerUser = async (userData) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};

function Form() {
  const [values, setValues] = useState({
    userName: "",
    userEmail: "",
    userSubject: "",
    userComment: "",
  });

  const [success, setSuccess] = useState(false);

  const handelChange = (e) => {
    setValues(() => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // We make an API call, and when we get the succesfull response from the API
    // we change the setSuccess state to true
    registerUser(values).then(() => setSuccess(true));
    console.log(success);
  };

  return (
    <div className="form">
      <h2>Contact</h2>
      <p>Lets get in touch and talk about your next project.</p>
      <form>
        <input
          value={values.userName}
          name="userName"
          type="text"
          onChange={handelChange}
          placeholder="Name"
        />
        <input
          value={values.userEmail}
          name="userEmail"
          type="email"
          onChange={handelChange}
          placeholder="Email"
        />
        <input
          value={values.userSubject}
          name="userSubject"
          type="text"
          onChange={handelChange}
          placeholder="Subject"
        />
        <input
          value={values.userComment}
          name="userComment"
          type="text"
          onChange={handelChange}
          placeholder="Comment"
        />
      </form>
      <button onClick={handelSubmit}>SEND MESSAGE</button>
    </div>
  );
}

export default Form;
