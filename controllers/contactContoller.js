const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.status(200).json({message: "Get all Contacts"});
};

//@desc Post all contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) =>{
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    res.status(201).json({message: "Create Contacts"});
});

//@desc Get new contacts
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) =>{
    res.status(200).json({message: `Get Contacts for ${req.params.id}`});
};

//@desc Update all contacts
//@route UPDATE /api/contacts/:id
//@access public
const updateContact = (req,res) =>{
    res.status(200).json({message: `Update Contacts for ${req.params.id}`});
};

//@desc Delete all contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) =>{
    res.status(200).json({message: `Delete Contacts for ${req.params.id}`});
};


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    
  };