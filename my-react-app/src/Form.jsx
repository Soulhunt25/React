import React, { useState } from 'react'

const Form = () => {
    let [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    function fun1(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    function done(e) {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div>
            <fieldset>
                <legend>Form</legend>
                <form onSubmit={done}>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={fun1}
                        placeholder="Enter your name"
                    />
                    <br /><br />
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={fun1}
                        placeholder="Enter your email"
                    />
                    <br /><br />
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={fun1}
                        placeholder="Enter your password"
                    />
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;
