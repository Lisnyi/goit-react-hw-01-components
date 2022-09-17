import PropTypes from 'prop-types'
import { StatisticsItems, StatisticsTitle, StatisticsList } from "components"
import { Box } from 'common';

export const Statistics = ({title, stats}) => {
    return (
        <Box as='section' py={5} width='100%'>
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