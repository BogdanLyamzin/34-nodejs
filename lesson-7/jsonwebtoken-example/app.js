const jwt = require("jsonwebtoken");

const SECRET_KEY = "2refaasdfhgsdg313fd";

const payload = {
    id: "61ca0df4e03703d28b96c203"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const verifyToken = jwt.verify(`${token}2`, SECRET_KEY);
    console.log(verifyToken);
} catch (error) {
    console.log(error.message);
}
