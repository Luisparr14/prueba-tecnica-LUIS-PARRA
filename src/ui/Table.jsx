import Loading from '../components/Loading'
import UserList from '../components/UserList'
import PropTypes from 'prop-types'

const Table = ({ columns, data, loading, onDelete }) => {
  if (loading) {
    return <Loading />
  }

  return (
    <table className='table w-full'>
      <thead>
        <tr>
          {columns.map((columnName, index) => (
            <th key={index} className='px-4 py-2'>
              {columnName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <UserList users={data} loading={loading} onDelete={onDelete} />
      </tbody>
    </table>
  )
}

export default Table

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func
}
