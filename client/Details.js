import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { readDetail, updateDetail } from "../store/detailActions";
import { Link } from "react-router-dom";

const Detail = ({ readDetail, detail, updateDetail }) => {
  const params = useParams();
  useEffect(() => {
    readDetail(params.id);
  }, []);
  const [name, setName] = useState("");
  return detail.loading ? (
    <h2 style={{ color: "red" }}> Loading...</h2>
  ) : detail.error ? (
    <h2>We Didn't make It :( {detail.error}</h2>
  ) : (
    <div>
      <h1> Detail page</h1>
      <p>{detail.name}</p>
      <p>Created At -- {detail.createdAt}</p>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const data = { id: params.id, name: name };
          updateDetail(data);
          setName("");
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button disabled={!name}> Update User To {name}</button>
      </form>

      <Link to={"/"}>
        <h2> Back </h2>
      </Link>

      <pre>{name}</pre>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.detail.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    readDetail: (id) => dispatch(readDetail(id)),
    updateDetail: (user) => dispatch(updateDetail(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
