import PropTypes from 'prop-types'
import { Box } from '../../common/Box.jsx';
import { StatisticsItems } from './StatisticsItem/StatisticsItems.jsx';
import { StatisticsTitle, StatisticsList } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Box as='section' py={5}>
            <Box>
                {title && <StatisticsTitle>{title}</StatisticsTitle>}
                <StatisticsList>
                    <StatisticsItems stats={stats}/>
                </StatisticsList>
            </Box>
        </Box>
    );
  };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}