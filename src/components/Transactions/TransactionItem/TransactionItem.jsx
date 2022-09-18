import PropTypes from 'prop-types'

export const TransactionItem = ({type, amount, currency}) => {
    return  <>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </>
  };

TransactionItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}