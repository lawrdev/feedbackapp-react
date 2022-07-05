import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

const AboutIconLink = () => {
    return (
        <div className="scale-75 md:scale-100">
            <Link to='/about'>
                <div className="about-icon-link border-3 rounded-full hover:text-red-400 bg-slate-700 p-4 hover:scale-105 hover:duration-500 hover:-translate-y-1 cursor-pointer ">
                    <FaQuestion size={30} />
                </div>
            </Link>
        </div>
    );
}
 
export default AboutIconLink;