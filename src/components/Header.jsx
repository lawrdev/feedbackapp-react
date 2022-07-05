import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({title}) {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto">
        <div className="text-red-400 font-bold text-center py-4">
          <Link to="/">
            <h2 className="cursor-pointer">
              {title}
            </h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header