import { useState } from "react";

const SignupForm = () => {

    let [data, setData] = useState({});

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(data)
    return (
        <>
            <label htmlFor="name">Name:
                <input onChange={handleChange} name="name" type="text" />
            </label>
            <label htmlFor="adress">Adress:
                <input onChange={handleChange} name="adress" type="text" />
            </label>
            <label htmlFor="password">Password:
                <input onChange={handleChange} name="password" type="text" />
            </label>
        </>
    )
}

export default SignupForm;