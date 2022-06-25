import React from "react";
import {UserDto} from "../classes/user.dto";


const Me = ({user}:{user: UserDto}) => {
    return (
        <>

            <h1 style={{textAlign: "center"}}> INFORMATION</h1>
            <h3 style={{textAlign: "center"}}> First name: {user.first_name}</h3>
            <h3 style={{textAlign: "center"}}> Last name: {user.last_name}</h3>
            <h3 style={{textAlign: "center"}}> Email: {user.email}</h3>
        </>
    );
}
export default Me;