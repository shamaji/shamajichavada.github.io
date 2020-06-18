function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{qc5V:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var o=s("tk/3"),a=s("tWZD"),r=s("fXoL"),i=s("hf/G"),n=function(){var t=function(){function t(e,s,o){_classCallCheck(this,t),this.http=e,this.methodUtils=s,this.variableService=o}return _createClass(t,[{key:"postMethod",value:function(t,e,s){var o=this;this.methodUtils.setLoadingStatus(!0),this.http.post(a.a.API_URL+t,e).subscribe((function(t){s(t),o.methodUtils.setLoadingStatus(!1)}),(function(t){s(t),o.methodUtils.setLoadingStatus(!1)}))}},{key:"getMethodAPI",value:function(t,e,s){var r=this;this.methodUtils.setLoadingStatus(!0);var i=new o.d;this.methodUtils.isNullUndefinedOrBlank(e)||Object.keys(e).forEach((function(t){t&&e[t]&&e.hasOwnProperty(t)&&!r.methodUtils.isEmptyObjectOrNullUndefiend(e[t])&&(i=i.append(t,e[t]))}));var n=new o.c;return this.http.get(t=a.a.API_URL+t,{params:i,headers:n}).subscribe((function(t){console.log("getMethodAPI response : ",t),t.status<200||t.status>=300?403===t.status&&r.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.message):s(t.data),r.methodUtils.setLoadingStatus(!1)}),(function(t){0===t.status||(403===t.status?r.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.error.message):s(t.error.data)),r.methodUtils.setLoadingStatus(!1)}))}},{key:"postMethodAPI",value:function(t,e,s,r){var i=this;this.methodUtils.setLoadingStatus(!0),this.customJsonInclude(s);var n=new o.c;return this.http.post(e=a.a.API_URL+e,s,{headers:n}).subscribe((function(e){e.status<200||e.status>=300?console.log("post else block",e.data):(t&&i.methodUtils.setConfigAndDisplayPopUpNotification("success","",e.message),201===e.status&&i.methodUtils.gotoBackPage(),r(e.data,!0)),i.methodUtils.setLoadingStatus(!1)}),(function(t){console.log("error here..",t.error),t.error&&t.error.data&&t.error.data.message?i.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.error.data.message):t.error&&t.error.data&&t.error.data.length>0&&("string"==typeof t.error.data?i.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.error.message):t.error.data.forEach((function(t){i.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.message)}))),i.methodUtils.setLoadingStatus(!1)}))}},{key:"patchMethodAPI",value:function(t,e,s,r,i){var n=this;this.methodUtils.setLoadingStatus(!0),this.customJsonInclude(s);var d=new o.c;return this.http.patch(e=a.a.API_URL+e+"/"+r,s,{headers:d}).subscribe((function(e){e.status<200||e.status>=300?console.log("post else block",e.data):(t&&n.methodUtils.setConfigAndDisplayPopUpNotification("success","",e.message),201===e.status&&n.methodUtils.gotoBackPage(),i(e.data,!0)),n.methodUtils.setLoadingStatus(!1)}),(function(t){console.log("error here..",t.error),t.error&&t.error.data&&t.error.data.message?n.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.error.data.message):t.error&&t.error.data&&t.error.data.length>0&&t.error.data.forEach((function(t){n.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.message)})),n.methodUtils.setLoadingStatus(!1)}))}},{key:"deleteMethodAPI",value:function(t,e,s,r){var i=this;this.methodUtils.setLoadingStatus(!0);var n=new o.c;return this.http.delete(e=a.a.API_URL+e+"/"+s,{headers:n}).subscribe((function(e){e.status<200||e.status>=300||(t&&i.methodUtils.setConfigAndDisplayPopUpNotification("success","",e.message),201===e.status&&i.methodUtils.gotoBackPage(),r(e.data,!0)),i.methodUtils.setLoadingStatus(!1)}),(function(t){console.log("patch error here..",t.error),t.error&&t.error.data&&t.error.data.message?i.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.error.data.message):t.error&&t.error.data&&t.error.data.length>0&&t.error.data.forEach((function(t){i.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.message)})),i.methodUtils.setLoadingStatus(!1)}))}},{key:"putMethodAPI",value:function(t,e,s,r){var i=this;this.methodUtils.setLoadingStatus(!0),this.customJsonInclude(e);var n=new o.c;return this.http.put(t=a.a.API_URL+t+"/"+s,e,{headers:n}).subscribe((function(t){t.status<200||t.status>=300||(201===t.status&&i.methodUtils.gotoBackPage(),r(t.data,!0)),i.methodUtils.setLoadingStatus(!1)}),(function(t){0===t.status||(403===t.status?i.methodUtils.setConfigAndDisplayPopUpNotification("error","",t.error.message):(r(t.error.message,!1),window.scroll(0,0))),i.methodUtils.setLoadingStatus(!1)}))}},{key:"customJsonInclude",value:function(t){for(var e in t)"object"==typeof t[e]?(t[e]&&t[e].length>0&&(t[e]=this.removeEmptyElementsFromArray(t[e])),this.isEmptyObject(t[e])?delete t[e]:this.customJsonInclude(t[e])):null==t[e]&&delete t[e]}},{key:"removeEmptyElementsFromArray",value:function(t){for(var e=-1,s=t?t.length:0,o=-1,a=[];++e<s;){var r=t[e];r&&(a[++o]=r)}return a}},{key:"isEmptyObject",value:function(t){return t&&0===Object.keys(t).length}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Wb(o.a),r.Wb(i.a),r.Wb(a.a))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);