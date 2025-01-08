import React from "react";
import { LabelInput } from "../../components/Input/LabelInput";
import { SignInWith_ } from "./SignInWith_";
import { Form } from "react-bootstrap";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { pocketLogin } from "../../redux/reducers/accountReducer";
type AnyDispatch = ThunkDispatch<any,any,AnyAction>;
export const SignIn: React.FC = () => {
  const dispatch:AnyDispatch = useDispatch();
  const handleSubmit = (event:React.FormEvent) => {
    
    event.preventDefault()
    dispatch(pocketLogin({username:'username',password:"password12"}))
  }
  return (
    <Form >
      <div className="row">
        <div className="col-md-12"></div>
      </div>
      <LabelInput
        input={{
          type: "email",
          className: "form-control form-control-lg",
          name: "email",
          placeholder: "Your email Id",
          value: "",
        }}
        div={{ className: "form-floating d-flex m-3" }}
        label={{ name: "Email Address", className: "" }}
        icon={{ className: "fa-user" }}
        propsInput={{
          "data-val": "true",
          "data-val-regex": "Please enter a valid email id (e.g. abc@xyz.com).",
          "data-val-regex-pattern":
            "^([A-Za-z0-9_+-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$",
          "data-val-required": "Please enter email id.",
        }}
      />
      <LabelInput
        input={{
          type: "password",
          name: "Password",
          className: "form-control form-control-lg",
          placeholder: "Password",
          value: "",
        }}
        label={{ name: "Password", className: "" }}
        icon={{ className: "fa-key" }}
        div={{ className: "form-floating d-flex m-3" }}
        propsInput={{
          "data-val": "true",
          "data-val-length":
            "Password must be at least 6 and maximum 50 characters long.",
          "data-val-length-max": "50",
          "data-val-length-min": "6",
          "data-val-required": "Please enter password.",
          maxlength: "50",
        }}
      />
      <div className="form-group d-flex justify-content-between m-3">
        <LabelInput
          div={{ className: "form-check" }}
          input={{
            className: "form-check-input",
            type: "checkbox",
            value: "",
            placeholder: "",
            name: "RememberMe",
          }}
          label={{ name: "RememberMe", className: "form-check-label" }}
        />
        <a href="/Account/ForgotPassword" className="text-primary">
          Forgot Password?
        </a>
      </div>
      <div className="d-grid mx-3">
        <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">
          SIGN IN
        </button>
      </div>
    </Form>
  );
};
