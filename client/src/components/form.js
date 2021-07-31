import React from 'react'

function Form() {
    return (
        <div className="form">
            <h2>Regitration</h2>
            <form>
                <div className="group">
                    <label for="username">Username</label>
                    <input type="text" className="input" name="username" id="username" placeholder="Username" />
                </div>
            </form>
        </div>
    )
}

export default Form