import PropTypes from 'prop-types'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Actions = ({ onReset, onColorizeRows, onSort, search, onSearch }) => {
  return (
    <div className='flex flex-col gap-1 justify-evenly items-center m-5 sm:flex-row'>
      <Button onClick={onColorizeRows}>
        Colorear filas
      </Button>
      <Button onClick={onSort}>
        Ordenar por país
      </Button>
      <Button onClick={onReset}>
        Restaurar estado inicial
      </Button>
      <InputField
        id='search'
        placeHolder='Buscar por país'
        type='text'
        name='search'
        value={search}
        onChange={onSearch}
      />
    </div>
  )
}

export default Actions

Actions.propTypes = {
  onReset: PropTypes.func,
  onColorizeRows: PropTypes.func,
  onSort: PropTypes.func,
  search: PropTypes.string,
  onSearch: PropTypes.func
}

Actions.defaultProps = {
  onReset: () => console.info('onReset not implemented'),
  onColorizeRows: () => console.info('onColorizeRows not implemented'),
  onSort: () => console.info('onSort not implemented'),
  search: '',
  onSearch: () => console.info('onSearch not implemented')
}
