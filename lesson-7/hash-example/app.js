const bcrypt = require("bcryptjs");

const password = "123456";

const hashPassword = async(pass)=> {
    const salt = await bcrypt.genSalt(10);
    const result = await bcrypt.hash(pass, salt);
    // console.log("hashPassword", result);
    const compareResult = await bcrypt.compare(pass, result);
    console.log(compareResult);

    const compareResult2 = await bcrypt.compare("123457", result);
    console.log(compareResult2);
}

hashPassword(password);

// const salt = bcrypt.genSaltSync(10);
// const hashPassword = bcrypt.hashSync(password, salt);
// // console.log(hashPassword);

// const compareResult = bcrypt.compareSync(password, hashPassword);
// console.log(compareResult);

// const compareResult2 = bcrypt.compareSync("123457", hashPassword);
// console.log(compareResult2);

