import { useCallback, useMemo, useState } from 'react'
import useApi from './hooks/useApi'
import Table from './ui/Table'
import Actions from './ui/Actions'
import { COLUMN_NAMES } from './constants'
import './App.css'

function App () {
  const { useGet } = useApi()
  const [refetch, setRefetch] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const [search, setSearch] = useState('')
  const [colorizeRows, setColorizeRows] = useState(false)

  const {
    data: users,
    loading,
    setData: setUsers
  } = useGet('https://randomuser.me/api/?results=100', refetch)

  const handleDelete = (email) => {
    const newUsers = users?.filter((user) => user.email !== email)
    setUsers(newUsers)
  }

  const handleReset = () => {
    setRefetch(!refetch)
  }

  const handleColorizeRows = () => {
    setColorizeRows(!colorizeRows)
  }

  const usersOrderByCountry = useCallback((data) => {
    const userList = JSON.parse(JSON.stringify(data || users))

    return userList?.sort((a, b) => {
      if (a.location.country < b.location.country) {
        return -1
      }
      if (a.location.country > b.location.country) {
        return 1
      }
      return 0
    })
  }, [users])

  const orderUsers = useCallback((data, type = 'first') => {
    const userList = JSON.parse(JSON.stringify(data || users))

    return userList?.sort((a, b) => {
      if (a.name[type] < b.name[type]) {
        return -1
      }
      if (a.name[type] > b.name[type]) {
        return 1
      }
      return 0
    })
  }, [users])

  const usersBySearch = useMemo(() => {
    const userList = JSON.parse(JSON.stringify(users))
    if (!search) return userList
    return userList?.filter((user) =>
      user.location.country.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, users])

  const handleSearch = (e) => setSearch(e.target.value)

  const handleSortByCountry = () => {
    if (sortBy === 'country') setSortBy(null)
    else setSortBy('country')
  }

  const handleSortByRow = (id) => {
    if (sortBy === id) setSortBy(null)
    else setSortBy(id)
  }

  const usersData = useMemo(() => {
    switch (sortBy) {
      case 'country':
        return usersOrderByCountry(usersBySearch)
      case 'first':
        return orderUsers(usersBySearch, sortBy)
      case 'last':
        return orderUsers(usersBySearch, sortBy)
      default:
        return usersBySearch
    }
  }, [sortBy, usersOrderByCountry, usersBySearch, orderUsers])

  return (
    <>
      <h1 className='text-6xl font-bold my-6 text-center'>Lista de usuarios</h1>
      <Actions
        onColorizeRows={handleColorizeRows}
        onReset={handleReset}
        onSort={handleSortByCountry}
        search={search}
        onSearch={handleSearch}
      />
      <Table
        columns={COLUMN_NAMES}
        data={usersData}
        loading={loading}
        onDelete={handleDelete}
        colorizeRows={colorizeRows}
        sortByRow={handleSortByRow}
      />
    </>
  )
}

export default App
