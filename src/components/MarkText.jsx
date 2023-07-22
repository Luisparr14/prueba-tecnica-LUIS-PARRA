import PropTypes from 'prop-types'

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const MarkText = ({ text, searchText }) => {
  const regex = new RegExp(escapeRegExp(searchText), 'gi')
  const parts = text.split(regex)
  const matches = text.match(regex)
  const result = []
  for (let i = 0; i < parts.length; i++) {
    if (parts[i]) {
      result.push(parts[i])
    }
    if (matches && matches[i]) {
      result.push(
        <mark
          key={i}
          className='bg-mark rounded-md'
        >
          {matches[i]}
        </mark>
      )
    }
  }
  return result
}

export default MarkText

MarkText.propTypes = {
  text: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired
}
