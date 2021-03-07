// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
// When guests come to the party check if he/she exists in any of the two reservation lists. 
// The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
// All VIP numbers start with digit
// When you receive the command "PARTY" the guests start coming.
// Print the count of guests then all guest, who didn't come to the party (VIP must be first) 




function partyTime(input){

    let partyIndex = input.indexOf("PARTY");
    let guestList = input.slice(0, partyIndex);
    let commingGuest = input.slice(partyIndex + 1);

    
    let reservationList = generateGuestList(guestList);

    commingGuest.forEach((guest) => {
        let status = checkForVIP(guest);
        let correctList = status ? "vip" : "regular";
        let currentGuest = reservationList[correctList].find((o) => o.guest === guest)
        if(status && currentGuest){
            currentGuest.isHere = true; 
        }else if(!status && currentGuest){
            currentGuest.isHere = true;
        }
        
    });
    let vipGuests = reservationList.vip.filter((o) => o.isHere === false)
    let regularGuests = reservationList.regular.filter((o) => o.isHere === false)
    
    console.log(vipGuests.length + regularGuests.length);

    vipGuests.concat(regularGuests).forEach((guest) => console.log(guest.guest));
    

    function generateGuestList(guests){
        let obj = {
            vip: [],
            regular: []
        };

        guests.forEach((guest) => {
            let guestObj = { guest, isHere: false }
            if(checkForVIP(guest)){
                obj.vip.push(guestObj)
            }else{
                obj.regular.push(guestObj)

            }
        });

        return obj;
    }
    function checkForVIP(guest){
        return !isNaN(Number(guest[0]));
    }

}



partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
