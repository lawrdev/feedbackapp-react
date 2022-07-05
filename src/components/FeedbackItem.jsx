import { useContext } from 'react'
import FeedbackContext from "../context/FeedbackContext"
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { GoX } from "react-icons/go"
import { FaEdit } from "react-icons/fa"


const FeedbackItem = ({ item }) => {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <div className="py-5 px-2 max-w-lg mx-auto">
            {/* output card */}
            <Card>
                <div className="rating">{item.rating}</div>
                <div className="card-btns">
                    <button
                    onClick={() => editFeedback(item)}>
                        <FaEdit color='#000' size="1em" title="edit button"/>
                    </button>
                    <button 
                    onClick={()=> deleteFeedback(item.id)}>
                        <GoX color="#000" size="1em" title="close button"/>
                    </button>
                </div>
                <p>{item.text}</p>
            </Card>
        </div>
    );
}

FeedbackItem.propTypes ={
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;