(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(t,c,n){"use strict";n.r(c);var e={props:["contacts"]},o=n(5),l={data:function(){return{icos:[{id:"facebook",ico:"/facebook-ico.png",link:"https://www.facebook.com/webmileu/"},{id:"behance",ico:"/behance-ico.png",link:"https://www.behance.net/Webmil"},{id:"medium",ico:"/medium-ico.png",link:"https://medium.com/@webmil"}]}},methods:{background:function(t){return"background-image: url('".concat(t,"')")}}},r={data:function(){return{contactsSales:{title:"Sales",phone:"+38 097 74 74 774",email:"sales@webmil.eu"},contactsInfo:{title:"Info",phone:"+38 096 023 63 63",email:"info@webmil.eu"},contactsHr:{title:"Hr",phone:"",email:"hr@webmil.eu"}}},mounted:function(){this.$ga.page("/contacts")},components:{ContactsBlock:Object(o.a)(e,(function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"c-contacts-block"},[n("h6",[t._v(t._s(t.contacts.title))]),n("div",{staticClass:"content"},[n("a",{attrs:{href:"mailto:"+t.contacts.email}},[t._v(t._s(t.contacts.email))]),n("br"),n("a",{attrs:{href:"tel:"+t.contacts.phone}},[t._v(t._s(t.contacts.phone))])])])}),[],!1,null,null,null).exports,SocialList:Object(o.a)(l,(function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"c-social-list o-main-flex o-main-flex--no-wrap o-main-flex--justify-content-start o-main-flex--align-items-center"},t._l(t.icos,(function(c){return n("div",{key:c.id,staticClass:"c-social-list__item",attrs:{id:c.id}},[n("a",{staticClass:"ico",style:t.background(c.ico),attrs:{href:c.link,src:c.ico}})])})),0)}),[],!1,null,null,null).exports}},m=Object(o.a)(r,(function(){var t=this.$createElement,c=this._self._c||t;return c("div",[c("div",{staticClass:"c-contacts-page o-main-flex o-main-flex--no-wrap o-main-flex--align-items-center"},[c("div",{staticClass:"o-wrapper o-wrapper--contacts"},[c("h5",[this._v("Contact us")]),c("div",{staticClass:"o-main-flex o-main-flex--no-wrap o-main-flex--justify-content-between"},[c("div",{staticClass:"o-main-flex__item"},[this._m(0),c("social-list")],1),c("div",{staticClass:"o-main-flex__item"},[c("contacts-block",{attrs:{contacts:this.contactsInfo}}),c("contacts-block",{attrs:{contacts:this.contactsSales}}),c("contacts-block",{attrs:{contacts:this.contactsHr}})],1)])])])])}),[function(){var t=this.$createElement,c=this._self._c||t;return c("h2",[this._v("Drop us "),c("span",[this._v("a line")]),this._v(" to collaborate")])}],!1,null,null,null);c.default=m.exports}}]);