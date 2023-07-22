import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users, loading, onDelete }) =>
  users?.map((user) => <User key={user?.email} user={user} onDelete={onDelete} />)

export default UserList

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onDelete: PropTypes.func.isRequired
}
