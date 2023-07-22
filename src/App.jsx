import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import { COLUMN_NAMES } from './constants'
import useApi from './hooks/useApi'

function App () {
  const { useGet } = useApi()
  const [refetch, setRefetch] = useState(false)

  const { data: users, loading, setData: setUsers } = useGet('https://randomuser.me/api/?results=100', refetch)

  const handleDelete = (email) => {
    const newUsers = users?.results.filter((user) => user.email !== email)
    setUsers({ ...users, results: newUsers })
  }

  const handleReset = () => {
    setRefetch(!refetch)
  }

  return (
    <>
      <h1 className='text-6xl font-bold my-6 text-center'>Lista de usuarios</h1>
      <button onClick={handleReset} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Reset
      </button>
      <table className='table w-full'>
        <thead>
          <tr>
            {COLUMN_NAMES.map((columnName, index) => (
              <th key={index} className='px-4 py-2'>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <UserList users={users?.results} loading={loading} onDelete={handleDelete} />
        </tbody>
      </table>
    </>
  )
}

export default App
