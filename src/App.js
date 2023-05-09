import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
       phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-15 characters and shouldn't include any number or special character!",
      label: "Username",
      pattern: "^[A-Za-z]{3,15}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
       {
      id: 3,
      name: "phone",
      type: "phone",
      placeholder: "Phone",
      errorMessage: "It should be valid Phone Number!",
      label: "Phone",
      pattern: "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      required: true,
    },
    {
      id: 4,
      name: "Gender",
      type: "radio",
          value: "Male",
      placeholder: "Male",
      label: "Gender:  Male",
    },
    {
      id: 5,
      name: "Gender",
      type: "radio",
      placeholder: "Female",
      label: "Female",
      value: "Female",
        },
    {
      id: 6,
      name: "Gender",
      type: "radio",
      placeholder: "Other",
      label: "Other",
      value: "Other",
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-15 characters and include at least 1 upper-case letter, 1lower-case letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$`,
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;