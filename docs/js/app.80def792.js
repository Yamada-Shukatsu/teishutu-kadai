(function(){var a={640:function(a,t,e){"use strict";var n=e(5130),o=e(6768),i=e(4232),r=e(144),d=e(8355),u=e(3456);const l={class:"prefbox"},c=["id","value","onChange"],s={class:"glaph"},f=["v-if"],p={data(){return{checkedpref:[],checkedpref2:[],datacollection:{labels:["1960","1970","1980","1990","2000","2010","2020"],datasets:[{label:"人口グラフ",backgroundColor:"#f87979",data:[0,0,0,0,0,0,0]}]},loaded:!1,graph:null,prefectures:null,jinkoudata:null}},mounted(){var a="https://opendata.resas-portal.go.jp/api/v1/prefectures";d.A.get(a,{headers:{"X-API-KEY":"m5rGQCQYeoc41bMnb1ZQn84YQzR6DAlBw01wbx8u"}}).then((a=>{this.prefectures=a.data.result,this.loaded=!0,console.log("mounted()")}))},methods:{changed(a,t){console.log(this.checkedpref.includes(a));var e="https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode="+a;1==this.checkedpref.includes(a)&&(this.loaded=!1,this.graph&&this.graph.destroy(),d.A.get(e,{headers:{"X-API-KEY":"m5rGQCQYeoc41bMnb1ZQn84YQzR6DAlBw01wbx8u"}}).then((a=>{this.jinkoudata=a.data.result,console.log("人口の取得の実行がされました。"),this.datacollection.labels=[this.jinkoudata.data[0].data[0].year,this.jinkoudata.data[0].data[2].year,this.jinkoudata.data[0].data[4].year,this.jinkoudata.data[0].data[6].year,this.jinkoudata.data[0].data[8].year,this.jinkoudata.data[0].data[10].year,this.jinkoudata.data[0].data[12].year],this.datacollection.datasets.data=[this.jinkoudata.data[0].data[0].value,this.jinkoudata.data[0].data[2].value,this.jinkoudata.data[0].data[4].value,this.jinkoudata.data[0].data[6].value,this.jinkoudata.data[0].data[8].value,this.jinkoudata.data[0].data[10].value,this.jinkoudata.data[0].data[12].value],this.loaded=!0,this.graph=new u.Ay("glaphspace",{type:"line",data:{labels:this.datacollection.labels,datasets:[{label:t,data:this.datacollection.datasets.data,backgroundColor:this.datacollection.datasets.backgroundColor}]},options:{responsive:!0,plugins:{legend:{display:!0,position:"bottom"}},maintainAspectRatio:!1}})})))}}};var h=Object.assign(p,{__name:"App",setup(a){const t=(0,r.KR)("都道府県ごとの人口グラフ");return(a,e)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("h1",null,(0,i.v_)(t.value),1),(0,o.Lk)("div",l,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(this.prefectures,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t.prefName,class:"prefcheck"},[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>a.checkedpref=t),id:t.prefCode,value:t.prefCode,onChange:e=>a.changed(t.prefCode,t.prefName)},null,40,c),[[n.lH,a.checkedpref]]),(0,o.eW)(" "+(0,i.v_)(t.prefName),1)])))),128))]),(0,o.Lk)("div",s,[(0,o.Lk)("canvas",{id:"glaphspace","v-if":a.loaded},(0,i.v_)(this.graph),9,f)])],64))}});const v=h;var k=v;(0,n.Ef)(k).mount("#app"),e(3711).config()},8982:function(){},7790:function(){},3776:function(){},1638:function(){},2668:function(){},7965:function(){},6089:function(){},2016:function(){},9368:function(){},4688:function(){},1069:function(){},5340:function(){},9838:function(){}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return a[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.m=a,function(){var a=[];e.O=function(t,n,o,i){if(!n){var r=1/0;for(c=0;c<a.length;c++){n=a[c][0],o=a[c][1],i=a[c][2];for(var d=!0,u=0;u<n.length;u++)(!1&i||r>=i)&&Object.keys(e.O).every((function(a){return e.O[a](n[u])}))?n.splice(u--,1):(d=!1,i<r&&(r=i));if(d){a.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=a.length;c>0&&a[c-1][2]>i;c--)a[c]=a[c-1];a[c]=[n,o,i]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.nmd=function(a){return a.paths=[],a.children||(a.children=[]),a}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var o,i,r=n[0],d=n[1],u=n[2],l=0;if(r.some((function(t){return 0!==a[t]}))){for(o in d)e.o(d,o)&&(e.m[o]=d[o]);if(u)var c=u(e)}for(t&&t(n);l<r.length;l++)i=r[l],e.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return e.O(c)},n=self["webpackChunkkadai_step1"]=self["webpackChunkkadai_step1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(640)}));n=e.O(n)})();
//# sourceMappingURL=app.80def792.js.map