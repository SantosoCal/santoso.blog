export function beautifyDate(dateString) {
    const date = dateString.substr(0, dateString.indexOf('T'));
    const year = date.substring(0, 4)
    const monthInt = date.substring(5, 7)
    const day = date.substring(8)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthString = monthNames[parseInt(monthInt) - 1]
    
    return monthString + " " + day + ", " + year
}