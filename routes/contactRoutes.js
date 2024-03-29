const express = require("express");
const router = express.Router();
const {  
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactContoller");
const validateToken = require("../middleware/validateTokenHandler");

//once you made all the contact routes private it should be validated
//using the validateToken middle weare to validate the route
router.use(validateToken);   //this will walidate all the rutes
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;