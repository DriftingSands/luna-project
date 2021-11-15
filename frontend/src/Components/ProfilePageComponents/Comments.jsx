import React, {useState, useEffect} from 'react'
import {CommentContainer} from "./CommentsStyle"

const Comments = () => {

    const [comments, setComments] = useState(null);
    useEffect(() => {
        getData();

        async function getData() {
            const config = {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}}
            const comments = await fetch("https://luna2.propulsion-learn.ch/backend/api/reviews/comments/", config);
            const data = await comments.json();
            setComments(data);
          }
        }, []); 
        console.log(comments);
    return(
        <CommentContainer>
            <p className="Title">Comments</p>
            {comments && (
            <ul> 
                {comments.map(comment => {
                    return <div key={comment.created} className="CommentWrapper">
                        <div className="Header">
                            <p>Review nr</p>
                            {/* <p className="Name">Name={restaurants.filter(restaurant => restaurant.id = review.restaurant_id).name}</p> */}
                            <p className="Date">Date: {comment.updated.slice(0, 10)}</p>
                        </div>
                        <div className="Text">
                            <p>{comment.text_content}</p>
                        </div>
                    </div>
                })}
            </ul>)}
        </CommentContainer>
    )
}

export default Comments