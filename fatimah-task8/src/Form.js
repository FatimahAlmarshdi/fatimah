import React from "react";
import {useForm} from "react-hook-form";

// import css file for styling
// اجذفي هذا الملف اذا ماتبغين تنسيق
import "./App.css";
// ************************

const Form = () => {
  const {
    register: getCurrentFormValues,
    handleSubmit: eventInputValue,
    getValues: setFormStates,
    formState: {errors},
  } = useForm({
    defaultValues: {
      FullName: "",
      dataofbirth: "",
      dob: "",
      Address: "",
      email: "",
      password: "",
    },
  });

  //  to clear the form
  const clearForm = () => {
    setFormStates({
      FullName: "",
      dataofbirth: "",
      dob: "",
      Address: "",
      email: "",
      password: "",
    });
  };

  // to submit the form
  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={eventInputValue(onSubmit)}>
      <h1>Form</h1>
      <button
        type="button"
        onClick={() => {
          clearForm();
        }}
      >
        clear form
      </button>

      <label id="FullName" htmlFor="FullName">
        Full Name:
      </label>
      <input {...getCurrentFormValues("FullName")} />
      {errors.FullName && <p>{errors.FullName.message}</p>}
      <label id="dataofbirth" htmlFor="dataofbirth">
        Date of Birth
      </label>
      <input type="date" {...getCurrentFormValues("dateOfBirth")} />
      <label id="dob" htmlFor="dob">
        Address
      </label>
      <input {...getCurrentFormValues("Address")} />
      {errors.Address && <p>Address is required</p>}

      <label id="email" htmlFor="email">
        Email Address
      </label>
      <input {...getCurrentFormValues("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      <label id="password" htmlFor="password">
        Password
      </label>
      <input {...getCurrentFormValues("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      {
        // to show the form states
        // لعرض البيانات
      }

      <button
        type="button"
        onClick={() => {
          alert(JSON.stringify(setFormStates()));
        }}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
