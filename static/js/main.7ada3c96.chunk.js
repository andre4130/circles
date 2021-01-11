(this.webpackJsonpcircles=this.webpackJsonpcircles||[]).push([[0],{19:function(c,e,t){},23:function(c,e,t){"use strict";t.r(e);var s=t(0),l=t(1),i=t.n(l),n=t(13),a=t.n(n),r=(t(19),t(7)),o=t(25),j=t(26),b=function(c){var e=c.text,t=c.handleEdit,l=c.handleReset,i=c.disabled,n=c.brokenCounter,a=c.handleCounter,r=c.litCounter;return Object(s.jsx)("div",{className:"",children:Object(s.jsx)("div",{className:"d-flex mt-4 justify-content-end text-align-end",children:Object(s.jsxs)(o.a,{className:"",children:[Object(s.jsx)(o.a.Label,{children:"Name of the Circle"}),Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)(o.a.Control,{style:{width:"250px"},value:e,name:"name",as:"input",type:"text",placeholder:"set the name of the circle",onChange:t,disabled:i}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"d-flex pt-3 pb-1 justify-content-end",children:Object(s.jsx)(o.a.Label,{children:"Number of Broken States"})}),Object(s.jsxs)("div",{className:"d-inline-flex pb-3 w-100 justify-content-end",children:[Object(s.jsx)(j.a,{name:"increaseBroken",onClick:a,children:"+"}),Object(s.jsx)("div",{className:"d-flex bg-light align-items-center ml-2 mr-2 pl-3 pr-3 border-2",children:n})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"d-flex pt-3 pb-1 justify-content-end",children:Object(s.jsx)(o.a.Label,{children:"Number of Lit States"})}),Object(s.jsxs)("div",{className:"d-inline-flex pb-3 w-100 justify-content-end",children:[Object(s.jsx)(j.a,{name:"increaseLit",onClick:a,children:"+"}),Object(s.jsx)("div",{className:"d-flex bg-light align-items-center ml-2 mr-2 pl-3 pr-3 border-2",children:r})]}),Object(s.jsx)("div",{className:"d-flex pt-3 pb-3 justify-content-end",children:Object(s.jsx)(j.a,{className:"btn",onClick:l,type:"reset",children:"Reset"})})]})]})})})},d=t(8),h=t(6),x=function(c){var e=c.text,t=c.brokenCounter,i=c.litCounter,n=Object(l.useState)({bool1:!1,bool2:!1,bool3:!1,bool4:!1,bool5:!1,bool6:!1,bool7:!1,bool8:!1}),a=Object(r.a)(n,2),o=a[0],j=a[1],b=Object(l.useState)({lit1:!1,lit2:!1,lit3:!1,lit4:!1,lit5:!1,lit6:!1,lit7:!1,lit8:!1}),x=Object(r.a)(b,2),O=x[0],f=x[1];Object(l.useEffect)((function(){p(),m(),u()}),[t,i]);var m=function(){0===i&&0===t&&(f({lit1:!1,lit2:!1,lit3:!1,lit4:!1,lit5:!1,lit6:!1,lit7:!1,lit8:!1}),j({bool1:!1,bool2:!1,bool3:!1,bool4:!1,bool5:!1,bool6:!1,bool7:!1,bool8:!1}))},p=function(){for(var c=1;c<=8;c++){var e="bool"+c;t>=c&&(console.log(e,"true"),j(Object(h.a)(Object(h.a)({},o),{},Object(d.a)({},e,!0))))}},u=function(){for(var c=1;c<=8;c++){if(t+i>=c){var e="lit"+c;f(Object(h.a)(Object(h.a)({},O),{},Object(d.a)({},e,!0)))}}};return Object(s.jsx)("div",{children:Object(s.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 188.8 188.8",style:{height:"300px"},children:[Object(s.jsxs)("g",{id:"centro",children:[Object(s.jsx)("g",{children:Object(s.jsx)("a",{href:"#",onClick:function(c){c.preventDefault(),alert("Your Circle is called ".concat(e))},children:Object(s.jsx)("path",{className:"inner icons",d:"M160.1,92c-1.3-35.1-30.2-63.3-65.7-63.3c-35.6,0-64.5,28.2-65.7,63.5l42.2,0c1.1-12,11.2-21.3,23.5-21.3\r c12.2,0,22.2,9.2,23.4,21L160.1,92z"})})}),Object(s.jsx)("a",{href:"#",onClick:function(c){c.preventDefault(),alert("You Clicked on the Connect Function")},children:Object(s.jsx)("path",{className:"inner icons",d:"M95.9,117.8c11.5-0.9,20.6-10.2,21.3-21.8l42.5,0c-0.8,34.8-29,63.3-64,64.1L95.9,117.8z"})}),Object(s.jsx)("a",{href:"#",onClick:function(c){c.preventDefault(),alert("You Clicked on the Search Function")},children:Object(s.jsx)("path",{className:"inner icons",d:"M91.9,160.1c-34.7-1.1-62.5-29.4-63.5-63.8L70.9,96c0.7,11.5,9.7,20.8,21.2,21.7L91.9,160.1z"})})]}),Object(s.jsxs)("g",{children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{className:"st13",id:"CURVEDTEXT",d:"M51.9,91.5C53.3,69,71.8,54,94.6,54c22.8,0,41.3,14.7,42.7,37.1"})}),Object(s.jsx)("text",{style:{cursor:"pointer"},text:!0,x:"0",y:"50",fontFamily:"helvetica",fontSize:"16",fill:"ghostwhite",padding:"3px",textshadow:"2px 2px 1px lightgray",children:Object(s.jsx)("textPath",{alignmentBaseline:"top",href:"#CURVEDTEXT",startOffset:"50%",textAnchor:"middle",children:e})})]}),Object(s.jsx)("g",{id:"outer_circle",children:Object(s.jsx)("path",{className:"outer",d:"M94.4,0.7c-51.8,0-93.8,42-93.8,93.8c0,51.8,42,93.8,93.8,93.8s93.8-42,93.8-93.8\r C188.2,42.6,146.2,0.7,94.4,0.7z M94.4,165.2c-39.1,0-70.8-31.7-70.8-70.8s31.7-70.8,70.8-70.8s70.8,31.7,70.8,70.8\r S133.5,165.2,94.4,165.2z"})}),Object(s.jsxs)("g",{id:"indicators",children:[Object(s.jsx)("path",{id:"indicator1",className:O.lit1?"lit":"unlit",d:"M38.2,40.7C25.4,54.1,17.3,72.3,16.6,92.2H6.5c0.6-22.8,10-43.7,24.8-58.9L38.2,40.7z"}),Object(s.jsx)("path",{id:"indicator2",className:O.lit2?"lit":"unlit",d:"M92,16.8c-18.4,0.5-36.1,7.5-50.5,21l-7.2-7.2C50.7,15.2,71,7.2,91.9,6.7L92,16.8z"}),Object(s.jsx)("path",{id:"indicator3",className:O.lit3?"lit":"unlit",d:"M148.1,37.9c-13.4-12.7-32.6-20.7-51.6-21.3V6.5c22,0.6,43.6,9.7,58.8,24.2L148.1,37.9z"}),Object(s.jsx)("path",{id:"indicator4",className:O.lit4?"lit":"unlit",d:"M172.2,92.1c-0.5-18.4-8.4-37.8-21.4-51.7l7.1-7.2c15.1,16,23.9,37.9,24.5,58.8L172.2,92.1z"}),Object(s.jsx)("path",{id:"indicator5",className:O.lit5?"lit":"unlit",d:"M158.6,154.5c14.5-15.4,23.3-35.6,23.7-58.3l-10.2-0.1c-0.4,19.8-8.3,37.9-20.9,51.4L158.6,154.5z"}),Object(s.jsx)("path",{id:"indicator6",className:O.lit6?"lit":"unlit",d:"M96.2,171.4c18-0.5,37.9-7.5,52.4-21.5l7.1,7.3c-16.4,15.9-38.3,23.5-59.3,24.1L96.2,171.4z"}),Object(s.jsx)("path",{id:"indicator7",className:O.lit7?"lit":"unlit",d:"M40.9,149.8c13.6,12.9,30.9,21.1,51.1,21.6l0.1,9.9c-22.9-0.4-42.6-9.3-58-24L40.9,149.8z"}),Object(s.jsx)("path",{id:"indicator8",className:O.lit8?"lit":"unlit",d:"M16.6,96.2c0.4,20,8.4,37.8,21.1,51.4l-7.3,7.1C15.9,139.3,6.9,119,6.5,96.2L16.6,96.2z"})]}),Object(s.jsxs)("g",{id:"indicators_broken",children:[Object(s.jsxs)("g",{id:"broken1",className:o.bool1?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M38.2,40.7l-6.9-7.5c-5.2,5.4-9.8,11.5-13.5,18.1c-4.1,0.8-7.1,4.4-7.1,8.7c0,1.6,0.4,3,1.1,4.3\r c-3.1,8.6-5,17.9-5.3,27.6l10.2-0.1C17,83.8,18.5,76,21,68.8c4.2-0.7,7.4-4.3,7.4-8.7c0-1.7-0.5-3.2-1.3-4.6\r C30.2,50.1,34,45.2,38.2,40.7z"}),Object(s.jsx)("polygon",{className:"st12",points:"23.6,62.3 20.8,59.5 23.5,56.7 22.7,55.9 19.9,58.7 17.1,55.9 16.3,56.7 19.1,59.5 16.3,62.3 \r 17.1,63.2 19.9,60.3 22.8,63.1 \t\t"})]}),Object(s.jsxs)("g",{id:"broken2",className:o.bool2?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M92.5,6.5c-8.8,0.2-17.3,1.7-25.3,4.3c-1.4-0.9-3.1-1.5-5-1.5c-4.5,0-8.2,3.2-9,7.4\r c-6.9,3.7-13.3,8.2-18.9,13.5l7,7.4c4.8-4.4,10.1-8.3,15.8-11.4c1.4,1,3.2,1.5,5,1.5c4.5,0,8.2-3.2,9-7.5\r c6.7-2.1,13.8-3.3,21.2-3.5L92.5,6.5z"}),Object(s.jsx)("polygon",{className:"st12",points:"65.6,21.3 62.8,18.5 65.5,15.7 64.7,14.9 61.9,17.7 59.1,14.9 58.3,15.7 61.1,18.5 58.3,21.3 \r 59.1,22.2 61.9,19.3 64.8,22.1 \t\t"})]}),Object(s.jsxs)("g",{id:"broken3",className:o.bool3?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M155,30.6c-6.4-6.1-13.4-11-20.9-14.8c-0.4-1.7-1.2-3.3-2.5-4.6c-3.1-3.1-8-3.5-11.6-1.1\r c-7.5-2.3-15.2-3.6-22.9-3.8l-0.2,10.2c6.5,0.2,13,1.3,19.3,3.1c0.3,1.7,1.2,3.3,2.5,4.6c3.2,3.2,8.1,3.5,11.7,1.1\r c6.2,3.3,12.1,7.4,17.4,12.5L155,30.6z"}),Object(s.jsx)("polygon",{className:"st12",points:"122,21.2 121.2,20.3 124,17.5 121.2,14.7 122,13.9 124.9,16.7 127.6,13.9 128.4,14.7 125.7,17.5 \r 128.5,20.3 127.7,21.1 124.9,18.3 \t\t"})]}),Object(s.jsxs)("g",{id:"broken4",className:o.bool4?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M182.4,91.7c-0.2-8.8-1.7-17.3-4.3-25.3c0.9-1.4,1.5-3.1,1.5-5c0-4.5-3.2-8.2-7.4-9\r c-3.7-6.9-8.2-13.3-13.5-18.9l-7.4,7c4.4,4.8,8.3,10.1,11.4,15.8c-1,1.4-1.5,3.2-1.5,5c0,4.5,3.2,8.2,7.5,9\r c2.1,6.7,3.3,13.8,3.5,21.2L182.4,91.7z"}),Object(s.jsx)("polygon",{className:"st12",points:"174,63.9 171.2,61.1 173.9,58.3 173.1,57.5 170.3,60.2 167.5,57.5 166.7,58.3 169.5,61.1 166.7,63.9 \r 167.5,64.8 170.3,61.9 173.2,64.7 \t\t"})]}),Object(s.jsxs)("g",{id:"broken5",className:o.bool5?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M158.2,154.1c6.1-6.4,11-13.4,14.8-20.9c1.7-0.4,3.3-1.2,4.6-2.5c3.1-3.1,3.5-8,1.1-11.6\r c2.3-7.5,3.6-15.4,3.8-23.1l-10.2,0c-0.2,6.5-1.3,13-3.1,19.3c-1.7,0.3-3.3,1.2-4.6,2.5c-3.2,3.2-3.5,8.1-1.1,11.7\r c-3.3,6.2-7.4,12.1-12.5,17.4L158.2,154.1z"}),Object(s.jsx)("polygon",{className:"st12",points:"175,126.8 172.2,124 174.9,121.2 174.1,120.4 171.3,123.2 168.5,120.4 167.7,121.2 170.5,124 \r 167.7,126.9 168.5,127.7 171.4,124.8 174.2,127.7 \t\t"})]}),Object(s.jsxs)("g",{id:"broken6",className:o.bool6?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M96.5,181.9c8.8-0.3,18.1-2,26.1-4.7c1.4,0.9,3.1,1.4,5,1.4c4.5,0,8.1-3.2,8.9-7.5\r c6.9-3.7,13.2-8.3,18.8-13.7l-7.1-7.3c-4.7,4.5-10,8.4-15.8,11.6c-1.5-0.9-3.2-1.5-5.1-1.5c-4.5,0-8.2,3.3-8.9,7.6\r c-6.7,2.1-14.8,3.3-22.1,3.6L96.5,181.9z"}),Object(s.jsx)("polygon",{className:"st12",points:"131.5,172.3 128.6,169.5 131.3,166.7 130.5,165.9 127.8,168.6 124.9,165.9 124.1,166.7 127,169.5 \r 124.2,172.4 125,173.2 127.8,170.3 130.7,173.1 \t\t"})]}),Object(s.jsxs)("g",{id:"broken7",className:o.bool7?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M33.7,157.7c6.4,6,13.5,10.9,21,14.7c0.4,1.7,1.2,3.3,2.5,4.5c3.2,3.1,8,3.5,11.6,1c7.5,2.2,15.2,3.4,23,3.6\r l0.2-10.2c-6.5-0.2-13-1.2-19.3-3c-0.4-1.7-1.2-3.3-2.5-4.6c-3.2-3.1-8.1-3.5-11.7-1c-6.2-3.2-12.2-7.3-17.5-12.4L33.7,157.7z"}),Object(s.jsx)("polygon",{className:"st12",points:"67.6,173.3 64.7,170.5 67.4,167.7 66.6,166.9 63.9,169.7 61,166.9 60.2,167.7 63.1,170.5 60.3,173.4 \r 61.1,174.2 63.9,171.3 66.8,174.1 \t\t"})]}),Object(s.jsxs)("g",{id:"broken8",className:o.bool8?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M6.1,96.5c0.3,8.8,1.8,17.3,4.5,25.2c-0.9,1.4-1.4,3.1-1.4,5c0,4.5,3.2,8.1,7.5,8.9\r c3.7,6.9,8.3,13.2,13.7,18.8l7.3-7.1c-4.5-4.7-8.4-10-11.6-15.8c0.9-1.5,1.5-3.2,1.5-5.1c0-4.5-3.3-8.2-7.6-8.9\r c-2.1-6.7-3.4-13.8-3.7-21.1L6.1,96.5z"}),Object(s.jsx)("polygon",{className:"st12",points:"22.1,129.7 19.2,126.9 21.9,124.1 21.1,123.3 18.4,126.1 15.5,123.3 14.7,124.2 17.6,126.9 \r 14.8,129.8 15.6,130.6 18.4,127.8 21.3,130.6 \t\t"})]})]}),Object(s.jsx)("g",{id:"icons",className:"icons",children:Object(s.jsxs)("g",{transform:"rotate(-45 -51.433 169.347)",children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"visit-arrow-b_12_",d:"M105.8,252.8c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-4.5,0-8.3-2.9-9.5-7l2.1,0\r c1.2,2.9,4.1,5,7.4,5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-3.4,0-6.2,2.1-7.4,5l-2.1,0C97.5,255.7,101.3,252.8,105.8,252.8z M110.8,262.8\r l-9,5l2-3l-12-1c-0.6,0-1-0.4-1-1s0.4-1,1-1l12-1l-2-3L110.8,262.8z"})}),Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"visit-arrow-b_1_",className:"st12",d:"M105.8,252.8c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-4.5,0-8.3-2.9-9.5-7l2.1,0\r c1.2,2.9,4.1,5,7.4,5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-3.4,0-6.2,2.1-7.4,5l-2.1,0C97.5,255.7,101.3,252.8,105.8,252.8z M110.8,262.8\r l-9,5l2-3l-12-1c-0.6,0-1-0.4-1-1s0.4-1,1-1l12-1l-2-3L110.8,262.8z"})})]})}),Object(s.jsx)("g",{id:"icons",children:Object(s.jsxs)("g",{transform:"translate(-24 -92)",children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"magnifier-b_12_",d:"M92.5,221.2l3.4,2.7l-2.8,2.8l-2.8-3.3L92.5,221.2z M82.9,207.8c3.9,0,7,3.1,7,6.9\r c0,1.3-0.4,2.6-1,3.6L91,220l-1.9,1.9l-1.7-2c-1.2,1-2.8,1.6-4.5,1.6c-3.9,0-7-3.1-7-6.9S79.1,207.8,82.9,207.8z M82.9,209.7\r c-2.8,0-5,2.2-5,4.9s2.2,4.9,5,4.9s5-2.2,5-4.9S85.7,209.7,82.9,209.7z"})}),Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"magnifier-b_1_",className:"st12",d:"M92.5,221.2l3.4,2.7l-2.8,2.8l-2.8-3.3L92.5,221.2z M82.9,207.8c3.9,0,7,3.1,7,6.9\r c0,1.3-0.4,2.6-1,3.6L91,220l-1.9,1.9l-1.7-2c-1.2,1-2.8,1.6-4.5,1.6c-3.9,0-7-3.1-7-6.9S79.1,207.8,82.9,207.8z M82.9,209.7\r c-2.8,0-5,2.2-5,4.9s2.2,4.9,5,4.9s5-2.2,5-4.9S85.7,209.7,82.9,209.7z"})})]})})]})})},O=function(){var c=Object(l.useState)({bool1:!1,bool2:!1,bool3:!1,bool4:!1,bool5:!1,bool6:!1,bool7:!1,bool8:!1}),e=Object(r.a)(c,2),t=e[0],i=e[1],n=Object(l.useState)({lit1:!1,lit2:!1,lit3:!1,lit4:!1,lit5:!1,lit6:!1,lit7:!1,lit8:!1}),a=Object(r.a)(n,2),o=a[0],j=a[1],b=function(c){var e=c.slice(3,4);if(!1===o[c])j(Object(h.a)(Object(h.a)({},o),{},Object(d.a)({},c,!0)));else if(!0===o[c]){var s="bool"+e;j(Object(h.a)(Object(h.a)({},o),{},Object(d.a)({},c,!1))),i(Object(h.a)(Object(h.a)({},t),{},Object(d.a)({},s,!0)))}},x=function(c){i(Object(h.a)(Object(h.a)({},t),{},Object(d.a)({},c,!1)))};return Object(s.jsx)("div",{children:Object(s.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 188.8 188.8",style:{height:"300px"},children:[Object(s.jsxs)("g",{id:"centro",children:[Object(s.jsx)("g",{children:Object(s.jsx)("a",{href:"#",onClick:function(c){c.preventDefault(),alert("Click on the Dynamic Indicators to Make them Lit, Broken or Unlit")},children:Object(s.jsx)("path",{className:"inner icons",d:"M160.1,92c-1.3-35.1-30.2-63.3-65.7-63.3c-35.6,0-64.5,28.2-65.7,63.5l42.2,0c1.1-12,11.2-21.3,23.5-21.3c12.2,0,22.2,9.2,23.4,21L160.1,92z"})})}),Object(s.jsx)("a",{href:"#",onClick:function(c){c.preventDefault(),alert("You Clicked on the Connect Function")},children:Object(s.jsx)("path",{className:"inner icons",d:"M95.9,117.8c11.5-0.9,20.6-10.2,21.3-21.8l42.5,0c-0.8,34.8-29,63.3-64,64.1L95.9,117.8z"})}),Object(s.jsx)("a",{href:"#",onClick:function(c){c.preventDefault(),alert("You Clicked on the Search Function")},children:Object(s.jsx)("path",{className:"inner icons",d:"M91.9,160.1c-34.7-1.1-62.5-29.4-63.5-63.8L70.9,96c0.7,11.5,9.7,20.8,21.2,21.7L91.9,160.1z"})})]}),Object(s.jsxs)("g",{children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{className:"st13",id:"CURVEDTEXT",d:"M51.9,91.5C53.3,69,71.8,54,94.6,54c22.8,0,41.3,14.7,42.7,37.1"})}),Object(s.jsx)("text",{style:{cursor:"pointer"},text:!0,x:"0",y:"50",fontFamily:"helvetica",fontSize:"16",fill:"ghostwhite",padding:"3px",children:Object(s.jsx)("textPath",{alignmentBaseline:"top",href:"#CURVEDTEXT",startOffset:"50%",textAnchor:"middle",children:"Clickable Circle"})})]}),Object(s.jsx)("g",{id:"outer_circle",children:Object(s.jsx)("path",{className:"outer",d:"M94.4,0.7c-51.8,0-93.8,42-93.8,93.8c0,51.8,42,93.8,93.8,93.8s93.8-42,93.8-93.8\r C188.2,42.6,146.2,0.7,94.4,0.7z M94.4,165.2c-39.1,0-70.8-31.7-70.8-70.8s31.7-70.8,70.8-70.8s70.8,31.7,70.8,70.8\r S133.5,165.2,94.4,165.2z"})}),Object(s.jsxs)("g",{id:"indicators",children:[Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit1")},children:Object(s.jsx)("path",{id:"indicator1",className:o.lit1?"lit":"unlit",d:"M38.2,40.7C25.4,54.1,17.3,72.3,16.6,92.2H6.5c0.6-22.8,10-43.7,24.8-58.9L38.2,40.7z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit2")},children:Object(s.jsx)("path",{id:"indicator2",className:o.lit2?"lit":"unlit",d:"M92,16.8c-18.4,0.5-36.1,7.5-50.5,21l-7.2-7.2C50.7,15.2,71,7.2,91.9,6.7L92,16.8z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit3")},children:Object(s.jsx)("path",{id:"indicator3",className:o.lit3?"lit":"unlit",d:"M148.1,37.9c-13.4-12.7-32.6-20.7-51.6-21.3V6.5c22,0.6,43.6,9.7,58.8,24.2L148.1,37.9z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit4")},children:Object(s.jsx)("path",{id:"indicator4",className:o.lit4?"lit":"unlit",d:"M172.2,92.1c-0.5-18.4-8.4-37.8-21.4-51.7l7.1-7.2c15.1,16,23.9,37.9,24.5,58.8L172.2,92.1z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit5")},children:Object(s.jsx)("path",{id:"indicator5",className:o.lit5?"lit":"unlit",d:"M158.6,154.5c14.5-15.4,23.3-35.6,23.7-58.3l-10.2-0.1c-0.4,19.8-8.3,37.9-20.9,51.4L158.6,154.5z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit6")},children:Object(s.jsx)("path",{id:"indicator6",className:o.lit6?"lit":"unlit",d:"M96.2,171.4c18-0.5,37.9-7.5,52.4-21.5l7.1,7.3c-16.4,15.9-38.3,23.5-59.3,24.1L96.2,171.4z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit7")},children:Object(s.jsx)("path",{id:"indicator7",className:o.lit7?"lit":"unlit",d:"M40.9,149.8c13.6,12.9,30.9,21.1,51.1,21.6l0.1,9.9c-22.9-0.4-42.6-9.3-58-24L40.9,149.8z"})}),Object(s.jsx)("a",{href:"#",onClick:function(){return b("lit8")},children:Object(s.jsx)("path",{id:"indicator8",className:o.lit8?"lit":"unlit",d:"M16.6,96.2c0.4,20,8.4,37.8,21.1,51.4l-7.3,7.1C15.9,139.3,6.9,119,6.5,96.2L16.6,96.2z"})})]}),Object(s.jsxs)("g",{id:"indicators_broken",children:[Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool1")},children:Object(s.jsxs)("g",{id:"broken1",className:t.bool1?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M38.2,40.7l-6.9-7.5c-5.2,5.4-9.8,11.5-13.5,18.1c-4.1,0.8-7.1,4.4-7.1,8.7c0,1.6,0.4,3,1.1,4.3\r c-3.1,8.6-5,17.9-5.3,27.6l10.2-0.1C17,83.8,18.5,76,21,68.8c4.2-0.7,7.4-4.3,7.4-8.7c0-1.7-0.5-3.2-1.3-4.6\r C30.2,50.1,34,45.2,38.2,40.7z"}),Object(s.jsx)("polygon",{className:"st12",points:"23.6,62.3 20.8,59.5 23.5,56.7 22.7,55.9 19.9,58.7 17.1,55.9 16.3,56.7 19.1,59.5 16.3,62.3 \r 17.1,63.2 19.9,60.3 22.8,63.1 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool2")},children:Object(s.jsxs)("g",{id:"broken2",className:t.bool2?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M92.5,6.5c-8.8,0.2-17.3,1.7-25.3,4.3c-1.4-0.9-3.1-1.5-5-1.5c-4.5,0-8.2,3.2-9,7.4\r c-6.9,3.7-13.3,8.2-18.9,13.5l7,7.4c4.8-4.4,10.1-8.3,15.8-11.4c1.4,1,3.2,1.5,5,1.5c4.5,0,8.2-3.2,9-7.5\r c6.7-2.1,13.8-3.3,21.2-3.5L92.5,6.5z"}),Object(s.jsx)("polygon",{className:"st12",points:"65.6,21.3 62.8,18.5 65.5,15.7 64.7,14.9 61.9,17.7 59.1,14.9 58.3,15.7 61.1,18.5 58.3,21.3 \r 59.1,22.2 61.9,19.3 64.8,22.1 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool3")},children:Object(s.jsxs)("g",{id:"broken3",className:t.bool3?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M155,30.6c-6.4-6.1-13.4-11-20.9-14.8c-0.4-1.7-1.2-3.3-2.5-4.6c-3.1-3.1-8-3.5-11.6-1.1\r c-7.5-2.3-15.2-3.6-22.9-3.8l-0.2,10.2c6.5,0.2,13,1.3,19.3,3.1c0.3,1.7,1.2,3.3,2.5,4.6c3.2,3.2,8.1,3.5,11.7,1.1\r c6.2,3.3,12.1,7.4,17.4,12.5L155,30.6z"}),Object(s.jsx)("polygon",{className:"st12",points:"122,21.2 121.2,20.3 124,17.5 121.2,14.7 122,13.9 124.9,16.7 127.6,13.9 128.4,14.7 125.7,17.5 \r 128.5,20.3 127.7,21.1 124.9,18.3 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool4")},children:Object(s.jsxs)("g",{id:"broken4",className:t.bool4?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M182.4,91.7c-0.2-8.8-1.7-17.3-4.3-25.3c0.9-1.4,1.5-3.1,1.5-5c0-4.5-3.2-8.2-7.4-9\r c-3.7-6.9-8.2-13.3-13.5-18.9l-7.4,7c4.4,4.8,8.3,10.1,11.4,15.8c-1,1.4-1.5,3.2-1.5,5c0,4.5,3.2,8.2,7.5,9\r c2.1,6.7,3.3,13.8,3.5,21.2L182.4,91.7z"}),Object(s.jsx)("polygon",{className:"st12",points:"174,63.9 171.2,61.1 173.9,58.3 173.1,57.5 170.3,60.2 167.5,57.5 166.7,58.3 169.5,61.1 166.7,63.9 \r 167.5,64.8 170.3,61.9 173.2,64.7 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool5")},children:Object(s.jsxs)("g",{id:"broken5",className:t.bool5?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M158.2,154.1c6.1-6.4,11-13.4,14.8-20.9c1.7-0.4,3.3-1.2,4.6-2.5c3.1-3.1,3.5-8,1.1-11.6\r c2.3-7.5,3.6-15.4,3.8-23.1l-10.2,0c-0.2,6.5-1.3,13-3.1,19.3c-1.7,0.3-3.3,1.2-4.6,2.5c-3.2,3.2-3.5,8.1-1.1,11.7\r c-3.3,6.2-7.4,12.1-12.5,17.4L158.2,154.1z"}),Object(s.jsx)("polygon",{className:"st12",points:"175,126.8 172.2,124 174.9,121.2 174.1,120.4 171.3,123.2 168.5,120.4 167.7,121.2 170.5,124 \r 167.7,126.9 168.5,127.7 171.4,124.8 174.2,127.7 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool6")},children:Object(s.jsxs)("g",{id:"broken6",className:t.bool6?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M96.5,181.9c8.8-0.3,18.1-2,26.1-4.7c1.4,0.9,3.1,1.4,5,1.4c4.5,0,8.1-3.2,8.9-7.5\r c6.9-3.7,13.2-8.3,18.8-13.7l-7.1-7.3c-4.7,4.5-10,8.4-15.8,11.6c-1.5-0.9-3.2-1.5-5.1-1.5c-4.5,0-8.2,3.3-8.9,7.6\r c-6.7,2.1-14.8,3.3-22.1,3.6L96.5,181.9z"}),Object(s.jsx)("polygon",{className:"st12",points:"131.5,172.3 128.6,169.5 131.3,166.7 130.5,165.9 127.8,168.6 124.9,165.9 124.1,166.7 127,169.5 \r 124.2,172.4 125,173.2 127.8,170.3 130.7,173.1 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool7")},children:Object(s.jsxs)("g",{id:"broken7",className:t.bool7?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M33.7,157.7c6.4,6,13.5,10.9,21,14.7c0.4,1.7,1.2,3.3,2.5,4.5c3.2,3.1,8,3.5,11.6,1c7.5,2.2,15.2,3.4,23,3.6\r l0.2-10.2c-6.5-0.2-13-1.2-19.3-3c-0.4-1.7-1.2-3.3-2.5-4.6c-3.2-3.1-8.1-3.5-11.7-1c-6.2-3.2-12.2-7.3-17.5-12.4L33.7,157.7z"}),Object(s.jsx)("polygon",{className:"st12",points:"67.6,173.3 64.7,170.5 67.4,167.7 66.6,166.9 63.9,169.7 61,166.9 60.2,167.7 63.1,170.5 60.3,173.4 \r 61.1,174.2 63.9,171.3 66.8,174.1 \t\t"})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return x("bool8")},children:Object(s.jsxs)("g",{id:"broken8",className:t.bool8?"on":"off",children:[Object(s.jsx)("path",{className:"st8",d:"M6.1,96.5c0.3,8.8,1.8,17.3,4.5,25.2c-0.9,1.4-1.4,3.1-1.4,5c0,4.5,3.2,8.1,7.5,8.9\r c3.7,6.9,8.3,13.2,13.7,18.8l7.3-7.1c-4.5-4.7-8.4-10-11.6-15.8c0.9-1.5,1.5-3.2,1.5-5.1c0-4.5-3.3-8.2-7.6-8.9\r c-2.1-6.7-3.4-13.8-3.7-21.1L6.1,96.5z"}),Object(s.jsx)("polygon",{className:"st12",points:"22.1,129.7 19.2,126.9 21.9,124.1 21.1,123.3 18.4,126.1 15.5,123.3 14.7,124.2 17.6,126.9 \r 14.8,129.8 15.6,130.6 18.4,127.8 21.3,130.6 \t\t"})]})})]}),Object(s.jsx)("g",{id:"icons",className:"icons",children:Object(s.jsxs)("g",{transform:"rotate(-45 -51.433 169.347)",children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"visit-arrow-b_12_",d:"M105.8,252.8c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-4.5,0-8.3-2.9-9.5-7l2.1,0\r c1.2,2.9,4.1,5,7.4,5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-3.4,0-6.2,2.1-7.4,5l-2.1,0C97.5,255.7,101.3,252.8,105.8,252.8z M110.8,262.8\r l-9,5l2-3l-12-1c-0.6,0-1-0.4-1-1s0.4-1,1-1l12-1l-2-3L110.8,262.8z"})}),Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"visit-arrow-b_1_",className:"st12",d:"M105.8,252.8c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-4.5,0-8.3-2.9-9.5-7l2.1,0\r c1.2,2.9,4.1,5,7.4,5c4.4,0,8-3.6,8-8s-3.6-8-8-8c-3.4,0-6.2,2.1-7.4,5l-2.1,0C97.5,255.7,101.3,252.8,105.8,252.8z M110.8,262.8\r l-9,5l2-3l-12-1c-0.6,0-1-0.4-1-1s0.4-1,1-1l12-1l-2-3L110.8,262.8z"})})]})}),Object(s.jsx)("g",{id:"icons",children:Object(s.jsxs)("g",{transform:"translate(-24 -92)",children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"magnifier-b_12_",d:"M92.5,221.2l3.4,2.7l-2.8,2.8l-2.8-3.3L92.5,221.2z M82.9,207.8c3.9,0,7,3.1,7,6.9\r c0,1.3-0.4,2.6-1,3.6L91,220l-1.9,1.9l-1.7-2c-1.2,1-2.8,1.6-4.5,1.6c-3.9,0-7-3.1-7-6.9S79.1,207.8,82.9,207.8z M82.9,209.7\r c-2.8,0-5,2.2-5,4.9s2.2,4.9,5,4.9s5-2.2,5-4.9S85.7,209.7,82.9,209.7z"})}),Object(s.jsx)("g",{children:Object(s.jsx)("path",{id:"magnifier-b_1_",className:"st12",d:"M92.5,221.2l3.4,2.7l-2.8,2.8l-2.8-3.3L92.5,221.2z M82.9,207.8c3.9,0,7,3.1,7,6.9\r c0,1.3-0.4,2.6-1,3.6L91,220l-1.9,1.9l-1.7-2c-1.2,1-2.8,1.6-4.5,1.6c-3.9,0-7-3.1-7-6.9S79.1,207.8,82.9,207.8z M82.9,209.7\r c-2.8,0-5,2.2-5,4.9s2.2,4.9,5,4.9s5-2.2,5-4.9S85.7,209.7,82.9,209.7z"})})]})})]})})};var f=function(){var c=Object(l.useState)("Circle Name"),e=Object(r.a)(c,2),t=e[0],i=e[1],n=Object(l.useState)(!1),a=Object(r.a)(n,2),o=a[0],j=a[1],d=Object(l.useState)(0),h=Object(r.a)(d,2),f=h[0],m=h[1],p=Object(l.useState)(0),u=Object(r.a)(p,2),N=u[0],g=u[1];return Object(s.jsx)("div",{className:"container-fluid d-flex p-0 app",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"d-flex col-6-md justify-content-center pr-5",children:Object(s.jsx)(O,{})}),Object(s.jsxs)("div",{className:"d-flex col-6-md justify-content-center pr-5",children:[Object(s.jsx)("div",{className:"input pt-1",children:Object(s.jsx)(b,{text:t,handleEdit:function(c){c.preventDefault(),"name"===c.target.name&&i(c.target.value),t.length>=15&&j(!0)},disabled:o,handleReset:function(c){c.preventDefault(),i("Circle Name"),m(0),g(0),j(!1)},brokenCounter:f,handleCounter:function(c){c.preventDefault(),"increaseBroken"===c.target.name?f<8&&m(f+1):"decreaseBroken"===c.target.name?f>0&&m(f-1):"increaseLit"===c.target.name?N<8&&g(N+1):"decreaseLit"===c.target.name&&N>0&&g(N-1)},litCounter:N})}),Object(s.jsx)("div",{className:"d-flex justify-content-start pl-5",style:{zIndex:"5"},children:Object(s.jsx)(x,{text:t,brokenCounter:f,litCounter:N})})]})]})})};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7ada3c96.chunk.js.map