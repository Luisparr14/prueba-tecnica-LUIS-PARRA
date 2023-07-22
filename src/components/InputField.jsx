import PropTypes from 'prop-types'

const InputField = ({ id, placeHolder, type, name, value, onChange, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <input type={type} id={id} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name={name} value={value} onChange={onChange} placeholder={placeHolder} />
    </div>
  )
}

export default InputField

InputField.propTypes = {
  id: PropTypes.string,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
}

InputField.defaultProps = {
  id: '',
  placeHolder: '',
  type: 'text',
  name: '',
  value: '',
  onChange: () => {},
  className: ''
}
