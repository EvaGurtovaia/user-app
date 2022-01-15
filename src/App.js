import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: userName, age: userAge, id: uuidv4() },
            ];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
