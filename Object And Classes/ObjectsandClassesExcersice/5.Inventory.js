// Create a function which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as array of strings. Each element holds data for a hero, in the following format:
// “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
// You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted alphabetically. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}



function inventory(arr){
    arr.map(iterator => {
        let [name, level, items] = iterator.split(" / ");
        items = items.split(", ").sort((a,b) => a.localeCompare(b)).join(", ");

        return {
            name,
            level: Number(level),
            items
        }
    }).sort((a,b) => a.level - b.level )
    .forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
    
}


inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );