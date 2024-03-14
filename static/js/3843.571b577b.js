/*! For license information please see 3843.571b577b.js.LICENSE.txt */
"use strict";(self.webpackChunktutor_jolly=self.webpackChunktutor_jolly||[]).push([[3843],{38471:function(e,t,n){n.r(t);n(41830),n(35082),n(59749),n(86544),n(60228),n(84254),n(12826),n(34284),n(77049),n(73964),n(40739),n(58373),n(66793),n(7629),n(77509),n(88052),n(47522),n(5399),n(62506),n(28436),n(21694),n(752),n(76265),n(50886),n(34338),n(64043),n(89730);var r,a,o=n(67294),i=n(45879),l=n(19745),c=n(1642),s=n(95187),u=n(36214),d=n(76355),m=n(78589),p=n(71230),h=n(15746),f=n(85492),g=n(88495),y=n(45153),v=n(62193),b=n(81418),E=n(96491);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function x(){x=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),l=new I(r||[]);return a(i,"_invoke",{value:L(e,n,l)}),i}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var m="suspendedStart",p="suspendedYield",h="executing",f="completed",g={};function y(){}function v(){}function b(){}var E={};s(E,i,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(G([])));k&&k!==n&&r.call(k,i)&&(E=k);var S=b.prototype=y.prototype=Object.create(E);function Z(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(a,o,i,l){var c=d(e[a],e,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==w(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function L(t,n,r){var a=m;return function(o,i){if(a===h)throw new Error("Generator is already running");if(a===f){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var l=r.delegate;if(l){var c=T(l,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var s=d(t,n,r);if("normal"===s.type){if(a=r.done?f:p,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a=f,r.method="throw",r.arg=s.arg)}}}function T(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=d(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function G(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(w(t)+" is not iterable")}return v.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:v,configurable:!0}),v.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},Z(j.prototype),s(j.prototype,l,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new j(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},Z(S),s(S,c,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=G,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:G(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function N(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=y.ZP.div(r||(r=Z(["\n  .head-bar {\n    display: flex;\n    justify-content: center;\n    .topic-jolly {\n      height: 30px;\n      line-height: 30px;\n      border-radius: 10px;\n      width: 100px;\n      background-color: ",";\n      color: white;\n      cursor: pointer;\n      margin-right: 50px;\n    }\n    .topic-teacher {\n      height: 30px;\n      line-height: 30px;\n      border-radius: 10px;\n      width: 100px;\n      background-color: ",";\n      color: white;\n      cursor: pointer;\n    }\n    .topic-school {\n      /* margin-left: 50px; */\n      height: 30px;\n      line-height: 30px;\n      border-radius: 10px;\n      width: 100px;\n      background-color: ",";\n      color: white;\n      cursor: pointer;\n    }\n  }\n  .topic-jolly-box {\n    display: flex;\n    justify-content: center;\n    .topic-jolly {\n      display: flex;\n      height: 32px;\n      margin-top: 15px;\n      justify-content: start;\n      width: 720px;\n      .space-item {\n        height: 32px;\n        display: flex;\n        align-items: center;\n        width: 240px;\n        .label {\n          display: inline-block;\n          height: 32px;\n          line-height: 32px;\n          background-color: #a8e1d9;\n          width: 60px;\n          border: 1px solid #a8e1d9;\n        }\n        .submit-btn {\n          background-color: #64ccc5;\n          color: black;\n          font-weight: 700;\n          border-radius: 0;\n          border: none;\n        }\n        .ant-select {\n          width: 140px;\n          .ant-select-selector {\n            border-radius: 0;\n            /* border: none; */\n          }\n        }\n        .ant-input {\n          width: 200px;\n          border-radius: 0;\n        }\n      }\n    }\n  }\n\n  .topic-keyword-box {\n    display: flex;\n    justify-content: center;\n    .topic-keyword {\n      display: flex;\n      height: 32px;\n      margin-top: 15px;\n      justify-content: space-between;\n      width: 720px;\n      .keyword-item-input {\n        height: 32px;\n        display: flex;\n        align-items: center;\n        .label {\n          display: inline-block;\n          height: 32px;\n          line-height: 32px;\n          background-color: #a8e1d9;\n          width: 150px;\n          border: 1px solid #a8e1d9;\n        }\n        .ant-input {\n          width: 420px;\n          border-radius: 0;\n        }\n      }\n      .keyword-item-btn {\n        .submit-btn {\n          background-color: #64ccc5;\n          color: black;\n          border-radius: 0;\n          border: none;\n          width: 120px;\n        }\n      }\n    }\n  }\n  .publish-homework-box {\n    display: flex;\n    margin-top: 20px;\n    margin-left: 20px;\n    .open-send-modal {\n      width: 100px;\n      height: 30px;\n      /* border-radius: 10px; */\n      border: none;\n      font-weight: 400;\n      background-color: #64ccc5;\n      color: white;\n      cursor: pointer;\n      margin-right: 20px;\n    }\n    .selectd-topic {\n      width: 110px;\n      height: 30px;\n      line-height: 30px;\n      background-color: #176b87;\n      color: white;\n      justify-content: center;\n      align-items: center;\n      font-weight: 300;\n      padding-left: 5px;\n    }\n  }\n"])),(function(e){return"jolly"===e.topicType?"#176b87":"#cbcaca"}),(function(e){return"teacher"===e.topicType?"#176b87":"#cbcaca"}),(function(e){return"school"===e.topicType?"#176b87":"#cbcaca"})),L=y.ZP.div(a||(a=Z(["\n  padding: 0 20px 20px 20px;\n  .question-title {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-size: 18px;\n    font-weight: 700;\n  }\n  .question-body {\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .question-footer {\n    margin-top: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    .question-save {\n      height: 30px;\n      margin-right: 20px;\n      width: 110px;\n      display: flex;\n      justify-content: center;\n      background-color: #176b87;\n      color: white;\n    }\n    .question-cancel {\n      height: 30px;\n      margin-left: 10px;\n      width: 110px;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"])));i.Z.TextArea;t.default=function(){var e,t=(new Date).getTime(),n=(0,g.md5)(t+"esLkEsRy"),r=window.localStorage.getItem("tutorAiManageToken")||"",a=(null===(e=window.localStorage.getItem("class"))||void 0===e?void 0:e.split(","))||[],y=k(l.Z.useModal(),2),w=y[0],S=y[1],Z=k((0,o.useState)("school"),2),T=Z[0],_=Z[1],P=k((0,o.useState)([]),2),I=P[0],G=P[1],C=k((0,o.useState)("GENERAL_WRITING"),2),O=C[0],R=C[1],W=k((0,o.useState)("K1"),2),q=W[0],A=W[1],D=k((0,o.useState)(),2),Y=D[0],K=D[1],z=k((0,o.useState)(""),2),F=z[0],M=z[1],H=k((0,o.useState)(""),2),V=H[0],B=H[1],Q=k((0,o.useState)(1),2),$=Q[0],J=Q[1],U=k((0,o.useState)(0),2),X=U[0],ee=U[1],te=k((0,o.useState)(!1),2),ne=te[0],re=te[1],ae=k((0,o.useState)(1),2),oe=ae[0],ie=ae[1],le=k((0,o.useState)([]),2),ce=le[0],se=le[1],ue=k((0,o.useState)([]),2),de=ue[0],me=ue[1],pe=k((0,o.useState)(!1),2),he=pe[0],fe=pe[1],ge=k((0,o.useState)((0,E.dayjs)().endOf("D")),2),ye=ge[0],ve=ge[1],be=k((0,o.useState)(""),2),Ee=be[0],we=be[1],xe=k((0,o.useState)([]),2),Ne=xe[0],ke=xe[1],Se=k((0,o.useState)([]),2),Ze=Se[0],je=Se[1],Le=k((0,o.useState)(!1),2),Te=Le[0],_e=Le[1],Pe=k((0,o.useState)([]),2),Ie=Pe[0],Ge=Pe[1],Ce={selectedRowKeys:de,onChange:function(e,t){me(e)},preserveSelectedRowKeys:!0},Oe=function(){we(""),ke([]),fe(!1)},Re=function(){var e,o=(e=x().mark((function e(){var o,i,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[],i=x().mark((function e(i){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.request)("api/manage/getStudentList",{method:"GET",params:{sign:n,timestamp:t,token:r,page:1,pageSize:200,class:[a[i]]}}).then((function(e){if(200===e.code){o[i]={title:a[i],value:a[i],children:[]};var t=e.data;o[i].children=t.map((function(e,t){return{title:"學號".concat(e.class_num,": ").concat(e.name_en),value:e.id,class_num:e.class_num}}))}}));case 2:case"end":return e.stop()}}),e)})),l=0;case 3:if(!(l<a.length)){e.next=8;break}return e.delegateYield(i(l),"t0",5);case 5:l++,e.next=3;break;case 8:je(o);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){N(o,r,a,i,l,"next",e)}function l(e){N(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();(0,o.useEffect)((function(){re(!0),(0,b.request)("api/manage/getTeacherOrSchoolWritingList",{method:"GET",params:{sign:n,timestamp:t,token:r,source:"teacher"===T?"teacher":"school",page:$,pageSize:10}}).then((function(e){re(!1),200===e.code?(se(e.data),ee(e.total)):c.ZP.error(e.message)}))}),[T,oe,$]),(0,o.useEffect)((function(){(0,b.request)("api/manage/getLevelLanguage",{method:"GET",params:{timestamp:t,sign:n,token:r}}).then((function(e){if(200===e.code){var t=(e.data.level_V2||[]).map((function(e){return{value:e,label:e}}));G(t)}})),Re()}),[]);var We=[{title:"類型",dataIndex:"type",render:function(e){return 1==e?o.createElement(u.Z,{color:"#87d068"},"GENERAL_WRITING"):o.createElement(u.Z,{color:"#2db7f5"},"DSE_WRITING")}},{title:"級別",dataIndex:"level"},{title:"文章標題/問題",dataIndex:"title"},{title:"字數",dataIndex:"word"},{title:"出題時間",dataIndex:"create_time",render:function(e){return o.createElement("div",null,E.dayjs.unix(e).format("YYYY-MM-DD HH:mm:ss"))}}];return o.createElement(j,{topicType:T},o.createElement("div",{className:"head-bar"},o.createElement("div",{className:"topic-school",onClick:function(){return _("school")}},"學校作業庫")),"jolly"===T&&o.createElement("div",{className:"topic-space-jolly"},o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Level"),o.createElement(d.Z,{options:I})),o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Type"),o.createElement(d.Z,null)),o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Word"),o.createElement(i.Z,null)),o.createElement("div",{className:"space-item"},o.createElement(s.ZP,{className:"submit-btn"},"確定"))),"teacher"===T&&o.createElement(o.Fragment,null,o.createElement("div",{className:"topic-jolly-box"},o.createElement("div",{className:"topic-jolly"},o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Type"),o.createElement(d.Z,{options:[{value:"GENERAL_WRITING",label:"Writing"},{value:"DSE_WRITING",label:"DSE"}],value:O,onChange:function(e){return R(e)}})),o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Level"),o.createElement(d.Z,{options:I,value:q,onChange:function(e){return A(e)}})),o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Word"),o.createElement(i.Z,{value:Y,onChange:function(e){var t=e.target.value;/^\d+$/.test(t)||(e.target.value=t.slice(0,t.length-1)),K(e.target.value)}})))),o.createElement("div",{className:"topic-keyword-box"},o.createElement("div",{className:"topic-keyword"},o.createElement("div",{className:"keyword-item-input"},o.createElement("div",{className:"label"},"Key Word"),o.createElement(i.Z,{onChange:function(e){M(e.target.value)}})),o.createElement("div",{className:"keyword-item-btn"},o.createElement(s.ZP,{className:"submit-btn",onClick:function(){O?q||"GENERAL_WRITING"!==O?Y?F?(0,b.request)("api/manage/createTeacherOrSchoolWriting",{method:"POST",data:{sign:n,timestamp:t,token:r,title:F,level:q,type:"DSE_WRITING"===O?4:1,word:Y,source:"teacher"}}):c.ZP.error("請填寫Keyword!"):c.ZP.error("請填寫字數要求！"):c.ZP.error("請選擇level等級!"):c.ZP.error("請選擇writing類型!")}},"生成寫作題目"))))),"school"===T&&o.createElement(o.Fragment,null,o.createElement("div",{className:"topic-jolly-box"},o.createElement("div",{className:"topic-jolly"},o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Type"),o.createElement(d.Z,{options:[{value:"GENERAL_WRITING",label:"Writing"},{value:"DSE_WRITING",label:"DSE"}],value:O,onChange:function(e){return R(e)}})),"GENERAL_WRITING"===O&&o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Level"),o.createElement(d.Z,{options:I,value:q,onChange:function(e){return A(e)}})),o.createElement("div",{className:"space-item"},o.createElement("div",{className:"label"},"Word"),o.createElement(i.Z,{value:Y,onChange:function(e){var t=e.target.value;/^\d+$/.test(t)||(e.target.value=t.slice(0,t.length-1)),K(e.target.value)}})))),o.createElement("div",{className:"topic-keyword-box"},o.createElement("div",{className:"topic-keyword"},o.createElement("div",{className:"keyword-item-input"},o.createElement("div",{className:"label"},"Title / Question"),o.createElement(i.Z,{onChange:function(e){B(e.target.value)},value:V})),o.createElement("div",{className:"keyword-item-btn"},o.createElement(s.ZP,{className:"submit-btn",onClick:function(){if(O)if(q||"GENERAL_WRITING"!==O)if(Y)if(V)var e=w.confirm({title:"",content:o.createElement(L,null,o.createElement("div",{className:"question-title"},"Title / Question"),o.createElement("div",{className:"question-body"},V),o.createElement("div",{className:"question-footer"},o.createElement(s.ZP,{className:"question-save",onClick:function(){var a={sign:n,timestamp:t,token:r,title:V,type:"DSE_WRITING"===O?4:1,word:Y,source:"school"};"GENERAL_WRITING"===O&&(a.level=q),(0,b.request)("api/manage/createTeacherOrSchoolWriting",{method:"POST",data:a}).then((function(t){200===t.code?c.ZP.success("生成成功！"):c.ZP.error(t.message),ie((function(e){return e+1})),e.destroy()}))}},"添加至題目庫"),o.createElement(s.ZP,{className:"question-cancel",onClick:function(){return e.destroy()}},"取消"))),footer:null,wrapClassName:"publish-writing-question",icon:null,width:600});else c.ZP.error("請填寫Keyword!");else c.ZP.error("請填寫字數要求！");else c.ZP.error("請選擇level等級!");else c.ZP.error("請選擇writing類型!")}},"生成寫作題目")))),o.createElement("div",{className:"publish-homework-box"},o.createElement("button",{className:"open-send-modal",onClick:function(){de.length>0?((0,b.request)("api/manage/getNotShowStudent",{method:"POST",data:{sign:n,timestamp:t,token:r,type:"Writing",writing_ids:de}}).then((function(e){200===e.code&&Ge(e.data)})),fe(!0)):c.ZP.error("請先選擇作業！")}},"確定發佈作業"),o.createElement("div",{className:"selectd-topic"},"已選題目（",de.length,"）"))),o.createElement("div",{style:{marginTop:"20px"}},o.createElement(m.Z,{columns:We,dataSource:ce,rowSelection:Ce,rowKey:function(e){return e.writing_id},loading:ne,pagination:{total:X,current:$,pageSize:10,showSizeChanger:!1,onChange:function(e){return J(e)},showQuickJumper:!0}})),S,o.createElement(l.Z,{title:null,open:he,width:1e3,onCancel:Oe,footer:null,wrapClassName:"publish-modal",destroyOnClose:!0},o.createElement("div",{style:{backgroundColor:"#eeeeee",padding:"20px",borderRadius:"10px"}},o.createElement(p.Z,{style:{marginBottom:"20px"}},o.createElement(h.Z,null,o.createElement("strong",null,"作業名稱：")),o.createElement(h.Z,null,o.createElement(i.Z,{style:{width:"300px"},value:Ee,onChange:function(e){return we(e.target.value)}}))),o.createElement(p.Z,{style:{marginBottom:"20px"}},o.createElement(h.Z,null,o.createElement("strong",null,"截止時間：")),o.createElement(h.Z,null,o.createElement(f.Z,{showTime:!0,format:"YYYY-MM-DD HH:mm",defaultValue:ye,onChange:function(e,t){ve(t)},disabledDate:function(e){return e&&e<(0,E.dayjs)()},disabledTime:function(){var e=(0,E.dayjs)().hour();(0,E.dayjs)().minute();return{disabledHours:function(){return function(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}(0,24).splice(0,e)}}},style:{width:"300px"}}))),o.createElement(p.Z,null,o.createElement(h.Z,null,o.createElement("strong",null,"選擇學生："))),o.createElement("div",{style:{marginBottom:"30px",marginLeft:"4.5rem"}},o.createElement(v.default,{headTabs:a,data:Ze,width:"800px",sortKey:"class_num",selectKey:"title",selectValue:"value",onSelect:function(e){ke(e)},disabledValues:Ie})),o.createElement(p.Z,{justify:"center"},o.createElement(h.Z,null,o.createElement(s.ZP,{loading:Te,style:{width:"80px",borderRadius:"10px",border:"none",color:"white",backgroundColor:"#176b87",marginRight:"15px",cursor:"pointer"},onClick:function(){""!==Ee.trim()?""!==ye?0!==Ne.length?(_e(!0),(0,b.request)("api/manage/sendWork",{method:"POST",data:{sign:n,timestamp:t,token:r,title:Ee,expire_time:Date.parse(new Date(ye))/1e3,writing_ids:de,student_ids:Ne}}).then((function(e){200===e.code?(c.ZP.success("發佈作業成功！"),me([]),Oe()):201===e.code?c.ZP.info("不能給該學生重複發送作業！"):(c.ZP.error(e.message),Oe()),_e(!1)}))):c.ZP.error("請選擇作業發布給哪些學生！"):c.ZP.error("請選擇作業截止時間！"):c.ZP.error("作業題目不能為空哦！")}},"發佈")),o.createElement(h.Z,null,o.createElement(s.ZP,{style:{width:"80px",borderRadius:"10px",border:"none",color:"white",backgroundColor:"#a8a8a8",marginLeft:"15px",cursor:"pointer"},onClick:Oe},"取消"))))))}}}]);