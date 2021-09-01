import React from  'react';
    
const UserForm = props => {
    const { inputs, setInputs } = props;
    
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input onChange={onChange} type="text" name="firstName" />
            </div>
            <div>
                <label>Last Name: </label> 
                <input onChange={onChange} type="text" name="lastName" />
            </div>
            <div>
                <label>Email Address: </label> 
                <input onChange={onChange} type="text" name="email" />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={onChange} type="text" name="password" />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input onChange={onChange} type="text" name="confirmPassword" />
            </div>
        </form>
    );
};
    
export default UserForm;
