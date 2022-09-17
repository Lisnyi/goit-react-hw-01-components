import PropTypes from 'prop-types'
import { Box } from 'common/Box';
import { TransactionItem } from './TransactionItem/TransactionItem';
import { Table, TableHeader } from './TransactionHistory.styled';

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
                    <TransactionItem items={items} />
                </tbody>
            </Table>
        </Box>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }