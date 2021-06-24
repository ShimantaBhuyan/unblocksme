(this.webpackJsonpunblocksme=this.webpackJsonpunblocksme||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s,o=n(0),a=n.n(o),c=n(10),r=n.n(c),i=(n(21),n(2)),l=n(11),u=(n.p,n(22),n(13)),d=n(3),p=n.n(d),h=n(7),j=(s="unblocksMeSpreadsheetId",document.cookie.split("; ").find((function(e){return e.startsWith("".concat(s,"="))})).split("=")[1]);j&&console.log("Retrieved spreadsheet: ",j);var g,b={startRow:0,startColumn:0,rowData:[{values:[{userEnteredValue:{stringValue:"TaskId"}},{userEnteredValue:{stringValue:"Description"}},{userEnteredValue:{stringValue:"Date"}},{userEnteredValue:{stringValue:"Status"}}]}]},O={properties:{title:"UnblocksMe"},sheets:[{properties:{title:"Work"},data:[b]},{properties:{title:"Personal"},data:[b]},{properties:{title:"Recurring"},data:[b]},{properties:{title:"Miscellaneous"},data:[b]}]},f={CLIENT_ID:"235806155860-4ac63tu7rnkg02pqv0j7ads9slf3jcmq.apps.googleusercontent.com",DISCOVERY_DOCS:["https://sheets.googleapis.com/$discovery/rest?version=v4"],SCOPES:"https://www.googleapis.com/auth/spreadsheets",loadGoogleScript:function(){!function(){var e="google-js",t=document.getElementsByTagName("script")[0];if(!document.getElementById(e)){var n=document.createElement("script");n.id=e,n.src="https://apis.google.com/js/platform.js",n.onload=window.onGoogleScriptLoad,t.parentNode.insertBefore(n,t)}}()},getSheetsData:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";t.client.sheets.spreadsheets.values.get({spreadsheetId:n||j||window.localStorage.getItem("spreadsheetId"),range:"".concat(e,"!A2:D1000")}).then((function(e){var t=e.result;if(console.log(t),t.values.length>0)for(var n=0;n<t.values.length;n++){var s=t.values[n];console.log(s)}else console.log("No data found.")}),(function(e){console.log("Error: "+e.result.error.message)}))},createSpreadsheet:function(){var e=Object(h.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.client.sheets.spreadsheets.create(O).then((function(e){console.log(e),200===e.status&&(console.log("Spreadsheet created!"),document.cookie="unblocksMeSpreadsheetId=".concat(e.result.spreadsheetId,"; SameSite=None; Secure"),window.localStorage.setItem("spreadsheetId",e.result.spreadsheetId))}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),appendToSpreadsheet:function(){var e=Object(h.a)(p.a.mark((function e(t,n,s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(s),n.client.sheets.spreadsheets.values.append({spreadsheetId:j,range:"".concat(s.category,"!A2:D1000"),valueInputOption:"USER_ENTERED",insertDataOption:"INSERT_ROWS",majorDimension:"ROWS",values:[[s.id,s.description,s.date,s.status]]}).then((function(e){console.log("Added values to spreadsheet: ",e)}),(function(e){console.error("Append error:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),SPREADSHEETID:j},v=n(12),S=n(29),m=n(1),x=function(e){return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n,s=new FormData(t.target),o={},a=Object(v.a)(s.entries());try{for(a.s();!(n=a.n()).done;){var c=Object(i.a)(n.value,2),r=c[0],l=c[1];o[r]=l}}catch(u){a.e(u)}finally{a.f()}console.log(o),f.appendToSpreadsheet(t,e.gapi,o)},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"taskId",children:"Task ID"}),Object(m.jsx)("input",{type:"text",id:"taskId",name:"id",value:Object(S.a)(),readOnly:"readonly"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"description",children:"Description"}),Object(m.jsx)("input",{type:"text",id:"description",name:"description"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"date",children:"Date"}),Object(m.jsx)("input",{type:"date",id:"date",name:"date"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"category",children:"Category"}),Object(m.jsxs)("select",{id:"category",name:"category",children:[Object(m.jsx)("option",{value:"default",children:"Select status"}),Object(m.jsx)("option",{value:"Work",children:"Work"}),Object(m.jsx)("option",{value:"Personal",children:"Personal"}),Object(m.jsx)("option",{value:"Recurring",children:"Recurring"}),Object(m.jsx)("option",{value:"Miscellaneous",children:"Miscellaneous"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"status",children:"Status"}),Object(m.jsxs)("select",{id:"status",name:"status",children:[Object(m.jsx)("option",{value:"default",children:"Select status"}),Object(m.jsx)("option",{value:"active",children:"Active"}),Object(m.jsx)("option",{value:"overdue",children:"Overdue"}),Object(m.jsx)("option",{value:"completed",children:"Completed"})]})]}),Object(m.jsx)("button",{children:"Submit"})]})},I=u.a.div(g||(g=Object(l.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  justify-contents: center;\n  align-items: center;\n"])));var E=function(){var e=Object(o.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)(!0),c=Object(i.a)(a,2),r=(c[0],c[1]),l=Object(o.useState)(!1),u=Object(i.a)(l,2),d=(u[0],u[1]),p=Object(o.useState)(""),h=Object(i.a)(p,2),j=h[0],g=h[1];function b(e){e?(r(!1),d(!0)):(r(!0),d(!1))}return Object(o.useEffect)((function(){window.onGoogleScriptLoad=function(){var e=window.gapi;s(e),e.load("client:auth2",(function(){e.client.init({clientId:f.CLIENT_ID,discoveryDocs:f.DISCOVERY_DOCS,scope:f.SCOPES}).then((function(){e.auth2.getAuthInstance().isSignedIn.listen(b),b(e.auth2.getAuthInstance().isSignedIn.get())}),(function(e){console.log(JSON.stringify(e,null,2))}))}))},f.loadGoogleScript(),g(f.SPREADSHEETID)}),[f]),Object(o.useEffect)((function(){console.log("SPREADSHEETID:",j)}),[j]),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(I,{children:[Object(m.jsx)("button",{name:"authButton",onClick:function(e){n.auth2.getAuthInstance().signIn()},children:"Authorize"}),Object(m.jsx)("button",{name:"signOutButton",onClick:function(e){n.auth2.getAuthInstance().signOut()},children:"Sign Out"}),Object(m.jsx)("button",{name:"createSheetButton",onClick:function(e){f.createSpreadsheet(e,n)},children:"Create Spreadsheet"}),Object(m.jsx)("button",{name:"getSheetDataButton",onClick:function(e){f.getSheetsData("Work",n)},children:"Get Spreadsheet"}),Object(m.jsx)(x,{sheetName:"Work",gapi:n})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),o(e),a(e),c(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),D()}},[[27,1,2]]]);
//# sourceMappingURL=main.ce16d988.chunk.js.map