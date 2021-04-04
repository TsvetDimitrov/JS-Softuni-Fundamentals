// Write a function that orders an array of strings, by their length in ascending order as primary criteria,
// and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.


function sortAnArrayBy2Criteria(arr){
    arr.sort(twoCriteriaSort);
    arr.forEach(el => console.log(el));


    function twoCriteriaSort(cur, next){
        if(cur.length === next.length){
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }
}

sortAnArrayBy2Criteria(['Deny',
'omen',
'test',
'Default']);
