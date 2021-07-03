import { NavBar } from "../components/navbar/nav";
import { useNavigate } from "react-router";
import './signup.css'
import { useState } from "react";
export function SignUp(){

  const navigate = useNavigate();
  

  return (
    <div className='sign-up'>
    <section
    className='sign-up__left'
    >Left</section>
    <section className='sign-up__right'>

      <NavBar/>


      <section className='sign-up__main'>

      <div className="sign-up__main-header">
      <h2 className="sign-up__header-name">Create an account </h2>
      </div>


      <div className="sign-up__form">
          <form className="sign-up__form-info flx-cl gp-1">

            <div className='sign-up__user-info '>

            <div className="first-info flx-cl">

              <label htmlFor="firstName" className="first-name-label lbl-fm">
                First Name
              </label>
              <input
                placeholder="First Name "
                className="input-info"
                type="text"
                id="sign-up__first-name"
              />
            </div>

            <div className="last-info flx-cl">
              <label htmlFor="last-name" className="last-name-label lbl-fm">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                className="input-info"
                type="text"
                id="login-username"
              />{" "}
            </div>

            </div>




            
            <div className="username-info flx-cl">
              <label htmlFor="username" className="username-label lbl-fm">
                Username
              </label>
              <input
                placeholder="user name"
                className="input-info"
                type="text"
                id="login-username"
              />{" "}
            </div>

              <div className="username-info flx-cl">
              <label htmlFor="email" className="email-label lbl-fm">
                Email
              </label>
              <input
                placeholder="john@abc.com"
                className="input-info"
                type="email"
                id="login-username"
              />{" "}
            </div>

            <div className="password-info flx-cl">
              <label htmlFor="password" className="password-label lbl-fm">
                password
              </label>
              <input
                placeholder="password "
                className="input-info"
                type="password"
                id="login-password"
              />
            </div>
            <div className="c-password-info flx-cl">
              <label htmlFor="c-password" className="c-password-label lbl-fm">
                password
              </label>
              <input
                placeholder="confirm password "
                className="input-info"
                type="password"
                id="login-c-password"
              />
            </div>
            <div className="sign-up__button-info">
            <button type="submit" className="sign-up-button btn-form fcs-btn">
                Sign Up
              </button>
              <button type="submit" className="sign-in-button btn-form ">
                Sign In
              </button>
             
            </div>
          </form>
        </div>


      </section>
    </section>
    </div>
  )
}