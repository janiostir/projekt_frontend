import React from "react";
import {UserDto} from "../classes/user.dto";

const Me = ({user}:{user: UserDto}) => {
    return (
        <>
            <h1>My Info:</h1>
            <h3>First name: {user.first_name}</h3>
            <h3>Last name: {user.last_name}</h3>
            <h3>Email: {user.email}</h3>
        </>
    );
}
export default Me;