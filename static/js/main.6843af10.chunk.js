(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={"form-wrapper":"AddForm_form-wrapper__LrI53",input:"AddForm_input__3xUVD","label-text":"AddForm_label-text__1Fyfr",button:"AddForm_button__6a7B0"}},,,function(e,t,n){e.exports={wrapper:"Filter_wrapper__3FWEj",input:"Filter_input__qEtc6","label-text":"Filter_label-text__1Xzvb"}},,function(e,t,n){e.exports={item:"NewContact_item__2lMIq",button:"NewContact_button__vSjyf"}},function(e,t,n){e.exports={wrapper:"UserPhoneBook_wrapper__2SCpC",list:"UserPhoneBook_list__3BlaO"}},,function(e,t,n){e.exports={wrapper:"Section_wrapper__3wVbv"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(10),c=n.n(r),o=(n(18),n(13)),s=n(12),u=n(2),i=n(22),l=n(11),b=n.n(l),j=n(0),p=function(e){var t=e.children;return Object(j.jsx)("section",{className:b.a.wrapper,children:t})},m=n(3),d=n.n(m);var h=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),s=Object(u.a)(o,2),i=s[0],l=s[1],b=function(t){e.onInputChange(t),"name"===t.target.name&&c(t.target.value),"number"===t.target.name&&l(t.target.value)};return Object(j.jsxs)("form",{className:d.a["form-wrapper"],onSubmit:function(t){t.preventDefault(),e.onSubmit(),c(""),l("")},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:d.a["label-text"],children:"First name:"}),Object(j.jsx)("input",{onChange:b,className:d.a.input,placeholder:"Ivanov Ivan",type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:d.a["label-text"],children:"Phone number:"}),Object(j.jsx)("input",{className:d.a.input,placeholder:"+7-999-999-99-99",type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b})]}),Object(j.jsx)("button",{type:"submit",className:d.a.button,children:"Add contact"})]})},O=n(8),x=n.n(O),f=function(e){var t=e.name,n=e.number,a=e.onDelete,r=e.id;return Object(j.jsxs)("li",{className:x.a.item,children:[t,": ",n," ",Object(j.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return a(r)},children:"Delete"})]})},_=n(9),v=n.n(_),w=function(e){var t=e.contact,n=e.onDelete;return Object(j.jsxs)("div",{className:v.a.wrapper,children:[Object(j.jsx)("h2",{children:"Your contacts"}),Object(j.jsx)("ul",{className:v.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsx)(f,{name:a,number:r,onDelete:n,id:t},t)}))})]})},g=n(6),C=n.n(g),N=function(e){var t=e.value,n=e.onChange;return Object(j.jsx)("div",{className:C.a.wrapper,children:Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:C.a["label-text"],children:"Find contact:"}),Object(j.jsx)("input",{placeholder:"Search contact",className:C.a.input,type:"text",value:t,onChange:n})]})})};var S=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),l=Object(u.a)(c,2),b=l[0],m=l[1],d=Object(a.useState)([]),O=Object(u.a)(d,2),x=O[0],f=O[1],_=function(){var e=n.toLowerCase();return x.some((function(t){return t.name.toLowerCase()===e}))},v=Object(a.useState)(""),g=Object(u.a)(v,2),C=g[0],S=g[1],F=function(){r(""),m("")};return Object(j.jsxs)(p,{children:[Object(j.jsx)(h,{onSubmit:function(){if(_(n))return alert("".concat(n," is already in contact"));var e={id:Object(i.a)(),name:n,number:b};f((function(t){return[].concat(Object(s.a)(t),[Object(o.a)({},e)])})),F()},onInputChange:function(e){"name"===e.target.name&&r(e.target.value),"number"===e.target.name&&m(e.target.value)}}),x.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{onChange:function(e){S(e.currentTarget.value)}}),Object(j.jsx)(w,{contact:function(){var e=C.toLowerCase();return x.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDelete:function(e){f(x.filter((function(t){return t.id!==e})))}})]}):Object(j.jsx)("h2",{children:"There is no contacts"})]})};c.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.6843af10.chunk.js.map