import PropTypes from 'prop-types'
import { Box } from '../../common/Box.jsx';
import { TransactionItem } from './TransactionItem/TransactionItem.jsx';
import { Table, TableHeader, TableItem } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Box as='section' py={5}>
            <Table>
                <TableHeader>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </TableHeader>
                <tbody>
                    {items.map(({id, type, amount, currency}, index) => (
                        <TableItem index={index} key={id}>
                            <TransactionItem type={type} amount={amount} currency={currency}></TransactionItem>
                        </TableItem>
                    ))}
                </tbody>
            </Table>
        </Box>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
  }