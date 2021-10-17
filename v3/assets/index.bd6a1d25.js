import{C as s}from"./index.e5928329.js";import{C}from"./index.f80bd2c3.js";import{u as g}from"./use-translate.dc7c72f2.js";import{r as k,o as D,c as y,w as p,e as n,B as e,z as j,E as w,a as R,F as S}from"./vue-libs.84090ae0.js";import"./with-install.eb95b9ca.js";import"./use-route.c396a838.js";import"./index.c4602e68.js";import"./use-refs.af7a4653.js";import"./use-expose.5b468dfd.js";import"./index.87835e2a.js";import"./interceptor.388efbea.js";import"./use-touch.89cea093.js";import"./index.5c401e78.js";import"./utils.39620306.js";import"./index.1b2e67e6.js";import"./use-lazy-render.98b46970.js";import"./on-popup-reopen.6401152e.js";import"./index.78843199.js";import"./index.2c966ebf.js";import"./constant.4d85ecb9.js";import"./index.5c5fe2f2.js";import"./function-call.aae93e7f.js";import"./mount-component.21d1f7e5.js";import"./utils.72cea5c2.js";import"./Picker.6189bd10.js";import"./deep-clone.a3611cb8.js";import"./useParent.b8372ce7.js";import"./useChildren.adf766a6.js";import"./use-height.795d3b82.js";const T={setup(v){const l=new Date(2012,0,10),t=new Date(2012,2,20),f=g({"zh-CN":{calendar:"\u65E5\u5386",tiledDisplay:"\u5E73\u94FA\u5C55\u793A"},"en-US":{calendar:"Calendar",tiledDisplay:"Tiled display"}});return(x,a)=>{const c=k("demo-block");return D(),y(c,{card:"",title:e(f)("tiledDisplay")},{default:p(()=>[n(e(C),{title:e(f)("calendar"),poppable:!1,"show-confirm":!1,"min-date":e(l),"max-date":e(t),"default-date":e(l),style:{height:"500px"}},null,8,["title","min-date","max-date","default-date"])]),_:1},8,["title"])}}},le=j({setup(v){const l=g({"zh-CN":{in:"\u5165\u5E97",out:"\u79BB\u5E97",today:"\u4ECA\u5929",laborDay:"\u52B3\u52A8\u8282",youthDay:"\u9752\u5E74\u8282",maxRange:"\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",selectCount:o=>`\u9009\u62E9\u4E86 ${o} \u4E2A\u65E5\u671F`,selectSingle:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",selectMultiple:"\u9009\u62E9\u591A\u4E2A\u65E5\u671F",selectRange:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",quickSelect:"\u5FEB\u6377\u9009\u62E9",confirmText:"\u5B8C\u6210",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customRange:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",customConfirm:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",customDayText:"\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",customPosition:"\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E",customCalendar:"\u81EA\u5B9A\u4E49\u65E5\u5386",confirmDisabledText:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",firstDayOfWeek:"\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:o=>`${o} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time"}}),t=w({date:{maxRange:[],selectSingle:null,selectRange:[],selectMultiple:[],quickSelect1:null,quickSelect2:[],customColor:[],customConfirm:[],customRange:null,customDayText:[],customPosition:null},type:"single",round:!0,color:void 0,minDate:void 0,maxDate:void 0,maxRange:void 0,position:void 0,formatter:void 0,showConfirm:!1,showCalendar:!1,confirmText:void 0,confirmDisabledText:void 0,firstDayOfWeek:0}),f=()=>{t.round=!0,t.color=void 0,t.minDate=void 0,t.maxDate=void 0,t.maxRange=void 0,t.position=void 0,t.formatter=void 0,t.showConfirm=!0,t.confirmText=void 0,t.confirmDisabledText=void 0,t.firstDayOfWeek=0},x=o=>{if(!o.date)return o;const i=o.date.getMonth()+1,r=o.date.getDate();return i===5&&(r===1?o.topInfo=l("laborDay"):r===4?o.topInfo=l("youthDay"):r===11&&(o.text=l("today"))),o.type==="start"?o.bottomInfo=l("in"):o.type==="end"&&(o.bottomInfo=l("out")),o},a=(o,i)=>{switch(f(),t.id=i,t.type=o,t.showCalendar=!0,i){case"quickSelect1":case"quickSelect2":t.showConfirm=!1;break;case"customColor":t.color="#1989fa";break;case"customConfirm":t.confirmText=l("confirmText"),t.confirmDisabledText=l("confirmDisabledText");break;case"customRange":t.minDate=new Date(2010,0,1),t.maxDate=new Date(2010,0,31);break;case"customDayText":t.minDate=new Date(2010,4,1),t.maxDate=new Date(2010,4,31),t.formatter=x;break;case"customPosition":t.round=!1,t.position="right";break;case"maxRange":t.maxRange=3;break;case"firstDayOfWeek":t.firstDayOfWeek=1;break}},c=o=>{if(o)return`${o.getMonth()+1}/${o.getDate()}`},d=o=>{if(o)return`${o.getFullYear()}/${c(o)}`},E=o=>{if(o.length)return l("selectCount",o.length)},m=o=>{if(o.length){const[i,r]=o;return`${c(i)} - ${c(r)}`}},b=o=>{t.showCalendar=!1,t.date[t.id]=o};return(o,i)=>{const r=k("demo-block");return D(),R(S,null,[n(r,{card:"",title:e(l)("basicUsage")},{default:p(()=>[n(e(s),{"is-link":"",title:e(l)("selectSingle"),value:d(e(t).date.selectSingle),onClick:i[0]||(i[0]=u=>a("single","selectSingle"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("selectMultiple"),value:E(e(t).date.selectMultiple),onClick:i[1]||(i[1]=u=>a("multiple","selectMultiple"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("selectRange"),value:m(e(t).date.selectRange),onClick:i[2]||(i[2]=u=>a("range","selectRange"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:e(l)("quickSelect")},{default:p(()=>[n(e(s),{"is-link":"",title:e(l)("selectSingle"),value:d(e(t).date.quickSelect1),onClick:i[3]||(i[3]=u=>a("single","quickSelect1"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("selectRange"),value:m(e(t).date.quickSelect2),onClick:i[4]||(i[4]=u=>a("range","quickSelect2"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:e(l)("customCalendar")},{default:p(()=>[n(e(s),{"is-link":"",title:e(l)("customColor"),value:m(e(t).date.customColor),onClick:i[5]||(i[5]=u=>a("range","customColor"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("customRange"),value:d(e(t).date.customRange),onClick:i[6]||(i[6]=u=>a("single","customRange"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("customConfirm"),value:m(e(t).date.customConfirm),onClick:i[7]||(i[7]=u=>a("range","customConfirm"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("customDayText"),value:m(e(t).date.customDayText),onClick:i[8]||(i[8]=u=>a("range","customDayText"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("customPosition"),value:d(e(t).date.customPosition),onClick:i[9]||(i[9]=u=>a("single","customPosition"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("maxRange"),value:m(e(t).date.maxRange),onClick:i[10]||(i[10]=u=>a("range","maxRange"))},null,8,["title","value"]),n(e(s),{"is-link":"",title:e(l)("firstDayOfWeek"),onClick:i[11]||(i[11]=u=>a("single","firstDayOfWeek"))},null,8,["title"])]),_:1},8,["title"]),n(T),n(e(C),{show:e(t).showCalendar,"onUpdate:show":i[12]||(i[12]=u=>e(t).showCalendar=u),type:e(t).type,color:e(t).color,round:e(t).round,position:e(t).position,"min-date":e(t).minDate,"max-date":e(t).maxDate,"max-range":e(t).maxRange,formatter:e(t).formatter,"show-confirm":e(t).showConfirm,"confirm-text":e(t).confirmText,"first-day-of-week":e(t).firstDayOfWeek,"confirm-disabled-text":e(t).confirmDisabledText,onConfirm:b},null,8,["show","type","color","round","position","min-date","max-date","max-range","formatter","show-confirm","confirm-text","first-day-of-week","confirm-disabled-text"])],64)}}});export{le as default};