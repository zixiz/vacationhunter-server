(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(51)},38:function(e,a,t){},41:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(28),l=t.n(s),c=(t(37),t(38),t(2)),i=t.n(c),o=t(10),m=t(5),u=t(6),d=t(9),p=t(7),h=t(8),f=(t(41),t(15)),E=t(16),v=t(17),b=t(3),N=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",username:"",pass:"",repeat:""},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleText",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"sendToRegister",value:function(){this.props.registerAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Sign Up"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Name is required"},r.a.createElement("span",{className:"label-input100"},"Full Name"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"name",placeholder:"Name..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},r.a.createElement("span",{className:"label-input100"},"Repeat Password"),r.a.createElement("input",{required:!0,onChange:this.handleText.bind(this),className:"input100",type:"password",name:"repeat",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToRegister.bind(this),className:"login100-form-btn"},"Sign Up"))),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},this.props.msg)))))}}]),a}(n.Component),g=Object(b.b)(function(e){return{msg:e.msg}},function(e){return{registerAction:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==(n=e).name&&""!==n.username&&""!==n.pass&&""!==n.repeat){a.next=6;break}console.log("all mendatory"),t({type:"ALL_INPUT_MANDATORY",data:null}),a.next=18;break;case 6:if(n.pass===n.repeat){a.next=11;break}console.log("The password is incorrect"),t({type:"INCORRECTSECOND_PASS",data:null}),a.next=18;break;case 11:return a.next=13,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 13:return r=a.sent,a.next=16,r.json();case 16:s=a.sent,t({type:"REGISTERED",data:s.msg});case 18:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(N),O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",pass:""},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleTextforlogin",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"sendToLogin",value:function(){this.props.LoginAction(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"registerstyle"},r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"login100-more"}),r.a.createElement("div",{className:"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50"},r.a.createElement("form",{className:"login100-form validate-form"}),r.a.createElement("span",{className:"login100-form-title p-b-59"},"Login"),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Username is required"},r.a.createElement("span",{className:"label-input100"},"Username"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"text",name:"username",placeholder:"Username..."}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Password is required"},r.a.createElement("span",{className:"label-input100"},"Password"),r.a.createElement("input",{required:!0,onChange:this.handleTextforlogin.bind(this),className:"input100",type:"password",name:"pass",placeholder:"*************"}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("div",{className:"wrap-login100-form-btn"},r.a.createElement("div",{className:"login100-form-bgbtn"}),r.a.createElement("button",{onClick:this.sendToLogin.bind(this),className:"login100-form-btn"},"Login"))),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Repeat Password is required"},this.props.msg)))))}}]),a}(n.Component),y=Object(b.b)(function(e){return{msg:e.msg}},function(e){return{LoginAction:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==(n=e).username&&""!==n.pass){a.next=5;break}t({type:"LOGIN_ERROR",data:null}),a.next=12;break;case 5:return a.next=7,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return r=a.sent,a.next=10,r.json();case 10:s=a.sent,t({type:"LOGIN_STATUS",data:s});case 12:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(O),w=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.dataAdmin()}},{key:"sendToDelete",value:function(e,a){this.props.deleteVacation(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},this.props.adminvacations.map(function(a){return r.a.createElement("div",{key:a.id,className:"card",style:{width:"18rem"}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"fas fa-edit edit-icon btn btn-light","data-toggle":"modal","data-target":"#edit-modal"}),r.a.createElement("button",{type:"button",className:"fas fa-trash-alt btn btn-light",onClick:e.sendToDelete.bind(e,a.id)})),r.a.createElement("img",{src:a.image,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}))))}}]),a}(n.Component),j=Object(b.b)(function(e){return{adminvacations:e.adminvacations,id:e.id,role:e.role,clientName:e.clientName,userName:e.userName}},function(e){return{dataAdmin:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/admindata");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"ADMIN_DATA",data:n});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())},deleteVacation:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://localhost:3000/deletevacation?vacationId=".concat(e));case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,t({type:"DELETED_VACATION",data:r});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(w),x=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("p",null,"All reports"))}}]),a}(n.Component),k=Object(b.b)(function(e){return{msg:e.msg}},function(e){return{}})(x),T=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={destination:"",description:"",image:"",start_date:"",end_date:"",price:"",msg:""},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"setImgTo64",value:function(e){var a=this,t=e.target.files[0];if("image/jpeg"==t.type){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){a.setState({image:n.result,msg:""})}}else this.setState({msg:"Image must be jpeg type"})}},{key:"handleText",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"uploadVacation",value:function(){""===this.state.image||""===this.state.destination||""===this.state.description||""===this.state.price||""===this.state.start_date?this.setState({msg:"All inputs are required"}):(this.props.UploadVacation(this.state),window.$("#uploadModal").modal("hide"))}},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"modal fade",id:"uploadModal",role:"dialog"},r.a.createElement("div",{class:"modal-dialog modal-dialog-scrollable",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title",id:"modalTitle"},"Add Vacation "),r.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Destination",name:"destination",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Description",name:"description",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",class:"form-control",placeholder:"Start Date",name:"start_date",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",class:"form-control",placeholder:"End Date",name:"end_date",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"number",class:"form-control",placeholder:"Price in $",name:"price",onChange:this.handleText.bind(this)}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"file",class:"form-control",onChange:this.setImgTo64.bind(this)}),r.a.createElement("span",{class:"badge badge-warning"},"jpeg only"))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("span",{class:"badge badge-warning"},this.state.msg)))),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",onClick:this.uploadVacation.bind(this),class:"btn btn-primary"},"Upload"))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"Hello ",this.props.userName),r.a.createElement("span",{class:"badge badge-primary"},"Admin")),r.a.createElement("div",{className:"col-8"},r.a.createElement("button",{className:"btn-nav btn-links"},r.a.createElement(f.b,{className:"btn btn-primary",to:"/allvacations"},"Vacations")),r.a.createElement("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#uploadModal"},"Add vacation"),r.a.createElement("button",{className:"btn-nav btn-links"},r.a.createElement(f.b,{className:"btn btn-primary",to:"/reports"},"Reports")),r.a.createElement("button",{className:"btn-nav btn btn-links"},"Logout")),r.a.createElement(E.a,{exact:!0,path:"/",component:j}),r.a.createElement(E.a,{path:"/allvacations",component:j}),r.a.createElement(E.a,{path:"/reports",component:k})))}}]),a}(n.Component),A=Object(b.b)(function(e){return{userName:e.userName}},function(e){return{UploadVacation:function(a){return e(function(e){return function(){var a=Object(o.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,fetch("http://localhost:3000/addvactions",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return n=a.sent,a.next=6,n.json();case 6:r=a.sent,t({type:"UPLOADED_VACATION",data:r});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(a))}}})(T),C=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={checkedOn:!0,checkedOff:!1},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.DataUser()}},{key:"sendToLogout",value:function(){this.props.Logout()}},{key:"FollowChange",value:function(e,a){!0===a.target.checked?(console.log("checked on"),console.log(e),this.props.AddFollow(e)):this.props.RemoveFollow(e)}},{key:"render",value:function(){var e=this;if("user"==this.props.role)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"VacationHunter")),r.a.createElement("div",{className:"col-4"},r.a.createElement("h3",null,"Hello ",this.props.clientName)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:this.sendToLogout.bind(this),className:"btn btn-primary"},"Logout")))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col"},this.props.vacationOnFollow.map(function(a){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{class:"card-img-top",src:a.image}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("lable",null,"Follow:"),r.a.createElement("input",{onChange:e.FollowChange.bind(e,a.id),checked:e.state.checkedOn,type:"checkbox"}),r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}),this.props.vacationsUnFollow.map(function(a){return r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{class:"card-img-top",src:a.image}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a.destination),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-departure plane-icon"}),a.start_date),r.a.createElement("p",null,r.a.createElement("label",{className:"fas fa-plane-arrival plane-icon"}),a.end_date)),r.a.createElement("li",{className:"list-group-item"},a.price,r.a.createElement("label",{className:"fas fa-dollar-sign dollar-icon"})),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("lable",null,"Follow:"),r.a.createElement("input",{onChange:e.FollowChange.bind(e,a.id),checked:e.state.checkedOff,type:"checkbox"}),r.a.createElement("label",{className:"fas fa-eye eye-icon"},a.followers)))))}))))}}]),a}(n.Component),S=Object(b.b)(function(e){return{role:e.role,clientName:e.clientName,id:e.id,userName:e.userName,vacations:e.vacations,vacationOnFollow:e.vacationOnFollow,vacationsUnFollow:e.vacationsUnFollow}},function(e){return{Logout:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"LOGOUT",data:n});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())},DataUser:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/user");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a({type:"UserData",data:n});case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())},AddFollow:function(a){return e((t=a,function(){var e=Object(o.a)(i.a.mark(function e(a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/addfollow?vacationId=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a({type:"ADD_FOLLOW",data:r});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()));var t},RemoveFollow:function(a){return e((t=a,function(){var e=Object(o.a)(i.a.mark(function e(a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/removefollow?vacationId=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a({type:"REMOVE_FOLLOW",data:r});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()));var t}}})(C),D=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.CheckSession();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.role?"user"===this.props.role?r.a.createElement("div",null,r.a.createElement(S,null)):"admin"===this.props.role?r.a.createElement("div",{className:"container"},r.a.createElement(A,null)):void 0:r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/"},"Login")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/register"},"Register")))),r.a.createElement(E.a,{path:"/",exact:!0,component:y}),r.a.createElement(E.a,{path:"/register/",component:g}))))}}]),a}(n.Component),L=Object(b.b)(function(e){return{role:e.role}},function(e){return{CheckSession:function(){return e(function(){var e=Object(o.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/checksession");case 2:return t=e.sent,e.next=5,t.json();case 5:!0===(n=e.sent).success?a({type:"CHECK_SESSION",data:n}):a({type:"SESSION_FAILED",data:null});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={vacationOnFollow:[],vacationsUnFollow:[],adminvacations:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCORRECTSECOND_PASS":return Object.assign({},e,{msg:"The password is incorrect"});case"ALL_INPUT_MANDATORY":return Object.assign({},e,{msg:"All inputs are mandatory"});case"LOGIN_ERROR":return Object.assign({},e,{msg:"Username and password are mandetory"});case"REGISTERED":return Object.assign({},e,{msg:a.data});case"LOGIN_STATUS":return Object.assign({},e,{role:a.data.role,clientName:a.data.name,id:a.data.id,userName:a.data.username});case"CHECK_SESSION":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.name,userName:a.data.username});case"SESSION_FAILED":return Object.assign({},e,{role:"",clientName:""});case"LOGOUT":return Object.assign({},e,{role:a.data.role,id:a.data.id,clientName:a.data.clientName,userName:a.data.userName});case"UserData":case"ADD_FOLLOW":case"REMOVE_FOLLOW":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.clientName,userName:a.data.userName,vacationOnFollow:a.data.vacationsOnFollow,vacationsUnFollow:a.data.vacationsUnFollow});case"ADMIN_DATA":return Object.assign({},e,{id:a.data.id,role:a.data.role,clientName:a.data.clientName,userName:a.data.username,adminvacations:a.data.adminvacations});case"UPLOADED_VACATION":case"DELETED_VACATION":return Object.assign({},e,{adminvacations:a.data.adminvacations});default:return e}},R=t(20),F=t(31),I=Object(R.c)(U,Object(R.a)(F.a));l.a.render(r.a.createElement(b.a,{store:I},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.dd876726.chunk.js.map