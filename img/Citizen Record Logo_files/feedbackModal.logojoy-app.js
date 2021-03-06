webpackJsonp(["feedbackModal"],{1221:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(28)),r=n(118),l=n(557),u=a(n(124)),i=a(n(194)),c=n(787),s=a(n(1222)),d=a(n(1231)),f=a(n(1235)),p={closeModal:c.onCloseModal};t.default=(0,l.compose)((0,l.getContext)({store:o.default.any}),(0,l.lifecycle)({componentWillMount:function(){var e=this.props.store;(0,i.default)(e,f.default),(0,u.default)(e,(0,d.default)())}}),(0,r.connect)(function(e){return{stage:e.feedbackModal.stage,isActive:e.feedbackModal.isOpen}},p))(s.default)},1222:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.stage;return i.default.createElement(p.default,{className:O.modal},t===f.STAGE_FORM&&i.default.createElement(_.default,null),t===f.STAGE_SUCCESS&&i.default.createElement(m.default,null))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r,l,u,i=a(n(18)),c=a(n(28)),s=n(80),d=n(184),f=n(864),p=a(n(1223)),m=a(n(1225)),_=a(n(1227)),O={modal:(0,s.css)((r={width:760},l="@media screen and (max-width: "+d.SM_BREAKPOINT+"px)",u={width:"90%"},l in r?Object.defineProperty(r,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[l]=u,r))};o.propTypes={stage:c.default.any}},1223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(118),r=n(1224),l=(a=r)&&a.__esModule?a:{default:a},u={onClose:n(787).onCloseModal};t.default=(0,o.connect)(function(e){return{isActive:e.feedbackModal.isOpen}},u)(l.default)},1224:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=a(n(18)),l=a(n(709));t.default=function(e){return r.default.createElement(l.default,o({},e,{canClose:!0}))}},1225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(118),r=n(1226),l=(a=r)&&a.__esModule?a:{default:a},u=n(787);t.default=(0,o.connect)(null,{closeModal:u.onCloseModal})(l.default)},1226:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.closeModal;return r.default.createElement(i.default,{className:s.root,align:"center",column:!0},r.default.createElement("h3",{className:s.title},"Success"),r.default.createElement("p",{className:s.subTitle},"We have received your request. One of our designers will be in touch shortly."),r.default.createElement(c.default,{onClick:t,className:s.btnCancel},"Close"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=a(n(18)),l=a(n(28)),u=n(80),i=a(n(555)),c=a(n(569)),s={root:(0,u.css)({padding:45}),title:(0,u.css)({color:"#090B17",fontWeight:700,fontSize:24,margin:"0 0 10px 0"}),subTitle:(0,u.css)({color:"#090B17",fontWeight:300,fontSize:16,margin:"10px auto 50px"}),feedbackContainer:(0,u.css)({width:"100%"}),img:(0,u.css)({width:"35%"}),btnCancel:(0,u.css)({color:"#4F6DF5",background:"#FFF",border:"1px solid #4F6DF5",borderRadius:4,fontSize:16,fontFamily:"Avenir, Sans-Serif",padding:"12px 30px"})};o.propTypes={closeModal:l.default.func}},1227:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.closeModal;return r.default.createElement(i.default,{className:s.root,align:"center",column:!0},r.default.createElement("h3",{className:s.title},"Get feedback on your logo"),r.default.createElement("p",{className:s.subTitle},"One of our designers will get back to you with feedback regarding your design"),r.default.createElement(i.default,{className:s.feedbackContainer,align:"start"},r.default.createElement("img",{className:s.img,src:"https://s3.ca-central-1.amazonaws.com/cdn.logojoy.com/app/editor/ill_cs_chat.svg",alt:"Illustration of two people chatting"}),r.default.createElement(c.default,{closeModal:t})))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=a(n(18)),l=a(n(28)),u=n(80),i=a(n(555)),c=a(n(1228)),s={root:(0,u.css)({padding:45}),title:(0,u.css)({color:"#090B17",fontWeight:700,fontSize:24,margin:"0 0 10px 0"}),subTitle:(0,u.css)({color:"#090B17",fontWeight:300,fontSize:16,margin:"10px auto 50px"}),feedbackContainer:(0,u.css)({width:"100%"}),img:(0,u.css)({width:"35%"})};o.propTypes={closeModal:l.default.func}},1228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(118),r=n(787),l=n(1229),u=(a=l)&&a.__esModule?a:{default:a};t.default=(0,o.connect)(function(e){return{isLoading:e.feedbackModal.isLoading,isActive:e.feedbackModal.isOpen}},{handleClose:r.onCloseModal,handleSubmit:r.onSubmitForm})(u.default)},1229:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(18),c=a(i),s=a(n(28)),d=a(n(81)),f=n(80),p=a(n(563)),m=a(n(555)),_=n(864),O=a(n(1230)),h=(o(r={},_.OPTION_COLORS,!1),o(r,_.OPTION_RECOMMENDATIONS,!1),o(r,_.OPTION_TIPS,!1),o(r,_.ADDITIONAL_QUESTIONS,""),r),b={container:(0,f.css)({paddingLeft:20}),textArea:(0,f.css)({border:"1px solid #D4DBE8",borderRadius:4,padding:20,height:110,width:"100%",color:"#090B17",fontWeight:300,fontSize:14,fontFamily:"Avenir, Sans-Serif",margin:"10px 0 30px",resize:"none"}),btnSubmit:(0,f.css)({color:"#FFF",background:"#4F6DF5",borderRadius:4,fontSize:16,fontFamily:"Avenir, Sans-Serif",padding:"12px 30px",marginRight:10}),btnCancel:(0,f.css)({color:"#4F6DF5",background:"#FFF",border:"1px solid #4F6DF5",borderRadius:4,fontSize:16,fontFamily:"Avenir, Sans-Serif",padding:"12px 30px"})},g=function(e){var t=e.onChange,n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["onChange"]);return c.default.createElement("textarea",u({onChange:function(e){return t(e.target.value)}},n))};g.defaultProps={onChange:function(){}},g.propTypes={onChange:s.default.func};var E=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return(0,d.default)(e),e.state=h,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),l(t,[{key:"componentWillReceiveProps",value:function(e){!e.isActive&&this.props.isActive&&this.setState(h)}},{key:"render",value:function(){return c.default.createElement(m.default,{className:b.container,column:!0},c.default.createElement("form",{onSubmit:this.handleSubmit},c.default.createElement(O.default,u({option:"Any tips on how I can make my logo pop?!"},this.onChangeProps(_.OPTION_TIPS))),c.default.createElement(O.default,u({option:"Feels like something is missing, any recommendations?"},this.onChangeProps(_.OPTION_RECOMMENDATIONS))),c.default.createElement(O.default,u({option:"Can you recommend colors?"},this.onChangeProps(_.OPTION_COLORS))),c.default.createElement(g,u({className:b.textArea,name:"feedback",placeholder:"Add additional questions here"},this.onChangeProps(_.ADDITIONAL_QUESTIONS))),c.default.createElement(m.default,null,c.default.createElement(p.default,{isLoading:this.props.isLoading,className:b.btnSubmit,type:"submit"},"Send"),c.default.createElement(p.default,{onClick:this.props.handleClose,className:b.btnCancel},"Cancel"))))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(this.state)}},{key:"onChangeProps",value:function(e){var t=this;return{value:this.state[e],onChange:function(n){return t.setState(o({},e,n))}}}}]),t}();t.default=E,E.defaultProps={handleSubmit:function(){},handleClose:function(){}},E.propTypes={handleSubmit:s.default.func,handleClose:s.default.func,isLoading:s.default.bool,isActive:s.default.bool}},1230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.value,n=e.onChange,a=e.option;return r.default.createElement("label",{className:i.label},r.default.createElement("input",{type:"checkbox",name:"feedback",onChange:function(e){return n(e.target.checked)},checked:t}),r.default.createElement("i",null),r.default.createElement("span",null,a))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=a(n(18)),l=n(80),u=a(n(28)),i={label:(0,l.css)({display:"flex",alignItems:"center",marginBottom:18,"> input":{display:"none"},"> i":{minWidth:24,minHeight:24,maxWidth:24,maxHeight:24,borderRadius:4,marginRight:10,border:"1px solid #D4DBE8"},"> span":{color:"#090B17",fontWeight:300,fontSize:14},"> input:checked + i":{background:"url('https://s3.ca-central-1.amazonaws.com/cdn.logojoy.com/app/editor/ic_checkmark_selected.svg') center no-repeat",backgroundSize:"10px 8px",border:"1px solid #4F6DF5"},":hover":{cursor:"pointer"}})};o.defaultProps={onChange:function(){}},o.propTypes={onChange:u.default.func,option:u.default.string,value:u.default.bool}},1231:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(1232)),r=a(n(1233)),l=a(n(1234));t.default=function(){return{name:"feedbackModal",reducer:{isLoading:(0,o.default)(),isOpen:(0,r.default)(),stage:(0,l.default)()}}}},1232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(788);t.default=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case a.ON_CREATE_FEEDBACK:return!0;case a.ON_CREATE_FEEDBACK_SUCCESS:case a.ON_CREATE_FEEDBACK_ERROR:return!1;default:return e}}}},1233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(788);t.default=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case a.ON_CLOSE_MODAL:return!1;case a.ON_OPEN_MODAL:return!0;default:return e}}}},1234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(788),o=n(864);t.default=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.STAGE_FORM;switch(arguments[1].type){case a.ON_CREATE_FEEDBACK:return o.STAGE_FORM;case a.ON_CREATE_FEEDBACK_SUCCESS:return o.STAGE_SUCCESS;case a.ON_CREATE_FEEDBACK_ERROR:case a.RESET:return o.STAGE_FORM;default:return e}}}},1235:function(e,t,n){"use strict";function a(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.takeLatest)(i.ON_CREATE_FEEDBACK,o);case 2:case"end":return e.stop()}},s,this)}function o(e){var t,n=e.payload;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.select)();case 2:return t=e.sent,e.next=5,(0,l.call)(u.logToIntercomProxy,Object.assign({eventName:"intercom-expert_review",logoId:t.location.payload.logoid,userId:t.auth.user.id},n));case 5:return e.next=7,(0,l.put)({type:i.ON_CREATE_FEEDBACK_SUCCESS});case 7:return e.next=9,(0,l.call)(r.delay,1e3);case 9:return e.next=11,(0,l.fork)(c.waitForIntercomMessage);case 11:case"end":return e.stop()}},d,this)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,t.handleCreateFeedback=o;var r=n(122),l=n(46),u=n(197),i=n(788),c=n(1236),s=regeneratorRuntime.mark(a),d=regeneratorRuntime.mark(o)},1236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.waitForIntercomMessage=function(){return new Promise(function(e){var t=null,n=0;Intercom("onUnreadCountChange",function(){clearInterval(t),e()}),t=setInterval(function(){Intercom("update"),(n+=1)>10&&(clearInterval(t),e())},6e3)})}},864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STAGE_FORM=1,t.STAGE_SUCCESS=2,t.OPTION_RECOMMENDATIONS="OPTION_RECOMMENDATIONS",t.ADDITIONAL_QUESTIONS="ADDITIONAL_QUESTIONS",t.OPTION_COLORS="OPTION_COLORS",t.OPTION_TIPS="OPTION_TIPS"}});
//# sourceMappingURL=feedbackModal.logojoy-app.js.map