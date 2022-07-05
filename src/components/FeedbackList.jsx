import { motion } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
    
    const {feedback} = useContext(FeedbackContext)

    //check if there is any feedback data first else display placeholder mssg
    if(!feedback || feedback.length === 0){
        return <p className="text-white py-5">
            No feedback found</p> 
    }

    return (
        <div>
           {feedback.map((item) =>{
               return (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0}}
                key={item.id}
                >
                    <FeedbackItem 
                        key={item.id} 
                        item={item}
                    />
                </motion.div>
                )
           })} 
        </div>
    );
}

export default FeedbackList;