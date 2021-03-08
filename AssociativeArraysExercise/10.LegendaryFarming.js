// You’ve beaten all the content and the last thing left to accomplish is own a legendary item. 
// However, it’s a tedious process and requires quite a bit of farming. 
// Anyway, you are not too pretentious – any legendary will do. The possible items are:
// •	Shadowmourne – requires 250 Shards;
// •	Valanyr – requires 250 Fragments;
// •	Dragonwrath – requires 250 Motes;
// Shards, Fragments and Motes are the key materials, all else is junk. You will be given as a string, 
// such as 2 motes 3 ores 15 stones. Keep track of the key materials - 
// the first that reaches the 250 mark wins the race. 
// At that point, print the corresponding legendary obtained. 
// Then, print the remaining shards, fragments, motes, ordered by quantity in descending order,
// then by name in ascending order, each on a new line. Finally, print the collected junk items,
// in alphabetical order.
// Input
// •	Input is a string  in format {quantity} {material} {quantity} {material} … {quantity} {material}
// Output
// •	On the first line, print the obtained item in format {Legendary item} obtained!
// •	On the next three lines, print the remaining key materials in descending order by quantity
// o	If two key materials have the same quantity, print them in alphabetical order
// •	On the final several lines, print the junk items in alphabetical order
// o	All materials are printed in format {material}: {quantity}
// o	All output should be lowercase, except the first letter of the legendary


function legendaryFarming(params) {
    let str = params.split(" ");

    const materials = {}

    const legendaryItems = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };

    let result = "";

    for (let i = 0; i < str.length; i += 2) {
        let quantity = Number(str[i]);
        let material = str[i + 1].toLowerCase();

        if (!materials.hasOwnProperty(material)) {
            materials[material] = 0;
        }

        materials[material] += quantity;

        if (materials[material] >= 250 && material in legendaryItems) {
            result += `${legendaryItems[material]} obtained!\n`;
            materials[material] -= 250;
            break;
        }
    }

    for (let item in legendaryItems) {
        if (!materials.hasOwnProperty(item)) {
            materials[item] = 0;
        }
    }

    const legendaryItemsCollected = Object.entries(materials).filter((item) => hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');

    const junkItemsCollected = Object.entries(materials)
        .filter((item) => !hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');


    result += legendaryItemsCollected + '\n' + junkItemsCollected;



    function hasLegendaryItems(items, item) {
        return items.hasOwnProperty(item);
    }

    function sortAlphabetically(a, b) {
        return a.localeCompare(b);
    }

    function sortDescending(a, b) {
        return b - a;
    }

    function formatText(textArr) {
        return `${textArr[0]}: ${textArr[1]}`;
    }

    return result;
}



console.log(legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'));