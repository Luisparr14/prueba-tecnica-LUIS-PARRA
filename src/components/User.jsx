import PropTypes from 'prop-types'

const User = ({ user, onDelete, colorizeRows }) => (
  <tr className={colorizeRows ? 'even:bg-even odd:bg-odd row' : 'row'}>
    <td>
      <img src={user?.picture?.medium} alt={user.name} className='w-12 m-auto' />
    </td>
    <td>{user?.name?.first}</td>
    <td>{user?.name?.last}</td>
    <td>{user?.location?.country}</td>
    <td>
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => onDelete(user?.email)}
      >
        Eliminar
      </button>
    </td>
  </tr>
)

export default User

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  colorizeRows: PropTypes.bool
}

User.defaultProps = {
  colorizeRows: false
}
