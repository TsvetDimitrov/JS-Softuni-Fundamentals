// Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
// The input comes as a single string. The words will be separated by a single space.


function oddOccurences(input){
    let elements = input.split(" ").map((ele) => ele.toLowerCase());

    let map = generateMap(new Set(elements));

    elements.forEach((ele) => {
        map.set(ele, map.get(ele) + 1);
    });

    let output = "";
    Array.from(map.entries()).forEach((kvpArr) => {
        let [key, value] = kvpArr;
        if(Number(value) % 2 !== 0){
            output += key + " ";
        }
    });

    console.log(output);

    function generateMap(set){
        let map = new Map();

        set.forEach((ele) => {
            map.set(ele, 0);
        });


        return map; 
    }
}


oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
