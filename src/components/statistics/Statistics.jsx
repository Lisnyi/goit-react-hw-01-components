import PropTypes from 'prop-types'
import { StatisticsItems } from "components/Statistics/StatisticsItem/StatisticsItems"

export const Statistics = ({title, stats}) => {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                <StatisticsItems stats={stats}/>
            </ul>
        </section>
    );
  };

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}