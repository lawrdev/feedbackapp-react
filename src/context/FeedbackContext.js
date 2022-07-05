import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) =>{

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is ratings 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is ratings 2",
            rating: 9
        },
        {
            id: 3,
            text: "This is ratings 3",
            rating: 7
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) =>{
        if(window.confirm('Confirm delete?')){
            setFeedback(feedback.filter((item)=>{
                    return item.id !== id
                })
            )
        }
    }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedback = (id, updatedItem) =>{
        setFeedback(feedback.map((item)=>{
            return item.id === id ? {...item, ...updatedItem} : item
        }))
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            addFeedback,
            deleteFeedback,
            editFeedback,
            updateFeedback,
            
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext