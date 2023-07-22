import { useMemo, useState } from 'react'
import useApi from './hooks/useApi'
import Table from './ui/Table'
import Actions from './ui/Actions'
import { COLUMN_NAMES } from './constants'
import './App.css'

function App () {
  const { useGet } = useApi()
  const [refetch, setRefetch] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const [colorizeRows, setColorizeRows] = useState(false)

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

  const handleColorizeRows = () => {
    setColorizeRows(!colorizeRows)
  }

  const usersOrderByCountry = useMemo(() => {
    const userList = JSON.parse(JSON.stringify(users))

    return userList?.results?.sort((a, b) => {
      if (a.location.country < b.location.country) {
        return -1
      }
      if (a.location.country > b.location.country) {
        return 1
      }
      return 0
    })
  }, [users])

  const handleSortByCountry = () => {
    if (sortBy === 'country') setSortBy(null)
    else setSortBy('country')
  }

  const usersData = useMemo(() => {
    switch (sortBy) {
      case 'country':
        return usersOrderByCountry
      default:
        return users?.results
    }
  }, [sortBy, users, usersOrderByCountry])

  return (
    <>
      <h1 className='text-6xl font-bold my-6 text-center'>Lista de usuarios</h1>
      <Actions onColorizeRows={handleColorizeRows} onReset={handleReset} onSort={handleSortByCountry} />
      <Table
        columns={COLUMN_NAMES}
        data={usersData}
        loading={loading}
        onDelete={handleDelete}
        colorizeRows={colorizeRows}
      />
    </>
  )
}

export default App
