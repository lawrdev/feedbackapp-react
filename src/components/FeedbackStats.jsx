import {useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext)
    
    // calculate ratings average
    let average = feedback.reduce((acc, curr)=>{
        return acc + curr.rating
    }, 0)/ feedback.length
    // to make sure we get only 1 deci place values with '.0' exceptions
    average = average.toFixed(1).replace(/[.,]0$/, '')
    
    return (
        <div className="feeback-stats max-w-lg mx-auto px-2">
            <div className="flex justify-between py-2 mt-4 font-bold">
                <div>{feedback.length} Reviews</div>
                <div>Average rating: {isNaN(average) ? 0 : average}</div>
            </div>
        </div>
    );
}

export default FeedbackStats;