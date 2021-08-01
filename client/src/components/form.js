import React from 'react'

function Form() {
    return (
        <div className="form">
            <h2>Regitration</h2>
            <form autoComplete="off">
                <div className="group">
                    <label for="username">Username</label>
                    <input type="text" className="input" name="username" id="username" placeholder="Username" />
                </div>
                <div className="group">
                    <label for="fullname">Username</label>
                    <input type="text" className="input" name="fullname" id="fullname" placeholder="Fullname" />
                </div>
                <div className="group">
                    <label for="email">Email</label>
                    <input type="email" className="input" name="email" id="email" placeholder="E-mail" />
                </div>
                <div className="group">
                    <label for="password">Password</label>
                    <input type="password" className="input" name="password" id="password" placeholder="Password" />
                </div>
                <div className="group">
                    <button className="button">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Form