(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){},296:function(e,t,n){e.exports=n(562)},301:function(e,t,n){},360:function(e,t,n){},362:function(e,t,n){},447:function(e,t,n){},562:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(276),c=n.n(r),s=(n(301),n(8)),i=n(9),l=n(17),u=n(16),g=n(18),p=n(568),m=n(566),f=n(565),d=n(569),b=Object(d.a)(function(e){return o.a.createElement("nav",{className:"nav wrapper blue darken-3"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"brand-logo"},"Marco Maigua"),o.a.createElement("ul",{className:"right"},o.a.createElement("li",null,o.a.createElement(f.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(f.a,{to:"/blogFirebasePage"},"Blog")),o.a.createElement("li",null,o.a.createElement(f.a,{to:"/projects"},"Projects")))))}),h=n(28),E=n(115),O=n.n(E);n(353),n(356),n(358),n(563);O.a.initializeApp({apiKey:"AIzaSyCaStbOcXxRGzjLmYzL_-IwTKdZAVjK5YY",authDomain:"cms-personal.firebaseapp.com",databaseURL:"https://cms-personal.firebaseio.com",projectId:"cms-personal",storageBucket:"cms-personal.appspot.com",messagingSenderId:"524767534957"}),O.a.firestore().settings({timestampsInSnapshots:!0});var j=O.a,v=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"getValues",value:function(e){return j.database().ref(e).once("value")}},{key:"getDocuments",value:function(e){return j.firestore().collection(e).get()}},{key:"getDocument",value:function(e,t){return j.firestore().collection(e).doc(t).get()}},{key:"getValueByKey",value:function(e,t){return j.database().ref(e).orderByKey().equalTo(t).once("child_added")}},{key:"setValue",value:function(e,t){return j.database().ref(e).set(t)}},{key:"saveFile",value:function(e,t,n){var a=new Blob(["/home/nemesis1346/Documents/UniversityProjects/takijunchik/react-front-end/data/audioFiles/audio.mp3"],{type:"audio/mp3"});return j.storage().ref(e+"/"+t).put(a,{contentType:"audio/mp3"})}},{key:"getImage",value:function(e){return j.storage().ref().child(e).getDownloadURL()}}]),e}(),L=function(e){return{type:"GET_GITLAB_LOGO_SUCCESS",gitlabLogo:e}},S=function(e){return{type:"GET_GITHUB_LOGO_SUCCESS",githubLogo:e}},y=function(e){return{type:"GET_LINKEDIN_LOGO_SUCCESS",linkedinLogo:e}},_=function(e){return{type:"GET_MEDIUM_LOGO_SUCCESS",mediumLogo:e}},P=function(e){return{type:"GET_CONTENT_SUCCESS",professionalProfileContent:e.spanish}},C=function(e){return{type:"GET_IMAGE_SUCCESS",professionalProfilePhoto:e}},k=function(e){return{type:"ERROR_MIDDLEWARE",message:e}},R=(n(360),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getProfessionalImage(),this.props.getProfessionalContent(),this.props.getLinkedinLogo(),this.props.getLinkedinLogo(),this.props.getGithubLogo(),this.props.getGitlabLogo(),this.props.getMediumLogo()}},{key:"render",value:function(){var e=this.props,t=e.professionalProfilePhoto,n=e.professionalProfileContent,a=e.linkedinLogo,r=e.githubLogo,c=e.gitlabLogo,s=e.mediumLogo;return o.a.createElement("div",{className:"home-page-container"},o.a.createElement("div",{className:"left-container holder"},o.a.createElement("img",{src:t})),o.a.createElement("div",{className:"right-container"},o.a.createElement("h1",null,"Marco Maigua"),o.a.createElement("a",{className:"waves-effect waves-light btn button-resume",href:"https://firebasestorage.googleapis.com/v0/b/cms-personal.appspot.com/o/documents%2Fcv_marco_maigua.pdf?alt=media&token=b9a96229-2869-4eba-ac9a-639aef6dc25b",target:"_blank"},o.a.createElement("i",null,"Personal Resume")),o.a.createElement("p",null,n),o.a.createElement("div",{className:"social-media-container"},o.a.createElement("a",{href:"https://www.linkedin.com/in/marco-maigua-66822584/",target:"_blank"},o.a.createElement("img",{src:a})),o.a.createElement("a",{href:"https://github.com/nemesis1346",target:"_blank"},o.a.createElement("img",{src:r})),o.a.createElement("a",{href:"https://gitlab.com/nemesis1346",target:"_blank"},o.a.createElement("img",{src:c})),o.a.createElement("a",{href:"https://medium.com/@marco.maigua1346",target:"_blank"},o.a.createElement("img",{src:s})))))}}]),t}(o.a.Component)),G=Object(h.b)(function(e){return{professionalProfilePhoto:e.professionalPageReducer.professionalProfilePhoto,professionalProfileContent:e.professionalPageReducer.professionalProfileContent,linkedinLogo:e.professionalPageReducer.linkedinLogo,githubLogo:e.professionalPageReducer.githubLogo,gitlabLogo:e.professionalPageReducer.gitlabLogo,mediumLogo:e.professionalPageReducer.mediumLogo}},{getProfessionalImage:function(){return function(e,t,n){n.getFirebase,n.getFirestore,v.getImage("/photos/professional/professionalPhoto1.jpg").then(function(t){e(C(t))}).catch(function(t){e(k(t.message))})}},getProfessionalContent:function(){return function(e,t,n){n.getFirebase,n.getFirestore,v.getDocument("/content","UJ9dOUKXi627jKWxPDPb").then(function(t){console.log(t.data()),t.exists&&(console.log(t),e(P(t.data())))}).catch(function(t){e(k(t.message))})}},getLinkedinLogo:function(){return function(e,t,n){n.getFirebase,n.getFirestore,v.getImage("/photos/logos/linkedin.png").then(function(t){e(y(t))}).catch(function(t){e(k(t.message))})}},getGithubLogo:function(){return function(e,t,n){n.getFirebase,n.getFirestore,v.getImage("/photos/logos/github.png").then(function(t){e(S(t))}).catch(function(t){e(k(t.message))})}},getGitlabLogo:function(){return function(e,t,n){n.getFirebase,n.getFirestore,v.getImage("/photos/logos/gitlab.jpg").then(function(t){e(L(t))}).catch(function(t){e(k(t.message))})}},getMediumLogo:function(){return function(e,t,n){n.getFirebase,n.getFirestore,v.getImage("/photos/logos/medium.png").then(function(t){e(_(t))}).catch(function(t){e(k(t.message))})}}})(R),T=function(e){return{type:"GET_BLOGS_SUCCESS",posts:e}},I=function(e){return{type:"ERROR_MIDDLEWARE",error:e}},N=(n(362),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.post;return console.log(e.url),o.a.createElement("div",{className:"post card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("a",{href:e.url,target:"_blank"},o.a.createElement("img",{src:e.imageUrl})," ")),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,e.date),o.a.createElement("h2",null,e.title),o.a.createElement("p",null,e.titleText),o.a.createElement("a",{href:e.url,target:"_blank"},o.a.createElement("i",{className:"waves-effect waves-light btn"},"Read more..."))))}}]),t}(o.a.Component)),U=n(567),D=(n(133),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getBlogs()}},{key:"render",value:function(){console.log("POSTS"),console.log(this.props);var e=this.props,t=e.posts,n=e.error;return o.a.createElement("div",{className:"blog-page-container"},t&&t.length>0?o.a.createElement("div",{className:"app-card-list",id:"app-card-list"},Object.keys(t).map(function(e){return o.a.createElement(N,{key:e,index:e,post:t[e]})})):o.a.createElement(U.a,null,o.a.createElement(U.a.Header,null,"Error"),o.a.createElement("p",null,n)))}}]),t}(o.a.Component)),w=Object(h.b)(function(e){return{posts:e.blogPageReducer.posts,error:e.blogPageReducer.error}},{getBlogs:function(){return console.log("gets here"),function(e,t,n){n.getFirebase,n.getFirestore,v.getDocuments("/posts").then(function(t){var n=[];t.forEach(function(e){console.log("".concat(e.id," => ").concat(e.data())),n.push(e.data())}),e(T(n))}).catch(function(t){e(I(t.message))})}}})(D),F=n(281),M=n.n(F).a.create({baseURL:"http://localhost:8000"}),B={getAllBlogs:function(){return M.get("/api/blogs")}},A=function(e){return{type:"ERROR_MIDDLEWARE",error:e}},x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getBlogs()}},{key:"render",value:function(){console.log("POSTS"),console.log(this.props);var e=this.props,t=e.posts,n=e.error;return o.a.createElement("div",{className:"blog-page-container"},t&&t.length>0?o.a.createElement("div",{className:"app-card-list",id:"app-card-list"},Object.keys(t).map(function(e){return o.a.createElement(N,{key:e,index:e,post:t[e]})})):o.a.createElement(U.a,null,o.a.createElement(U.a.Header,null,"Error"),o.a.createElement("p",null,n)))}}]),t}(o.a.Component),W=Object(h.b)(function(e){return{posts:e.blogPageReducer.posts,error:e.blogPageReducer.error}},{getBlogs:function(){return function(e){B.getAllBlogs().then(function(e){console.log("Response"),console.log(e);var t,n="200"==(t=e).status?t.data:"Something went wrong";console.log(n)}).catch(function(t){console.log(t),e(A(t.message))})}}})(x),K=function(e){return{type:"GET_PROJECTS_SUCCESS",projects:e}},H=function(e){return{type:"ERROR_MIDDLEWARE",error:e}},J=(n(447),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.post;return console.log(e.url),o.a.createElement("div",{className:"post card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("a",{href:e.url,target:"_blank"},o.a.createElement("img",{src:e.imageUrl})," ")),o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",null,e.title),o.a.createElement("p",null,e.titleText),o.a.createElement("a",{href:e.url,target:"_blank"},o.a.createElement("i",{className:"waves-effect waves-light btn"},"See Project"))))}}]),t}(o.a.Component)),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){console.log("PROJECTS"),console.log(this.props);var e=this.props,t=e.projects,n=e.error;return o.a.createElement("div",null,t&&t.length>0?o.a.createElement("div",{className:"app-card-list",id:"app-card-list"},Object.keys(t).map(function(e){return o.a.createElement(J,{key:e,index:e,post:t[e]})})):o.a.createElement(U.a,null,o.a.createElement(U.a.Header,null,"Error"),o.a.createElement("p",null,n)))}}]),t}(o.a.Component),V=Object(h.b)(function(e){return{projects:e.projectsPageReducer.projects,error:e.projectsPageReducer.error}},{getProjects:function(){return console.log("gets here"),function(e){v.getDocuments("/projects").then(function(t){var n=[];t.forEach(function(e){console.log("".concat(e.id," => ").concat(e.data())),n.push(e.data())}),e(K(n))}).catch(function(t){e(H(t.message))})}}})(z),Y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null),o.a.createElement(m.a,{path:"/",exact:!0,component:G}),o.a.createElement(m.a,{path:"/blogFirebasePage",exact:!0,component:w}),o.a.createElement(m.a,{path:"/blogDjangoPage",exact:!0,component:W}),o.a.createElement(m.a,{path:"/projects",exact:!0,component:V})))}}]),t}(a.Component),X=n(181),q=n(182),Z=(n(559),n(37)),Q=n(282),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type,e},ee=n(20),te={professionalProfilePhoto:null,professionalProfileContent:null,linkedinLogo:null,mediumLogo:null,githubLogo:null,gitlabLogo:null},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_IMAGE_SUCCESS":return Object(ee.a)({},e,{professionalProfilePhoto:t.professionalProfilePhoto});case"GET_CONTENT_SUCCESS":return Object(ee.a)({},e,{professionalProfileContent:t.professionalProfileContent});case"GET_LINKEDIN_LOGO_SUCCESS":return Object(ee.a)({},e,{linkedinLogo:t.linkedinLogo});case"GET_MEDIUM_LOGO_SUCCESS":return Object(ee.a)({},e,{mediumLogo:t.mediumLogo});case"GET_GITHUB_LOGO_SUCCESS":return Object(ee.a)({},e,{githubLogo:t.githubLogo});case"GET_GITLAB_LOGO_SUCCESS":return Object(ee.a)({},e,{gitlabLogo:t.gitlabLogo});default:return e}},ae={posts:[],error:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_BLOGS_SUCCESS":return Object(ee.a)({},e,{posts:t.posts});case"ERROR_MIDDLEWARE":return Object(ee.a)({},e,{error:t.error});default:return e}},re={projects:[],error:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_PROJECTS_SUCCESS":return Object(ee.a)({},e,{projects:t.projects});case"ERROR_MIDDLEWARE":return Object(ee.a)({},e,{error:t.error});default:return e}},se=Object(Z.c)({userReducer:$,professionalPageReducer:ne,blogPageReducer:oe,projectsPageReducer:ce}),ie=Object(Z.e)(se,Object(Z.d)(Object(Z.a)(Q.a.withExtraArgument({getFirebase:q.getFirebase,getFirestore:X.getFirestore})),Object(X.reduxFirestore)(j),Object(q.reactReduxFirebase)(j)));c.a.render(o.a.createElement(h.a,{store:ie},o.a.createElement(Y,null)),document.getElementById("root"))}},[[296,2,1]]]);
//# sourceMappingURL=main.e83b3359.chunk.js.map