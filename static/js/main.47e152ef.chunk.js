(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contactsForm:"ContactForm_contactsForm__1GPkI",nameInput:"ContactForm_nameInput__1yxA2",numberInput:"ContactForm_numberInput__CBZzH",nameLabel:"ContactForm_nameLabel__1MRlw",numberLabel:"ContactForm_numberLabel__2K0Y9",addingBatton:"ContactForm_addingBatton__2JmAr"}},,,,,function(t,e,n){t.exports={contactList:"ContactList_contactList__3MzlG",contactListItem:"ContactList_contactListItem__1l6Fa",contactListButton:"ContactList_contactListButton__3oi3v"}},,function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__1TeQb",filterInput:"Filter_filterInput__u16Kg"}},,,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={container:"App_container__1MQN3"}},,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=(n(20),n(15)),s=n(3),l=n(4),u=n(6),m=n(5),b=n(24),d=n(12),h=n(2),j=n.n(h),f=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.props.onClick(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=Object(b.a)();return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.contactsForm,children:[Object(f.jsxs)("label",{htmlFor:t,className:j.a.nameLabel,children:["Name",Object(f.jsx)("input",{className:j.a.nameInput,onChange:this.handleChange,type:"text",name:"name",value:this.state.name,id:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{htmlFor:t,className:j.a.numberLabel,children:["Number",Object(f.jsx)("input",{className:j.a.numberInput,onChange:this.handleChange,type:"tel",name:"number",value:this.state.number,id:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{onClick:this.handleSubmit,type:"button",className:j.a.addingBatton,children:"Add contact"})]})}}]),n}(a.Component),C=n(9),_=n.n(C),O=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:_.a.filterLabel,children:["Find contacts by name",Object(f.jsx)("input",{className:_.a.filterInput,type:"text",value:e,onChange:n})]})},v=n(7),g=n.n(v),x=function(t){var e=t.contacts,n=t.onDeleteContact;console.log(e);var a=Object(b.a)();return Object(f.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){var e=t.id,c=void 0===e?{randomId:a}:e,r=t.name,o=t.number;return Object(f.jsxs)("li",{className:g.a.contactListItem,id:c,name:r,number:o,children:[r,o,Object(f.jsx)("button",{className:g.a.contactListButton,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})},L=n(13),I=n(14),F=n.n(I),N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:L,filter:""},t.randomId=Object(b.a)(),t.formSubmitHandler=function(t){console.log(t)},t.handleBtnClick=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts!"));else{var c={id:t.randomId,name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value}),console.log(e)},t.getFilteredItems=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredItems();return Object(f.jsxs)("div",{className:F.a.container,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{onClick:this.handleBtnClick,onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(O,{value:t,onChange:this.changeFilter}),Object(f.jsx)(x,{id:this.randomId,contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(22);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.47e152ef.chunk.js.map