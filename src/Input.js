import React from "react";
import propTypes from "prop-types";

function Input({ addPost }) {
    return (
    <div className="Input">
        <div className="Input__header">Create Post</div>
        <input className="Input__field" type="text"/>
    </div>
    );
}

Input.propTypes = {
    addPost: propTypes.func.isRequired
};

export default Input