/*! For license information please see 3316.97df57c4.js.LICENSE.txt */
(self.webpackChunktutor_jolly=self.webpackChunktutor_jolly||[]).push([[3316,9512],{62193:function(e,t,n){"use strict";n.r(t);n(89730),n(41830),n(35082),n(59749),n(86544),n(84254),n(752),n(21694),n(76265),n(12826),n(34284),n(77049),n(64043),n(76801),n(43843),n(34338),n(97195),n(62506),n(60228),n(47522),n(38077),n(50886),n(65137);var r,o=n(67294),i=n(21006);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l,u,s=n(45153).ZP.div(r||(l=["\n  width: ",";\n  margin: 10px;\n  .tab-item-body {\n    display: grid;\n    grid-template-columns: ",";\n    grid-template-rows: auto;\n    gap: 10px; /* 根据需要调整网格项目之间的间距 */\n    row-gap: 10px;\n    background-color: white;\n    width: 100%;\n    border: 2px solid white;\n    .body-item {\n      line-height: 40px;\n      border: 2px solid #c2e3db;\n      text-align: center;\n      color: #1bb0a7;\n      font-weight: 600;\n      cursor: pointer;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      border-radius: 10px;\n    }\n    .body-item-select {\n      line-height: 40px;\n      border: 2px solid #c2e3db;\n      text-align: center;\n      color: #1bb0a7;\n      font-weight: 600;\n      cursor: pointer;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      border-radius: 10px;\n      background-color: #fffbc7;\n    }\n    .body-item-disabled {\n      line-height: 40px;\n      border: 2px solid #d9d9d9;\n      text-align: center;\n      color: #1bb0a7;\n      font-weight: 600;\n      cursor: pointer;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      border-radius: 10px;\n      background-color: #e5e5e5;\n      color: #acacac;\n      cursor: not-allowed;\n    }\n  }\n  .ant-tabs {\n    .ant-tabs-tab {\n      font-size: 16px;\n      font-weight: 600;\n      .ant-tabs-tab-btn {\n        color: #1ab0a7;\n      }\n    }\n    .ant-tabs-tab-active {\n      font-size: 16px;\n      font-weight: 600;\n      background-color: #1ab0a7;\n      .ant-tabs-tab-btn {\n        color: white;\n      }\n    }\n  }\n"],u||(u=l.slice(0)),r=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(u)}}))),(function(e){return e.width?e.width:"100%"}),(function(e){return e.rowNumber?"repeat(".concat(e.rowNumber,", 1fr)"):"repeat(5, 1fr)"}));t.default=function(e){var t=e.headTabs,n=e.data,r=e.width,c=e.sortKey,l=e.rowNumber,u=e.selectKey,f=e.selectValue,p=e.onSelect,d=e.disabled,h=e.disabledValues,m=f||"value",g=u||"title",y=a((0,o.useState)(t[0]),2),b=y[0],v=y[1],w=a((0,o.useState)([]),2),x=w[0],E=w[1],S=a((0,o.useState)(!1),2),k=S[0],j=S[1],O=h||[],P=function(e){v(e),E([]),p&&p([]),j(!1)},_=function(){var e=[];n.forEach((function(t){t.value===b&&(e=t.children)}));var t=e.map((function(e){if(!O.includes(e[m]))return e[m]})).filter((function(e){return e}));c&&e.sort((function(e,t){return+e[c]-+t[c]}));return[!d&&o.createElement("div",{className:k?"body-item-select":"body-item",onClick:function(){return e=t,void(!0===k?(p&&p([]),E([]),j(!1)):(p&&p(e),E(e),j(!0)));var e}},"全選"),e.map((function(e,t){return o.createElement("div",{className:(n=e[m],O.includes(n)?"body-item-disabled":0!==(null==x?void 0:x.length)&&null!=x&&x.includes(n)?"body-item-select":"body-item"),key:t,onClick:function(){return function(e){if(!d){var t=e[m];O.includes(t)||E((function(e){var n=e.concat(),r=n.indexOf(t);return-1!==r?n.splice(r,1):n.push(t),p&&p(n),n}))}}(e)}},e[g]);var n}))||[]]};return o.createElement(s,{width:r,rowNumber:l},o.createElement(i.Z,{type:"card",tabPosition:"top",onChange:P,items:t.map((function(e,t){return{label:e,key:e,children:o.createElement("div",{className:"tab-item-body"},_())}}))}))}},57600:function(e,t,n){"use strict";n.r(t);n(89730),n(41830),n(35082),n(59749),n(86544),n(60228),n(84254),n(12826),n(34284),n(77049),n(64043),n(73964),n(40739),n(58373),n(66793),n(7629),n(77509),n(88052),n(47522),n(5399),n(50886),n(96869),n(28436),n(21694),n(752),n(76265),n(34338),n(62506);var r,o,i,a=n(67294),c=n(19745),l=n(1642),u=n(95187),s=n(42507),f=n(76355),p=n(18230),d=n(45879),h=n(78589),m=n(71230),g=n(15746),y=n(85492),b=n(62193),v=n(45153),w=n(88495),x=n(81418),E=n(96491);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(){k=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:_(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",d="suspendedYield",h="executing",m="completed",g={};function y(){}function b(){}function v(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(C([])));E&&E!==n&&r.call(E,a)&&(w=E);var j=v.prototype=y.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function n(o,i,a,c){var l=f(e[o],e,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==S(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function _(t,n,r){var o=p;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=Z(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=f(t,n,r);if("normal"===u.type){if(o=r.done?m:d,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function Z(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,Z(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(S(t)+" is not iterable")}return b.prototype=v,o(j,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:b,configurable:!0}),b.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},O(P.prototype),u(P.prototype,c,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new P(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(j),u(j,l,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function j(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){j(i,r,o,a,c,"next",e)}function c(e){j(i,r,o,a,c,"throw",e)}a(void 0)}))}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var L=v.ZP.div(r||(r=Z(["\n  font-weight: 700;\n  font-size: 16px;\n  padding: 10px;\n  .content {\n    white-space: pre-wrap;\n    padding: 10px;\n  }\n  .question {\n    color: red;\n    margin: 10px;\n  }\n  .answer {\n    color: blue;\n    margin-left: 10px;\n  }\n  .options {\n    margin: 10px;\n  }\n  .right-option {\n    color: blue;\n  }\n  .create-footer {\n    margin-top: 30px;\n    height: 40px;\n    line-height: 40px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    .save {\n      height: 30px;\n      width: 120px;\n      border: none;\n      background-color: #00b050;\n      color: white;\n      border-radius: 10px;\n      margin-right: 20px;\n    }\n    .cancel {\n      height: 30px;\n      width: 120px;\n      border: none;\n      background-color: #00b050;\n      color: white;\n      border-radius: 10px;\n      margin-left: 20px;\n    }\n  }\n  .view-footer {\n    margin-top: 30px;\n    height: 40px;\n    line-height: 40px;\n    display: flex;\n    justify-content: center;\n    .view-btn {\n      height: 30px;\n      width: 80px;\n      border: none;\n      background-color: #176b87;\n      color: white;\n      border-radius: 10px;\n    }\n  }\n"]))),N=v.ZP.div(o||(o=Z(["\n  .makeTopic {\n    display: flex;\n    margin-left: 30px;\n    margin-bottom: 30px;\n    .label {\n      width: 100px;\n      height: 30px;\n      line-height: 30px;\n      background-color: #ddedea;\n      border-radius: 10px;\n    }\n    .open-send-modal {\n      width: 100px;\n      height: 30px;\n      /* border-radius: 10px; */\n      border: none;\n      font-weight: 400;\n      background-color: #64ccc5;\n      color: white;\n      cursor: pointer;\n    }\n    .selectd-topic {\n      width: 110px;\n      height: 30px;\n      line-height: 30px;\n      background-color: #176b87;\n      color: white;\n      justify-content: center;\n      align-items: center;\n      font-weight: 300;\n      padding-left: 5px;\n    }\n    .create-topic-btn {\n      width: 100px;\n      height: 30px;\n      border-radius: 10px;\n      border: none;\n      background-color: #a8e1d9;\n      cursor: pointer;\n    }\n  }\n"]))),T=v.ZP.div(i||(i=Z(["\n  .header {\n    position: relative;\n    width: 100%;\n    height: 60px;\n    .left-label {\n      position: absolute;\n      left: 40%;\n      height: 30px;\n      line-height: 30px;\n      border-radius: 10px;\n      width: 100px;\n      background-color: ",";\n      color: white;\n      cursor: pointer;\n    }\n    .right-label {\n      position: absolute;\n      left: 50%;\n      height: 30px;\n      line-height: 30px;\n      border-radius: 10px;\n      width: 100px;\n      background-color: ",";\n      color: white;\n      cursor: pointer;\n    }\n    .level-select {\n      position: absolute;\n      right: 10%;\n      .ant-select-selector {\n        border-radius: 10px;\n        .ant-select-selection-search {\n          inset-inline-start: 0;\n          inset-inline-end: 0;\n          background-color: #176b87;\n          border-radius: 10px;\n          color: white;\n        }\n        .ant-select-selection-item {\n          color: white;\n        }\n      }\n      .ant-select-arrow {\n        .ant-select-suffix {\n          color: white;\n        }\n      }\n    }\n  }\n"])),(function(e){return"jolly"===e.topicType?"#176b87":"#cbcaca"}),(function(e){return"teacher"===e.topicType?"#176b87":"#cbcaca"}));t.default=function(){var e,t=(new Date).getTime(),n=(0,w.md5)(t+"esLkEsRy"),r=window.localStorage.getItem("tutorAiManageToken")||"",o=(null===(e=window.localStorage.getItem("class"))||void 0===e?void 0:e.split(","))||[],i=P((0,a.useState)(),2),v=i[0],S=i[1],j=P((0,a.useState)(),2),_=j[0],Z=j[1],C=P((0,a.useState)(1),2),q=C[0],I=C[1],z=P(c.Z.useModal(),2),A=z[0],G=z[1],R=P((0,a.useState)([]),2),D=R[0],K=R[1],B=P((0,a.useState)("K3"),2),M=B[0],Y=B[1],F=P((0,a.useState)([]),2),V=F[0],J=F[1],H=P((0,a.useState)("jolly"),2),U=H[0],W=H[1],$=P((0,a.useState)([]),2),Q=$[0],X=$[1],ee=P((0,a.useState)([]),2),te=ee[0],ne=ee[1],re=P((0,a.useState)(!1),2),oe=re[0],ie=re[1],ae=P((0,a.useState)(""),2),ce=ae[0],le=ae[1],ue=P((0,a.useState)((0,E.dayjs)().endOf("D")),2),se=ue[0],fe=ue[1],pe=P((0,a.useState)(""),2),de=pe[0],he=pe[1],me=P((0,a.useState)(!1),2),ge=me[0],ye=me[1],be=P((0,a.useState)(!1),2),ve=be[0],we=be[1],xe=P((0,a.useState)(1),2),Ee=xe[0],Se=xe[1],ke=P((0,a.useState)(!1),2),je=ke[0],Oe=ke[1],Pe=P((0,a.useState)([]),2),_e=Pe[0],Ze=Pe[1],Le=function(){var e=O(k().mark((function e(o,i){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Oe(!0),(0,x.request)("api/manage/getJollyLessonInfo",{method:"GET",params:{timestamp:t,sign:n,token:r,lesson_id:o}}).then((function(e){var c=function(e,i){ye(!0),(0,x.request)("api/manage/confirm",{method:"POST",data:{sign:n,timestamp:t,token:r,lesson_id:o,type:i}}).then((function(t){ye(!1),e(),200===t.code?"yes"===i&&(l.ZP.success("添加到題目庫成功!"),he("")):l.ZP.error(t.message),Se((function(e){return e+1}))}))};if(we(!1),200===e.code)var s=e.data,f=s.question_list,p=(s.question_list[0].option_list,A.confirm({title:a.createElement("div",{style:{marginLeft:"5px",fontWeight:700,fontSize:"18px"}},s.lesson_title),content:a.createElement(L,null,a.createElement("div",{className:"content"},s.lesson_content),a.createElement("div",null,f.map((function(e,t){return 1==+e.question_type?[a.createElement("div",{className:"question"},e.question_no,".",e.question),e.option_list.map((function(e){return 1==+e.is_right?a.createElement("span",{className:"right-option options"},e.option_no,".  ",e.option):a.createElement("span",{className:"options"},e.option_no,".  ",e.option)}))]:2==+e.question_type?[a.createElement("div",{className:"question"},e.question_no,".",e.question),a.createElement("div",{className:"answer"},e.model_answer)]:void 0}))),"createTopic"===i&&a.createElement("div",{className:"create-footer"},a.createElement(u.ZP,{className:"save",loading:ge,onClick:function(){return c(p.destroy,"yes")}},"添加到題目庫"),a.createElement(u.ZP,{className:"cancel",onClick:function(){return c(p.destroy,"no")}},"取消")),"viewTopic"===i&&a.createElement("div",{className:"view-footer"},a.createElement("button",{className:"view-btn",onClick:function(){return p.destroy()}},"確認"))),footer:null,width:800,wrapClassName:"publish-detail-modal",keyboard:!1,icon:null}));else"createTopic"===i&&l.ZP.error("生成題目失敗！");setTimeout((function(){Oe(!1)}),500)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ne={selectedRowKeys:V,onChange:function(e,t){J(e)},preserveSelectedRowKeys:!0},Te=[{title:"級別",dataIndex:"lesson_level",align:"center"},{title:"文章主題",dataIndex:"lesson_title",align:"center"},{title:"操作",dataIndex:"operation",render:function(e,t){return a.createElement("a",{onClick:function(){return Le(t.lesson_id,"viewTopic")}},"查看題目")},align:"center"}],Ce=function(){var e=O(k().mark((function e(){var i,a,c;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],a=k().mark((function e(a){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.request)("api/manage/getStudentList",{method:"GET",params:{sign:n,timestamp:t,token:r,page:1,pageSize:200,class:[o[a]]}}).then((function(e){if(200===e.code){i[a]={title:o[a],value:o[a],children:[]};var t=e.data;i[a].children=t.map((function(e,t){return{title:"學號".concat(e.class_num,": ").concat(e.name_en),value:e.id,class_num:e.class_num}}))}}));case 2:case"end":return e.stop()}}),e)})),c=0;case 3:if(!(c<o.length)){e.next=8;break}return e.delegateYield(a(c),"t0",5);case 5:c++,e.next=3;break;case 8:X(i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=function(){le(""),ne([]),ie(!1)},Ie=function(e){I(1),W(e)};return(0,a.useEffect)((function(){"jolly"===U?(Oe(!0),(0,x.request)("api/manage/getJollyLessonList",{method:"GET",params:{timestamp:t,sign:n,token:r,page:q,pageSize:10,level:M}}).then((function(e){200==+e.code?(S(e.data),Z(e.total)):l.ZP.error(e.message),Oe(!1)}))):"teacher"===U&&(Oe(!0),(0,x.request)("api/manage/getReadingComprehensionList",{method:"GET",params:{timestamp:t,sign:n,token:r,page:q,pageSize:10,level:M}}).then((function(e){200==+e.code?(S(e.data),Z(e.total)):l.ZP.error(e.message),Oe(!1)})))}),[M,U,q,Ee]),(0,a.useEffect)((function(){(0,x.request)("api/manage/getLevelLanguage",{method:"GET",params:{timestamp:t,sign:n,token:r}}).then((function(e){if(200==e.code){var t=(e.data.level_V2||[]).map((function(e){return{value:e,label:e}}));K(t)}})),Ce()}),[]),a.createElement(N,null,a.createElement(s.Z,{spinning:ve},a.createElement(T,{topicType:U},a.createElement("div",{className:"header"},a.createElement("div",{className:"left-label",onClick:function(){return Ie("jolly")}},"Jolly題目庫"),a.createElement("div",{className:"right-label",onClick:function(){return Ie("teacher")}},"老師題目庫"),a.createElement("div",{className:"level-select"},a.createElement(f.Z,{options:D,value:M,onChange:function(e){Y(e),I(1)},style:{width:"80px"}})))),"teacher"===U&&a.createElement(p.Z,{className:"makeTopic",size:"large"},a.createElement("div",{className:"label"},"文章主題"),a.createElement(d.Z,{onChange:function(e){return he(e.target.value)},value:de,style:{width:"300px"}}),a.createElement("button",{onClick:function(){if(""===de.trim())return l.ZP.error("文章主題不能為空！");we(!0),(0,x.request)("api/manage/createReadingComprehension",{method:"POST",data:{sign:n,timestamp:t,token:r,level:M,input_text:de}}).then((function(e){200===e.code?Le(e.data.lesson_id,"createTopic"):(l.ZP.error("生成題目失敗！"),we(!1))}))},className:"create-topic-btn"},"生成題目")),a.createElement(p.Z,{className:"makeTopic",size:"large"},a.createElement("button",{className:"open-send-modal",onClick:function(){V.length>0?((0,x.request)("api/manage/getNotShowStudent",{method:"POST",data:{sign:n,timestamp:t,token:r,type:"Reading",lesson_ids:V}}).then((function(e){200===e.code&&Ze(e.data)})),ie(!0)):l.ZP.error("請先選擇作業！")}},"確定發佈作業"),a.createElement("div",{className:"selectd-topic"},"已選題目（",V.length,"）")),a.createElement(h.Z,{columns:Te,dataSource:v,rowSelection:Ne,rowKey:function(e){return e.lesson_id},pagination:{total:_,current:q,pageSize:10,showSizeChanger:!1,onChange:function(e){I(e)},showQuickJumper:!0},loading:je}),a.createElement(c.Z,{title:null,open:oe,width:1e3,onCancel:qe,footer:null,wrapClassName:"publish-modal",destroyOnClose:!0},a.createElement("div",{style:{backgroundColor:"#eeeeee",padding:"20px",borderRadius:"10px"}},a.createElement(m.Z,{style:{marginBottom:"20px"}},a.createElement(g.Z,null,a.createElement("strong",null,"作業名稱：")),a.createElement(g.Z,null,a.createElement(d.Z,{style:{width:"300px"},value:ce,onChange:function(e){return le(e.target.value)}}))),a.createElement(m.Z,{style:{marginBottom:"20px"}},a.createElement(g.Z,null,a.createElement("strong",null,"截止時間：")),a.createElement(g.Z,null,a.createElement(y.Z,{showTime:!0,format:"YYYY-MM-DD HH:mm",defaultValue:se,onChange:function(e,t){fe(t)},disabledDate:function(e){return e&&e<(0,E.dayjs)()},disabledTime:function(){var e=(0,E.dayjs)().hour();(0,E.dayjs)().minute();return{disabledHours:function(){return function(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}(0,24).splice(0,e)}}},onOk:function(e){},style:{width:"300px"}}))),a.createElement(m.Z,null,a.createElement(g.Z,null,a.createElement("strong",null,"選擇學生："))),a.createElement("div",{style:{marginBottom:"30px",marginLeft:"4.5rem"}},a.createElement(b.default,{headTabs:o,data:Q,width:"800px",sortKey:"class_num",selectKey:"title",selectValue:"value",onSelect:function(e){ne(e)},disabledValues:_e})),a.createElement(m.Z,{justify:"center"},a.createElement(g.Z,null,a.createElement(u.ZP,{style:{width:"80px",borderRadius:"10px",border:"none",color:"white",backgroundColor:"#176b87",marginRight:"15px",cursor:"pointer"},loading:ge,onClick:function(){""!==ce.trim()?""!==se?0!==te.length?(ye(!0),(0,x.request)("api/manage/sendWork",{method:"POST",data:{sign:n,timestamp:t,token:r,title:ce,expire_time:Date.parse(new Date(se))/1e3,lesson_ids:V,student_ids:te,type:"Reading"}}).then((function(e){200===e.code?(l.ZP.success("發佈作業成功！"),qe(),J([])):201===e.code?l.ZP.info("不能給該學生重複發送作業！"):(l.ZP.error(e.message),qe()),ye(!1)}))):l.ZP.error("請選擇作業發布給哪些學生！"):l.ZP.error("請選擇作業截止時間！"):l.ZP.error("作業題目不能為空哦！")}},"發佈")),a.createElement(g.Z,null,a.createElement(u.ZP,{style:{width:"80px",borderRadius:"10px",border:"none",color:"white",backgroundColor:"#a8a8a8",marginLeft:"15px",cursor:"pointer"},onClick:qe},"取消"))))),G))}},81418:function(e,t,n){"use strict";n.r(t),n.d(t,{request:function(){return c}});n(60228),n(73964),n(69373),n(59903),n(59749),n(86544),n(79288),n(40739),n(69358),n(38077),n(81919),n(47522),n(99474),n(35082),n(84254),n(752),n(21694),n(76265);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(71257).Z.create({baseURL:"https://service.talkbo.cn/",timeout:2e5}),c=function(e,t){return new Promise((function(n){a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({url:e},t)).then((function(e){var t=e.data;n(t)})).catch((function(e){n(e)}))}))}},96424:function(){},75381:function(){},83127:function(e){"use strict";e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},8552:function(e,t,n){"use strict";var r,o=n(19037),i=n(61735),a=n(69985),c=n(83127),l=n(30071),u=n(96004),s=n(21500),f=o.Function,p=/MSIE .\./.test(l)||c&&((r=o.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));e.exports=function(e,t){var n=t?2:1;return p?function(r,o){var c=s(arguments.length,1)>n,l=a(r)?r:f(r),p=c?u(arguments,n):[],d=c?function(){i(l,this,p)}:l;return t?e(d,o):e(d)}:e}},10209:function(e,t,n){"use strict";var r=n(79989),o=n(19037),i=n(8552)(o.setInterval,!0);r({global:!0,bind:!0,forced:o.setInterval!==i},{setInterval:i})},83509:function(e,t,n){"use strict";var r=n(79989),o=n(19037),i=n(8552)(o.setTimeout,!0);r({global:!0,bind:!0,forced:o.setTimeout!==i},{setTimeout:i})},96869:function(e,t,n){"use strict";n(10209),n(83509)}}]);