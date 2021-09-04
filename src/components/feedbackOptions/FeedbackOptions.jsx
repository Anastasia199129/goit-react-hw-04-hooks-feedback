import PropTypes from 'prop-types'
import styles from './feedbackOptions.module.css';


    
const FeedbackOptions = ({ onButtonIncrement }) => {
    return (<div className={styles.conteiner}>
          <button className={styles.button} type="button" name="good" onClick={onButtonIncrement}>
            Good
          </button>
          <button className={styles.button} type="button" name="neutral" onClick={onButtonIncrement}>
            Neutral
          </button>
          <button className={styles.button} type="button" name="bad" onClick={onButtonIncrement}>
            Bad
          </button>
        </div> )
}

FeedbackOptions.propTypes = {
   onButtonIncrement: PropTypes.func 
}

export default FeedbackOptions
    
