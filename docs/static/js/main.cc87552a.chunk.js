(this.webpackJsonpcomputational_game=this.webpackJsonpcomputational_game||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(3),c=a(7),i=a.n(c),l=a(8),o=a(9),d=a(4),r=a(11),u=a(10),h=a(5);a(18);h.a.apps.length||h.a.initializeApp({apiKey:"AIzaSyBjonRNEb0SYCueDyQzRZ0JoInBz6AmXII",authDomain:"computational-game.firebaseapp.com",databaseURL:"https://computational-game-default-rtdb.firebaseio.com",projectId:"computational-game",storageBucket:"computational-game.appspot.com",messagingSenderId:"877910975145",appId:"1:877910975145:web:31b4151f82274c97abffb8"});var m=function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={num:0,msg:"count start",all:[],ans:0,data:4},n.doAction=n.doAction.bind(Object(d.a)(n)),n.showAns=n.showAns.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"doAction",value:function(t){var e=this;this.state.all.splice(0,this.state.all.length),document.getElementById("on_off").disabled="true",document.getElementById("on_off2").disabled="true",this.intervalid=setInterval((function(){e.setState((function(t){return{num:Math.floor(90*Math.random())+10,msg:e.state.counter,all:e.state.all.concat(e.state.num),ans:0}})),10===e.state.all.length&&(clearInterval(e.intervalid),document.getElementById("on_off").disabled="",document.getElementById("on_off2").disabled="")}),Math.ceil(1600/document.getElementById("target").value))}},{key:"Cal_ans_num",value:function(){this.state.all.push(this.state.num);return function(t){return t.reduce((function(t,e,a,n){return t+e}))}(this.state.all)}},{key:"showAns",value:function(t){var e=this;this.state.all.length>0?this.setState((function(t){return{ans:e.Cal_ans_num(),num:0}})):this.setState((function(t){return{ans:0}}))}},{key:"getFireData",value:function(){var t=this;h.a.database().ref("sample").on("value",(function(e){t.setState({data:e.child("1").child("ans").val()})}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"First",children:Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("p",{className:"Num_Display",children:this.state.num}),Object(n.jsx)("div",{className:"Second",children:Object(n.jsx)("div",{children:Object(n.jsxs)("select",{className:"Speed_Button",defaultValue:"1",id:"target",children:[Object(n.jsx)("option",{value:"1",disabled:!0,children:"Choose Game Level"}),Object(n.jsx)("option",{value:"2",children:"Speed Lv.1"}),Object(n.jsx)("option",{value:"3",children:"Speed Lv.2"}),Object(n.jsx)("option",{value:"4",children:"Speed Lv.3"})]})})}),Object(n.jsx)("div",{className:"Third",children:Object(n.jsx)("button",{className:"Click_Box",onClick:this.doAction,id:"on_off",children:"Game Start!!"})}),Object(n.jsxs)("div",{className:"Fourth",children:[Object(n.jsx)("button",{className:"ans_button",onClick:this.showAns,id:"on_off2",children:"SHOW ANSWER"}),Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{className:"Fifth",children:Object(n.jsx)("table",{className:"res",children:Object(n.jsx)("tbody",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("td",{children:this.state.ans})})})})})]})})}}]),a}(s.Component);a(19);i.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.cc87552a.chunk.js.map