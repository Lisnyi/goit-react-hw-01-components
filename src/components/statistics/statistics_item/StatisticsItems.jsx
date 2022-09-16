export const StatisticsItems = ({stats}) => {
    return stats.map(({id, label, percentage}) =>
        (<li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>))
  };