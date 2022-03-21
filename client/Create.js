import React, { useState } from "react";
import { connect } from "react-redux";
import { createUser } from "../store/userActions";

const Create = ({ createUser }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Create A Person</h1>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (name) => {
      dispatch(createUser(name));
    },
  };
};

export default connect(null, mapDispatchToProps)(Create);
