import PropTypes from 'prop-types'

function Header({title}) {
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto">
        <div className="text-red-400 font-bold text-center py-4">
          <h2>
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header