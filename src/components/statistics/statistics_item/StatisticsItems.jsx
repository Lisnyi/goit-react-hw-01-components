import PropTypes from 'prop-types'

export const StatisticsItems = ({stats}) => {
    return stats.map(({id, label, percentage}) =>
        (<li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>))
  };

StatisticsItems.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}