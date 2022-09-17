import PropTypes from 'prop-types'
import { Box } from 'common/Box';
import { StatisticsItems } from './StatisticsItem/StatisticsItems';
import { StatisticsTitle, StatisticsList } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Box as='section' py={5}>
            <Box>
                <StatisticsTitle>{title}</StatisticsTitle>
                <StatisticsList>
                    <StatisticsItems stats={stats}/>
                </StatisticsList>
            </Box>
        </Box>
    );
  };

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}