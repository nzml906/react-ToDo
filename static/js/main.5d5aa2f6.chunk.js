(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{61:function(e,t,a){e.exports=a(75)},66:function(e,t,a){},67:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(8),r=a.n(c),l=(a(66),a(13)),i=a(55),m=a(37),u=a(109),d=(a(67),a(110)),s=a(106),f=a(49),p=a.n(f);var v=function(e){var t=e.addTodo,a=Object(o.useState)({id:"",task:"",completed:!1}),c=Object(m.a)(a,2),r=c[0],i=c[1];return n.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),r.task.trim()&&(t(Object(l.a)(Object(l.a)({},r),{},{id:p.a.v4()})),i(Object(l.a)(Object(l.a)({},r),{},{task:""})))}},n.a.createElement(d.a,{label:"Task",type:"text",name:"task",value:r.task,onChange:function(e){i(Object(l.a)(Object(l.a)({},r),{},{task:e.target.value}))}}),n.a.createElement(s.a,{type:"submit"},"Submit"))},b=a(105),g=a(107),E=a(111),O=a(108),k=a(54),h=a.n(k);var j=function(e){var t=e.todo,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(g.a,{style:{display:"flex"}},n.a.createElement(E.a,{checked:t.completed,onClick:function(){a(t.id)}}),n.a.createElement(u.a,{variant:"body1",style:{textDecoration:t.completed?"line-through":null}},t.task),n.a.createElement(O.a,{onClick:function(){o(t.id)}},n.a.createElement(h.a,null)))};var y=function(e){var t=e.todos,a=e.removeTodo,o=e.toggleComplete;return n.a.createElement(b.a,null,t.map((function(e){return n.a.createElement(j,{key:e.id,todo:e,removeTodo:a,toggleComplete:o})})))};var S=function(){var e=Object(o.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&c(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]),n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{style:{padding:16},variant:"h2"},"React Todo"),n.a.createElement(v,{addTodo:function(e){c([e].concat(Object(i.a)(a)))}}),n.a.createElement(y,{todos:a,removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))},toggleComplete:function(e){c(a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.5d5aa2f6.chunk.js.map