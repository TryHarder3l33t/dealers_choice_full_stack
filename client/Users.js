import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, createUser, deleteUser } from "../store/userActions";
import { Link } from "react-router-dom";

const Users = ({ fetchUsers, userData, createUser, deleteUser }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [name, setName] = useState("");
  return userData.loading ? (
    <h2 style={{ color: "red" }}> Loading...</h2>
  ) : userData.error ? (
    <h2>We Didn't make It :( {userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <ul>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <div key={user.id}>
              <br />{" "}
              <Link to={`/detail/${user.id}`}>
                <li>{user.name}</li>
              </Link>
              <br />
              <button onClick={() => deleteUser(user.id)}>
                Delete {user.name}
              </button>
              <br />
            </div>
          ))}
      </ul>
      <h2>Create A User</h2>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setName("");
          createUser(name);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button disabled={!name}> Add User {name}</button>
      </form>

      <pre> {name}</pre>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    createUser: (name) => {
      dispatch(createUser(name));
    },
    deleteUser: (id) => {
      console.log("this is the id " + id);
      dispatch(deleteUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
