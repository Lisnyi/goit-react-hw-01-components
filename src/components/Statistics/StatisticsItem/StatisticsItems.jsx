import PropTypes from 'prop-types'
import { getRandomColor } from 'utils/randomColor';
import { StatisticsItem } from './StatisticsItems.styled';

export const StatisticsItems = ({stats}) => {
    return stats.map(({id, label, percentage}) =>
        (<StatisticsItem key={id} style={{backgroundColor: getRandomColor()}}>
            <span>{label}</span>
            <span>{percentage}%</span>
        </StatisticsItem>))
  };

StatisticsItems.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}