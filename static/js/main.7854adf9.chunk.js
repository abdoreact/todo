(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),u=n(7),l=n(1),d=n(2),i=n(4),s=n(3),m=Object(a.createContext)(),f=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.addTodo=function(e){t.setState({todos:[].concat(Object(u.a)(t.state.todos),[{todo:e,id:Math.random()*Math.random()*Math.random().toString()}])})},t.removeTodo=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id===e}))})},t}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement(m.Provider,{value:{todos:this.state.todos,addTodo:this.addTodo,removeTodo:this.removeTodo}},this.props.children)}}]),n}(o.a.Component),h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todo:""},t.handleChange=function(e){t.setState({todo:e.target.value})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement(m.Consumer,null,(function(e){return o.a.createElement("form",{id:"form",onSubmit:function(n){n.preventDefault(),e.addTodo(t.state.todo),t.setState({todo:""})}},o.a.createElement("input",{type:"text",value:t.state.todo,onChange:t.handleChange,required:!0}),o.a.createElement("button",null,"Submit"))}))}}]),n}(o.a.Component),p=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement(m.Consumer,null,(function(t){return o.a.createElement("ul",null,t.todos.map((function(t){return o.a.createElement("li",{key:t.id},t.todo)})))}))}}]),n}(o.a.Component);var v=function(){return o.a.createElement(f,null,o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(h,null)))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.7854adf9.chunk.js.map