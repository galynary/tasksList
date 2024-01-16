const users = require('../models/users');

const { HttpError } =require("../helpers/HttpError")
const { ctrlWrapper } = require("../helpers/ctrlWrapper");

const listUsers = async (req, res) => {
  const result = await users.listUsers(); 
  res.json(result); 
}

const getUserById = async (req, res) => {
  const {userId} = req.params; 
  const result = await users.getUserById(userId); 
    if(!result) { 
      throw HttpError(404, `Contact '${userId}' Not found`)
    }
    res.json(result);
}

const addUser = async (req, res) => { 
    const result = await users.addUser(req.body); 
    res.status(201).json(result); 
}

const deleteUser = async (req, res) => {
  const {userId} = req.params;
  const result = await users.removeUser(userId); 
    if(!result) { 
      throw HttpError(404, `Contact '${userId}' Not found`)
    }
    res.status(200).json({
      message: `Contact ${userId} deleted`,
    });
}

const updateUser = async (req, res) => {
  const {userId} = req.params;
  const result = await users.updateUserById(userId, req.body); 
    if(!result) { 
      throw HttpError(404, `Contact '${userId}' Not found`)
    }
    res.json(result);
}

module.exports = { 
  listUsers: ctrlWrapper(listUsers),
  getUserById: ctrlWrapper(getUserById),
  addUser: ctrlWrapper(addUser),
  deleteUser: ctrlWrapper(deleteUser), 
  updateUser: ctrlWrapper(updateUser),
}


// eslint-disable-next-line spaced-comment
/*const userAction = async({action, id, name,email, addres })=> {
	switch (action) {
		case"getAll":
		 const allUsers = await users.getAll();
		 return console.log(allUsers);

		 case"getById":
		  const oneUser = await users.getById(id);
		 return console.log(oneUser);

		 case"addUser":
		 const newUser = await users.addUser({name, email, addres});
		return console.log(newUser);

		case"updateById":
		const updateUser = await users.updateById(id, {name, email, addres});
	   return console.log(updateUser);

	   case"deleteById":
		const deleteById = await users.updateById(id, {name, email, addres});
	   return console.log(updateUser);
	}
}
userAction({action:addUser,id:"rrrytt", name:"Коса Надя",email:"rFnr@hh",addres:"м. Ужгород вул.Міцкевича 5"}) */