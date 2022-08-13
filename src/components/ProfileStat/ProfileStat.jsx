import css from './ProfileStat.module.css';
import PropTypes from 'prop-types';
export const ProfileStat = ({ label, children }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.quantity}>{children[0]}</span>
    </>
  );
};
ProfileStat.prototype = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.number.isRequired),
};
