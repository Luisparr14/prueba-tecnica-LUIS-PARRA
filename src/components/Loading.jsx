const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center m-24'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
      <p className='m-5'>Cargando...</p>
    </div>
  )
}

export default Loading
