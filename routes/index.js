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
  username: Sequelize.STRING,
  vacationid: Sequelize.INTEGER
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addvactions', async function(req, res, next) {
    let objAddVacation = {
      destination: req.body.destination,
      description: req.body.description,
      image: req.body.image,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      price: req.body.price,
      followers:0
    };
    console.log(objAddVacation);
    await Vacations.create(objAddVacation);
    res.json({msg:'vacation created'});
    
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
    res.json({id: req.session.id,role:req.session.role, clientName:req.session.clientName, username:req.session.username, vacations:req.session.vacations , success:true});
  }else{
    res.json({success:false});
  }
  
});

router.get('/logout', async function(req, res, next) {
    req.session.destroy(()=>{
      res.json({role:"",id:"",clientName:"",userName:""})
    })
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
        req.session.username = user[0].username;
        
        res.json({id:user[0].id ,role:user[0].role,name:user[0].name,username:user[0].username})
    }
});

router.get('/user', async function(req, res, next) {
  await sequelize.sync();
  let vacationsOnFollow=[];
  let vacationsUnFollow=[];
  let allVacations = await Vacations.findAll({});
  let followVacationsFromDB= await VacationsOnFollow.findAll({where:{username:req.session.username}});
  if(followVacationsFromDB.length > 0){
    for (let i = 0; i < allVacations.length; i++) {
      let check =  followVacationsFromDB.find(follow=> follow.vacationid === allVacations[i].id);
      console.log(check)
      if(check === undefined){
        vacationsUnFollow.push(allVacations[i]);
      }else{
        vacationsOnFollow.push(allVacations[i]);
      }
    }
    res.json({vacationsOnFollow:vacationsOnFollow,vacationsUnFollow:vacationsUnFollow,id:req.session.id,
    role:req.session.role,clientName:req.session.clientName,userName:req.session.username});
  }else{
    res.json({vacationsOnFollow:vacationsOnFollow,vacationsUnFollow:allVacations,id:req.session.id,
    role:req.session.role,clientName:req.session.clientName,userName:req.session.username});
  }
});

router.get('/addfollow', async function(req, res, next) {
  // Add +1 follow to Vacations table
  await sequelize.sync();
  let vacationfollowers = await Vacations.findAll({
    where:{
      id:req.query.vacationId
    }
  });
  let addfollow = vacationfollowers[0].followers +1;
  await Vacations.update({followers:addfollow},{
    where:{id:req.query.vacationId}
  });
  // create new row in db of vacations on follow
  let newObjForDB ={
    username:req.session.username,
    vacationid:req.query.vacationId
  }
  await VacationsOnFollow.create(newObjForDB);
  // create new arrays of follow and not
  let vacationsOnFollow=[];
  let vacationsUnFollow=[];
  let allVacations = await Vacations.findAll({});
  let followVacationsFromDB= await VacationsOnFollow.findAll({where:{username:req.session.username}});
  if(followVacationsFromDB.length > 0){
    for (let i = 0; i < allVacations.length; i++) {
      let check =  followVacationsFromDB.find(follow=> follow.vacationid === allVacations[i].id);
      console.log(check)
      if(check === undefined){
        vacationsUnFollow.push(allVacations[i]);
      }else{
        vacationsOnFollow.push(allVacations[i]);
      }
    }
    res.json({vacationsOnFollow:vacationsOnFollow,vacationsUnFollow:vacationsUnFollow,id:req.session.id,
    role:req.session.role,clientName:req.session.clientName,userName:req.session.username});
  }else{
    res.json({vacationsOnFollow:vacationsOnFollow,vacationsUnFollow:allVacations,id:req.session.id,
    role:req.session.role,clientName:req.session.clientName,userName:req.session.username});
  }
});

router.get('/removefollow', async function(req, res, next) {
  await sequelize.sync();
  let vacationfollowers = await Vacations.findAll({
    where:{
      id:req.query.vacationId
    }
  });
  let reducefollow = vacationfollowers[0].followers -1;
  await Vacations.update({followers:reducefollow},{
    where:{id:req.query.vacationId}
  });
  // delete row in db of vacations on follow
  await VacationsOnFollow.destroy({
    where:{username:req.session.username,vacationid:req.query.vacationId}
  });
  // data again
  let vacationsOnFollow=[];
  let vacationsUnFollow=[];
  let allVacations = await Vacations.findAll({});
  let followVacationsFromDB= await VacationsOnFollow.findAll({where:{username:req.session.username}});
  if(followVacationsFromDB.length > 0){
    for (let i = 0; i < allVacations.length; i++) {
      let check =  followVacationsFromDB.find(follow=> follow.vacationid === allVacations[i].id);
      console.log(check)
      if(check === undefined){
        vacationsUnFollow.push(allVacations[i]);
      }else{
        vacationsOnFollow.push(allVacations[i]);
      }
    }
    res.json({vacationsOnFollow:vacationsOnFollow,vacationsUnFollow:vacationsUnFollow,id:req.session.id,
    role:req.session.role,clientName:req.session.clientName,userName:req.session.username});
  }else{
    res.json({vacationsOnFollow:vacationsOnFollow,vacationsUnFollow:allVacations,id:req.session.id,
    role:req.session.role,clientName:req.session.clientName,userName:req.session.username});
  }
});

module.exports = router;
