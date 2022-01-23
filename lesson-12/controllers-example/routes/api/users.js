const express = require("express");
const {NotFound, BadRequest} = require("http-errors");

const {User} = require("../../models");
const {authenticate} = require("../../middlewares");
const {sendEmail} = require("../../helpers");

const {SITE_NAME} = process.env;

const router = express.Router();

router.get("/logout", authenticate, async(req, res)=> {
    const {_id} = req.user;
    await User.findByIdAndUpdate(_id, {token: null});
    res.status(204).send();
});

router.get("/current", authenticate, async(req, res)=> {
    const {name, email} = req.user;
    res.json({
        user: {
            name,
            email
        }
    })
});

router.post("/verify", async(req, res, next)=> {
    try {
        const {email} = req.body;
        if(!email){
            throw new BadRequest("missing required field email");
        }
        const user = await User.findOne({email});
        if(!user){
            throw new NotFound('User not found');
        }
        if(user.verify){
            throw new BadRequest("Verification has already been passed")
        }

        const {verificationToken} = user;
        const data = {
            to: email,
            subject: "Подтверждение email",
            html: `<a target="_blank" href="${SITE_NAME}/users/verify/${verificationToken}">Подтвердить email</a>`
        }

        await sendEmail(data);

        res.json({message: "Verification email sent"});
    } catch (error) {
        next(error);
    }
})

router.get("/verify/:verificationToken", async(req, res, next)=> {
    try {
        const {verificationToken} = req.params;
        const user = await User.findOne({verificationToken});
        if(!user){
            throw new NotFound('User not found');
        }
        await User.findByIdAndUpdate(user._id, {verificationToken: null, verify: true});
        res.json({
            message: 'Verification successful'
        })
    } catch (error) {
        next(error);
    }
})



module.exports = router;