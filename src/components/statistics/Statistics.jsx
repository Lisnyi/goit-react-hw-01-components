import { StatisticsItems } from "components/statistics/statistics_item/StatisticsItems"

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                <StatisticsItems stats={stats}/>
            </ul>
        </section>
    );
  };