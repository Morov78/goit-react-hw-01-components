import { getRandomHexColor } from 'utils';
import { StatisticElement } from 'components/StatisticElement/StatisticElement';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <StatisticElement label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
