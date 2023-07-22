import PropTypes from 'prop-types'

const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
