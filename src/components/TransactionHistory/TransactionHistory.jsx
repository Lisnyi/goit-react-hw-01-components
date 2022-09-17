import PropTypes from 'prop-types'
import { TransactionItem } from "components";

export const TransactionHistory = ({items}) => {
    return (
        <table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                <TransactionItem items={items} />
            </tbody>
            </table>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }