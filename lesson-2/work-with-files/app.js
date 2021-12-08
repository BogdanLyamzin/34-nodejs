const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async(action, filePath, data)=> {
    switch(action){
        case "read": 
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            // const data = await fs.readFile(filePath);
            // const text = data.toString();
            // console.log(text);
            break;
        case "add":
            await fs.appendFile(filePath, data);
            break;
        case "replace":
            await fs.writeFile(filePath, data);
            break;
        default: 
            console.log("Unknown action");
    }
};

const filePath = "files/file.txt";
const filePath2 = "files/file2.txt";
const filePath3 = "files/file3.txt";
const filePath4 = "files2/file.txt";
// fileOperation("read", filePath);
const phrase = "Не плюйся - никто не носит золота во рту";
// fileOperation("add", filePath, `\n${phrase}`);
// fileOperation("replace", filePath, `${phrase}`);
// fileOperation("add", filePath2, `${phrase}`);
// fileOperation("replace", filePath3, `${phrase}`);
// fileOperation("replace", filePath4, `${phrase}`);

// fs.readFile("files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

