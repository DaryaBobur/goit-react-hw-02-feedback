
const FeedbackOptions =({ onHandleClick, addRating }) => {
    return (
<div>
<button  type="button" options={onHandleClick} className={addRating}>Good</button>
<button  type="button" options={onHandleClick} className={addRating}>Neutral</button>
<button  type="button" options={onHandleClick} className={addRating}>Bad</button>
</div>
   
    )
}

export default FeedbackOptions;