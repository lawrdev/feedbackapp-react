import PropTypes from 'prop-types'

const FeedbackStats = ({data}) => {
    // calculate ratings average
    let average = data.reduce((acc, curr)=>{
        return acc + curr.rating
    }, 0)/ data.length

    let name = 'Johnnyboy';
    name = name.replace('boy', 'son');
    console.log(name);
    console.log(name);
    console.log(name)
    // to make sure we get only 1 deci place values with '.0' exceptions
    average = average.toFixed(1).replace(/[.,]0$/, '')
    
    return (
        <div className="feeback-stats max-w-sm mx-auto px-2">
            <div className="flex justify-between py-2 mt-4 font-bold">
                <div>{data.length} Reviews</div>
                <div>Average rating: {isNaN(average) ? 0 : average}</div>
            </div>
        </div>
    );
}

FeedbackStats.protoTypes ={
    data: PropTypes.array.isRequired
}
export default FeedbackStats;