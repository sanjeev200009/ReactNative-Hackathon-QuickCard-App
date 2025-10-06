const Role = require('../model/RoleSchema');
const {request} = require("express");

const createRole = async function (req, resp) {
    const {role, description} = req.body;
    try{
        const newRoll = new Role({
            role:role,
            description:description
        });

     const saveData = await newRoll.save();
     return resp.status(201).json({message:'role created', data:saveData})
    }catch (e) {
        resp.status(500).json({error:e});
    }
}
module.exports = {
    createRole
}