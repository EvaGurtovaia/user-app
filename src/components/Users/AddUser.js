const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefailt();

    };
    return (
        <div>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age</label>
                <input id="age" type="number"></input>
                <button>Add user</button>
            </form>
        </div>
    );
};

export default AddUser;
