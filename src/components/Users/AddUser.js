import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefailt();
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age</label>
                <input id="age" type="number"></input>
                <button>Add user</button>
            </form>
        </Card>
    );
};

export default AddUser;
