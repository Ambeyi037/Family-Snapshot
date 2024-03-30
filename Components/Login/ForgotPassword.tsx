import React from "react";

export default function ForgotPassword() {
    return (
        <section className="wrapper">
            <div className="form signup">
                <header>Forgot password <br />Enter Email</header>
                <form action="#">
                    <input type="text" placeholder="Email address" required />
                    <button>Send Reset Password</button>
                </form>
            </div>
        </section>
    )
}

