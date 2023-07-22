import PropTypes from 'prop-types'
import MarkText from './MarkText'

const User = ({ user, onDelete, colorizeRows, search }) => (
  <tr className={colorizeRows ? 'even:bg-even odd:bg-odd row' : 'row'}>
    <td>
      <img src={user?.picture?.medium} alt={user.name} className='w-12 m-auto' />
    </td>
    <td>{user?.name?.first}</td>
    <td>{user?.name?.last}</td>
    <td><MarkText text={user?.location?.country} searchText={search} /></td>
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
  colorizeRows: PropTypes.bool,
  search: PropTypes.string
}

User.defaultProps = {
  colorizeRows: false,
  search: ''
}
