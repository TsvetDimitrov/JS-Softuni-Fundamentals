// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension.
//  (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).


function extractFile(string){

    let pointIndex = string.lastIndexOf(".")
    let extension = string.substring(pointIndex+1);


    let lastLine = string.lastIndexOf("\\");
    let fileName = string.substring(lastLine+1, pointIndex);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}


extractFile('C:\\Internal\\training-internal\\Template.pptx');
