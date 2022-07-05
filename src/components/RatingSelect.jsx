const RatingSelect = ({select, selected}) => {
    
    const handleChange = (e) => {
        select(+e.currentTarget.value)
    }

    
    return (
        <div className="rating-select">
            <ul className='rating p-4 flex flex-wrap justify-center gap-2 w-fit mx-auto'>
                {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
                ))}
            </ul>
        </div>
    );
}
 
export default RatingSelect;