import { useState, useContext, useEffect } from 'react'
import FeedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [mssg, setMssg] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [rating, setRating] = useState(10)

    const  {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    const loader = 
    <div>
        <svg className="inline-block motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>
            Text should be at least 10 characters long
        </span>
    </div>;

    const handleTextChange = ({target : {value}}) =>{
        if(value === ''){
            setBtnDisabled(true)
            setMssg(null)
        } else if(value !== '' && value.trim().length <= 10){
            setMssg(loader)
            setBtnDisabled(true)
        } else{
            setMssg(null)
            setBtnDisabled(false)
        }
        setText(value)
    }
    
    useEffect(() =>{
        if( feedbackEdit.edit === true){
            setText(feedbackEdit.item.text)
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
               addFeedback(newFeedback) 
            }
            
        }
        // NOTE: reset to default state after submission
        setBtnDisabled(true)
        setRating(10)
        setText('') 
    }

    return (
        <div className="feedback-form max-w-lg mx-auto mt-5">
            <Card>
                <form 
                onSubmit={handleSubmit}
                className="py-3">
                    <h2 className="font-bold text-center pb-3">
                        How would you rate our service?
                    </h2>
                    <RatingSelect 
                        select={setRating} 
                        selected={rating} 
                    />
                    <div className="border-gray-200 border-2 mx-2 rounded-lg flex flex-row overflow-hidden">
                        <input type="text" placeholder="write a review"
                        value={text}
                        onChange={handleTextChange}
                        className="text-base py-2 px-1 w-full" 
                        />
                        <Button 
                        type="submit"
                        isDisabled={btnDisabled}>
                            Send
                        </Button>
                    </div>
                    <div className="text-xs text-gray-400 font-light py-1 w-fit mx-auto">
                        {mssg}
                    </div>
                </form>
            </Card>
        </div>
    );
}
 
export default FeedbackForm;