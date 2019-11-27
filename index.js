// Your code here

function createEmployeeRecord(employeeArr) {
  return {
    firstName: employeeArr[0],
    familyName: employeeArr[1],
    title: employeeArr[2],
    payPerHour: employeeArr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
};

function createEmployeeRecords(employeeArrays){
    return employeeArrays.map( employeeArr => {
        return createEmployeeRecord(employeeArr)
    });
}

function createTimeInEvent(employee, dateStamp){
    employee.timeInEvents.push(createEvent("TimeIn", dateStamp))
    return employee
}

function createTimeOutEvent(employee, dateStamp){
    employee.timeOutEvents.push(createEvent("TimeOut", dateStamp))
    return employee
}

function createEvent(type, dateStamp){

    const [year, month, day, hour] = dateStamp.split(/[\s-]/g)

    const event = {
        type: type,
        hour: parseInt(hour),
        date: `${year}-${month}-${day}`
    }

    return event
}

function hoursWorkedOnDate(employee, date){

    const eventOnDate = function(event) { return event.date === date }

    const inTime = employee.timeInEvents.find(eventOnDate).hour;
    const outTime = employee.timeOutEvents.find(eventOnDate).hour;

    return (outTime - inTime) / 100
}
