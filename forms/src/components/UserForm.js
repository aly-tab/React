import React, { useState } from  'react';
    
const UserForm = props => {
    const { inputs, setInputs } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword1, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("");

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("Field must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Field must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Field must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Field must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (f,e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmPasswordError("Field must be at least 8 characters");
        } else {
            setConfirmPasswordError("");
        }
    }

    const handlePasswordMatch = (e) => {
        if (password == e.target.value) {
            setPasswordMatchError("");
        } else {
            console.log(password);
            console.log(e.target.value);
            setPasswordMatchError("Passwords must match!");
        }
    }

    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input onChange={onChange} onChange={handleFirstName} type="text" name="firstName" />
                {
                    firstNameError ?
                    <p>{ firstNameError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input onChange={onChange} onChange={handleLastName} type="text" name="lastName" />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input onChange={onChange} onChange={handleEmail} type="text" name="email" />
                {
                    emailError ?
                    <p>{ emailError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input onChange={onChange} onChange={handlePassword} type="text" name="password" />
                {
                    passwordError ?
                    <p>{ passwordError }</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={onChange} onChange={handleConfirmPassword} onChange={handlePasswordMatch} type="text" name="confirmPassword" />
                {
                    passwordMatchError ?
                    <p>{ passwordMatchError }</p>:
                    ''
                }
            </div>
        </form>
    );
};
    
export default UserForm;
