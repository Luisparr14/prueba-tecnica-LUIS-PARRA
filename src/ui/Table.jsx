import Loading from '../components/Loading'
import UserList from '../components/UserList'
import PropTypes from 'prop-types'

const Table = ({
  columns,
  data,
  loading,
  onDelete,
  colorizeRows,
  sortByRow,
  search
}) => {
  if (loading) {
    return <Loading />
  }

  const isSorted = (id) => id !== null

  return (
    <div className='relative overflow-x-auto'>
      <table className='table-auto w-full overflow-auto'>
        <thead>
          <tr>
            {columns.map(({ id, value }, index) => (
              <th
                key={index}
                className={`px-4 py-2 ${isSorted(id) && 'cursor-pointer'}`}
                onClick={isSorted(id) ? () => sortByRow(id) : null}
              >
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <UserList
            users={data}
            loading={loading}
            onDelete={onDelete}
            colorizeRows={colorizeRows}
            search={search}
          />
        </tbody>
      </table>
    </div>
  )
}

export default Table

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  sortByRow: PropTypes.func,
  search: PropTypes.string,
  colorizeRows: PropTypes.bool
}
