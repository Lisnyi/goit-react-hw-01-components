import PropTypes from 'prop-types'

export const StatisticsItem = ({label, percentage}) => {
    return  <>
                <span>{label}</span>
                <span>{percentage}%</span>
            </>
  };

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}