import PropTypes from 'prop-types'
import { getRandomColor } from 'utils/randomColor';
import { Box } from '../../common/Box.jsx';
import { StatisticsItem } from './StatisticsItem/StatisticsItem.jsx';
import { StatisticsTitle, StatisticsList, StatsItem } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Box as='section' py={5}>
            <Box>
                {title && <StatisticsTitle>{title}</StatisticsTitle>}
                <StatisticsList>
                    {stats.map(({id, label, percentage}) =>
                        (<StatsItem key={id} style={{backgroundColor: getRandomColor()}}>
                            <StatisticsItem label={label} percentage={percentage}></StatisticsItem>
                        </StatsItem>))}
                </StatisticsList>
            </Box>
        </Box>
    );
  };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}