import PropTypes from 'prop-types'
import { TransactionItem, Table, TableHeader } from "../../components";
import { Box } from 'common';

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