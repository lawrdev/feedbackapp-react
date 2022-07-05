import { motion } from "framer-motion"
import PropTypes from 'prop-types';

const Button = ({children, version, type, isDisabled}) => {

    return (
        <motion.button
        whileTap={{ scale: 0.9 }} 
        type={type} 
        disabled={isDisabled} 
        className={`btn btn-${version}`}>
            {children}
        </motion.button>
    );
}

Button.defaultProps = {
    version: "primary",
    isDisabled: false,
    type: "button"
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button;