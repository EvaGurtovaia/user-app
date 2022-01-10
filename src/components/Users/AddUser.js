import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const addUserHandler = (event) => {
        event.preventDefailt();
        if (enteredUsername.trim().length === 0 || enteredAge) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }

        setEnteredUsername("");
        setEnteredAge("");
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChane={usernameChangeHandler}
                ></input>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                ></input>
                <Button>Add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;
