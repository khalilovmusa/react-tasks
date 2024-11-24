import { Component } from "react";
import "./styles/UserLogin.css";

class UserLogin extends Component {

    state = { message: `` }

    handleClick = () => {
        const emailInput = document.querySelector(".email-input");
        const passwordInput = document.querySelector(".password-input");
        const i = emailInput.value.split(".").length - 1;
        const emailIndexCheck = emailInput.value.split(".")[i];
        if (emailIndexCheck === "ru" && passwordInput.value.split("").length >= 8) {
            this.setState({ message: "Log in was succesful" })
            document.querySelector(".user-login-wrapper p").style.color = "green";
        } else {
            this.setState({ message: "Email must've end with .ru & min password length: 8" })
            document.querySelector(".user-login-wrapper p").style.color = "red";
        }
    }

    render() {
        const { message } = this.state;
        return (
            <>
                <div className="user-login-wrapper">
                    <label htmlFor="email-input">Email:</label>
                    <input name="email-input" className="email-input" type="email" placeholder="Your email goes here" required />
                    <label htmlFor="passowrd-input">Password:</label>
                    <input className="password-input" name="password-input" type="password" placeholder="min-length 8 characters" />
                    <button onClick={this.handleClick} type="button" className="submit-button">
                        Submit
                    </button>
                    <p>{message}</p>
                </div>
            </>
        )
    }
}

export default UserLogin;