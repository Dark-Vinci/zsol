(this.webpackJsonpzsol=this.webpackJsonpzsol||[]).push([[0],{10:function(e,a,c){e.exports={container:"header_container__3jerb",back:"header_back__hgrFD"}},22:function(e,a,c){e.exports={container:"cards_container__3jCc8"}},23:function(e,a,c){e.exports={loader:"spinner_loader__1V22q",load3:"spinner_load3__1mNsj"}},29:function(e,a,c){},3:function(e,a,c){e.exports={cardContainer:"card_cardContainer__3Lg7v",img:"card_img__30whq",desc:"card_desc__3sWZz",icons:"card_icons__riaOO",cross:"card_cross__sWS3p",star:"card_star__3aq9H",priceTitle:"card_priceTitle__2Y6Qg",title:"card_title__10UFO",price:"card_price__3nTCE",description:"card_description__2SGgp",des:"card_des__WhdJY"}},4:function(e,a,c){e.exports={container:"stars_container__8wRJd",checked:"stars_checked__2Y80P"}},49:function(e,a,c){},5:function(e,a,c){e.exports={form:"form_form__JicBu",each:"form_each__Mp7V7"}},51:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c.n(t),r=c(19),n=c.n(r),i=(c(29),c(7)),o=c.n(i),d=c(20),l=c(24),j=c(21),f=c.n(j),h=(c(49),c(3)),m=c.n(h),b=c(4),u=c.n(b),p=c(0),x=function(e){var a="fa fa-star",c="fa fa-star",t="fa fa-star",s="fa fa-star",r="fa fa-star";return e.star>0&&(a="fa fa-star ".concat(u.a.checked),e.star<0&&(a="fa fa-star-half-o ".concat(u.a.checked))),e.star>1&&(c="fa fa-star ".concat(u.a.checked),e.star<2&&(c="fa fa-star-half-o ".concat(u.a.checked))),e.star>2&&(t="fa fa-star ".concat(u.a.checked),e.star<3&&(t="fa fa-star-half-o ".concat(u.a.checked))),e.star>3&&(s="fa fa-star ".concat(u.a.checked),e.star<4&&(s="fa fa-star-half-o ".concat(u.a.checked))),e.star>4&&(r="fa fa-star ".concat(u.a.checked),e.star<5&&(r="fa fa-star-half-o ".concat(u.a.checked))),Object(p.jsxs)("div",{className:u.a.container,children:[Object(p.jsx)("i",{className:a}),Object(p.jsx)("i",{className:c}),Object(p.jsx)("i",{className:t}),Object(p.jsx)("i",{className:s}),Object(p.jsx)("i",{className:r})]})},_=function(e){var a="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti officia nesciunt nisi omnis asperiores ab? perspiciatis repellat rem assumenda vero distinctio, vel facilis doloribus, tenetur impedit illum ducimus ipsa!".slice(0,100);return Object(p.jsxs)("div",{className:m.a.cardContainer,children:[Object(p.jsx)("div",{className:m.a.img,style:{backgroundImage:"url(".concat(e.url,")")}}),Object(p.jsxs)("div",{className:m.a.desc,children:[Object(p.jsxs)("div",{className:m.a.priceTitle,children:[Object(p.jsx)("div",{className:m.a.title,children:e.title}),Object(p.jsxs)("div",{className:m.a.price,children:["$",e.price]})]}),Object(p.jsx)("div",{className:m.a.des,children:e.desc}),Object(p.jsxs)("div",{className:m.a.description,id:m.a.s,children:[a,"..."]}),Object(p.jsxs)("div",{className:m.a.icons,children:[Object(p.jsxs)("div",{className:m.a.star,children:[" ",Object(p.jsx)(x,{star:e.star})]}),Object(p.jsx)("div",{className:m.a.cross,children:" + "})]})]})]})},O=c(22),v=c.n(O),N=function(e){var a=e.foods.map((function(e){return Object(p.jsx)(_,{url:e.url,price:e.price,description:e.description,title:e.title,star:e.star,desc:e.strMeal},e._id)}));return Object(p.jsx)("div",{className:v.a.container,children:a})},g=c(8),k=c.n(g),w=c(5),y=c.n(w),F=function(){return Object(p.jsxs)("form",{className:y.a.form,id:"form",children:[Object(p.jsxs)("div",{className:y.a.each,children:[Object(p.jsx)("label",{htmlFor:"name",children:"full name"}),Object(p.jsx)("input",{type:"text",name:"name",placeholder:"John Doe"})]}),Object(p.jsxs)("div",{className:y.a.each,children:[Object(p.jsx)("label",{htmlFor:"email",children:"email"}),Object(p.jsx)("input",{type:"email",name:"email",placeholder:"johnDoe@email.com"})]}),Object(p.jsxs)("div",{className:y.a.each,children:[Object(p.jsx)("label",{htmlFor:"phoneNumber",children:"mobile"}),Object(p.jsx)("input",{type:"number",name:"phoneNumber",placeholder:"+23445455454"})]}),Object(p.jsx)("button",{children:"submit"})]})},C=c(23),T=c.n(C),J=function(){return Object(p.jsx)("div",{className:T.a.loader,children:"Loading..."})},L=function(e){var a;return a=e.foods.length<1?Object(p.jsx)(J,{}):Object(p.jsx)(N,{foods:e.foods}),Object(p.jsxs)("div",{className:k.a.container,children:[Object(p.jsx)("h3",{children:"Some meals we serve"}),Object(p.jsx)("p",{children:"all meals are served hot and fresh"}),a,Object(p.jsx)("button",{className:k.a.up,children:Object(p.jsx)("a",{href:"#head",children:"up"})}),Object(p.jsx)("button",{children:"learn more"}),Object(p.jsx)(F,{})]})},S=c(9),B=c.n(S),P=function(){return Object(p.jsxs)("div",{className:B.a.footer,children:[Object(p.jsx)("div",{children:"Made with love by Tomiwa"}),Object(p.jsx)("div",{children:"Phone: +2349034119761"}),Object(p.jsx)("div",{children:"Email: zsolutionfood@gmail.com"}),Object(p.jsxs)("div",{className:B.a.icons,children:[Object(p.jsx)("i",{className:"fa fa-whatsapp fa-2x"}),Object(p.jsx)("i",{className:"fa fa-envelope fa-2x"}),Object(p.jsx)("i",{className:"fa fa-twitter fa-2x"})]}),Object(p.jsx)("div",{children:"Terms and conditions"})]})},W=c(10),z=c.n(W),D=function(){return Object(p.jsx)("div",{className:z.a.container,id:"head",children:Object(p.jsxs)("div",{id:z.a.back,children:[Object(p.jsx)("h3",{children:"Bukka food"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestiae!"}),Object(p.jsx)("button",{children:Object(p.jsx)("a",{href:"#form",children:"Book A Table"})})]})})};var E=function(){var e=Object(t.useState)([]),a=Object(l.a)(e,2),c=a[0],s=a[1];function r(){return(r=Object(d.a)(o.a.mark((function e(a){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(a);case 3:c=e.sent,console.log(c),t=c.data.data,s(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(t.useEffect)((function(){!function(e){r.apply(this,arguments)}("https://proj-tom-xv10w.herokuapp.com/api/main/get-food")}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(D,{}),Object(p.jsx)(L,{foods:c}),Object(p.jsx)(P,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(a){var c=a.getCLS,t=a.getFID,s=a.getFCP,r=a.getLCP,n=a.getTTFB;c(e),t(e),s(e),r(e),n(e)}))};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),I()},8:function(e,a,c){e.exports={container:"body_container__3PWUW",up:"body_up__33gQY"}},9:function(e,a,c){e.exports={footer:"footer_footer__3gIfJ",icons:"footer_icons__3lofx"}}},[[51,1,2]]]);
//# sourceMappingURL=main.9f5d8c7a.chunk.js.map