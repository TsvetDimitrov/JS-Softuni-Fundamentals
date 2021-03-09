// You will receive an array with arrays.
// First array (at index 0) will hold all flights on specific sector in the airport. 
// The second array (at index 1) will contain new changed statuses of some of the flights at this airport. 
// The third array (at index 2) will have a single string, which will be flight status you need to check.
//  When you put all flights into an object, 
//  and change the statuses depends on the new information on the second array. 
//  You must print all flights with the given status from the last array.

function flightSchedule(input) {
    let flights = {}

    input[0].forEach(line => {
        let [flyNumber, destination] = line.split(" ");
        flights[flyNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });

    input[1].forEach(line => {
        let [flyNumber, status] = line.split(" ");
        if(flights.hasOwnProperty(flyNumber)){
            flights[flyNumber].Status = status;
        }
    });


    for (let fly in flights){
        if(flights[fly].Status === String(input[2])){
            console.log(flights[fly]);
        }
    }
}



flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);




