import React from 'react';

export const UserPost = props => {
    if(props.user && props.posts){
        return(
            <div>
                <h1>{props.user.name}</h1>
                <p>Also Known As: {props.user.username}</p>
                {props.posts.map(post => (
                    <p>{post.body}</p>
                ))}
            </div>
        )
    }
    return(<div>loading...</div>)
}
 