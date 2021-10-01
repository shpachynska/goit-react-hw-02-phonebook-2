(this["webpackJsonpgoit-react-hw-02-phonebook-2"]=this["webpackJsonpgoit-react-hw-02-phonebook-2"]||[]).push([[0],{11:function(t,e,n){t.exports={filter__input:"Filter_filter__input__1jfKy"}},13:function(t,e,n){t.exports={button:"Form_button__36RZb"}},19:function(t,e,n){},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),s=(n(19),n(20),n(14)),o=n(3),l=n(4),u=n(6),b=n(5),d=(n(21),n(10)),j=n.n(d),m=n(8),h=n.n(m),f=n(0);var p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsxs)("li",{className:h.a.ContactList__item,children:[Object(f.jsxs)("span",{children:[t.name,":\xa0"]}),Object(f.jsx)("span",{children:t.number}),Object(f.jsx)("button",{id:t.id,type:"button",onClick:function(){return n(t.id)},className:h.a.button,children:"Delete"})]},t.id)}))})},O=n(11),x=n.n(O),C=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:["Filter by name",Object(f.jsx)("input",{className:x.a.filter__input,type:"text",value:e,onChange:n})]})})},v=n(12),_=n(13),g=n.n(_),y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{className:g.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),S=y,N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n={id:j.a.generate(),name:e.name,number:e.number};t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"form-section",children:[Object(f.jsx)("b",{className:"title",children:"Phonebook"}),Object(f.jsx)("div",{className:"form",children:Object(f.jsx)(S,{onSubmit:this.addContact})})]}),Object(f.jsxs)("div",{className:"contacts-section",children:[Object(f.jsx)("b",{className:"title",children:"Contacts"}),Object(f.jsx)(C,{value:t,onChange:this.changeFilter}),Object(f.jsx)(p,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),A=N;r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={ContactList__item:"ContactList_ContactList__item__2qn6S",button:"ContactList_button__238os"}}},[[31,1,2]]]);
//# sourceMappingURL=main.db7e6960.chunk.js.map