"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9149],{9149:(M,g,s)=>{s.r(g),s.d(g,{StatisticsPageModule:()=>P});var p=s(6895),m=s(433),a=s(5035),d=s(1407),r=s(655),h=s(6534),e=s(8256),l=s(1811);const f=[{path:"",component:(()=>{class t{constructor(){this.options={series:[],chart:{type:"line",height:300,animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}}}}}ngOnInit(){this.spakLine(),this.test()}spakLine(){return(0,r.mG)(this,void 0,void 0,function*(){const o=(yield this.getLogs()).map(c=>({x:new Date(c.time).toLocaleString(),y:c.report}));console.log(o),this.options={chart:{type:"line",height:300,animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}},dropShadow:{enabled:!0,top:1,left:1,blur:2,opacity:.2}},series:[{data:o}],stroke:{width:3,curve:"smooth"},markers:{size:5},grid:{padding:{top:20,left:110,bottom:10}}}})}getLogs(n=1){return(0,r.mG)(this,void 0,void 0,function*(){try{const o=yield h.Z.get(`https://api-aggregate.s-k56.ru/api/get-logs?id_machine=${n}`);return console.log("\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:",o.data),o.data}catch(o){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",o),[]}})}test(){return(0,r.mG)(this,void 0,void 0,function*(){setInterval(()=>(0,r.mG)(this,void 0,void 0,function*(){const c=(yield this.getLogs()).sort((u,v)=>new Date(u.time).getTime()-new Date(v.time).getTime()).map(u=>({x:new Date(u.time).toLocaleString(),y:u.report}));this.options&&(this.options.series=[{data:c}])}),1e3)})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-statistics"]],decls:9,vars:5,consts:[["color","tertiary"],[3,"fullscreen"],[1,"title"],[1,"box","box1"],[3,"chart","series","stroke","markers"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),e._uU(3,"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"h1",2),e._uU(6,"\u0420\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430"),e.qZA(),e.TgZ(7,"div",3),e._UZ(8,"apx-chart",4),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("chart",o.options.chart)("series",o.options.series)("stroke",o.options.stroke)("markers",o.options.markers))},dependencies:[a.W2,a.Gu,a.wd,a.sr,l.x],styles:["ion-content[_ngcontent-%COMP%]{--backgroung: #343e59}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#ffd3a5;text-align:center}.box[_ngcontent-%COMP%]{margin:20px;padding:10px 20px;box-shadow:0 1px 15px 1px Rgba(69,65,78,.08);background-color:#2b2d3e;text-shadow:0 1px 1px 1px #666;position:relative;border-radius:5px}.box[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{position:absolute;color:#fff;transform:scale(.8) translate(-10px,35px)}.box[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;margin:5px}.box1[_ngcontent-%COMP%]{background-image:linear-gradient(135deg,#ffd3a5 10%,#fd6585 100%)}.box3[_ngcontent-%COMP%]{padding:10px 0 0}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,m.u5,a.Pc,x,l.X]}),t})()}}]);