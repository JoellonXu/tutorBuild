(self.webpackChunktutor_jolly=self.webpackChunktutor_jolly||[]).push([[3959],{58061:function(e,t,n){"use strict";n.r(t);n(89730),n(41830),n(35082),n(59749),n(86544),n(84254),n(12826),n(77049),n(64043),n(60429),n(34338),n(34284),n(752),n(60228),n(21694),n(76265),n(78730),n(79307),n(50886);var r,a=n(67294),o=n(19745),i=n(1642),c=n(73923),l=n(45879),u=n(95187),s=n(36214),m=n(8892),f=n(78589),p=n(84391),d=n(45153),y=n(88495),g=n.n(y),b=n(81418);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E,j,O=d.ZP.div(r||(E=["\n  .account-head {\n    height: 80px;\n    line-height: 80px;\n    display: flex;\n    align-items: center;\n    .upload-btn {\n      margin: 0 20px;\n    }\n  }\n"],j||(j=E.slice(0)),r=Object.freeze(Object.defineProperties(E,{raw:{value:Object.freeze(j)}}))));t.default=function(e){var t=(new Date).getTime(),n=g()(t+"esLkEsRy"),r=window.localStorage.getItem("tutorAiManageToken")||"",d=v((0,a.useState)(),2),y=d[0],w=d[1],E=v((0,a.useState)(1),2),j=(E[0],E[1],v((0,a.useState)(1),2)),S=j[0],k=j[1],P=v((0,a.useState)(0),2),Z=P[0],x=P[1],T=v((0,a.useState)(1),2),C=T[0],I=T[1],_=v(o.Z.useModal(),2),A=_[0],D=_[1],N=v((0,a.useState)(!1),2),z=N[0],L=N[1],R={name:"file",action:"https://api2.tutorjolly.com/api/manage/importTeacher",headers:{authorization:"authorization-text"},data:{timestamp:(new Date).getTime(),sign:g()((new Date).getTime()+"esLkEsRy"),token:window.localStorage.getItem("tutorAiManageToken")||""},maxCount:1,onChange:function(e){if("uploading"!==e.file.status&&(e.file,e.fileList),"done"===e.file.status){if(200==e.file.response.code){var t=e.file.response;i.ZP.success("導入成功".concat(t.successCount,"條，失敗").concat(t.failInfo.length,"條"))}else i.ZP.error(e.file.response.message);k((function(e){return e+1}))}else"error"===e.file.status&&(k((function(e){return e+1})),i.ZP.error("".concat(e.file.name," file upload failed.")))}};(0,a.useEffect)((function(){q()}),[S,C]);var q=function(){var e=(new Date).getTime(),t=g()(e+"esLkEsRy");L(!0),(0,b.request)("api/manage/getTeacherList",{method:"GET",params:{sign:t,timestamp:e,token:r,page:C,pageSize:10}}).then((function(e){200==+e.code&&(w(e.data),x(e.total)),L(!1)}))},M=[{title:"賬號",dataIndex:"account",key:"account"},{title:"英文名",dataIndex:"name_en",key:"name_en"},{title:"中文名",dataIndex:"name",key:"name",width:"120px"},{title:"班級編號",dataIndex:"class_code",key:"class_code",render:function(e,t){return e.map((function(e){return a.createElement(s.Z,{color:"green",key:e},e)}))}},{title:"操作",align:"center",width:"120px",render:function(e,o){return a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.createElement("a",{onClick:function(){return function(e){var o={account:e.account,enName:e.name_en,cnName:e.name,password:""},s=A.info({title:"編輯",width:500,content:a.createElement("div",{style:{paddingRight:"20px",marginTop:"20px"}},a.createElement(c.Z,{layout:"vertical",initialValues:o,onFinish:function(a){var o={sign:n,timestamp:t,token:r,type:2,update_id:e.id,name:a.cnName,name_en:a.enName};a.password&&(o.password=a.password),(0,b.request)("api/manage/updateAccountInfo",{method:"POST",data:o}).then((function(e){200===e.code?(i.ZP.success("編輯成功！"),s.destroy(),q()):i.ZP.error(e.message)}))}},a.createElement(c.Z.Item,{label:"賬號",name:"account",rules:[{required:!0,message:"請輸入賬號!"}]},a.createElement(l.Z,{disabled:!0})),a.createElement(c.Z.Item,{label:"英文名",name:"enName",rules:[{required:!0,message:"請輸入英文名!"}]},a.createElement(l.Z,null)),a.createElement(c.Z.Item,{label:"中文名",name:"cnName",rules:[{required:!0,message:"請輸入中文名!"}]},a.createElement(l.Z,null)),a.createElement(c.Z.Item,{label:"重置密碼",name:"password"},a.createElement(l.Z,null)),a.createElement(c.Z.Item,null,a.createElement("div",{style:{display:"flex",justifyContent:"end"}},a.createElement(u.ZP,{type:"primary",htmlType:"submit",style:{marginRight:"20px"}},"提交"),a.createElement(u.ZP,{onClick:function(){return s.destroy()}},"取消"))))),footer:null})}(o)}},"編輯"),a.createElement("a",{onClick:function(){return function(e){A.confirm({title:"刪除老師",content:a.createElement("div",{style:{fontSize:"16px"}},"確認刪除",a.createElement("span",{style:{color:"red",fontWeight:700}},e.name),"老師"),onOk:function(){(0,b.request)("api/manage/delAccount",{method:"POST",data:{sign:n,timestamp:t,token:r,type:2,del_id:e.id}}).then((function(e){200===e.code?i.ZP.success("刪除成功！"):i.ZP.error("刪除失敗！"),k((function(e){return e+1}))}))}})}(o)}},"刪除"))}}];return a.createElement(O,null,a.createElement("div",{className:"account-head"},a.createElement(m.Z,h({},R,{className:"upload-btn"}),a.createElement(u.ZP,{icon:a.createElement(p.Z,null),type:"primary"},"上傳老師表格")),a.createElement(u.ZP,{onClick:function(){var e="https://api2.tutorjolly.com/downloads/importTeacherTemplate.csv?".concat((new Date).getTime()),t=document.createElement("a");t.href=e,t.download="templateTeacher.csv",t.target="_blank",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(e)}},"下載excel模板")),a.createElement(f.Z,{columns:M,dataSource:y,pagination:{total:Z,current:C,pageSize:10,showSizeChanger:!1,showQuickJumper:!0,onChange:function(e){return I(e)}},loading:z}),D)}},81418:function(e,t,n){"use strict";n.r(t),n.d(t,{request:function(){return c}});n(60228),n(73964),n(69373),n(59903),n(59749),n(86544),n(79288),n(40739),n(69358),n(38077),n(81919),n(47522),n(99474),n(35082),n(84254),n(752),n(21694),n(76265);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(71257).Z.create({baseURL:"https://api2.tutorjolly.com/",timeout:2e5}),c=function(e,t){return new Promise((function(n){i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({url:e},t)).then((function(e){var t=e.data;n(t)})).catch((function(e){n(e)}))}))}},96424:function(){},75381:function(){}}]);