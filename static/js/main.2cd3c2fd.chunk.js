(this.webpackJsonpfacedetectionapp=this.webpackJsonpfacedetectionapp||[]).push([[0],{274:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(30),r=a.n(s),o=(a(69),a(7)),l=a(8),c=a(10),m=a(9),u=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},p=(a(70),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://6515e11b2a0f4a0b0e2534d0--lovely-mousse-850308.netlify.app/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.onRouteChange("home")):alert("Wrong Signin")}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(i.a.Component),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSubmitSignIn=function(){fetch("http://6515e11b2a0f4a0b0e2534d0--lovely-mousse-850308.netlify.app/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password,name:e.state.name})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.onRouteChange("home"))}))},e.state={name:"",email:"",password:""},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(i.a.Component),b=a(61),g=a.n(b),f=(a(71),a(62)),v=a.n(f),w=function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{style:{paddingTop:"4px"},src:v.a,alt:"ai",width:"180px"})," ")))},E=(a(72),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),C=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t," , your current rank is...")),i.a.createElement("div",{className:"white f1 "},a))},A=(a(73),a(63)),k=a.n(A),S={particles:{number:{value:70,density:{enable:!0,value_area:850}}}},N={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://6515e11b2a0f4a0b0e2534d0--lovely-mousse-850308.netlify.app/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://6515e11b2a0f4a0b0e2534d0--lovely-mousse-850308.netlify.app/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))}))},e.onRouteChange=function(t){"signout"===t?e.setState(N):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=N,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(k.a,{className:"particles",params:S}),i.a.createElement(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(w,null),i.a.createElement(C,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(p,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(d,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(h,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(273);r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t){e.exports="data:image/png;base64,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"},64:function(e,t,a){e.exports=a(274)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.2cd3c2fd.chunk.js.map