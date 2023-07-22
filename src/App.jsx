import { useState } from 'react'
import useApi from './hooks/useApi'
import Table from './ui/Table'
import { COLUMN_NAMES } from './constants'
import './App.css'

function App () {
  const { useGet } = useApi()
  const [refetch, setRefetch] = useState(false)

  const {
    data: users,
    loading,
    setData: setUsers
  } = useGet('https://randomuser.me/api/?results=100', refetch)

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
      <button
        onClick={handleReset}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Reset
      </button>
      <Table
        columns={COLUMN_NAMES}
        data={users?.results}
        loading={loading}
        onDelete={handleDelete}
      />
    </>
  )
}

export default App
