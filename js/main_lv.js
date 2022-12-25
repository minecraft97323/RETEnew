(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"Tulkot",1:"Atcelt",2:"Aizv\u0113rt",3:function(a){return"Google pakalpojum\u0101 \u0161\u012b lapa ir autom\u0101tiski tulkota \u0161\u0101d\u0101 valod\u0101: "+a},4:function(a){return"Tulkots valod\u0101: "+a},5:"K\u013c\u016bda: serveris nevar\u0113ja apstr\u0101d\u0101t piepras\u012bjumu. V\u0113l\u0101k m\u0113\u0123iniet v\u0113lreiz.",6:"Uzziniet vair\u0101k",7:function(a){return"Nodro\u0161ina "+a},8:"Tulkot\u0101js",9:"Tiek veikta tulko\u0161ana",10:function(a){return"Vai, izmantojot pakalpojumu Google tulkot\u0101js, tulkot \u0161o lapu \u0161\u0101d\u0101 valod\u0101: "+
(a+"?")},11:function(a){return"Skat\u012bt \u0161o lapu \u0161\u0101d\u0101 valod\u0101: "+a},12:"R\u0101d\u012bt s\u0101kotn\u0113jo versiju",13:"\u0160\u012b lok\u0101l\u0101 faila saturs tulko\u0161anai Google pakalpojum\u0101 tiks s\u016bt\u012bts, izmantojot dro\u0161u savienojumu.",14:"\u0160\u012bs dro\u0161\u0101s lapas saturs tulko\u0161anai Google pakalpojum\u0101 tiks s\u016bt\u012bts, izmantojot dro\u0161u savienojumu.",15:"\u0160\u012bs iek\u0161t\u012bkla lapas saturs tulko\u0161anai Google pakalpojum\u0101 tiks s\u016bt\u012bts, izmantojot dro\u0161u savienojumu.",
16:"Atlas\u012bt valodu",17:function(a){return"Izsl\u0113gt tulkojumu \u0161\u0101d\u0101 valod\u0101: "+a},18:function(a){return"Izsl\u0113gt \u0161\u0101dai valodai: "+a},19:"Vienm\u0113r sl\u0113pt",20:"S\u0101kotn\u0113jais teksts:",21:"Ieteikt lab\u0101ku tulkojumu",22:"Iesniegt",23:"Tulkot visu",24:"Atjaunot visu",25:"Atcelt visu",26:"Tulkot sada\u013cas man\u0101 valod\u0101",27:function(a){return"Tulkot visu \u0161\u0101d\u0101 valod\u0101: "+a},28:"R\u0101d\u012bt ori\u0123in\u0101lvalodas",
29:"Opcijas",30:"Izsl\u0113gt \u0161\u012bs vietnes tulko\u0161anu",31:null,32:"R\u0101d\u012bt citus tulkojumus",33:"Noklik\u0161\u0137iniet uz iepriek\u0161 nor\u0101d\u012btajiem v\u0101rdiem, lai skat\u012btu citus tulkojumus.",34:"Izmantot",35:"Lai main\u012btu sec\u012bbu, velciet fr\u0101zi, turot nospiestu tausti\u0146u Shift.",36:"Noklik\u0161\u0137iniet, lai ieg\u016btu citus tulkojumus.",37:"Lai main\u012btu iepriek\u0161 nor\u0101d\u012bto v\u0101rdu sec\u012bbu, turiet nospiestu tausti\u0146u Shift, noklik\u0161\u0137iniet uz v\u0101rda un velciet to uz vajadz\u012bgo vietu.",
38:"Paldies, ka iesniedz\u0101t tulkojuma ieteikumu Google tulkot\u0101jam.",39:"P\u0101rvald\u012bt \u0161\u012bs vietnes tulko\u0161anu",40:"Noklik\u0161\u0137iniet uz v\u0101rda, lai skat\u012btu citus tulkojumus, vai veiciet dubultklik\u0161\u0137i, lai to redi\u0123\u0113tu tie\u0161i.",41:"S\u0101kotn\u0113jais teksts",42:"Tulkot\u0101js",43:"Tulkot",44:"J\u016bsu labojums ir iesniegts.",45:"K\u013c\u016bda: t\u012bmek\u013ca lapas valoda netiek atbalst\u012bta.",46:"Valodas tulko\u0161anas logr\u012bks"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_lv.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=translate.resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
