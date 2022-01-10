import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEntereAge] = useState("");

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEntereAge(event.target.value);
    };
    const addUserHandler = (event) => {
        event.preventDefailt();
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChane={usernameChangeHandler}
                ></input>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler}
                ></input>
                <Button>Add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;
