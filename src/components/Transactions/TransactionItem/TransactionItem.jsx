import PropTypes from 'prop-types'
import { TableItem } from './TransactionItem.styled';

export const TransactionItem = ({items}) => {
    return items.map(({id, type, amount, currency}, index) => (
        <TableItem index={index} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </TableItem>
    ))
  };

TransactionItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}