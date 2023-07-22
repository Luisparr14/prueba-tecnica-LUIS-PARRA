import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users, onDelete, colorizeRows, search }) =>
  users?.map((user) => (
    <User
      key={user?.email}
      user={user}
      onDelete={onDelete}
      colorizeRows={colorizeRows}
      search={search}
    />
  ))

export default UserList

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  colorizeRows: PropTypes.bool
}
