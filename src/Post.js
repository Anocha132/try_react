import React from "react";
import propTypes from "prop-types";

function Post({id, title}) {
    return ( 
        <div className = "Post" >
            <div className = "Post__title" >
                { title }
            </div>
            <img className="Post__image" src={'https://source.unsplash.com/random?sig=${id}'}/>
        </div>
    )
}

Post.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired
};

export default Post;