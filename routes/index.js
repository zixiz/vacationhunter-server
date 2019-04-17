var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('vacations_db', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});

const Users = sequelize.define('Users',{
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password:Sequelize.STRING,
  role: Sequelize.STRING
})

const Vacations = sequelize.define('vacations', {
  destination: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  start_date: Sequelize.DATEONLY,
  end_date: Sequelize.DATEONLY,
  price: Sequelize.STRING,
  followers: Sequelize.INTEGER
});

const VacationsOnFollow = sequelize.define('follow_vacation', {
  userid: Sequelize.INTEGER,
  vacationid: Sequelize.INTEGER
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', async function(req, res, next) {
  await sequelize.sync();
    let user = await Users.findAll({
        where: {
            username: req.body.username
        }
    });
    if (user.length != 0) {
      res.json({ msg: "Username already exists - Please choose another username." });
  }else{
    let newObjForDB ={
      name:req.body.name,
      username:req.body.username,
      password:req.body.pass,
      role:'user'
    }
    await Users.create(newObjForDB);
    res.json({msg:'User created, you can login now.'});
  }

});

router.get('/checksession', async function(req, res, next) {
  if(req.session.clientName && req.session.role ){
    res.json({id: req.session.id,role:req.session.role, name:req.session.clientName, username:req.session.userName , success:true});
  }else{
    res.json({success:false});
  }
  
});

router.get('/logout', async function(req, res, next) {
  req.session.destroy();
  res.json({status:"logged out"})
});

router.post('/login', async function(req, res, next) {
  let objForLogin={
    username:req.body.username,
    password:req.body.pass
  }
  await sequelize.sync();
    let user = await Users.findAll({
      where: objForLogin
    });
    if(user.length==0){
      res.json({msg:'Username and password incorrect.'});
    
    }else{
        req.session.id = user[0].id;
        req.session.role = user[0].role;
        req.session.clientName = user[0].name;
        req.session.userName = user[0].username;
        
        res.json({id:user[0].id ,role:user[0].role,name:user[0].name,username:user[0].username})
    }
});

router.get('/user', async function(req, res, next) {

    objUser ={
      id: req.session.id,
      name: req.session.clientName,
      username: req.seesion.userName
    }
    // await sequelize.sync();
    // let vacations = await Vacations.findAll({});

    // await sequelize.sync();
    // let vacationsOnFollow = await VacationsOnFollow.findAll({
    //   where: req.session.id
    // });

    res.json(objUser)
});

module.exports = router;
