(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,s,a){e.exports=a("2f39")},"2f39":function(e,s,a){"use strict";a.r(s);var j=a("a34a"),n=a.n(j),c=(a("a481"),a("96cf"),a("c973")),t=a.n(c),r=(a("7d6e"),a("e54f"),a("1194"),a("62f2"),a("7e6d"),a("2b0e")),b=a("42d2"),d=a("b05d");r["default"].use(d["a"],{config:{},iconSet:b["a"]});var f=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},o=[],u={name:"App"},i=u,l=a("2877"),h=Object(l["a"])(i,f,o,!1,null,null,null),m=h.exports,p=a("8c4f"),k=[{path:"/",component:function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"f241"))},children:[{path:"",redirect:"/docs"},{path:"/docs",component:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"8b24"))}}]}];k.push({path:"*",component:function(){return a.e(4).then(a.bind(null,"e51e"))}});var v=k;r["default"].use(p["a"]);var g=function(){var e=new p["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:v,mode:"history",base:"/app-extension-q-date-filter/"});return e},z=function(){return y.apply(this,arguments)};function y(){return y=t()(n.a.mark((function e(){var s,a;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof g){e.next=6;break}return e.next=3,g({Vue:r["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=g;case 7:return s=e.t0,a={router:s,render:function(e){return e(m)}},a.el="#q-app",e.abrupt("return",{app:a,router:s});case 11:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var w=a("dbd5");function x(){return O.apply(this,arguments)}function O(){return O=t()(n.a.mark((function e(){var s,a,j,c,t,b,d,f;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:s=e.sent,a=s.app,j=s.router,c=!0,t=function(e){c=!1,window.location.href=e},b=window.location.href.replace(window.location.origin,""),d=[w["a"]],f=0;case 10:if(!(!0===c&&f<d.length)){e.next=28;break}if("function"===typeof d[f]){e.next=13;break}return e.abrupt("continue",25);case 13:return e.prev=13,e.next=16,d[f]({app:a,router:j,Vue:r["default"],ssrContext:null,redirect:t,urlPath:b});case 16:e.next=25;break;case 18:if(e.prev=18,e.t0=e["catch"](13),!e.t0||!e.t0.url){e.next=23;break}return window.location.href=e.t0.url,e.abrupt("return");case 23:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 25:f++,e.next=10;break;case 28:if(!1!==c){e.next=30;break}return e.abrupt("return");case 30:new r["default"](a);case 31:case"end":return e.stop()}}),e,null,[[13,18]])}))),O.apply(this,arguments)}x()},"7e6d":function(e,s,a){},"89d8":function(e,s,a){var j={"./af":"7011","./af.js":"7011","./ar":"705d","./ar-dz":"72e9","./ar-dz.js":"72e9","./ar-kw":"bfa5","./ar-kw.js":"bfa5","./ar-ly":"7379","./ar-ly.js":"7379","./ar-ma":"ceff","./ar-ma.js":"ceff","./ar-sa":"38b9","./ar-sa.js":"38b9","./ar-tn":"9dac","./ar-tn.js":"9dac","./ar.js":"705d","./az":"3cea","./az.js":"3cea","./be":"07e9","./be.js":"07e9","./bg":"e17e","./bg.js":"e17e","./bm":"b95f","./bm.js":"b95f","./bn":"ed7b","./bn.js":"ed7b","./bo":"fb1d","./bo.js":"fb1d","./br":"99de","./br.js":"99de","./bs":"6b35","./bs.js":"6b35","./ca":"882d","./ca.js":"882d","./cs":"6245","./cs.js":"6245","./cv":"b139","./cv.js":"b139","./cy":"19be","./cy.js":"19be","./da":"ccc0","./da.js":"ccc0","./de":"0366","./de-at":"d6f9","./de-at.js":"d6f9","./de-ch":"ee05","./de-ch.js":"ee05","./de.js":"0366","./dv":"5c34","./dv.js":"5c34","./el":"c556","./el.js":"c556","./en-au":"b598","./en-au.js":"b598","./en-ca":"ac37","./en-ca.js":"ac37","./en-gb":"404d","./en-gb.js":"404d","./en-ie":"0e97","./en-ie.js":"0e97","./en-il":"5d19","./en-il.js":"5d19","./en-in":"86aa","./en-in.js":"86aa","./en-nz":"d479","./en-nz.js":"d479","./en-sg":"b8c9","./en-sg.js":"b8c9","./eo":"49fc","./eo.js":"49fc","./es":"788b","./es-do":"97ab","./es-do.js":"97ab","./es-us":"e61c","./es-us.js":"e61c","./es.js":"788b","./et":"cd68","./et.js":"cd68","./eu":"e8cb","./eu.js":"e8cb","./fa":"3b1c","./fa.js":"3b1c","./fi":"e10c","./fi.js":"e10c","./fil":"945d","./fil.js":"945d","./fo":"7931","./fo.js":"7931","./fr":"9aba","./fr-ca":"707e","./fr-ca.js":"707e","./fr-ch":"f20a","./fr-ch.js":"f20a","./fr.js":"9aba","./fy":"679d","./fy.js":"679d","./ga":"17c4","./ga.js":"17c4","./gd":"7a0d","./gd.js":"7a0d","./gl":"0c1f","./gl.js":"0c1f","./gom-deva":"264f","./gom-deva.js":"264f","./gom-latn":"0e30","./gom-latn.js":"0e30","./gu":"8482","./gu.js":"8482","./he":"d6ba","./he.js":"d6ba","./hi":"7b88","./hi.js":"7b88","./hr":"193e","./hr.js":"193e","./hu":"d697","./hu.js":"d697","./hy-am":"258d","./hy-am.js":"258d","./id":"cbbe","./id.js":"cbbe","./is":"d529","./is.js":"d529","./it":"2ace","./it-ch":"f152","./it-ch.js":"f152","./it.js":"2ace","./ja":"3109","./ja.js":"3109","./jv":"88bb","./jv.js":"88bb","./ka":"acec","./ka.js":"acec","./kk":"0ad8","./kk.js":"0ad8","./km":"0674","./km.js":"0674","./kn":"9e0a","./kn.js":"9e0a","./ko":"5a0b","./ko.js":"5a0b","./ku":"7371","./ku.js":"7371","./ky":"b654","./ky.js":"b654","./lb":"ca8f","./lb.js":"ca8f","./lo":"378b","./lo.js":"378b","./lt":"543e","./lt.js":"543e","./lv":"a302","./lv.js":"a302","./me":"14f5","./me.js":"14f5","./mi":"ea95","./mi.js":"ea95","./mk":"e2fd","./mk.js":"e2fd","./ml":"c59d","./ml.js":"c59d","./mn":"9cde","./mn.js":"9cde","./mr":"784d","./mr.js":"784d","./ms":"9658","./ms-my":"3aed","./ms-my.js":"3aed","./ms.js":"9658","./mt":"989b","./mt.js":"989b","./my":"ea21","./my.js":"ea21","./nb":"98be","./nb.js":"98be","./ne":"2452","./ne.js":"2452","./nl":"ea1b","./nl-be":"952c","./nl-be.js":"952c","./nl.js":"ea1b","./nn":"a8f2","./nn.js":"a8f2","./oc-lnc":"d28e","./oc-lnc.js":"d28e","./pa-in":"f724","./pa-in.js":"f724","./pl":"86b1","./pl.js":"86b1","./pt":"6243","./pt-br":"cb4b","./pt-br.js":"cb4b","./pt.js":"6243","./ro":"2055","./ro.js":"2055","./ru":"0396","./ru.js":"0396","./sd":"c23e","./sd.js":"c23e","./se":"2abd","./se.js":"2abd","./si":"2d66","./si.js":"2d66","./sk":"f5b9","./sk.js":"f5b9","./sl":"69a5","./sl.js":"69a5","./sq":"24c0","./sq.js":"24c0","./sr":"9394","./sr-cyrl":"71d7","./sr-cyrl.js":"71d7","./sr.js":"9394","./ss":"08ae","./ss.js":"08ae","./sv":"e221","./sv.js":"e221","./sw":"2075","./sw.js":"2075","./ta":"36ea","./ta.js":"36ea","./te":"05f7","./te.js":"05f7","./tet":"ba80","./tet.js":"ba80","./tg":"1c7e","./tg.js":"1c7e","./th":"ea4d","./th.js":"ea4d","./tl-ph":"a56e","./tl-ph.js":"a56e","./tlh":"dcb9","./tlh.js":"dcb9","./tr":"9295","./tr.js":"9295","./tzl":"a8a2","./tzl.js":"a8a2","./tzm":"8574","./tzm-latn":"54d5","./tzm-latn.js":"54d5","./tzm.js":"8574","./ug-cn":"f5f7","./ug-cn.js":"f5f7","./uk":"2536","./uk.js":"2536","./ur":"bba0","./ur.js":"bba0","./uz":"2db5","./uz-latn":"3786","./uz-latn.js":"3786","./uz.js":"2db5","./vi":"5119","./vi.js":"5119","./x-pseudo":"52ce","./x-pseudo.js":"52ce","./yo":"7190","./yo.js":"7190","./zh-cn":"193f","./zh-cn.js":"193f","./zh-hk":"7cf1","./zh-hk.js":"7cf1","./zh-mo":"b012","./zh-mo.js":"b012","./zh-tw":"41bb","./zh-tw.js":"41bb"};function n(e){return Promise.resolve().then((function(){if(!a.o(j,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var n=j[e];return a.t(n,7)}))}n.keys=function(){return Object.keys(j)},n.id="89d8",e.exports=n},"8e39":function(e,s,a){var j={"./ar":["6ae0",0],"./ar.js":["6ae0",0],"./bg":["8ac5",0],"./bg.js":["8ac5",0],"./ca":["082d",0],"./ca.js":["082d",0],"./cs":["bc74",0],"./cs.js":["bc74",0],"./da":["e7b4",0],"./da.js":["e7b4",0],"./de":["f706",0],"./de.js":["f706",0],"./el":["4525",0],"./el.js":["4525",0],"./en-gb":["1659",0],"./en-gb.js":["1659",0],"./en-us":["bb48",0],"./en-us.js":["bb48",0],"./eo":["2d22",0],"./eo.js":["2d22",0],"./es":["b5e0",0],"./es.js":["b5e0",0],"./fa-ir":["ef57",0],"./fa-ir.js":["ef57",0],"./fi":["4ba7",0],"./fi.js":["4ba7",0],"./fr":["d16b",0],"./fr.js":["d16b",0],"./gn":["615b",0],"./gn.js":["615b",0],"./he":["7543",0],"./he.js":["7543",0],"./hr":["bcb0",0],"./hr.js":["bcb0",0],"./hu":["f053",0],"./hu.js":["f053",0],"./id":["0268",0],"./id.js":["0268",0],"./it":["80e9",0],"./it.js":["80e9",0],"./ja":["2191",0],"./ja.js":["2191",0],"./km":["74f9",0],"./km.js":["74f9",0],"./ko-kr":["3f43",0],"./ko-kr.js":["3f43",0],"./lu":["5156",0],"./lu.js":["5156",0],"./lv":["982c",0],"./lv.js":["982c",0],"./ml":["7fa0",0],"./ml.js":["7fa0",0],"./ms":["30a1",0],"./ms.js":["30a1",0],"./nb-no":["a13e",0],"./nb-no.js":["a13e",0],"./nl":["6706",0],"./nl.js":["6706",0],"./pl":["4d07",0],"./pl.js":["4d07",0],"./pt":["a912",0],"./pt-br":["191a",0],"./pt-br.js":["191a",0],"./pt.js":["a912",0],"./ro":["bb3a",0],"./ro.js":["bb3a",0],"./ru":["bfb8",0],"./ru.js":["bfb8",0],"./sk":["76c0",0],"./sk.js":["76c0",0],"./sl":["e91d",0],"./sl.js":["e91d",0],"./sr":["b2e5",0],"./sr.js":["b2e5",0],"./sv":["ae38",0],"./sv.js":["ae38",0],"./th":["0dd9",0],"./th.js":["0dd9",0],"./tr":["8509",0],"./tr.js":["8509",0],"./uk":["1bbb",0],"./uk.js":["1bbb",0],"./vi":["e2c1",0],"./vi.js":["e2c1",0],"./zh-hans":["033a",0],"./zh-hans.js":["033a",0],"./zh-hant":["daea",0],"./zh-hant.js":["daea",0]};function n(e){if(!a.o(j,e))return Promise.resolve().then((function(){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=j[e],n=s[0];return a.e(s[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(j)},n.id="8e39",e.exports=n},f29b:function(e,s,a){var j={"./af":"7011","./af.js":"7011","./ar":"705d","./ar-dz":"72e9","./ar-dz.js":"72e9","./ar-kw":"bfa5","./ar-kw.js":"bfa5","./ar-ly":"7379","./ar-ly.js":"7379","./ar-ma":"ceff","./ar-ma.js":"ceff","./ar-sa":"38b9","./ar-sa.js":"38b9","./ar-tn":"9dac","./ar-tn.js":"9dac","./ar.js":"705d","./az":"3cea","./az.js":"3cea","./be":"07e9","./be.js":"07e9","./bg":"e17e","./bg.js":"e17e","./bm":"b95f","./bm.js":"b95f","./bn":"ed7b","./bn.js":"ed7b","./bo":"fb1d","./bo.js":"fb1d","./br":"99de","./br.js":"99de","./bs":"6b35","./bs.js":"6b35","./ca":"882d","./ca.js":"882d","./cs":"6245","./cs.js":"6245","./cv":"b139","./cv.js":"b139","./cy":"19be","./cy.js":"19be","./da":"ccc0","./da.js":"ccc0","./de":"0366","./de-at":"d6f9","./de-at.js":"d6f9","./de-ch":"ee05","./de-ch.js":"ee05","./de.js":"0366","./dv":"5c34","./dv.js":"5c34","./el":"c556","./el.js":"c556","./en-au":"b598","./en-au.js":"b598","./en-ca":"ac37","./en-ca.js":"ac37","./en-gb":"404d","./en-gb.js":"404d","./en-ie":"0e97","./en-ie.js":"0e97","./en-il":"5d19","./en-il.js":"5d19","./en-in":"86aa","./en-in.js":"86aa","./en-nz":"d479","./en-nz.js":"d479","./en-sg":"b8c9","./en-sg.js":"b8c9","./eo":"49fc","./eo.js":"49fc","./es":"788b","./es-do":"97ab","./es-do.js":"97ab","./es-us":"e61c","./es-us.js":"e61c","./es.js":"788b","./et":"cd68","./et.js":"cd68","./eu":"e8cb","./eu.js":"e8cb","./fa":"3b1c","./fa.js":"3b1c","./fi":"e10c","./fi.js":"e10c","./fil":"945d","./fil.js":"945d","./fo":"7931","./fo.js":"7931","./fr":"9aba","./fr-ca":"707e","./fr-ca.js":"707e","./fr-ch":"f20a","./fr-ch.js":"f20a","./fr.js":"9aba","./fy":"679d","./fy.js":"679d","./ga":"17c4","./ga.js":"17c4","./gd":"7a0d","./gd.js":"7a0d","./gl":"0c1f","./gl.js":"0c1f","./gom-deva":"264f","./gom-deva.js":"264f","./gom-latn":"0e30","./gom-latn.js":"0e30","./gu":"8482","./gu.js":"8482","./he":"d6ba","./he.js":"d6ba","./hi":"7b88","./hi.js":"7b88","./hr":"193e","./hr.js":"193e","./hu":"d697","./hu.js":"d697","./hy-am":"258d","./hy-am.js":"258d","./id":"cbbe","./id.js":"cbbe","./is":"d529","./is.js":"d529","./it":"2ace","./it-ch":"f152","./it-ch.js":"f152","./it.js":"2ace","./ja":"3109","./ja.js":"3109","./jv":"88bb","./jv.js":"88bb","./ka":"acec","./ka.js":"acec","./kk":"0ad8","./kk.js":"0ad8","./km":"0674","./km.js":"0674","./kn":"9e0a","./kn.js":"9e0a","./ko":"5a0b","./ko.js":"5a0b","./ku":"7371","./ku.js":"7371","./ky":"b654","./ky.js":"b654","./lb":"ca8f","./lb.js":"ca8f","./lo":"378b","./lo.js":"378b","./lt":"543e","./lt.js":"543e","./lv":"a302","./lv.js":"a302","./me":"14f5","./me.js":"14f5","./mi":"ea95","./mi.js":"ea95","./mk":"e2fd","./mk.js":"e2fd","./ml":"c59d","./ml.js":"c59d","./mn":"9cde","./mn.js":"9cde","./mr":"784d","./mr.js":"784d","./ms":"9658","./ms-my":"3aed","./ms-my.js":"3aed","./ms.js":"9658","./mt":"989b","./mt.js":"989b","./my":"ea21","./my.js":"ea21","./nb":"98be","./nb.js":"98be","./ne":"2452","./ne.js":"2452","./nl":"ea1b","./nl-be":"952c","./nl-be.js":"952c","./nl.js":"ea1b","./nn":"a8f2","./nn.js":"a8f2","./oc-lnc":"d28e","./oc-lnc.js":"d28e","./pa-in":"f724","./pa-in.js":"f724","./pl":"86b1","./pl.js":"86b1","./pt":"6243","./pt-br":"cb4b","./pt-br.js":"cb4b","./pt.js":"6243","./ro":"2055","./ro.js":"2055","./ru":"0396","./ru.js":"0396","./sd":"c23e","./sd.js":"c23e","./se":"2abd","./se.js":"2abd","./si":"2d66","./si.js":"2d66","./sk":"f5b9","./sk.js":"f5b9","./sl":"69a5","./sl.js":"69a5","./sq":"24c0","./sq.js":"24c0","./sr":"9394","./sr-cyrl":"71d7","./sr-cyrl.js":"71d7","./sr.js":"9394","./ss":"08ae","./ss.js":"08ae","./sv":"e221","./sv.js":"e221","./sw":"2075","./sw.js":"2075","./ta":"36ea","./ta.js":"36ea","./te":"05f7","./te.js":"05f7","./tet":"ba80","./tet.js":"ba80","./tg":"1c7e","./tg.js":"1c7e","./th":"ea4d","./th.js":"ea4d","./tl-ph":"a56e","./tl-ph.js":"a56e","./tlh":"dcb9","./tlh.js":"dcb9","./tr":"9295","./tr.js":"9295","./tzl":"a8a2","./tzl.js":"a8a2","./tzm":"8574","./tzm-latn":"54d5","./tzm-latn.js":"54d5","./tzm.js":"8574","./ug-cn":"f5f7","./ug-cn.js":"f5f7","./uk":"2536","./uk.js":"2536","./ur":"bba0","./ur.js":"bba0","./uz":"2db5","./uz-latn":"3786","./uz-latn.js":"3786","./uz.js":"2db5","./vi":"5119","./vi.js":"5119","./x-pseudo":"52ce","./x-pseudo.js":"52ce","./yo":"7190","./yo.js":"7190","./zh-cn":"193f","./zh-cn.js":"193f","./zh-hk":"7cf1","./zh-hk.js":"7cf1","./zh-mo":"b012","./zh-mo.js":"b012","./zh-tw":"41bb","./zh-tw.js":"41bb"};function n(e){var s=c(e);return a(s)}function c(e){if(!a.o(j,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return j[e]}n.keys=function(){return Object.keys(j)},n.resolve=c,e.exports=n,n.id="f29b"}},[[0,2,0]]]);