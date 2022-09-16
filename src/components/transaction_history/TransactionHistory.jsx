import PropTypes from 'prop-types'
import { TransactionItem } from "./transaction_item/TransactionItem";

export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
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