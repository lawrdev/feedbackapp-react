import { useState } from 'react';
import OutputList from "./OutputList";
import OutputData from "../data/OutputData";
import FeedbackStats from "./FeedbackStats";

const Main = () => {

    const [data, setData] = useState(OutputData)

    const feedbackDelete = (id) =>{
        if(window.confirm('Confirm delete?')){
            setData(data.filter((item)=>{
                    return item.id !== id
                })
            )
        }
    }

    return (
        <div className="px-3">
            <div className="container mx-auto">
                <div>
                    <FeedbackStats data={data} />
                    <OutputList 
                    data={data} 
                    handleDelete={feedbackDelete} 
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Main;