import React from 'react'
import styles from './FeedBacks.module.css'
import FeedBack from './FeedBack'



const FeedBacks = () => {
  return (
    <div className={styles.feedback}>
        <div className={styles.feedback_container}>
        <h1>See What People say About us</h1>
        <h4>Don't take our word for it, Trust our customers</h4>
        </div> 
        <div className={styles.feedbackAlign}>
           <FeedBack/>
           <FeedBack/>
           <FeedBack/>
           <FeedBack/>
        </div>
        
    </div>
  )
}

export default FeedBacks