window.__require = function e(t, s, o) {
function n(a, i) {
if (!s[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!i && c) return c(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
}
var p = s[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return n(t[a][1][e] || e);
}, p, p.exports, e, t, s, o);
}
return s[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
Helloworld: [ function(e, t, s) {
"use strict";
cc._RF.push(t, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var o = this && this.__extends || function() {
var e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
};
return function(t, s) {
e(t, s);
function o() {
this.constructor = t;
}
t.prototype = null === s ? Object.create(s) : (o.prototype = s.prototype, new o());
};
}(), n = this && this.__decorate || function(e, t, s, o) {
var n, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, s, a) : n(t, s)) || a);
return r > 3 && a && Object.defineProperty(t, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, i = r.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
this.label.string = this.text;
};
t.prototype.onLoad = function() {
var e = 0;
if (cc.sys.isNative) {
var t = jsb.fileUtils.getWritablePath();
console.log(e++, t);
console.log(e++, jsb.fileUtils.fullPathForFilename(t));
jsb.fileUtils.writeStringToFile("这是我测试的数据", t + "/test.json");
var s = t + "/test";
jsb.fileUtils.createDirectory(s);
jsb.fileUtils.isDirectoryExist(s) && console.log(e++);
if (cc.sys.os == cc.sys.OS_ANDROID) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "hello", "(Ljava/lang/String)V", "this is a message from js");
var o = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "sum", "(III)I", 3, 7, 10);
console.log(e++, o);
o = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "sum", "(I)I", 3);
console.log(e++, o);
var n = cc.sys.getBatteryLevel();
console.log(e++, n);
var r = cc.sys.getNetworkType();
console.log(e++, r);
}
}
};
t.prototype.clickEvent = function(e) {
console.log(e);
cc.sys.os == cc.sys.OS_ANDROID && cc.sys.openURL("www.baidu.com");
};
n([ i(cc.Label) ], t.prototype, "label", void 0);
n([ i ], t.prototype, "text", void 0);
return t = n([ a ], t);
}(cc.Component);
s.default = l;
cc._RF.pop();
}, {} ],
UpdatePanel: [ function(e, t, s) {
"use strict";
cc._RF.push(t, "59bf5bVsqhNVr0mkE0shVid", "UpdatePanel");
var o = this && this.__extends || function() {
var e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
};
return function(t, s) {
e(t, s);
function o() {
this.constructor = t;
}
t.prototype = null === s ? Object.create(s) : (o.prototype = s.prototype, new o());
};
}(), n = this && this.__decorate || function(e, t, s, o) {
var n, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, s, a) : n(t, s)) || a);
return r > 3 && a && Object.defineProperty(t, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, i = r.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.info = null;
t.fileProgress = null;
t.fileLabel = null;
t.byteProgress = null;
t.byteLabel = null;
t.close = null;
t.checkBtn = null;
t.retryBtn = null;
t.updateBtn = null;
t.versionLabel = null;
return t;
}
t.prototype.onLoad = function() {
var e = this;
this.close.on(cc.Node.EventType.TOUCH_END, function() {
e.node.parent.active = !1;
});
};
n([ i(cc.Label) ], t.prototype, "info", void 0);
n([ i(cc.ProgressBar) ], t.prototype, "fileProgress", void 0);
n([ i(cc.Label) ], t.prototype, "fileLabel", void 0);
n([ i(cc.ProgressBar) ], t.prototype, "byteProgress", void 0);
n([ i(cc.Label) ], t.prototype, "byteLabel", void 0);
n([ i(cc.Node) ], t.prototype, "close", void 0);
n([ i(cc.Node) ], t.prototype, "checkBtn", void 0);
n([ i(cc.Node) ], t.prototype, "retryBtn", void 0);
n([ i(cc.Node) ], t.prototype, "updateBtn", void 0);
n([ i(cc.Label) ], t.prototype, "versionLabel", void 0);
return t = n([ a ], t);
}(cc.Component);
s.default = l;
cc._RF.pop();
}, {} ],
hotUpdate: [ function(e, t, s) {
"use strict";
cc._RF.push(t, "ca1c14iqbVJGKWQapTvIrou", "hotUpdate");
var o = this && this.__extends || function() {
var e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
};
return function(t, s) {
e(t, s);
function o() {
this.constructor = t;
}
t.prototype = null === s ? Object.create(s) : (o.prototype = s.prototype, new o());
};
}(), n = this && this.__decorate || function(e, t, s, o) {
var n, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, s, a) : n(t, s)) || a);
return r > 3 && a && Object.defineProperty(t, s, a), a;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
var r = e("./UpdatePanel"), a = cc._decorator, i = a.ccclass, l = a.property, c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.panel = null;
t.updateUI = null;
t._updating = !1;
t._canRetry = !1;
t._storagePath = "";
t._am = null;
t._checkListener = null;
t._updateListener = null;
t._failCount = 0;
t.manifestUrl = null;
return t;
}
t.prototype.onLoad = function() {
console.log(this.manifestUrl);
console.log(this.panel.versionLabel);
if (cc.sys.isNative) {
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
console.log("Storage path for remote asset : " + this._storagePath);
var e = this._storagePath + "/project.manifest";
if (jsb.fileUtils.isFileExist(e)) {
var t = JSON.parse(jsb.fileUtils.getStringFromFile(e));
console.log(JSON.stringify(t));
this.panel.versionLabel.string = t.version;
}
this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
var s = this.panel;
this._am.setVerifyCallback(function(e, t) {
var o = t.compressed, n = t.md5, r = t.path;
t.size;
if (o) {
s.info.string = "Verification passed : " + r;
return !0;
}
s.info.string = "Verification passed : " + r + " (" + n + ")";
return !0;
});
this.panel.info.string = "Hot update is ready, please check or directly update.";
if (cc.sys.os === cc.sys.OS_ANDROID) {
this._am.setMaxConcurrentTask(2);
this.panel.info.string = "Max concurrent tasks count have been limited to 2";
}
this.panel.fileProgress.progress = 0;
this.panel.byteProgress.progress = 0;
}
};
t.prototype.versionCompareHandle = function(e, t) {
console.log("JS Custom Version Compare: version A is " + e + ", version B is " + t);
for (var s = e.split("."), o = t.split("."), n = 0; n < s.length; ++n) {
var r = parseInt(s[n]), a = parseInt(o[n] || 0);
if (r !== a) return r - a;
}
return o.length > s.length ? -1 : 0;
};
t.prototype.checkCb = function(e) {
console.log("Code: " + e.getEventCode());
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.panel.info.string = "No local manifest file found, hot update skipped.";
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.panel.info.string = "Fail to download manifest file, hot update skipped.";
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.panel.info.string = "Already up to date with the latest remote version.";
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this.panel.info.string = "New version found, please try to update.";
this.panel.checkBtn.active = !1;
this.panel.fileProgress.progress = 0;
this.panel.byteProgress.progress = 0;
break;

default:
return;
}
this._am.setEventCallback(null);
this._checkListener = null;
this._updating = !1;
};
t.prototype.updateCb = function(e) {
var t = !1, s = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.panel.info.string = "No local manifest file found, hot update skipped.";
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
this.panel.byteProgress.progress = e.getPercent();
this.panel.fileProgress.progress = e.getPercentByFile();
this.panel.fileLabel.string = e.getDownloadedFiles() + " / " + e.getTotalFiles();
this.panel.byteLabel.string = e.getDownloadedBytes() + " / " + e.getTotalBytes();
var o = e.getMessage();
o && (this.panel.info.string = "Updated file: " + o);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.panel.info.string = "Fail to download manifest file, hot update skipped.";
s = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.panel.info.string = "Already up to date with the latest remote version.";
s = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
this.panel.info.string = "Update finished. " + e.getMessage();
t = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.panel.info.string = "Update failed. " + e.getMessage();
this.panel.retryBtn.active = !0;
this._updating = !1;
this._canRetry = !0;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.panel.info.string = "Asset update error: " + e.getAssetId() + ", " + e.getMessage();
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.panel.info.string = e.getMessage();
}
if (s) {
this._am.setEventCallback(null);
this._updateListener = null;
this._updating = !1;
}
if (t) {
this._am.setEventCallback(null);
this._updateListener = null;
var n = jsb.fileUtils.getSearchPaths(), r = this._am.getLocalManifest().getSearchPaths();
console.log(JSON.stringify(r));
Array.prototype.unshift.apply(n, r);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(n));
jsb.fileUtils.setSearchPaths(n);
cc.audioEngine.stopAll();
cc.game.restart();
}
};
t.prototype.retry = function() {
if (!this._updating && this._canRetry) {
this.panel.retryBtn.active = !1;
this._canRetry = !1;
this.panel.info.string = "Retry failed Assets...";
this._am.downloadFailedAssets();
}
};
t.prototype.checkUpdate = function() {
if (this._updating) this.panel.info.string = "Checking or updating ..."; else {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.manifestUrl;
console.log("url", e);
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this._am.loadLocalManifest(this.manifestUrl);
}
if (this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded()) {
this._am.setEventCallback(this.checkCb.bind(this));
this._am.checkUpdate();
this._updating = !0;
} else this.panel.info.string = "Failed to load local manifest ...";
}
};
t.prototype.hotUpdate = function() {
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCb.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.manifestUrl;
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this._am.loadLocalManifest(e);
}
this._failCount = 0;
this._am.update();
this.panel.updateBtn.active = !1;
this._updating = !0;
}
};
t.prototype.show = function() {
!1 === this.updateUI.active && (this.updateUI.active = !0);
};
t.prototype.onDestroy = function() {
if (this._updateListener) {
this._am.setEventCallback(null);
this._updateListener = null;
}
};
n([ l(r.default) ], t.prototype, "panel", void 0);
n([ l(cc.Node) ], t.prototype, "updateUI", void 0);
n([ l(cc.Asset) ], t.prototype, "manifestUrl", void 0);
return t = n([ i ], t);
}(cc.Component);
s.default = c;
cc._RF.pop();
}, {
"./UpdatePanel": "UpdatePanel"
} ]
}, {}, [ "Helloworld", "UpdatePanel", "hotUpdate" ]);