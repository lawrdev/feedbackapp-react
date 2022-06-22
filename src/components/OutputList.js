import PropTypes from 'prop-types';
import OutputItem from "./OutputItem";

const OutputList = ({data, handleDelete}) => {
    
    //check if there is any feedback data first else display placeholder mssg
    if(!data || data.length === 0){
        return <p className="text-white py-5">
            No feedback found</p> 
    }  
    return (
        <div>
           {data.map((item) =>{
               return <OutputItem key={item.id} item={item} 
               handleClick={(id)=>handleDelete(id)}/>
           })} 
        </div>
    );
}

OutputList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    )
}
export default OutputList;