import React from 'react-dom';
import moment from 'moment';

const Calendar = () => {
return (
    <div>{moment().format('DD.MM.YYYY')}</div>
)
}
export default Calendar
