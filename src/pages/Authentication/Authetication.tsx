import React from "react";
import "./Authentication.css";
import { BrandLogo, CompanyLogo } from "./Logo";
import { Banner } from "./Banner";
import { SignIn } from "./SignIn";
import { Footer } from "../../components/Footer";
import { SignInWith_ } from "./SignInWith_";

export const Authentication: React.FC = () => {
  return (
    <div className="login-container">
      <div className="d-flex vh-100">
        <div className="d-none d-md-block col-md-8 company-panel">
          <Banner />
        </div>
        <div className="col-12 col-md-4 login-panel">
          <BrandLogo />
          <CompanyLogo />
          <SignIn />

          <hr className="primary mt-0 mb-2 w-100" />
          <div className="sso-btn">
            <SignInWith_
              link={{
                type: "button",
                className: "btn mx-3",
                to: "/Account/Login?handler=GoogleLogOn",
              }}
              div={{ className: "g-sign" }}
              img={{
                src: "https://nlp.v2.letsachieve.co/images/google-login-btn.svg",
                alt: "",
              }}
            />
            <SignInWith_
              link={{
                type: "button",
                className: "btn mx-3",
                to: "/Account/Login?handler=MicroSoft",
              }}
              div={{ className: "ms-sign" }}
              img={{
                src: "https://nlp.v2.letsachieve.co/images/microsoft365-login-btn.svg",
                alt: "",
              }}
            />
          </div>
          <div className="mx-3">
            <span className="text-muted">
              By accessing, signing in, or using the system, you agree to the
              terms and privacy policy.
            </span>
          </div>
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
};
/**
 * <div class="login-container">
    <div class="d-flex vh-100">
        <div class="d-none d-md-block col-md-8 company-pane">
            <img src="/images/login-left-banner.svg" alt="" class="img-responsive">
            <!--The aspect ration of this image should be 37:25-->
        </div>
        <div class="col-12 col-md-4 login-panel">
            <div class="brand-logo">
                <img src="/images/logo-light.png" alt="Lets Achieve" class="img-fluid" style="max-width:300px;height:auto">
            </div>
            <div class="company-logo">
                <span> Pulkit Enterprise</span>
            </div>
            <form method="post" class="login-form" action="/" novalidate="novalidate">
                <div class="row">
                    <div class="col-md-12">
                 </div>
                </div>

                    <div class="form-floating d-flex">
                        <input type="email" class="form-control form-control-lg " id="Email" name="Email" placeholder="Your email Id" data-val="true" data-val-regex="Please enter a valid email id (e.g. abc@xyz.com)." data-val-regex-pattern="^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$" data-val-required="Please enter email id." value="">
                        <i class="fa fa-user ms-n4"></i>
                        <label for="Email">Email</label>

                    </div>
                    <div class="field-validation-error">
                        <span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                    </div>
                    <div class="form-floating d-flex mt-3">
                        <input type="password" name="Password" id="Password" class="form-control form-control-lg " placeholder="Password" data-val="true" data-val-length="Password must be at least 6 and maximum 50 characters long." data-val-length-max="50" data-val-length-min="6" data-val-required="Please enter password." maxlength="50">
                        <i class="fa fa-key ms-n4"></i>
                        <label for="Password">Password</label>
                    </div>
                    <div class="field-validation-error">
                        <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                    </div>
                    <div class="form-group d-flex justify-content-between mb-4 mt-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" name="RememberMe" id="RememberMe">
                            <label class="form-check-label" for="RememberMe">Remember Me</label>
                        </div>

                        <a href="/Account/ForgotPassword" class="text-primary">
                            Forgot Password?
                        </a>
                    </div>
                    <div class="d-grid mb-4">
                        <button type="submit" class="btn btn-primary btn-lg">
                            SIGN IN
                        </button>
                    </div>
                    <hr class="primary mt-0 mb-2 w-100">

                <div class="sso-btn">
                </div>

                <div>
                    <span class="text-muted">
                        By accessing, signing in, or using the system, you agree to the terms and privacy policy.
                    </span>
                </div>
                <br>
                <style>
                    .auth-footer {
                        padding: 1rem;
                        color: #888c9b;
                    }
                    
                    .auth-footer {
                            max-width: 420px;
                        }
                    
                </style>
                <footer class="auth-footer">
                    © 2024 All Rights Reserved. <a href="https://www.letsachieve.co/PrivacyPolicy" target="_blank">Privacy</a> and <a href="https://www.letsachieve.co/Terms" target="_blank">Terms</a>
                </footer>
            <input name="X-CSRF-TOKEN-OurAppName" type="hidden" value="CfDJ8JnlDISugElCi936w2I3vMNlTBfRIAf-cP0-Z2TCsbMXaary593yyLo4urxQS-hSMUTYpjISSaRXIr4MRv7Y9wl6zJbLhhrDoOuPhm-MFccjFF_4y9wDhqlEBWd86_G4b7YhhP1sOiT2Dw6pPxnzPBY"></form>
        </div>
    </div>
</div>
 */
