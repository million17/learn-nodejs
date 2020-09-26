console.log((new Date('10/11/2009')).toDateString());
// ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function checkDay(dateString) {
    let dayName;
    // let converString = (new Date(dateString).toString()).slice(0, 3);
    // console.log(new Date(dateString).getDay);
    switch (new Date(dateString).getDay()) {
        case 'Sun':
            dayName = 'Sunday';
            break;
        case 'Mon':
            dayName = 'Monday';
            break;
        case 'Tue':
            dayName = 'Tuesday';
            break;
        case 'Web':
            dayName = 'Wednesday';
            break;
        case 'Thu':
            dayName = 'Thurday';
            break;
        case 'Fri':
            dayName = 'Friday';
            break;
        default:
            dayName = 'Saturday';
    }
}

checkDay('11/10/2010');

console.log(new Date('11/10/2010').getDay());