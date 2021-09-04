import PropTypes from 'prop-types';
import styles from './section.module.css';
const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
