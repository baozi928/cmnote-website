webpackJsonp([5],{DVHy:function(t,e){},FBvi:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("Dd8w"),s=n.n(r),a=n("NYxO"),u={data:function(){return{}},created:function(){var t=this;this.$nextTick(function(){t.setUser()})},methods:s()({},Object(a.b)({setUser:"checkLogin"})),computed:s()({},Object(a.c)(["username","slug"]))},i={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var c={components:{avatar:n("VU/8")(u,i,!1,function(t){n("FBvi")},"data-v-34d9f456",null).exports},methods:s()({},Object(a.b)(["logout"]),{onLogout:function(){this.logout({path:"/login"})}})},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.onLogout}})])],1)},staticRenderFns:[]};var l={name:"app",components:{sidebar:n("VU/8")(c,d,!1,function(t){n("SeMO")},"data-v-a9b01968",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var h=n("VU/8")(l,f,!1,function(t){n("DVHy")},null,null).exports,v=n("/ocq");o.default.use(v.a);var m=new v.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(3).then(n.bind(null,"C3fl"))}},{path:"/login",component:function(){return n.e(2).then(n.bind(null,"xJsL"))}},{path:"/note",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return n.e(1).then(n.bind(null,"WMg/"))}}]}),b=n("//Fk"),k=n.n(b),p=n("mtWM"),N=n.n(p),I=n("Jdfc"),g=n.n(I);function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new k.a(function(o,r){var s={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?s.params=n:s.data=n,N()(s).then(function(t){200===t.status?o(t.data):(console.error(t.data),r(t.data))}).catch(function(t){console.error({msg:"网络异常"}),r({msg:"网络异常"})})})}N.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",N.a.defaults.baseURL=g.a.baseURL,N.a.defaults.withCredentials=!0;var E=n("pFYg"),A=n.n(E);function w(t){var e=("object"===(void 0===t?"undefined":A()(t))?t:new Date(t)).getTime(),n=Date.now()-e,o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o}var D={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},L=function(){return new k.a(function(t,e){T(D.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.friendlyCreatedAt=w(t.createdAt)}),t(e)}).catch(function(t){e(t)})})},C=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return T(D.UPDATE.replace(":id",t),"PATCH",{title:n})},U=function(t){return T(D.DELETE.replace(":id",t),"DELETE")},y=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return T(D.ADD,"POST",{title:e})},_=n("zL8q"),M=n.n(_),F={state:{notebooks:null,curBookId:null},getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId})||{}:t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){(t.notebooks.find(function(t){return t.id==e.notebookId})||{}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})},setCurBook:function(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:function(t){var e=t.commit;return null!==t.state.notebooks?k.a.resolve():L().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return y({title:e.title}).then(function(t){console.log("add success...",t),n("addNotebook",{notebook:t.data}),_.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit;return C(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),_.Message.success(t.msg)})},deleteNotebook:function(t,e){var n=t.commit;return U(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),_.Message.success(t.msg)})}}},P={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},R=function(t){var e=t.notebookId;return new k.a(function(t,n){T(P.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=w(t.createdAt),t.updatedAtFriendly=w(t.updatedAt),t}).sort(function(t,e){return t.updatedAt<e.updatedAt}),t(e)}).catch(function(t){n(t)})})},O=function(t,e){var n=t.noteId,o=e.title,r=e.content;return T(P.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},B=function(t){var e=t.noteId;return T(P.DELETE.replace(":noteId",e),"DELETE")},x=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,s=n.content,a=void 0===s?"":s;return new k.a(function(t,n){T(P.ADD.replace(":notebookId",e),"POST",{title:r,content:a}).then(function(e){e.data.createdAtFriendly=w(e.data.createdAt),e.data.updatedAtFriendly=w(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},G={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{title:"",content:""}:t.notes[0]||{title:"",content:""}:{title:"",content:""}}},mutations:{setNote:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id===e.noteId})||{};n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e.noteId})},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return R({notebookId:o}).then(function(t){n("setNote",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,s=e.content;return x({notebookId:o},{title:r,content:s}).then(function(t){console.log("add success...",t),n("addNote",{note:t.data})})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,s=e.content;return O({noteId:o},{title:r,content:s}).then(function(t){n("updateNote",{noteId:o,title:r,content:s})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return B({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),_.Message.success(t.msg)})}}},S={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},H=function(){return new k.a(function(t,e){T(S.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.createdAtFriendly=w(t.createdAt),t.updatedAtFriendly=w(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},V=function(t){var e=t.noteId;return T(S.DELETE.replace(":noteId",e),"DELETE")},j=function(t){var e=t.noteId;return T(S.REVERT.replace(":noteId",e),"PATCH")},J={state:{trashNotes:null,curTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find(function(e){return e.id==t.curTrashNoteId})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){return(o.notebooks.find(function(t){return t.id==e.curTrashNote.notebookId})||{}).title||""}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){setTrashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!=e.noteId})},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},actions:{getTrashNotes:function(t){var e=t.commit;return H().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return V({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),_.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return j({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),_.Message.success(t.msg)})}}},$="/auth/register",W="/auth/login",q="/auth/logout",Y="/auth",z=function(t){var e=t.username,n=t.password;return T($,"POST",{username:e,password:n})},K=function(t){var e=t.username,n=t.password;return T(W,"POST",{username:e,password:n})},Q=function(){return T(q)},X=function(){return T(Y)};window.router=m;var Z={state:{user:null},getters:{username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return K({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return z({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return Q().then(function(t){e("setUser",{user:null}),m.push(n)})},checkLogin:function(t,e){var n=t.commit;return null!==t.state.user?k.a.resolve():X().then(function(t){t.isLogin?n("setUser",{user:t.data}):m.push(e)})}}};o.default.use(a.a);var tt=new a.a.Store({modules:{notebook:F,note:G,trash:J,user:Z}});n("tvR6");o.default.use(M.a),o.default.config.productionTip=!1,window.vm=new o.default({el:"#app",router:m,store:tt,components:{App:h},template:"<App/>"})},SeMO:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d9ee5c5f6b8c81b35985.js.map