import PropTypes from 'prop-types';
import Card from "./shared/Card";
import { GoX } from "react-icons/go";


const OutputItem = ({ item, handleClick }) => {
    return (
        <div className="py-5 px-2 max-w-sm mx-auto">
            {/* output card */}
            <Card>
                <div>{item.rating}</div>
                <button className="close" onClick={()=> handleClick(item.id)}>
                    <GoX color="#000"/>
                </button>
                <p>{item.text}</p>
            </Card>
        </div>
    );
}

OutputItem.propTypes ={
    item: PropTypes.object.isRequired,
}

export default OutputItem;