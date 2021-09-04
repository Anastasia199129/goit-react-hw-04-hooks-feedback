import PropTypes from 'prop-types'
import s from './notification.module.css'
const Notification = ({ message }) => {
    return (
        <p className={s.p}>{message}</p>
    )
}


Notification.propTypes = {
   message: PropTypes.string 
}

export default Notification

