import React, { useEffect, useState } from 'react'
import { CommentForm, ReviewCardMain } from './ReviewCardStyles'
import defaultPFP from '../../assets/images/default-user-icon.png'
import thumbsUp from '../../assets/svgs/thumbs-up.svg'
import axios from 'axios'
import { LoginButton } from '../../Pages/Login/LoginStyles'

export default function ReviewCard(props) {
    const [imgLoaded, setimgLoaded] = useState(false)
    const [author, setauthor] = useState({})
    const [comments, setcomments] = useState([])
    const [like, setLike] = useState(0)
    const [commentValue, setCommentValue] = useState('')
    const [commentPopup, setCommentPopup] = useState(false)

    const likeHandler = () => {
        if (!props.isLoggedIn) props.setlikePopup(true)
        else {
            const body = {}
            const config = {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            axios.post(`https://luna2.propulsion-learn.ch/backend/api/reviews/like/${props.review.id}/`, body, config)
            if (like === 0) setLike(1)
            else setLike(0)
        }
    }

    const commentHandler = async () => {
        console.log(props.review.id)
        if (!props.isLoggedIn) props.setlikePopup(true)
        else {
            setCommentPopup(true)
        }
    }
    
    const commentPost = (e) => {
        e.preventDefault()
        console.log(props.restsurantId)
        const body = {text_content: commentValue}
        setCommentValue('')
        const config = {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        axios.post(`https://luna2.propulsion-learn.ch/backend/api/reviews/comment/new/${props.review.id}/`, body, config)
        setCommentPopup(false)
        const arr = [...comments, body]
        setcomments(arr)

    }

    useEffect(() => {
        if (props.review.liked_by.includes(props.user.id)) setLike(1)
        
        async function fetchAuthor() {
            const {data} = await axios.get(`https://luna2.propulsion-learn.ch/backend/api/users/${props.review.author}/`)
            setauthor(data)
        }
        fetchAuthor();
        async function fetchCommentArray() {
            props.review.review_comments.map(async (value, index) => {
                const {data} = await axios.get(`https://luna2.propulsion-learn.ch/backend/api/reviews/comment/delete/${value}/`)
                setcomments(comments => [...comments, data])
            })
        }
        fetchCommentArray();

      }, []);


    return (
        <>
        { comments  ?
        <ReviewCardMain like={like}>
            {!commentPopup ? null :
                <CommentForm>
                    <div className='innerPopup'>
                        <textarea rows='4' cols='50' placeholder='Write a comment!' value={commentValue} onChange={(e) => setCommentValue(e.target.value)} ></textarea>
                        <LoginButton onClick={(e) => commentPost(e)}>POST</LoginButton>
                    </div>
                    <div className='background' onClick={()=> {setCommentValue(''); return setCommentPopup(false)}}></div>
                </CommentForm>
            }
            <div className='coloredTop'></div>

            <div className='reviewHeader'>
                <img src={defaultPFP} alt="profile icon" height='65' width='65' style={ imgLoaded ? {display: "none"} : {}} />
                <img src={author && author.avatar} alt="profile icon" height='65' width='65' onLoad={() => setimgLoaded(true)} style={ imgLoaded ? {} : {display: "none"}} />
                <h4>{author && author.username}</h4>
                <span>{author.reviews && author.reviews.length + ' Reviews in total'}</span>
            </div>

            <div className='reviewWrapper'>
                <h5 className='restaurantName'>{props.review.restaurant ? props.review.restaurant.name : 'Loading...'}</h5>
                <p className='reviewText'>
                    {props.review.text_content && (props.review.text_content.length > 130 ? props.review.text_content.substring(0, 125) + '...  ' : props.review.text_content + '  ')} 
                    <a href="">read more</a>
                </p>
            </div>

            <div className='buttonWrapper'>
                <button className='likeButton' onClick={likeHandler}><img src={thumbsUp} alt="" height='20'/> Like <span>{props.review.liked_by.length + like}</span></button>
                <button className='commentButton' onClick={commentHandler}>Comment <span>{props.review.review_comments.length}</span></button>
            </div>

            <div className='commentSection'>
                <h5>Latest comments</h5>
                {comments.length > 0 ? 
                    comments.map((e, i) => {
                        if (i > 1) return null
                        return (<div key={e.id}>
                            <h6 >{e.author.firstname ? `${e.author.first_name} ${e.author.lastname}` : e.author.username }</h6>
                            <p >{e.text_content}</p>
                        </div>
                        )
                    }) : 
                    <span>There are no comments for this review. You could be the first!</span>
                }
            </div>

            
        </ReviewCardMain> : null}
        </>
    )
}
