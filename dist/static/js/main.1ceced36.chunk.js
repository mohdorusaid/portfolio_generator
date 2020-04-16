(this.webpackJsonpmyboilerplate=this.webpackJsonpmyboilerplate||[]).push([[0],{272:function(e,t,a){e.exports=a(472)},277:function(e,t,a){},289:function(e,t,a){},471:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(277),a(11)),i=a(12),s=a(14),u=a(13),h=a(15),p=(a(278),a(30)),m=a(49),d=a(26),f=a(65),g=a.n(f);a(283),a(286),a(473);g.a.initializeApp({apiKey:"AIzaSyCQqisJ3uWkiW0_76X7y_PzoeoOjbM6hec",authDomain:"portfoliogenerator-f75bf.firebaseapp.com",databaseURL:"https://portfoliogenerator-f75bf.firebaseio.com",projectId:"portfoliogenerator-f75bf",storageBucket:"portfoliogenerator-f75bf.appspot.com",messagingSenderId:"177201420332",appId:"1:177201420332:web:767a73243151af7cf79989"}),g.a.firestore().settings({});var E=g.a.auth(),b=new g.a.auth.GoogleAuthProvider,v=g.a.storage(),j=g.a,O=(a(67),a(502)),k=a(506),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSignIn=function(e){a.props.signIn()},a.handleSignOut=function(e){a.props.signOut()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth;return console.log(this.props),r.a.createElement(O.a,null,r.a.createElement("div",{className:"vertical-center center"},e?e.uid?r.a.createElement("div",null,r.a.createElement("h1",null,"Signed In!"),r.a.createElement(k.a,{onClick:this.handleSignOut},"Sign Out"),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/create"},"Create Portfolio"))):r.a.createElement("div",null,r.a.createElement("div",{className:"vertical-center"},r.a.createElement("h1",null,"Sign In To Continue."),r.a.createElement(k.a,{onClick:this.handleSignIn},"Sign in with Google")),r.a.createElement("div",null)):null))}}]),t}(r.a.Component),S=Object(d.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signIn:function(){return e((function(e,t){console.log("signing in.."),E.signInWithPopup(b).then((function(){e({type:"SIGNIN_SUCCESS"})})).catch((function(t){e({type:"SIGNIN_ERR",err:t})}))}))},signOut:function(){return e((function(e,t){E.signOut().then((function(){e({type:"SIGN_OUT"})}))}))}}}))(y),C=a(64),N=a(77),x=a(515),w=a(514),P=a(512),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).goToNextStep=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.values;return console.log("VALUES FROM BASICS",e),r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"Let's get the basics out first."),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"center",style:{width:"60%"}},r.a.createElement("div",null,r.a.createElement("h3",null,"What Defines You?"),r.a.createElement(x.a,{control:r.a.createElement(w.a,{onChange:this.props.handleRoles,id:"Developer",className:"roles",defaultChecked:e.roles.includes("Developer")}),label:"Developer"}),r.a.createElement(x.a,{control:r.a.createElement(w.a,{onChange:this.props.handleRoles,id:"Designer",className:"roles",defaultChecked:e.roles.includes("Designer")}),label:"Designer"}),r.a.createElement(x.a,{control:r.a.createElement(w.a,{onChange:this.props.handleRoles,id:"Filmmaker",className:"roles",defaultChecked:e.roles.includes("Filmmaker")}),label:"Filmmaker"})),r.a.createElement("div",null,r.a.createElement(P.a,{id:"intro",label:"Say something about you",multiline:!0,rows:3,fullWidth:!0,onChange:this.props.handleChange("intro"),defaultValue:e.intro})),r.a.createElement("h1",{style:{marginTop:"2px",marginBottom:"2px"}},"Your Social Media Handles."),r.a.createElement("div",null,r.a.createElement(P.a,{id:"facebook",label:"Your Facebook URL",fullWidth:!0,onChange:this.props.handleChange("facebook"),defaultValue:e.facebook}),r.a.createElement(P.a,{id:"linkedIn",label:"Your LinkedIn URL",fullWidth:!0,onChange:this.props.handleChange("linkedIn"),defaultValue:e.linkedIn}),r.a.createElement(P.a,{id:"twitter",label:"Your Twitter URL",fullWidth:!0,onChange:this.props.handleChange("twitter"),defaultValue:e.twitter}),r.a.createElement(P.a,{id:"github",label:"Your GitHub URL",fullWidth:!0,onChange:this.props.handleChange("github"),defaultValue:e.github})),r.a.createElement(k.a,{onClick:this.goToNextStep,className:"next-button"},"Next"))))}}]),t}(r.a.Component),R=(a(289),a(256)),T=a.n(R),A=a(507),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={image:"",url:"",uploading:!1},a.goToNextStep=function(e){e.preventDefault(),a.props.nextStep()},a.goToPreviousStep=function(e){e.preventDefault(),a.props.prevStep()},a.handleFile=function(e){console.log(e);var t=e[0],n=v.ref("images/"+a.props.authId+".png"),r=v.ref("images/"+a.props.authId+"_300x300.png");n.put(t).then((function(){n.getDownloadURL().then((function(e){a.setState({uploading:!0}),setTimeout((function(){r.getDownloadURL().then((function(e){a.props.handlePicture(e),a.setState({uploading:!1})})).catch((function(e){console.log(e)}))}),5e3)})).catch((function(e){a.setState({err:e})}))}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.values.photoURL;return console.log(this.state),r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Identify Yourself!"),r.a.createElement("h3",null,"Upload A Picture."),e.length>0?r.a.createElement("div",null,r.a.createElement("h1",null,"Your Picture"),r.a.createElement("img",{src:e,width:"40%",height:"40%"})):null,this.state.uploading?r.a.createElement("div",null,r.a.createElement(A.a,null),r.a.createElement("h5",null,"Uplaoding Picture")):null,r.a.createElement(T.a,{withIcon:!0,buttonText:"Choose images",onChange:this.handleFile,imgExtension:[".jpg",".png"],maxFileSize:5242880,singleImage:!0}),this.state.err?r.a.createElement("h1",null,this.state.err.message):null,r.a.createElement("span",null,r.a.createElement(k.a,{onClick:this.goToPreviousStep},"Previous"),r.a.createElement(k.a,{onClick:this.goToNextStep},"Next")))}}]),t}(r.a.Component),L=a(513),U=a(508),W=a(21),F=a(23),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.categories,n=t.skills,l=t.values;return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Add Your Skills."),r.a.createElement("h3",null,"You Can Also Update Them Later."),r.a.createElement(L.a,null,a&&a.map((function(t){return r.a.createElement(U.a,{eventKey:t,title:t},n&&n.filter((function(e){return e.category===t})).map((function(t){return r.a.createElement(x.a,{key:t.id,control:r.a.createElement(w.a,{id:t.name,onChange:e.props.handleSkills(t),defaultChecked:l.skills.some((function(e){return e.name===t.name}))}),label:t.name.toUpperCase()})})))}))),r.a.createElement("span",null,r.a.createElement(k.a,{onClick:this.props.prevStep},"Previous"),r.a.createElement(k.a,{onClick:this.props.nextStep},"Next")))}}]),t}(r.a.Component),G=Object(W.d)(Object(d.b)((function(e){return{skills:e.firestore.ordered.skills}})),Object(F.firestoreConnect)([{collection:"skills"}]))(Y),_=a(516),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",description:"",link:"",category:[]},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleChecks=function(e){if(e.target.checked){var t=a.state.category.concat(e.target.id);a.setState({category:t})}else{var n=a.state.category.filter((function(t){return t!==e.target.id}));a.setState({category:n})}},a.handleSubmit=function(e){e.preventDefault(),a.props.handleProject(a.state)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.categories,n=t.projects;return console.log(this.props),r.a.createElement(O.a,null,r.a.createElement("div",{className:"center"},r.a.createElement("div",null,r.a.createElement("h1",null,"Add A Project."),r.a.createElement("h3",null,"You can add more later."),r.a.createElement("div",{className:"center"},r.a.createElement(P.a,{id:"title",label:"Name Of Your Project",fullWidth:!0,onChange:this.handleChange}),r.a.createElement(P.a,{id:"description",label:"Say something about this project",multiline:!0,rows:3,fullWidth:!0,onChange:this.handleChange}),r.a.createElement("h1",null,"Choose Category"),a&&a.map((function(t){return r.a.createElement(x.a,{key:t,control:r.a.createElement(w.a,{id:t,onChange:e.handleChecks}),label:t})})),r.a.createElement(P.a,{id:"link",label:"Link To Your Project",fullWidth:!0,onChange:this.handleChange}),r.a.createElement(k.a,{onClick:this.handleSubmit},"Create Project")),r.a.createElement("div",{className:"created-projects"},r.a.createElement("h1",null,"Created Projects Appear Here!"),n?n.length>0&&n.map((function(e){return r.a.createElement(_.a,{label:e.title})})):r.a.createElement("h1",null,"No Projects.Yet."))),r.a.createElement("span",null,r.a.createElement(k.a,{onClick:this.props.prevStep},"Previous"),r.a.createElement(k.a,{onClick:this.props.createPortfolio,disabled:this.props.validated},"Create Portfolio")),r.a.createElement("div",null,this.props.created?r.a.createElement("a",{href:"/"+this.props.id},"Go to Portfolio"):r.a.createElement("h5",null,"Link will appear here after creating Portfolio"))))}}]),t}(r.a.Component),B=a(62),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,name:"",email:"",intro:"",facebook:"",github:"",twitter:"",linkedIn:"",roles:[],photoURL:"",skills:[],projects:[],exists:!1},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handlePicture=function(e){a.setState({photoURL:e})},a.handleRoles=function(e){if(e.target.checked){console.log(e.target.id,"Checked!");var t=a.state.roles.concat(e.target.id);a.setState({roles:t})}else{var n=a.state.roles.filter((function(t){return t!==e.target.id}));a.setState({roles:n})}},a.handleSkills=function(e){return function(t){if(t.target.checked){console.log(e,"Checked!");var n=a.state.skills.concat({name:e.name,category:e.category,icon:e.icon});a.setState({skills:n})}else{console.log(t.target.id,"Unchecked!");var r=a.state.skills.filter((function(e){return e.name!==t.target.id}));a.setState({skills:r})}}},a.handleChange=function(e){return function(t){a.setState(Object(N.a)({},e,t.target.value))}},a.handleProject=function(e){var t=a.state.projects;console.log(e,"Adding it!");var n=t.concat(Object(C.a)({},e));a.setState({projects:n})},a.handlePortfolio=function(e){e.preventDefault(),a.props.createPortfolio(a.state)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.auth;console.log(this.props),e.uid&&this.setState({uid:e.uid,name:e.displayName,email:e.email})}},{key:"render",value:function(){var e=Object(C.a)({},this.state);if(!this.state.exists){var t=this.props.portfolio;if(t&&t.length>0){var a=t[0];this.setState(Object(C.a)({},a,{exists:!0}))}}var n=this.state.step;switch(console.log(this.state),n){case 1:return r.a.createElement(I,{nextStep:this.nextStep,handleChange:this.handleChange,handleRoles:this.handleRoles,values:e});case 2:return r.a.createElement(D,{nextStep:this.nextStep,prevStep:this.prevStep,handlePicture:this.handlePicture,authId:this.props.auth.uid,values:e});case 3:return r.a.createElement(G,{prevStep:this.prevStep,nextStep:this.nextStep,categories:e.roles,handleSkills:this.handleSkills,values:e});case 4:return r.a.createElement(H,{categories:e.roles,projects:e.projects,handleProject:this.handleProject,prevStep:this.prevStep,createPortfolio:this.handlePortfolio,created:this.props.portfolio[0],validated:!(this.state.projects.length>0&&this.state.intro.length>0&&this.state.facebook.length>0&&this.state.roles.length>0&&this.state.photoURL.length>0&&this.state.skills.length>0),id:this.props.auth.uid});default:return r.a.createElement("div",null,r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"There seems to be an error."),r.a.createElement("a",{href:"/"},"Go to Home"))}}}]),t}(r.a.Component),M=Object(W.d)(Object(d.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createPortfolio:function(t){return e(function(e){return function(t){var a=Object(B.getFirestore)(),n=e.uid,r=Object(C.a)({},e,{exists:!1});a.collection("portfolios").doc(n).set(Object(C.a)({},r)).then(t({type:"ADD_PORTFOLIO_SUCCESS"})).catch((function(e){return t({type:"ADD_PORTFOLIO_ERROR",err:e})}))}}(t))}}})),Object(F.firestoreConnect)((function(e){return[{collection:"portfolios",doc:e.user,storeAs:"portfolio"}]})))(V),z=a(474),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.skills,a=e.categories;return console.log(this.props),r.a.createElement("div",{className:"center"},r.a.createElement(O.a,null,r.a.createElement(z.a,{elevation:3},a&&a.map((function(e){var a=t.filter((function(t){return t.category===e}));if(a.length>0)return r.a.createElement("div",{style:{paddingTop:"5px",wordWrap:"break-word",paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}},"Developer"===e&&a.length>0?a.map((function(e){return r.a.createElement("a",{href:"#",className:e.icon+" colored",style:{fontSize:"40px",textDecoration:"none"}})})):null,"Designer"===e&&a.length>0?a.map((function(e){return r.a.createElement("img",{src:e.icon})})):null,"Filmmaker"===e&&a.length>0?a.map((function(e){return r.a.createElement("img",{src:e.icon})})):null)})))))}}]),t}(r.a.Component),K=(a(471),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.facebook,a=e.linkedIn,n=e.twitter,l=e.github;return r.a.createElement("span",{className:"center"},r.a.createElement("a",{href:t,className:"fa fa-facebook custom"}),a.length>0?r.a.createElement("a",{href:a,className:"fa fa-linkedin custom"}):null,n.length>0?r.a.createElement("a",{href:a,className:"fa fa-twitter custom"}):null,l.length>0?r.a.createElement("a",{href:l,className:"fa fa-github custom"}):null)}}]),t}(r.a.Component)),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.portfolio;return e?e.length>0?r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"circular center",style:{width:"200px",height:"200px"}},r.a.createElement("img",{src:e[0].photoURL,alt:"profile-picture"})),r.a.createElement("h1",null,"Hello,World!"),r.a.createElement("span",{style:{wordWrap:"break-word"}},r.a.createElement("h4",null,e[0].email)),r.a.createElement("span",{style:{wordWrap:"break-word"}},r.a.createElement("h2",null,e[0].name,".")),r.a.createElement("span",{style:{width:"100%",wordWrap:"break-word"}},r.a.createElement("h2",null,e[0].roles.map((function(e){return e+". "})))),r.a.createElement(O.a,null,r.a.createElement("div",{className:"social-media-section"},r.a.createElement(K,{facebook:e[0].facebook,twitter:e[0].twitter,email:e[0].email,linkedIn:e[0].linkedIn,github:e[0].github})),r.a.createElement("div",{className:"center",style:{marginTop:"10px",marginBottom:"10px"}},r.a.createElement(z.a,{elevation:3},r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("h4",null,e[0].intro)))),r.a.createElement("div",{className:"main-content"},r.a.createElement("h1",null,"My Skills."),r.a.createElement(O.a,null,r.a.createElement("div",{className:"center"},r.a.createElement(J,{skills:e[0].skills,categories:e[0].roles}))),r.a.createElement("span",null,r.a.createElement(p.b,{to:this.props.match.url+"/projects"},r.a.createElement(k.a,null,"Go To Projects")),r.a.createElement(p.b,{to:this.props.match.url+"/achievements"},r.a.createElement(k.a,null,"Go To achievements"))),r.a.createElement("div",null,this.props.auth.uid===this.props.match.params.id?r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement("h3",null,"Add Something Today."),r.a.createElement("span",null,r.a.createElement(p.b,{to:"/create"},r.a.createElement(k.a,null,"Update Portfolio")))):this.props.auth.uid?r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement("h1",null,"Hi,there!"),r.a.createElement(p.b,{to:"/"+this.props.auth.uid},r.a.createElement(k.a,null,"GO TO YOUR PROFILE"))):r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement("h5",null,"Want a Portfolio?"),r.a.createElement(p.b,{to:"/"},"TAKE ME THERE")))))):r.a.createElement("div",{className:"vertical-center"},r.a.createElement("h1",null,"No Portfolio Exists 404")):r.a.createElement("div",{className:"vertical-center"},r.a.createElement(A.a,null))}}]),t}(r.a.Component),Q=Object(W.d)(Object(d.b)((function(e){return{portfolio:e.firestore.ordered.portfolios,auth:e.firebase.auth}})),Object(F.firestoreConnect)((function(e){return[{collection:"portfolios",doc:e.match.params.id}]})))(q),X=a(509),$=a(510),Z=a(511),ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.portfolio;return e?e.length>0?r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,e[0].name,"'s Projects"),e[0].projects.map((function(e,t){return r.a.createElement(X.a,{key:t},r.a.createElement($.a,null,r.a.createElement("h1",null,e.title),r.a.createElement("h4",null,"Tags"),r.a.createElement("span",null,e.category.map((function(e){return r.a.createElement(_.a,{label:e,key:e})}))),r.a.createElement("p",null,e.description)),r.a.createElement(Z.a,null,r.a.createElement("div",{className:"center"},r.a.createElement(p.b,{to:e.link},r.a.createElement(k.a,null,"Check it out")))))}))):null:r.a.createElement("div",{className:"vertical-center"},r.a.createElement(A.a,null))}}]),t}(r.a.Component),te=Object(W.d)(Object(d.b)((function(e){return{portfolio:e.firestore.ordered.portfolios}})),Object(F.firestoreConnect)((function(e){return[{collection:"portfolios",doc:e.match.params.id}]})))(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Coming Soon...")))}}]),t}(r.a.Component),ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth;return e.isLoaded?e.isEmpty?r.a.createElement("div",{className:"vertical-center center"},r.a.createElement("h1",null,"Not Signed In!"),r.a.createElement("a",{href:"/"},"Sign In Here.")):r.a.createElement("div",{className:"center"},r.a.createElement(M,{user:e.uid,portfolio:this.props.portfolio})):r.a.createElement("div",{className:"vertical-center"},r.a.createElement(A.a,null))}}]),t}(r.a.Component),re=Object(W.d)(Object(d.b)((function(e){return{auth:e.firebase.auth,portfolio:e.firestore.ordered.portfolio}})),Object(F.firestoreConnect)((function(e){return[{collection:"portfolios",doc:e.auth.uid,storeAs:"portfolio"}]})))(ne),le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:S}),r.a.createElement(m.a,{path:"/create",component:re}),r.a.createElement(m.a,{exact:!0,path:"/:id",component:Q}),r.a.createElement(m.a,{exact:!0,path:"/:id/projects",component:te}),r.a.createElement(m.a,{exact:!0,path:"/:id/achievements",component:ae}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(W.c)({firebase:F.firebaseReducer,firestore:B.firestoreReducer}),ce=a(262),ie=Object(W.e)(oe,Object(W.d)(Object(W.a)(ce.a.withExtraArgument({getFirebase:F.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(j),Object(F.reactReduxFirebase)(j,{attachAuthIsReady:!0})));ie.firebaseAuthIsReady.then((function(){o.a.render(r.a.createElement(d.a,{store:ie},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}))},67:function(e,t,a){}},[[272,1,2]]]);
//# sourceMappingURL=main.1ceced36.chunk.js.map