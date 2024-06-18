

const getUsers = async (req, res) => {
/* To get dummy data 
fetch('http://dummyjson.com/users')
.then(res => res.json())
.then(json => users = json); */
const users = await req.User.find();
  return res.json(users);
};

const createUser = async (req, res) => {
  const user = new req.User(req.body);
  await user.save();
  return res.status(201).json(user);
};

module.exports = { getUsers, createUser };
