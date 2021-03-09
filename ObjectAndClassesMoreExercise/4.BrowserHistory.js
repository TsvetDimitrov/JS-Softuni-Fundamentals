// As an input you will receive two parameters: an object and a string array.
// The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. 
// Your task is to fill in the object based on the actions we will get in the array of strings.
// You can open any site in the world as many times as you like; if you do that add it to the open tabs.
// You can close only these tabs you have opened already! If current action contains valid opened site, 
// you should remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
// Browser Logs will hold every single Valid action which you did (Open and Close).
// There"s a special case in which you can get an action that says: "Clear History and Cache". 
// That means you should empty the whole object.
// At the end print the object in format:
// {Browser name}
// Open Tabs: {[…]} // Joined by comma and space
// Recently Closed: {[…]} // Joined by comma and space
// Browser Logs: {[…]} // Joined by comma and space


function browserHistory() {
    let index = 0;
    let input = arguments;
    let currentBrowserState = input[index++];
    let procedures = input[index++];


    procedures.forEach(procedure => {
        procedure = procedure.split(" ");
        let keyWord = procedure.shift();
        let remaining = procedure.join(" ");

        procedure.unshift(keyWord);
        if (keyWord === "Open") {
            currentBrowserState["Open Tabs"].push(remaining);
            currentBrowserState["Browser Logs"].push(procedure.join(" "));
        } else if (keyWord === "Close") {
            currentBrowserState["Open Tabs"].forEach((tab) => {
                if (tab === remaining) {
                    currentBrowserState["Open Tabs"].splice(currentBrowserState["Open Tabs"].indexOf(remaining), 1);

                    currentBrowserState["Recently Closed"].push(remaining);
                    currentBrowserState["Browser Logs"].push(procedure.join(" "));

                }
            })
        } else if (keyWord === "Clear") {
            currentBrowserState["Open Tabs"] = [];
            currentBrowserState["Recently Closed"] = [];
            currentBrowserState["Browser Logs"] = [];
        }
    });

    console.log(currentBrowserState["Browser Name"]);
    console.log(`Open Tabs: ${currentBrowserState["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${currentBrowserState["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${currentBrowserState["Browser Logs"].join(", ")}`);
}


browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);


