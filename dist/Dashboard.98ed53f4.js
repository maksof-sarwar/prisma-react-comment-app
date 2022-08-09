// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"10K4Z":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4e9cbffa98ed53f4";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aMaLu":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1773 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1773.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _useReducer = require("@/hooks/useReducer");
var _authSlice = require("@/redux/authSlice");
var _antd = require("antd");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const Dashboard = ()=>{
    _s();
    const dispatch = (0, _useReducer.useAppDispatch)();
    const navigate = (0, _reactRouterDom.useNavigate)();
    return (0, _jsxRuntime.jsx)((0, _jsxRuntime.Fragment), {
        children: (0, _jsxRuntime.jsx)((0, _antd.Button), {
            onClick: ()=>{
                dispatch((0, _authSlice.resetCredential)());
                navigate("auth");
            },
            children: "Logout"
        })
    });
};
_s(Dashboard, "7rmm+MhTs7nbqmqn+Bn5aJnEsGA=", false, function() {
    return [
        (0, _useReducer.useAppDispatch),
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = Dashboard;
exports.default = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");

  $parcel$ReactRefreshHelpers$1773.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6AEwr","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","@/hooks/useReducer":"gkXFk","antd":"6C7kW","@/redux/authSlice":"hpVSM","react-router-dom":"fdOAw"}],"6C7kW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Affix", ()=>(0, _affixDefault.default));
parcelHelpers.export(exports, "Alert", ()=>(0, _alertDefault.default));
parcelHelpers.export(exports, "Anchor", ()=>(0, _anchorDefault.default));
parcelHelpers.export(exports, "AutoComplete", ()=>(0, _autoCompleteDefault.default));
parcelHelpers.export(exports, "Avatar", ()=>(0, _avatarDefault.default));
parcelHelpers.export(exports, "BackTop", ()=>(0, _backTopDefault.default));
parcelHelpers.export(exports, "Badge", ()=>(0, _badgeDefault.default));
parcelHelpers.export(exports, "Breadcrumb", ()=>(0, _breadcrumbDefault.default));
parcelHelpers.export(exports, "Button", ()=>(0, _buttonDefault.default));
parcelHelpers.export(exports, "Calendar", ()=>(0, _calendarDefault.default));
parcelHelpers.export(exports, "Card", ()=>(0, _cardDefault.default));
parcelHelpers.export(exports, "Carousel", ()=>(0, _carouselDefault.default));
parcelHelpers.export(exports, "Cascader", ()=>(0, _cascaderDefault.default));
parcelHelpers.export(exports, "Checkbox", ()=>(0, _checkboxDefault.default));
parcelHelpers.export(exports, "Col", ()=>(0, _colDefault.default));
parcelHelpers.export(exports, "Collapse", ()=>(0, _collapseDefault.default));
parcelHelpers.export(exports, "Comment", ()=>(0, _commentDefault.default));
parcelHelpers.export(exports, "ConfigProvider", ()=>(0, _configProviderDefault.default));
parcelHelpers.export(exports, "DatePicker", ()=>(0, _datePickerDefault.default));
parcelHelpers.export(exports, "Descriptions", ()=>(0, _descriptionsDefault.default));
parcelHelpers.export(exports, "Divider", ()=>(0, _dividerDefault.default));
parcelHelpers.export(exports, "Drawer", ()=>(0, _drawerDefault.default));
parcelHelpers.export(exports, "Dropdown", ()=>(0, _dropdownDefault.default));
parcelHelpers.export(exports, "Empty", ()=>(0, _emptyDefault.default));
parcelHelpers.export(exports, "Form", ()=>(0, _formDefault.default));
parcelHelpers.export(exports, "Grid", ()=>(0, _gridDefault.default));
parcelHelpers.export(exports, "Image", ()=>(0, _imageDefault.default));
parcelHelpers.export(exports, "Input", ()=>(0, _inputDefault.default));
parcelHelpers.export(exports, "InputNumber", ()=>(0, _inputNumberDefault.default));
parcelHelpers.export(exports, "Layout", ()=>(0, _layoutDefault.default));
parcelHelpers.export(exports, "List", ()=>(0, _listDefault.default));
parcelHelpers.export(exports, "Mentions", ()=>(0, _mentionsDefault.default));
parcelHelpers.export(exports, "Menu", ()=>(0, _menuDefault.default));
parcelHelpers.export(exports, "message", ()=>(0, _messageDefault.default));
parcelHelpers.export(exports, "Modal", ()=>(0, _modalDefault.default));
parcelHelpers.export(exports, "notification", ()=>(0, _notificationDefault.default));
parcelHelpers.export(exports, "PageHeader", ()=>(0, _pageHeaderDefault.default));
parcelHelpers.export(exports, "Pagination", ()=>(0, _paginationDefault.default));
parcelHelpers.export(exports, "Popconfirm", ()=>(0, _popconfirmDefault.default));
parcelHelpers.export(exports, "Popover", ()=>(0, _popoverDefault.default));
parcelHelpers.export(exports, "Progress", ()=>(0, _progressDefault.default));
parcelHelpers.export(exports, "Radio", ()=>(0, _radioDefault.default));
parcelHelpers.export(exports, "Rate", ()=>(0, _rateDefault.default));
parcelHelpers.export(exports, "Result", ()=>(0, _resultDefault.default));
parcelHelpers.export(exports, "Row", ()=>(0, _rowDefault.default));
parcelHelpers.export(exports, "Segmented", ()=>(0, _segmentedDefault.default));
parcelHelpers.export(exports, "Select", ()=>(0, _selectDefault.default));
parcelHelpers.export(exports, "Skeleton", ()=>(0, _skeletonDefault.default));
parcelHelpers.export(exports, "Slider", ()=>(0, _sliderDefault.default));
parcelHelpers.export(exports, "Space", ()=>(0, _spaceDefault.default));
parcelHelpers.export(exports, "Spin", ()=>(0, _spinDefault.default));
parcelHelpers.export(exports, "Statistic", ()=>(0, _statisticDefault.default));
parcelHelpers.export(exports, "Steps", ()=>(0, _stepsDefault.default));
parcelHelpers.export(exports, "Switch", ()=>(0, _switchDefault.default));
parcelHelpers.export(exports, "Table", ()=>(0, _tableDefault.default));
parcelHelpers.export(exports, "Tabs", ()=>(0, _tabsDefault.default));
parcelHelpers.export(exports, "Tag", ()=>(0, _tagDefault.default));
parcelHelpers.export(exports, "TimePicker", ()=>(0, _timePickerDefault.default));
parcelHelpers.export(exports, "Timeline", ()=>(0, _timelineDefault.default));
parcelHelpers.export(exports, "Tooltip", ()=>(0, _tooltipDefault.default));
parcelHelpers.export(exports, "Transfer", ()=>(0, _transferDefault.default));
parcelHelpers.export(exports, "Tree", ()=>(0, _treeDefault.default));
parcelHelpers.export(exports, "TreeSelect", ()=>(0, _treeSelectDefault.default));
parcelHelpers.export(exports, "Typography", ()=>(0, _typographyDefault.default));
parcelHelpers.export(exports, "Upload", ()=>(0, _uploadDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionDefault.default));
var _affix = require("./affix");
var _affixDefault = parcelHelpers.interopDefault(_affix);
var _alert = require("./alert");
var _alertDefault = parcelHelpers.interopDefault(_alert);
var _anchor = require("./anchor");
var _anchorDefault = parcelHelpers.interopDefault(_anchor);
var _autoComplete = require("./auto-complete");
var _autoCompleteDefault = parcelHelpers.interopDefault(_autoComplete);
var _avatar = require("./avatar");
var _avatarDefault = parcelHelpers.interopDefault(_avatar);
var _backTop = require("./back-top");
var _backTopDefault = parcelHelpers.interopDefault(_backTop);
var _badge = require("./badge");
var _badgeDefault = parcelHelpers.interopDefault(_badge);
var _breadcrumb = require("./breadcrumb");
var _breadcrumbDefault = parcelHelpers.interopDefault(_breadcrumb);
var _button = require("./button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _calendar = require("./calendar");
var _calendarDefault = parcelHelpers.interopDefault(_calendar);
var _card = require("./card");
var _cardDefault = parcelHelpers.interopDefault(_card);
var _carousel = require("./carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _cascader = require("./cascader");
var _cascaderDefault = parcelHelpers.interopDefault(_cascader);
var _checkbox = require("./checkbox");
var _checkboxDefault = parcelHelpers.interopDefault(_checkbox);
var _col = require("./col");
var _colDefault = parcelHelpers.interopDefault(_col);
var _collapse = require("./collapse");
var _collapseDefault = parcelHelpers.interopDefault(_collapse);
var _comment = require("./comment");
var _commentDefault = parcelHelpers.interopDefault(_comment);
var _configProvider = require("./config-provider");
var _configProviderDefault = parcelHelpers.interopDefault(_configProvider);
var _datePicker = require("./date-picker");
var _datePickerDefault = parcelHelpers.interopDefault(_datePicker);
var _descriptions = require("./descriptions");
var _descriptionsDefault = parcelHelpers.interopDefault(_descriptions);
var _divider = require("./divider");
var _dividerDefault = parcelHelpers.interopDefault(_divider);
var _drawer = require("./drawer");
var _drawerDefault = parcelHelpers.interopDefault(_drawer);
var _dropdown = require("./dropdown");
var _dropdownDefault = parcelHelpers.interopDefault(_dropdown);
var _empty = require("./empty");
var _emptyDefault = parcelHelpers.interopDefault(_empty);
var _form = require("./form");
var _formDefault = parcelHelpers.interopDefault(_form);
var _grid = require("./grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _image = require("./image");
var _imageDefault = parcelHelpers.interopDefault(_image);
var _input = require("./input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _inputNumber = require("./input-number");
var _inputNumberDefault = parcelHelpers.interopDefault(_inputNumber);
var _layout = require("./layout");
var _layoutDefault = parcelHelpers.interopDefault(_layout);
var _list = require("./list");
var _listDefault = parcelHelpers.interopDefault(_list);
var _mentions = require("./mentions");
var _mentionsDefault = parcelHelpers.interopDefault(_mentions);
var _menu = require("./menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _message = require("./message");
var _messageDefault = parcelHelpers.interopDefault(_message);
var _modal = require("./modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _notification = require("./notification");
var _notificationDefault = parcelHelpers.interopDefault(_notification);
var _pageHeader = require("./page-header");
var _pageHeaderDefault = parcelHelpers.interopDefault(_pageHeader);
var _pagination = require("./pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _popconfirm = require("./popconfirm");
var _popconfirmDefault = parcelHelpers.interopDefault(_popconfirm);
var _popover = require("./popover");
var _popoverDefault = parcelHelpers.interopDefault(_popover);
var _progress = require("./progress");
var _progressDefault = parcelHelpers.interopDefault(_progress);
var _radio = require("./radio");
var _radioDefault = parcelHelpers.interopDefault(_radio);
var _rate = require("./rate");
var _rateDefault = parcelHelpers.interopDefault(_rate);
var _result = require("./result");
var _resultDefault = parcelHelpers.interopDefault(_result);
var _row = require("./row");
var _rowDefault = parcelHelpers.interopDefault(_row);
var _segmented = require("./segmented");
var _segmentedDefault = parcelHelpers.interopDefault(_segmented);
var _select = require("./select");
var _selectDefault = parcelHelpers.interopDefault(_select);
var _skeleton = require("./skeleton");
var _skeletonDefault = parcelHelpers.interopDefault(_skeleton);
var _slider = require("./slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
var _space = require("./space");
var _spaceDefault = parcelHelpers.interopDefault(_space);
var _spin = require("./spin");
var _spinDefault = parcelHelpers.interopDefault(_spin);
var _statistic = require("./statistic");
var _statisticDefault = parcelHelpers.interopDefault(_statistic);
var _steps = require("./steps");
var _stepsDefault = parcelHelpers.interopDefault(_steps);
var _switch = require("./switch");
var _switchDefault = parcelHelpers.interopDefault(_switch);
var _table = require("./table");
var _tableDefault = parcelHelpers.interopDefault(_table);
var _tabs = require("./tabs");
var _tabsDefault = parcelHelpers.interopDefault(_tabs);
var _tag = require("./tag");
var _tagDefault = parcelHelpers.interopDefault(_tag);
var _timePicker = require("./time-picker");
var _timePickerDefault = parcelHelpers.interopDefault(_timePicker);
var _timeline = require("./timeline");
var _timelineDefault = parcelHelpers.interopDefault(_timeline);
var _tooltip = require("./tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);
var _transfer = require("./transfer");
var _transferDefault = parcelHelpers.interopDefault(_transfer);
var _tree = require("./tree");
var _treeDefault = parcelHelpers.interopDefault(_tree);
var _treeSelect = require("./tree-select");
var _treeSelectDefault = parcelHelpers.interopDefault(_treeSelect);
var _typography = require("./typography");
var _typographyDefault = parcelHelpers.interopDefault(_typography);
var _upload = require("./upload");
var _uploadDefault = parcelHelpers.interopDefault(_upload);
var _version = require("./version");
var _versionDefault = parcelHelpers.interopDefault(_version);

},{"./affix":false,"./alert":false,"./anchor":false,"./auto-complete":false,"./avatar":false,"./back-top":false,"./badge":false,"./breadcrumb":false,"./button":"SbZy4","./calendar":false,"./card":false,"./carousel":false,"./cascader":false,"./checkbox":"cAGRN","./col":"a4jFj","./collapse":false,"./comment":false,"./config-provider":"iMraF","./date-picker":false,"./descriptions":false,"./divider":false,"./drawer":false,"./dropdown":false,"./empty":false,"./form":"g2OzT","./grid":"2CE2V","./image":false,"./input":"3deN7","./input-number":false,"./layout":false,"./list":false,"./mentions":false,"./menu":false,"./message":"8fyGO","./modal":false,"./notification":"iZc3Y","./page-header":false,"./pagination":false,"./popconfirm":false,"./popover":false,"./progress":false,"./radio":false,"./rate":false,"./result":false,"./row":"5YkYW","./segmented":false,"./select":false,"./skeleton":false,"./slider":false,"./space":false,"./spin":false,"./statistic":false,"./steps":false,"./switch":false,"./table":false,"./tabs":false,"./tag":false,"./time-picker":false,"./timeline":false,"./tooltip":"aaH0r","./transfer":false,"./tree":false,"./tree-select":false,"./typography":false,"./upload":false,"./version":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SbZy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("./button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
exports.default = (0, _buttonDefault.default);

},{"./button":"55Yea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55Yea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertLegacyProps", ()=>convertLegacyProps);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
/* eslint-disable react/button-has-type */ var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _react = require("react");
var _configProvider = require("../config-provider");
var _disabledContext = require("../config-provider/DisabledContext");
var _disabledContextDefault = parcelHelpers.interopDefault(_disabledContext);
var _sizeContext = require("../config-provider/SizeContext");
var _sizeContextDefault = parcelHelpers.interopDefault(_sizeContext);
var _reactNode = require("../_util/reactNode");
var _type = require("../_util/type");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _wave = require("../_util/wave");
var _waveDefault = parcelHelpers.interopDefault(_wave);
var _buttonGroup = require("./button-group");
var _buttonGroupDefault = parcelHelpers.interopDefault(_buttonGroup);
var _loadingIcon = require("./LoadingIcon");
var _loadingIconDefault = parcelHelpers.interopDefault(_loadingIcon);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === "string";
}
function isUnBorderedButtonType(type) {
    return type === "text" || type === "link";
}
function isReactFragment(node) {
    return /*#__PURE__*/ _react.isValidElement(node) && node.type === _react.Fragment;
} // Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child === null || child === undefined) return;
    var SPACE = needInserted ? " " : ""; // strictNullChecks oops.
    if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) return (0, _reactNode.cloneElement)(child, {
        children: child.props.children.split("").join(SPACE)
    });
    if (typeof child === "string") return isTwoCNChar(child) ? /*#__PURE__*/ _react.createElement("span", null, child.split("").join(SPACE)) : /*#__PURE__*/ _react.createElement("span", null, child);
    if (isReactFragment(child)) return /*#__PURE__*/ _react.createElement("span", null, child);
    return child;
}
function spaceChildren(children, needInserted) {
    var isPrevChildPure = false;
    var childList = [];
    _react.Children.forEach(children, function(child) {
        var type = (0, _typeofDefault.default)(child);
        var isCurrentChildPure = type === "string" || type === "number";
        if (isPrevChildPure && isCurrentChildPure) {
            var lastIndex = childList.length - 1;
            var lastChild = childList[lastIndex];
            childList[lastIndex] = "".concat(lastChild).concat(child);
        } else childList.push(child);
        isPrevChildPure = isCurrentChildPure;
    }); // Pass to React.Children.map to auto fill key
    return _react.Children.map(childList, function(child) {
        return insertSpace(child, needInserted);
    });
}
var ButtonTypes = (0, _type.tuple)("default", "primary", "ghost", "dashed", "link", "text");
var ButtonShapes = (0, _type.tuple)("default", "circle", "round");
var ButtonHTMLTypes = (0, _type.tuple)("submit", "button", "reset");
function convertLegacyProps(type) {
    if (type === "danger") return {
        danger: true
    };
    return {
        type: type
    };
}
var InternalButton = function InternalButton(props, ref) {
    var _classNames;
    var _props$loading = props.loading, loading = _props$loading === void 0 ? false : _props$loading, customizePrefixCls = props.prefixCls, _props$type = props.type, type = _props$type === void 0 ? "default" : _props$type, danger = props.danger, _props$shape = props.shape, shape = _props$shape === void 0 ? "default" : _props$shape, customizeSize = props.size, customDisabled = props.disabled, className = props.className, children = props.children, icon = props.icon, _props$ghost = props.ghost, ghost = _props$ghost === void 0 ? false : _props$ghost, _props$block = props.block, block = _props$block === void 0 ? false : _props$block, _props$htmlType = props.htmlType, htmlType = _props$htmlType === void 0 ? "button" : _props$htmlType, rest = __rest(props, [
        "loading",
        "prefixCls",
        "type",
        "danger",
        "shape",
        "size",
        "disabled",
        "className",
        "children",
        "icon",
        "ghost",
        "block",
        "htmlType"
    ]);
    var size = _react.useContext((0, _sizeContextDefault.default)); // ===================== Disabled =====================
    var disabled = _react.useContext((0, _disabledContextDefault.default));
    var mergedDisabled = customDisabled || disabled;
    var groupSize = _react.useContext((0, _buttonGroup.GroupSizeContext));
    var _React$useState = _react.useState(!!loading), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), innerLoading = _React$useState2[0], setLoading = _React$useState2[1];
    var _React$useState3 = _react.useState(false), _React$useState4 = (0, _slicedToArrayDefault.default)(_React$useState3, 2), hasTwoCNChar = _React$useState4[0], setHasTwoCNChar = _React$useState4[1];
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton, direction = _React$useContext.direction;
    var buttonRef = ref || /*#__PURE__*/ _react.createRef();
    var isNeedInserted = function isNeedInserted() {
        return _react.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
    };
    var fixTwoCNChar = function fixTwoCNChar() {
        // Fix for HOC usage like <FormatMessage />
        if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) return;
        var buttonText = buttonRef.current.textContent;
        if (isNeedInserted() && isTwoCNChar(buttonText)) {
            if (!hasTwoCNChar) setHasTwoCNChar(true);
        } else if (hasTwoCNChar) setHasTwoCNChar(false);
    }; // =============== Update Loading ===============
    var loadingOrDelay = typeof loading === "boolean" ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
    _react.useEffect(function() {
        var delayTimer = null;
        if (typeof loadingOrDelay === "number") delayTimer = window.setTimeout(function() {
            delayTimer = null;
            setLoading(loadingOrDelay);
        }, loadingOrDelay);
        else setLoading(loadingOrDelay);
        return function() {
            if (delayTimer) {
                // in order to not perform a React state update on an unmounted component
                // and clear timer after 'loadingOrDelay' updated.
                window.clearTimeout(delayTimer);
                delayTimer = null;
            }
        };
    }, [
        loadingOrDelay
    ]);
    _react.useEffect(fixTwoCNChar, [
        buttonRef
    ]);
    var handleClick = function handleClick(e) {
        var onClick = props.onClick; // https://github.com/ant-design/ant-design/issues/30207
        if (innerLoading || mergedDisabled) {
            e.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 || onClick(e);
    };
    (0, _warningDefault.default)(!(typeof icon === "string" && icon.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
    (0, _warningDefault.default)(!(ghost && isUnBorderedButtonType(type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    var prefixCls = getPrefixCls("btn", customizePrefixCls);
    var autoInsertSpace = autoInsertSpaceInButton !== false;
    var sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: undefined
    };
    var sizeFullname = groupSize || customizeSize || size;
    var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
    var iconType = innerLoading ? "loading" : icon;
    var linkButtonRestProps = (0, _omitDefault.default)(rest, [
        "navigate"
    ]);
    var classes = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(shape), shape !== "default" && shape), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnBorderedButtonType(type)), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-block"), block), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-disabled"), linkButtonRestProps.href !== undefined && mergedDisabled), _classNames), className);
    var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/ _react.createElement((0, _loadingIconDefault.default), {
        existIcon: !!icon,
        prefixCls: prefixCls,
        loading: !!innerLoading
    });
    var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
    if (linkButtonRestProps.href !== undefined) return /*#__PURE__*/ _react.createElement("a", (0, _extendsDefault.default)({}, linkButtonRestProps, {
        className: classes,
        onClick: handleClick,
        ref: buttonRef
    }), iconNode, kids);
    var buttonNode = /*#__PURE__*/ _react.createElement("button", (0, _extendsDefault.default)({}, rest, {
        type: htmlType,
        className: classes,
        onClick: handleClick,
        disabled: mergedDisabled,
        ref: buttonRef
    }), iconNode, kids);
    if (isUnBorderedButtonType(type)) return buttonNode;
    return /*#__PURE__*/ _react.createElement((0, _waveDefault.default), {
        disabled: !!innerLoading
    }, buttonNode);
};
var Button = /*#__PURE__*/ _react.forwardRef(InternalButton);
Button.displayName = "Button";
Button.Group = (0, _buttonGroupDefault.default);
Button.__ANT_BUTTON = true;
exports.default = Button;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/typeof":"i7HWY","classnames":"jocGM","rc-util/es/omit":"e7Re6","react":"21dqq","../config-provider":"iMraF","../config-provider/DisabledContext":"kJAKR","../config-provider/SizeContext":"kxcXW","../_util/reactNode":"d1mV0","../_util/type":"eWuNf","../_util/warning":"daUrm","../_util/wave":"aPUPe","./button-group":"45IvJ","./LoadingIcon":"gc8N8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBZWN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHolesJs = require("./arrayWithHoles.js");
var _arrayWithHolesJsDefault = parcelHelpers.interopDefault(_arrayWithHolesJs);
var _iterableToArrayLimitJs = require("./iterableToArrayLimit.js");
var _iterableToArrayLimitJsDefault = parcelHelpers.interopDefault(_iterableToArrayLimitJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableRestJs = require("./nonIterableRest.js");
var _nonIterableRestJsDefault = parcelHelpers.interopDefault(_nonIterableRestJs);
function _slicedToArray(arr, i) {
    return (0, _arrayWithHolesJsDefault.default)(arr) || (0, _iterableToArrayLimitJsDefault.default)(arr, i) || (0, _unsupportedIterableToArrayJsDefault.default)(arr, i) || (0, _nonIterableRestJsDefault.default)();
}
exports.default = _slicedToArray;

},{"./arrayWithHoles.js":"jY0ns","./iterableToArrayLimit.js":"5XRDs","./unsupportedIterableToArray.js":"1TZRB","./nonIterableRest.js":"cUFPt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jY0ns":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XRDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TZRB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, _arrayLikeToArrayJsDefault.default)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArrayJsDefault.default)(o, minLen);
}
exports.default = _unsupportedIterableToArray;

},{"./arrayLikeToArray.js":"gvgr8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvgr8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
exports.default = _arrayLikeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUFPt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7HWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jocGM":[function(require,module,exports) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === "object") {
                if (arg.toString === Object.prototype.toString) {
                    for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
                } else classes.push(arg.toString());
            }
        }
        return classes.join(" ");
    }
    if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"e7Re6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
function omit(obj, fields) {
    var clone = (0, _objectSpread2Default.default)({}, obj);
    if (Array.isArray(fields)) fields.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
exports.default = omit;

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMraF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConfigContext", ()=>(0, _context1.ConfigContext));
parcelHelpers.export(exports, "ConfigConsumer", ()=>(0, _context1.ConfigConsumer));
parcelHelpers.export(exports, "configConsumerProps", ()=>configConsumerProps);
parcelHelpers.export(exports, "defaultPrefixCls", ()=>defaultPrefixCls);
parcelHelpers.export(exports, "defaultIconPrefixCls", ()=>defaultIconPrefixCls);
parcelHelpers.export(exports, "globalConfig", ()=>globalConfig);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _context = require("@ant-design/icons/es/components/Context");
var _contextDefault = parcelHelpers.interopDefault(_context);
var _rcFieldForm = require("rc-field-form");
var _useMemo = require("rc-util/es/hooks/useMemo");
var _useMemoDefault = parcelHelpers.interopDefault(_useMemo);
var _react = require("react");
var _localeProvider = require("../locale-provider");
var _localeProviderDefault = parcelHelpers.interopDefault(_localeProvider);
var _localeReceiver = require("../locale-provider/LocaleReceiver");
var _localeReceiverDefault = parcelHelpers.interopDefault(_localeReceiver);
var _default = require("../locale/default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
var _message = require("../message");
var _messageDefault = parcelHelpers.interopDefault(_message);
var _notification = require("../notification");
var _notificationDefault = parcelHelpers.interopDefault(_notification);
var _context1 = require("./context");
var _cssVariables = require("./cssVariables");
var _disabledContext = require("./DisabledContext");
var _sizeContext = require("./SizeContext");
var _sizeContextDefault = parcelHelpers.interopDefault(_sizeContext);
var configConsumerProps = [
    "getTargetContainer",
    "getPopupContainer",
    "rootPrefixCls",
    "getPrefixCls",
    "renderEmpty",
    "csp",
    "autoInsertSpaceInButton",
    "locale",
    "pageHeader"
]; // These props is used by `useContext` directly in sub component
var PASSED_PROPS = [
    "getTargetContainer",
    "getPopupContainer",
    "renderEmpty",
    "pageHeader",
    "input",
    "pagination",
    "form"
];
var defaultPrefixCls = "ant";
var defaultIconPrefixCls = "anticon";
var globalPrefixCls;
var globalIconPrefixCls;
function getGlobalPrefixCls() {
    return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
    return globalIconPrefixCls || defaultIconPrefixCls;
}
var setGlobalConfig = function setGlobalConfig(_ref) {
    var prefixCls = _ref.prefixCls, iconPrefixCls = _ref.iconPrefixCls, theme = _ref.theme;
    if (prefixCls !== undefined) globalPrefixCls = prefixCls;
    if (iconPrefixCls !== undefined) globalIconPrefixCls = iconPrefixCls;
    if (theme) (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), theme);
};
var globalConfig = function globalConfig() {
    return {
        getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
            if (customizePrefixCls) return customizePrefixCls;
            return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
        },
        getIconPrefixCls: getGlobalIconPrefixCls,
        getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
            // Customize rootPrefixCls is first priority
            if (rootPrefixCls) return rootPrefixCls;
             // If Global prefixCls provided, use this
            if (globalPrefixCls) return globalPrefixCls;
             // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls
            if (customizePrefixCls && customizePrefixCls.includes("-")) return customizePrefixCls.replace(/^(.*)-[^-]*$/, "$1");
             // Fallback to default prefixCls
            return getGlobalPrefixCls();
        }
    };
};
var ProviderChildren = function ProviderChildren(props) {
    var _a, _b;
    var children = props.children, csp = props.csp, autoInsertSpaceInButton = props.autoInsertSpaceInButton, form = props.form, locale = props.locale, componentSize = props.componentSize, direction = props.direction, space = props.space, virtual = props.virtual, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, legacyLocale = props.legacyLocale, parentContext = props.parentContext, iconPrefixCls = props.iconPrefixCls, componentDisabled = props.componentDisabled;
    var getPrefixCls = _react.useCallback(function(suffixCls, customizePrefixCls) {
        var prefixCls = props.prefixCls;
        if (customizePrefixCls) return customizePrefixCls;
        var mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
        return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    }, [
        parentContext.getPrefixCls,
        props.prefixCls
    ]);
    var config = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, parentContext), {
        csp: csp,
        autoInsertSpaceInButton: autoInsertSpaceInButton,
        locale: locale || legacyLocale,
        direction: direction,
        space: space,
        virtual: virtual,
        dropdownMatchSelectWidth: dropdownMatchSelectWidth,
        getPrefixCls: getPrefixCls
    }); // Pass the props used by `useContext` directly with child component.
    // These props should merged into `config`.
    PASSED_PROPS.forEach(function(propName) {
        var propValue = props[propName];
        if (propValue) config[propName] = propValue;
    }); // https://github.com/ant-design/ant-design/issues/27617
    var memoedConfig = (0, _useMemoDefault.default)(function() {
        return config;
    }, config, function(prevConfig, currentConfig) {
        var prevKeys = Object.keys(prevConfig);
        var currentKeys = Object.keys(currentConfig);
        return prevKeys.length !== currentKeys.length || prevKeys.some(function(key) {
            return prevConfig[key] !== currentConfig[key];
        });
    });
    var memoIconContextValue = _react.useMemo(function() {
        return {
            prefixCls: iconPrefixCls,
            csp: csp
        };
    }, [
        iconPrefixCls,
        csp
    ]);
    var childNode = children; // Additional Form provider
    var validateMessages = {};
    if (locale) validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = (0, _defaultDefault.default).Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
    if (form && form.validateMessages) validateMessages = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, validateMessages), form.validateMessages);
    if (Object.keys(validateMessages).length > 0) childNode = /*#__PURE__*/ _react.createElement((0, _rcFieldForm.FormProvider), {
        validateMessages: validateMessages
    }, children);
    if (locale) childNode = /*#__PURE__*/ _react.createElement((0, _localeProviderDefault.default), {
        locale: locale,
        _ANT_MARK__: (0, _localeProvider.ANT_MARK)
    }, childNode);
    if (iconPrefixCls || csp) childNode = /*#__PURE__*/ _react.createElement((0, _contextDefault.default).Provider, {
        value: memoIconContextValue
    }, childNode);
    if (componentSize) childNode = /*#__PURE__*/ _react.createElement((0, _sizeContext.SizeContextProvider), {
        size: componentSize
    }, childNode);
    if (componentDisabled !== undefined) childNode = /*#__PURE__*/ _react.createElement((0, _disabledContext.DisabledContextProvider), {
        disabled: componentDisabled
    }, childNode);
    return /*#__PURE__*/ _react.createElement((0, _context1.ConfigContext).Provider, {
        value: memoedConfig
    }, childNode);
};
var ConfigProvider = function ConfigProvider(props) {
    _react.useEffect(function() {
        if (props.direction) {
            (0, _messageDefault.default).config({
                rtl: props.direction === "rtl"
            });
            (0, _notificationDefault.default).config({
                rtl: props.direction === "rtl"
            });
        }
    }, [
        props.direction
    ]);
    return /*#__PURE__*/ _react.createElement((0, _localeReceiverDefault.default), null, function(_, __, legacyLocale) {
        return /*#__PURE__*/ _react.createElement((0, _context1.ConfigConsumer), null, function(context) {
            return /*#__PURE__*/ _react.createElement(ProviderChildren, (0, _extendsDefault.default)({
                parentContext: context,
                legacyLocale: legacyLocale
            }, props));
        });
    });
};
/** @private internal Usage. do not use in your production */ ConfigProvider.ConfigContext = (0, _context1.ConfigContext);
ConfigProvider.SizeContext = (0, _sizeContextDefault.default);
ConfigProvider.config = setGlobalConfig;
exports.default = ConfigProvider;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@ant-design/icons/es/components/Context":"dIWfS","rc-field-form":"bdxu5","rc-util/es/hooks/useMemo":"cxcbY","react":"21dqq","../locale-provider":"9Bz2K","../locale-provider/LocaleReceiver":"6T2lL","../locale/default":"gC4P4","../message":"8fyGO","../notification":"iZc3Y","./context":"cWBoR","./cssVariables":"hbvCC","./DisabledContext":"kJAKR","./SizeContext":"kxcXW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIWfS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var IconContext = /*#__PURE__*/ (0, _react.createContext)({});
exports.default = IconContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdxu5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Field", ()=>(0, _fieldDefault.default));
parcelHelpers.export(exports, "List", ()=>(0, _listDefault.default));
parcelHelpers.export(exports, "useForm", ()=>(0, _useFormDefault.default));
parcelHelpers.export(exports, "FormProvider", ()=>(0, _formContext.FormProvider));
parcelHelpers.export(exports, "FieldContext", ()=>(0, _fieldContextDefault.default));
parcelHelpers.export(exports, "ListContext", ()=>(0, _listContextDefault.default));
parcelHelpers.export(exports, "useWatch", ()=>(0, _useWatchDefault.default));
var _react = require("react");
var _field = require("./Field");
var _fieldDefault = parcelHelpers.interopDefault(_field);
var _list = require("./List");
var _listDefault = parcelHelpers.interopDefault(_list);
var _useForm = require("./useForm");
var _useFormDefault = parcelHelpers.interopDefault(_useForm);
var _form = require("./Form");
var _formDefault = parcelHelpers.interopDefault(_form);
var _formContext = require("./FormContext");
var _fieldContext = require("./FieldContext");
var _fieldContextDefault = parcelHelpers.interopDefault(_fieldContext);
var _listContext = require("./ListContext");
var _listContextDefault = parcelHelpers.interopDefault(_listContext);
var _useWatch = require("./useWatch");
var _useWatchDefault = parcelHelpers.interopDefault(_useWatch);
var InternalForm = /*#__PURE__*/ _react.forwardRef((0, _formDefault.default));
var RefForm = InternalForm;
RefForm.FormProvider = (0, _formContext.FormProvider);
RefForm.Field = (0, _fieldDefault.default);
RefForm.List = (0, _listDefault.default);
RefForm.useForm = (0, _useFormDefault.default);
RefForm.useWatch = (0, _useWatchDefault.default);
exports.default = RefForm;

},{"react":"21dqq","./Field":"66zlt","./List":"hUxbS","./useForm":"hgZUW","./Form":"87pbN","./FormContext":"cpeez","./FieldContext":"edeC2","./ListContext":"9sjEA","./useWatch":"2X6w3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66zlt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _toArray = require("rc-util/es/Children/toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _react = require("react");
var _fieldContext = require("./FieldContext");
var _fieldContextDefault = parcelHelpers.interopDefault(_fieldContext);
var _typeUtil = require("./utils/typeUtil");
var _validateUtil = require("./utils/validateUtil");
var _valueUtil = require("./utils/valueUtil");
var _excluded = [
    "name"
];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
    if (typeof shouldUpdate === "function") return shouldUpdate(prev, next, "source" in info ? {
        source: info.source
    } : {});
    return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.
var Field = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(Field, _React$Component);
    var _super = (0, _createSuperDefault.default)(Field);
    /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */ /**
   * Mark when touched & validated. Currently only used for `dependencies`.
   * Note that we do not think field with `initialValue` is dirty
   * but this will be by `isFieldDirty` func.
   */ // ============================== Subscriptions ==============================
    function Field(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, Field);
        _this = _super.call(this, props); // Register on init
        _this.state = {
            resetCount: 0
        };
        _this.cancelRegisterFunc = null;
        _this.mounted = false;
        _this.touched = false;
        _this.dirty = false;
        _this.validatePromise = null;
        _this.prevValidating = void 0;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.cancelRegister = function() {
            var _this$props = _this.props, preserve = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
            if (_this.cancelRegisterFunc) _this.cancelRegisterFunc(isListField, preserve, (0, _valueUtil.getNamePath)(name));
            _this.cancelRegisterFunc = null;
        };
        _this.getNamePath = function() {
            var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
            var _fieldContext$prefixN = fieldContext.prefixName, prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
            return name !== undefined ? [].concat((0, _toConsumableArrayDefault.default)(prefixName), (0, _toConsumableArrayDefault.default)(name)) : [];
        };
        _this.getRules = function() {
            var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules = _this$props3$rules === void 0 ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
            return rules.map(function(rule) {
                if (typeof rule === "function") return rule(fieldContext);
                return rule;
            });
        };
        _this.refresh = function() {
            if (!_this.mounted) return;
            /**
       * Clean up current node.
       */ _this.setState(function(_ref) {
                var resetCount = _ref.resetCount;
                return {
                    resetCount: resetCount + 1
                };
            });
        };
        _this.triggerMetaEvent = function(destroy) {
            var onMetaChange = _this.props.onMetaChange;
            onMetaChange === null || onMetaChange === void 0 || onMetaChange((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, _this.getMeta()), {}, {
                destroy: destroy
            }));
        };
        _this.onStoreChange = function(prevStore, namePathList, info) {
            var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
            var store = info.store;
            var namePath = _this.getNamePath();
            var prevValue = _this.getValue(prevStore);
            var curValue = _this.getValue(store);
            var namePathMatch = namePathList && (0, _valueUtil.containsNamePath)(namePathList, namePath); // `setFieldsValue` is a quick access to update related status
            if (info.type === "valueUpdate" && info.source === "external" && prevValue !== curValue) {
                _this.touched = true;
                _this.dirty = true;
                _this.validatePromise = null;
                _this.errors = EMPTY_ERRORS;
                _this.warnings = EMPTY_ERRORS;
                _this.triggerMetaEvent();
            }
            switch(info.type){
                case "reset":
                    if (!namePathList || namePathMatch) {
                        // Clean up state
                        _this.touched = false;
                        _this.dirty = false;
                        _this.validatePromise = null;
                        _this.errors = EMPTY_ERRORS;
                        _this.warnings = EMPTY_ERRORS;
                        _this.triggerMetaEvent();
                        onReset === null || onReset === void 0 || onReset();
                        _this.refresh();
                        return;
                    }
                    break;
                /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */ case "remove":
                    if (shouldUpdate) {
                        _this.reRender();
                        return;
                    }
                    break;
                case "setField":
                    if (namePathMatch) {
                        var data = info.data;
                        if ("touched" in data) _this.touched = data.touched;
                        if ("validating" in data && !("originRCField" in data)) _this.validatePromise = data.validating ? Promise.resolve([]) : null;
                        if ("errors" in data) _this.errors = data.errors || EMPTY_ERRORS;
                        if ("warnings" in data) _this.warnings = data.warnings || EMPTY_ERRORS;
                        _this.dirty = true;
                        _this.triggerMetaEvent();
                        _this.reRender();
                        return;
                    } // Handle update by `setField` with `shouldUpdate`
                    if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
                        _this.reRender();
                        return;
                    }
                    break;
                case "dependenciesUpdate":
                    /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */ var dependencyList = dependencies.map((0, _valueUtil.getNamePath)); // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
                    // emitted earlier and they will work there
                    // If set it may cause unnecessary twice rerendering
                    if (dependencyList.some(function(dependency) {
                        return (0, _valueUtil.containsNamePath)(info.relatedFields, dependency);
                    })) {
                        _this.reRender();
                        return;
                    }
                    break;
                default:
                    // 1. If `namePath` exists in `namePathList`, means it's related value and should update
                    //      For example <List name="list"><Field name={['list', 0]}></List>
                    //      If `namePathList` is [['list']] (List value update), Field should be updated
                    //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
                    // 2.
                    //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
                    //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
                    //       is not provided
                    //   2.2 If `shouldUpdate` provided, use customize logic to update the field
                    //       else to check if value changed
                    if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
                        _this.reRender();
                        return;
                    }
                    break;
            }
            if (shouldUpdate === true) _this.reRender();
        };
        _this.validateRules = function(options) {
            // We should fixed namePath & value to avoid developer change then by form function
            var namePath = _this.getNamePath();
            var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field
            var rootPromise = Promise.resolve().then(function() {
                if (!_this.mounted) return [];
                var _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables;
                var _ref2 = options || {}, triggerName = _ref2.triggerName;
                var filteredRules = _this.getRules();
                if (triggerName) filteredRules = filteredRules.filter(function(rule) {
                    var validateTrigger = rule.validateTrigger;
                    if (!validateTrigger) return true;
                    var triggerList = (0, _typeUtil.toArray)(validateTrigger);
                    return triggerList.includes(triggerName);
                });
                var promise = (0, _validateUtil.validateRules)(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
                promise.catch(function(e) {
                    return e;
                }).then(function() {
                    var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
                    if (_this.validatePromise === rootPromise) {
                        var _ruleErrors$forEach;
                        _this.validatePromise = null; // Get errors & warnings
                        var nextErrors = [];
                        var nextWarnings = [];
                        (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref3) {
                            var warningOnly = _ref3.rule.warningOnly, _ref3$errors = _ref3.errors, errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;
                            if (warningOnly) nextWarnings.push.apply(nextWarnings, (0, _toConsumableArrayDefault.default)(errors));
                            else nextErrors.push.apply(nextErrors, (0, _toConsumableArrayDefault.default)(errors));
                        });
                        _this.errors = nextErrors;
                        _this.warnings = nextWarnings;
                        _this.triggerMetaEvent();
                        _this.reRender();
                    }
                });
                return promise;
            });
            _this.validatePromise = rootPromise;
            _this.dirty = true;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent(); // Force trigger re-render since we need sync renderProps with new meta
            _this.reRender();
            return rootPromise;
        };
        _this.isFieldValidating = function() {
            return !!_this.validatePromise;
        };
        _this.isFieldTouched = function() {
            return _this.touched;
        };
        _this.isFieldDirty = function() {
            // Touched or validate or has initialValue
            if (_this.dirty || _this.props.initialValue !== undefined) return true;
             // Form set initialValue
            var fieldContext = _this.props.fieldContext;
            var _fieldContext$getInte = fieldContext.getInternalHooks((0, _fieldContext.HOOK_MARK)), getInitialValue = _fieldContext$getInte.getInitialValue;
            if (getInitialValue(_this.getNamePath()) !== undefined) return true;
            return false;
        };
        _this.getErrors = function() {
            return _this.errors;
        };
        _this.getWarnings = function() {
            return _this.warnings;
        };
        _this.isListField = function() {
            return _this.props.isListField;
        };
        _this.isList = function() {
            return _this.props.isList;
        };
        _this.isPreserve = function() {
            return _this.props.preserve;
        };
        _this.getMeta = function() {
            // Make error & validating in cache to save perf
            _this.prevValidating = _this.isFieldValidating();
            var meta = {
                touched: _this.isFieldTouched(),
                validating: _this.prevValidating,
                errors: _this.errors,
                warnings: _this.warnings,
                name: _this.getNamePath()
            };
            return meta;
        };
        _this.getOnlyChild = function(children) {
            // Support render props
            if (typeof children === "function") {
                var meta = _this.getMeta();
                return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
                    isFunction: true
                });
            } // Filed element only
            var childList = (0, _toArrayDefault.default)(children);
            if (childList.length !== 1 || !/*#__PURE__*/ _react.isValidElement(childList[0])) return {
                child: childList,
                isFunction: false
            };
            return {
                child: childList[0],
                isFunction: false
            };
        };
        _this.getValue = function(store) {
            var getFieldsValue = _this.props.fieldContext.getFieldsValue;
            var namePath = _this.getNamePath();
            return (0, _valueUtil.getValue)(store || getFieldsValue(true), namePath);
        };
        _this.getControlled = function() {
            var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _this$props6 = _this.props, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
            var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
            var namePath = _this.getNamePath();
            var getInternalHooks = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
            var _getInternalHooks = getInternalHooks((0, _fieldContext.HOOK_MARK)), dispatch = _getInternalHooks.dispatch;
            var value = _this.getValue();
            var mergedGetValueProps = getValueProps || function(val) {
                return (0, _definePropertyDefault.default)({}, valuePropName, val);
            }; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var originTriggerFunc = childProps[trigger];
            var control = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, childProps), mergedGetValueProps(value)); // Add trigger
            control[trigger] = function() {
                // Mark as touched
                _this.touched = true;
                _this.dirty = true;
                _this.triggerMetaEvent();
                var newValue;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                if (getValueFromEvent) newValue = getValueFromEvent.apply(void 0, args);
                else newValue = (0, _valueUtil.defaultGetValueFromEvent).apply(void 0, [
                    valuePropName
                ].concat(args));
                if (normalize) newValue = normalize(newValue, value, getFieldsValue(true));
                dispatch({
                    type: "updateValue",
                    namePath: namePath,
                    value: newValue
                });
                if (originTriggerFunc) originTriggerFunc.apply(void 0, args);
            }; // Add validateTrigger
            var validateTriggerList = (0, _typeUtil.toArray)(mergedValidateTrigger || []);
            validateTriggerList.forEach(function(triggerName) {
                // Wrap additional function of component, so that we can get latest value from store
                var originTrigger = control[triggerName];
                control[triggerName] = function() {
                    if (originTrigger) originTrigger.apply(void 0, arguments);
                     // Always use latest rules
                    var rules = _this.props.rules;
                    if (rules && rules.length) // We dispatch validate to root,
                    // since it will update related data with other field with same name
                    dispatch({
                        type: "validateField",
                        namePath: namePath,
                        triggerName: triggerName
                    });
                };
            });
            return control;
        };
        if (props.fieldContext) {
            var getInternalHooks = props.fieldContext.getInternalHooks;
            var _getInternalHooks2 = getInternalHooks((0, _fieldContext.HOOK_MARK)), initEntityValue = _getInternalHooks2.initEntityValue;
            initEntityValue((0, _assertThisInitializedDefault.default)(_this));
        }
        return _this;
    }
    (0, _createClassDefault.default)(Field, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
                this.mounted = true; // Register on init
                if (fieldContext) {
                    var getInternalHooks = fieldContext.getInternalHooks;
                    var _getInternalHooks3 = getInternalHooks((0, _fieldContext.HOOK_MARK)), registerField = _getInternalHooks3.registerField;
                    this.cancelRegisterFunc = registerField(this);
                } // One more render for component in case fields not ready
                if (shouldUpdate === true) this.reRender();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.cancelRegister();
                this.triggerMetaEvent(true);
                this.mounted = false;
            }
        },
        {
            key: "reRender",
            value: function reRender() {
                if (!this.mounted) return;
                this.forceUpdate();
            }
        },
        {
            key: "render",
            value: function render() {
                var resetCount = this.state.resetCount;
                var children = this.props.children;
                var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self
                var returnChildNode;
                if (isFunction) returnChildNode = child;
                else if (/*#__PURE__*/ _react.isValidElement(child)) returnChildNode = /*#__PURE__*/ _react.cloneElement(child, this.getControlled(child.props));
                else {
                    (0, _warningDefault.default)(!child, "`children` of Field is not validate ReactElement.");
                    returnChildNode = child;
                }
                return /*#__PURE__*/ _react.createElement(_react.Fragment, {
                    key: resetCount
                }, returnChildNode);
            }
        }
    ]);
    return Field;
}(_react.Component);
Field.contextType = (0, _fieldContextDefault.default);
Field.defaultProps = {
    trigger: "onChange",
    valuePropName: "value"
};
function WrapperField(_ref5) {
    var name = _ref5.name, restProps = (0, _objectWithoutPropertiesDefault.default)(_ref5, _excluded);
    var fieldContext = _react.useContext((0, _fieldContextDefault.default));
    var namePath = name !== undefined ? (0, _valueUtil.getNamePath)(name) : undefined;
    var key = "keep";
    if (!restProps.isListField) key = "_".concat((namePath || []).join("_"));
     // Warning if it's a directly list field.
    // We can still support multiple level field preserve.
    if (restProps.preserve === false && restProps.isListField && namePath.length <= 1) (0, _warningDefault.default)(false, "`preserve` should not apply on Form.List fields.");
    return /*#__PURE__*/ _react.createElement(Field, (0, _extendsDefault.default)({
        key: key,
        name: namePath
    }, restProps, {
        fieldContext: fieldContext
    }));
}
exports.default = WrapperField;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","rc-util/es/Children/toArray":"itYV7","rc-util/es/warning":"c7oua","react":"21dqq","./FieldContext":"edeC2","./utils/typeUtil":"klmYi","./utils/validateUtil":"2yO5k","./utils/valueUtil":"dtwSd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25tJ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLooseJs = require("./objectWithoutPropertiesLoose.js");
var _objectWithoutPropertiesLooseJsDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLooseJs);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = (0, _objectWithoutPropertiesLooseJsDefault.default)(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./objectWithoutPropertiesLoose.js":"adHgr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCmCj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHolesJs = require("./arrayWithoutHoles.js");
var _arrayWithoutHolesJsDefault = parcelHelpers.interopDefault(_arrayWithoutHolesJs);
var _iterableToArrayJs = require("./iterableToArray.js");
var _iterableToArrayJsDefault = parcelHelpers.interopDefault(_iterableToArrayJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableSpreadJs = require("./nonIterableSpread.js");
var _nonIterableSpreadJsDefault = parcelHelpers.interopDefault(_nonIterableSpreadJs);
function _toConsumableArray(arr) {
    return (0, _arrayWithoutHolesJsDefault.default)(arr) || (0, _iterableToArrayJsDefault.default)(arr) || (0, _unsupportedIterableToArrayJsDefault.default)(arr) || (0, _nonIterableSpreadJsDefault.default)();
}
exports.default = _toConsumableArray;

},{"./arrayWithoutHoles.js":"6kafd","./iterableToArray.js":"61qSr","./unsupportedIterableToArray.js":"1TZRB","./nonIterableSpread.js":"3qKv3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6kafd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArrayJsDefault.default)(arr);
}
exports.default = _arrayWithoutHoles;

},{"./arrayLikeToArray.js":"gvgr8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61qSr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qKv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNx1x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZyth":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iy3su":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drFw3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOfJs = require("./setPrototypeOf.js");
var _setPrototypeOfJsDefault = parcelHelpers.interopDefault(_setPrototypeOfJs);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) (0, _setPrototypeOfJsDefault.default)(subClass, superClass);
}
exports.default = _inherits;

},{"./setPrototypeOf.js":"3XDFA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XDFA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hp3mc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOfJs = require("./getPrototypeOf.js");
var _getPrototypeOfJsDefault = parcelHelpers.interopDefault(_getPrototypeOfJs);
var _isNativeReflectConstructJs = require("./isNativeReflectConstruct.js");
var _isNativeReflectConstructJsDefault = parcelHelpers.interopDefault(_isNativeReflectConstructJs);
var _possibleConstructorReturnJs = require("./possibleConstructorReturn.js");
var _possibleConstructorReturnJsDefault = parcelHelpers.interopDefault(_possibleConstructorReturnJs);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = (0, _isNativeReflectConstructJsDefault.default)();
    return function _createSuperInternal() {
        var Super = (0, _getPrototypeOfJsDefault.default)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOfJsDefault.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, _possibleConstructorReturnJsDefault.default)(this, result);
    };
}
exports.default = _createSuper;

},{"./getPrototypeOf.js":"edBWC","./isNativeReflectConstruct.js":"6LwWg","./possibleConstructorReturn.js":"jIBiB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edBWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LwWg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIBiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _assertThisInitializedJs = require("./assertThisInitialized.js");
var _assertThisInitializedJsDefault = parcelHelpers.interopDefault(_assertThisInitializedJs);
function _possibleConstructorReturn(self, call) {
    if (call && ((0, _typeofJsDefault.default)(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, _assertThisInitializedJsDefault.default)(self);
}
exports.default = _possibleConstructorReturn;

},{"./typeof.js":"i7HWY","./assertThisInitialized.js":"iy3su","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"itYV7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactIs = require("react-is");
function toArray(children) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ret = [];
    (0, _reactDefault.default).Children.forEach(children, function(child) {
        if ((child === undefined || child === null) && !option.keepEmpty) return;
        if (Array.isArray(child)) ret = ret.concat(toArray(child));
        else if ((0, _reactIs.isFragment)(child) && child.props) ret = ret.concat(toArray(child.props.children, option));
        else ret.push(child);
    });
    return ret;
}
exports.default = toArray;

},{"react":"21dqq","react-is":"7EuwB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7oua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warning", ()=>warning);
parcelHelpers.export(exports, "note", ()=>note);
parcelHelpers.export(exports, "resetWarned", ()=>resetWarned);
parcelHelpers.export(exports, "call", ()=>call);
parcelHelpers.export(exports, "warningOnce", ()=>warningOnce);
parcelHelpers.export(exports, "noteOnce", ()=>noteOnce);
/* eslint-disable no-console */ var warned = {};
function warning(valid, message) {
    // Support uglify
    if (!valid && console !== undefined) console.error("Warning: ".concat(message));
}
function note(valid, message) {
    // Support uglify
    if (!valid && console !== undefined) console.warn("Note: ".concat(message));
}
function resetWarned() {
    warned = {};
}
function call(method, valid, message) {
    if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
    }
}
function warningOnce(valid, message) {
    call(warning, valid, message);
}
function noteOnce(valid, message) {
    call(note, valid, message);
}
exports.default = warningOnce; /* eslint-enable */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edeC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HOOK_MARK", ()=>HOOK_MARK);
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _react = require("react");
var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS"; // eslint-disable-next-line @typescript-eslint/no-explicit-any
var warningFunc = function warningFunc() {
    (0, _warningDefault.default)(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var Context = /*#__PURE__*/ _react.createContext({
    getFieldValue: warningFunc,
    getFieldsValue: warningFunc,
    getFieldError: warningFunc,
    getFieldWarning: warningFunc,
    getFieldsError: warningFunc,
    isFieldsTouched: warningFunc,
    isFieldTouched: warningFunc,
    isFieldValidating: warningFunc,
    isFieldsValidating: warningFunc,
    resetFields: warningFunc,
    setFields: warningFunc,
    setFieldValue: warningFunc,
    setFieldsValue: warningFunc,
    validateFields: warningFunc,
    submit: warningFunc,
    getInternalHooks: function getInternalHooks() {
        warningFunc();
        return {
            dispatch: warningFunc,
            initEntityValue: warningFunc,
            registerField: warningFunc,
            useSubscribe: warningFunc,
            setInitialValues: warningFunc,
            destroyForm: warningFunc,
            setCallbacks: warningFunc,
            registerWatch: warningFunc,
            getFields: warningFunc,
            setValidateMessages: warningFunc,
            setPreserve: warningFunc,
            getInitialValue: warningFunc
        };
    }
});
exports.default = Context;

},{"rc-util/es/warning":"c7oua","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"klmYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toArray", ()=>toArray);
function toArray(value) {
    if (value === undefined || value === null) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2yO5k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateRules", ()=>validateRules);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _regeneratorRuntime = require("@babel/runtime/helpers/esm/regeneratorRuntime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _asyncToGenerator = require("@babel/runtime/helpers/esm/asyncToGenerator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _asyncValidator = require("async-validator");
var _asyncValidatorDefault = parcelHelpers.interopDefault(_asyncValidator);
var _react = require("react");
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _messages = require("./messages");
var _valueUtil = require("./valueUtil"); // Remove incorrect original ts define
var AsyncValidator = (0, _asyncValidatorDefault.default);
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */ function replaceMessage(template, kv) {
    return template.replace(/\$\{\w+\}/g, function(str) {
        var key = str.slice(2, -1);
        return kv[key];
    });
}
var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
function validateRule(_x, _x2, _x3, _x4, _x5) {
    return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */ function _validateRule() {
    _validateRule = (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee2(name, value, rule, options, messageVariables) {
        var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
        return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee2$(_context2) {
            while(true)switch(_context2.prev = _context2.next){
                case 0:
                    cloneRule = (0, _objectSpread2Default.default)({}, rule); // Bug of `async-validator`
                    // https://github.com/react-component/field-form/issues/316
                    // https://github.com/react-component/field-form/issues/313
                    delete cloneRule.ruleIndex;
                    if (cloneRule.validator) {
                        originValidator = cloneRule.validator;
                        cloneRule.validator = function() {
                            try {
                                return originValidator.apply(void 0, arguments);
                            } catch (error) {
                                console.error(error);
                                return Promise.reject(CODE_LOGIC_ERROR);
                            }
                        };
                    } // We should special handle array validate
                    subRuleField = null;
                    if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
                        subRuleField = cloneRule.defaultField;
                        delete cloneRule.defaultField;
                    }
                    validator = new AsyncValidator((0, _definePropertyDefault.default)({}, name, [
                        cloneRule
                    ]));
                    messages = (0, _valueUtil.setValues)({}, (0, _messages.defaultValidateMessages), options.validateMessages);
                    validator.messages(messages);
                    result = [];
                    _context2.prev = 9;
                    _context2.next = 12;
                    return Promise.resolve(validator.validate((0, _definePropertyDefault.default)({}, name, value), (0, _objectSpread2Default.default)({}, options)));
                case 12:
                    _context2.next = 17;
                    break;
                case 14:
                    _context2.prev = 14;
                    _context2.t0 = _context2["catch"](9);
                    if (_context2.t0.errors) result = _context2.t0.errors.map(function(_ref4, index) {
                        var message = _ref4.message;
                        var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                        return /*#__PURE__*/ _react.isValidElement(mergedMessage) ? /*#__PURE__*/ // Wrap ReactNode with `key`
                        _react.cloneElement(mergedMessage, {
                            key: "error_".concat(index)
                        }) : mergedMessage;
                    });
                case 17:
                    if (!(!result.length && subRuleField)) {
                        _context2.next = 22;
                        break;
                    }
                    _context2.next = 20;
                    return Promise.all(value.map(function(subValue, i) {
                        return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
                    }));
                case 20:
                    subResults = _context2.sent;
                    return _context2.abrupt("return", subResults.reduce(function(prev, errors) {
                        return [].concat((0, _toConsumableArrayDefault.default)(prev), (0, _toConsumableArrayDefault.default)(errors));
                    }, []));
                case 22:
                    // Replace message with variables
                    kv = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, rule), {}, {
                        name: name,
                        enum: (rule.enum || []).join(", ")
                    }, messageVariables);
                    fillVariableResult = result.map(function(error) {
                        if (typeof error === "string") return replaceMessage(error, kv);
                        return error;
                    });
                    return _context2.abrupt("return", fillVariableResult);
                case 25:
                case "end":
                    return _context2.stop();
            }
        }, _callee2, null, [
            [
                9,
                14
            ]
        ]);
    }));
    return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
    var name = namePath.join("."); // Fill rule with context
    var filledRules = rules.map(function(currentRule, ruleIndex) {
        var originValidatorFunc = currentRule.validator;
        var cloneRule = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, currentRule), {}, {
            ruleIndex: ruleIndex
        }); // Replace validator if needed
        if (originValidatorFunc) cloneRule.validator = function(rule, val, callback) {
            var hasPromise = false; // Wrap callback only accept when promise not provided
            var wrappedCallback = function wrappedCallback() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                // Wait a tick to make sure return type is a promise
                Promise.resolve().then(function() {
                    (0, _warningDefault.default)(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
                    if (!hasPromise) callback.apply(void 0, args);
                });
            }; // Get promise
            var promise = originValidatorFunc(rule, val, wrappedCallback);
            hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
            /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */ (0, _warningDefault.default)(hasPromise, "`callback` is deprecated. Please return a promise instead.");
            if (hasPromise) promise.then(function() {
                callback();
            }).catch(function(err) {
                callback(err || " ");
            });
        };
        return cloneRule;
    }).sort(function(_ref, _ref2) {
        var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
        var w2 = _ref2.warningOnly, i2 = _ref2.ruleIndex;
        if (!!w1 === !!w2) // Let keep origin order
        return i1 - i2;
        if (w1) return 1;
        return -1;
    }); // Do validate rules
    var summaryPromise;
    if (validateFirst === true) // >>>>> Validate by serialization
    summaryPromise = new Promise(/*#__PURE__*/ function() {
        var _ref3 = (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee(resolve, reject) {
            var i, rule, errors;
            return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        i = 0;
                    case 1:
                        if (!(i < filledRules.length)) {
                            _context.next = 12;
                            break;
                        }
                        rule = filledRules[i];
                        _context.next = 5;
                        return validateRule(name, value, rule, options, messageVariables);
                    case 5:
                        errors = _context.sent;
                        if (!errors.length) {
                            _context.next = 9;
                            break;
                        }
                        reject([
                            {
                                errors: errors,
                                rule: rule
                            }
                        ]);
                        return _context.abrupt("return");
                    case 9:
                        i += 1;
                        _context.next = 1;
                        break;
                    case 12:
                        /* eslint-enable */ resolve([]);
                    case 13:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x6, _x7) {
            return _ref3.apply(this, arguments);
        };
    }());
    else {
        // >>>>> Validate by parallel
        var rulePromises = filledRules.map(function(rule) {
            return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
                return {
                    errors: errors,
                    rule: rule
                };
            });
        });
        summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
            // Always change to rejection for Field to catch
            return Promise.reject(errors);
        });
    } // Internal catch error to avoid console error log.
    summaryPromise.catch(function(e) {
        return e;
    });
    return summaryPromise;
}
function finishOnAllFailed(_x8) {
    return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
    _finishOnAllFailed = (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee3(rulePromises) {
        return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee3$(_context3) {
            while(true)switch(_context3.prev = _context3.next){
                case 0:
                    return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
                        var _ref5;
                        var errors = (_ref5 = []).concat.apply(_ref5, (0, _toConsumableArrayDefault.default)(errorsList));
                        return errors;
                    }));
                case 1:
                case "end":
                    return _context3.stop();
            }
        }, _callee3);
    }));
    return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
    return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
    _finishOnFirstFailed = (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee4(rulePromises) {
        var count;
        return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee4$(_context4) {
            while(true)switch(_context4.prev = _context4.next){
                case 0:
                    count = 0;
                    return _context4.abrupt("return", new Promise(function(resolve) {
                        rulePromises.forEach(function(promise) {
                            promise.then(function(ruleError) {
                                if (ruleError.errors.length) resolve([
                                    ruleError
                                ]);
                                count += 1;
                                if (count === rulePromises.length) resolve([]);
                            });
                        });
                    }));
                case 2:
                case "end":
                    return _context4.stop();
            }
        }, _callee4);
    }));
    return _finishOnFirstFailed.apply(this, arguments);
}

},{"@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/regeneratorRuntime":"8VPP1","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/asyncToGenerator":"5Tzvv","async-validator":"dz4uM","react":"21dqq","rc-util/es/warning":"c7oua","./messages":"7dCqc","./valueUtil":"dtwSd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VPP1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
function _regeneratorRuntime() {
    "use strict";
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() {
        return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return generator._invoke = function(innerFn, self, context) {
            var state = "suspendedStart";
            return function(method, arg) {
                if ("executing" === state) throw new Error("Generator is already running");
                if ("completed" === state) {
                    if ("throw" === method) throw arg;
                    return doneResult();
                }
                for(context.method = method, context.arg = arg;;){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if ("next" === context.method) context.sent = context._sent = context.arg;
                    else if ("throw" === context.method) {
                        if ("suspendedStart" === state) throw state = "completed", context.arg;
                        context.dispatchException(context.arg);
                    } else "return" === context.method && context.abrupt("return", context.arg);
                    state = "executing";
                    var record = tryCatch(innerFn, self, context);
                    if ("normal" === record.type) {
                        if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    }
                    "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                }
            };
        }(innerFn, self, context), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == (0, _typeofJsDefault.default)(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        this._invoke = function(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (undefined === method) {
            if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;){
                        if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    }
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        "catch": function _catch(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}
exports.default = _regeneratorRuntime;

},{"./typeof.js":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Tzvv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dz4uM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Schema);
var process = require("process");
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
/* eslint no-console:0 */ var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime
if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") warning = function warning(type, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
        if (errors.every(function(e) {
            return typeof e === "string";
        })) console.warn(type, errors);
    }
};
function convertFieldsError(errors) {
    if (!errors || !errors.length) return null;
    var fields = {};
    errors.forEach(function(error) {
        var field = error.field;
        fields[field] = fields[field] || [];
        fields[field].push(error);
    });
    return fields;
}
function format(template) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    var i = 0;
    var len = args.length;
    if (typeof template === "function") return template.apply(null, args);
    if (typeof template === "string") {
        var str = template.replace(formatRegExp, function(x) {
            if (x === "%%") return "%";
            if (i >= len) return x;
            switch(x){
                case "%s":
                    return String(args[i++]);
                case "%d":
                    return Number(args[i++]);
                case "%j":
                    try {
                        return JSON.stringify(args[i++]);
                    } catch (_) {
                        return "[Circular]";
                    }
                    break;
                default:
                    return x;
            }
        });
        return str;
    }
    return template;
}
function isNativeStringType(type) {
    return type === "string" || type === "url" || type === "hex" || type === "email" || type === "date" || type === "pattern";
}
function isEmptyValue(value, type) {
    if (value === undefined || value === null) return true;
    if (type === "array" && Array.isArray(value) && !value.length) return true;
    if (isNativeStringType(type) && typeof value === "string" && !value) return true;
    return false;
}
function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
        results.push.apply(results, errors || []);
        total++;
        if (total === arrLength) callback(results);
    }
    arr.forEach(function(a) {
        func(a, count);
    });
}
function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;
    function next(errors) {
        if (errors && errors.length) {
            callback(errors);
            return;
        }
        var original = index;
        index = index + 1;
        if (original < arrLength) func(arr[original], next);
        else callback([]);
    }
    next([]);
}
function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k) {
        ret.push.apply(ret, objArr[k] || []);
    });
    return ret;
}
var AsyncValidationError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(AsyncValidationError, _Error);
    function AsyncValidationError(errors, fields) {
        var _this;
        _this = _Error.call(this, "Async Validation Error") || this;
        _this.errors = errors;
        _this.fields = fields;
        return _this;
    }
    return AsyncValidationError;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
        var _pending = new Promise(function(resolve, reject) {
            var next = function next(errors) {
                callback(errors);
                return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
            };
            var flattenArr = flattenObjArr(objArr);
            asyncSerialArray(flattenArr, func, next);
        });
        _pending["catch"](function(e) {
            return e;
        });
        return _pending;
    }
    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
        var next = function next(errors) {
            results.push.apply(results, errors);
            total++;
            if (total === objArrLength) {
                callback(results);
                return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
            }
        };
        if (!objArrKeys.length) {
            callback(results);
            resolve(source);
        }
        objArrKeys.forEach(function(key) {
            var arr = objArr[key];
            if (firstFields.indexOf(key) !== -1) asyncSerialArray(arr, func, next);
            else asyncParallelArray(arr, func, next);
        });
    });
    pending["catch"](function(e) {
        return e;
    });
    return pending;
}
function isErrorObj(obj) {
    return !!(obj && obj.message !== undefined);
}
function getValue(value, path) {
    var v = value;
    for(var i = 0; i < path.length; i++){
        if (v == undefined) return v;
        v = v[path[i]];
    }
    return v;
}
function complementError(rule, source) {
    return function(oe) {
        var fieldValue;
        if (rule.fullFields) fieldValue = getValue(source, rule.fullFields);
        else fieldValue = source[oe.field || rule.fullField];
        if (isErrorObj(oe)) {
            oe.field = oe.field || rule.fullField;
            oe.fieldValue = fieldValue;
            return oe;
        }
        return {
            message: typeof oe === "function" ? oe() : oe,
            fieldValue: fieldValue,
            field: oe.field || rule.fullField
        };
    };
}
function deepMerge(target, source) {
    if (source) {
        for(var s in source)if (source.hasOwnProperty(s)) {
            var value = source[s];
            if (typeof value === "object" && typeof target[s] === "object") target[s] = _extends({}, target[s], value);
            else target[s] = value;
        }
    }
    return target;
}
var required$1 = function required(rule, value, source, errors, options, type) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) errors.push(format(options.messages.required, rule.fullField));
};
/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */ var whitespace = function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") errors.push(format(options.messages.whitespace, rule.fullField));
};
// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = function() {
    if (urlReg) return urlReg;
    var word = "[a-fA-F\\d:]";
    var b = function b(options) {
        return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
    };
    var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    var v6seg = "[a-fA-F\\d]{1,4}";
    var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful
    var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
    var v4exact = new RegExp("^" + v4 + "$");
    var v6exact = new RegExp("^" + v6 + "$");
    var ip = function ip(options) {
        return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
    };
    ip.v4 = function(options) {
        return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
    };
    ip.v6 = function(options) {
        return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = "(?:\\S+(?::\\S*)?@)?";
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = "(?::\\d{2,5})?";
    var path = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
    urlReg = new RegExp("(?:^" + regex + "$)", "i");
    return urlReg;
};
/* eslint max-len:0 */ var pattern$2 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
    integer: function integer(value) {
        return types.number(value) && parseInt(value, 10) === value;
    },
    "float": function float(value) {
        return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
        return Array.isArray(value);
    },
    regexp: function regexp(value) {
        if (value instanceof RegExp) return true;
        try {
            return new RegExp(value), true;
        } catch (e) {
            return false;
        }
    },
    date: function date(value) {
        return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
    },
    number: function number(value) {
        if (isNaN(value)) return false;
        return typeof value === "number";
    },
    object: function object(value) {
        return typeof value === "object" && !types.array(value);
    },
    method: function method(value) {
        return typeof value === "function";
    },
    email: function email(value) {
        return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
    },
    url: function url(value) {
        return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
        return typeof value === "string" && !!value.match(pattern$2.hex);
    }
};
var type$1 = function type(rule, value, source, errors, options) {
    if (rule.required && value === undefined) {
        required$1(rule, value, source, errors, options);
        return;
    }
    var custom = [
        "integer",
        "float",
        "array",
        "regexp",
        "object",
        "method",
        "email",
        "number",
        "date",
        "url",
        "hex"
    ];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
        if (!types[ruleType](value)) errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
         // straight typeof check
    } else if (ruleType && typeof value !== rule.type) errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
};
var range = function range(rule, value, source, errors, options) {
    var len = typeof rule.len === "number";
    var min = typeof rule.min === "number";
    var max = typeof rule.max === "number"; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === "number";
    var str = typeof value === "string";
    var arr = Array.isArray(value);
    if (num) key = "number";
    else if (str) key = "string";
    else if (arr) key = "array";
     // if the value is not of a supported type for range validation
    // the validation rule rule should use the
    // type property to also test for a particular type
    if (!key) return false;
    if (arr) val = value.length;
    if (str) // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, "_").length;
    if (len) {
        if (val !== rule.len) errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    } else if (min && !max && val < rule.min) errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    else if (max && !min && val > rule.max) errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    else if (min && max && (val < rule.min || val > rule.max)) errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
    if (rule[ENUM$1].indexOf(value) === -1) errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
    if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
            // if a RegExp instance is passed, reset `lastIndex` in case its `global`
            // flag is accidentally set to `true`, which in a validation scenario
            // is not necessary and the result might be misleading
            rule.pattern.lastIndex = 0;
            if (!rule.pattern.test(value)) errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        } else if (typeof rule.pattern === "string") {
            var _pattern = new RegExp(rule.pattern);
            if (!_pattern.test(value)) errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
    }
};
var rules = {
    required: required$1,
    whitespace: whitespace,
    type: type$1,
    range: range,
    "enum": enumerable$1,
    pattern: pattern$1
};
var string = function string(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, "string") && !rule.required) return callback();
        rules.required(rule, value, source, errors, options, "string");
        if (!isEmptyValue(value, "string")) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
            rules.pattern(rule, value, source, errors, options);
            if (rule.whitespace === true) rules.whitespace(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var method = function method(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var number = function number(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (value === "") value = undefined;
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var _boolean = function _boolean(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var regexp = function regexp(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value)) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var integer = function integer(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var floatFn = function floatFn(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var array = function array(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if ((value === undefined || value === null) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options, "array");
        if (value !== undefined && value !== null) {
            rules.type(rule, value, source, errors, options);
            rules.range(rule, value, source, errors, options);
        }
    }
    callback(errors);
};
var object = function object(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var ENUM = "enum";
var enumerable = function enumerable(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (value !== undefined) rules[ENUM](rule, value, source, errors, options);
    }
    callback(errors);
};
var pattern = function pattern(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, "string") && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, "string")) rules.pattern(rule, value, source, errors, options);
    }
    callback(errors);
};
var date = function date(rule, value, callback, source, options) {
    // console.log('integer rule called %j', rule);
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);
    if (validate) {
        if (isEmptyValue(value, "date") && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
        if (!isEmptyValue(value, "date")) {
            var dateObject;
            if (value instanceof Date) dateObject = value;
            else dateObject = new Date(value);
            rules.type(rule, dateObject, source, errors, options);
            if (dateObject) rules.range(rule, dateObject.getTime(), source, errors, options);
        }
    }
    callback(errors);
};
var required = function required(rule, value, callback, source, options) {
    var errors = [];
    var type = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type);
    callback(errors);
};
var type = function type(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value, ruleType) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options, ruleType);
        if (!isEmptyValue(value, ruleType)) rules.type(rule, value, source, errors, options);
    }
    callback(errors);
};
var any = function any(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) return callback();
        rules.required(rule, value, source, errors, options);
    }
    callback(errors);
};
var validators = {
    string: string,
    method: method,
    number: number,
    "boolean": _boolean,
    regexp: regexp,
    integer: integer,
    "float": floatFn,
    array: array,
    object: object,
    "enum": enumerable,
    pattern: pattern,
    date: date,
    url: type,
    hex: type,
    email: type,
    required: required,
    any: any
};
function newMessages() {
    return {
        "default": "Validation error on field %s",
        required: "%s is required",
        "enum": "%s must be one of %s",
        whitespace: "%s cannot be empty",
        date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
        },
        types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            "boolean": "%s is not a %s",
            integer: "%s is not an %s",
            "float": "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
        },
        string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
        },
        number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
        },
        array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
        },
        pattern: {
            mismatch: "%s value %s does not match pattern %s"
        },
        clone: function clone() {
            var cloned = JSON.parse(JSON.stringify(this));
            cloned.clone = this.clone;
            return cloned;
        }
    };
}
var messages = newMessages();
/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */ var Schema = /*#__PURE__*/ function() {
    // ========================= Static =========================
    // ======================== Instance ========================
    function Schema(descriptor) {
        this.rules = null;
        this._messages = messages;
        this.define(descriptor);
    }
    var _proto = Schema.prototype;
    _proto.define = function define(rules) {
        var _this = this;
        if (!rules) throw new Error("Cannot configure a schema with no rules");
        if (typeof rules !== "object" || Array.isArray(rules)) throw new Error("Rules must be an object");
        this.rules = {};
        Object.keys(rules).forEach(function(name) {
            var item = rules[name];
            _this.rules[name] = Array.isArray(item) ? item : [
                item
            ];
        });
    };
    _proto.messages = function messages(_messages) {
        if (_messages) this._messages = deepMerge(newMessages(), _messages);
        return this._messages;
    };
    _proto.validate = function validate(source_, o, oc) {
        var _this2 = this;
        if (o === void 0) o = {};
        if (oc === void 0) oc = function oc() {};
        var source = source_;
        var options = o;
        var callback = oc;
        if (typeof options === "function") {
            callback = options;
            options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
            if (callback) callback(null, source);
            return Promise.resolve(source);
        }
        function complete(results) {
            var errors = [];
            var fields = {};
            function add(e) {
                if (Array.isArray(e)) {
                    var _errors;
                    errors = (_errors = errors).concat.apply(_errors, e);
                } else errors.push(e);
            }
            for(var i = 0; i < results.length; i++)add(results[i]);
            if (!errors.length) callback(null, source);
            else {
                fields = convertFieldsError(errors);
                callback(errors, fields);
            }
        }
        if (options.messages) {
            var messages$1 = this.messages();
            if (messages$1 === messages) messages$1 = newMessages();
            deepMerge(messages$1, options.messages);
            options.messages = messages$1;
        } else options.messages = this.messages();
        var series = {};
        var keys = options.keys || Object.keys(this.rules);
        keys.forEach(function(z) {
            var arr = _this2.rules[z];
            var value = source[z];
            arr.forEach(function(r) {
                var rule = r;
                if (typeof rule.transform === "function") {
                    if (source === source_) source = _extends({}, source);
                    value = source[z] = rule.transform(value);
                }
                if (typeof rule === "function") rule = {
                    validator: rule
                };
                else rule = _extends({}, rule);
                 // Fill validator. Skip if nothing need to validate
                rule.validator = _this2.getValidationMethod(rule);
                if (!rule.validator) return;
                rule.field = z;
                rule.fullField = rule.fullField || z;
                rule.type = _this2.getType(rule);
                series[z] = series[z] || [];
                series[z].push({
                    rule: rule,
                    value: value,
                    source: source,
                    field: z
                });
            });
        });
        var errorFields = {};
        return asyncMap(series, options, function(data, doIt) {
            var rule = data.rule;
            var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
            deep = deep && (rule.required || !rule.required && data.value);
            rule.field = data.field;
            function addFullField(key, schema) {
                return _extends({}, schema, {
                    fullField: rule.fullField + "." + key,
                    fullFields: rule.fullFields ? [].concat(rule.fullFields, [
                        key
                    ]) : [
                        key
                    ]
                });
            }
            function cb(e) {
                if (e === void 0) e = [];
                var errorList = Array.isArray(e) ? e : [
                    e
                ];
                if (!options.suppressWarning && errorList.length) Schema.warning("async-validator:", errorList);
                if (errorList.length && rule.message !== undefined) errorList = [].concat(rule.message);
                 // Fill error info
                var filledErrors = errorList.map(complementError(rule, source));
                if (options.first && filledErrors.length) {
                    errorFields[rule.field] = 1;
                    return doIt(filledErrors);
                }
                if (!deep) doIt(filledErrors);
                else {
                    // if rule is required but the target object
                    // does not exist fail at the rule level and don't
                    // go deeper
                    if (rule.required && !data.value) {
                        if (rule.message !== undefined) filledErrors = [].concat(rule.message).map(complementError(rule, source));
                        else if (options.error) filledErrors = [
                            options.error(rule, format(options.messages.required, rule.field))
                        ];
                        return doIt(filledErrors);
                    }
                    var fieldsSchema = {};
                    if (rule.defaultField) Object.keys(data.value).map(function(key) {
                        fieldsSchema[key] = rule.defaultField;
                    });
                    fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                    var paredFieldsSchema = {};
                    Object.keys(fieldsSchema).forEach(function(field) {
                        var fieldSchema = fieldsSchema[field];
                        var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [
                            fieldSchema
                        ];
                        paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                    });
                    var schema = new Schema(paredFieldsSchema);
                    schema.messages(options.messages);
                    if (data.rule.options) {
                        data.rule.options.messages = options.messages;
                        data.rule.options.error = options.error;
                    }
                    schema.validate(data.value, data.rule.options || options, function(errs) {
                        var finalErrors = [];
                        if (filledErrors && filledErrors.length) finalErrors.push.apply(finalErrors, filledErrors);
                        if (errs && errs.length) finalErrors.push.apply(finalErrors, errs);
                        doIt(finalErrors.length ? finalErrors : null);
                    });
                }
            }
            var res;
            if (rule.asyncValidator) res = rule.asyncValidator(rule, data.value, cb, data.source, options);
            else if (rule.validator) {
                try {
                    res = rule.validator(rule, data.value, cb, data.source, options);
                } catch (error) {
                    console.error == null || console.error(error); // rethrow to report error
                    if (!options.suppressValidatorError) setTimeout(function() {
                        throw error;
                    }, 0);
                    cb(error.message);
                }
                if (res === true) cb();
                else if (res === false) cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
                else if (res instanceof Array) cb(res);
                else if (res instanceof Error) cb(res.message);
            }
            if (res && res.then) res.then(function() {
                return cb();
            }, function(e) {
                return cb(e);
            });
        }, function(results) {
            complete(results);
        }, source);
    };
    _proto.getType = function getType(rule) {
        if (rule.type === undefined && rule.pattern instanceof RegExp) rule.type = "pattern";
        if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) throw new Error(format("Unknown rule type %s", rule.type));
        return rule.type || "string";
    };
    _proto.getValidationMethod = function getValidationMethod(rule) {
        if (typeof rule.validator === "function") return rule.validator;
        var keys = Object.keys(rule);
        var messageIndex = keys.indexOf("message");
        if (messageIndex !== -1) keys.splice(messageIndex, 1);
        if (keys.length === 1 && keys[0] === "required") return validators.required;
        return validators[this.getType(rule)] || undefined;
    };
    return Schema;
}();
Schema.register = function register(type, validator) {
    if (typeof validator !== "function") throw new Error("Cannot register a validator by type, validator is not a function");
    validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

},{"process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dCqc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultValidateMessages", ()=>defaultValidateMessages);
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
        format: "'${name}' is invalid for format date",
        parse: "'${name}' could not be parsed as date",
        invalid: "'${name}' is invalid date"
    },
    types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
    },
    string: {
        len: "'${name}' must be exactly ${len} characters",
        min: "'${name}' must be at least ${min} characters",
        max: "'${name}' cannot be longer than ${max} characters",
        range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
        len: "'${name}' must equal ${len}",
        min: "'${name}' cannot be less than ${min}",
        max: "'${name}' cannot be greater than ${max}",
        range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
        len: "'${name}' must be exactly ${len} in length",
        min: "'${name}' cannot be less than ${min} in length",
        max: "'${name}' cannot be greater than ${max} in length",
        range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {
        mismatch: "'${name}' does not match pattern ${pattern}"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtwSd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */ parcelHelpers.export(exports, "getNamePath", ()=>getNamePath);
parcelHelpers.export(exports, "getValue", ()=>getValue);
parcelHelpers.export(exports, "setValue", ()=>setValue);
parcelHelpers.export(exports, "cloneByNamePathList", ()=>cloneByNamePathList);
parcelHelpers.export(exports, "containsNamePath", ()=>containsNamePath);
parcelHelpers.export(exports, "setValues", ()=>setValues);
parcelHelpers.export(exports, "matchNamePath", ()=>matchNamePath);
parcelHelpers.export(exports, "isSimilar", ()=>isSimilar);
parcelHelpers.export(exports, "defaultGetValueFromEvent", ()=>defaultGetValueFromEvent);
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */ parcelHelpers.export(exports, "move", ()=>move);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _get = require("rc-util/es/utils/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _set = require("rc-util/es/utils/set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _typeUtil = require("./typeUtil");
var _cloneDeep = require("../utils/cloneDeep");
var _cloneDeepDefault = parcelHelpers.interopDefault(_cloneDeep);
function getNamePath(path) {
    return (0, _typeUtil.toArray)(path);
}
function getValue(store, namePath) {
    var value = (0, _getDefault.default)(store, namePath);
    return value;
}
function setValue(store, namePath, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var newStore = (0, _setDefault.default)(store, namePath, value, removeIfUndefined);
    return newStore;
}
function cloneByNamePathList(store, namePathList) {
    var newStore = {};
    namePathList.forEach(function(namePath) {
        var value = getValue(store, namePath);
        newStore = setValue(newStore, namePath, value);
    });
    return newStore;
}
function containsNamePath(namePathList, namePath) {
    return namePathList && namePathList.some(function(path) {
        return matchNamePath(path, namePath);
    });
}
function isObject(obj) {
    return (0, _typeofDefault.default)(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */ function internalSetValues(store, values) {
    var newStore = Array.isArray(store) ? (0, _toConsumableArrayDefault.default)(store) : (0, _objectSpread2Default.default)({}, store);
    if (!values) return newStore;
    Object.keys(values).forEach(function(key) {
        var prevValue = newStore[key];
        var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value
        var recursive = isObject(prevValue) && isObject(value);
        newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : (0, _cloneDeepDefault.default)(value); // Clone deep for arrays
    });
    return newStore;
}
function setValues(store) {
    for(var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)restValues[_key - 1] = arguments[_key];
    return restValues.reduce(function(current, newStore) {
        return internalSetValues(current, newStore);
    }, store);
}
function matchNamePath(namePath, changedNamePath) {
    if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) return false;
    return namePath.every(function(nameUnit, i) {
        return changedNamePath[i] === nameUnit;
    });
}
function isSimilar(source, target) {
    if (source === target) return true;
    if (!source && target || source && !target) return false;
    if (!source || !target || (0, _typeofDefault.default)(source) !== "object" || (0, _typeofDefault.default)(target) !== "object") return false;
    var sourceKeys = Object.keys(source);
    var targetKeys = Object.keys(target);
    var keys = new Set([].concat(sourceKeys, targetKeys));
    return (0, _toConsumableArrayDefault.default)(keys).every(function(key) {
        var sourceValue = source[key];
        var targetValue = target[key];
        if (typeof sourceValue === "function" && typeof targetValue === "function") return true;
        return sourceValue === targetValue;
    });
}
function defaultGetValueFromEvent(valuePropName) {
    var event = arguments.length <= 1 ? undefined : arguments[1];
    if (event && event.target && (0, _typeofDefault.default)(event.target) === "object" && valuePropName in event.target) return event.target[valuePropName];
    return event;
}
function move(array, moveIndex, toIndex) {
    var length = array.length;
    if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) return array;
    var item = array[moveIndex];
    var diff = moveIndex - toIndex;
    if (diff > 0) // move left
    return [].concat((0, _toConsumableArrayDefault.default)(array.slice(0, toIndex)), [
        item
    ], (0, _toConsumableArrayDefault.default)(array.slice(toIndex, moveIndex)), (0, _toConsumableArrayDefault.default)(array.slice(moveIndex + 1, length)));
    if (diff < 0) // move right
    return [].concat((0, _toConsumableArrayDefault.default)(array.slice(0, moveIndex)), (0, _toConsumableArrayDefault.default)(array.slice(moveIndex + 1, toIndex + 1)), [
        item
    ], (0, _toConsumableArrayDefault.default)(array.slice(toIndex + 1, length)));
    return array;
}

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/typeof":"i7HWY","rc-util/es/utils/get":"b4y5F","rc-util/es/utils/set":"jx2yS","./typeUtil":"klmYi","../utils/cloneDeep":"8xhrn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4y5F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function get(entity, path) {
    var current = entity;
    for(var i = 0; i < path.length; i += 1){
        if (current === null || current === undefined) return undefined;
        current = current[path[i]];
    }
    return current;
}
exports.default = get;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jx2yS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toArray = require("@babel/runtime/helpers/esm/toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _get = require("./get");
var _getDefault = parcelHelpers.interopDefault(_get);
function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) return value;
    var _paths = (0, _toArrayDefault.default)(paths), path = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path === "number") clone = [];
    else if (Array.isArray(entity)) clone = (0, _toConsumableArrayDefault.default)(entity);
    else clone = (0, _objectSpread2Default.default)({}, entity);
     // Delete prop if `removeIfUndefined` and value is undefined
    if (removeIfUndefined && value === undefined && restPath.length === 1) delete clone[path][restPath[0]];
    else clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
    return clone;
}
function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // Do nothing if `removeIfUndefined` and parent object not exist
    if (paths.length && removeIfUndefined && value === undefined && !(0, _getDefault.default)(entity, paths.slice(0, -1))) return entity;
    return internalSet(entity, paths, value, removeIfUndefined);
}
exports.default = set;

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/toArray":"cbR4G","./get":"b4y5F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cbR4G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHolesJs = require("./arrayWithHoles.js");
var _arrayWithHolesJsDefault = parcelHelpers.interopDefault(_arrayWithHolesJs);
var _iterableToArrayJs = require("./iterableToArray.js");
var _iterableToArrayJsDefault = parcelHelpers.interopDefault(_iterableToArrayJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableRestJs = require("./nonIterableRest.js");
var _nonIterableRestJsDefault = parcelHelpers.interopDefault(_nonIterableRestJs);
function _toArray(arr) {
    return (0, _arrayWithHolesJsDefault.default)(arr) || (0, _iterableToArrayJsDefault.default)(arr) || (0, _unsupportedIterableToArrayJsDefault.default)(arr) || (0, _nonIterableRestJsDefault.default)();
}
exports.default = _toArray;

},{"./arrayWithHoles.js":"jY0ns","./iterableToArray.js":"61qSr","./unsupportedIterableToArray.js":"1TZRB","./nonIterableRest.js":"cUFPt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xhrn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
function cloneDeep(val) {
    if (Array.isArray(val)) return cloneArrayDeep(val);
    else if ((0, _typeofDefault.default)(val) === "object" && val !== null) return cloneObjectDeep(val);
    return val;
}
function cloneObjectDeep(val) {
    if (Object.getPrototypeOf(val) === Object.prototype) {
        var res = {};
        for(var key in val)res[key] = cloneDeep(val[key]);
        return res;
    }
    return val;
}
function cloneArrayDeep(val) {
    return val.map(function(item) {
        return cloneDeep(item);
    });
}
exports.default = cloneDeep;

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUxbS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _react = require("react");
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _fieldContext = require("./FieldContext");
var _fieldContextDefault = parcelHelpers.interopDefault(_fieldContext);
var _field = require("./Field");
var _fieldDefault = parcelHelpers.interopDefault(_field);
var _valueUtil = require("./utils/valueUtil");
var _listContext = require("./ListContext");
var _listContextDefault = parcelHelpers.interopDefault(_listContext);
var List = function List(_ref) {
    var name = _ref.name, initialValue = _ref.initialValue, children = _ref.children, rules = _ref.rules, validateTrigger = _ref.validateTrigger;
    var context = _react.useContext((0, _fieldContextDefault.default));
    var keyRef = _react.useRef({
        keys: [],
        id: 0
    });
    var keyManager = keyRef.current;
    var prefixName = _react.useMemo(function() {
        var parentPrefixName = (0, _valueUtil.getNamePath)(context.prefixName) || [];
        return [].concat((0, _toConsumableArrayDefault.default)(parentPrefixName), (0, _toConsumableArrayDefault.default)((0, _valueUtil.getNamePath)(name)));
    }, [
        context.prefixName,
        name
    ]);
    var fieldContext = _react.useMemo(function() {
        return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, context), {}, {
            prefixName: prefixName
        });
    }, [
        context,
        prefixName
    ]); // List context
    var listContext = _react.useMemo(function() {
        return {
            getKey: function getKey(namePath) {
                var len = prefixName.length;
                var pathName = namePath[len];
                return [
                    keyManager.keys[pathName],
                    namePath.slice(len + 1)
                ];
            }
        };
    }, [
        prefixName
    ]); // User should not pass `children` as other type.
    if (typeof children !== "function") {
        (0, _warningDefault.default)(false, "Form.List only accepts function as children.");
        return null;
    }
    var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
        var source = _ref2.source;
        if (source === "internal") return false;
        return prevValue !== nextValue;
    };
    return /*#__PURE__*/ _react.createElement((0, _listContextDefault.default).Provider, {
        value: listContext
    }, /*#__PURE__*/ _react.createElement((0, _fieldContextDefault.default).Provider, {
        value: fieldContext
    }, /*#__PURE__*/ _react.createElement((0, _fieldDefault.default), {
        name: [],
        shouldUpdate: shouldUpdate,
        rules: rules,
        validateTrigger: validateTrigger,
        initialValue: initialValue,
        isList: true
    }, function(_ref3, meta) {
        var _ref3$value = _ref3.value, value = _ref3$value === void 0 ? [] : _ref3$value, onChange = _ref3.onChange;
        var getFieldValue = context.getFieldValue;
        var getNewValue = function getNewValue() {
            var values = getFieldValue(prefixName || []);
            return values || [];
        };
        /**
     * Always get latest value in case user update fields by `form` api.
     */ var operations = {
            add: function add(defaultValue, index) {
                // Mapping keys
                var newValue = getNewValue();
                if (index >= 0 && index <= newValue.length) {
                    keyManager.keys = [].concat((0, _toConsumableArrayDefault.default)(keyManager.keys.slice(0, index)), [
                        keyManager.id
                    ], (0, _toConsumableArrayDefault.default)(keyManager.keys.slice(index)));
                    onChange([].concat((0, _toConsumableArrayDefault.default)(newValue.slice(0, index)), [
                        defaultValue
                    ], (0, _toConsumableArrayDefault.default)(newValue.slice(index))));
                } else {
                    if (index < 0 || index > newValue.length) (0, _warningDefault.default)(false, "The second parameter of the add function should be a valid positive number.");
                    keyManager.keys = [].concat((0, _toConsumableArrayDefault.default)(keyManager.keys), [
                        keyManager.id
                    ]);
                    onChange([].concat((0, _toConsumableArrayDefault.default)(newValue), [
                        defaultValue
                    ]));
                }
                keyManager.id += 1;
            },
            remove: function remove(index) {
                var newValue = getNewValue();
                var indexSet = new Set(Array.isArray(index) ? index : [
                    index
                ]);
                if (indexSet.size <= 0) return;
                keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
                    return !indexSet.has(keysIndex);
                }); // Trigger store change
                onChange(newValue.filter(function(_, valueIndex) {
                    return !indexSet.has(valueIndex);
                }));
            },
            move: function move(from, to) {
                if (from === to) return;
                var newValue = getNewValue(); // Do not handle out of range
                if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) return;
                keyManager.keys = (0, _valueUtil.move)(keyManager.keys, from, to); // Trigger store change
                onChange((0, _valueUtil.move)(newValue, from, to));
            }
        };
        var listValue = value || [];
        if (!Array.isArray(listValue)) {
            listValue = [];
            (0, _warningDefault.default)(false, "Current value of '".concat(prefixName.join(" > "), "' is not an array type."));
        }
        return children(listValue.map(function(__, index) {
            var key = keyManager.keys[index];
            if (key === undefined) {
                keyManager.keys[index] = keyManager.id;
                key = keyManager.keys[index];
                keyManager.id += 1;
            }
            return {
                name: index,
                key: key,
                isListField: true
            };
        }), operations, meta);
    })));
};
exports.default = List;

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","react":"21dqq","rc-util/es/warning":"c7oua","./FieldContext":"edeC2","./Field":"66zlt","./utils/valueUtil":"dtwSd","./ListContext":"9sjEA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sjEA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var ListContext = /*#__PURE__*/ _react.createContext(null);
exports.default = ListContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgZUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormStore", ()=>FormStore);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _react = require("react");
var _fieldContext = require("./FieldContext");
var _asyncUtil = require("./utils/asyncUtil");
var _cloneDeep = require("./utils/cloneDeep");
var _cloneDeepDefault = parcelHelpers.interopDefault(_cloneDeep);
var _messages = require("./utils/messages");
var _nameMap = require("./utils/NameMap");
var _nameMapDefault = parcelHelpers.interopDefault(_nameMap);
var _valueUtil = require("./utils/valueUtil");
var _excluded = [
    "name",
    "errors"
];
var FormStore = /*#__PURE__*/ (0, _createClassDefault.default)(function FormStore(forceRootUpdate) {
    var _this = this;
    (0, _classCallCheckDefault.default)(this, FormStore);
    this.formHooked = false;
    this.forceRootUpdate = void 0;
    this.subscribable = true;
    this.store = {};
    this.fieldEntities = [];
    this.initialValues = {};
    this.callbacks = {};
    this.validateMessages = null;
    this.preserve = null;
    this.lastValidatePromise = null;
    this.getForm = function() {
        return {
            getFieldValue: _this.getFieldValue,
            getFieldsValue: _this.getFieldsValue,
            getFieldError: _this.getFieldError,
            getFieldWarning: _this.getFieldWarning,
            getFieldsError: _this.getFieldsError,
            isFieldsTouched: _this.isFieldsTouched,
            isFieldTouched: _this.isFieldTouched,
            isFieldValidating: _this.isFieldValidating,
            isFieldsValidating: _this.isFieldsValidating,
            resetFields: _this.resetFields,
            setFields: _this.setFields,
            setFieldValue: _this.setFieldValue,
            setFieldsValue: _this.setFieldsValue,
            validateFields: _this.validateFields,
            submit: _this.submit,
            _init: true,
            getInternalHooks: _this.getInternalHooks
        };
    };
    this.getInternalHooks = function(key) {
        if (key === (0, _fieldContext.HOOK_MARK)) {
            _this.formHooked = true;
            return {
                dispatch: _this.dispatch,
                initEntityValue: _this.initEntityValue,
                registerField: _this.registerField,
                useSubscribe: _this.useSubscribe,
                setInitialValues: _this.setInitialValues,
                destroyForm: _this.destroyForm,
                setCallbacks: _this.setCallbacks,
                setValidateMessages: _this.setValidateMessages,
                getFields: _this.getFields,
                setPreserve: _this.setPreserve,
                getInitialValue: _this.getInitialValue,
                registerWatch: _this.registerWatch
            };
        }
        (0, _warningDefault.default)(false, "`getInternalHooks` is internal usage. Should not call directly.");
        return null;
    };
    this.useSubscribe = function(subscribable) {
        _this.subscribable = subscribable;
    };
    this.prevWithoutPreserves = null;
    this.setInitialValues = function(initialValues, init) {
        _this.initialValues = initialValues || {};
        if (init) {
            var _this$prevWithoutPres;
            var nextStore = (0, _valueUtil.setValues)({}, initialValues, _this.store); // We will take consider prev form unmount fields.
            // When the field is not `preserve`, we need fill this with initialValues instead of store.
            // eslint-disable-next-line array-callback-return
            (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function(_ref) {
                var namePath = _ref.key;
                nextStore = (0, _valueUtil.setValue)(nextStore, namePath, (0, _valueUtil.getValue)(initialValues, namePath));
            });
            _this.prevWithoutPreserves = null;
            _this.updateStore(nextStore);
        }
    };
    this.destroyForm = function() {
        var prevWithoutPreserves = new (0, _nameMapDefault.default)();
        _this.getFieldEntities(true).forEach(function(entity) {
            if (!_this.isMergedPreserve(entity.isPreserve())) prevWithoutPreserves.set(entity.getNamePath(), true);
        });
        _this.prevWithoutPreserves = prevWithoutPreserves;
    };
    this.getInitialValue = function(namePath) {
        var initValue = (0, _valueUtil.getValue)(_this.initialValues, namePath); // Not cloneDeep when without `namePath`
        return namePath.length ? (0, _cloneDeepDefault.default)(initValue) : initValue;
    };
    this.setCallbacks = function(callbacks) {
        _this.callbacks = callbacks;
    };
    this.setValidateMessages = function(validateMessages) {
        _this.validateMessages = validateMessages;
    };
    this.setPreserve = function(preserve) {
        _this.preserve = preserve;
    };
    this.watchList = [];
    this.registerWatch = function(callback) {
        _this.watchList.push(callback);
        return function() {
            _this.watchList = _this.watchList.filter(function(fn) {
                return fn !== callback;
            });
        };
    };
    this.notifyWatch = function() {
        var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        // No need to cost perf when nothing need to watch
        if (_this.watchList.length) {
            var values = _this.getFieldsValue();
            _this.watchList.forEach(function(callback) {
                callback(values, namePath);
            });
        }
    };
    this.timeoutId = null;
    this.warningUnhooked = function() {
        if (!_this.timeoutId && typeof window !== "undefined") _this.timeoutId = setTimeout(function() {
            _this.timeoutId = null;
            if (!_this.formHooked) (0, _warningDefault.default)(false, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
        });
    };
    this.updateStore = function(nextStore) {
        _this.store = nextStore;
    };
    this.getFieldEntities = function() {
        var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!pure) return _this.fieldEntities;
        return _this.fieldEntities.filter(function(field) {
            return field.getNamePath().length;
        });
    };
    this.getFieldsMap = function() {
        var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var cache = new (0, _nameMapDefault.default)();
        _this.getFieldEntities(pure).forEach(function(field) {
            var namePath = field.getNamePath();
            cache.set(namePath, field);
        });
        return cache;
    };
    this.getFieldEntitiesForNamePathList = function(nameList) {
        if (!nameList) return _this.getFieldEntities(true);
        var cache = _this.getFieldsMap(true);
        return nameList.map(function(name) {
            var namePath = (0, _valueUtil.getNamePath)(name);
            return cache.get(namePath) || {
                INVALIDATE_NAME_PATH: (0, _valueUtil.getNamePath)(name)
            };
        });
    };
    this.getFieldsValue = function(nameList, filterFunc) {
        _this.warningUnhooked();
        if (nameList === true && !filterFunc) return _this.store;
        var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);
        var filteredNameList = [];
        fieldEntities.forEach(function(entity) {
            var _entity$isListField;
            var namePath = "INVALIDATE_NAME_PATH" in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
            // since parent field is already take in count
            if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) return;
            if (!filterFunc) filteredNameList.push(namePath);
            else {
                var meta = "getMeta" in entity ? entity.getMeta() : null;
                if (filterFunc(meta)) filteredNameList.push(namePath);
            }
        });
        return (0, _valueUtil.cloneByNamePathList)(_this.store, filteredNameList.map((0, _valueUtil.getNamePath)));
    };
    this.getFieldValue = function(name) {
        _this.warningUnhooked();
        var namePath = (0, _valueUtil.getNamePath)(name);
        return (0, _valueUtil.getValue)(_this.store, namePath);
    };
    this.getFieldsError = function(nameList) {
        _this.warningUnhooked();
        var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
        return fieldEntities.map(function(entity, index) {
            if (entity && !("INVALIDATE_NAME_PATH" in entity)) return {
                name: entity.getNamePath(),
                errors: entity.getErrors(),
                warnings: entity.getWarnings()
            };
            return {
                name: (0, _valueUtil.getNamePath)(nameList[index]),
                errors: [],
                warnings: []
            };
        });
    };
    this.getFieldError = function(name) {
        _this.warningUnhooked();
        var namePath = (0, _valueUtil.getNamePath)(name);
        var fieldError = _this.getFieldsError([
            namePath
        ])[0];
        return fieldError.errors;
    };
    this.getFieldWarning = function(name) {
        _this.warningUnhooked();
        var namePath = (0, _valueUtil.getNamePath)(name);
        var fieldError = _this.getFieldsError([
            namePath
        ])[0];
        return fieldError.warnings;
    };
    this.isFieldsTouched = function() {
        _this.warningUnhooked();
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var arg0 = args[0], arg1 = args[1];
        var namePathList;
        var isAllFieldsTouched = false;
        if (args.length === 0) namePathList = null;
        else if (args.length === 1) {
            if (Array.isArray(arg0)) {
                namePathList = arg0.map((0, _valueUtil.getNamePath));
                isAllFieldsTouched = false;
            } else {
                namePathList = null;
                isAllFieldsTouched = arg0;
            }
        } else {
            namePathList = arg0.map((0, _valueUtil.getNamePath));
            isAllFieldsTouched = arg1;
        }
        var fieldEntities = _this.getFieldEntities(true);
        var isFieldTouched = function isFieldTouched(field) {
            return field.isFieldTouched();
        }; // ===== Will get fully compare when not config namePathList =====
        if (!namePathList) return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
         // Generate a nest tree for validate
        var map = new (0, _nameMapDefault.default)();
        namePathList.forEach(function(shortNamePath) {
            map.set(shortNamePath, []);
        });
        fieldEntities.forEach(function(field) {
            var fieldNamePath = field.getNamePath(); // Find matched entity and put into list
            namePathList.forEach(function(shortNamePath) {
                if (shortNamePath.every(function(nameUnit, i) {
                    return fieldNamePath[i] === nameUnit;
                })) map.update(shortNamePath, function(list) {
                    return [].concat((0, _toConsumableArrayDefault.default)(list), [
                        field
                    ]);
                });
            });
        }); // Check if NameMap value is touched
        var isNamePathListTouched = function isNamePathListTouched(entities) {
            return entities.some(isFieldTouched);
        };
        var namePathListEntities = map.map(function(_ref2) {
            var value = _ref2.value;
            return value;
        });
        return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
    };
    this.isFieldTouched = function(name) {
        _this.warningUnhooked();
        return _this.isFieldsTouched([
            name
        ]);
    };
    this.isFieldsValidating = function(nameList) {
        _this.warningUnhooked();
        var fieldEntities = _this.getFieldEntities();
        if (!nameList) return fieldEntities.some(function(testField) {
            return testField.isFieldValidating();
        });
        var namePathList = nameList.map((0, _valueUtil.getNamePath));
        return fieldEntities.some(function(testField) {
            var fieldNamePath = testField.getNamePath();
            return (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath) && testField.isFieldValidating();
        });
    };
    this.isFieldValidating = function(name) {
        _this.warningUnhooked();
        return _this.isFieldsValidating([
            name
        ]);
    };
    this.resetWithFieldInitialValue = function() {
        var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Create cache
        var cache = new (0, _nameMapDefault.default)();
        var fieldEntities = _this.getFieldEntities(true);
        fieldEntities.forEach(function(field) {
            var initialValue = field.props.initialValue;
            var namePath = field.getNamePath(); // Record only if has `initialValue`
            if (initialValue !== undefined) {
                var records = cache.get(namePath) || new Set();
                records.add({
                    entity: field,
                    value: initialValue
                });
                cache.set(namePath, records);
            }
        }); // Reset
        var resetWithFields = function resetWithFields(entities) {
            entities.forEach(function(field) {
                var initialValue = field.props.initialValue;
                if (initialValue !== undefined) {
                    var namePath = field.getNamePath();
                    var formInitialValue = _this.getInitialValue(namePath);
                    if (formInitialValue !== undefined) // Warning if conflict with form initialValues and do not modify value
                    (0, _warningDefault.default)(false, "Form already set 'initialValues' with path '".concat(namePath.join("."), "'. Field can not overwrite it."));
                    else {
                        var records = cache.get(namePath);
                        if (records && records.size > 1) // Warning if multiple field set `initialValue`and do not modify value
                        (0, _warningDefault.default)(false, "Multiple Field with path '".concat(namePath.join("."), "' set 'initialValue'. Can not decide which one to pick."));
                        else if (records) {
                            var originValue = _this.getFieldValue(namePath); // Set `initialValue`
                            if (!info.skipExist || originValue === undefined) _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, (0, _toConsumableArrayDefault.default)(records)[0].value));
                        }
                    }
                }
            });
        };
        var requiredFieldEntities;
        if (info.entities) requiredFieldEntities = info.entities;
        else if (info.namePathList) {
            requiredFieldEntities = [];
            info.namePathList.forEach(function(namePath) {
                var records = cache.get(namePath);
                if (records) {
                    var _requiredFieldEntitie;
                    (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0, _toConsumableArrayDefault.default)((0, _toConsumableArrayDefault.default)(records).map(function(r) {
                        return r.entity;
                    })));
                }
            });
        } else requiredFieldEntities = fieldEntities;
        resetWithFields(requiredFieldEntities);
    };
    this.resetFields = function(nameList) {
        _this.warningUnhooked();
        var prevStore = _this.store;
        if (!nameList) {
            _this.updateStore((0, _valueUtil.setValues)({}, _this.initialValues));
            _this.resetWithFieldInitialValue();
            _this.notifyObservers(prevStore, null, {
                type: "reset"
            });
            _this.notifyWatch();
            return;
        } // Reset by `nameList`
        var namePathList = nameList.map((0, _valueUtil.getNamePath));
        namePathList.forEach(function(namePath) {
            var initialValue = _this.getInitialValue(namePath);
            _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, initialValue));
        });
        _this.resetWithFieldInitialValue({
            namePathList: namePathList
        });
        _this.notifyObservers(prevStore, namePathList, {
            type: "reset"
        });
        _this.notifyWatch(namePathList);
    };
    this.setFields = function(fields) {
        _this.warningUnhooked();
        var prevStore = _this.store;
        var namePathList = [];
        fields.forEach(function(fieldData) {
            var name = fieldData.name, errors = fieldData.errors, data = (0, _objectWithoutPropertiesDefault.default)(fieldData, _excluded);
            var namePath = (0, _valueUtil.getNamePath)(name);
            namePathList.push(namePath); // Value
            if ("value" in data) _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, data.value));
            _this.notifyObservers(prevStore, [
                namePath
            ], {
                type: "setField",
                data: fieldData
            });
        });
        _this.notifyWatch(namePathList);
    };
    this.getFields = function() {
        var entities = _this.getFieldEntities(true);
        var fields = entities.map(function(field) {
            var namePath = field.getNamePath();
            var meta = field.getMeta();
            var fieldData = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, meta), {}, {
                name: namePath,
                value: _this.getFieldValue(namePath)
            });
            Object.defineProperty(fieldData, "originRCField", {
                value: true
            });
            return fieldData;
        });
        return fields;
    };
    this.initEntityValue = function(entity) {
        var initialValue = entity.props.initialValue;
        if (initialValue !== undefined) {
            var namePath = entity.getNamePath();
            var prevValue = (0, _valueUtil.getValue)(_this.store, namePath);
            if (prevValue === undefined) _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, initialValue));
        }
    };
    this.isMergedPreserve = function(fieldPreserve) {
        var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
        return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
    };
    this.registerField = function(entity) {
        _this.fieldEntities.push(entity);
        var namePath = entity.getNamePath();
        _this.notifyWatch([
            namePath
        ]); // Set initial values
        if (entity.props.initialValue !== undefined) {
            var prevStore = _this.store;
            _this.resetWithFieldInitialValue({
                entities: [
                    entity
                ],
                skipExist: true
            });
            _this.notifyObservers(prevStore, [
                entity.getNamePath()
            ], {
                type: "valueUpdate",
                source: "internal"
            });
        } // un-register field callback
        return function(isListField, preserve) {
            var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            _this.fieldEntities = _this.fieldEntities.filter(function(item) {
                return item !== entity;
            }); // Clean up store value if not preserve
            if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
                var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
                if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
                    return !(0, _valueUtil.matchNamePath)(field.getNamePath(), namePath);
                })) {
                    var _prevStore = _this.store;
                    _this.updateStore((0, _valueUtil.setValue)(_prevStore, namePath, defaultValue, true)); // Notify that field is unmount
                    _this.notifyObservers(_prevStore, [
                        namePath
                    ], {
                        type: "remove"
                    }); // Dependencies update
                    _this.triggerDependenciesUpdate(_prevStore, namePath);
                }
            }
            _this.notifyWatch([
                namePath
            ]);
        };
    };
    this.dispatch = function(action) {
        switch(action.type){
            case "updateValue":
                var namePath = action.namePath, value = action.value;
                _this.updateValue(namePath, value);
                break;
            case "validateField":
                var _namePath = action.namePath, triggerName = action.triggerName;
                _this.validateFields([
                    _namePath
                ], {
                    triggerName: triggerName
                });
                break;
            default:
        }
    };
    this.notifyObservers = function(prevStore, namePathList, info) {
        if (_this.subscribable) {
            var mergedInfo = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, info), {}, {
                store: _this.getFieldsValue(true)
            });
            _this.getFieldEntities().forEach(function(_ref3) {
                var onStoreChange = _ref3.onStoreChange;
                onStoreChange(prevStore, namePathList, mergedInfo);
            });
        } else _this.forceRootUpdate();
    };
    this.triggerDependenciesUpdate = function(prevStore, namePath) {
        var childrenFields = _this.getDependencyChildrenFields(namePath);
        if (childrenFields.length) _this.validateFields(childrenFields);
        _this.notifyObservers(prevStore, childrenFields, {
            type: "dependenciesUpdate",
            relatedFields: [
                namePath
            ].concat((0, _toConsumableArrayDefault.default)(childrenFields))
        });
        return childrenFields;
    };
    this.updateValue = function(name, value) {
        var namePath = (0, _valueUtil.getNamePath)(name);
        var prevStore = _this.store;
        _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, value));
        _this.notifyObservers(prevStore, [
            namePath
        ], {
            type: "valueUpdate",
            source: "internal"
        });
        _this.notifyWatch([
            namePath
        ]); // Dependencies update
        var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath); // trigger callback function
        var onValuesChange = _this.callbacks.onValuesChange;
        if (onValuesChange) {
            var changedValues = (0, _valueUtil.cloneByNamePathList)(_this.store, [
                namePath
            ]);
            onValuesChange(changedValues, _this.getFieldsValue());
        }
        _this.triggerOnFieldsChange([
            namePath
        ].concat((0, _toConsumableArrayDefault.default)(childrenFields)));
    };
    this.setFieldsValue = function(store) {
        _this.warningUnhooked();
        var prevStore = _this.store;
        if (store) {
            var nextStore = (0, _valueUtil.setValues)(_this.store, store);
            _this.updateStore(nextStore);
        }
        _this.notifyObservers(prevStore, null, {
            type: "valueUpdate",
            source: "external"
        });
        _this.notifyWatch();
    };
    this.setFieldValue = function(name, value) {
        _this.setFields([
            {
                name: name,
                value: value
            }
        ]);
    };
    this.getDependencyChildrenFields = function(rootNamePath) {
        var children = new Set();
        var childrenFields = [];
        var dependencies2fields = new (0, _nameMapDefault.default)();
        /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */ _this.getFieldEntities().forEach(function(field) {
            var dependencies = field.props.dependencies;
            (dependencies || []).forEach(function(dependency) {
                var dependencyNamePath = (0, _valueUtil.getNamePath)(dependency);
                dependencies2fields.update(dependencyNamePath, function() {
                    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
                    fields.add(field);
                    return fields;
                });
            });
        });
        var fillChildren = function fillChildren(namePath) {
            var fields = dependencies2fields.get(namePath) || new Set();
            fields.forEach(function(field) {
                if (!children.has(field)) {
                    children.add(field);
                    var fieldNamePath = field.getNamePath();
                    if (field.isFieldDirty() && fieldNamePath.length) {
                        childrenFields.push(fieldNamePath);
                        fillChildren(fieldNamePath);
                    }
                }
            });
        };
        fillChildren(rootNamePath);
        return childrenFields;
    };
    this.triggerOnFieldsChange = function(namePathList, filedErrors) {
        var onFieldsChange = _this.callbacks.onFieldsChange;
        if (onFieldsChange) {
            var fields = _this.getFields();
            /**
       * Fill errors since `fields` may be replaced by controlled fields
       */ if (filedErrors) {
                var cache = new (0, _nameMapDefault.default)();
                filedErrors.forEach(function(_ref4) {
                    var name = _ref4.name, errors = _ref4.errors;
                    cache.set(name, errors);
                });
                fields.forEach(function(field) {
                    // eslint-disable-next-line no-param-reassign
                    field.errors = cache.get(field.name) || field.errors;
                });
            }
            var changedFields = fields.filter(function(_ref5) {
                var fieldName = _ref5.name;
                return (0, _valueUtil.containsNamePath)(namePathList, fieldName);
            });
            onFieldsChange(changedFields, fields);
        }
    };
    this.validateFields = function(nameList, options) {
        _this.warningUnhooked();
        var provideNameList = !!nameList;
        var namePathList = provideNameList ? nameList.map((0, _valueUtil.getNamePath)) : []; // Collect result in promise list
        var promiseList = [];
        _this.getFieldEntities(true).forEach(function(field) {
            // Add field if not provide `nameList`
            if (!provideNameList) namePathList.push(field.getNamePath());
            /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */ if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
                var namePath = field.getNamePath();
                if (// ['name'] -> ['name','list']
                namePath.every(function(nameUnit, i) {
                    return nameList[i] === nameUnit || nameList[i] === undefined;
                })) namePathList.push(namePath);
            } // Skip if without rule
            if (!field.props.rules || !field.props.rules.length) return;
            var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list
            if (!provideNameList || (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath)) {
                var promise = field.validateRules((0, _objectSpread2Default.default)({
                    validateMessages: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, (0, _messages.defaultValidateMessages)), _this.validateMessages)
                }, options)); // Wrap promise with field
                promiseList.push(promise.then(function() {
                    return {
                        name: fieldNamePath,
                        errors: [],
                        warnings: []
                    };
                }).catch(function(ruleErrors) {
                    var _ruleErrors$forEach;
                    var mergedErrors = [];
                    var mergedWarnings = [];
                    (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref6) {
                        var warningOnly = _ref6.rule.warningOnly, errors = _ref6.errors;
                        if (warningOnly) mergedWarnings.push.apply(mergedWarnings, (0, _toConsumableArrayDefault.default)(errors));
                        else mergedErrors.push.apply(mergedErrors, (0, _toConsumableArrayDefault.default)(errors));
                    });
                    if (mergedErrors.length) return Promise.reject({
                        name: fieldNamePath,
                        errors: mergedErrors,
                        warnings: mergedWarnings
                    });
                    return {
                        name: fieldNamePath,
                        errors: mergedErrors,
                        warnings: mergedWarnings
                    };
                }));
            }
        });
        var summaryPromise = (0, _asyncUtil.allPromiseFinish)(promiseList);
        _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update
        summaryPromise.catch(function(results) {
            return results;
        }).then(function(results) {
            var resultNamePathList = results.map(function(_ref7) {
                var name = _ref7.name;
                return name;
            });
            _this.notifyObservers(_this.store, resultNamePathList, {
                type: "validateFinish"
            });
            _this.triggerOnFieldsChange(resultNamePathList, results);
        });
        var returnPromise = summaryPromise.then(function() {
            if (_this.lastValidatePromise === summaryPromise) return Promise.resolve(_this.getFieldsValue(namePathList));
            return Promise.reject([]);
        }).catch(function(results) {
            var errorList = results.filter(function(result) {
                return result && result.errors.length;
            });
            return Promise.reject({
                values: _this.getFieldsValue(namePathList),
                errorFields: errorList,
                outOfDate: _this.lastValidatePromise !== summaryPromise
            });
        }); // Do not throw in console
        returnPromise.catch(function(e) {
            return e;
        });
        return returnPromise;
    };
    this.submit = function() {
        _this.warningUnhooked();
        _this.validateFields().then(function(values) {
            var onFinish = _this.callbacks.onFinish;
            if (onFinish) try {
                onFinish(values);
            } catch (err) {
                // Should print error if user `onFinish` callback failed
                console.error(err);
            }
        }).catch(function(e) {
            var onFinishFailed = _this.callbacks.onFinishFailed;
            if (onFinishFailed) onFinishFailed(e);
        });
    };
    this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
    var formRef = _react.useRef();
    var _React$useState = _react.useState({}), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), forceUpdate = _React$useState2[1];
    if (!formRef.current) {
        if (form) formRef.current = form;
        else {
            // Create a new FormStore if not provided
            var forceReRender = function forceReRender() {
                forceUpdate({});
            };
            var formStore = new FormStore(forceReRender);
            formRef.current = formStore.getForm();
        }
    }
    return [
        formRef.current
    ];
}
exports.default = useForm;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","rc-util/es/warning":"c7oua","react":"21dqq","./FieldContext":"edeC2","./utils/asyncUtil":"d8E7b","./utils/cloneDeep":"8xhrn","./utils/messages":"7dCqc","./utils/NameMap":"7EzOW","./utils/valueUtil":"dtwSd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8E7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "allPromiseFinish", ()=>allPromiseFinish);
function allPromiseFinish(promiseList) {
    var hasError = false;
    var count = promiseList.length;
    var results = [];
    if (!promiseList.length) return Promise.resolve([]);
    return new Promise(function(resolve, reject) {
        promiseList.forEach(function(promise, index) {
            promise.catch(function(e) {
                hasError = true;
                return e;
            }).then(function(result) {
                count -= 1;
                results[index] = result;
                if (count > 0) return;
                if (hasError) reject(results);
                resolve(results);
            });
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EzOW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var SPLIT = "__@field_split__";
/**
 * Convert name path into string to fast the fetch speed of Map.
 */ function normalize(namePath) {
    return namePath.map(function(cell) {
        return "".concat((0, _typeofDefault.default)(cell), ":").concat(cell);
    }) // Magic split
    .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */ var NameMap = /*#__PURE__*/ function() {
    function NameMap() {
        (0, _classCallCheckDefault.default)(this, NameMap);
        this.kvs = new Map();
    }
    (0, _createClassDefault.default)(NameMap, [
        {
            key: "set",
            value: function set(key, value) {
                this.kvs.set(normalize(key), value);
            }
        },
        {
            key: "get",
            value: function get(key) {
                return this.kvs.get(normalize(key));
            }
        },
        {
            key: "update",
            value: function update(key, updater) {
                var origin = this.get(key);
                var next = updater(origin);
                if (!next) this.delete(key);
                else this.set(key, next);
            }
        },
        {
            key: "delete",
            value: function _delete(key) {
                this.kvs.delete(normalize(key));
            } // Since we only use this in test, let simply realize this
        },
        {
            key: "map",
            value: function map(callback) {
                return (0, _toConsumableArrayDefault.default)(this.kvs.entries()).map(function(_ref) {
                    var _ref2 = (0, _slicedToArrayDefault.default)(_ref, 2), key = _ref2[0], value = _ref2[1];
                    var cells = key.split(SPLIT);
                    return callback({
                        key: cells.map(function(cell) {
                            var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = (0, _slicedToArrayDefault.default)(_cell$match, 3), type = _cell$match2[1], unit = _cell$match2[2];
                            return type === "number" ? Number(unit) : unit;
                        }),
                        value: value
                    });
                });
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = {};
                this.map(function(_ref3) {
                    var key = _ref3.key, value = _ref3.value;
                    json[key.join(".")] = value;
                    return null;
                });
                return json;
            }
        }
    ]);
    return NameMap;
}();
exports.default = NameMap;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/typeof":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87pbN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _react = require("react");
var _useForm = require("./useForm");
var _useFormDefault = parcelHelpers.interopDefault(_useForm);
var _fieldContext = require("./FieldContext");
var _fieldContextDefault = parcelHelpers.interopDefault(_fieldContext);
var _formContext = require("./FormContext");
var _formContextDefault = parcelHelpers.interopDefault(_formContext);
var _valueUtil = require("./utils/valueUtil");
var _excluded = [
    "name",
    "initialValues",
    "fields",
    "form",
    "preserve",
    "children",
    "component",
    "validateMessages",
    "validateTrigger",
    "onValuesChange",
    "onFieldsChange",
    "onFinish",
    "onFinishFailed"
];
var Form = function Form(_ref, ref) {
    var name = _ref.name, initialValues = _ref.initialValues, fields = _ref.fields, form = _ref.form, preserve = _ref.preserve, children = _ref.children, _ref$component = _ref.component, Component = _ref$component === void 0 ? "form" : _ref$component, validateMessages = _ref.validateMessages, _ref$validateTrigger = _ref.validateTrigger, validateTrigger = _ref$validateTrigger === void 0 ? "onChange" : _ref$validateTrigger, onValuesChange = _ref.onValuesChange, _onFieldsChange = _ref.onFieldsChange, _onFinish = _ref.onFinish, onFinishFailed = _ref.onFinishFailed, restProps = (0, _objectWithoutPropertiesDefault.default)(_ref, _excluded);
    var formContext = _react.useContext((0, _formContextDefault.default)); // We customize handle event since Context will makes all the consumer re-render:
    // https://reactjs.org/docs/context.html#contextprovider
    var _useForm = (0, _useFormDefault.default)(form), _useForm2 = (0, _slicedToArrayDefault.default)(_useForm, 1), formInstance = _useForm2[0];
    var _formInstance$getInte = formInstance.getInternalHooks((0, _fieldContext.HOOK_MARK)), useSubscribe = _formInstance$getInte.useSubscribe, setInitialValues = _formInstance$getInte.setInitialValues, setCallbacks = _formInstance$getInte.setCallbacks, setValidateMessages = _formInstance$getInte.setValidateMessages, setPreserve = _formInstance$getInte.setPreserve, destroyForm = _formInstance$getInte.destroyForm; // Pass ref with form instance
    _react.useImperativeHandle(ref, function() {
        return formInstance;
    }); // Register form into Context
    _react.useEffect(function() {
        formContext.registerForm(name, formInstance);
        return function() {
            formContext.unregisterForm(name);
        };
    }, [
        formContext,
        formInstance,
        name
    ]); // Pass props to store
    setValidateMessages((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, formContext.validateMessages), validateMessages));
    setCallbacks({
        onValuesChange: onValuesChange,
        onFieldsChange: function onFieldsChange(changedFields) {
            formContext.triggerFormChange(name, changedFields);
            if (_onFieldsChange) {
                for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)rest[_key - 1] = arguments[_key];
                _onFieldsChange.apply(void 0, [
                    changedFields
                ].concat(rest));
            }
        },
        onFinish: function onFinish(values) {
            formContext.triggerFormFinish(name, values);
            if (_onFinish) _onFinish(values);
        },
        onFinishFailed: onFinishFailed
    });
    setPreserve(preserve); // Set initial value, init store value when first mount
    var mountRef = _react.useRef(null);
    setInitialValues(initialValues, !mountRef.current);
    if (!mountRef.current) mountRef.current = true;
    _react.useEffect(function() {
        return destroyForm;
    }, []); // Prepare children by `children` type
    var childrenNode;
    var childrenRenderProps = typeof children === "function";
    if (childrenRenderProps) {
        var values = formInstance.getFieldsValue(true);
        childrenNode = children(values, formInstance);
    } else childrenNode = children;
     // Not use subscribe when using render props
    useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render
    var prevFieldsRef = _react.useRef();
    _react.useEffect(function() {
        if (!(0, _valueUtil.isSimilar)(prevFieldsRef.current || [], fields || [])) formInstance.setFields(fields || []);
        prevFieldsRef.current = fields;
    }, [
        fields,
        formInstance
    ]);
    var formContextValue = _react.useMemo(function() {
        return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, formInstance), {}, {
            validateTrigger: validateTrigger
        });
    }, [
        formInstance,
        validateTrigger
    ]);
    var wrapperNode = /*#__PURE__*/ _react.createElement((0, _fieldContextDefault.default).Provider, {
        value: formContextValue
    }, childrenNode);
    if (Component === false) return wrapperNode;
    return /*#__PURE__*/ _react.createElement(Component, (0, _extendsDefault.default)({}, restProps, {
        onSubmit: function onSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            formInstance.submit();
        },
        onReset: function onReset(event) {
            var _restProps$onReset;
            event.preventDefault();
            formInstance.resetFields();
            (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
        }
    }), wrapperNode);
};
exports.default = Form;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","react":"21dqq","./useForm":"hgZUW","./FieldContext":"edeC2","./FormContext":"cpeez","./utils/valueUtil":"dtwSd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpeez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormProvider", ()=>FormProvider);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _react = require("react");
var FormContext = /*#__PURE__*/ _react.createContext({
    triggerFormChange: function triggerFormChange() {},
    triggerFormFinish: function triggerFormFinish() {},
    registerForm: function registerForm() {},
    unregisterForm: function unregisterForm() {}
});
var FormProvider = function FormProvider(_ref) {
    var validateMessages = _ref.validateMessages, onFormChange = _ref.onFormChange, onFormFinish = _ref.onFormFinish, children = _ref.children;
    var formContext = _react.useContext(FormContext);
    var formsRef = _react.useRef({});
    return /*#__PURE__*/ _react.createElement(FormContext.Provider, {
        value: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, formContext), {}, {
            validateMessages: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, formContext.validateMessages), validateMessages),
            // =========================================================
            // =                  Global Form Control                  =
            // =========================================================
            triggerFormChange: function triggerFormChange(name, changedFields) {
                if (onFormChange) onFormChange(name, {
                    changedFields: changedFields,
                    forms: formsRef.current
                });
                formContext.triggerFormChange(name, changedFields);
            },
            triggerFormFinish: function triggerFormFinish(name, values) {
                if (onFormFinish) onFormFinish(name, {
                    values: values,
                    forms: formsRef.current
                });
                formContext.triggerFormFinish(name, values);
            },
            registerForm: function registerForm(name, form) {
                if (name) formsRef.current = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, formsRef.current), {}, (0, _definePropertyDefault.default)({}, name, form));
                formContext.registerForm(name, form);
            },
            unregisterForm: function unregisterForm(name) {
                var newForms = (0, _objectSpread2Default.default)({}, formsRef.current);
                delete newForms[name];
                formsRef.current = newForms;
                formContext.unregisterForm(name);
            }
        })
    }, children);
};
exports.default = FormContext;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2X6w3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringify", ()=>stringify);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _ = require(".");
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _fieldContext = require("./FieldContext");
var _react = require("react");
var _valueUtil = require("./utils/valueUtil");
function stringify(value) {
    try {
        return JSON.stringify(value);
    } catch (err) {
        return Math.random();
    }
}
function useWatch() {
    var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var form = arguments.length > 1 ? arguments[1] : undefined;
    var _useState = (0, _react.useState)(), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), value = _useState2[0], setValue = _useState2[1];
    var valueStr = (0, _react.useMemo)(function() {
        return stringify(value);
    }, [
        value
    ]);
    var valueStrRef = (0, _react.useRef)(valueStr);
    valueStrRef.current = valueStr;
    var fieldContext = (0, _react.useContext)((0, _.FieldContext));
    var formInstance = form || fieldContext;
    var isValidForm = formInstance && formInstance._init; // Warning if not exist form instance
    (0, _warningDefault.default)(isValidForm, "useWatch requires a form instance since it can not auto detect from context.");
    var namePath = (0, _valueUtil.getNamePath)(dependencies);
    var namePathRef = (0, _react.useRef)(namePath);
    namePathRef.current = namePath;
    (0, _react.useEffect)(function() {
        // Skip if not exist form instance
        if (!isValidForm) return;
        var getFieldsValue = formInstance.getFieldsValue, getInternalHooks = formInstance.getInternalHooks;
        var _getInternalHooks = getInternalHooks((0, _fieldContext.HOOK_MARK)), registerWatch = _getInternalHooks.registerWatch;
        var cancelRegister = registerWatch(function(store) {
            var newValue = (0, _valueUtil.getValue)(store, namePathRef.current);
            var nextValueStr = stringify(newValue); // Compare stringify in case it's nest object
            if (valueStrRef.current !== nextValueStr) {
                valueStrRef.current = nextValueStr;
                setValue(newValue);
            }
        }); // TODO: We can improve this perf in future
        var initialValue = (0, _valueUtil.getValue)(getFieldsValue(), namePathRef.current);
        setValue(initialValue);
        return cancelRegister;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return value;
}
exports.default = useWatch;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN",".":"bdxu5","rc-util/es/warning":"c7oua","./FieldContext":"edeC2","react":"21dqq","./utils/valueUtil":"dtwSd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxcbY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
function useMemo(getValue, condition, shouldUpdate) {
    var cacheRef = _react.useRef({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue();
        cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
}
exports.default = useMemo;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Bz2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANT_MARK", ()=>ANT_MARK);
parcelHelpers.export(exports, "default", ()=>LocaleProvider);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _memoizeOne = require("memoize-one");
var _memoizeOneDefault = parcelHelpers.interopDefault(_memoizeOne);
var _react = require("react");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _locale = require("../modal/locale");
var _context = require("./context");
var _contextDefault = parcelHelpers.interopDefault(_context);
var ANT_MARK = "internalMark";
var LocaleProvider = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(LocaleProvider, _React$Component);
    var _super = (0, _createSuperDefault.default)(LocaleProvider);
    function LocaleProvider(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, LocaleProvider);
        _this = _super.call(this, props);
        _this.getMemoizedContextValue = (0, _memoizeOneDefault.default)(function(localeValue) {
            return (0, _extendsDefault.default)((0, _extendsDefault.default)({}, localeValue), {
                exist: true
            });
        });
        (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
        (0, _warningDefault.default)(props._ANT_MARK__ === ANT_MARK, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
        return _this;
    }
    (0, _createClassDefault.default)(LocaleProvider, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                (0, _locale.changeConfirmLocale)(this.props.locale && this.props.locale.Modal);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var locale = this.props.locale;
                if (prevProps.locale !== locale) (0, _locale.changeConfirmLocale)(locale && locale.Modal);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                (0, _locale.changeConfirmLocale)();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, locale = _this$props.locale, children = _this$props.children;
                var contextValue = this.getMemoizedContextValue(locale);
                return /*#__PURE__*/ _react.createElement((0, _contextDefault.default).Provider, {
                    value: contextValue
                }, children);
            }
        }
    ]);
    return LocaleProvider;
}(_react.Component);
LocaleProvider.defaultProps = {
    locale: {}
};

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","memoize-one":"ajWd5","react":"21dqq","../_util/warning":"daUrm","../modal/locale":"cgYI5","./context":"h4Phx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajWd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>memoizeOne);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
    if (first === second) return true;
    if (safeIsNaN(first) && safeIsNaN(second)) return true;
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) return false;
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) return false;
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) isEqual = areInputsEqual;
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)newArgs[_i] = arguments[_i];
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"daUrm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetWarned", ()=>(0, _warning.resetWarned));
parcelHelpers.export(exports, "noop", ()=>noop) // eslint-disable-next-line import/no-mutable-exports
;
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
function noop() {}
var warning = noop;
warning = function warning(valid, component, message) {
    (0, _warningDefault.default)(valid, "[antd: ".concat(component, "] ").concat(message)); // StrictMode will inject console which will not throw warning in React 17.
};
exports.default = warning;

},{"rc-util/es/warning":"c7oua","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgYI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeConfirmLocale", ()=>changeConfirmLocale);
parcelHelpers.export(exports, "getConfirmLocale", ()=>getConfirmLocale);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _default = require("../locale/default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
var runtimeLocale = (0, _extendsDefault.default)({}, (0, _defaultDefault.default).Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) runtimeLocale = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, runtimeLocale), newLocale);
    else runtimeLocale = (0, _extendsDefault.default)({}, (0, _defaultDefault.default).Modal);
}
function getConfirmLocale() {
    return runtimeLocale;
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","../locale/default":"gC4P4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gC4P4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-template-curly-in-string */ var _enUS = require("rc-pagination/es/locale/en_US");
var _enUSDefault = parcelHelpers.interopDefault(_enUS);
var _enUS1 = require("../calendar/locale/en_US");
var _enUSDefault1 = parcelHelpers.interopDefault(_enUS1);
var _enUS2 = require("../date-picker/locale/en_US");
var _enUSDefault2 = parcelHelpers.interopDefault(_enUS2);
var _enUS3 = require("../time-picker/locale/en_US");
var _enUSDefault3 = parcelHelpers.interopDefault(_enUS3);
var typeTemplate = "${label} is not a valid ${type}";
var localeValues = {
    locale: "en",
    Pagination: (0, _enUSDefault.default),
    DatePicker: (0, _enUSDefault2.default),
    TimePicker: (0, _enUSDefault3.default),
    Calendar: (0, _enUSDefault1.default),
    global: {
        placeholder: "Please select"
    },
    Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting"
    },
    Modal: {
        okText: "OK",
        cancelText: "Cancel",
        justOkText: "OK"
    },
    Popconfirm: {
        okText: "OK",
        cancelText: "Cancel"
    },
    Transfer: {
        titles: [
            "",
            ""
        ],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page"
    },
    Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file"
    },
    Empty: {
        description: "No Data"
    },
    Icon: {
        icon: "icon"
    },
    Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand"
    },
    PageHeader: {
        back: "Back"
    },
    Form: {
        optional: "(optional)",
        defaultValidateMessages: {
            "default": "Field validation error for ${label}",
            required: "Please enter ${label}",
            "enum": "${label} must be one of [${enum}]",
            whitespace: "${label} cannot be a blank character",
            date: {
                format: "${label} date format is invalid",
                parse: "${label} cannot be converted to a date",
                invalid: "${label} is an invalid date"
            },
            types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                "boolean": typeTemplate,
                integer: typeTemplate,
                "float": typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
            },
            string: {
                len: "${label} must be ${len} characters",
                min: "${label} must be at least ${min} characters",
                max: "${label} must be up to ${max} characters",
                range: "${label} must be between ${min}-${max} characters"
            },
            number: {
                len: "${label} must be equal to ${len}",
                min: "${label} must be minimum ${min}",
                max: "${label} must be maximum ${max}",
                range: "${label} must be between ${min}-${max}"
            },
            array: {
                len: "Must be ${len} ${label}",
                min: "At least ${min} ${label}",
                max: "At most ${max} ${label}",
                range: "The amount of ${label} must be between ${min}-${max}"
            },
            pattern: {
                mismatch: "${label} does not match the pattern ${pattern}"
            }
        }
    },
    Image: {
        preview: "Preview"
    }
};
exports.default = localeValues;

},{"rc-pagination/es/locale/en_US":"1OIC9","../calendar/locale/en_US":"2mydw","../date-picker/locale/en_US":"bWLfZ","../time-picker/locale/en_US":"7H9w0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1OIC9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    // Options.jsx
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination.jsx
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mydw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enUS = require("../../date-picker/locale/en_US");
var _enUSDefault = parcelHelpers.interopDefault(_enUS);
exports.default = (0, _enUSDefault.default);

},{"../../date-picker/locale/en_US":"bWLfZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWLfZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _enUS = require("rc-picker/es/locale/en_US");
var _enUSDefault = parcelHelpers.interopDefault(_enUS);
var _enUS1 = require("../../time-picker/locale/en_US"); // Merge into a locale object
var _enUSDefault1 = parcelHelpers.interopDefault(_enUS1);
var locale = {
    lang: (0, _extendsDefault.default)({
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: [
            "Start date",
            "End date"
        ],
        rangeYearPlaceholder: [
            "Start year",
            "End year"
        ],
        rangeQuarterPlaceholder: [
            "Start quarter",
            "End quarter"
        ],
        rangeMonthPlaceholder: [
            "Start month",
            "End month"
        ],
        rangeWeekPlaceholder: [
            "Start week",
            "End week"
        ]
    }, (0, _enUSDefault.default)),
    timePickerLocale: (0, _extendsDefault.default)({}, (0, _enUSDefault1.default))
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","rc-picker/es/locale/en_US":"jU8Gg","../../time-picker/locale/en_US":"7H9w0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jU8Gg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var locale = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
};
exports.default = locale;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7H9w0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var locale = {
    placeholder: "Select time",
    rangePlaceholder: [
        "Start time",
        "End time"
    ]
};
exports.default = locale;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4Phx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var LocaleContext = /*#__PURE__*/ (0, _react.createContext)(undefined);
exports.default = LocaleContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6T2lL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>LocaleReceiver);
parcelHelpers.export(exports, "useLocaleReceiver", ()=>useLocaleReceiver);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var _context = require("./context");
var _contextDefault = parcelHelpers.interopDefault(_context);
var _default = require("./default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
var LocaleReceiver = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(LocaleReceiver, _React$Component);
    var _super = (0, _createSuperDefault.default)(LocaleReceiver);
    function LocaleReceiver() {
        (0, _classCallCheckDefault.default)(this, LocaleReceiver);
        return _super.apply(this, arguments);
    }
    (0, _createClassDefault.default)(LocaleReceiver, [
        {
            key: "getLocale",
            value: function getLocale() {
                var _this$props = this.props, componentName = _this$props.componentName, defaultLocale = _this$props.defaultLocale;
                var locale = defaultLocale || (0, _defaultDefault.default)[componentName !== null && componentName !== void 0 ? componentName : "global"];
                var antLocale = this.context;
                var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
                return (0, _extendsDefault.default)((0, _extendsDefault.default)({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
            }
        },
        {
            key: "getLocaleCode",
            value: function getLocaleCode() {
                var antLocale = this.context;
                var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale
                if (antLocale && antLocale.exist && !localeCode) return (0, _defaultDefault.default).locale;
                return localeCode;
            }
        },
        {
            key: "render",
            value: function render() {
                return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
            }
        }
    ]);
    return LocaleReceiver;
}(_react.Component);
LocaleReceiver.defaultProps = {
    componentName: "global"
};
LocaleReceiver.contextType = (0, _contextDefault.default);
function useLocaleReceiver(componentName, defaultLocale) {
    var antLocale = _react.useContext((0, _contextDefault.default));
    var componentLocale = _react.useMemo(function() {
        var locale = defaultLocale || (0, _defaultDefault.default)[componentName || "global"];
        var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
        return (0, _extendsDefault.default)((0, _extendsDefault.default)({}, typeof locale === "function" ? locale() : locale), localeFromContext || {});
    }, [
        componentName,
        defaultLocale,
        antLocale
    ]);
    return [
        componentLocale
    ];
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","./context":"h4Phx","./default":"1THDW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1THDW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _default = require("../locale/default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
exports.default = (0, _defaultDefault.default);

},{"../locale/default":"gC4P4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fyGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getKeyThenIncreaseKey", ()=>getKeyThenIncreaseKey);
parcelHelpers.export(exports, "typeList", ()=>typeList);
parcelHelpers.export(exports, "attachTypeApi", ()=>attachTypeApi);
parcelHelpers.export(exports, "getInstance", ()=>getInstance);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _checkCircleFilled = require("@ant-design/icons/es/icons/CheckCircleFilled");
var _checkCircleFilledDefault = parcelHelpers.interopDefault(_checkCircleFilled);
var _closeCircleFilled = require("@ant-design/icons/es/icons/CloseCircleFilled");
var _closeCircleFilledDefault = parcelHelpers.interopDefault(_closeCircleFilled);
var _exclamationCircleFilled = require("@ant-design/icons/es/icons/ExclamationCircleFilled");
var _exclamationCircleFilledDefault = parcelHelpers.interopDefault(_exclamationCircleFilled);
var _infoCircleFilled = require("@ant-design/icons/es/icons/InfoCircleFilled");
var _infoCircleFilledDefault = parcelHelpers.interopDefault(_infoCircleFilled);
var _loadingOutlined = require("@ant-design/icons/es/icons/LoadingOutlined");
var _loadingOutlinedDefault = parcelHelpers.interopDefault(_loadingOutlined);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcNotification = require("rc-notification");
var _rcNotificationDefault = parcelHelpers.interopDefault(_rcNotification);
var _react = require("react");
var _configProvider = require("../config-provider");
var _configProviderDefault = parcelHelpers.interopDefault(_configProvider);
var _useMessage = require("./hooks/useMessage");
var _useMessageDefault = parcelHelpers.interopDefault(_useMessage);
var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = "";
var transitionName = "move-up";
var hasTransitionName = false;
var getContainer;
var maxCount;
var rtl = false;
function getKeyThenIncreaseKey() {
    return key++;
}
function setMessageConfig(options) {
    if (options.top !== undefined) {
        defaultTop = options.top;
        messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) defaultDuration = options.duration;
    if (options.prefixCls !== undefined) localPrefixCls = options.prefixCls;
    if (options.getContainer !== undefined) {
        getContainer = options.getContainer;
        messageInstance = null; // delete messageInstance for new getContainer
    }
    if (options.transitionName !== undefined) {
        transitionName = options.transitionName;
        messageInstance = null; // delete messageInstance for new transitionName
        hasTransitionName = true;
    }
    if (options.maxCount !== undefined) {
        maxCount = options.maxCount;
        messageInstance = null;
    }
    if (options.rtl !== undefined) rtl = options.rtl;
}
function getRCNotificationInstance(args, callback) {
    var customizePrefixCls = args.prefixCls, getContextPopupContainer = args.getPopupContainer;
    var _globalConfig = (0, _configProvider.globalConfig)(), getPrefixCls = _globalConfig.getPrefixCls, getRootPrefixCls = _globalConfig.getRootPrefixCls, getIconPrefixCls = _globalConfig.getIconPrefixCls;
    var prefixCls = getPrefixCls("message", customizePrefixCls || localPrefixCls);
    var rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);
    var iconPrefixCls = getIconPrefixCls();
    if (messageInstance) {
        callback({
            prefixCls: prefixCls,
            rootPrefixCls: rootPrefixCls,
            iconPrefixCls: iconPrefixCls,
            instance: messageInstance
        });
        return;
    }
    var instanceConfig = {
        prefixCls: prefixCls,
        transitionName: hasTransitionName ? transitionName : "".concat(rootPrefixCls, "-").concat(transitionName),
        style: {
            top: defaultTop
        },
        getContainer: getContainer || getContextPopupContainer,
        maxCount: maxCount
    };
    (0, _rcNotificationDefault.default).newInstance(instanceConfig, function(instance) {
        if (messageInstance) {
            callback({
                prefixCls: prefixCls,
                rootPrefixCls: rootPrefixCls,
                iconPrefixCls: iconPrefixCls,
                instance: messageInstance
            });
            return;
        }
        messageInstance = instance;
        callback({
            prefixCls: prefixCls,
            rootPrefixCls: rootPrefixCls,
            iconPrefixCls: iconPrefixCls,
            instance: instance
        });
    });
}
var typeToIcon = {
    info: (0, _infoCircleFilledDefault.default),
    success: (0, _checkCircleFilledDefault.default),
    error: (0, _closeCircleFilledDefault.default),
    warning: (0, _exclamationCircleFilledDefault.default),
    loading: (0, _loadingOutlinedDefault.default)
};
var typeList = Object.keys(typeToIcon);
function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
    var _classNames;
    var duration = args.duration !== undefined ? args.duration : defaultDuration;
    var IconComponent = typeToIcon[args.type];
    var messageClass = (0, _classnamesDefault.default)("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
    return {
        key: args.key,
        duration: duration,
        style: args.style || {},
        className: args.className,
        content: /*#__PURE__*/ _react.createElement((0, _configProviderDefault.default), {
            iconPrefixCls: iconPrefixCls
        }, /*#__PURE__*/ _react.createElement("div", {
            className: messageClass
        }, args.icon || IconComponent && /*#__PURE__*/ _react.createElement(IconComponent, null), /*#__PURE__*/ _react.createElement("span", null, args.content))),
        onClose: args.onClose,
        onClick: args.onClick
    };
}
function notice(args) {
    var target = args.key || getKeyThenIncreaseKey();
    var closePromise = new Promise(function(resolve) {
        var callback = function callback() {
            if (typeof args.onClose === "function") args.onClose();
            return resolve(true);
        };
        getRCNotificationInstance(args, function(_ref) {
            var prefixCls = _ref.prefixCls, iconPrefixCls = _ref.iconPrefixCls, instance = _ref.instance;
            instance.notice(getRCNoticeProps((0, _extendsDefault.default)((0, _extendsDefault.default)({}, args), {
                key: target,
                onClose: callback
            }), prefixCls, iconPrefixCls));
        });
    });
    var result = function result() {
        if (messageInstance) messageInstance.removeNotice(target);
    };
    result.then = function(filled, rejected) {
        return closePromise.then(filled, rejected);
    };
    result.promise = closePromise;
    return result;
}
function isArgsProps(content) {
    return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
var api = {
    open: notice,
    config: setMessageConfig,
    destroy: function destroy(messageKey) {
        if (messageInstance) {
            if (messageKey) {
                var _messageInstance = messageInstance, removeNotice = _messageInstance.removeNotice;
                removeNotice(messageKey);
            } else {
                var _messageInstance2 = messageInstance, destroy = _messageInstance2.destroy;
                destroy();
                messageInstance = null;
            }
        }
    }
};
function attachTypeApi(originalApi, type) {
    originalApi[type] = function(content, duration, onClose) {
        if (isArgsProps(content)) return originalApi.open((0, _extendsDefault.default)((0, _extendsDefault.default)({}, content), {
            type: type
        }));
        if (typeof duration === "function") {
            onClose = duration;
            duration = undefined;
        }
        return originalApi.open({
            content: content,
            duration: duration,
            type: type,
            onClose: onClose
        });
    };
}
typeList.forEach(function(type) {
    return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = (0, _useMessageDefault.default)(getRCNotificationInstance, getRCNoticeProps);
var getInstance = function getInstance() {
    return null;
};
exports.default = api;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@ant-design/icons/es/icons/CheckCircleFilled":"cF33C","@ant-design/icons/es/icons/CloseCircleFilled":"hNhJu","@ant-design/icons/es/icons/ExclamationCircleFilled":"dLwMF","@ant-design/icons/es/icons/InfoCircleFilled":"76Mek","@ant-design/icons/es/icons/LoadingOutlined":"1Fi2e","classnames":"jocGM","rc-notification":"kigwc","react":"21dqq","../config-provider":"iMraF","./hooks/useMessage":"7ZCfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cF33C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _checkCircleFilled = require("@ant-design/icons-svg/es/asn/CheckCircleFilled");
var _checkCircleFilledDefault = parcelHelpers.interopDefault(_checkCircleFilled);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var CheckCircleFilled = function CheckCircleFilled(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _checkCircleFilledDefault.default)
    }));
};
CheckCircleFilled.displayName = "CheckCircleFilled";
exports.default = /*#__PURE__*/ _react.forwardRef(CheckCircleFilled);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/CheckCircleFilled":"ddvWC","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ddvWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var CheckCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                }
            }
        ]
    },
    "name": "check-circle",
    "theme": "filled"
};
exports.default = CheckCircleFilled;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkong":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _context = require("./Context");
var _contextDefault = parcelHelpers.interopDefault(_context);
var _iconBase = require("./IconBase");
var _iconBaseDefault = parcelHelpers.interopDefault(_iconBase);
var _twoTonePrimaryColor = require("./twoTonePrimaryColor");
var _utils = require("../utils"); // Initial setting
var _excluded = [
    "className",
    "icon",
    "spin",
    "rotate",
    "tabIndex",
    "onClick",
    "twoToneColor"
];
// should move it to antd main repo?
(0, _twoTonePrimaryColor.setTwoToneColor)("#1890ff");
var Icon = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = (0, _objectWithoutPropertiesDefault.default)(props, _excluded);
    var _React$useContext = _react.useContext((0, _contextDefault.default)), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre;
    var classString = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) iconTabIndex = -1;
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArrayDefault.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /*#__PURE__*/ _react.createElement("span", (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({
        role: "img",
        "aria-label": icon.name
    }, restProps), {}, {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/ _react.createElement((0, _iconBaseDefault.default), {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = (0, _twoTonePrimaryColor.getTwoToneColor);
Icon.setTwoToneColor = (0, _twoTonePrimaryColor.setTwoToneColor);
exports.default = Icon;

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","react":"21dqq","classnames":"jocGM","./Context":"dIWfS","./IconBase":"beKS9","./twoTonePrimaryColor":"cs45k","../utils":"aP1dF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beKS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _utils = require("../utils");
var _excluded = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor"
];
var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
};
function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return (0, _objectSpread2Default.default)({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = (0, _objectWithoutPropertiesDefault.default)(props, _excluded);
    var colors = twoToneColorPalette;
    if (primaryColor) colors = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
    };
    (0, _utils.useInsertStyles)();
    (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!(0, _utils.isIconDefinition)(icon)) return null;
    var target = icon;
    if (target && typeof target.icon === "function") target = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
    return (0, _utils.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2Default.default)({
        className: className,
        onClick: onClick,
        style: style,
        "data-icon": target.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
    }, restProps));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
exports.default = IconBase;

},{"@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","../utils":"aP1dF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aP1dF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warning", ()=>warning);
parcelHelpers.export(exports, "isIconDefinition", ()=>isIconDefinition);
parcelHelpers.export(exports, "normalizeAttrs", ()=>normalizeAttrs);
parcelHelpers.export(exports, "generate", ()=>generate);
parcelHelpers.export(exports, "getSecondaryColor", ()=>getSecondaryColor);
parcelHelpers.export(exports, "normalizeTwoToneColors", ()=>normalizeTwoToneColors) // These props make sure that the SVG behaviours like general text.
;
parcelHelpers.export(exports, "svgBaseProps", ()=>svgBaseProps);
parcelHelpers.export(exports, "iconStyles", ()=>iconStyles);
parcelHelpers.export(exports, "useInsertStyles", ()=>useInsertStyles);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _colors = require("@ant-design/colors");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _warning = require("rc-util/es/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _dynamicCSS = require("rc-util/es/Dom/dynamicCSS");
var _context = require("./components/Context");
var _contextDefault = parcelHelpers.interopDefault(_context);
function warning(valid, message) {
    (0, _warningDefault.default)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return (0, _typeofDefault.default)(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && ((0, _typeofDefault.default)(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case "class":
                acc.className = val;
                delete acc.class;
                break;
            default:
                acc[key] = val;
        }
        return acc;
    }, {});
}
function generate(node, key, rootProps) {
    if (!rootProps) return /*#__PURE__*/ (0, _reactDefault.default).createElement(node.tag, (0, _objectSpread2Default.default)({
        key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(node.tag, (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({
        key: key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return (0, _colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) return [];
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var svgBaseProps = {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
    var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
    var _useContext = (0, _react.useContext)((0, _contextDefault.default)), csp = _useContext.csp;
    (0, _react.useEffect)(function() {
        (0, _dynamicCSS.updateCSS)(styleStr, "@ant-design-icons", {
            prepend: true,
            csp: csp
        });
    }, []);
};

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/typeof":"i7HWY","@ant-design/colors":"kM85l","react":"21dqq","rc-util/es/warning":"c7oua","rc-util/es/Dom/dynamicCSS":"lfei6","./components/Context":"dIWfS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kM85l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blue", ()=>blue);
parcelHelpers.export(exports, "cyan", ()=>cyan);
parcelHelpers.export(exports, "geekblue", ()=>geekblue);
parcelHelpers.export(exports, "generate", ()=>generate);
parcelHelpers.export(exports, "gold", ()=>gold);
parcelHelpers.export(exports, "green", ()=>green);
parcelHelpers.export(exports, "grey", ()=>grey);
parcelHelpers.export(exports, "lime", ()=>lime);
parcelHelpers.export(exports, "magenta", ()=>magenta);
parcelHelpers.export(exports, "orange", ()=>orange);
parcelHelpers.export(exports, "presetDarkPalettes", ()=>presetDarkPalettes);
parcelHelpers.export(exports, "presetPalettes", ()=>presetPalettes);
parcelHelpers.export(exports, "presetPrimaryColors", ()=>presetPrimaryColors);
parcelHelpers.export(exports, "purple", ()=>purple);
parcelHelpers.export(exports, "red", ()=>red);
parcelHelpers.export(exports, "volcano", ()=>volcano);
parcelHelpers.export(exports, "yellow", ()=>yellow);
var _tinycolor = require("@ctrl/tinycolor");
var hueStep = 2; // 色相阶梯
var saturationStep = 0.16; // 饱和度阶梯，浅色部分
var saturationStep2 = 0.05; // 饱和度阶梯，深色部分
var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
var brightnessStep2 = 0.15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [
    {
        index: 7,
        opacity: 0.15
    },
    {
        index: 6,
        opacity: 0.25
    },
    {
        index: 5,
        opacity: 0.3
    },
    {
        index: 5,
        opacity: 0.45
    },
    {
        index: 5,
        opacity: 0.65
    },
    {
        index: 5,
        opacity: 0.85
    },
    {
        index: 4,
        opacity: 0.9
    },
    {
        index: 3,
        opacity: 0.95
    },
    {
        index: 2,
        opacity: 0.97
    },
    {
        index: 1,
        opacity: 0.98
    }
]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
    var r = _ref.r, g = _ref.g, b = _ref.b;
    var hsv = (0, _tinycolor.rgbToHsv)(r, g, b);
    return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v
    };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex(_ref2) {
    var r = _ref2.r, g = _ref2.g, b = _ref2.b;
    return "#".concat((0, _tinycolor.rgbToHex)(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1, rgb2, amount) {
    var p = amount / 100;
    var rgb = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b
    };
    return rgb;
}
function getHue(hsv, i, light) {
    var hue; // 根据色相不同，色相转向不同
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    else hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    if (hue < 0) hue += 360;
    else if (hue >= 360) hue -= 360;
    return hue;
}
function getSaturation(hsv, i, light) {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) return hsv.s;
    var saturation;
    if (light) saturation = hsv.s - saturationStep * i;
    else if (i === darkColorCount) saturation = hsv.s + saturationStep;
    else saturation = hsv.s + saturationStep2 * i;
     // 边界值修正
    if (saturation > 1) saturation = 1;
     // 第一格的 s 限制在 0.06-0.1 之间
    if (light && i === lightColorCount && saturation > 0.1) saturation = 0.1;
    if (saturation < 0.06) saturation = 0.06;
    return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
    var value;
    if (light) value = hsv.v + brightnessStep1 * i;
    else value = hsv.v - brightnessStep2 * i;
    if (value > 1) value = 1;
    return Number(value.toFixed(2));
}
function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var patterns = [];
    var pColor = (0, _tinycolor.inputToRGB)(color);
    for(var i = lightColorCount; i > 0; i -= 1){
        var hsv = toHsv(pColor);
        var colorString = toHex((0, _tinycolor.inputToRGB)({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true)
        }));
        patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for(var _i = 1; _i <= darkColorCount; _i += 1){
        var _hsv = toHsv(pColor);
        var _colorString = toHex((0, _tinycolor.inputToRGB)({
            h: getHue(_hsv, _i),
            s: getSaturation(_hsv, _i),
            v: getValue(_hsv, _i)
        }));
        patterns.push(_colorString);
    } // dark theme patterns
    if (opts.theme === "dark") return darkColorMap.map(function(_ref3) {
        var index = _ref3.index, opacity = _ref3.opacity;
        var darkColorString = toHex(mix((0, _tinycolor.inputToRGB)(opts.backgroundColor || "#141414"), (0, _tinycolor.inputToRGB)(patterns[index]), opacity * 100));
        return darkColorString;
    });
    return patterns;
}
var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes
    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
        theme: "dark",
        backgroundColor: "#141414"
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;

},{"@ctrl/tinycolor":"e1DHG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1DHG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("./index");
parcelHelpers.exportAll(_index, exports);
var _cssColorNames = require("./css-color-names");
parcelHelpers.exportAll(_cssColorNames, exports);
var _readability = require("./readability");
parcelHelpers.exportAll(_readability, exports);
var _toMsFilter = require("./to-ms-filter");
parcelHelpers.exportAll(_toMsFilter, exports);
var _fromRatio = require("./from-ratio");
parcelHelpers.exportAll(_fromRatio, exports);
var _formatInput = require("./format-input");
parcelHelpers.exportAll(_formatInput, exports);
var _random = require("./random");
parcelHelpers.exportAll(_random, exports);
var _interfaces = require("./interfaces");
parcelHelpers.exportAll(_interfaces, exports);
var _conversion = require("./conversion");
parcelHelpers.exportAll(_conversion, exports);
// kept for backwards compatability with v1
exports.default = (0, _index.tinycolor);

},{"./index":"lKbZq","./css-color-names":"b5HZM","./readability":"5IRQX","./to-ms-filter":"lh9Zs","./from-ratio":"aOZls","./format-input":"2EZlz","./random":"9EmXI","./interfaces":"5dzYk","./conversion":"lEGR9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKbZq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TinyColor", ()=>TinyColor);
// kept for backwards compatability with v1
parcelHelpers.export(exports, "tinycolor", ()=>tinycolor);
var _conversion = require("./conversion");
var _cssColorNames = require("./css-color-names");
var _formatInput = require("./format-input");
var _util = require("./util");
var TinyColor = /** @class */ function() {
    function TinyColor(color, opts) {
        if (color === void 0) color = "";
        if (opts === void 0) opts = {};
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) // eslint-disable-next-line no-constructor-return
        return color;
        if (typeof color === "number") color = (0, _conversion.numberInputToObject)(color);
        this.originalInput = color;
        var rgb = (0, _formatInput.inputToRGB)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) this.r = Math.round(this.r);
        if (this.g < 1) this.g = Math.round(this.g);
        if (this.b < 1) this.b = Math.round(this.b);
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function() {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function() {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */ TinyColor.prototype.getBrightness = function() {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */ TinyColor.prototype.getLuminance = function() {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) R = RsRGB / 12.92;
        else // eslint-disable-next-line prefer-exponentiation-operator
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        if (GsRGB <= 0.03928) G = GsRGB / 12.92;
        else // eslint-disable-next-line prefer-exponentiation-operator
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        if (BsRGB <= 0.03928) B = BsRGB / 12.92;
        else // eslint-disable-next-line prefer-exponentiation-operator
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */ TinyColor.prototype.getAlpha = function() {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */ TinyColor.prototype.setAlpha = function(alpha) {
        this.a = (0, _util.boundAlpha)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */ TinyColor.prototype.toHsv = function() {
        var hsv = (0, _conversion.rgbToHsv)(this.r, this.g, this.b);
        return {
            h: hsv.h * 360,
            s: hsv.s,
            v: hsv.v,
            a: this.a
        };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */ TinyColor.prototype.toHsvString = function() {
        var hsv = (0, _conversion.rgbToHsv)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */ TinyColor.prototype.toHsl = function() {
        var hsl = (0, _conversion.rgbToHsl)(this.r, this.g, this.b);
        return {
            h: hsl.h * 360,
            s: hsl.s,
            l: hsl.l,
            a: this.a
        };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */ TinyColor.prototype.toHslString = function() {
        var hsl = (0, _conversion.rgbToHsl)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */ TinyColor.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) allow3Char = false;
        return (0, _conversion.rgbToHex)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */ TinyColor.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) allow3Char = false;
        return "#" + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */ TinyColor.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) allow4Char = false;
        return (0, _conversion.rgbaToHex)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */ TinyColor.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) allow4Char = false;
        return "#" + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */ TinyColor.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */ TinyColor.prototype.toRgbString = function() {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */ TinyColor.prototype.toPercentageRgb = function() {
        var fmt = function(x) {
            return "".concat(Math.round((0, _util.bound01)(x, 255) * 100), "%");
        };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */ TinyColor.prototype.toPercentageRgbString = function() {
        var rnd = function(x) {
            return Math.round((0, _util.bound01)(x, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */ TinyColor.prototype.toName = function() {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return false;
        var hex = "#" + (0, _conversion.rgbToHex)(this.r, this.g, this.b, false);
        for(var _i = 0, _a = Object.entries((0, _cssColorNames.names)); _i < _a.length; _i++){
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) return key;
        }
        return false;
    };
    TinyColor.prototype.toString = function(format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this.a === 0) return this.toName();
            return this.toRgbString();
        }
        if (format === "rgb") formattedString = this.toRgbString();
        if (format === "prgb") formattedString = this.toPercentageRgbString();
        if (format === "hex" || format === "hex6") formattedString = this.toHexString();
        if (format === "hex3") formattedString = this.toHexString(true);
        if (format === "hex4") formattedString = this.toHex8String(true);
        if (format === "hex8") formattedString = this.toHex8String();
        if (format === "name") formattedString = this.toName();
        if (format === "hsl") formattedString = this.toHslString();
        if (format === "hsv") formattedString = this.toHsvString();
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function() {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */ TinyColor.prototype.lighten = function(amount) {
        if (amount === void 0) amount = 10;
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0, _util.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */ TinyColor.prototype.brighten = function(amount) {
        if (amount === void 0) amount = 10;
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */ TinyColor.prototype.darken = function(amount) {
        if (amount === void 0) amount = 10;
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0, _util.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */ TinyColor.prototype.tint = function(amount) {
        if (amount === void 0) amount = 10;
        return this.mix("white", amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */ TinyColor.prototype.shade = function(amount) {
        if (amount === void 0) amount = 10;
        return this.mix("black", amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */ TinyColor.prototype.desaturate = function(amount) {
        if (amount === void 0) amount = 10;
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0, _util.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */ TinyColor.prototype.saturate = function(amount) {
        if (amount === void 0) amount = 10;
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0, _util.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */ TinyColor.prototype.greyscale = function() {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */ TinyColor.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */ TinyColor.prototype.mix = function(color, amount) {
        if (amount === void 0) amount = 50;
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function(results, slices) {
        if (results === void 0) results = 6;
        if (slices === void 0) slices = 30;
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [
            this
        ];
        for(hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;){
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */ TinyColor.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function(results) {
        if (results === void 0) results = 6;
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while(results--){
            res.push(new TinyColor({
                h: h,
                s: s,
                v: v
            }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({
                h: (h + 72) % 360,
                s: hsl.s,
                l: hsl.l
            }),
            new TinyColor({
                h: (h + 216) % 360,
                s: hsl.s,
                l: hsl.l
            }), 
        ];
    };
    /**
     * Compute how the color would appear on a background
     */ TinyColor.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a
        });
    };
    /**
     * Alias for `polyad(3)`
     */ TinyColor.prototype.triad = function() {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */ TinyColor.prototype.tetrad = function() {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */ TinyColor.prototype.polyad = function(n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [
            this
        ];
        var increment = 360 / n;
        for(var i = 1; i < n; i++)result.push(new TinyColor({
            h: (h + i * increment) % 360,
            s: hsl.s,
            l: hsl.l
        }));
        return result;
    };
    /**
     * compare color vs current color
     */ TinyColor.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}();
function tinycolor(color, opts) {
    if (color === void 0) color = "";
    if (opts === void 0) opts = {};
    return new TinyColor(color, opts);
}

},{"./conversion":"lEGR9","./css-color-names":"b5HZM","./format-input":"2EZlz","./util":"83iaU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEGR9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */ parcelHelpers.export(exports, "rgbToRgb", ()=>rgbToRgb);
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */ parcelHelpers.export(exports, "rgbToHsl", ()=>rgbToHsl);
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */ parcelHelpers.export(exports, "hslToRgb", ()=>hslToRgb);
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */ parcelHelpers.export(exports, "rgbToHsv", ()=>rgbToHsv);
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */ parcelHelpers.export(exports, "hsvToRgb", ()=>hsvToRgb);
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */ parcelHelpers.export(exports, "rgbToHex", ()=>rgbToHex);
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */ // eslint-disable-next-line max-params
parcelHelpers.export(exports, "rgbaToHex", ()=>rgbaToHex);
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */ parcelHelpers.export(exports, "rgbaToArgbHex", ()=>rgbaToArgbHex);
/** Converts a decimal to a hex value */ parcelHelpers.export(exports, "convertDecimalToHex", ()=>convertDecimalToHex);
/** Converts a hex value to a decimal */ parcelHelpers.export(exports, "convertHexToDecimal", ()=>convertHexToDecimal);
/** Parse a base-16 hex value into a base-10 integer */ parcelHelpers.export(exports, "parseIntFromHex", ()=>parseIntFromHex);
parcelHelpers.export(exports, "numberInputToObject", ()=>numberInputToObject);
var _util = require("./util");
function rgbToRgb(r, g, b) {
    return {
        r: (0, _util.bound01)(r, 255) * 255,
        g: (0, _util.bound01)(g, 255) * 255,
        b: (0, _util.bound01)(b, 255) * 255
    };
}
function rgbToHsl(r, g, b) {
    r = (0, _util.bound01)(r, 255);
    g = (0, _util.bound01)(g, 255);
    b = (0, _util.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return {
        h: h,
        s: s,
        l: l
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * (6 * t);
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = (0, _util.bound01)(h, 360);
    s = (0, _util.bound01)(s, 100);
    l = (0, _util.bound01)(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: r * 255,
        g: g * 255,
        b: b * 255
    };
}
function rgbToHsv(r, g, b) {
    r = (0, _util.bound01)(r, 255);
    g = (0, _util.bound01)(g, 255);
    b = (0, _util.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) h = 0; // achromatic
    else {
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return {
        h: h,
        s: s,
        v: v
    };
}
function hsvToRgb(h, s, v) {
    h = (0, _util.bound01)(h, 360) * 6;
    s = (0, _util.bound01)(s, 100);
    v = (0, _util.bound01)(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [
        v,
        q,
        p,
        p,
        t,
        v
    ][mod];
    var g = [
        t,
        v,
        v,
        q,
        p,
        p
    ][mod];
    var b = [
        p,
        p,
        t,
        v,
        v,
        q
    ][mod];
    return {
        r: r * 255,
        g: g * 255,
        b: b * 255
    };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        (0, _util.pad2)(Math.round(r).toString(16)),
        (0, _util.pad2)(Math.round(g).toString(16)),
        (0, _util.pad2)(Math.round(b).toString(16)), 
    ];
    // Return a 3 character hex if possible
    if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        (0, _util.pad2)(Math.round(r).toString(16)),
        (0, _util.pad2)(Math.round(g).toString(16)),
        (0, _util.pad2)(Math.round(b).toString(16)),
        (0, _util.pad2)(convertDecimalToHex(a)), 
    ];
    // Return a 4 character hex if possible
    if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    return hex.join("");
}
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        (0, _util.pad2)(convertDecimalToHex(a)),
        (0, _util.pad2)(Math.round(r).toString(16)),
        (0, _util.pad2)(Math.round(g).toString(16)),
        (0, _util.pad2)(Math.round(b).toString(16)), 
    ];
    return hex.join("");
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff
    };
}

},{"./util":"83iaU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"83iaU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */ parcelHelpers.export(exports, "bound01", ()=>bound01);
/**
 * Force a number between 0 and 1
 * @hidden
 */ parcelHelpers.export(exports, "clamp01", ()=>clamp01);
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */ parcelHelpers.export(exports, "isOnePointZero", ()=>isOnePointZero);
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */ parcelHelpers.export(exports, "isPercentage", ()=>isPercentage);
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */ parcelHelpers.export(exports, "boundAlpha", ()=>boundAlpha);
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */ parcelHelpers.export(exports, "convertToPercentage", ()=>convertToPercentage);
/**
 * Force a hex value to have 2 characters
 * @hidden
 */ parcelHelpers.export(exports, "pad2", ()=>pad2);
function bound01(n, max) {
    if (isOnePointZero(n)) n = "100%";
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) n = parseInt(String(n * max), 10) / 100;
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) return 1;
    // Convert into [0, 1] range if it isn't already
    if (max === 360) // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
    else // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = n % max / parseFloat(String(max));
    return n;
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
    return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) a = 1;
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) return "".concat(Number(n) * 100, "%");
    return n;
}
function pad2(c) {
    return c.length === 1 ? "0" + c : String(c);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5HZM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "names", ()=>names);
var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EZlz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */ parcelHelpers.export(exports, "inputToRGB", ()=>inputToRGB);
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */ parcelHelpers.export(exports, "stringInputToObject", ()=>stringInputToObject);
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */ parcelHelpers.export(exports, "isValidCSSUnit", ()=>isValidCSSUnit);
var _conversion = require("./conversion");
var _cssColorNames = require("./css-color-names");
var _util = require("./util");
function inputToRGB(color) {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === "string") color = stringInputToObject(color);
    if (typeof color === "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = (0, _conversion.rgbToRgb)(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = (0, _util.convertToPercentage)(color.s);
            v = (0, _util.convertToPercentage)(color.v);
            rgb = (0, _conversion.hsvToRgb)(color.h, s, v);
            ok = true;
            format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = (0, _util.convertToPercentage)(color.s);
            l = (0, _util.convertToPercentage)(color.l);
            rgb = (0, _conversion.hslToRgb)(color.h, s, l);
            ok = true;
            format = "hsl";
        }
        if (Object.prototype.hasOwnProperty.call(color, "a")) a = color.a;
    }
    a = (0, _util.boundAlpha)(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = "[-\\+]?\\d+%?";
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) return false;
    var named = false;
    if ((0, _cssColorNames.names)[color]) {
        color = (0, _cssColorNames.names)[color];
        named = true;
    } else if (color === "transparent") return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
    };
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) return {
        r: match[1],
        g: match[2],
        b: match[3]
    };
    match = matchers.rgba.exec(color);
    if (match) return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
    };
    match = matchers.hsl.exec(color);
    if (match) return {
        h: match[1],
        s: match[2],
        l: match[3]
    };
    match = matchers.hsla.exec(color);
    if (match) return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
    };
    match = matchers.hsv.exec(color);
    if (match) return {
        h: match[1],
        s: match[2],
        v: match[3]
    };
    match = matchers.hsva.exec(color);
    if (match) return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
    };
    match = matchers.hex8.exec(color);
    if (match) return {
        r: (0, _conversion.parseIntFromHex)(match[1]),
        g: (0, _conversion.parseIntFromHex)(match[2]),
        b: (0, _conversion.parseIntFromHex)(match[3]),
        a: (0, _conversion.convertHexToDecimal)(match[4]),
        format: named ? "name" : "hex8"
    };
    match = matchers.hex6.exec(color);
    if (match) return {
        r: (0, _conversion.parseIntFromHex)(match[1]),
        g: (0, _conversion.parseIntFromHex)(match[2]),
        b: (0, _conversion.parseIntFromHex)(match[3]),
        format: named ? "name" : "hex"
    };
    match = matchers.hex4.exec(color);
    if (match) return {
        r: (0, _conversion.parseIntFromHex)(match[1] + match[1]),
        g: (0, _conversion.parseIntFromHex)(match[2] + match[2]),
        b: (0, _conversion.parseIntFromHex)(match[3] + match[3]),
        a: (0, _conversion.convertHexToDecimal)(match[4] + match[4]),
        format: named ? "name" : "hex8"
    };
    match = matchers.hex3.exec(color);
    if (match) return {
        r: (0, _conversion.parseIntFromHex)(match[1] + match[1]),
        g: (0, _conversion.parseIntFromHex)(match[2] + match[2]),
        b: (0, _conversion.parseIntFromHex)(match[3] + match[3]),
        format: named ? "name" : "hex"
    };
    return false;
}
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

},{"./conversion":"lEGR9","./css-color-names":"b5HZM","./util":"83iaU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IRQX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
/**
 * AKA `contrast`
 *
 * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
 */ parcelHelpers.export(exports, "readability", ()=>readability);
/**
 * Ensure that foreground and background color combinations meet WCAG2 guidelines.
 * The third argument is an object.
 *      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
 *      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
 * If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
 *
 * Example
 * ```ts
 * new TinyColor().isReadable('#000', '#111') => false
 * new TinyColor().isReadable('#000', '#111', { level: 'AA', size: 'large' }) => false
 * ```
 */ parcelHelpers.export(exports, "isReadable", ()=>isReadable);
/**
 * Given a base color and a list of possible foreground or background
 * colors for that base, returns the most readable color.
 * Optionally returns Black or White if the most readable color is unreadable.
 *
 * @param baseColor - the base color.
 * @param colorList - array of colors to pick the most readable one from.
 * @param args - and object with extra arguments
 *
 * Example
 * ```ts
 * new TinyColor().mostReadable('#123', ['#124", "#125'], { includeFallbackColors: false }).toHexString(); // "#112255"
 * new TinyColor().mostReadable('#123', ['#124", "#125'],{ includeFallbackColors: true }).toHexString();  // "#ffffff"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'large' }).toHexString(); // "#faf3f3"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'small' }).toHexString(); // "#ffffff"
 * ```
 */ parcelHelpers.export(exports, "mostReadable", ()=>mostReadable);
var _index = require("./index");
function readability(color1, color2) {
    var c1 = new (0, _index.TinyColor)(color1);
    var c2 = new (0, _index.TinyColor)(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
}
function isReadable(color1, color2, wcag2) {
    var _a, _b;
    if (wcag2 === void 0) wcag2 = {
        level: "AA",
        size: "small"
    };
    var readabilityLevel = readability(color1, color2);
    switch(((_a = wcag2.level) !== null && _a !== void 0 ? _a : "AA") + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : "small")){
        case "AAsmall":
        case "AAAlarge":
            return readabilityLevel >= 4.5;
        case "AAlarge":
            return readabilityLevel >= 3;
        case "AAAsmall":
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) args = {
        includeFallbackColors: false,
        level: "AA",
        size: "small"
    };
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for(var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++){
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new (0, _index.TinyColor)(color);
        }
    }
    if (isReadable(baseColor, bestColor, {
        level: level,
        size: size
    }) || !includeFallbackColors) return bestColor;
    args.includeFallbackColors = false;
    return mostReadable(baseColor, [
        "#fff",
        "#000"
    ], args);
}

},{"./index":"lKbZq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lh9Zs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns the color represented as a Microsoft filter for use in old versions of IE.
 */ parcelHelpers.export(exports, "toMsFilter", ()=>toMsFilter);
var _conversion = require("./conversion");
var _index = require("./index");
function toMsFilter(firstColor, secondColor) {
    var color = new (0, _index.TinyColor)(firstColor);
    var hex8String = "#" + (0, _conversion.rgbaToArgbHex)(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
        var s = new (0, _index.TinyColor)(secondColor);
        secondHex8String = "#" + (0, _conversion.rgbaToArgbHex)(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(".concat(gradientType, "startColorstr=").concat(hex8String, ",endColorstr=").concat(secondHex8String, ")");
}

},{"./conversion":"lEGR9","./index":"lKbZq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOZls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * If input is an object, force 1 into "1.0" to handle ratios properly
 * String input requires "1.0" as input, so 1 will be treated as 1
 */ parcelHelpers.export(exports, "fromRatio", ()=>fromRatio);
/** old random function */ parcelHelpers.export(exports, "legacyRandom", ()=>legacyRandom);
var _index = require("./index");
var _util = require("./util");
function fromRatio(ratio, opts) {
    var newColor = {
        r: (0, _util.convertToPercentage)(ratio.r),
        g: (0, _util.convertToPercentage)(ratio.g),
        b: (0, _util.convertToPercentage)(ratio.b)
    };
    if (ratio.a !== undefined) newColor.a = Number(ratio.a);
    return new (0, _index.TinyColor)(newColor, opts);
}
function legacyRandom() {
    return new (0, _index.TinyColor)({
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    });
}

},{"./index":"lKbZq","./util":"83iaU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9EmXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "bounds", ()=>bounds);
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/
var _index = require("./index");
function random(options) {
    if (options === void 0) options = {};
    // Check if we need to generate multiple colors
    if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while(totalColors > colors.length){
            // Since we're generating multiple colors,
            // incremement the seed. Otherwise we'd just
            // generate the same color each time...
            options.count = null;
            if (options.seed) options.seed += 1;
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    // First we pick a hue (H)
    var h = pickHue(options.hue, options.seed);
    // Then use H to determine saturation (S)
    var s = pickSaturation(h, options);
    // Then use S and H to determine brightness (B).
    var v = pickBrightness(h, s, options);
    var res = {
        h: h,
        s: s,
        v: v
    };
    if (options.alpha !== undefined) res.a = options.alpha;
    // Then we return the HSB color in the desired format
    return new (0, _index.TinyColor)(res);
}
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (res < 0) res = 360 + res;
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === "monochrome") return 0;
    if (options.luminosity === "random") return randomWithin([
        0,
        100
    ], options.seed);
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch(options.luminosity){
        case "bright":
            sMin = 55;
            break;
        case "dark":
            sMin = sMax - 10;
            break;
        case "light":
            sMax = 55;
            break;
        default:
            break;
    }
    return randomWithin([
        sMin,
        sMax
    ], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch(options.luminosity){
        case "dark":
            bMax = bMin + 20;
            break;
        case "light":
            bMin = (bMax + bMin) / 2;
            break;
        case "random":
            bMin = 0;
            bMax = 100;
            break;
        default:
            break;
    }
    return randomWithin([
        bMin,
        bMax
    ], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for(var i = 0; i < lowerBounds.length - 1; i++){
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - m * s1;
            return m * S + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) return [
        num,
        num
    ];
    if (typeof colorInput === "string") {
        var namedColor = bounds.find(function(n) {
            return n.name === colorInput;
        });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) return color.hueRange;
        }
        var parsed = new (0, _index.TinyColor)(colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [
                hue,
                hue
            ];
        }
    }
    return [
        0,
        360
    ];
}
function getColorInfo(hue) {
    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) hue -= 360;
    for(var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++){
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) return color;
    }
    throw Error("Color not found");
}
function randomWithin(range, seed) {
    if (seed === undefined) return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
    // Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    var max = range[1] || 1;
    var min = range[0] || 0;
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [
            sMin,
            sMax
        ],
        brightnessRange: [
            bMin,
            bMax
        ]
    };
}
var bounds = [
    {
        name: "monochrome",
        hueRange: null,
        lowerBounds: [
            [
                0,
                0
            ],
            [
                100,
                0
            ], 
        ]
    },
    {
        name: "red",
        hueRange: [
            -26,
            18
        ],
        lowerBounds: [
            [
                20,
                100
            ],
            [
                30,
                92
            ],
            [
                40,
                89
            ],
            [
                50,
                85
            ],
            [
                60,
                78
            ],
            [
                70,
                70
            ],
            [
                80,
                60
            ],
            [
                90,
                55
            ],
            [
                100,
                50
            ], 
        ]
    },
    {
        name: "orange",
        hueRange: [
            19,
            46
        ],
        lowerBounds: [
            [
                20,
                100
            ],
            [
                30,
                93
            ],
            [
                40,
                88
            ],
            [
                50,
                86
            ],
            [
                60,
                85
            ],
            [
                70,
                70
            ],
            [
                100,
                70
            ], 
        ]
    },
    {
        name: "yellow",
        hueRange: [
            47,
            62
        ],
        lowerBounds: [
            [
                25,
                100
            ],
            [
                40,
                94
            ],
            [
                50,
                89
            ],
            [
                60,
                86
            ],
            [
                70,
                84
            ],
            [
                80,
                82
            ],
            [
                90,
                80
            ],
            [
                100,
                75
            ], 
        ]
    },
    {
        name: "green",
        hueRange: [
            63,
            178
        ],
        lowerBounds: [
            [
                30,
                100
            ],
            [
                40,
                90
            ],
            [
                50,
                85
            ],
            [
                60,
                81
            ],
            [
                70,
                74
            ],
            [
                80,
                64
            ],
            [
                90,
                50
            ],
            [
                100,
                40
            ], 
        ]
    },
    {
        name: "blue",
        hueRange: [
            179,
            257
        ],
        lowerBounds: [
            [
                20,
                100
            ],
            [
                30,
                86
            ],
            [
                40,
                80
            ],
            [
                50,
                74
            ],
            [
                60,
                60
            ],
            [
                70,
                52
            ],
            [
                80,
                44
            ],
            [
                90,
                39
            ],
            [
                100,
                35
            ], 
        ]
    },
    {
        name: "purple",
        hueRange: [
            258,
            282
        ],
        lowerBounds: [
            [
                20,
                100
            ],
            [
                30,
                87
            ],
            [
                40,
                79
            ],
            [
                50,
                70
            ],
            [
                60,
                65
            ],
            [
                70,
                59
            ],
            [
                80,
                52
            ],
            [
                90,
                45
            ],
            [
                100,
                42
            ], 
        ]
    },
    {
        name: "pink",
        hueRange: [
            283,
            334
        ],
        lowerBounds: [
            [
                20,
                100
            ],
            [
                30,
                90
            ],
            [
                40,
                86
            ],
            [
                60,
                84
            ],
            [
                80,
                80
            ],
            [
                90,
                75
            ],
            [
                100,
                73
            ], 
        ]
    }, 
];

},{"./index":"lKbZq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5dzYk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfei6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "injectCSS", ()=>injectCSS);
parcelHelpers.export(exports, "removeCSS", ()=>removeCSS);
parcelHelpers.export(exports, "updateCSS", ()=>updateCSS);
var _canUseDom = require("./canUseDom");
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
var MARK_KEY = "rc-util-key";
function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, mark = _ref.mark;
    if (mark) return mark.startsWith("data-") ? mark : "data-".concat(mark);
    return MARK_KEY;
}
function getContainer(option) {
    if (option.attachTo) return option.attachTo;
    var head = document.querySelector("head");
    return head || document.body;
}
function injectCSS(css) {
    var _option$csp;
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!(0, _canUseDomDefault.default)()) return null;
    var styleNode = document.createElement("style");
    if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
        var _option$csp2;
        styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (option.prepend && container.prepend) // Use `prepend` first
    container.prepend(styleNode);
    else if (option.prepend && firstChild) // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
    else container.appendChild(styleNode);
    return styleNode;
}
var containerCache = new Map();
function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var container = getContainer(option);
    return Array.from(containerCache.get(container).children).find(function(node) {
        return node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key;
    });
}
function removeCSS(key) {
    var _existNode$parentNode;
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    existNode === null || existNode === void 0 || (_existNode$parentNode = existNode.parentNode) === null || _existNode$parentNode === void 0 || _existNode$parentNode.removeChild(existNode);
}
function updateCSS(css, key) {
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var container = getContainer(option); // Get real parent
    if (!containerCache.has(container)) {
        var placeholderStyle = injectCSS("", option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        parentNode.removeChild(placeholderStyle);
    }
    var existNode = findExistNode(key, option);
    if (existNode) {
        var _option$csp3, _option$csp4;
        if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
            var _option$csp5;
            existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
        }
        if (existNode.innerHTML !== css) existNode.innerHTML = css;
        return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
}

},{"./canUseDom":"hGxAQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGxAQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
exports.default = canUseDom;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cs45k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTwoToneColor", ()=>setTwoToneColor);
parcelHelpers.export(exports, "getTwoToneColor", ()=>getTwoToneColor);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _iconBase = require("./IconBase");
var _iconBaseDefault = parcelHelpers.interopDefault(_iconBase);
var _utils = require("../utils");
function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor), _normalizeTwoToneColo2 = (0, _slicedToArrayDefault.default)(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return (0, _iconBaseDefault.default).setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = (0, _iconBaseDefault.default).getTwoToneColors();
    if (!colors.calculated) return colors.primaryColor;
    return [
        colors.primaryColor,
        colors.secondaryColor
    ];
}

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","./IconBase":"beKS9","../utils":"aP1dF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNhJu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _closeCircleFilled = require("@ant-design/icons-svg/es/asn/CloseCircleFilled");
var _closeCircleFilledDefault = parcelHelpers.interopDefault(_closeCircleFilled);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var CloseCircleFilled = function CloseCircleFilled(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _closeCircleFilledDefault.default)
    }));
};
CloseCircleFilled.displayName = "CloseCircleFilled";
exports.default = /*#__PURE__*/ _react.forwardRef(CloseCircleFilled);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/CloseCircleFilled":"hpQDU","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpQDU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var CloseCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                }
            }
        ]
    },
    "name": "close-circle",
    "theme": "filled"
};
exports.default = CloseCircleFilled;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLwMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _exclamationCircleFilled = require("@ant-design/icons-svg/es/asn/ExclamationCircleFilled");
var _exclamationCircleFilledDefault = parcelHelpers.interopDefault(_exclamationCircleFilled);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _exclamationCircleFilledDefault.default)
    }));
};
ExclamationCircleFilled.displayName = "ExclamationCircleFilled";
exports.default = /*#__PURE__*/ _react.forwardRef(ExclamationCircleFilled);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/ExclamationCircleFilled":"dHARN","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHARN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var ExclamationCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                }
            }
        ]
    },
    "name": "exclamation-circle",
    "theme": "filled"
};
exports.default = ExclamationCircleFilled;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76Mek":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _infoCircleFilled = require("@ant-design/icons-svg/es/asn/InfoCircleFilled");
var _infoCircleFilledDefault = parcelHelpers.interopDefault(_infoCircleFilled);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var InfoCircleFilled = function InfoCircleFilled(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _infoCircleFilledDefault.default)
    }));
};
InfoCircleFilled.displayName = "InfoCircleFilled";
exports.default = /*#__PURE__*/ _react.forwardRef(InfoCircleFilled);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/InfoCircleFilled":"7JKQy","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JKQy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var InfoCircleFilled = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
                }
            }
        ]
    },
    "name": "info-circle",
    "theme": "filled"
};
exports.default = InfoCircleFilled;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Fi2e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _loadingOutlined = require("@ant-design/icons-svg/es/asn/LoadingOutlined");
var _loadingOutlinedDefault = parcelHelpers.interopDefault(_loadingOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var LoadingOutlined = function LoadingOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _loadingOutlinedDefault.default)
    }));
};
LoadingOutlined.displayName = "LoadingOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(LoadingOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/LoadingOutlined":"1fpzt","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1fpzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var LoadingOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "0 0 1024 1024",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                }
            }
        ]
    },
    "name": "loading",
    "theme": "outlined"
};
exports.default = LoadingOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kigwc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _notification = require("./Notification");
var _notificationDefault = parcelHelpers.interopDefault(_notification);
exports.default = (0, _notificationDefault.default);

},{"./Notification":"h2q1t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2q1t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var _render = require("rc-util/es/React/render");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcMotion = require("rc-motion");
var _notice = require("./Notice");
var _noticeDefault = parcelHelpers.interopDefault(_notice);
var _useNotification = require("./useNotification");
var _useNotificationDefault = parcelHelpers.interopDefault(_useNotification);
var _excluded = [
    "getContainer"
];
var seed = 0;
var now = Date.now();
function getUuid() {
    var id = seed;
    seed += 1;
    return "rcNotification_".concat(now, "_").concat(id);
}
var Notification = /*#__PURE__*/ function(_Component) {
    (0, _inheritsDefault.default)(Notification, _Component);
    var _super = (0, _createSuperDefault.default)(Notification);
    function Notification() {
        var _this;
        (0, _classCallCheckDefault.default)(this, Notification);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _this.state = {
            notices: []
        };
        _this.hookRefs = new Map();
        _this.add = function(originNotice, holderCallback) {
            var key = originNotice.key || getUuid();
            var notice = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, originNotice), {}, {
                key: key
            });
            var maxCount = _this.props.maxCount;
            _this.setState(function(previousState) {
                var notices = previousState.notices;
                var noticeIndex = notices.map(function(v) {
                    return v.notice.key;
                }).indexOf(key);
                var updatedNotices = notices.concat();
                if (noticeIndex !== -1) updatedNotices.splice(noticeIndex, 1, {
                    notice: notice,
                    holderCallback: holderCallback
                });
                else {
                    if (maxCount && notices.length >= maxCount) {
                        // XXX, use key of first item to update new added (let React to move exsiting
                        // instead of remove and mount). Same key was used before for both a) external
                        // manual control and b) internal react 'key' prop , which is not that good.
                        // eslint-disable-next-line no-param-reassign
                        // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
                        // Change to `updateMark` for compare instead.
                        // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
                        notice.key = updatedNotices[0].notice.key;
                        notice.updateMark = getUuid(); // zombieJ: That's why. User may close by key directly.
                        // We need record this but not re-render to avoid upper issue
                        // https://github.com/react-component/notification/issues/129
                        notice.userPassKey = key;
                        updatedNotices.shift();
                    }
                    updatedNotices.push({
                        notice: notice,
                        holderCallback: holderCallback
                    });
                }
                return {
                    notices: updatedNotices
                };
            });
        };
        _this.remove = function(removeKey) {
            _this.setState(function(_ref) {
                var notices = _ref.notices;
                return {
                    notices: notices.filter(function(_ref2) {
                        var _ref2$notice = _ref2.notice, key = _ref2$notice.key, userPassKey = _ref2$notice.userPassKey;
                        var mergedKey = userPassKey || key;
                        return mergedKey !== removeKey;
                    })
                };
            });
        };
        _this.noticePropsMap = {};
        return _this;
    }
    (0, _createClassDefault.default)(Notification, [
        {
            key: "getTransitionName",
            value: function getTransitionName() {
                var _this$props = this.props, prefixCls = _this$props.prefixCls, animation = _this$props.animation;
                var transitionName = this.props.transitionName;
                if (!transitionName && animation) transitionName = "".concat(prefixCls, "-").concat(animation);
                return transitionName;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var notices = this.state.notices;
                var _this$props2 = this.props, prefixCls = _this$props2.prefixCls, className = _this$props2.className, closeIcon = _this$props2.closeIcon, style = _this$props2.style;
                var noticeKeys = [];
                notices.forEach(function(_ref3, index) {
                    var notice = _ref3.notice, holderCallback = _ref3.holderCallback;
                    var updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
                    var key = notice.key, userPassKey = notice.userPassKey;
                    var noticeProps = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({
                        prefixCls: prefixCls,
                        closeIcon: closeIcon
                    }, notice), notice.props), {}, {
                        key: key,
                        noticeKey: userPassKey || key,
                        updateMark: updateMark,
                        onClose: function onClose(noticeKey) {
                            var _notice$onClose;
                            _this2.remove(noticeKey);
                            (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 || _notice$onClose.call(notice);
                        },
                        onClick: notice.onClick,
                        children: notice.content
                    }); // Give to motion
                    noticeKeys.push(key);
                    _this2.noticePropsMap[key] = {
                        props: noticeProps,
                        holderCallback: holderCallback
                    };
                });
                return /*#__PURE__*/ _react.createElement("div", {
                    className: (0, _classnamesDefault.default)(prefixCls, className),
                    style: style
                }, /*#__PURE__*/ _react.createElement((0, _rcMotion.CSSMotionList), {
                    keys: noticeKeys,
                    motionName: this.getTransitionName(),
                    onVisibleChanged: function onVisibleChanged(changedVisible, _ref4) {
                        var key = _ref4.key;
                        if (!changedVisible) delete _this2.noticePropsMap[key];
                    }
                }, function(_ref5) {
                    var key = _ref5.key, motionClassName = _ref5.className, motionStyle = _ref5.style, visible = _ref5.visible;
                    var _this2$noticePropsMap = _this2.noticePropsMap[key], noticeProps = _this2$noticePropsMap.props, holderCallback = _this2$noticePropsMap.holderCallback;
                    if (holderCallback) return /*#__PURE__*/ _react.createElement("div", {
                        key: key,
                        className: (0, _classnamesDefault.default)(motionClassName, "".concat(prefixCls, "-hook-holder")),
                        style: (0, _objectSpread2Default.default)({}, motionStyle),
                        ref: function ref(div) {
                            if (typeof key === "undefined") return;
                            if (div) {
                                _this2.hookRefs.set(key, div);
                                holderCallback(div, noticeProps);
                            } else _this2.hookRefs.delete(key);
                        }
                    });
                    return /*#__PURE__*/ _react.createElement((0, _noticeDefault.default), (0, _extendsDefault.default)({}, noticeProps, {
                        className: (0, _classnamesDefault.default)(motionClassName, noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.className),
                        style: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, motionStyle), noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.style),
                        visible: visible
                    }));
                }));
            }
        }
    ]);
    return Notification;
}((0, _react.Component));
Notification.newInstance = void 0;
Notification.defaultProps = {
    prefixCls: "rc-notification",
    animation: "fade",
    style: {
        top: 65,
        left: "50%"
    }
};
Notification.newInstance = function newNotificationInstance(properties, callback) {
    var _ref6 = properties || {}, getContainer = _ref6.getContainer, props = (0, _objectWithoutPropertiesDefault.default)(_ref6, _excluded);
    var div = document.createElement("div");
    if (getContainer) {
        var root = getContainer();
        root.appendChild(div);
    } else document.body.appendChild(div);
    var called = false;
    function ref(notification) {
        if (called) return;
        called = true;
        callback({
            notice: function notice(noticeProps) {
                notification.add(noticeProps);
            },
            removeNotice: function removeNotice(key) {
                notification.remove(key);
            },
            component: notification,
            destroy: function destroy() {
                (0, _render.unmount)(div);
                if (div.parentNode) div.parentNode.removeChild(div);
            },
            // Hooks
            useNotification: function useNotification() {
                return (0, _useNotificationDefault.default)(notification);
            }
        });
    } // Only used for test case usage
    (0, _render.render)(/*#__PURE__*/ _react.createElement(Notification, (0, _extendsDefault.default)({}, props, {
        ref: ref
    })), div);
};
exports.default = Notification;

},{"@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","rc-util/es/React/render":"fvmXJ","classnames":"jocGM","rc-motion":"aaavi","./Notice":"8eNv6","./useNotification":"av13r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvmXJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @private Test usage. Not work in prod */ parcelHelpers.export(exports, "_r", ()=>_r);
parcelHelpers.export(exports, "render", ()=>render) // ========================= Unmount ==========================
;
/** @private Test usage. Not work in prod */ parcelHelpers.export(exports, "_u", ()=>_u);
parcelHelpers.export(exports, "unmount", ()=>unmount);
var _regeneratorRuntime = require("@babel/runtime/helpers/esm/regeneratorRuntime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
var _asyncToGenerator = require("@babel/runtime/helpers/esm/asyncToGenerator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _reactDom = require("react-dom"); // Let compiler not to search module usage
var fullClone = (0, _objectSpread2Default.default)({}, _reactDom);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
    var mainVersion = Number((version || "").split(".")[0]);
    if (mainVersion >= 18) createRoot = fullClone.createRoot;
} catch (e) {}
function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0, _typeofDefault.default)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
}
var MARK = "__rc_react_root__";
function modernRender(node, container) {
    toggleWarning(true);
    var root = container[MARK] || createRoot(container);
    toggleWarning(false);
    root.render(node);
    container[MARK] = root;
}
function legacyRender(node, container) {
    reactRender(node, container);
}
function _r(node, container) {
    return legacyRender(node, container);
}
function render(node, container) {
    if (createRoot) {
        modernRender(node, container);
        return;
    }
    legacyRender(node, container);
}
function modernUnmount(_x) {
    return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
    _modernUnmount = (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee(container) {
        return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    return _context.abrupt("return", Promise.resolve().then(function() {
                        var _container$MARK;
                        (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
                        delete container[MARK];
                    }));
                case 1:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
    unmountComponentAtNode(container);
}
function _u(container) {
    return legacyUnmount(container);
}
function unmount(_x2) {
    return _unmount.apply(this, arguments);
}
function _unmount() {
    _unmount = (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee2(container) {
        return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee2$(_context2) {
            while(true)switch(_context2.prev = _context2.next){
                case 0:
                    if (!(createRoot !== undefined)) {
                        _context2.next = 2;
                        break;
                    }
                    return _context2.abrupt("return", modernUnmount(container));
                case 2:
                    legacyUnmount(container);
                case 3:
                case "end":
                    return _context2.stop();
            }
        }, _callee2);
    }));
    return _unmount.apply(this, arguments);
}

},{"@babel/runtime/helpers/esm/regeneratorRuntime":"8VPP1","@babel/runtime/helpers/esm/asyncToGenerator":"5Tzvv","@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react-dom":"j6uA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aaavi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSMotionList", ()=>(0, _cssmotionListDefault.default));
var _cssmotion = require("./CSSMotion");
var _cssmotionDefault = parcelHelpers.interopDefault(_cssmotion);
var _cssmotionList = require("./CSSMotionList");
var _cssmotionListDefault = parcelHelpers.interopDefault(_cssmotionList);
exports.default = (0, _cssmotionDefault.default);

},{"./CSSMotion":"4OSHS","./CSSMotionList":"4mrHS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4OSHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */ parcelHelpers.export(exports, "genCSSMotion", ()=>genCSSMotion);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */ var _react = require("react");
var _findDOMNode = require("rc-util/es/Dom/findDOMNode");
var _findDOMNodeDefault = parcelHelpers.interopDefault(_findDOMNode);
var _ref = require("rc-util/es/ref");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _motion = require("./util/motion");
var _interface = require("./interface");
var _useStatus = require("./hooks/useStatus");
var _useStatusDefault = parcelHelpers.interopDefault(_useStatus);
var _domWrapper = require("./DomWrapper");
var _domWrapperDefault = parcelHelpers.interopDefault(_domWrapper);
var _useStepQueue = require("./hooks/useStepQueue");
function genCSSMotion(config) {
    var transitionSupport = config;
    if ((0, _typeofDefault.default)(config) === "object") transitionSupport = config.transitionSupport;
    function isSupportTransition(props) {
        return !!(props.motionName && transitionSupport);
    }
    var CSSMotion = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
        var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement
        var nodeRef = (0, _react.useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement
        var wrapperNodeRef = (0, _react.useRef)();
        function getDomElement() {
            try {
                // Here we're avoiding call for findDOMNode since it's deprecated
                // in strict mode. We're calling it only when node ref is not
                // an instance of DOM HTMLElement. Otherwise use
                // findDOMNode as a final resort
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0, _findDOMNodeDefault.default)(wrapperNodeRef.current);
            } catch (e) {
                // Only happen when `motionDeadline` trigger but element removed.
                return null;
            }
        }
        var _useStatus = (0, _useStatusDefault.default)(supportMotion, visible, getDomElement, props), _useStatus2 = (0, _slicedToArrayDefault.default)(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3]; // Record whether content has rendered
        // Will return null for un-rendered even when `removeOnLeave={false}`
        var renderedRef = _react.useRef(mergedVisible);
        if (mergedVisible) renderedRef.current = true;
         // ====================== Refs ======================
        var setNodeRef = _react.useCallback(function(node) {
            nodeRef.current = node;
            (0, _ref.fillRef)(ref, node);
        }, [
            ref
        ]); // ===================== Render =====================
        var motionChildren;
        var mergedProps = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, eventProps), {}, {
            visible: visible
        });
        if (!children) // No children
        motionChildren = null;
        else if (status === (0, _interface.STATUS_NONE) || !isSupportTransition(props)) {
            // Stable children
            if (mergedVisible) motionChildren = children((0, _objectSpread2Default.default)({}, mergedProps), setNodeRef);
            else if (!removeOnLeave && renderedRef.current) motionChildren = children((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, mergedProps), {}, {
                className: leavedClassName
            }), setNodeRef);
            else if (forceRender) motionChildren = children((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, mergedProps), {}, {
                style: {
                    display: "none"
                }
            }), setNodeRef);
            else motionChildren = null;
        } else {
            var _classNames;
            // In motion
            var statusSuffix;
            if (statusStep === (0, _interface.STEP_PREPARE)) statusSuffix = "prepare";
            else if ((0, _useStepQueue.isActive)(statusStep)) statusSuffix = "active";
            else if (statusStep === (0, _interface.STEP_START)) statusSuffix = "start";
            motionChildren = children((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, mergedProps), {}, {
                className: (0, _classnamesDefault.default)((0, _motion.getTransitionName)(motionName, status), (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, (0, _motion.getTransitionName)(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), (0, _definePropertyDefault.default)(_classNames, motionName, typeof motionName === "string"), _classNames)),
                style: statusStyle
            }), setNodeRef);
        } // Auto inject ref if child node not have `ref` props
        if (/*#__PURE__*/ _react.isValidElement(motionChildren) && (0, _ref.supportRef)(motionChildren)) {
            var _motionChildren = motionChildren, originNodeRef = _motionChildren.ref;
            if (!originNodeRef) motionChildren = /*#__PURE__*/ _react.cloneElement(motionChildren, {
                ref: setNodeRef
            });
        }
        return /*#__PURE__*/ _react.createElement((0, _domWrapperDefault.default), {
            ref: wrapperNodeRef
        }, motionChildren);
    });
    CSSMotion.displayName = "CSSMotion";
    return CSSMotion;
}
exports.default = genCSSMotion((0, _motion.supportTransition));

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/typeof":"i7HWY","react":"21dqq","rc-util/es/Dom/findDOMNode":"3PTYf","rc-util/es/ref":"jS1Z6","classnames":"jocGM","./util/motion":"g9oPX","./interface":"kvRO0","./hooks/useStatus":"apd66","./DomWrapper":"jASWk","./hooks/useStepQueue":"rtL52","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PTYf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
function findDOMNode(node) {
    if (node instanceof HTMLElement) return node;
    return (0, _reactDomDefault.default).findDOMNode(node);
}
exports.default = findDOMNode;

},{"react-dom":"j6uA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jS1Z6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillRef", ()=>fillRef);
/**
 * Merge refs into one ref function to support ref passing.
 */ parcelHelpers.export(exports, "composeRef", ()=>composeRef);
parcelHelpers.export(exports, "useComposeRef", ()=>useComposeRef);
parcelHelpers.export(exports, "supportRef", ()=>supportRef) /* eslint-enable */ ;
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _reactIs = require("react-is");
var _useMemo = require("./hooks/useMemo");
var _useMemoDefault = parcelHelpers.interopDefault(_useMemo);
function fillRef(ref, node) {
    if (typeof ref === "function") ref(node);
    else if ((0, _typeofDefault.default)(ref) === "object" && ref && "current" in ref) ref.current = node;
}
function composeRef() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++)refs[_key] = arguments[_key];
    var refList = refs.filter(function(ref) {
        return ref;
    });
    if (refList.length <= 1) return refList[0];
    return function(node) {
        refs.forEach(function(ref) {
            fillRef(ref, node);
        });
    };
}
function useComposeRef() {
    for(var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)refs[_key2] = arguments[_key2];
    return (0, _useMemoDefault.default)(function() {
        return composeRef.apply(void 0, refs);
    }, refs, function(prev, next) {
        return prev.length === next.length && prev.every(function(ref, i) {
            return ref === next[i];
        });
    });
}
function supportRef(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type = (0, _reactIs.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node
    if (typeof type === "function" && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) return false;
     // Class component
    if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) return false;
    return true;
}

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","react-is":"7EuwB","./hooks/useMemo":"cxcbY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9oPX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVendorPrefixes", ()=>getVendorPrefixes);
parcelHelpers.export(exports, "getVendorPrefixedEventName", ()=>getVendorPrefixedEventName);
parcelHelpers.export(exports, "supportTransition", ()=>supportTransition);
parcelHelpers.export(exports, "animationEndName", ()=>animationEndName);
parcelHelpers.export(exports, "transitionEndName", ()=>transitionEndName);
parcelHelpers.export(exports, "getTransitionName", ()=>getTransitionName);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _canUseDom = require("rc-util/es/Dom/canUseDom"); // ================= Transition =================
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
}
function getVendorPrefixes(domSupport, win) {
    var prefixes = {
        animationend: makePrefixMap("Animation", "AnimationEnd"),
        transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    if (domSupport) {
        if (!("AnimationEvent" in win)) delete prefixes.animationend.animation;
        if (!("TransitionEvent" in win)) delete prefixes.transitionend.transition;
    }
    return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0, _canUseDomDefault.default)(), typeof window !== "undefined" ? window : {});
var style = {};
if ((0, _canUseDomDefault.default)()) {
    var _document$createEleme = document.createElement("div");
    style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for(var i = 0; i < len; i += 1){
            var styleProp = stylePropList[i];
            if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
                prefixedEventNames[eventName] = prefixMap[styleProp];
                return prefixedEventNames[eventName];
            }
        }
    }
    return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(transitionName, transitionType) {
    if (!transitionName) return null;
    if ((0, _typeofDefault.default)(transitionName) === "object") {
        var type = transitionType.replace(/-\w/g, function(match) {
            return match[1].toUpperCase();
        });
        return transitionName[type];
    }
    return "".concat(transitionName, "-").concat(transitionType);
}

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","rc-util/es/Dom/canUseDom":"hGxAQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvRO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STATUS_NONE", ()=>STATUS_NONE);
parcelHelpers.export(exports, "STATUS_APPEAR", ()=>STATUS_APPEAR);
parcelHelpers.export(exports, "STATUS_ENTER", ()=>STATUS_ENTER);
parcelHelpers.export(exports, "STATUS_LEAVE", ()=>STATUS_LEAVE);
parcelHelpers.export(exports, "STEP_NONE", ()=>STEP_NONE);
parcelHelpers.export(exports, "STEP_PREPARE", ()=>STEP_PREPARE);
parcelHelpers.export(exports, "STEP_START", ()=>STEP_START);
parcelHelpers.export(exports, "STEP_ACTIVE", ()=>STEP_ACTIVE);
parcelHelpers.export(exports, "STEP_ACTIVATED", ()=>STEP_ACTIVATED);
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apd66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _useState = require("rc-util/es/hooks/useState");
var _useStateDefault = parcelHelpers.interopDefault(_useState);
var _interface = require("../interface");
var _useStepQueue = require("./useStepQueue");
var _useStepQueueDefault = parcelHelpers.interopDefault(_useStepQueue);
var _useDomMotionEvents = require("./useDomMotionEvents");
var _useDomMotionEventsDefault = parcelHelpers.interopDefault(_useDomMotionEvents);
var _useIsomorphicLayoutEffect = require("./useIsomorphicLayoutEffect");
var _useIsomorphicLayoutEffectDefault = parcelHelpers.interopDefault(_useIsomorphicLayoutEffect);
function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    // Used for outer render usage to avoid `visible: false & status: none` to render nothing
    var _useState = (0, _useStateDefault.default)(), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useState3 = (0, _useStateDefault.default)((0, _interface.STATUS_NONE)), _useState4 = (0, _slicedToArrayDefault.default)(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
    var _useState5 = (0, _useStateDefault.default)(null), _useState6 = (0, _slicedToArrayDefault.default)(_useState5, 2), style = _useState6[0], setStyle = _useState6[1];
    var mountedRef = (0, _react.useRef)(false);
    var deadlineRef = (0, _react.useRef)(null); // =========================== Dom Node ===========================
    function getDomElement() {
        return getElement();
    } // ========================== Motion End ==========================
    var activeRef = (0, _react.useRef)(false);
    function onInternalMotionEnd(event) {
        var element = getDomElement();
        if (event && !event.deadline && event.target !== element) // event exists
        // not initiated by deadline
        // transitionEnd not fired by inner elements
        return;
        var currentActive = activeRef.current;
        var canEnd;
        if (status === (0, _interface.STATUS_APPEAR) && currentActive) canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
        else if (status === (0, _interface.STATUS_ENTER) && currentActive) canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
        else if (status === (0, _interface.STATUS_LEAVE) && currentActive) canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
         // Only update status when `canEnd` and not destroyed
        if (status !== (0, _interface.STATUS_NONE) && currentActive && canEnd !== false) {
            setStatus((0, _interface.STATUS_NONE), true);
            setStyle(null, true);
        }
    }
    var _useDomMotionEvents = (0, _useDomMotionEventsDefault.default)(onInternalMotionEnd), _useDomMotionEvents2 = (0, _slicedToArrayDefault.default)(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================
    var eventHandlers = _react.useMemo(function() {
        var _ref2, _ref3, _ref4;
        switch(status){
            case 0, _interface.STATUS_APPEAR:
                return _ref2 = {}, (0, _definePropertyDefault.default)(_ref2, (0, _interface.STEP_PREPARE), onAppearPrepare), (0, _definePropertyDefault.default)(_ref2, (0, _interface.STEP_START), onAppearStart), (0, _definePropertyDefault.default)(_ref2, (0, _interface.STEP_ACTIVE), onAppearActive), _ref2;
            case 0, _interface.STATUS_ENTER:
                return _ref3 = {}, (0, _definePropertyDefault.default)(_ref3, (0, _interface.STEP_PREPARE), onEnterPrepare), (0, _definePropertyDefault.default)(_ref3, (0, _interface.STEP_START), onEnterStart), (0, _definePropertyDefault.default)(_ref3, (0, _interface.STEP_ACTIVE), onEnterActive), _ref3;
            case 0, _interface.STATUS_LEAVE:
                return _ref4 = {}, (0, _definePropertyDefault.default)(_ref4, (0, _interface.STEP_PREPARE), onLeavePrepare), (0, _definePropertyDefault.default)(_ref4, (0, _interface.STEP_START), onLeaveStart), (0, _definePropertyDefault.default)(_ref4, (0, _interface.STEP_ACTIVE), onLeaveActive), _ref4;
            default:
                return {};
        }
    }, [
        status
    ]);
    var _useStepQueue1 = (0, _useStepQueueDefault.default)(status, function(newStep) {
        // Only prepare step can be skip
        if (newStep === (0, _interface.STEP_PREPARE)) {
            var onPrepare = eventHandlers[0, _interface.STEP_PREPARE];
            if (!onPrepare) return 0, _useStepQueue.SkipStep;
            return onPrepare(getDomElement());
        } // Rest step is sync update
        // Rest step is sync update
        if (step in eventHandlers) {
            var _eventHandlers$step;
            setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
        }
        if (step === (0, _interface.STEP_ACTIVE)) {
            // Patch events when motion needed
            patchMotionEvents(getDomElement());
            if (motionDeadline > 0) {
                clearTimeout(deadlineRef.current);
                deadlineRef.current = setTimeout(function() {
                    onInternalMotionEnd({
                        deadline: true
                    });
                }, motionDeadline);
            }
        }
        return 0, _useStepQueue.DoStep;
    }), _useStepQueue2 = (0, _slicedToArrayDefault.default)(_useStepQueue1, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = (0, _useStepQueue.isActive)(step);
    activeRef.current = active; // ============================ Status ============================
    // Update with new status
    (0, _useIsomorphicLayoutEffectDefault.default)(function() {
        setAsyncVisible(visible);
        var isMounted = mountedRef.current;
        mountedRef.current = true;
        if (!supportMotion) return;
        var nextStatus; // Appear
        if (!isMounted && visible && motionAppear) nextStatus = (0, _interface.STATUS_APPEAR);
         // Enter
        if (isMounted && visible && motionEnter) nextStatus = (0, _interface.STATUS_ENTER);
         // Leave
        if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) nextStatus = (0, _interface.STATUS_LEAVE);
         // Update to next status
        if (nextStatus) {
            setStatus(nextStatus);
            startStep();
        }
    }, [
        visible
    ]); // ============================ Effect ============================
    // Reset when motion changed
    (0, _react.useEffect)(function() {
        if (status === (0, _interface.STATUS_APPEAR) && !motionAppear || status === (0, _interface.STATUS_ENTER) && !motionEnter || status === (0, _interface.STATUS_LEAVE) && !motionLeave) setStatus((0, _interface.STATUS_NONE));
    }, [
        motionAppear,
        motionEnter,
        motionLeave
    ]);
    (0, _react.useEffect)(function() {
        return function() {
            mountedRef.current = false;
            clearTimeout(deadlineRef.current);
        };
    }, []); // Trigger `onVisibleChanged`
    var firstMountChangeRef = _react.useRef(false);
    (0, _react.useEffect)(function() {
        // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
        if (asyncVisible) firstMountChangeRef.current = true;
        if (asyncVisible !== undefined && status === (0, _interface.STATUS_NONE)) {
            // Skip first render is invisible since it's nothing changed
            if (firstMountChangeRef.current || asyncVisible) onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
            firstMountChangeRef.current = true;
        }
    }, [
        asyncVisible,
        status
    ]); // ============================ Styles ============================
    var mergedStyle = style;
    if (eventHandlers[0, _interface.STEP_PREPARE] && step === (0, _interface.STEP_START)) mergedStyle = (0, _objectSpread2Default.default)({
        transition: "none"
    }, mergedStyle);
    return [
        status,
        step,
        mergedStyle,
        asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible
    ];
}
exports.default = useStatus;

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","rc-util/es/hooks/useState":"4KG3w","../interface":"kvRO0","./useStepQueue":"rtL52","./useDomMotionEvents":"6wGqw","./useIsomorphicLayoutEffect":"9BsoX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KG3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
function useSafeState(defaultValue) {
    var destroyRef = _react.useRef(false);
    var _React$useState = _react.useState(defaultValue), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    _react.useEffect(function() {
        destroyRef.current = false;
        return function() {
            destroyRef.current = true;
        };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) return;
        setValue(updater);
    }
    return [
        value,
        safeSetState
    ];
}
exports.default = useSafeState;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rtL52":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkipStep", ()=>SkipStep);
parcelHelpers.export(exports, "DoStep", ()=>DoStep);
parcelHelpers.export(exports, "isActive", ()=>isActive);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _useState = require("rc-util/es/hooks/useState");
var _useStateDefault = parcelHelpers.interopDefault(_useState);
var _interface = require("../interface");
var _useNextFrame = require("./useNextFrame");
var _useNextFrameDefault = parcelHelpers.interopDefault(_useNextFrame);
var _useIsomorphicLayoutEffect = require("./useIsomorphicLayoutEffect");
var _useIsomorphicLayoutEffectDefault = parcelHelpers.interopDefault(_useIsomorphicLayoutEffect);
var STEP_QUEUE = [
    (0, _interface.STEP_PREPARE),
    (0, _interface.STEP_START),
    (0, _interface.STEP_ACTIVE),
    (0, _interface.STEP_ACTIVATED)
];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
    return step === (0, _interface.STEP_ACTIVE) || step === (0, _interface.STEP_ACTIVATED);
}
exports.default = function(status, callback) {
    var _useState = (0, _useStateDefault.default)((0, _interface.STEP_NONE)), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = (0, _useNextFrameDefault.default)(), _useNextFrame2 = (0, _slicedToArrayDefault.default)(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
        setStep((0, _interface.STEP_PREPARE), true);
    }
    (0, _useIsomorphicLayoutEffectDefault.default)(function() {
        if (step !== (0, _interface.STEP_NONE) && step !== (0, _interface.STEP_ACTIVATED)) {
            var index = STEP_QUEUE.indexOf(step);
            var nextStep = STEP_QUEUE[index + 1];
            var result = callback(step);
            if (result === SkipStep) // Skip when no needed
            setStep(nextStep, true);
            else // Do as frame for step update
            nextFrame(function(info) {
                function doNext() {
                    // Skip since current queue is ood
                    if (info.isCanceled()) return;
                    setStep(nextStep, true);
                }
                if (result === true) doNext();
                else // Only promise should be async
                Promise.resolve(result).then(doNext);
            });
        }
    }, [
        status,
        step
    ]);
    _react.useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        startQueue,
        step
    ];
};

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","rc-util/es/hooks/useState":"4KG3w","../interface":"kvRO0","./useNextFrame":"7ceka","./useIsomorphicLayoutEffect":"9BsoX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ceka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _raf = require("rc-util/es/raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
exports.default = function() {
    var nextFrameRef = _react.useRef(null);
    function cancelNextFrame() {
        (0, _rafDefault.default).cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = (0, _rafDefault.default)(function() {
            if (delay <= 1) callback({
                isCanceled: function isCanceled() {
                    return nextFrameId !== nextFrameRef.current;
                }
            });
            else nextFrame(callback, delay - 1);
        });
        nextFrameRef.current = nextFrameId;
    }
    _react.useEffect(function() {
        return function() {
            cancelNextFrame();
        };
    }, []);
    return [
        nextFrame,
        cancelNextFrame
    ];
};

},{"react":"21dqq","rc-util/es/raf":"7OvWw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OvWw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var raf = function raf(callback) {
    return +setTimeout(callback, 16);
};
var caf = function caf(num) {
    return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    raf = function raf(callback) {
        return window.requestAnimationFrame(callback);
    };
    caf = function caf(handle) {
        return window.cancelAnimationFrame(handle);
    };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
    rafIds.delete(id);
}
function wrapperRaf(callback) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
        if (leftTimes === 0) {
            // Clean up
            cleanup(id); // Trigger
            callback();
        } else {
            // Next raf
            var realId = raf(function() {
                callRef(leftTimes - 1);
            }); // Bind real raf id
            rafIds.set(id, realId);
        }
    }
    callRef(times);
    return id;
}
exports.default = wrapperRaf;
wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(realId);
    return caf(realId);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BsoX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _canUseDom = require("rc-util/es/Dom/canUseDom"); // It's safe to use `useLayoutEffect` but the warning is annoying
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
var useIsomorphicLayoutEffect = (0, _canUseDomDefault.default)() ? (0, _react.useLayoutEffect) : (0, _react.useEffect);
exports.default = useIsomorphicLayoutEffect;

},{"react":"21dqq","rc-util/es/Dom/canUseDom":"hGxAQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wGqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _motion = require("../util/motion");
exports.default = function(callback) {
    var cacheElementRef = (0, _react.useRef)(); // Cache callback
    var callbackRef = (0, _react.useRef)(callback);
    callbackRef.current = callback; // Internal motion event handler
    var onInternalMotionEnd = _react.useCallback(function(event) {
        callbackRef.current(event);
    }, []); // Remove events
    function removeMotionEvents(element) {
        if (element) {
            element.removeEventListener((0, _motion.transitionEndName), onInternalMotionEnd);
            element.removeEventListener((0, _motion.animationEndName), onInternalMotionEnd);
        }
    } // Patch events
    function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) removeMotionEvents(cacheElementRef.current);
        if (element && element !== cacheElementRef.current) {
            element.addEventListener((0, _motion.transitionEndName), onInternalMotionEnd);
            element.addEventListener((0, _motion.animationEndName), onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`
            cacheElementRef.current = element;
        }
    } // Clean up when removed
    _react.useEffect(function() {
        return function() {
            removeMotionEvents(cacheElementRef.current);
        };
    }, []);
    return [
        patchMotionEvents,
        removeMotionEvents
    ];
};

},{"react":"21dqq","../util/motion":"g9oPX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jASWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var DomWrapper = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(DomWrapper, _React$Component);
    var _super = (0, _createSuperDefault.default)(DomWrapper);
    function DomWrapper() {
        (0, _classCallCheckDefault.default)(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    (0, _createClassDefault.default)(DomWrapper, [
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}(_react.Component);
exports.default = DomWrapper;

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mrHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */ parcelHelpers.export(exports, "genCSSMotionList", ()=>genCSSMotionList);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
/* eslint react/prop-types: 0 */ var _react = require("react");
var _cssmotion = require("./CSSMotion");
var _cssmotionDefault = parcelHelpers.interopDefault(_cssmotion);
var _motion = require("./util/motion");
var _diff = require("./util/diff");
var _excluded = [
    "component",
    "children",
    "onVisibleChanged",
    "onAllRemoved"
], _excluded2 = [
    "status"
];
var MOTION_PROP_NAMES = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd"
];
function genCSSMotionList(transitionSupport) {
    var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _cssmotionDefault.default);
    var CSSMotionList = /*#__PURE__*/ function(_React$Component) {
        (0, _inheritsDefault.default)(CSSMotionList, _React$Component);
        var _super = (0, _createSuperDefault.default)(CSSMotionList);
        function CSSMotionList() {
            var _this;
            (0, _classCallCheckDefault.default)(this, CSSMotionList);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _super.call.apply(_super, [
                this
            ].concat(args));
            _this.state = {
                keyEntities: []
            };
            _this.removeKey = function(removeKey) {
                var keyEntities = _this.state.keyEntities;
                var nextKeyEntities = keyEntities.map(function(entity) {
                    if (entity.key !== removeKey) return entity;
                    return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, entity), {}, {
                        status: (0, _diff.STATUS_REMOVED)
                    });
                });
                _this.setState({
                    keyEntities: nextKeyEntities
                });
                return nextKeyEntities.filter(function(_ref) {
                    var status = _ref.status;
                    return status !== (0, _diff.STATUS_REMOVED);
                }).length;
            };
            return _this;
        }
        (0, _createClassDefault.default)(CSSMotionList, [
            {
                key: "render",
                value: function render() {
                    var _this2 = this;
                    var keyEntities = this.state.keyEntities;
                    var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = (0, _objectWithoutPropertiesDefault.default)(_this$props, _excluded);
                    var Component = component || _react.Fragment;
                    var motionProps = {};
                    MOTION_PROP_NAMES.forEach(function(prop) {
                        motionProps[prop] = restProps[prop];
                        delete restProps[prop];
                    });
                    delete restProps.keys;
                    return /*#__PURE__*/ _react.createElement(Component, restProps, keyEntities.map(function(_ref2) {
                        var status = _ref2.status, eventProps = (0, _objectWithoutPropertiesDefault.default)(_ref2, _excluded2);
                        var visible = status === (0, _diff.STATUS_ADD) || status === (0, _diff.STATUS_KEEP);
                        return /*#__PURE__*/ _react.createElement(CSSMotion, (0, _extendsDefault.default)({}, motionProps, {
                            key: eventProps.key,
                            visible: visible,
                            eventProps: eventProps,
                            onVisibleChanged: function onVisibleChanged(changedVisible) {
                                _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                                    key: eventProps.key
                                });
                                if (!changedVisible) {
                                    var restKeysCount = _this2.removeKey(eventProps.key);
                                    if (restKeysCount === 0 && onAllRemoved) onAllRemoved();
                                }
                            }
                        }), children);
                    }));
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref3, _ref4) {
                    var keys = _ref3.keys;
                    var keyEntities = _ref4.keyEntities;
                    var parsedKeyObjects = (0, _diff.parseKeys)(keys);
                    var mixedKeyEntities = (0, _diff.diffKeys)(keyEntities, parsedKeyObjects);
                    return {
                        keyEntities: mixedKeyEntities.filter(function(entity) {
                            var prevEntity = keyEntities.find(function(_ref5) {
                                var key = _ref5.key;
                                return entity.key === key;
                            }); // Remove if already mark as removed
                            if (prevEntity && prevEntity.status === (0, _diff.STATUS_REMOVED) && entity.status === (0, _diff.STATUS_REMOVE)) return false;
                            return true;
                        })
                    };
                } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
            }
        ]);
        return CSSMotionList;
    }(_react.Component);
    CSSMotionList.defaultProps = {
        component: "div"
    };
    return CSSMotionList;
}
exports.default = genCSSMotionList((0, _motion.supportTransition));

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","./CSSMotion":"4OSHS","./util/motion":"g9oPX","./util/diff":"3KXPu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KXPu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STATUS_ADD", ()=>STATUS_ADD);
parcelHelpers.export(exports, "STATUS_KEEP", ()=>STATUS_KEEP);
parcelHelpers.export(exports, "STATUS_REMOVE", ()=>STATUS_REMOVE);
parcelHelpers.export(exports, "STATUS_REMOVED", ()=>STATUS_REMOVED);
parcelHelpers.export(exports, "wrapKeyToObject", ()=>wrapKeyToObject);
parcelHelpers.export(exports, "parseKeys", ()=>parseKeys);
parcelHelpers.export(exports, "diffKeys", ()=>diffKeys);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
    var keyObj;
    if (key && (0, _typeofDefault.default)(key) === "object" && "key" in key) keyObj = key;
    else keyObj = {
        key: key
    };
    return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, keyObj), {}, {
        key: String(keyObj.key)
    });
}
function parseKeys() {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return keys.map(wrapKeyToObject);
}
function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep
    prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for(var i = currentIndex; i < currentLen; i += 1){
            var currentKeyObj = currentKeyObjects[i];
            if (currentKeyObj.key === keyObj.key) {
                // New added keys should add before current key
                if (currentIndex < i) {
                    list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                        return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, obj), {}, {
                            status: STATUS_ADD
                        });
                    }));
                    currentIndex = i;
                }
                list.push((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, currentKeyObj), {}, {
                    status: STATUS_KEEP
                }));
                currentIndex += 1;
                hit = true;
                break;
            }
        } // If not hit, it means key is removed
        if (!hit) list.push((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, keyObj), {}, {
            status: STATUS_REMOVE
        }));
    }); // Add rest to the list
    if (currentIndex < currentLen) list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, obj), {}, {
            status: STATUS_ADD
        });
    }));
    /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */ var keys = {};
    list.forEach(function(_ref) {
        var key = _ref.key;
        keys[key] = (keys[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys).filter(function(key) {
        return keys[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
        // Remove `STATUS_REMOVE` node.
        list = list.filter(function(_ref2) {
            var key = _ref2.key, status = _ref2.status;
            return key !== matchKey || status !== STATUS_REMOVE;
        }); // Update `STATUS_ADD` to `STATUS_KEEP`
        list.forEach(function(node) {
            if (node.key === matchKey) // eslint-disable-next-line no-param-reassign
            node.status = STATUS_KEEP;
        });
    });
    return list;
}

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/typeof":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8eNv6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Notice);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var Notice = /*#__PURE__*/ function(_Component) {
    (0, _inheritsDefault.default)(Notice, _Component);
    var _super = (0, _createSuperDefault.default)(Notice);
    function Notice() {
        var _this;
        (0, _classCallCheckDefault.default)(this, Notice);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _this.closeTimer = null;
        _this.close = function(e) {
            if (e) e.stopPropagation();
            _this.clearCloseTimer();
            var _this$props = _this.props, onClose = _this$props.onClose, noticeKey = _this$props.noticeKey;
            if (onClose) onClose(noticeKey);
        };
        _this.startCloseTimer = function() {
            if (_this.props.duration) _this.closeTimer = window.setTimeout(function() {
                _this.close();
            }, _this.props.duration * 1000);
        };
        _this.clearCloseTimer = function() {
            if (_this.closeTimer) {
                clearTimeout(_this.closeTimer);
                _this.closeTimer = null;
            }
        };
        return _this;
    }
    (0, _createClassDefault.default)(Notice, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.startCloseTimer();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark || this.props.visible !== prevProps.visible && this.props.visible) this.restartCloseTimer();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.clearCloseTimer();
            }
        },
        {
            key: "restartCloseTimer",
            value: function restartCloseTimer() {
                this.clearCloseTimer();
                this.startCloseTimer();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, prefixCls = _this$props2.prefixCls, className = _this$props2.className, closable = _this$props2.closable, closeIcon = _this$props2.closeIcon, style = _this$props2.style, onClick = _this$props2.onClick, children = _this$props2.children, holder = _this$props2.holder;
                var componentClass = "".concat(prefixCls, "-notice");
                var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function(acc, key) {
                    if (key.substr(0, 5) === "data-" || key.substr(0, 5) === "aria-" || key === "role") acc[key] = _this2.props[key];
                    return acc;
                }, {});
                var node = /*#__PURE__*/ _react.createElement("div", (0, _extendsDefault.default)({
                    className: (0, _classnamesDefault.default)(componentClass, className, (0, _definePropertyDefault.default)({}, "".concat(componentClass, "-closable"), closable)),
                    style: style,
                    onMouseEnter: this.clearCloseTimer,
                    onMouseLeave: this.startCloseTimer,
                    onClick: onClick
                }, dataOrAriaAttributeProps), /*#__PURE__*/ _react.createElement("div", {
                    className: "".concat(componentClass, "-content")
                }, children), closable ? /*#__PURE__*/ _react.createElement("a", {
                    tabIndex: 0,
                    onClick: this.close,
                    className: "".concat(componentClass, "-close")
                }, closeIcon || /*#__PURE__*/ _react.createElement("span", {
                    className: "".concat(componentClass, "-close-x")
                })) : null);
                if (holder) return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(node, holder);
                return node;
            }
        }
    ]);
    return Notice;
}((0, _react.Component));
Notice.defaultProps = {
    onClose: function onClose() {},
    duration: 1.5
};

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","react-dom":"j6uA9","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"av13r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _notice = require("./Notice");
var _noticeDefault = parcelHelpers.interopDefault(_notice);
function useNotification(notificationInstance) {
    var createdRef = _react.useRef({});
    var _React$useState = _react.useState([]), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), elements = _React$useState2[0], setElements = _React$useState2[1];
    function notify(noticeProps) {
        var firstMount = true;
        notificationInstance.add(noticeProps, function(div, props) {
            var key = props.key;
            if (div && (!createdRef.current[key] || firstMount)) {
                var noticeEle = /*#__PURE__*/ _react.createElement((0, _noticeDefault.default), (0, _extendsDefault.default)({}, props, {
                    holder: div
                }));
                createdRef.current[key] = noticeEle;
                setElements(function(originElements) {
                    var index = originElements.findIndex(function(ele) {
                        return ele.key === props.key;
                    });
                    if (index === -1) return [].concat((0, _toConsumableArrayDefault.default)(originElements), [
                        noticeEle
                    ]);
                    var cloneList = (0, _toConsumableArrayDefault.default)(originElements);
                    cloneList[index] = noticeEle;
                    return cloneList;
                });
            }
            firstMount = false;
        });
    }
    return [
        notify,
        /*#__PURE__*/ _react.createElement(_react.Fragment, null, elements)
    ];
}
exports.default = useNotification;

},{"@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","./Notice":"8eNv6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZCfI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _useNotification = require("rc-notification/es/useNotification");
var _useNotificationDefault = parcelHelpers.interopDefault(_useNotification);
var _react = require("react");
var _ = require("..");
var _configProvider = require("../../config-provider");
function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
    var useMessage = function useMessage() {
        // We can only get content by render
        var getPrefixCls;
        var getPopupContainer; // We create a proxy to handle delay created instance
        var innerInstance = null;
        var proxy = {
            add: function add(noticeProps, holderCallback) {
                innerInstance === null || innerInstance === void 0 || innerInstance.component.add(noticeProps, holderCallback);
            }
        };
        var _useRCNotification = (0, _useNotificationDefault.default)(proxy), _useRCNotification2 = (0, _slicedToArrayDefault.default)(_useRCNotification, 2), hookNotify = _useRCNotification2[0], holder = _useRCNotification2[1];
        function notify(args) {
            var customizePrefixCls = args.prefixCls;
            var mergedPrefixCls = getPrefixCls("message", customizePrefixCls);
            var rootPrefixCls = getPrefixCls();
            var target = args.key || (0, _.getKeyThenIncreaseKey)();
            var closePromise = new Promise(function(resolve) {
                var callback = function callback() {
                    if (typeof args.onClose === "function") args.onClose();
                    return resolve(true);
                };
                getRcNotificationInstance((0, _extendsDefault.default)((0, _extendsDefault.default)({}, args), {
                    prefixCls: mergedPrefixCls,
                    rootPrefixCls: rootPrefixCls,
                    getPopupContainer: getPopupContainer
                }), function(_ref) {
                    var prefixCls = _ref.prefixCls, instance = _ref.instance;
                    innerInstance = instance;
                    hookNotify(getRCNoticeProps((0, _extendsDefault.default)((0, _extendsDefault.default)({}, args), {
                        key: target,
                        onClose: callback
                    }), prefixCls));
                });
            });
            var result = function result() {
                if (innerInstance) innerInstance.removeNotice(target);
            };
            result.then = function(filled, rejected) {
                return closePromise.then(filled, rejected);
            };
            result.promise = closePromise;
            return result;
        } // Fill functions
        var hookApiRef = _react.useRef({});
        hookApiRef.current.open = notify;
        (0, _.typeList).forEach(function(type) {
            return (0, _.attachTypeApi)(hookApiRef.current, type);
        });
        return [
            hookApiRef.current,
            /*#__PURE__*/ _react.createElement((0, _configProvider.ConfigConsumer), {
                key: "holder"
            }, function(context) {
                getPrefixCls = context.getPrefixCls;
                getPopupContainer = context.getPopupContainer;
                return holder;
            })
        ];
    };
    return useMessage;
}
exports.default = createUseMessage;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","rc-notification/es/useNotification":"av13r","react":"21dqq","..":"8fyGO","../../config-provider":"iMraF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZc3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInstance", ()=>getInstance);
var _regeneratorRuntime = require("@babel/runtime/helpers/esm/regeneratorRuntime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _checkCircleOutlined = require("@ant-design/icons/es/icons/CheckCircleOutlined");
var _checkCircleOutlinedDefault = parcelHelpers.interopDefault(_checkCircleOutlined);
var _closeCircleOutlined = require("@ant-design/icons/es/icons/CloseCircleOutlined");
var _closeCircleOutlinedDefault = parcelHelpers.interopDefault(_closeCircleOutlined);
var _closeOutlined = require("@ant-design/icons/es/icons/CloseOutlined");
var _closeOutlinedDefault = parcelHelpers.interopDefault(_closeOutlined);
var _exclamationCircleOutlined = require("@ant-design/icons/es/icons/ExclamationCircleOutlined");
var _exclamationCircleOutlinedDefault = parcelHelpers.interopDefault(_exclamationCircleOutlined);
var _infoCircleOutlined = require("@ant-design/icons/es/icons/InfoCircleOutlined");
var _infoCircleOutlinedDefault = parcelHelpers.interopDefault(_infoCircleOutlined);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcNotification = require("rc-notification");
var _rcNotificationDefault = parcelHelpers.interopDefault(_rcNotification);
var _react = require("react");
var _configProvider = require("../config-provider");
var _configProviderDefault = parcelHelpers.interopDefault(_configProvider);
var _useNotification = require("./hooks/useNotification");
var _useNotificationDefault = parcelHelpers.interopDefault(_useNotification);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = "";
var defaultPlacement = "topRight";
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;
var maxCount;
function setNotificationConfig(options) {
    var duration = options.duration, placement = options.placement, bottom = options.bottom, top = options.top, getContainer = options.getContainer, closeIcon = options.closeIcon, prefixCls = options.prefixCls;
    if (prefixCls !== undefined) defaultPrefixCls = prefixCls;
    if (duration !== undefined) defaultDuration = duration;
    if (placement !== undefined) defaultPlacement = placement;
    else if (options.rtl) defaultPlacement = "topLeft";
    if (bottom !== undefined) defaultBottom = bottom;
    if (top !== undefined) defaultTop = top;
    if (getContainer !== undefined) defaultGetContainer = getContainer;
    if (closeIcon !== undefined) defaultCloseIcon = closeIcon;
    if (options.rtl !== undefined) rtl = options.rtl;
    if (options.maxCount !== undefined) maxCount = options.maxCount;
}
function getPlacementStyle(placement) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
    var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
    var style;
    switch(placement){
        case "top":
            style = {
                left: "50%",
                transform: "translateX(-50%)",
                right: "auto",
                top: top,
                bottom: "auto"
            };
            break;
        case "topLeft":
            style = {
                left: 0,
                top: top,
                bottom: "auto"
            };
            break;
        case "topRight":
            style = {
                right: 0,
                top: top,
                bottom: "auto"
            };
            break;
        case "bottom":
            style = {
                left: "50%",
                transform: "translateX(-50%)",
                right: "auto",
                top: "auto",
                bottom: bottom
            };
            break;
        case "bottomLeft":
            style = {
                left: 0,
                top: "auto",
                bottom: bottom
            };
            break;
        default:
            style = {
                right: 0,
                top: "auto",
                bottom: bottom
            };
            break;
    }
    return style;
}
function getNotificationInstance(args, callback) {
    var _args$placement = args.placement, placement = _args$placement === void 0 ? defaultPlacement : _args$placement, top = args.top, bottom = args.bottom, _args$getContainer = args.getContainer, getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer, customizePrefixCls = args.prefixCls;
    var _globalConfig = (0, _configProvider.globalConfig)(), getPrefixCls = _globalConfig.getPrefixCls, getIconPrefixCls = _globalConfig.getIconPrefixCls;
    var prefixCls = getPrefixCls("notification", customizePrefixCls || defaultPrefixCls);
    var iconPrefixCls = getIconPrefixCls();
    var cacheKey = "".concat(prefixCls, "-").concat(placement);
    var cacheInstance = notificationInstance[cacheKey];
    if (cacheInstance) {
        Promise.resolve(cacheInstance).then(function(instance) {
            callback({
                prefixCls: "".concat(prefixCls, "-notice"),
                iconPrefixCls: iconPrefixCls,
                instance: instance
            });
        });
        return;
    }
    var notificationClass = (0, _classnamesDefault.default)("".concat(prefixCls, "-").concat(placement), (0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-rtl"), rtl === true));
    notificationInstance[cacheKey] = new Promise(function(resolve) {
        (0, _rcNotificationDefault.default).newInstance({
            prefixCls: prefixCls,
            className: notificationClass,
            style: getPlacementStyle(placement, top, bottom),
            getContainer: getContainer,
            maxCount: maxCount
        }, function(notification) {
            resolve(notification);
            callback({
                prefixCls: "".concat(prefixCls, "-notice"),
                iconPrefixCls: iconPrefixCls,
                instance: notification
            });
        });
    });
}
var typeToIcon = {
    success: (0, _checkCircleOutlinedDefault.default),
    info: (0, _infoCircleOutlinedDefault.default),
    error: (0, _closeCircleOutlinedDefault.default),
    warning: (0, _exclamationCircleOutlinedDefault.default)
};
function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
    var durationArg = args.duration, icon = args.icon, type = args.type, description = args.description, message = args.message, btn = args.btn, onClose = args.onClose, onClick = args.onClick, key = args.key, style = args.style, className = args.className, _args$closeIcon = args.closeIcon, closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
    var duration = durationArg === undefined ? defaultDuration : durationArg;
    var iconNode = null;
    if (icon) iconNode = /*#__PURE__*/ _react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
    }, args.icon);
    else if (type) iconNode = /*#__PURE__*/ _react.createElement(typeToIcon[type] || null, {
        className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
    });
    var closeIconToRender = /*#__PURE__*/ _react.createElement("span", {
        className: "".concat(prefixCls, "-close-x")
    }, closeIcon || /*#__PURE__*/ _react.createElement((0, _closeOutlinedDefault.default), {
        className: "".concat(prefixCls, "-close-icon")
    }));
    var autoMarginTag = !description && iconNode ? /*#__PURE__*/ _react.createElement("span", {
        className: "".concat(prefixCls, "-message-single-line-auto-margin")
    }) : null;
    return {
        content: /*#__PURE__*/ _react.createElement((0, _configProviderDefault.default), {
            iconPrefixCls: iconPrefixCls
        }, /*#__PURE__*/ _react.createElement("div", {
            className: iconNode ? "".concat(prefixCls, "-with-icon") : "",
            role: "alert"
        }, iconNode, /*#__PURE__*/ _react.createElement("div", {
            className: "".concat(prefixCls, "-message")
        }, autoMarginTag, message), /*#__PURE__*/ _react.createElement("div", {
            className: "".concat(prefixCls, "-description")
        }, description), btn ? /*#__PURE__*/ _react.createElement("span", {
            className: "".concat(prefixCls, "-btn")
        }, btn) : null)),
        duration: duration,
        closable: true,
        closeIcon: closeIconToRender,
        onClose: onClose,
        onClick: onClick,
        key: key,
        style: style || {},
        className: (0, _classnamesDefault.default)(className, (0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-").concat(type), !!type))
    };
}
function notice(args) {
    getNotificationInstance(args, function(_ref) {
        var prefixCls = _ref.prefixCls, iconPrefixCls = _ref.iconPrefixCls, instance = _ref.instance;
        instance.notice(getRCNoticeProps(args, prefixCls, iconPrefixCls));
    });
}
var api = {
    open: notice,
    close: function close(key) {
        Object.keys(notificationInstance).forEach(function(cacheKey) {
            return Promise.resolve(notificationInstance[cacheKey]).then(function(instance) {
                instance.removeNotice(key);
            });
        });
    },
    config: setNotificationConfig,
    destroy: function destroy() {
        Object.keys(notificationInstance).forEach(function(cacheKey) {
            Promise.resolve(notificationInstance[cacheKey]).then(function(instance) {
                instance.destroy();
            });
            delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
        });
    }
};
[
    "success",
    "info",
    "warning",
    "error"
].forEach(function(type) {
    api[type] = function(args) {
        return api.open((0, _extendsDefault.default)((0, _extendsDefault.default)({}, args), {
            type: type
        }));
    };
});
api.warn = api.warning;
api.useNotification = (0, _useNotificationDefault.default)(getNotificationInstance, getRCNoticeProps);
var getInstance = function getInstance(cacheKey) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee() {
        return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    return _context.abrupt("return", null);
                case 1:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
};
exports.default = api;

},{"@babel/runtime/helpers/esm/regeneratorRuntime":"8VPP1","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@ant-design/icons/es/icons/CheckCircleOutlined":"gP4XA","@ant-design/icons/es/icons/CloseCircleOutlined":"4SyvN","@ant-design/icons/es/icons/CloseOutlined":"a9P1C","@ant-design/icons/es/icons/ExclamationCircleOutlined":"5biKM","@ant-design/icons/es/icons/InfoCircleOutlined":"4X0pW","classnames":"jocGM","rc-notification":"kigwc","react":"21dqq","../config-provider":"iMraF","./hooks/useNotification":"cHJGQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gP4XA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _checkCircleOutlined = require("@ant-design/icons-svg/es/asn/CheckCircleOutlined");
var _checkCircleOutlinedDefault = parcelHelpers.interopDefault(_checkCircleOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _checkCircleOutlinedDefault.default)
    }));
};
CheckCircleOutlined.displayName = "CheckCircleOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(CheckCircleOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/CheckCircleOutlined":"co91S","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"co91S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var CheckCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }
        ]
    },
    "name": "check-circle",
    "theme": "outlined"
};
exports.default = CheckCircleOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SyvN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _closeCircleOutlined = require("@ant-design/icons-svg/es/asn/CloseCircleOutlined");
var _closeCircleOutlinedDefault = parcelHelpers.interopDefault(_closeCircleOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _closeCircleOutlinedDefault.default)
    }));
};
CloseCircleOutlined.displayName = "CloseCircleOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(CloseCircleOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/CloseCircleOutlined":"eFzKS","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eFzKS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var CloseCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }
        ]
    },
    "name": "close-circle",
    "theme": "outlined"
};
exports.default = CloseCircleOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9P1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _closeOutlined = require("@ant-design/icons-svg/es/asn/CloseOutlined");
var _closeOutlinedDefault = parcelHelpers.interopDefault(_closeOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var CloseOutlined = function CloseOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _closeOutlinedDefault.default)
    }));
};
CloseOutlined.displayName = "CloseOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(CloseOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/CloseOutlined":"krP7I","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krP7I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var CloseOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                }
            }
        ]
    },
    "name": "close",
    "theme": "outlined"
};
exports.default = CloseOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5biKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _exclamationCircleOutlined = require("@ant-design/icons-svg/es/asn/ExclamationCircleOutlined");
var _exclamationCircleOutlinedDefault = parcelHelpers.interopDefault(_exclamationCircleOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _exclamationCircleOutlinedDefault.default)
    }));
};
ExclamationCircleOutlined.displayName = "ExclamationCircleOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(ExclamationCircleOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/ExclamationCircleOutlined":"46LL6","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46LL6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var ExclamationCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
                }
            }
        ]
    },
    "name": "exclamation-circle",
    "theme": "outlined"
};
exports.default = ExclamationCircleOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4X0pW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _infoCircleOutlined = require("@ant-design/icons-svg/es/asn/InfoCircleOutlined");
var _infoCircleOutlinedDefault = parcelHelpers.interopDefault(_infoCircleOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _infoCircleOutlinedDefault.default)
    }));
};
InfoCircleOutlined.displayName = "InfoCircleOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(InfoCircleOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/InfoCircleOutlined":"ltSBN","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltSBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var InfoCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
                }
            }
        ]
    },
    "name": "info-circle",
    "theme": "outlined"
};
exports.default = InfoCircleOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHJGQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _useNotification = require("rc-notification/es/useNotification");
var _useNotificationDefault = parcelHelpers.interopDefault(_useNotification);
var _react = require("react");
var _configProvider = require("../../config-provider");
function createUseNotification(getNotificationInstance, getRCNoticeProps) {
    var useNotification = function useNotification() {
        // We can only get content by render
        var getPrefixCls; // We create a proxy to handle delay created instance
        var innerInstance = null;
        var proxy = {
            add: function add(noticeProps, holderCallback) {
                innerInstance === null || innerInstance === void 0 || innerInstance.component.add(noticeProps, holderCallback);
            }
        };
        var _useRCNotification = (0, _useNotificationDefault.default)(proxy), _useRCNotification2 = (0, _slicedToArrayDefault.default)(_useRCNotification, 2), hookNotify = _useRCNotification2[0], holder = _useRCNotification2[1];
        function notify(args) {
            var customizePrefixCls = args.prefixCls;
            var mergedPrefixCls = getPrefixCls("notification", customizePrefixCls);
            getNotificationInstance((0, _extendsDefault.default)((0, _extendsDefault.default)({}, args), {
                prefixCls: mergedPrefixCls
            }), function(_ref) {
                var prefixCls = _ref.prefixCls, instance = _ref.instance;
                innerInstance = instance;
                hookNotify(getRCNoticeProps(args, prefixCls));
            });
        } // Fill functions
        var hookApiRef = _react.useRef({});
        hookApiRef.current.open = notify;
        [
            "success",
            "info",
            "warning",
            "error"
        ].forEach(function(type) {
            hookApiRef.current[type] = function(args) {
                return hookApiRef.current.open((0, _extendsDefault.default)((0, _extendsDefault.default)({}, args), {
                    type: type
                }));
            };
        });
        return [
            hookApiRef.current,
            /*#__PURE__*/ _react.createElement((0, _configProvider.ConfigConsumer), {
                key: "holder"
            }, function(context) {
                getPrefixCls = context.getPrefixCls;
                return holder;
            })
        ];
    };
    return useNotification;
}
exports.default = createUseNotification;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","rc-notification/es/useNotification":"av13r","react":"21dqq","../../config-provider":"iMraF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWBoR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConfigContext", ()=>ConfigContext);
parcelHelpers.export(exports, "ConfigConsumer", ()=>ConfigConsumer);
/** @deprecated Use hooks instead. This is a legacy function */ parcelHelpers.export(exports, "withConfigConsumer", ()=>withConfigConsumer);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _react = require("react");
var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : "ant";
}; // zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.
var ConfigContext = /*#__PURE__*/ _react.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls
});
var ConfigConsumer = ConfigContext.Consumer;
function withConfigConsumer(config) {
    return function withConfigConsumerFunc(Component) {
        // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
        var SFC = function SFC(props) {
            return /*#__PURE__*/ _react.createElement(ConfigConsumer, null, function(configProps) {
                var basicPrefixCls = config.prefixCls;
                var getPrefixCls = configProps.getPrefixCls;
                var customizePrefixCls = props.prefixCls;
                var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
                return /*#__PURE__*/ _react.createElement(Component, (0, _extendsDefault.default)({}, configProps, props, {
                    prefixCls: prefixCls
                }));
            });
        };
        var cons = Component.constructor;
        var name = cons && cons.displayName || Component.name || "Component";
        SFC.displayName = "withConfigConsumer(".concat(name, ")");
        return SFC;
    };
}

},{"@babel/runtime/helpers/esm/extends":"fTBFS","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbvCC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStyle", ()=>getStyle);
parcelHelpers.export(exports, "registerTheme", ()=>registerTheme);
/* eslint-disable import/prefer-default-export, prefer-destructuring */ var _colors = require("@ant-design/colors");
var _tinycolor = require("@ctrl/tinycolor");
var _canUseDom = require("rc-util/es/Dom/canUseDom");
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
var _dynamicCSS = require("rc-util/es/Dom/dynamicCSS");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
function getStyle(globalPrefixCls, theme) {
    var variables = {};
    var formatColor = function formatColor(color, updater) {
        var clone = color.clone();
        clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
        return clone.toRgbString();
    };
    var fillColor = function fillColor(colorVal, type) {
        var baseColor = new (0, _tinycolor.TinyColor)(colorVal);
        var colorPalettes = (0, _colors.generate)(baseColor.toRgbString());
        variables["".concat(type, "-color")] = formatColor(baseColor);
        variables["".concat(type, "-color-disabled")] = colorPalettes[1];
        variables["".concat(type, "-color-hover")] = colorPalettes[4];
        variables["".concat(type, "-color-active")] = colorPalettes[7];
        variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
        variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[1];
        variables["".concat(type, "-color-deprecated-border")] = colorPalettes[3];
    }; // ================ Primary Color ================
    if (theme.primaryColor) {
        fillColor(theme.primaryColor, "primary");
        var primaryColor = new (0, _tinycolor.TinyColor)(theme.primaryColor);
        var primaryColors = (0, _colors.generate)(primaryColor.toRgbString()); // Legacy - We should use semantic naming standard
        primaryColors.forEach(function(color, index) {
            variables["primary-".concat(index + 1)] = color;
        }); // Deprecated
        variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, function(c) {
            return c.lighten(35);
        });
        variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, function(c) {
            return c.lighten(20);
        });
        variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, function(c) {
            return c.tint(20);
        });
        variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, function(c) {
            return c.tint(50);
        });
        variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, function(c) {
            return c.setAlpha(c.getAlpha() * 0.12);
        });
        var primaryActiveColor = new (0, _tinycolor.TinyColor)(primaryColors[0]);
        variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, function(c) {
            return c.setAlpha(c.getAlpha() * 0.3);
        });
        variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, function(c) {
            return c.darken(2);
        });
    } // ================ Success Color ================
    if (theme.successColor) fillColor(theme.successColor, "success");
     // ================ Warning Color ================
    if (theme.warningColor) fillColor(theme.warningColor, "warning");
     // ================= Error Color =================
    if (theme.errorColor) fillColor(theme.errorColor, "error");
     // ================= Info Color ==================
    if (theme.infoColor) fillColor(theme.infoColor, "info");
     // Convert to css variables
    var cssList = Object.keys(variables).map(function(key) {
        return "--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";");
    });
    return "\n  :root {\n    ".concat(cssList.join("\n"), "\n  }\n  ").trim();
}
function registerTheme(globalPrefixCls, theme) {
    var style = getStyle(globalPrefixCls, theme);
    if ((0, _canUseDomDefault.default)()) (0, _dynamicCSS.updateCSS)(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
    else (0, _warningDefault.default)(false, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}

},{"@ant-design/colors":"kM85l","@ctrl/tinycolor":"e1DHG","rc-util/es/Dom/canUseDom":"hGxAQ","rc-util/es/Dom/dynamicCSS":"lfei6","../_util/warning":"daUrm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJAKR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DisabledContextProvider", ()=>DisabledContextProvider);
var _react = require("react");
var DisabledContext = /*#__PURE__*/ _react.createContext(false);
var DisabledContextProvider = function DisabledContextProvider(_ref) {
    var children = _ref.children, disabled = _ref.disabled;
    var originDisabled = _react.useContext(DisabledContext);
    return /*#__PURE__*/ _react.createElement(DisabledContext.Provider, {
        value: disabled || originDisabled
    }, children);
};
exports.default = DisabledContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxcXW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SizeContextProvider", ()=>SizeContextProvider);
var _react = require("react");
var SizeContext = /*#__PURE__*/ _react.createContext(undefined);
var SizeContextProvider = function SizeContextProvider(_ref) {
    var children = _ref.children, size = _ref.size;
    return /*#__PURE__*/ _react.createElement(SizeContext.Consumer, null, function(originSize) {
        return /*#__PURE__*/ _react.createElement(SizeContext.Provider, {
            value: size || originSize
        }, children);
    });
};
exports.default = SizeContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1mV0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidElement", ()=>isValidElement);
parcelHelpers.export(exports, "replaceElement", ()=>replaceElement);
parcelHelpers.export(exports, "cloneElement", ()=>cloneElement);
var _react = require("react");
var isValidElement = _react.isValidElement;
function replaceElement(element, replacement, props) {
    if (!isValidElement(element)) return replacement;
    return /*#__PURE__*/ _react.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
    return replaceElement(element, element, props);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eWuNf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tuple", ()=>tuple);
parcelHelpers.export(exports, "tupleNum", ()=>tupleNum);
var tuple = function tuple() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return args;
};
var tupleNum = function tupleNum() {
    for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
    return args;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aPUPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _dynamicCSS = require("rc-util/es/Dom/dynamicCSS");
var _ref = require("rc-util/es/ref");
var _react = require("react");
var _configProvider = require("../config-provider");
var _raf = require("./raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var _reactNode = require("./reactNode");
var styleForPseudo; // Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
    return !element || element.offsetParent === null || element.hidden;
}
function isNotGrey(color) {
    // eslint-disable-next-line no-useless-escape
    var match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    if (match && match[1] && match[2] && match[3]) return !(match[1] === match[2] && match[2] === match[3]);
    return true;
}
var InternalWave = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(InternalWave, _React$Component);
    var _super = (0, _createSuperDefault.default)(InternalWave);
    function InternalWave() {
        var _this;
        (0, _classCallCheckDefault.default)(this, InternalWave);
        _this = _super.apply(this, arguments);
        _this.containerRef = /*#__PURE__*/ _react.createRef();
        _this.animationStart = false;
        _this.destroyed = false;
        _this.onClick = function(node, waveColor) {
            var _a, _b;
            var _this$props = _this.props, insertExtraNode = _this$props.insertExtraNode, disabled = _this$props.disabled;
            if (disabled || !node || isHidden(node) || node.className.indexOf("-leave") >= 0) return;
            _this.extraNode = document.createElement("div");
            var _assertThisInitialize = (0, _assertThisInitializedDefault.default)(_this), extraNode = _assertThisInitialize.extraNode;
            var getPrefixCls = _this.context.getPrefixCls;
            extraNode.className = "".concat(getPrefixCls(""), "-click-animating-node");
            var attributeName = _this.getAttributeName();
            node.setAttribute(attributeName, "true"); // Not white or transparent or grey
            if (waveColor && waveColor !== "#ffffff" && waveColor !== "rgb(255, 255, 255)" && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && waveColor !== "transparent") {
                extraNode.style.borderColor = waveColor;
                var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
                var nodeBody = nodeRoot instanceof Document ? nodeRoot.body : (_b = nodeRoot.firstChild) !== null && _b !== void 0 ? _b : nodeRoot;
                styleForPseudo = (0, _dynamicCSS.updateCSS)("\n      [".concat(getPrefixCls(""), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(""), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), "antd-wave", {
                    csp: _this.csp,
                    attachTo: nodeBody
                });
            }
            if (insertExtraNode) node.appendChild(extraNode);
            [
                "transition",
                "animation"
            ].forEach(function(name) {
                node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
                node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
            });
        };
        _this.onTransitionStart = function(e) {
            if (_this.destroyed) return;
            var node = _this.containerRef.current;
            if (!e || e.target !== node || _this.animationStart) return;
            _this.resetEffect(node);
        };
        _this.onTransitionEnd = function(e) {
            if (!e || e.animationName !== "fadeEffect") return;
            _this.resetEffect(e.target);
        };
        _this.bindAnimationEvent = function(node) {
            if (!node || !node.getAttribute || node.getAttribute("disabled") || node.className.indexOf("disabled") >= 0) return;
            var onClick = function onClick(e) {
                // Fix radio button click twice
                if (e.target.tagName === "INPUT" || isHidden(e.target)) return;
                _this.resetEffect(node); // Get wave color from target
                var waveColor = getComputedStyle(node).getPropertyValue("border-top-color") || getComputedStyle(node).getPropertyValue("border-color") || getComputedStyle(node).getPropertyValue("background-color");
                _this.clickWaveTimeoutId = window.setTimeout(function() {
                    return _this.onClick(node, waveColor);
                }, 0);
                (0, _rafDefault.default).cancel(_this.animationStartId);
                _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
                _this.animationStartId = (0, _rafDefault.default)(function() {
                    _this.animationStart = false;
                }, 10);
            };
            node.addEventListener("click", onClick, true);
            return {
                cancel: function cancel() {
                    node.removeEventListener("click", onClick, true);
                }
            };
        };
        _this.renderWave = function(_ref1) {
            var csp = _ref1.csp;
            var children = _this.props.children;
            _this.csp = csp;
            if (!/*#__PURE__*/ _react.isValidElement(children)) return children;
            var ref = _this.containerRef;
            if ((0, _ref.supportRef)(children)) ref = (0, _ref.composeRef)(children.ref, _this.containerRef);
            return (0, _reactNode.cloneElement)(children, {
                ref: ref
            });
        };
        return _this;
    }
    (0, _createClassDefault.default)(InternalWave, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.destroyed = false;
                var node = this.containerRef.current;
                if (!node || node.nodeType !== 1) return;
                this.instance = this.bindAnimationEvent(node);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.instance) this.instance.cancel();
                if (this.clickWaveTimeoutId) clearTimeout(this.clickWaveTimeoutId);
                this.destroyed = true;
            }
        },
        {
            key: "getAttributeName",
            value: function getAttributeName() {
                var getPrefixCls = this.context.getPrefixCls;
                var insertExtraNode = this.props.insertExtraNode;
                return insertExtraNode ? "".concat(getPrefixCls(""), "-click-animating") : "".concat(getPrefixCls(""), "-click-animating-without-extra-node");
            }
        },
        {
            key: "resetEffect",
            value: function resetEffect(node) {
                var _this2 = this;
                if (!node || node === this.extraNode || !(node instanceof Element)) return;
                var insertExtraNode = this.props.insertExtraNode;
                var attributeName = this.getAttributeName();
                node.setAttribute(attributeName, "false"); // edge has bug on `removeAttribute` #14466
                if (styleForPseudo) styleForPseudo.innerHTML = "";
                if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) node.removeChild(this.extraNode);
                [
                    "transition",
                    "animation"
                ].forEach(function(name) {
                    node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
                    node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
                });
            }
        },
        {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.createElement((0, _configProvider.ConfigConsumer), null, this.renderWave);
            }
        }
    ]);
    return InternalWave;
}(_react.Component);
InternalWave.contextType = (0, _configProvider.ConfigContext);
var Wave = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    return /*#__PURE__*/ _react.createElement(InternalWave, (0, _extendsDefault.default)({
        ref: ref
    }, props));
});
exports.default = Wave;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","rc-util/es/Dom/dynamicCSS":"lfei6","rc-util/es/ref":"jS1Z6","react":"21dqq","../config-provider":"iMraF","./raf":"d1iRS","./reactNode":"d1mV0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1iRS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _raf = require("rc-util/es/raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var id = 0;
var ids = {}; // Support call raf with delay specified frame
function wrapperRaf(callback) {
    var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var myId = id++;
    var restFrames = delayFrames;
    function internalCallback() {
        restFrames -= 1;
        if (restFrames <= 0) {
            callback();
            delete ids[myId];
        } else ids[myId] = (0, _rafDefault.default)(internalCallback);
    }
    ids[myId] = (0, _rafDefault.default)(internalCallback);
    return myId;
}
exports.default = wrapperRaf;
wrapperRaf.cancel = function cancel(pid) {
    if (pid === undefined) return;
    (0, _rafDefault.default).cancel(ids[pid]);
    delete ids[pid];
};
wrapperRaf.ids = ids; // export this for test usage

},{"rc-util/es/raf":"7OvWw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45IvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupSizeContext", ()=>GroupSizeContext);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _configProvider = require("../config-provider");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var GroupSizeContext = /*#__PURE__*/ _react.createContext(undefined);
var ButtonGroup = function ButtonGroup(props) {
    var _classNames;
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var customizePrefixCls = props.prefixCls, size = props.size, className = props.className, others = __rest(props, [
        "prefixCls",
        "size",
        "className"
    ]);
    var prefixCls = getPrefixCls("btn-group", customizePrefixCls); // large => lg
    // small => sm
    var sizeCls = "";
    switch(size){
        case "large":
            sizeCls = "lg";
            break;
        case "small":
            sizeCls = "sm";
            break;
        case "middle":
        case undefined:
            break;
        default:
            (0, _warningDefault.default)(!size, "Button.Group", "Invalid prop `size`.");
    }
    var classes = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames), className);
    return /*#__PURE__*/ _react.createElement(GroupSizeContext.Provider, {
        value: size
    }, /*#__PURE__*/ _react.createElement("div", (0, _extendsDefault.default)({}, others, {
        className: classes
    })));
};
exports.default = ButtonGroup;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","classnames":"jocGM","react":"21dqq","../config-provider":"iMraF","../_util/warning":"daUrm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gc8N8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadingOutlined = require("@ant-design/icons/es/icons/LoadingOutlined");
var _loadingOutlinedDefault = parcelHelpers.interopDefault(_loadingOutlined);
var _rcMotion = require("rc-motion");
var _rcMotionDefault = parcelHelpers.interopDefault(_rcMotion);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var getCollapsedWidth = function getCollapsedWidth() {
    return {
        width: 0,
        opacity: 0,
        transform: "scale(0)"
    };
};
var getRealWidth = function getRealWidth(node) {
    return {
        width: node.scrollWidth,
        opacity: 1,
        transform: "scale(1)"
    };
};
var LoadingIcon = function LoadingIcon(_ref) {
    var prefixCls = _ref.prefixCls, loading = _ref.loading, existIcon = _ref.existIcon;
    var visible = !!loading;
    if (existIcon) return /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
        className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _loadingOutlinedDefault.default), null));
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _rcMotionDefault.default), {
        visible: visible,
        // We do not really use this motionName
        motionName: "".concat(prefixCls, "-loading-icon-motion"),
        removeOnLeave: true,
        onAppearStart: getCollapsedWidth,
        onAppearActive: getRealWidth,
        onEnterStart: getCollapsedWidth,
        onEnterActive: getRealWidth,
        onLeaveStart: getRealWidth,
        onLeaveActive: getCollapsedWidth
    }, function(_ref2, ref) {
        var className = _ref2.className, style = _ref2.style;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: "".concat(prefixCls, "-loading-icon"),
            style: style,
            ref: ref
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _loadingOutlinedDefault.default), {
            className: className
        }));
    });
};
exports.default = LoadingIcon;

},{"@ant-design/icons/es/icons/LoadingOutlined":"1Fi2e","rc-motion":"aaavi","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAGRN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkbox = require("./Checkbox");
var _checkboxDefault = parcelHelpers.interopDefault(_checkbox);
var _group = require("./Group");
var _groupDefault = parcelHelpers.interopDefault(_group);
var Checkbox = (0, _checkboxDefault.default);
Checkbox.Group = (0, _groupDefault.default);
Checkbox.__ANT_CHECKBOX = true;
exports.default = Checkbox;

},{"./Checkbox":"kwG8u","./Group":"7kGQg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwG8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcCheckbox = require("rc-checkbox");
var _rcCheckboxDefault = parcelHelpers.interopDefault(_rcCheckbox);
var _react = require("react");
var _configProvider = require("../config-provider");
var _context = require("../form/context");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _group = require("./Group");
var _disabledContext = require("../config-provider/DisabledContext");
var _disabledContextDefault = parcelHelpers.interopDefault(_disabledContext);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var InternalCheckbox = function InternalCheckbox(_a, ref) {
    var _classNames;
    var customizePrefixCls = _a.prefixCls, className = _a.className, children = _a.children, _a$indeterminate = _a.indeterminate, indeterminate = _a$indeterminate === void 0 ? false : _a$indeterminate, style = _a.style, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, _a$skipGroup = _a.skipGroup, skipGroup = _a$skipGroup === void 0 ? false : _a$skipGroup, disabled = _a.disabled, restProps = __rest(_a, [
        "prefixCls",
        "className",
        "children",
        "indeterminate",
        "style",
        "onMouseEnter",
        "onMouseLeave",
        "skipGroup",
        "disabled"
    ]);
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var checkboxGroup = _react.useContext((0, _group.GroupContext));
    var _useContext = (0, _react.useContext)((0, _context.FormItemInputContext)), isFormItemInput = _useContext.isFormItemInput;
    var contextDisabled = (0, _react.useContext)((0, _disabledContextDefault.default));
    var mergedDisabled = disabled || (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || contextDisabled;
    var prevValue = _react.useRef(restProps.value);
    _react.useEffect(function() {
        checkboxGroup === null || checkboxGroup === void 0 || checkboxGroup.registerValue(restProps.value);
        (0, _warningDefault.default)("checked" in restProps || !!checkboxGroup || !("value" in restProps), "Checkbox", "`value` is not a valid prop, do you mean `checked`?");
    }, []);
    _react.useEffect(function() {
        if (skipGroup) return;
        if (restProps.value !== prevValue.current) {
            checkboxGroup === null || checkboxGroup === void 0 || checkboxGroup.cancelValue(prevValue.current);
            checkboxGroup === null || checkboxGroup === void 0 || checkboxGroup.registerValue(restProps.value);
            prevValue.current = restProps.value;
        }
        return function() {
            return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
        };
    }, [
        restProps.value
    ]);
    var prefixCls = getPrefixCls("checkbox", customizePrefixCls);
    var checkboxProps = (0, _extendsDefault.default)({}, restProps);
    if (checkboxGroup && !skipGroup) {
        checkboxProps.onChange = function() {
            if (restProps.onChange) restProps.onChange.apply(restProps, arguments);
            if (checkboxGroup.toggleOption) checkboxGroup.toggleOption({
                label: children,
                value: restProps.value
            });
        };
        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
    }
    var classString = (0, _classnamesDefault.default)((_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-wrapper-disabled"), mergedDisabled), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), _classNames), className);
    var checkboxClass = (0, _classnamesDefault.default)((0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
    var ariaChecked = indeterminate ? "mixed" : undefined;
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/label-has-associated-control
    _react.createElement("label", {
        className: classString,
        style: style,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
    }, /*#__PURE__*/ _react.createElement((0, _rcCheckboxDefault.default), (0, _extendsDefault.default)({
        "aria-checked": ariaChecked
    }, checkboxProps, {
        prefixCls: prefixCls,
        className: checkboxClass,
        disabled: mergedDisabled,
        ref: ref
    })), children !== undefined && /*#__PURE__*/ _react.createElement("span", null, children)));
};
var Checkbox = /*#__PURE__*/ _react.forwardRef(InternalCheckbox);
Checkbox.displayName = "Checkbox";
exports.default = Checkbox;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","classnames":"jocGM","rc-checkbox":"iJeKh","react":"21dqq","../config-provider":"iMraF","../form/context":"flRlt","../_util/warning":"daUrm","./Group":"7kGQg","../config-provider/DisabledContext":"kJAKR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJeKh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
// eslint-disable-next-line import/no-extraneous-dependencies
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var Checkbox = /*#__PURE__*/ function(_Component) {
    (0, _inheritsDefault.default)(Checkbox, _Component);
    var _super = (0, _createSuperDefault.default)(Checkbox);
    function Checkbox(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, Checkbox);
        _this = _super.call(this, props);
        _this.handleChange = function(e) {
            var _this$props = _this.props, disabled = _this$props.disabled, onChange = _this$props.onChange;
            if (disabled) return;
            if (!("checked" in _this.props)) _this.setState({
                checked: e.target.checked
            });
            if (onChange) onChange({
                target: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, _this.props), {}, {
                    checked: e.target.checked
                }),
                stopPropagation: function stopPropagation() {
                    e.stopPropagation();
                },
                preventDefault: function preventDefault() {
                    e.preventDefault();
                },
                nativeEvent: e.nativeEvent
            });
        };
        _this.saveInput = function(node) {
            _this.input = node;
        };
        var checked = "checked" in props ? props.checked : props.defaultChecked;
        _this.state = {
            checked: checked
        };
        return _this;
    }
    (0, _createClassDefault.default)(Checkbox, [
        {
            key: "focus",
            value: function focus() {
                this.input.focus();
            }
        },
        {
            key: "blur",
            value: function blur() {
                this.input.blur();
            }
        },
        {
            key: "render",
            value: function render() {
                var _classNames;
                var _this$props2 = this.props, prefixCls = _this$props2.prefixCls, className = _this$props2.className, style = _this$props2.style, name = _this$props2.name, id = _this$props2.id, type = _this$props2.type, disabled = _this$props2.disabled, readOnly = _this$props2.readOnly, tabIndex = _this$props2.tabIndex, onClick = _this$props2.onClick, onFocus = _this$props2.onFocus, onBlur = _this$props2.onBlur, onKeyDown = _this$props2.onKeyDown, onKeyPress = _this$props2.onKeyPress, onKeyUp = _this$props2.onKeyUp, autoFocus = _this$props2.autoFocus, value = _this$props2.value, required = _this$props2.required, others = (0, _objectWithoutPropertiesDefault.default)(_this$props2, [
                    "prefixCls",
                    "className",
                    "style",
                    "name",
                    "id",
                    "type",
                    "disabled",
                    "readOnly",
                    "tabIndex",
                    "onClick",
                    "onFocus",
                    "onBlur",
                    "onKeyDown",
                    "onKeyPress",
                    "onKeyUp",
                    "autoFocus",
                    "value",
                    "required"
                ]);
                var globalProps = Object.keys(others).reduce(function(prev, key) {
                    if (key.substr(0, 5) === "aria-" || key.substr(0, 5) === "data-" || key === "role") // eslint-disable-next-line no-param-reassign
                    prev[key] = others[key];
                    return prev;
                }, {});
                var checked = this.state.checked;
                var classString = (0, _classnamesDefault.default)(prefixCls, className, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-checked"), checked), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
                return /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
                    className: classString,
                    style: style
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement("input", (0, _extendsDefault.default)({
                    name: name,
                    id: id,
                    type: type,
                    required: required,
                    readOnly: readOnly,
                    disabled: disabled,
                    tabIndex: tabIndex,
                    className: "".concat(prefixCls, "-input"),
                    checked: !!checked,
                    onClick: onClick,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    onKeyUp: onKeyUp,
                    onKeyDown: onKeyDown,
                    onKeyPress: onKeyPress,
                    onChange: this.handleChange,
                    autoFocus: autoFocus,
                    ref: this.saveInput,
                    value: value
                }, globalProps)), /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
                    className: "".concat(prefixCls, "-inner")
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                if ("checked" in props) return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, state), {}, {
                    checked: props.checked
                });
                return null;
            }
        }
    ]);
    return Checkbox;
}((0, _react.Component));
Checkbox.defaultProps = {
    prefixCls: "rc-checkbox",
    className: "",
    style: {},
    type: "checkbox",
    defaultChecked: false,
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onChange: function onChange() {},
    onKeyDown: function onKeyDown() {},
    onKeyPress: function onKeyPress() {},
    onKeyUp: function onKeyUp() {}
};
exports.default = Checkbox;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"flRlt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormContext", ()=>FormContext);
parcelHelpers.export(exports, "NoStyleItemContext", ()=>NoStyleItemContext);
parcelHelpers.export(exports, "FormProvider", ()=>FormProvider);
parcelHelpers.export(exports, "FormItemPrefixContext", ()=>FormItemPrefixContext);
parcelHelpers.export(exports, "FormItemInputContext", ()=>FormItemInputContext);
parcelHelpers.export(exports, "NoFormStyle", ()=>NoFormStyle);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _rcFieldForm = require("rc-field-form");
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _react = require("react");
var FormContext = /*#__PURE__*/ _react.createContext({
    labelAlign: "right",
    vertical: false,
    itemRef: function itemRef() {}
});
var NoStyleItemContext = /*#__PURE__*/ _react.createContext(null);
var FormProvider = function FormProvider(props) {
    var providerProps = (0, _omitDefault.default)(props, [
        "prefixCls"
    ]);
    return /*#__PURE__*/ _react.createElement((0, _rcFieldForm.FormProvider), (0, _extendsDefault.default)({}, providerProps));
};
var FormItemPrefixContext = /*#__PURE__*/ _react.createContext({
    prefixCls: ""
});
var FormItemInputContext = /*#__PURE__*/ _react.createContext({});
var NoFormStyle = function NoFormStyle(_ref) {
    var children = _ref.children, status = _ref.status, override = _ref.override;
    var formItemInputContext = (0, _react.useContext)(FormItemInputContext);
    var newFormItemInputContext = (0, _react.useMemo)(function() {
        var newContext = (0, _extendsDefault.default)({}, formItemInputContext);
        if (override) delete newContext.isFormItemInput;
        if (status) {
            delete newContext.status;
            delete newContext.hasFeedback;
            delete newContext.feedbackIcon;
        }
        return newContext;
    }, [
        status,
        override,
        formItemInputContext
    ]);
    return /*#__PURE__*/ _react.createElement(FormItemInputContext.Provider, {
        value: newFormItemInputContext
    }, children);
};

},{"@babel/runtime/helpers/esm/extends":"fTBFS","rc-field-form":"bdxu5","rc-util/es/omit":"e7Re6","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kGQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupContext", ()=>GroupContext);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _react = require("react");
var _configProvider = require("../config-provider");
var _checkbox = require("./Checkbox");
var _checkboxDefault = parcelHelpers.interopDefault(_checkbox);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var GroupContext = /*#__PURE__*/ _react.createContext(null);
var InternalCheckboxGroup = function InternalCheckboxGroup(_a, ref) {
    var defaultValue = _a.defaultValue, children = _a.children, _a$options = _a.options, options = _a$options === void 0 ? [] : _a$options, customizePrefixCls = _a.prefixCls, className = _a.className, style = _a.style, onChange = _a.onChange, restProps = __rest(_a, [
        "defaultValue",
        "children",
        "options",
        "prefixCls",
        "className",
        "style",
        "onChange"
    ]);
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var _React$useState = _react.useState(restProps.value || defaultValue || []), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    var _React$useState3 = _react.useState([]), _React$useState4 = (0, _slicedToArrayDefault.default)(_React$useState3, 2), registeredValues = _React$useState4[0], setRegisteredValues = _React$useState4[1];
    _react.useEffect(function() {
        if ("value" in restProps) setValue(restProps.value || []);
    }, [
        restProps.value
    ]);
    var getOptions = function getOptions() {
        return options.map(function(option) {
            if (typeof option === "string" || typeof option === "number") return {
                label: option,
                value: option
            };
            return option;
        });
    };
    var cancelValue = function cancelValue(val) {
        setRegisteredValues(function(prevValues) {
            return prevValues.filter(function(v) {
                return v !== val;
            });
        });
    };
    var registerValue = function registerValue(val) {
        setRegisteredValues(function(prevValues) {
            return [].concat((0, _toConsumableArrayDefault.default)(prevValues), [
                val
            ]);
        });
    };
    var toggleOption = function toggleOption(option) {
        var optionIndex = value.indexOf(option.value);
        var newValue = (0, _toConsumableArrayDefault.default)(value);
        if (optionIndex === -1) newValue.push(option.value);
        else newValue.splice(optionIndex, 1);
        if (!("value" in restProps)) setValue(newValue);
        var opts = getOptions();
        onChange === null || onChange === void 0 || onChange(newValue.filter(function(val) {
            return registeredValues.indexOf(val) !== -1;
        }).sort(function(a, b) {
            var indexA = opts.findIndex(function(opt) {
                return opt.value === a;
            });
            var indexB = opts.findIndex(function(opt) {
                return opt.value === b;
            });
            return indexA - indexB;
        }));
    };
    var prefixCls = getPrefixCls("checkbox", customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var domProps = (0, _omitDefault.default)(restProps, [
        "value",
        "disabled"
    ]);
    if (options && options.length > 0) children = getOptions().map(function(option) {
        return /*#__PURE__*/ _react.createElement((0, _checkboxDefault.default), {
            prefixCls: prefixCls,
            key: option.value.toString(),
            disabled: "disabled" in option ? option.disabled : restProps.disabled,
            value: option.value,
            checked: value.indexOf(option.value) !== -1,
            onChange: option.onChange,
            className: "".concat(groupPrefixCls, "-item"),
            style: option.style
        }, option.label);
    });
     // eslint-disable-next-line react/jsx-no-constructed-context-values
    var context = {
        toggleOption: toggleOption,
        value: value,
        disabled: restProps.disabled,
        name: restProps.name,
        // https://github.com/ant-design/ant-design/issues/16376
        registerValue: registerValue,
        cancelValue: cancelValue
    };
    var classString = (0, _classnamesDefault.default)(groupPrefixCls, (0, _definePropertyDefault.default)({}, "".concat(groupPrefixCls, "-rtl"), direction === "rtl"), className);
    return /*#__PURE__*/ _react.createElement("div", (0, _extendsDefault.default)({
        className: classString,
        style: style
    }, domProps, {
        ref: ref
    }), /*#__PURE__*/ _react.createElement(GroupContext.Provider, {
        value: context
    }, children));
};
var CheckboxGroup = /*#__PURE__*/ _react.forwardRef(InternalCheckboxGroup);
exports.default = /*#__PURE__*/ _react.memo(CheckboxGroup);

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","classnames":"jocGM","rc-util/es/omit":"e7Re6","react":"21dqq","../config-provider":"iMraF","./Checkbox":"kwG8u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4jFj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _grid = require("../grid");
exports.default = (0, _grid.Col);

},{"../grid":"2CE2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CE2V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Row", ()=>(0, _rowDefault.default));
parcelHelpers.export(exports, "Col", ()=>(0, _colDefault.default));
var _col = require("./col");
var _colDefault = parcelHelpers.interopDefault(_col);
var _useBreakpoint = require("./hooks/useBreakpoint");
var _useBreakpointDefault = parcelHelpers.interopDefault(_useBreakpoint);
var _row = require("./row"); // Do not export params
var _rowDefault = parcelHelpers.interopDefault(_row);
function useBreakpoint() {
    return (0, _useBreakpointDefault.default)();
}
exports.default = {
    useBreakpoint: useBreakpoint
};

},{"./col":"6Fvfx","./hooks/useBreakpoint":"kGSBb","./row":"bnG8W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Fvfx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _configProvider = require("../config-provider");
var _rowContext = require("./RowContext");
var _rowContextDefault = parcelHelpers.interopDefault(_rowContext);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function parseFlex(flex) {
    if (typeof flex === "number") return "".concat(flex, " ").concat(flex, " auto");
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) return "0 0 ".concat(flex);
    return flex;
}
var sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl"
];
var Col = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var _classNames;
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var _React$useContext2 = _react.useContext((0, _rowContextDefault.default)), gutter = _React$useContext2.gutter, wrap = _React$useContext2.wrap, supportFlexGap = _React$useContext2.supportFlexGap;
    var customizePrefixCls = props.prefixCls, span = props.span, order = props.order, offset = props.offset, push = props.push, pull = props.pull, className = props.className, children = props.children, flex = props.flex, style = props.style, others = __rest(props, [
        "prefixCls",
        "span",
        "order",
        "offset",
        "push",
        "pull",
        "className",
        "children",
        "flex",
        "style"
    ]);
    var prefixCls = getPrefixCls("col", customizePrefixCls);
    var sizeClassObj = {};
    sizes.forEach(function(size) {
        var _extends2;
        var sizeProps = {};
        var propSize = props[size];
        if (typeof propSize === "number") sizeProps.span = propSize;
        else if ((0, _typeofDefault.default)(propSize) === "object") sizeProps = propSize || {};
        delete others[size];
        sizeClassObj = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, sizeClassObj), (_extends2 = {}, (0, _definePropertyDefault.default)(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _definePropertyDefault.default)(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _definePropertyDefault.default)(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _definePropertyDefault.default)(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _definePropertyDefault.default)(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0, _definePropertyDefault.default)(_extends2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _extends2));
    });
    var classes = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
    var mergedStyle = {}; // Horizontal gutter use padding
    if (gutter && gutter[0] > 0) {
        var horizontalGutter = gutter[0] / 2;
        mergedStyle.paddingLeft = horizontalGutter;
        mergedStyle.paddingRight = horizontalGutter;
    } // Vertical gutter use padding when gap not support
    if (gutter && gutter[1] > 0 && !supportFlexGap) {
        var verticalGutter = gutter[1] / 2;
        mergedStyle.paddingTop = verticalGutter;
        mergedStyle.paddingBottom = verticalGutter;
    }
    if (flex) {
        mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (wrap === false && !mergedStyle.minWidth) mergedStyle.minWidth = 0;
    }
    return /*#__PURE__*/ _react.createElement("div", (0, _extendsDefault.default)({}, others, {
        style: (0, _extendsDefault.default)((0, _extendsDefault.default)({}, mergedStyle), style),
        className: classes,
        ref: ref
    }), children);
});
Col.displayName = "Col";
exports.default = Col;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/typeof":"i7HWY","classnames":"jocGM","react":"21dqq","../config-provider":"iMraF","./RowContext":"7dpkR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dpkR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var RowContext = /*#__PURE__*/ (0, _react.createContext)({});
exports.default = RowContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kGSBb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useForceUpdate = require("../../_util/hooks/useForceUpdate");
var _useForceUpdateDefault = parcelHelpers.interopDefault(_useForceUpdate);
var _responsiveObserve = require("../../_util/responsiveObserve");
var _responsiveObserveDefault = parcelHelpers.interopDefault(_responsiveObserve);
function useBreakpoint() {
    var refreshOnChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var screensRef = (0, _react.useRef)({});
    var forceUpdate = (0, _useForceUpdateDefault.default)();
    (0, _react.useEffect)(function() {
        var token = (0, _responsiveObserveDefault.default).subscribe(function(supportScreens) {
            screensRef.current = supportScreens;
            if (refreshOnChange) forceUpdate();
        });
        return function() {
            return (0, _responsiveObserveDefault.default).unsubscribe(token);
        };
    }, []);
    return screensRef.current;
}
exports.default = useBreakpoint;

},{"react":"21dqq","../../_util/hooks/useForceUpdate":"4Vz3k","../../_util/responsiveObserve":"j61nn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Vz3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
function useForceUpdate() {
    var _React$useReducer = _react.useReducer(function(x) {
        return x + 1;
    }, 0), _React$useReducer2 = (0, _slicedToArrayDefault.default)(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
    return forceUpdate;
}
exports.default = useForceUpdate;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j61nn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "responsiveArray", ()=>responsiveArray);
parcelHelpers.export(exports, "responsiveMap", ()=>responsiveMap);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var responsiveArray = [
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
];
var responsiveMap = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)"
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
    matchHandlers: {},
    dispatch: function dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(function(func) {
            return func(screens);
        });
        return subscribers.size >= 1;
    },
    subscribe: function subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
    },
    unsubscribe: function unsubscribe(token) {
        subscribers["delete"](token);
        if (!subscribers.size) this.unregister();
    },
    unregister: function unregister() {
        var _this = this;
        Object.keys(responsiveMap).forEach(function(screen) {
            var matchMediaQuery = responsiveMap[screen];
            var handler = _this.matchHandlers[matchMediaQuery];
            handler === null || handler === void 0 || handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
    },
    register: function register() {
        var _this2 = this;
        Object.keys(responsiveMap).forEach(function(screen) {
            var matchMediaQuery = responsiveMap[screen];
            var listener = function listener(_ref) {
                var matches = _ref.matches;
                _this2.dispatch((0, _extendsDefault.default)((0, _extendsDefault.default)({}, screens), (0, _definePropertyDefault.default)({}, screen, matches)));
            };
            var mql = window.matchMedia(matchMediaQuery);
            mql.addListener(listener);
            _this2.matchHandlers[matchMediaQuery] = {
                mql: mql,
                listener: listener
            };
            listener(mql);
        });
    }
};
exports.default = responsiveObserve;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnG8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _configProvider = require("../config-provider");
var _useFlexGapSupport = require("../_util/hooks/useFlexGapSupport");
var _useFlexGapSupportDefault = parcelHelpers.interopDefault(_useFlexGapSupport);
var _responsiveObserve = require("../_util/responsiveObserve");
var _responsiveObserveDefault = parcelHelpers.interopDefault(_responsiveObserve);
var _type = require("../_util/type");
var _rowContext = require("./RowContext");
var _rowContextDefault = parcelHelpers.interopDefault(_rowContext);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var RowAligns = (0, _type.tuple)("top", "middle", "bottom", "stretch");
var RowJustify = (0, _type.tuple)("start", "end", "center", "space-around", "space-between", "space-evenly");
var Row = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var _classNames;
    var customizePrefixCls = props.prefixCls, justify = props.justify, align = props.align, className = props.className, style = props.style, children = props.children, _props$gutter = props.gutter, gutter = _props$gutter === void 0 ? 0 : _props$gutter, wrap = props.wrap, others = __rest(props, [
        "prefixCls",
        "justify",
        "align",
        "className",
        "style",
        "children",
        "gutter",
        "wrap"
    ]);
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var _React$useState = _react.useState({
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true
    }), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), screens = _React$useState2[0], setScreens = _React$useState2[1];
    var supportFlexGap = (0, _useFlexGapSupportDefault.default)();
    var gutterRef = _react.useRef(gutter); // ================================== Effect ==================================
    _react.useEffect(function() {
        var token = (0, _responsiveObserveDefault.default).subscribe(function(screen) {
            var currentGutter = gutterRef.current || 0;
            if (!Array.isArray(currentGutter) && (0, _typeofDefault.default)(currentGutter) === "object" || Array.isArray(currentGutter) && ((0, _typeofDefault.default)(currentGutter[0]) === "object" || (0, _typeofDefault.default)(currentGutter[1]) === "object")) setScreens(screen);
        });
        return function() {
            return (0, _responsiveObserveDefault.default).unsubscribe(token);
        };
    }, []); // ================================== Render ==================================
    var getGutter = function getGutter() {
        var results = [
            undefined,
            undefined
        ];
        var normalizedGutter = Array.isArray(gutter) ? gutter : [
            gutter,
            undefined
        ];
        normalizedGutter.forEach(function(g, index) {
            if ((0, _typeofDefault.default)(g) === "object") for(var i = 0; i < (0, _responsiveObserve.responsiveArray).length; i++){
                var breakpoint = (0, _responsiveObserve.responsiveArray)[i];
                if (screens[breakpoint] && g[breakpoint] !== undefined) {
                    results[index] = g[breakpoint];
                    break;
                }
            }
            else results[index] = g;
        });
        return results;
    };
    var prefixCls = getPrefixCls("row", customizePrefixCls);
    var gutters = getGutter();
    var classes = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(justify), justify), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(align), align), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames), className); // Add gutter related style
    var rowStyle = {};
    var horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
    var verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
    if (horizontalGutter) {
        rowStyle.marginLeft = horizontalGutter;
        rowStyle.marginRight = horizontalGutter;
    }
    if (supportFlexGap) {
        // Set gap direct if flex gap support
        var _gutters = (0, _slicedToArrayDefault.default)(gutters, 2);
        rowStyle.rowGap = _gutters[1];
    } else if (verticalGutter) {
        rowStyle.marginTop = verticalGutter;
        rowStyle.marginBottom = verticalGutter;
    } // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
    // So we deconstruct "gutters" variable here.
    var _gutters2 = (0, _slicedToArrayDefault.default)(gutters, 2), gutterH = _gutters2[0], gutterV = _gutters2[1];
    var rowContext = _react.useMemo(function() {
        return {
            gutter: [
                gutterH,
                gutterV
            ],
            wrap: wrap,
            supportFlexGap: supportFlexGap
        };
    }, [
        gutterH,
        gutterV,
        wrap,
        supportFlexGap
    ]);
    return /*#__PURE__*/ _react.createElement((0, _rowContextDefault.default).Provider, {
        value: rowContext
    }, /*#__PURE__*/ _react.createElement("div", (0, _extendsDefault.default)({}, others, {
        className: classes,
        style: (0, _extendsDefault.default)((0, _extendsDefault.default)({}, rowStyle), style),
        ref: ref
    }), children));
});
Row.displayName = "Row";
exports.default = Row;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","classnames":"jocGM","react":"21dqq","../config-provider":"iMraF","../_util/hooks/useFlexGapSupport":"bEXds","../_util/responsiveObserve":"j61nn","../_util/type":"eWuNf","./RowContext":"7dpkR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEXds":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _styleChecker = require("../styleChecker");
exports.default = function() {
    var _React$useState = _react.useState(false), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), flexible = _React$useState2[0], setFlexible = _React$useState2[1];
    _react.useEffect(function() {
        setFlexible((0, _styleChecker.detectFlexGapSupported)());
    }, []);
    return flexible;
};

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","../styleChecker":"a2Olf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2Olf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canUseDocElement", ()=>canUseDocElement);
parcelHelpers.export(exports, "isStyleSupport", ()=>(0, _styleChecker.isStyleSupport));
parcelHelpers.export(exports, "detectFlexGapSupported", ()=>detectFlexGapSupported);
var _canUseDom = require("rc-util/es/Dom/canUseDom");
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
var _styleChecker = require("rc-util/es/Dom/styleChecker");
var canUseDocElement = function canUseDocElement() {
    return (0, _canUseDomDefault.default)() && window.document.documentElement;
};
var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
    if (!canUseDocElement()) return false;
    if (flexGapSupported !== undefined) return flexGapSupported;
     // create flex container with row-gap set
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px"; // create two, elements inside it
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div")); // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    document.body.removeChild(flex);
    return flexGapSupported;
};

},{"rc-util/es/Dom/canUseDom":"hGxAQ","rc-util/es/Dom/styleChecker":"j7lOO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7lOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isStyleSupport", ()=>isStyleSupport);
var _canUseDom = require("./canUseDom");
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
var isStyleNameSupport = function isStyleNameSupport(styleName) {
    if ((0, _canUseDomDefault.default)() && window.document.documentElement) {
        var styleNameList = Array.isArray(styleName) ? styleName : [
            styleName
        ];
        var documentElement = window.document.documentElement;
        return styleNameList.some(function(name) {
            return name in documentElement.style;
        });
    }
    return false;
};
var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
    if (!isStyleNameSupport(styleName)) return false;
    var ele = document.createElement("div");
    var origin = ele.style[styleName];
    ele.style[styleName] = value;
    return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
    if (!Array.isArray(styleName) && styleValue !== undefined) return isStyleValueSupport(styleName, styleValue);
    return isStyleNameSupport(styleName);
}

},{"./canUseDom":"hGxAQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2OzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _context = require("./context");
var _errorList = require("./ErrorList");
var _errorListDefault = parcelHelpers.interopDefault(_errorList);
var _form = require("./Form");
var _formDefault = parcelHelpers.interopDefault(_form);
var _formItem = require("./FormItem");
var _formItemDefault = parcelHelpers.interopDefault(_formItem);
var _formList = require("./FormList");
var _formListDefault = parcelHelpers.interopDefault(_formList);
var _useFormInstance = require("./hooks/useFormInstance");
var _useFormInstanceDefault = parcelHelpers.interopDefault(_useFormInstance);
var Form = (0, _formDefault.default);
Form.Item = (0, _formItemDefault.default);
Form.List = (0, _formListDefault.default);
Form.ErrorList = (0, _errorListDefault.default);
Form.useForm = (0, _form.useForm);
Form.useFormInstance = (0, _useFormInstanceDefault.default);
Form.useWatch = (0, _form.useWatch);
Form.Provider = (0, _context.FormProvider);
Form.create = function() {
    (0, _warningDefault.default)(false, "Form", "antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.");
};
exports.default = Form;

},{"../_util/warning":"daUrm","./context":"flRlt","./ErrorList":"gLa2z","./Form":"9INzo","./FormItem":"2p7o3","./FormList":"1VTIE","./hooks/useFormInstance":"8n7yH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLa2z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcMotion = require("rc-motion");
var _rcMotionDefault = parcelHelpers.interopDefault(_rcMotion);
var _react = require("react");
var _configProvider = require("../config-provider");
var _motion = require("../_util/motion");
var _motionDefault = parcelHelpers.interopDefault(_motion);
var _context = require("./context");
var _useDebounce = require("./hooks/useDebounce");
var _useDebounceDefault = parcelHelpers.interopDefault(_useDebounce);
var EMPTY_LIST = [];
function toErrorEntity(error, errorStatus, prefix) {
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return {
        key: typeof error === "string" ? error : "".concat(prefix, "-").concat(index),
        error: error,
        errorStatus: errorStatus
    };
}
function ErrorList(_ref) {
    var help = _ref.help, helpStatus = _ref.helpStatus, _ref$errors = _ref.errors, errors = _ref$errors === void 0 ? EMPTY_LIST : _ref$errors, _ref$warnings = _ref.warnings, warnings = _ref$warnings === void 0 ? EMPTY_LIST : _ref$warnings, rootClassName = _ref.className, onVisibleChanged = _ref.onVisibleChanged;
    var _React$useContext = _react.useContext((0, _context.FormItemPrefixContext)), prefixCls = _React$useContext.prefixCls;
    var _React$useContext2 = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext2.getPrefixCls;
    var baseClassName = "".concat(prefixCls, "-item-explain");
    var rootPrefixCls = getPrefixCls(); // We have to debounce here again since somewhere use ErrorList directly still need no shaking
    // ref: https://github.com/ant-design/ant-design/issues/36336
    var debounceErrors = (0, _useDebounceDefault.default)(errors);
    var debounceWarnings = (0, _useDebounceDefault.default)(warnings);
    var fullKeyList = _react.useMemo(function() {
        if (help !== undefined && help !== null) return [
            toErrorEntity(help, helpStatus, "help")
        ];
        return [].concat((0, _toConsumableArrayDefault.default)(debounceErrors.map(function(error, index) {
            return toErrorEntity(error, "error", "error", index);
        })), (0, _toConsumableArrayDefault.default)(debounceWarnings.map(function(warning, index) {
            return toErrorEntity(warning, "warning", "warning", index);
        })));
    }, [
        help,
        helpStatus,
        debounceErrors,
        debounceWarnings
    ]);
    return /*#__PURE__*/ _react.createElement((0, _rcMotionDefault.default), {
        motionDeadline: (0, _motionDefault.default).motionDeadline,
        motionName: "".concat(rootPrefixCls, "-show-help"),
        visible: !!fullKeyList.length,
        onVisibleChanged: onVisibleChanged
    }, function(holderProps) {
        var holderClassName = holderProps.className, holderStyle = holderProps.style;
        return /*#__PURE__*/ _react.createElement("div", {
            className: (0, _classnamesDefault.default)(baseClassName, holderClassName, rootClassName),
            style: holderStyle
        }, /*#__PURE__*/ _react.createElement((0, _rcMotion.CSSMotionList), (0, _extendsDefault.default)({
            keys: fullKeyList
        }, (0, _motionDefault.default), {
            motionName: "".concat(rootPrefixCls, "-show-help-item"),
            component: false
        }), function(itemProps) {
            var key = itemProps.key, error = itemProps.error, errorStatus = itemProps.errorStatus, itemClassName = itemProps.className, itemStyle = itemProps.style;
            return /*#__PURE__*/ _react.createElement("div", {
                key: key,
                role: "alert",
                className: (0, _classnamesDefault.default)(itemClassName, (0, _definePropertyDefault.default)({}, "".concat(baseClassName, "-").concat(errorStatus), errorStatus)),
                style: itemStyle
            }, error);
        }));
    });
}
exports.default = ErrorList;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","classnames":"jocGM","rc-motion":"aaavi","react":"21dqq","../config-provider":"iMraF","../_util/motion":"8VhHM","./context":"flRlt","./hooks/useDebounce":"1Bt3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VhHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTransitionName", ()=>getTransitionName);
parcelHelpers.export(exports, "getTransitionDirection", ()=>getTransitionDirection);
var _type = require("./type"); // ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
    return {
        height: 0,
        opacity: 0
    };
};
var getRealHeight = function getRealHeight(node) {
    var scrollHeight = node.scrollHeight;
    return {
        height: scrollHeight,
        opacity: 1
    };
};
var getCurrentHeight = function getCurrentHeight(node) {
    return {
        height: node ? node.offsetHeight : 0
    };
};
var skipOpacityTransition = function skipOpacityTransition(_, event) {
    return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === "height";
};
var collapseMotion = {
    motionName: "ant-motion-collapse",
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
};
var SelectPlacements = (0, _type.tuple)("bottomLeft", "bottomRight", "topLeft", "topRight");
var getTransitionDirection = function getTransitionDirection(placement) {
    if (placement !== undefined && (placement === "topLeft" || placement === "topRight")) return "slide-down";
    return "slide-up";
};
var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
    if (transitionName !== undefined) return transitionName;
    return "".concat(rootPrefixCls, "-").concat(motion);
};
exports.default = collapseMotion;

},{"./type":"eWuNf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Bt3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
function useDebounce(value) {
    var _React$useState = _react.useState(value), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), cacheValue = _React$useState2[0], setCacheValue = _React$useState2[1];
    _react.useEffect(function() {
        var timeout = setTimeout(function() {
            setCacheValue(value);
        }, value.length ? 0 : 10);
        return function() {
            clearTimeout(timeout);
        };
    }, [
        value
    ]);
    return cacheValue;
}
exports.default = useDebounce;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9INzo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useForm", ()=>(0, _useFormDefault.default));
parcelHelpers.export(exports, "List", ()=>(0, _rcFieldForm.List));
parcelHelpers.export(exports, "useWatch", ()=>(0, _rcFieldForm.useWatch));
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcFieldForm = require("rc-field-form");
var _rcFieldFormDefault = parcelHelpers.interopDefault(_rcFieldForm);
var _react = require("react");
var _configProvider = require("../config-provider");
var _disabledContext = require("../config-provider/DisabledContext");
var _disabledContextDefault = parcelHelpers.interopDefault(_disabledContext);
var _sizeContext = require("../config-provider/SizeContext");
var _sizeContextDefault = parcelHelpers.interopDefault(_sizeContext);
var _context = require("./context");
var _useForm = require("./hooks/useForm");
var _useFormDefault = parcelHelpers.interopDefault(_useForm);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var InternalForm = function InternalForm(props, ref) {
    var _classNames;
    var contextSize = _react.useContext((0, _sizeContextDefault.default));
    var contextDisabled = _react.useContext((0, _disabledContextDefault.default));
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction, contextForm = _React$useContext.form;
    var customizePrefixCls = props.prefixCls, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, _props$size = props.size, size = _props$size === void 0 ? contextSize : _props$size, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? contextDisabled : _props$disabled, form = props.form, colon = props.colon, labelAlign = props.labelAlign, labelWrap = props.labelWrap, labelCol = props.labelCol, wrapperCol = props.wrapperCol, hideRequiredMark = props.hideRequiredMark, _props$layout = props.layout, layout = _props$layout === void 0 ? "horizontal" : _props$layout, scrollToFirstError = props.scrollToFirstError, requiredMark = props.requiredMark, onFinishFailed = props.onFinishFailed, name = props.name, restFormProps = __rest(props, [
        "prefixCls",
        "className",
        "size",
        "disabled",
        "form",
        "colon",
        "labelAlign",
        "labelWrap",
        "labelCol",
        "wrapperCol",
        "hideRequiredMark",
        "layout",
        "scrollToFirstError",
        "requiredMark",
        "onFinishFailed",
        "name"
    ]);
    var mergedRequiredMark = (0, _react.useMemo)(function() {
        if (requiredMark !== undefined) return requiredMark;
        if (contextForm && contextForm.requiredMark !== undefined) return contextForm.requiredMark;
        if (hideRequiredMark) return false;
        return true;
    }, [
        hideRequiredMark,
        requiredMark,
        contextForm
    ]);
    var mergedColon = colon !== null && colon !== void 0 ? colon : contextForm === null || contextForm === void 0 ? void 0 : contextForm.colon;
    var prefixCls = getPrefixCls("form", customizePrefixCls);
    var formClassName = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(layout), true), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-hide-required-mark"), mergedRequiredMark === false), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);
    var _useForm = (0, _useFormDefault.default)(form), _useForm2 = (0, _slicedToArrayDefault.default)(_useForm, 1), wrapForm = _useForm2[0];
    var __INTERNAL__ = wrapForm.__INTERNAL__;
    __INTERNAL__.name = name;
    var formContextValue = (0, _react.useMemo)(function() {
        return {
            name: name,
            labelAlign: labelAlign,
            labelCol: labelCol,
            labelWrap: labelWrap,
            wrapperCol: wrapperCol,
            vertical: layout === "vertical",
            colon: mergedColon,
            requiredMark: mergedRequiredMark,
            itemRef: __INTERNAL__.itemRef,
            form: wrapForm
        };
    }, [
        name,
        labelAlign,
        labelCol,
        wrapperCol,
        layout,
        mergedColon,
        mergedRequiredMark,
        wrapForm
    ]);
    _react.useImperativeHandle(ref, function() {
        return wrapForm;
    });
    var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
        onFinishFailed === null || onFinishFailed === void 0 || onFinishFailed(errorInfo);
        var defaultScrollToFirstError = {
            block: "nearest"
        };
        if (scrollToFirstError && errorInfo.errorFields.length) {
            if ((0, _typeofDefault.default)(scrollToFirstError) === "object") defaultScrollToFirstError = scrollToFirstError;
            wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
        }
    };
    return /*#__PURE__*/ _react.createElement((0, _disabledContext.DisabledContextProvider), {
        disabled: disabled
    }, /*#__PURE__*/ _react.createElement((0, _sizeContext.SizeContextProvider), {
        size: size
    }, /*#__PURE__*/ _react.createElement((0, _context.FormContext).Provider, {
        value: formContextValue
    }, /*#__PURE__*/ _react.createElement((0, _rcFieldFormDefault.default), (0, _extendsDefault.default)({
        id: name
    }, restFormProps, {
        name: name,
        onFinishFailed: onInternalFinishFailed,
        form: wrapForm,
        className: formClassName
    })))));
};
var Form = /*#__PURE__*/ _react.forwardRef(InternalForm);
exports.default = Form;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/defineProperty":"hbmCA","classnames":"jocGM","rc-field-form":"bdxu5","react":"21dqq","../config-provider":"iMraF","../config-provider/DisabledContext":"kJAKR","../config-provider/SizeContext":"kxcXW","./context":"flRlt","./hooks/useForm":"avbaw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avbaw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _rcFieldForm = require("rc-field-form");
var _react = require("react");
var _scrollIntoViewIfNeeded = require("scroll-into-view-if-needed");
var _scrollIntoViewIfNeededDefault = parcelHelpers.interopDefault(_scrollIntoViewIfNeeded);
var _util = require("../util");
function toNamePathStr(name) {
    var namePath = (0, _util.toArray)(name);
    return namePath.join("_");
}
function useForm(form) {
    var _useRcForm = (0, _rcFieldForm.useForm)(), _useRcForm2 = (0, _slicedToArrayDefault.default)(_useRcForm, 1), rcForm = _useRcForm2[0];
    var itemsRef = _react.useRef({});
    var wrapForm = _react.useMemo(function() {
        return form !== null && form !== void 0 ? form : (0, _extendsDefault.default)((0, _extendsDefault.default)({}, rcForm), {
            __INTERNAL__: {
                itemRef: function itemRef(name) {
                    return function(node) {
                        var namePathStr = toNamePathStr(name);
                        if (node) itemsRef.current[namePathStr] = node;
                        else delete itemsRef.current[namePathStr];
                    };
                }
            },
            scrollToField: function scrollToField(name) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var namePath = (0, _util.toArray)(name);
                var fieldId = (0, _util.getFieldId)(namePath, wrapForm.__INTERNAL__.name);
                var node = fieldId ? document.getElementById(fieldId) : null;
                if (node) (0, _scrollIntoViewIfNeededDefault.default)(node, (0, _extendsDefault.default)({
                    scrollMode: "if-needed",
                    block: "nearest"
                }, options));
            },
            getFieldInstance: function getFieldInstance(name) {
                var namePathStr = toNamePathStr(name);
                return itemsRef.current[namePathStr];
            }
        });
    }, [
        form,
        rcForm
    ]);
    return [
        wrapForm
    ];
}
exports.default = useForm;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","rc-field-form":"bdxu5","react":"21dqq","scroll-into-view-if-needed":"3tw0v","../util":"i9Pgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tw0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeScrollIntoView = require("compute-scroll-into-view");
var _computeScrollIntoViewDefault = parcelHelpers.interopDefault(_computeScrollIntoView);
function isOptionsObject(options) {
    return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
    if (behavior === void 0) behavior = "auto";
    var canSmoothScroll = "scrollBehavior" in document.body.style;
    actions.forEach(function(_ref) {
        var el = _ref.el, top = _ref.top, left = _ref.left;
        if (el.scroll && canSmoothScroll) el.scroll({
            top: top,
            left: left,
            behavior: behavior
        });
        else {
            el.scrollTop = top;
            el.scrollLeft = left;
        }
    });
}
function getOptions(options) {
    if (options === false) return {
        block: "end",
        inline: "nearest"
    };
    if (isOptionsObject(options)) return options;
    return {
        block: "start",
        inline: "nearest"
    };
}
function scrollIntoView(target, options) {
    var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
    if (isOptionsObject(options) && typeof options.behavior === "function") return options.behavior(isTargetAttached ? (0, _computeScrollIntoViewDefault.default)(target, options) : []);
    if (!isTargetAttached) return;
    var computeOptions = getOptions(options);
    return defaultBehavior((0, _computeScrollIntoViewDefault.default)(target, computeOptions), computeOptions.behavior);
}
exports.default = scrollIntoView;

},{"compute-scroll-into-view":"5em9X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5em9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function t(t) {
    return "object" == typeof t && null != t && 1 === t.nodeType;
}
function e(t, e) {
    return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
}
function n(t, n) {
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        var r = getComputedStyle(t, null);
        return e(r.overflowY, n) || e(r.overflowX, n) || function(t) {
            var e = function(t) {
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t1) {
                    return null;
                }
            }(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        }(t);
    }
    return !1;
}
function r(t, e, n, r, i, o, l, d) {
    return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - r : l > e && d < n || o < t && d > n ? l - e + i : 0;
}
exports.default = function(e, i) {
    var o = window, l = i.scrollMode, d = i.block, u = i.inline, h = i.boundary, a = i.skipOverflowHiddenElements, c = "function" == typeof h ? h : function(t) {
        return t !== h;
    };
    if (!t(e)) throw new TypeError("Invalid target");
    for(var f = document.scrollingElement || document.documentElement, s = [], p = e; t(p) && c(p);){
        if ((p = p.parentElement) === f) {
            s.push(p);
            break;
        }
        null != p && p === document.body && n(p) && !n(document.documentElement) || null != p && n(p, a) && s.push(p);
    }
    for(var m = o.visualViewport ? o.visualViewport.width : innerWidth, g = o.visualViewport ? o.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, W = e.getBoundingClientRect(), b = W.height, H = W.width, y = W.top, E = W.right, M = W.bottom, V = W.left, x = "start" === d || "nearest" === d ? y : "end" === d ? M : y + b / 2, I = "center" === u ? V + H / 2 : "end" === u ? E : V, C = [], T = 0; T < s.length; T++){
        var k = s[T], B = k.getBoundingClientRect(), D = B.height, O = B.width, R = B.top, X = B.right, Y = B.bottom, L = B.left;
        if ("if-needed" === l && y >= 0 && V >= 0 && M <= g && E <= m && y >= R && M <= Y && V >= L && E <= X) return C;
        var S = getComputedStyle(k), j = parseInt(S.borderLeftWidth, 10), q = parseInt(S.borderTopWidth, 10), z = parseInt(S.borderRightWidth, 10), A = parseInt(S.borderBottomWidth, 10), F = 0, G = 0, J = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - z : 0, K = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - q - A : 0;
        if (f === k) F = "start" === d ? x : "end" === d ? x - g : "nearest" === d ? r(v, v + g, g, q, A, v + x, v + x + b, b) : x - g / 2, G = "start" === u ? I : "center" === u ? I - m / 2 : "end" === u ? I - m : r(w, w + m, m, j, z, w + I, w + I + H, H), F = Math.max(0, F + v), G = Math.max(0, G + w);
        else {
            F = "start" === d ? x - R - q : "end" === d ? x - Y + A + K : "nearest" === d ? r(R, Y, D, q, A + K, x, x + b, b) : x - (R + D / 2) + K / 2, G = "start" === u ? I - L - j : "center" === u ? I - (L + O / 2) + J / 2 : "end" === u ? I - X + z + J : r(L, X, O, j, z + J, I, I + H, H);
            var N = k.scrollLeft, P = k.scrollTop;
            x += P - (F = Math.max(0, Math.min(P + F, k.scrollHeight - D + K))), I += N - (G = Math.max(0, Math.min(N + G, k.scrollWidth - O + J)));
        }
        C.push({
            el: k,
            top: F,
            left: G
        });
    }
    return C;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9Pgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "getFieldId", ()=>getFieldId);
// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
var formItemNameBlackList = [
    "parentNode"
]; // default form item id prefix.
var defaultItemNamePrefixCls = "form_item";
function toArray(candidate) {
    if (candidate === undefined || candidate === false) return [];
    return Array.isArray(candidate) ? candidate : [
        candidate
    ];
}
function getFieldId(namePath, formName) {
    if (!namePath.length) return undefined;
    var mergedId = namePath.join("_");
    if (formName) return "".concat(formName, "_").concat(mergedId);
    var isIllegalName = formItemNameBlackList.indexOf(mergedId) >= 0;
    return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2p7o3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _rcFieldForm = require("rc-field-form");
var _useState = require("rc-util/es/hooks/useState");
var _useStateDefault = parcelHelpers.interopDefault(_useState);
var _ref = require("rc-util/es/ref");
var _react = require("react");
var _useFormItemStatus = require("../hooks/useFormItemStatus");
var _useFormItemStatusDefault = parcelHelpers.interopDefault(_useFormItemStatus);
var _configProvider = require("../../config-provider");
var _reactNode = require("../../_util/reactNode");
var _type = require("../../_util/type");
var _warning = require("../../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _context = require("../context");
var _useFrameState = require("../hooks/useFrameState");
var _useFrameStateDefault = parcelHelpers.interopDefault(_useFrameState);
var _useItemRef = require("../hooks/useItemRef");
var _useItemRefDefault = parcelHelpers.interopDefault(_useItemRef);
var _util = require("../util");
var _itemHolder = require("./ItemHolder");
var _itemHolderDefault = parcelHelpers.interopDefault(_itemHolder);
var NAME_SPLIT = "__SPLIT__";
var ValidateStatuses = (0, _type.tuple)("success", "warning", "error", "validating", "");
var MemoInput = /*#__PURE__*/ _react.memo(function(_ref) {
    var children = _ref.children;
    return children;
}, function(prev, next) {
    return prev.value === next.value && prev.update === next.update;
});
function hasValidName(name) {
    if (name === null) (0, _warningDefault.default)(false, "Form.Item", "`null` is passed as `name` property");
    return !(name === undefined || name === null);
}
function genEmptyMeta() {
    return {
        errors: [],
        warnings: [],
        touched: false,
        validating: false,
        name: []
    };
}
function InternalFormItem(props) {
    var name = props.name, noStyle = props.noStyle, dependencies = props.dependencies, customizePrefixCls = props.prefixCls, shouldUpdate = props.shouldUpdate, rules = props.rules, children = props.children, required = props.required, label = props.label, messageVariables = props.messageVariables, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? "onChange" : _props$trigger, validateTrigger = props.validateTrigger, hidden = props.hidden;
    var _useContext = (0, _react.useContext)((0, _configProvider.ConfigContext)), getPrefixCls = _useContext.getPrefixCls;
    var _useContext2 = (0, _react.useContext)((0, _context.FormContext)), formName = _useContext2.name;
    var isRenderProps = typeof children === "function";
    var notifyParentMetaChange = (0, _react.useContext)((0, _context.NoStyleItemContext));
    var _useContext3 = (0, _react.useContext)((0, _rcFieldForm.FieldContext)), contextValidateTrigger = _useContext3.validateTrigger;
    var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;
    var hasName = hasValidName(name);
    var prefixCls = getPrefixCls("form", customizePrefixCls); // ========================= MISC =========================
    // Get `noStyle` required info
    var listContext = _react.useContext((0, _rcFieldForm.ListContext));
    var fieldKeyPathRef = _react.useRef(); // ======================== Errors ========================
    // >>>>> Collect sub field errors
    var _useFrameState = (0, _useFrameStateDefault.default)({}), _useFrameState2 = (0, _slicedToArrayDefault.default)(_useFrameState, 2), subFieldErrors = _useFrameState2[0], setSubFieldErrors = _useFrameState2[1]; // >>>>> Current field errors
    var _useState = (0, _useStateDefault.default)(function() {
        return genEmptyMeta();
    }), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), meta = _useState2[0], setMeta = _useState2[1];
    var onMetaChange = function onMetaChange(nextMeta) {
        // This keyInfo is not correct when field is removed
        // Since origin keyManager no longer keep the origin key anymore
        // Which means we need cache origin one and reuse when removed
        var keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name); // Destroy will reset all the meta
        setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true); // Bump to parent since noStyle
        if (noStyle && notifyParentMetaChange) {
            var namePath = nextMeta.name;
            if (!nextMeta.destroy) {
                if (keyInfo !== undefined) {
                    var _keyInfo = (0, _slicedToArrayDefault.default)(keyInfo, 2), fieldKey = _keyInfo[0], restPath = _keyInfo[1];
                    namePath = [
                        fieldKey
                    ].concat((0, _toConsumableArrayDefault.default)(restPath));
                    fieldKeyPathRef.current = namePath;
                }
            } else // Use origin cache data
            namePath = fieldKeyPathRef.current || namePath;
            notifyParentMetaChange(nextMeta, namePath);
        }
    }; // >>>>> Collect noStyle Field error to the top FormItem
    var onSubItemMetaChange = function onSubItemMetaChange(subMeta, uniqueKeys) {
        // Only `noStyle` sub item will trigger
        setSubFieldErrors(function(prevSubFieldErrors) {
            var clone = (0, _extendsDefault.default)({}, prevSubFieldErrors); // name: ['user', 1] + key: [4] = ['user', 4]
            var mergedNamePath = [].concat((0, _toConsumableArrayDefault.default)(subMeta.name.slice(0, -1)), (0, _toConsumableArrayDefault.default)(uniqueKeys));
            var mergedNameKey = mergedNamePath.join(NAME_SPLIT);
            if (subMeta.destroy) // Remove
            delete clone[mergedNameKey];
            else // Update
            clone[mergedNameKey] = subMeta;
            return clone;
        });
    }; // >>>>> Get merged errors
    var _React$useMemo = _react.useMemo(function() {
        var errorList = (0, _toConsumableArrayDefault.default)(meta.errors);
        var warningList = (0, _toConsumableArrayDefault.default)(meta.warnings);
        Object.values(subFieldErrors).forEach(function(subFieldError) {
            errorList.push.apply(errorList, (0, _toConsumableArrayDefault.default)(subFieldError.errors || []));
            warningList.push.apply(warningList, (0, _toConsumableArrayDefault.default)(subFieldError.warnings || []));
        });
        return [
            errorList,
            warningList
        ];
    }, [
        subFieldErrors,
        meta.errors,
        meta.warnings
    ]), _React$useMemo2 = (0, _slicedToArrayDefault.default)(_React$useMemo, 2), mergedErrors = _React$useMemo2[0], mergedWarnings = _React$useMemo2[1]; // ===================== Children Ref =====================
    var getItemRef = (0, _useItemRefDefault.default)(); // ======================== Render ========================
    function renderLayout(baseChildren, fieldId, isRequired) {
        if (noStyle && !hidden) return baseChildren;
        return /*#__PURE__*/ _react.createElement((0, _itemHolderDefault.default), (0, _extendsDefault.default)({
            key: "row"
        }, props, {
            prefixCls: prefixCls,
            fieldId: fieldId,
            isRequired: isRequired,
            errors: mergedErrors,
            warnings: mergedWarnings,
            meta: meta,
            onSubItemMetaChange: onSubItemMetaChange
        }), baseChildren);
    }
    if (!hasName && !isRenderProps && !dependencies) return renderLayout(children);
    var variables = {};
    if (typeof label === "string") variables.label = label;
    else if (name) variables.label = String(name);
    if (messageVariables) variables = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, variables), messageVariables);
     // >>>>> With Field
    return /*#__PURE__*/ _react.createElement((0, _rcFieldForm.Field), (0, _extendsDefault.default)({}, props, {
        messageVariables: variables,
        trigger: trigger,
        validateTrigger: mergedValidateTrigger,
        onMetaChange: onMetaChange
    }), function(control, renderMeta, context) {
        var mergedName = (0, _util.toArray)(name).length && renderMeta ? renderMeta.name : [];
        var fieldId = (0, _util.getFieldId)(mergedName, formName);
        var isRequired = required !== undefined ? required : !!(rules && rules.some(function(rule) {
            if (rule && (0, _typeofDefault.default)(rule) === "object" && rule.required && !rule.warningOnly) return true;
            if (typeof rule === "function") {
                var ruleEntity = rule(context);
                return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
            }
            return false;
        })); // ======================= Children =======================
        var mergedControl = (0, _extendsDefault.default)({}, control);
        var childNode = null;
        (0, _warningDefault.default)(!(shouldUpdate && dependencies), "Form.Item", "`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies.");
        if (Array.isArray(children) && hasName) {
            (0, _warningDefault.default)(false, "Form.Item", "`children` is array of render props cannot have `name`.");
            childNode = children;
        } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
            (0, _warningDefault.default)(!!(shouldUpdate || dependencies), "Form.Item", "`children` of render props only work with `shouldUpdate` or `dependencies`.");
            (0, _warningDefault.default)(!hasName, "Form.Item", "Do not use `name` with `children` of render props since it's not a field.");
        } else if (dependencies && !isRenderProps && !hasName) (0, _warningDefault.default)(false, "Form.Item", "Must set `name` or use render props when `dependencies` is set.");
        else if ((0, _reactNode.isValidElement)(children)) {
            (0, _warningDefault.default)(children.props.defaultValue === undefined, "Form.Item", "`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");
            var childProps = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, children.props), mergedControl);
            if (!childProps.id) childProps.id = fieldId;
            if ((0, _ref.supportRef)(children)) childProps.ref = getItemRef(mergedName, children);
             // We should keep user origin event handler
            var triggers = new Set([].concat((0, _toConsumableArrayDefault.default)((0, _util.toArray)(trigger)), (0, _toConsumableArrayDefault.default)((0, _util.toArray)(mergedValidateTrigger))));
            triggers.forEach(function(eventName) {
                childProps[eventName] = function() {
                    var _a2, _c2;
                    var _a, _b, _c;
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    (_a = mergedControl[eventName]) === null || _a === void 0 || (_a2 = _a).call.apply(_a2, [
                        mergedControl
                    ].concat(args));
                    (_c = (_b = children.props)[eventName]) === null || _c === void 0 || (_c2 = _c).call.apply(_c2, [
                        _b
                    ].concat(args));
                };
            });
            childNode = /*#__PURE__*/ _react.createElement(MemoInput, {
                value: mergedControl[props.valuePropName || "value"],
                update: children
            }, (0, _reactNode.cloneElement)(children, childProps));
        } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) childNode = children(context);
        else {
            (0, _warningDefault.default)(!mergedName.length, "Form.Item", "`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.");
            childNode = children;
        }
        return renderLayout(childNode, fieldId, isRequired);
    });
}
var FormItem = InternalFormItem;
FormItem.useStatus = (0, _useFormItemStatusDefault.default);
exports.default = FormItem;

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","rc-field-form":"bdxu5","rc-util/es/hooks/useState":"4KG3w","rc-util/es/ref":"jS1Z6","react":"21dqq","../hooks/useFormItemStatus":"fCeVQ","../../config-provider":"iMraF","../../_util/reactNode":"d1mV0","../../_util/type":"eWuNf","../../_util/warning":"daUrm","../context":"flRlt","../hooks/useFrameState":"34tV1","../hooks/useItemRef":"9eVWW","../util":"i9Pgo","./ItemHolder":"CyAOO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCeVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _context = require("../context");
var _warning = require("../../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var useFormItemStatus = function useFormItemStatus() {
    var _useContext = (0, _react.useContext)((0, _context.FormItemInputContext)), status = _useContext.status;
    (0, _warningDefault.default)(status !== undefined, "Form.Item", "Form.Item.useStatus should be used under Form.Item component. For more information: ".concat(window.location.protocol, "//").concat(window.location.host, "/components/form-cn/#Form.Item.useStatus"));
    return {
        status: status
    };
};
exports.default = useFormItemStatus;

},{"react":"21dqq","../context":"flRlt","../../_util/warning":"daUrm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34tV1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _raf = require("rc-util/es/raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var _react = require("react");
function useFrameState(defaultValue) {
    var _React$useState = _react.useState(defaultValue), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    var frameRef = (0, _react.useRef)(null);
    var batchRef = (0, _react.useRef)([]);
    var destroyRef = (0, _react.useRef)(false);
    _react.useEffect(function() {
        destroyRef.current = false;
        return function() {
            destroyRef.current = true;
            (0, _rafDefault.default).cancel(frameRef.current);
            frameRef.current = null;
        };
    }, []);
    function setFrameValue(updater) {
        if (destroyRef.current) return;
        if (frameRef.current === null) {
            batchRef.current = [];
            frameRef.current = (0, _rafDefault.default)(function() {
                frameRef.current = null;
                setValue(function(prevValue) {
                    var current = prevValue;
                    batchRef.current.forEach(function(func) {
                        current = func(current);
                    });
                    return current;
                });
            });
        }
        batchRef.current.push(updater);
    }
    return [
        value,
        setFrameValue
    ];
}
exports.default = useFrameState;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","rc-util/es/raf":"7OvWw","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9eVWW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _ref = require("rc-util/es/ref");
var _react = require("react");
var _context = require("../context");
function useItemRef() {
    var _React$useContext = _react.useContext((0, _context.FormContext)), itemRef = _React$useContext.itemRef;
    var cacheRef = _react.useRef({});
    function getRef(name, children) {
        var childrenRef = children && (0, _typeofDefault.default)(children) === "object" && children.ref;
        var nameStr = name.join("_");
        if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
            cacheRef.current.name = nameStr;
            cacheRef.current.originRef = childrenRef;
            cacheRef.current.ref = (0, _ref.composeRef)(itemRef(name), childrenRef);
        }
        return cacheRef.current.ref;
    }
    return getRef;
}
exports.default = useItemRef;

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","rc-util/es/ref":"jS1Z6","react":"21dqq","../context":"flRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CyAOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _checkCircleFilled = require("@ant-design/icons/es/icons/CheckCircleFilled");
var _checkCircleFilledDefault = parcelHelpers.interopDefault(_checkCircleFilled);
var _closeCircleFilled = require("@ant-design/icons/es/icons/CloseCircleFilled");
var _closeCircleFilledDefault = parcelHelpers.interopDefault(_closeCircleFilled);
var _exclamationCircleFilled = require("@ant-design/icons/es/icons/ExclamationCircleFilled");
var _exclamationCircleFilledDefault = parcelHelpers.interopDefault(_exclamationCircleFilled);
var _loadingOutlined = require("@ant-design/icons/es/icons/LoadingOutlined");
var _loadingOutlinedDefault = parcelHelpers.interopDefault(_loadingOutlined);
var _useLayoutEffect = require("rc-util/es/hooks/useLayoutEffect");
var _useLayoutEffectDefault = parcelHelpers.interopDefault(_useLayoutEffect);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _grid = require("../../grid");
var _formItemLabel = require("../FormItemLabel");
var _formItemLabelDefault = parcelHelpers.interopDefault(_formItemLabel);
var _formItemInput = require("../FormItemInput");
var _formItemInputDefault = parcelHelpers.interopDefault(_formItemInput);
var _context = require("../context");
var _useDebounce = require("../hooks/useDebounce");
var _useDebounceDefault = parcelHelpers.interopDefault(_useDebounce);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var iconMap = {
    success: (0, _checkCircleFilledDefault.default),
    warning: (0, _exclamationCircleFilledDefault.default),
    error: (0, _closeCircleFilledDefault.default),
    validating: (0, _loadingOutlinedDefault.default)
};
function ItemHolder(props) {
    var _itemClassName;
    var prefixCls = props.prefixCls, className = props.className, style = props.style, help = props.help, errors = props.errors, warnings = props.warnings, validateStatus = props.validateStatus, meta = props.meta, hasFeedback = props.hasFeedback, hidden = props.hidden, children = props.children, fieldId = props.fieldId, isRequired = props.isRequired, onSubItemMetaChange = props.onSubItemMetaChange, restProps = __rest(props, [
        "prefixCls",
        "className",
        "style",
        "help",
        "errors",
        "warnings",
        "validateStatus",
        "meta",
        "hasFeedback",
        "hidden",
        "children",
        "fieldId",
        "isRequired",
        "onSubItemMetaChange"
    ]);
    var itemPrefixCls = "".concat(prefixCls, "-item");
    var _React$useContext = _react.useContext((0, _context.FormContext)), requiredMark = _React$useContext.requiredMark; // ======================== Margin ========================
    var itemRef = _react.useRef(null);
    var debounceErrors = (0, _useDebounceDefault.default)(errors);
    var debounceWarnings = (0, _useDebounceDefault.default)(warnings);
    var hasHelp = help !== undefined && help !== null;
    var hasError = !!(hasHelp || errors.length || warnings.length);
    var _React$useState = _react.useState(null), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), marginBottom = _React$useState2[0], setMarginBottom = _React$useState2[1];
    (0, _useLayoutEffectDefault.default)(function() {
        if (hasError && itemRef.current) {
            var itemStyle = getComputedStyle(itemRef.current);
            setMarginBottom(parseInt(itemStyle.marginBottom, 10));
        }
    }, [
        hasError
    ]);
    var onErrorVisibleChanged = function onErrorVisibleChanged(nextVisible) {
        if (!nextVisible) setMarginBottom(null);
    }; // ======================== Status ========================
    var mergedValidateStatus = "";
    if (validateStatus !== undefined) mergedValidateStatus = validateStatus;
    else if (meta.validating) mergedValidateStatus = "validating";
    else if (debounceErrors.length) mergedValidateStatus = "error";
    else if (debounceWarnings.length) mergedValidateStatus = "warning";
    else if (meta.touched) mergedValidateStatus = "success";
    var formItemStatusContext = _react.useMemo(function() {
        var feedbackIcon;
        if (hasFeedback) {
            var IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
            feedbackIcon = IconNode ? /*#__PURE__*/ _react.createElement("span", {
                className: (0, _classnamesDefault.default)("".concat(itemPrefixCls, "-feedback-icon"), "".concat(itemPrefixCls, "-feedback-icon-").concat(mergedValidateStatus))
            }, /*#__PURE__*/ _react.createElement(IconNode, null)) : null;
        }
        return {
            status: mergedValidateStatus,
            hasFeedback: hasFeedback,
            feedbackIcon: feedbackIcon,
            isFormItemInput: true
        };
    }, [
        mergedValidateStatus,
        hasFeedback
    ]); // ======================== Render ========================
    var itemClassName = (_itemClassName = {}, (0, _definePropertyDefault.default)(_itemClassName, itemPrefixCls, true), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-with-help"), hasHelp || debounceErrors.length || debounceWarnings.length), (0, _definePropertyDefault.default)(_itemClassName, "".concat(className), !!className), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-has-feedback"), mergedValidateStatus && hasFeedback), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-has-success"), mergedValidateStatus === "success"), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-has-warning"), mergedValidateStatus === "warning"), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-has-error"), mergedValidateStatus === "error"), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-is-validating"), mergedValidateStatus === "validating"), (0, _definePropertyDefault.default)(_itemClassName, "".concat(itemPrefixCls, "-hidden"), hidden), _itemClassName);
    return /*#__PURE__*/ _react.createElement("div", {
        className: (0, _classnamesDefault.default)(itemClassName),
        style: style,
        ref: itemRef
    }, /*#__PURE__*/ _react.createElement((0, _grid.Row), (0, _extendsDefault.default)({
        className: "".concat(itemPrefixCls, "-row")
    }, (0, _omitDefault.default)(restProps, [
        "_internalItemRender",
        "colon",
        "dependencies",
        "extra",
        "fieldKey",
        "getValueFromEvent",
        "getValueProps",
        "htmlFor",
        "id",
        "initialValue",
        "isListField",
        "label",
        "labelAlign",
        "labelCol",
        "labelWrap",
        "messageVariables",
        "name",
        "normalize",
        "noStyle",
        "preserve",
        "required",
        "requiredMark",
        "rules",
        "shouldUpdate",
        "trigger",
        "tooltip",
        "validateFirst",
        "validateTrigger",
        "valuePropName",
        "wrapperCol"
    ])), /*#__PURE__*/ _react.createElement((0, _formItemLabelDefault.default), (0, _extendsDefault.default)({
        htmlFor: fieldId,
        required: isRequired,
        requiredMark: requiredMark
    }, props, {
        prefixCls: prefixCls
    })), /*#__PURE__*/ _react.createElement((0, _formItemInputDefault.default), (0, _extendsDefault.default)({}, props, meta, {
        errors: debounceErrors,
        warnings: debounceWarnings,
        prefixCls: prefixCls,
        status: mergedValidateStatus,
        help: help,
        marginBottom: marginBottom,
        onErrorVisibleChanged: onErrorVisibleChanged
    }), /*#__PURE__*/ _react.createElement((0, _context.NoStyleItemContext).Provider, {
        value: onSubItemMetaChange
    }, /*#__PURE__*/ _react.createElement((0, _context.FormItemInputContext).Provider, {
        value: formItemStatusContext
    }, children)))), !!marginBottom && /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(itemPrefixCls, "-margin-offset"),
        style: {
            marginBottom: -marginBottom
        }
    }));
}
exports.default = ItemHolder;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@ant-design/icons/es/icons/CheckCircleFilled":"cF33C","@ant-design/icons/es/icons/CloseCircleFilled":"hNhJu","@ant-design/icons/es/icons/ExclamationCircleFilled":"dLwMF","@ant-design/icons/es/icons/LoadingOutlined":"1Fi2e","rc-util/es/hooks/useLayoutEffect":"b6Tje","classnames":"jocGM","react":"21dqq","rc-util/es/omit":"e7Re6","../../grid":"2CE2V","../FormItemLabel":"lSkJY","../FormItemInput":"b4rIb","../context":"flRlt","../hooks/useDebounce":"1Bt3Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6Tje":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useLayoutUpdateEffect", ()=>useLayoutUpdateEffect);
var _react = require("react");
var _canUseDom = require("../Dom/canUseDom");
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */ var useLayoutEffect = (0, _canUseDomDefault.default)() ? _react.useLayoutEffect : _react.useEffect;
exports.default = useLayoutEffect;
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
    var firstMountRef = _react.useRef(true);
    useLayoutEffect(function() {
        if (!firstMountRef.current) return callback();
    }, deps); // We tell react that first mount has passed
    useLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
            firstMountRef.current = true;
        };
    }, []);
};

},{"react":"21dqq","../Dom/canUseDom":"hGxAQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSkJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _questionCircleOutlined = require("@ant-design/icons/es/icons/QuestionCircleOutlined");
var _questionCircleOutlinedDefault = parcelHelpers.interopDefault(_questionCircleOutlined);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _col = require("../grid/col");
var _colDefault = parcelHelpers.interopDefault(_col);
var _localeReceiver = require("../locale-provider/LocaleReceiver");
var _default = require("../locale/default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
var _tooltip = require("../tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);
var _context = require("./context");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function toTooltipProps(tooltip) {
    if (!tooltip) return null;
    if ((0, _typeofDefault.default)(tooltip) === "object" && !/*#__PURE__*/ _react.isValidElement(tooltip)) return tooltip;
    return {
        title: tooltip
    };
}
var FormItemLabel = function FormItemLabel(_ref) {
    var prefixCls = _ref.prefixCls, label = _ref.label, htmlFor = _ref.htmlFor, labelCol = _ref.labelCol, labelAlign = _ref.labelAlign, colon = _ref.colon, required = _ref.required, requiredMark = _ref.requiredMark, tooltip = _ref.tooltip;
    var _useLocaleReceiver = (0, _localeReceiver.useLocaleReceiver)("Form"), _useLocaleReceiver2 = (0, _slicedToArrayDefault.default)(_useLocaleReceiver, 1), formLocale = _useLocaleReceiver2[0];
    if (!label) return null;
    return /*#__PURE__*/ _react.createElement((0, _context.FormContext).Consumer, {
        key: "label"
    }, function(_ref2) {
        var _classNames2;
        var vertical = _ref2.vertical, contextLabelAlign = _ref2.labelAlign, contextLabelCol = _ref2.labelCol, labelWrap = _ref2.labelWrap, contextColon = _ref2.colon;
        var _a;
        var mergedLabelCol = labelCol || contextLabelCol || {};
        var mergedLabelAlign = labelAlign || contextLabelAlign;
        var labelClsBasic = "".concat(prefixCls, "-item-label");
        var labelColClassName = (0, _classnamesDefault.default)(labelClsBasic, mergedLabelAlign === "left" && "".concat(labelClsBasic, "-left"), mergedLabelCol.className, (0, _definePropertyDefault.default)({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap));
        var labelChildren = label; // Keep label is original where there should have no colon
        var computedColon = colon === true || contextColon !== false && colon !== false;
        var haveColon = computedColon && !vertical; // Remove duplicated user input colon
        if (haveColon && typeof label === "string" && label.trim() !== "") labelChildren = label.replace(/[:|：]\s*$/, "");
         // Tooltip
        var tooltipProps = toTooltipProps(tooltip);
        if (tooltipProps) {
            var _tooltipProps$icon = tooltipProps.icon, icon = _tooltipProps$icon === void 0 ? /*#__PURE__*/ _react.createElement((0, _questionCircleOutlinedDefault.default), null) : _tooltipProps$icon, restTooltipProps = __rest(tooltipProps, [
                "icon"
            ]);
            var tooltipNode = /*#__PURE__*/ _react.createElement((0, _tooltipDefault.default), (0, _extendsDefault.default)({}, restTooltipProps), /*#__PURE__*/ _react.cloneElement(icon, {
                className: "".concat(prefixCls, "-item-tooltip"),
                title: ""
            }));
            labelChildren = /*#__PURE__*/ _react.createElement(_react.Fragment, null, labelChildren, tooltipNode);
        } // Add required mark if optional
        if (requiredMark === "optional" && !required) labelChildren = /*#__PURE__*/ _react.createElement(_react.Fragment, null, labelChildren, /*#__PURE__*/ _react.createElement("span", {
            className: "".concat(prefixCls, "-item-optional"),
            title: ""
        }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = (0, _defaultDefault.default).Form) === null || _a === void 0 ? void 0 : _a.optional)));
        var labelClassName = (0, _classnamesDefault.default)((_classNames2 = {}, (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-item-required"), required), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === "optional"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
        return /*#__PURE__*/ _react.createElement((0, _colDefault.default), (0, _extendsDefault.default)({}, mergedLabelCol, {
            className: labelColClassName
        }), /*#__PURE__*/ _react.createElement("label", {
            htmlFor: htmlFor,
            className: labelClassName,
            title: typeof label === "string" ? label : ""
        }, labelChildren));
    });
};
exports.default = FormItemLabel;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/typeof":"i7HWY","@ant-design/icons/es/icons/QuestionCircleOutlined":"1k46K","classnames":"jocGM","react":"21dqq","../grid/col":"6Fvfx","../locale-provider/LocaleReceiver":"6T2lL","../locale/default":"gC4P4","../tooltip":"aaH0r","./context":"flRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1k46K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _questionCircleOutlined = require("@ant-design/icons-svg/es/asn/QuestionCircleOutlined");
var _questionCircleOutlinedDefault = parcelHelpers.interopDefault(_questionCircleOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var QuestionCircleOutlined = function QuestionCircleOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _questionCircleOutlinedDefault.default)
    }));
};
QuestionCircleOutlined.displayName = "QuestionCircleOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(QuestionCircleOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/QuestionCircleOutlined":"iGFjn","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGFjn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var QuestionCircleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }
        ]
    },
    "name": "question-circle",
    "theme": "outlined"
};
exports.default = QuestionCircleOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aaH0r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcTooltip = require("rc-tooltip");
var _rcTooltipDefault = parcelHelpers.interopDefault(_rcTooltip);
var _useMergedState = require("rc-util/es/hooks/useMergedState");
var _useMergedStateDefault = parcelHelpers.interopDefault(_useMergedState);
var _react = require("react");
var _configProvider = require("../config-provider");
var _colors = require("../_util/colors");
var _motion = require("../_util/motion");
var _placements = require("../_util/placements");
var _placementsDefault = parcelHelpers.interopDefault(_placements);
var _reactNode = require("../_util/reactNode");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var splitObject = function splitObject(obj, keys) {
    var picked = {};
    var omitted = (0, _extendsDefault.default)({}, obj);
    keys.forEach(function(key) {
        if (obj && key in obj) {
            picked[key] = obj[key];
            delete omitted[key];
        }
    });
    return {
        picked: picked,
        omitted: omitted
    };
};
var PresetColorRegex = new RegExp("^(".concat((0, _colors.PresetColorTypes).join("|"), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18
function getDisabledCompatibleChildren(element, prefixCls) {
    var elementType = element.type;
    if ((elementType.__ANT_BUTTON === true || element.type === "button") && element.props.disabled || elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading) || elementType.__ANT_RADIO === true && element.props.disabled) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject(element.props.style, [
            "position",
            "left",
            "right",
            "top",
            "bottom",
            "float",
            "display",
            "zIndex"
        ]), picked = _splitObject.picked, omitted = _splitObject.omitted;
        var spanStyle = (0, _extendsDefault.default)((0, _extendsDefault.default)({
            display: "inline-block"
        }, picked), {
            cursor: "not-allowed",
            width: element.props.block ? "100%" : null
        });
        var buttonStyle = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, omitted), {
            pointerEvents: "none"
        });
        var child = (0, _reactNode.cloneElement)(element, {
            style: buttonStyle,
            className: null
        });
        return /*#__PURE__*/ _react.createElement("span", {
            style: spanStyle,
            className: (0, _classnamesDefault.default)(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
        }, child);
    }
    return element;
}
var Tooltip = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var _classNames2;
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getContextPopupContainer = _React$useContext.getPopupContainer, getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var _useMergedState = (0, _useMergedStateDefault.default)(false, {
        value: props.visible,
        defaultValue: props.defaultVisible
    }), _useMergedState2 = (0, _slicedToArrayDefault.default)(_useMergedState, 2), visible = _useMergedState2[0], setVisible = _useMergedState2[1];
    var isNoTitle = function isNoTitle() {
        var title = props.title, overlay = props.overlay;
        return !title && !overlay && title !== 0; // overlay for old version compatibility
    };
    var onVisibleChange = function onVisibleChange(vis) {
        var _a;
        setVisible(isNoTitle() ? false : vis);
        if (!isNoTitle()) (_a = props.onVisibleChange) === null || _a === void 0 || _a.call(props, vis);
    };
    var getTooltipPlacements = function getTooltipPlacements() {
        var builtinPlacements = props.builtinPlacements, arrowPointAtCenter = props.arrowPointAtCenter, autoAdjustOverflow = props.autoAdjustOverflow;
        return builtinPlacements || (0, _placementsDefault.default)({
            arrowPointAtCenter: arrowPointAtCenter,
            autoAdjustOverflow: autoAdjustOverflow
        });
    }; // 动态设置动画点
    var onPopupAlign = function onPopupAlign(domNode, align) {
        var placements = getTooltipPlacements(); // 当前返回的位置
        var placement = Object.keys(placements).find(function(key) {
            return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
        });
        if (!placement) return;
         // 根据当前坐标设置动画点
        var rect = domNode.getBoundingClientRect();
        var transformOrigin = {
            top: "50%",
            left: "50%"
        };
        if (placement.indexOf("top") >= 0 || placement.indexOf("Bottom") >= 0) transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
        else if (placement.indexOf("Top") >= 0 || placement.indexOf("bottom") >= 0) transformOrigin.top = "".concat(-align.offset[1], "px");
        if (placement.indexOf("left") >= 0 || placement.indexOf("Right") >= 0) transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
        else if (placement.indexOf("right") >= 0 || placement.indexOf("Left") >= 0) transformOrigin.left = "".concat(-align.offset[0], "px");
        domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };
    var getOverlay = function getOverlay() {
        var title = props.title, overlay = props.overlay;
        if (title === 0) return title;
        return overlay || title || "";
    };
    var getPopupContainer = props.getPopupContainer, otherProps = __rest(props, [
        "getPopupContainer"
    ]);
    var customizePrefixCls = props.prefixCls, openClassName = props.openClassName, getTooltipContainer = props.getTooltipContainer, overlayClassName = props.overlayClassName, color = props.color, overlayInnerStyle = props.overlayInnerStyle, children = props.children;
    var prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    var rootPrefixCls = getPrefixCls();
    var tempVisible = visible; // Hide tooltip when there is no title
    if (!("visible" in props) && isNoTitle()) tempVisible = false;
    var child = getDisabledCompatibleChildren((0, _reactNode.isValidElement)(children) ? children : /*#__PURE__*/ _react.createElement("span", null, children), prefixCls);
    var childProps = child.props;
    var childCls = (0, _classnamesDefault.default)(childProps.className, (0, _definePropertyDefault.default)({}, openClassName || "".concat(prefixCls, "-open"), true));
    var customOverlayClassName = (0, _classnamesDefault.default)(overlayClassName, (_classNames2 = {}, (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
    var formattedOverlayInnerStyle = overlayInnerStyle;
    var arrowContentStyle;
    if (color && !PresetColorRegex.test(color)) {
        formattedOverlayInnerStyle = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, overlayInnerStyle), {
            background: color
        }); // @ts-ignore
        arrowContentStyle = {
            "--antd-arrow-background-color": color
        };
    }
    return /*#__PURE__*/ _react.createElement((0, _rcTooltipDefault.default), (0, _extendsDefault.default)({}, otherProps, {
        prefixCls: prefixCls,
        overlayClassName: customOverlayClassName,
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: ref,
        builtinPlacements: getTooltipPlacements(),
        overlay: getOverlay(),
        visible: tempVisible,
        onVisibleChange: onVisibleChange,
        onPopupAlign: onPopupAlign,
        overlayInnerStyle: formattedOverlayInnerStyle,
        arrowContent: /*#__PURE__*/ _react.createElement("span", {
            className: "".concat(prefixCls, "-arrow-content"),
            style: arrowContentStyle
        }),
        motion: {
            motionName: (0, _motion.getTransitionName)(rootPrefixCls, "zoom-big-fast", props.transitionName),
            motionDeadline: 1000
        }
    }), tempVisible ? (0, _reactNode.cloneElement)(child, {
        className: childCls
    }) : child);
});
Tooltip.displayName = "Tooltip";
Tooltip.defaultProps = {
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
};
exports.default = Tooltip;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/extends":"fTBFS","classnames":"jocGM","rc-tooltip":"8E7lJ","rc-util/es/hooks/useMergedState":"guGeI","react":"21dqq","../config-provider":"iMraF","../_util/colors":"iHCm0","../_util/motion":"8VhHM","../_util/placements":"4WP6l","../_util/reactNode":"d1mV0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8E7lJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popup", ()=>(0, _popupDefault.default));
var _tooltip = require("./Tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);
var _popup = require("./Popup");
var _popupDefault = parcelHelpers.interopDefault(_popup);
exports.default = (0, _tooltipDefault.default);

},{"./Tooltip":"39qS3","./Popup":"8kg0m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39qS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _react = require("react");
var _rcTrigger = require("rc-trigger");
var _rcTriggerDefault = parcelHelpers.interopDefault(_rcTrigger);
var _placements = require("./placements");
var _popup = require("./Popup");
var _popupDefault = parcelHelpers.interopDefault(_popup);
var Tooltip = function Tooltip(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? [
        "hover"
    ] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle, arrowContent = props.arrowContent, overlay = props.overlay, id = props.id, showArrow = props.showArrow, restProps = (0, _objectWithoutPropertiesDefault.default)(props, [
        "overlayClassName",
        "trigger",
        "mouseEnterDelay",
        "mouseLeaveDelay",
        "overlayStyle",
        "prefixCls",
        "children",
        "onVisibleChange",
        "afterVisibleChange",
        "transitionName",
        "animation",
        "motion",
        "placement",
        "align",
        "destroyTooltipOnHide",
        "defaultVisible",
        "getTooltipContainer",
        "overlayInnerStyle",
        "arrowContent",
        "overlay",
        "id",
        "showArrow"
    ]);
    var domRef = (0, _react.useRef)(null);
    (0, _react.useImperativeHandle)(ref, function() {
        return domRef.current;
    });
    var extraProps = (0, _objectSpread2Default.default)({}, restProps);
    if ("visible" in props) extraProps.popupVisible = props.visible;
    var getPopupElement = function getPopupElement() {
        return /*#__PURE__*/ _react.createElement((0, _popupDefault.default), {
            showArrow: showArrow,
            arrowContent: arrowContent,
            key: "content",
            prefixCls: prefixCls,
            id: id,
            overlayInnerStyle: overlayInnerStyle
        }, overlay);
    };
    var destroyTooltip = false;
    var autoDestroy = false;
    if (typeof destroyTooltipOnHide === "boolean") destroyTooltip = destroyTooltipOnHide;
    else if (destroyTooltipOnHide && (0, _typeofDefault.default)(destroyTooltipOnHide) === "object") {
        var keepParent = destroyTooltipOnHide.keepParent;
        destroyTooltip = keepParent === true;
        autoDestroy = keepParent === false;
    }
    return /*#__PURE__*/ _react.createElement((0, _rcTriggerDefault.default), (0, _extendsDefault.default)({
        popupClassName: overlayClassName,
        prefixCls: prefixCls,
        popup: getPopupElement,
        action: trigger,
        builtinPlacements: (0, _placements.placements),
        popupPlacement: placement,
        ref: domRef,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupMotion: motion,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltip,
        autoDestroy: autoDestroy,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
    }, extraProps), children);
};
exports.default = /*#__PURE__*/ (0, _react.forwardRef)(Tooltip);

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","react":"21dqq","rc-trigger":"fXc3B","./placements":"2YwXw","./Popup":"8kg0m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXc3B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Internal usage. Do not use in your code since this will be removed.
 */ parcelHelpers.export(exports, "generateTrigger", ()=>generateTrigger);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _assertThisInitialized = require("@babel/runtime/helpers/esm/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _raf = require("rc-util/es/raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var _contains = require("rc-util/es/Dom/contains");
var _containsDefault = parcelHelpers.interopDefault(_contains);
var _findDOMNode = require("rc-util/es/Dom/findDOMNode");
var _findDOMNodeDefault = parcelHelpers.interopDefault(_findDOMNode);
var _ref = require("rc-util/es/ref");
var _addEventListener = require("rc-util/es/Dom/addEventListener");
var _addEventListenerDefault = parcelHelpers.interopDefault(_addEventListener);
var _portal = require("rc-util/es/Portal");
var _portalDefault = parcelHelpers.interopDefault(_portal);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _alignUtil = require("./utils/alignUtil");
var _popup = require("./Popup");
var _popupDefault = parcelHelpers.interopDefault(_popup);
var _context = require("./context");
var _contextDefault = parcelHelpers.interopDefault(_context);
function noop() {}
function returnEmptyString() {
    return "";
}
function returnDocument(element) {
    if (element) return element.ownerDocument;
    return window.document;
}
var ALL_HANDLERS = [
    "onClick",
    "onMouseDown",
    "onTouchStart",
    "onMouseEnter",
    "onMouseLeave",
    "onFocus",
    "onBlur",
    "onContextMenu"
];
function generateTrigger(PortalComponent) {
    var Trigger = /*#__PURE__*/ function(_React$Component) {
        (0, _inheritsDefault.default)(Trigger, _React$Component);
        var _super = (0, _createSuperDefault.default)(Trigger);
        // ensure `getContainer` will be called only once
        function Trigger(props) {
            var _this;
            (0, _classCallCheckDefault.default)(this, Trigger);
            _this = _super.call(this, props);
            _this.popupRef = /*#__PURE__*/ _react.createRef();
            _this.triggerRef = /*#__PURE__*/ _react.createRef();
            _this.portalContainer = void 0;
            _this.attachId = void 0;
            _this.clickOutsideHandler = void 0;
            _this.touchOutsideHandler = void 0;
            _this.contextMenuOutsideHandler1 = void 0;
            _this.contextMenuOutsideHandler2 = void 0;
            _this.mouseDownTimeout = void 0;
            _this.focusTime = void 0;
            _this.preClickTime = void 0;
            _this.preTouchTime = void 0;
            _this.delayTimer = void 0;
            _this.hasPopupMouseDown = void 0;
            _this.onMouseEnter = function(e) {
                var mouseEnterDelay = _this.props.mouseEnterDelay;
                _this.fireEvents("onMouseEnter", e);
                _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
            };
            _this.onMouseMove = function(e) {
                _this.fireEvents("onMouseMove", e);
                _this.setPoint(e);
            };
            _this.onMouseLeave = function(e) {
                _this.fireEvents("onMouseLeave", e);
                _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
            };
            _this.onPopupMouseEnter = function() {
                _this.clearDelayTimer();
            };
            _this.onPopupMouseLeave = function(e) {
                var _this$popupRef$curren;
                // https://github.com/react-component/trigger/pull/13
                // react bug?
                if (e.relatedTarget && !e.relatedTarget.setTimeout && (0, _containsDefault.default)((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) return;
                _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
            };
            _this.onFocus = function(e) {
                _this.fireEvents("onFocus", e); // incase focusin and focusout
                _this.clearDelayTimer();
                if (_this.isFocusToShow()) {
                    _this.focusTime = Date.now();
                    _this.delaySetPopupVisible(true, _this.props.focusDelay);
                }
            };
            _this.onMouseDown = function(e) {
                _this.fireEvents("onMouseDown", e);
                _this.preClickTime = Date.now();
            };
            _this.onTouchStart = function(e) {
                _this.fireEvents("onTouchStart", e);
                _this.preTouchTime = Date.now();
            };
            _this.onBlur = function(e) {
                _this.fireEvents("onBlur", e);
                _this.clearDelayTimer();
                if (_this.isBlurToHide()) _this.delaySetPopupVisible(false, _this.props.blurDelay);
            };
            _this.onContextMenu = function(e) {
                e.preventDefault();
                _this.fireEvents("onContextMenu", e);
                _this.setPopupVisible(true, e);
            };
            _this.onContextMenuClose = function() {
                if (_this.isContextMenuToShow()) _this.close();
            };
            _this.onClick = function(event) {
                _this.fireEvents("onClick", event); // focus will trigger click
                if (_this.focusTime) {
                    var preTime;
                    if (_this.preClickTime && _this.preTouchTime) preTime = Math.min(_this.preClickTime, _this.preTouchTime);
                    else if (_this.preClickTime) preTime = _this.preClickTime;
                    else if (_this.preTouchTime) preTime = _this.preTouchTime;
                    if (Math.abs(preTime - _this.focusTime) < 20) return;
                    _this.focusTime = 0;
                }
                _this.preClickTime = 0;
                _this.preTouchTime = 0; // Only prevent default when all the action is click.
                // https://github.com/ant-design/ant-design/issues/17043
                // https://github.com/ant-design/ant-design/issues/17291
                if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) event.preventDefault();
                var nextVisible = !_this.state.popupVisible;
                if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) _this.setPopupVisible(!_this.state.popupVisible, event);
            };
            _this.onPopupMouseDown = function() {
                _this.hasPopupMouseDown = true;
                clearTimeout(_this.mouseDownTimeout);
                _this.mouseDownTimeout = window.setTimeout(function() {
                    _this.hasPopupMouseDown = false;
                }, 0);
                if (_this.context) {
                    var _this$context;
                    (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
                }
            };
            _this.onDocumentClick = function(event) {
                if (_this.props.mask && !_this.props.maskClosable) return;
                var target = event.target;
                var root = _this.getRootDomNode();
                var popupNode = _this.getPopupDomNode();
                if (// https://github.com/ant-design/ant-design/issues/29853
                (!(0, _containsDefault.default)(root, target) || _this.isContextMenuOnly()) && !(0, _containsDefault.default)(popupNode, target) && !_this.hasPopupMouseDown) _this.close();
            };
            _this.getRootDomNode = function() {
                var getTriggerDOMNode = _this.props.getTriggerDOMNode;
                if (getTriggerDOMNode) return getTriggerDOMNode(_this.triggerRef.current);
                try {
                    var domNode = (0, _findDOMNodeDefault.default)(_this.triggerRef.current);
                    if (domNode) return domNode;
                } catch (err) {}
                return (0, _reactDomDefault.default).findDOMNode((0, _assertThisInitializedDefault.default)(_this));
            };
            _this.getPopupClassNameFromAlign = function(align) {
                var className = [];
                var _this$props = _this.props, popupPlacement = _this$props.popupPlacement, builtinPlacements = _this$props.builtinPlacements, prefixCls = _this$props.prefixCls, alignPoint = _this$props.alignPoint, getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;
                if (popupPlacement && builtinPlacements) className.push((0, _alignUtil.getAlignPopupClassName)(builtinPlacements, prefixCls, align, alignPoint));
                if (getPopupClassNameFromAlign) className.push(getPopupClassNameFromAlign(align));
                return className.join(" ");
            };
            _this.getComponent = function() {
                var _this$props2 = _this.props, prefixCls = _this$props2.prefixCls, destroyPopupOnHide = _this$props2.destroyPopupOnHide, popupClassName = _this$props2.popupClassName, onPopupAlign = _this$props2.onPopupAlign, popupMotion = _this$props2.popupMotion, popupAnimation = _this$props2.popupAnimation, popupTransitionName = _this$props2.popupTransitionName, popupStyle = _this$props2.popupStyle, mask = _this$props2.mask, maskAnimation = _this$props2.maskAnimation, maskTransitionName = _this$props2.maskTransitionName, maskMotion = _this$props2.maskMotion, zIndex = _this$props2.zIndex, popup = _this$props2.popup, stretch = _this$props2.stretch, alignPoint = _this$props2.alignPoint, mobile = _this$props2.mobile, forceRender = _this$props2.forceRender, onPopupClick = _this$props2.onPopupClick;
                var _this$state = _this.state, popupVisible = _this$state.popupVisible, point = _this$state.point;
                var align = _this.getPopupAlign();
                var mouseProps = {};
                if (_this.isMouseEnterToShow()) mouseProps.onMouseEnter = _this.onPopupMouseEnter;
                if (_this.isMouseLeaveToHide()) mouseProps.onMouseLeave = _this.onPopupMouseLeave;
                mouseProps.onMouseDown = _this.onPopupMouseDown;
                mouseProps.onTouchStart = _this.onPopupMouseDown;
                return /*#__PURE__*/ _react.createElement((0, _popupDefault.default), (0, _extendsDefault.default)({
                    prefixCls: prefixCls,
                    destroyPopupOnHide: destroyPopupOnHide,
                    visible: popupVisible,
                    point: alignPoint && point,
                    className: popupClassName,
                    align: align,
                    onAlign: onPopupAlign,
                    animation: popupAnimation,
                    getClassNameFromAlign: _this.getPopupClassNameFromAlign
                }, mouseProps, {
                    stretch: stretch,
                    getRootDomNode: _this.getRootDomNode,
                    style: popupStyle,
                    mask: mask,
                    zIndex: zIndex,
                    transitionName: popupTransitionName,
                    maskAnimation: maskAnimation,
                    maskTransitionName: maskTransitionName,
                    maskMotion: maskMotion,
                    ref: _this.popupRef,
                    motion: popupMotion,
                    mobile: mobile,
                    forceRender: forceRender,
                    onClick: onPopupClick
                }), typeof popup === "function" ? popup() : popup);
            };
            _this.attachParent = function(popupContainer) {
                (0, _rafDefault.default).cancel(_this.attachId);
                var _this$props3 = _this.props, getPopupContainer = _this$props3.getPopupContainer, getDocument = _this$props3.getDocument;
                var domNode = _this.getRootDomNode();
                var mountNode;
                if (!getPopupContainer) mountNode = getDocument(_this.getRootDomNode()).body;
                else if (domNode || getPopupContainer.length === 0) // Compatible for legacy getPopupContainer with domNode argument.
                // If no need `domNode` argument, will call directly.
                // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
                mountNode = getPopupContainer(domNode);
                if (mountNode) mountNode.appendChild(popupContainer);
                else // Retry after frame render in case parent not ready
                _this.attachId = (0, _rafDefault.default)(function() {
                    _this.attachParent(popupContainer);
                });
            };
            _this.getContainer = function() {
                if (!_this.portalContainer) {
                    // In React.StrictMode component will call render multiple time in first mount.
                    // When you want to refactor with FC, useRef will also init multiple time and
                    // point to different useRef instance which will create multiple element
                    // (This multiple render will not trigger effect so you can not clean up this
                    // in effect). But this is safe with class component since it always point to same class instance.
                    var getDocument = _this.props.getDocument;
                    var popupContainer = getDocument(_this.getRootDomNode()).createElement("div"); // Make sure default popup container will never cause scrollbar appearing
                    // https://github.com/react-component/trigger/issues/41
                    popupContainer.style.position = "absolute";
                    popupContainer.style.top = "0";
                    popupContainer.style.left = "0";
                    popupContainer.style.width = "100%";
                    _this.portalContainer = popupContainer;
                }
                _this.attachParent(_this.portalContainer);
                return _this.portalContainer;
            };
            _this.setPoint = function(point) {
                var alignPoint = _this.props.alignPoint;
                if (!alignPoint || !point) return;
                _this.setState({
                    point: {
                        pageX: point.pageX,
                        pageY: point.pageY
                    }
                });
            };
            _this.handlePortalUpdate = function() {
                if (_this.state.prevPopupVisible !== _this.state.popupVisible) _this.props.afterPopupVisibleChange(_this.state.popupVisible);
            };
            _this.triggerContextValue = {
                onPopupMouseDown: _this.onPopupMouseDown
            };
            var _popupVisible;
            if ("popupVisible" in props) _popupVisible = !!props.popupVisible;
            else _popupVisible = !!props.defaultPopupVisible;
            _this.state = {
                prevPopupVisible: _popupVisible,
                popupVisible: _popupVisible
            };
            ALL_HANDLERS.forEach(function(h) {
                _this["fire".concat(h)] = function(e) {
                    _this.fireEvents(h, e);
                };
            });
            return _this;
        }
        (0, _createClassDefault.default)(Trigger, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    this.componentDidUpdate();
                }
            },
            {
                key: "componentDidUpdate",
                value: function componentDidUpdate() {
                    var props = this.props;
                    var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
                    // https://github.com/ant-design/ant-design/issues/5804
                    // https://github.com/react-component/calendar/issues/250
                    // https://github.com/react-component/trigger/issues/50
                    if (state.popupVisible) {
                        var currentDocument;
                        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
                            currentDocument = props.getDocument(this.getRootDomNode());
                            this.clickOutsideHandler = (0, _addEventListenerDefault.default)(currentDocument, "mousedown", this.onDocumentClick);
                        } // always hide on mobile
                        if (!this.touchOutsideHandler) {
                            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                            this.touchOutsideHandler = (0, _addEventListenerDefault.default)(currentDocument, "touchstart", this.onDocumentClick);
                        } // close popup when trigger type contains 'onContextMenu' and document is scrolling.
                        if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
                            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                            this.contextMenuOutsideHandler1 = (0, _addEventListenerDefault.default)(currentDocument, "scroll", this.onContextMenuClose);
                        } // close popup when trigger type contains 'onContextMenu' and window is blur.
                        if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) this.contextMenuOutsideHandler2 = (0, _addEventListenerDefault.default)(window, "blur", this.onContextMenuClose);
                        return;
                    }
                    this.clearOutsideHandler();
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    this.clearDelayTimer();
                    this.clearOutsideHandler();
                    clearTimeout(this.mouseDownTimeout);
                    (0, _rafDefault.default).cancel(this.attachId);
                }
            },
            {
                key: "getPopupDomNode",
                value: function getPopupDomNode() {
                    var _this$popupRef$curren2;
                    // for test
                    return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
                }
            },
            {
                key: "getPopupAlign",
                value: function getPopupAlign() {
                    var props = this.props;
                    var popupPlacement = props.popupPlacement, popupAlign = props.popupAlign, builtinPlacements = props.builtinPlacements;
                    if (popupPlacement && builtinPlacements) return (0, _alignUtil.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
                    return popupAlign;
                }
            },
            {
                key: "setPopupVisible",
                value: /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */ function setPopupVisible(popupVisible, event) {
                    var alignPoint = this.props.alignPoint;
                    var prevPopupVisible = this.state.popupVisible;
                    this.clearDelayTimer();
                    if (prevPopupVisible !== popupVisible) {
                        if (!("popupVisible" in this.props)) this.setState({
                            popupVisible: popupVisible,
                            prevPopupVisible: prevPopupVisible
                        });
                        this.props.onPopupVisibleChange(popupVisible);
                    } // Always record the point position since mouseEnterDelay will delay the show
                    if (alignPoint && event && popupVisible) this.setPoint(event);
                }
            },
            {
                key: "delaySetPopupVisible",
                value: function delaySetPopupVisible(visible, delayS, event) {
                    var _this2 = this;
                    var delay = delayS * 1000;
                    this.clearDelayTimer();
                    if (delay) {
                        var point = event ? {
                            pageX: event.pageX,
                            pageY: event.pageY
                        } : null;
                        this.delayTimer = window.setTimeout(function() {
                            _this2.setPopupVisible(visible, point);
                            _this2.clearDelayTimer();
                        }, delay);
                    } else this.setPopupVisible(visible, event);
                }
            },
            {
                key: "clearDelayTimer",
                value: function clearDelayTimer() {
                    if (this.delayTimer) {
                        clearTimeout(this.delayTimer);
                        this.delayTimer = null;
                    }
                }
            },
            {
                key: "clearOutsideHandler",
                value: function clearOutsideHandler() {
                    if (this.clickOutsideHandler) {
                        this.clickOutsideHandler.remove();
                        this.clickOutsideHandler = null;
                    }
                    if (this.contextMenuOutsideHandler1) {
                        this.contextMenuOutsideHandler1.remove();
                        this.contextMenuOutsideHandler1 = null;
                    }
                    if (this.contextMenuOutsideHandler2) {
                        this.contextMenuOutsideHandler2.remove();
                        this.contextMenuOutsideHandler2 = null;
                    }
                    if (this.touchOutsideHandler) {
                        this.touchOutsideHandler.remove();
                        this.touchOutsideHandler = null;
                    }
                }
            },
            {
                key: "createTwoChains",
                value: function createTwoChains(event) {
                    var childPros = this.props.children.props;
                    var props = this.props;
                    if (childPros[event] && props[event]) return this["fire".concat(event)];
                    return childPros[event] || props[event];
                }
            },
            {
                key: "isClickToShow",
                value: function isClickToShow() {
                    var _this$props4 = this.props, action = _this$props4.action, showAction = _this$props4.showAction;
                    return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
                }
            },
            {
                key: "isContextMenuOnly",
                value: function isContextMenuOnly() {
                    var action = this.props.action;
                    return action === "contextMenu" || action.length === 1 && action[0] === "contextMenu";
                }
            },
            {
                key: "isContextMenuToShow",
                value: function isContextMenuToShow() {
                    var _this$props5 = this.props, action = _this$props5.action, showAction = _this$props5.showAction;
                    return action.indexOf("contextMenu") !== -1 || showAction.indexOf("contextMenu") !== -1;
                }
            },
            {
                key: "isClickToHide",
                value: function isClickToHide() {
                    var _this$props6 = this.props, action = _this$props6.action, hideAction = _this$props6.hideAction;
                    return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
                }
            },
            {
                key: "isMouseEnterToShow",
                value: function isMouseEnterToShow() {
                    var _this$props7 = this.props, action = _this$props7.action, showAction = _this$props7.showAction;
                    return action.indexOf("hover") !== -1 || showAction.indexOf("mouseEnter") !== -1;
                }
            },
            {
                key: "isMouseLeaveToHide",
                value: function isMouseLeaveToHide() {
                    var _this$props8 = this.props, action = _this$props8.action, hideAction = _this$props8.hideAction;
                    return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseLeave") !== -1;
                }
            },
            {
                key: "isFocusToShow",
                value: function isFocusToShow() {
                    var _this$props9 = this.props, action = _this$props9.action, showAction = _this$props9.showAction;
                    return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
                }
            },
            {
                key: "isBlurToHide",
                value: function isBlurToHide() {
                    var _this$props10 = this.props, action = _this$props10.action, hideAction = _this$props10.hideAction;
                    return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
                }
            },
            {
                key: "forcePopupAlign",
                value: function forcePopupAlign() {
                    if (this.state.popupVisible) {
                        var _this$popupRef$curren3;
                        (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 || _this$popupRef$curren3.forceAlign();
                    }
                }
            },
            {
                key: "fireEvents",
                value: function fireEvents(type, e) {
                    var childCallback = this.props.children.props[type];
                    if (childCallback) childCallback(e);
                    var callback = this.props[type];
                    if (callback) callback(e);
                }
            },
            {
                key: "close",
                value: function close() {
                    this.setPopupVisible(false);
                }
            },
            {
                key: "render",
                value: function render() {
                    var popupVisible = this.state.popupVisible;
                    var _this$props11 = this.props, children = _this$props11.children, forceRender = _this$props11.forceRender, alignPoint = _this$props11.alignPoint, className = _this$props11.className, autoDestroy = _this$props11.autoDestroy;
                    var child = _react.Children.only(children);
                    var newChildProps = {
                        key: "trigger"
                    }; // ============================== Visible Handlers ==============================
                    // >>> ContextMenu
                    if (this.isContextMenuToShow()) newChildProps.onContextMenu = this.onContextMenu;
                    else newChildProps.onContextMenu = this.createTwoChains("onContextMenu");
                     // >>> Click
                    if (this.isClickToHide() || this.isClickToShow()) {
                        newChildProps.onClick = this.onClick;
                        newChildProps.onMouseDown = this.onMouseDown;
                        newChildProps.onTouchStart = this.onTouchStart;
                    } else {
                        newChildProps.onClick = this.createTwoChains("onClick");
                        newChildProps.onMouseDown = this.createTwoChains("onMouseDown");
                        newChildProps.onTouchStart = this.createTwoChains("onTouchStart");
                    } // >>> Hover(enter)
                    if (this.isMouseEnterToShow()) {
                        newChildProps.onMouseEnter = this.onMouseEnter; // Point align
                        if (alignPoint) newChildProps.onMouseMove = this.onMouseMove;
                    } else newChildProps.onMouseEnter = this.createTwoChains("onMouseEnter");
                     // >>> Hover(leave)
                    if (this.isMouseLeaveToHide()) newChildProps.onMouseLeave = this.onMouseLeave;
                    else newChildProps.onMouseLeave = this.createTwoChains("onMouseLeave");
                     // >>> Focus
                    if (this.isFocusToShow() || this.isBlurToHide()) {
                        newChildProps.onFocus = this.onFocus;
                        newChildProps.onBlur = this.onBlur;
                    } else {
                        newChildProps.onFocus = this.createTwoChains("onFocus");
                        newChildProps.onBlur = this.createTwoChains("onBlur");
                    } // =================================== Render ===================================
                    var childrenClassName = (0, _classnamesDefault.default)(child && child.props && child.props.className, className);
                    if (childrenClassName) newChildProps.className = childrenClassName;
                    var cloneProps = (0, _objectSpread2Default.default)({}, newChildProps);
                    if ((0, _ref.supportRef)(child)) cloneProps.ref = (0, _ref.composeRef)(this.triggerRef, child.ref);
                    var trigger = /*#__PURE__*/ _react.cloneElement(child, cloneProps);
                    var portal; // prevent unmounting after it's rendered
                    if (popupVisible || this.popupRef.current || forceRender) portal = /*#__PURE__*/ _react.createElement(PortalComponent, {
                        key: "portal",
                        getContainer: this.getContainer,
                        didUpdate: this.handlePortalUpdate
                    }, this.getComponent());
                    if (!popupVisible && autoDestroy) portal = null;
                    return /*#__PURE__*/ _react.createElement((0, _contextDefault.default).Provider, {
                        value: this.triggerContextValue
                    }, trigger, portal);
                }
            }
        ], [
            {
                key: "getDerivedStateFromProps",
                value: function getDerivedStateFromProps(_ref, prevState) {
                    var popupVisible = _ref.popupVisible;
                    var newState = {};
                    if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
                        newState.popupVisible = popupVisible;
                        newState.prevPopupVisible = prevState.popupVisible;
                    }
                    return newState;
                }
            }
        ]);
        return Trigger;
    }(_react.Component);
    Trigger.contextType = (0, _contextDefault.default);
    Trigger.defaultProps = {
        prefixCls: "rc-trigger-popup",
        getPopupClassNameFromAlign: returnEmptyString,
        getDocument: returnDocument,
        onPopupVisibleChange: noop,
        afterPopupVisibleChange: noop,
        onPopupAlign: noop,
        popupClassName: "",
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.1,
        focusDelay: 0,
        blurDelay: 0.15,
        popupStyle: {},
        destroyPopupOnHide: false,
        popupAlign: {},
        defaultPopupVisible: false,
        mask: false,
        maskClosable: true,
        action: [],
        showAction: [],
        hideAction: [],
        autoDestroy: false
    };
    return Trigger;
}
exports.default = generateTrigger((0, _portalDefault.default));

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/assertThisInitialized":"iy3su","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","react-dom":"j6uA9","rc-util/es/raf":"7OvWw","rc-util/es/Dom/contains":"hm8Lm","rc-util/es/Dom/findDOMNode":"3PTYf","rc-util/es/ref":"jS1Z6","rc-util/es/Dom/addEventListener":"cf2Z9","rc-util/es/Portal":"jfR1z","classnames":"jocGM","./utils/alignUtil":"jsdh2","./Popup":"92COt","./context":"3sMva","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hm8Lm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function contains(root, n) {
    if (!root) return false;
    return root.contains(n);
}
exports.default = contains;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cf2Z9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
function addEventListenerWrap(target, eventType, cb, option) {
    /* eslint camelcase: 2 */ var callback = (0, _reactDomDefault.default).unstable_batchedUpdates ? function run(e) {
        (0, _reactDomDefault.default).unstable_batchedUpdates(cb, e);
    } : cb;
    if (target.addEventListener) target.addEventListener(eventType, callback, option);
    return {
        remove: function remove() {
            if (target.removeEventListener) target.removeEventListener(eventType, callback, option);
        }
    };
}
exports.default = addEventListenerWrap;

},{"react-dom":"j6uA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfR1z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _canUseDom = require("./Dom/canUseDom");
var _canUseDomDefault = parcelHelpers.interopDefault(_canUseDom);
var Portal = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var didUpdate = props.didUpdate, getContainer = props.getContainer, children = props.children;
    var parentRef = (0, _react.useRef)();
    var containerRef = (0, _react.useRef)(); // Ref return nothing, only for wrapper check exist
    (0, _react.useImperativeHandle)(ref, function() {
        return {};
    }); // Create container in client side with sync to avoid useEffect not get ref
    var initRef = (0, _react.useRef)(false);
    if (!initRef.current && (0, _canUseDomDefault.default)()) {
        containerRef.current = getContainer();
        parentRef.current = containerRef.current.parentNode;
        initRef.current = true;
    } // [Legacy] Used by `rc-trigger`
    (0, _react.useEffect)(function() {
        didUpdate === null || didUpdate === void 0 || didUpdate(props);
    });
    (0, _react.useEffect)(function() {
        // Restore container to original place
        // React 18 StrictMode will unmount first and mount back for effect test:
        // https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
        if (containerRef.current.parentNode === null && parentRef.current !== null) parentRef.current.appendChild(containerRef.current);
        return function() {
            var _containerRef$current, _containerRef$current2;
            // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
            // Since some component use `Portal` directly, we have to keep the logic here.
            (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 || (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 || _containerRef$current2.removeChild(containerRef.current);
        };
    }, []);
    return containerRef.current ? /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(children, containerRef.current) : null;
});
exports.default = Portal;

},{"react":"21dqq","react-dom":"j6uA9","./Dom/canUseDom":"hGxAQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsdh2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAlignFromPlacement", ()=>getAlignFromPlacement);
parcelHelpers.export(exports, "getAlignPopupClassName", ()=>getAlignPopupClassName);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
function isPointsEq(a1, a2, isAlignPoint) {
    if (isAlignPoint) return a1[0] === a2[0];
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
    var baseAlign = builtinPlacements[placementStr] || {};
    return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements = Object.keys(builtinPlacements);
    for(var i = 0; i < placements.length; i += 1){
        var placement = placements[i];
        if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) return "".concat(prefixCls, "-placement-").concat(placement);
    }
    return "";
}

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92COt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _react = require("react");
var _isMobile = require("rc-util/es/isMobile");
var _isMobileDefault = parcelHelpers.interopDefault(_isMobile);
var _mask = require("./Mask");
var _maskDefault = parcelHelpers.interopDefault(_mask);
var _popupInner = require("./PopupInner");
var _popupInnerDefault = parcelHelpers.interopDefault(_popupInner);
var _mobilePopupInner = require("./MobilePopupInner");
var _mobilePopupInnerDefault = parcelHelpers.interopDefault(_mobilePopupInner);
var _excluded = [
    "visible",
    "mobile"
];
var Popup = /*#__PURE__*/ _react.forwardRef(function(_ref, ref) {
    var visible = _ref.visible, mobile = _ref.mobile, props = (0, _objectWithoutPropertiesDefault.default)(_ref, _excluded);
    var _useState = (0, _react.useState)(visible), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), innerVisible = _useState2[0], serInnerVisible = _useState2[1];
    var _useState3 = (0, _react.useState)(false), _useState4 = (0, _slicedToArrayDefault.default)(_useState3, 2), inMobile = _useState4[0], setInMobile = _useState4[1];
    var cloneProps = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        visible: innerVisible
    }); // We check mobile in visible changed here.
    // And this also delay set `innerVisible` to avoid popup component render flash
    (0, _react.useEffect)(function() {
        serInnerVisible(visible);
        if (visible && mobile) setInMobile((0, _isMobileDefault.default)());
    }, [
        visible,
        mobile
    ]);
    var popupNode = inMobile ? /*#__PURE__*/ _react.createElement((0, _mobilePopupInnerDefault.default), (0, _extendsDefault.default)({}, cloneProps, {
        mobile: mobile,
        ref: ref
    })) : /*#__PURE__*/ _react.createElement((0, _popupInnerDefault.default), (0, _extendsDefault.default)({}, cloneProps, {
        ref: ref
    })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic
    return /*#__PURE__*/ _react.createElement("div", null, /*#__PURE__*/ _react.createElement((0, _maskDefault.default), cloneProps), popupNode);
});
Popup.displayName = "Popup";
exports.default = Popup;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","react":"21dqq","rc-util/es/isMobile":"bpFMM","./Mask":"9dYcS","./PopupInner":"d5g4u","./MobilePopupInner":"1VRPz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpFMM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    if (typeof navigator === "undefined" || typeof window === "undefined") return false;
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) return true;
    return false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dYcS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcMotion = require("rc-motion");
var _rcMotionDefault = parcelHelpers.interopDefault(_rcMotion);
var _legacyUtil = require("../utils/legacyUtil");
function Mask(props) {
    var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, mask = props.mask, maskMotion = props.maskMotion, maskAnimation = props.maskAnimation, maskTransitionName = props.maskTransitionName;
    if (!mask) return null;
    var motion = {};
    if (maskMotion || maskTransitionName || maskAnimation) motion = (0, _objectSpread2Default.default)({
        motionAppear: true
    }, (0, _legacyUtil.getMotion)({
        motion: maskMotion,
        prefixCls: prefixCls,
        transitionName: maskTransitionName,
        animation: maskAnimation
    }));
    return /*#__PURE__*/ _react.createElement((0, _rcMotionDefault.default), (0, _extendsDefault.default)({}, motion, {
        visible: visible,
        removeOnLeave: true
    }), function(_ref) {
        var className = _ref.className;
        return /*#__PURE__*/ _react.createElement("div", {
            style: {
                zIndex: zIndex
            },
            className: (0, _classnamesDefault.default)("".concat(prefixCls, "-mask"), className)
        });
    });
}
exports.default = Mask;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","classnames":"jocGM","rc-motion":"aaavi","../utils/legacyUtil":"kH0AI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kH0AI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMotion", ()=>getMotion);
function getMotion(_ref) {
    var prefixCls = _ref.prefixCls, motion = _ref.motion, animation = _ref.animation, transitionName = _ref.transitionName;
    if (motion) return motion;
    if (animation) return {
        motionName: "".concat(prefixCls, "-").concat(animation)
    };
    if (transitionName) return {
        motionName: transitionName
    };
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5g4u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _rcAlign = require("rc-align");
var _rcAlignDefault = parcelHelpers.interopDefault(_rcAlign);
var _useLayoutEffect = require("rc-util/es/hooks/useLayoutEffect");
var _useLayoutEffectDefault = parcelHelpers.interopDefault(_useLayoutEffect);
var _rcMotion = require("rc-motion");
var _rcMotionDefault = parcelHelpers.interopDefault(_rcMotion);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _useVisibleStatus = require("./useVisibleStatus");
var _useVisibleStatusDefault = parcelHelpers.interopDefault(_useVisibleStatus);
var _legacyUtil = require("../utils/legacyUtil");
var _useStretchStyle = require("./useStretchStyle");
var _useStretchStyleDefault = parcelHelpers.interopDefault(_useStretchStyle);
var PopupInner = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var visible = props.visible, prefixCls = props.prefixCls, className = props.className, style = props.style, children = props.children, zIndex = props.zIndex, stretch = props.stretch, destroyPopupOnHide = props.destroyPopupOnHide, forceRender = props.forceRender, align = props.align, point = props.point, getRootDomNode = props.getRootDomNode, getClassNameFromAlign = props.getClassNameFromAlign, onAlign = props.onAlign, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, onTouchStart = props.onTouchStart, onClick = props.onClick;
    var alignRef = (0, _react.useRef)();
    var elementRef = (0, _react.useRef)();
    var _useState = (0, _react.useState)(), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), alignedClassName = _useState2[0], setAlignedClassName = _useState2[1]; // ======================= Measure ========================
    var _useStretchStyle = (0, _useStretchStyleDefault.default)(stretch), _useStretchStyle2 = (0, _slicedToArrayDefault.default)(_useStretchStyle, 2), stretchStyle = _useStretchStyle2[0], measureStretchStyle = _useStretchStyle2[1];
    function doMeasure() {
        if (stretch) measureStretchStyle(getRootDomNode());
    } // ======================== Status ========================
    var _useVisibleStatus = (0, _useVisibleStatusDefault.default)(visible, doMeasure), _useVisibleStatus2 = (0, _slicedToArrayDefault.default)(_useVisibleStatus, 2), status = _useVisibleStatus2[0], goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================
    /**
   * `alignedClassName` may modify `source` size,
   * which means one time align may not move to the correct position at once.
   *
   * We will reset `alignTimes` for each status switch to `alignPre`
   * and let `rc-align` to align for multiple times to ensure get final stable place.
   * Currently we mark `alignTimes < 2` repeat align, it will increase if user report for align issue.
   */ var _useState3 = (0, _react.useState)(0), _useState4 = (0, _slicedToArrayDefault.default)(_useState3, 2), alignTimes = _useState4[0], setAlignTimes = _useState4[1];
    var prepareResolveRef = (0, _react.useRef)();
    (0, _useLayoutEffectDefault.default)(function() {
        if (status === "alignPre") setAlignTimes(0);
    }, [
        status
    ]); // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    function getAlignTarget() {
        if (point) return point;
        return getRootDomNode;
    }
    function forceAlign() {
        var _alignRef$current;
        (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 || _alignRef$current.forceAlign();
    }
    function onInternalAlign(popupDomNode, matchAlign) {
        var nextAlignedClassName = getClassNameFromAlign(matchAlign);
        if (alignedClassName !== nextAlignedClassName) setAlignedClassName(nextAlignedClassName);
         // We will retry multi times to make sure that the element has been align in the right position.
        setAlignTimes(function(val) {
            return val + 1;
        });
        if (status === "align") onAlign === null || onAlign === void 0 || onAlign(popupDomNode, matchAlign);
    } // Delay to go to next status
    (0, _useLayoutEffectDefault.default)(function() {
        if (status === "align") {
            // Repeat until not more align needed
            if (alignTimes < 2) forceAlign();
            else goNextStatus(function() {
                var _prepareResolveRef$cu;
                (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 || _prepareResolveRef$cu.call(prepareResolveRef);
            });
        }
    }, [
        alignTimes
    ]); // ======================== Motion ========================
    var motion = (0, _objectSpread2Default.default)({}, (0, _legacyUtil.getMotion)(props));
    [
        "onAppearEnd",
        "onEnterEnd",
        "onLeaveEnd"
    ].forEach(function(eventName) {
        var originHandler = motion[eventName];
        motion[eventName] = function(element, event) {
            goNextStatus();
            return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
        };
    });
    function onShowPrepare() {
        return new Promise(function(resolve) {
            prepareResolveRef.current = resolve;
        });
    } // Go to stable directly when motion not provided
    _react.useEffect(function() {
        if (!motion.motionName && status === "motion") goNextStatus();
    }, [
        motion.motionName,
        status
    ]); // ========================= Refs =========================
    _react.useImperativeHandle(ref, function() {
        return {
            forceAlign: forceAlign,
            getElement: function getElement() {
                return elementRef.current;
            }
        };
    }); // ======================== Render ========================
    var mergedStyle = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, stretchStyle), {}, {
        zIndex: zIndex,
        opacity: status === "motion" || status === "stable" || !visible ? undefined : 0,
        // Cannot interact with disappearing elements
        // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
        pointerEvents: !visible && status !== "stable" ? "none" : undefined
    }, style); // Align status
    var alignDisabled = true;
    if ((align === null || align === void 0 ? void 0 : align.points) && (status === "align" || status === "stable")) alignDisabled = false;
    var childNode = children; // Wrapper when multiple children
    if (_react.Children.count(children) > 1) childNode = /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(prefixCls, "-content")
    }, children);
    return /*#__PURE__*/ _react.createElement((0, _rcMotionDefault.default), (0, _extendsDefault.default)({
        visible: visible,
        ref: elementRef,
        leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
        onAppearPrepare: onShowPrepare,
        onEnterPrepare: onShowPrepare,
        removeOnLeave: destroyPopupOnHide,
        forceRender: forceRender
    }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var mergedClassName = (0, _classnamesDefault.default)(prefixCls, className, alignedClassName, motionClassName);
        return /*#__PURE__*/ _react.createElement((0, _rcAlignDefault.default), {
            target: getAlignTarget(),
            key: "popup",
            ref: alignRef,
            monitorWindowResize: true,
            disabled: alignDisabled,
            align: align,
            onAlign: onInternalAlign
        }, /*#__PURE__*/ _react.createElement("div", {
            ref: motionRef,
            className: mergedClassName,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDownCapture: onMouseDown,
            onTouchStartCapture: onTouchStart,
            onClick: onClick,
            style: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, motionStyle), mergedStyle)
        }, childNode));
    });
});
PopupInner.displayName = "PopupInner";
exports.default = PopupInner;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","rc-align":"aoZLS","rc-util/es/hooks/useLayoutEffect":"b6Tje","rc-motion":"aaavi","classnames":"jocGM","./useVisibleStatus":"ibytU","../utils/legacyUtil":"kH0AI","./useStretchStyle":"5O9tf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aoZLS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// export this package's api
var _align = require("./Align");
var _alignDefault = parcelHelpers.interopDefault(_align);
exports.default = (0, _alignDefault.default);

},{"./Align":"jLc2x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLc2x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
/**
 * Removed props:
 *  - childrenProps
 */ var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _ref = require("rc-util/es/ref");
var _isVisible = require("rc-util/es/Dom/isVisible");
var _isVisibleDefault = parcelHelpers.interopDefault(_isVisible);
var _domAlign = require("dom-align");
var _addEventListener = require("rc-util/es/Dom/addEventListener");
var _addEventListenerDefault = parcelHelpers.interopDefault(_addEventListener);
var _isEqual = require("lodash/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _util = require("./util");
var _useBuffer = require("./hooks/useBuffer");
var _useBufferDefault = parcelHelpers.interopDefault(_useBuffer);
function getElement(func) {
    if (typeof func !== "function") return null;
    return func();
}
function getPoint(point) {
    if ((0, _typeofDefault.default)(point) !== "object" || !point) return null;
    return point;
}
var Align = function Align(_ref1, ref) {
    var children = _ref1.children, disabled = _ref1.disabled, target = _ref1.target, align = _ref1.align, onAlign = _ref1.onAlign, monitorWindowResize = _ref1.monitorWindowResize, _ref$monitorBufferTim = _ref1.monitorBufferTime, monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
    var cacheRef = (0, _reactDefault.default).useRef({});
    var nodeRef = (0, _reactDefault.default).useRef();
    var childNode = (0, _reactDefault.default).Children.only(children); // ===================== Align ======================
    // We save the props here to avoid closure makes props ood
    var forceAlignPropsRef = (0, _reactDefault.default).useRef({});
    forceAlignPropsRef.current.disabled = disabled;
    forceAlignPropsRef.current.target = target;
    forceAlignPropsRef.current.align = align;
    forceAlignPropsRef.current.onAlign = onAlign;
    var _useBuffer = (0, _useBufferDefault.default)(function() {
        var _forceAlignPropsRef$c = forceAlignPropsRef.current, latestDisabled = _forceAlignPropsRef$c.disabled, latestTarget = _forceAlignPropsRef$c.target, latestAlign = _forceAlignPropsRef$c.align, latestOnAlign = _forceAlignPropsRef$c.onAlign;
        if (!latestDisabled && latestTarget) {
            var source = nodeRef.current;
            var result;
            var element = getElement(latestTarget);
            var point = getPoint(latestTarget);
            cacheRef.current.element = element;
            cacheRef.current.point = point;
            cacheRef.current.align = latestAlign; // IE lose focus after element realign
            // We should record activeElement and restore later
            // IE lose focus after element realign
            // We should record activeElement and restore later
            var _document = document, activeElement = _document.activeElement; // We only align when element is visible
            // We only align when element is visible
            if (element && (0, _isVisibleDefault.default)(element)) result = (0, _domAlign.alignElement)(source, element, latestAlign);
            else if (point) result = (0, _domAlign.alignPoint)(source, point, latestAlign);
            (0, _util.restoreFocus)(activeElement, source);
            if (latestOnAlign && result) latestOnAlign(source, result);
            return true;
        }
        return false;
    }, monitorBufferTime), _useBuffer2 = (0, _slicedToArrayDefault.default)(_useBuffer, 2), _forceAlign = _useBuffer2[0], cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
    // Listen for target updated
    var resizeMonitor = (0, _reactDefault.default).useRef({
        cancel: function cancel() {}
    }); // Listen for source updated
    var sourceResizeMonitor = (0, _reactDefault.default).useRef({
        cancel: function cancel() {}
    });
    (0, _reactDefault.default).useEffect(function() {
        var element = getElement(target);
        var point = getPoint(target);
        if (nodeRef.current !== sourceResizeMonitor.current.element) {
            sourceResizeMonitor.current.cancel();
            sourceResizeMonitor.current.element = nodeRef.current;
            sourceResizeMonitor.current.cancel = (0, _util.monitorResize)(nodeRef.current, _forceAlign);
        }
        if (cacheRef.current.element !== element || !(0, _util.isSamePoint)(cacheRef.current.point, point) || !(0, _isEqualDefault.default)(cacheRef.current.align, align)) {
            _forceAlign(); // Add resize observer
            if (resizeMonitor.current.element !== element) {
                resizeMonitor.current.cancel();
                resizeMonitor.current.element = element;
                resizeMonitor.current.cancel = (0, _util.monitorResize)(element, _forceAlign);
            }
        }
    }); // Listen for disabled change
    (0, _reactDefault.default).useEffect(function() {
        if (!disabled) _forceAlign();
        else cancelForceAlign();
    }, [
        disabled
    ]); // Listen for window resize
    var winResizeRef = (0, _reactDefault.default).useRef(null);
    (0, _reactDefault.default).useEffect(function() {
        if (monitorWindowResize) {
            if (!winResizeRef.current) winResizeRef.current = (0, _addEventListenerDefault.default)(window, "resize", _forceAlign);
        } else if (winResizeRef.current) {
            winResizeRef.current.remove();
            winResizeRef.current = null;
        }
    }, [
        monitorWindowResize
    ]); // Clear all if unmount
    (0, _reactDefault.default).useEffect(function() {
        return function() {
            resizeMonitor.current.cancel();
            sourceResizeMonitor.current.cancel();
            if (winResizeRef.current) winResizeRef.current.remove();
            cancelForceAlign();
        };
    }, []); // ====================== Ref =======================
    (0, _reactDefault.default).useImperativeHandle(ref, function() {
        return {
            forceAlign: function forceAlign() {
                return _forceAlign(true);
            }
        };
    }); // ===================== Render =====================
    if (/*#__PURE__*/ (0, _reactDefault.default).isValidElement(childNode)) childNode = /*#__PURE__*/ (0, _reactDefault.default).cloneElement(childNode, {
        ref: (0, _ref.composeRef)(childNode.ref, nodeRef)
    });
    return childNode;
};
var RcAlign = /*#__PURE__*/ (0, _reactDefault.default).forwardRef(Align);
RcAlign.displayName = "Align";
exports.default = RcAlign;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/typeof":"i7HWY","react":"21dqq","rc-util/es/ref":"jS1Z6","rc-util/es/Dom/isVisible":"f0y09","dom-align":"f8awK","rc-util/es/Dom/addEventListener":"cf2Z9","lodash/isEqual":"9XEia","./util":"4Czip","./hooks/useBuffer":"fL5PH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0y09":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(element) {
    if (!element) return false;
    if (element.offsetParent) return true;
    if (element.getBBox) {
        var box = element.getBBox();
        if (box.width || box.height) return true;
    }
    if (element.getBoundingClientRect) {
        var _box = element.getBoundingClientRect();
        if (_box.width || _box.height) return true;
    }
    return false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8awK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alignElement", ()=>alignElement);
parcelHelpers.export(exports, "alignPoint", ()=>alignPoint);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var vendorPrefix;
var jsCssMap = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    // IE did it wrong again ...
    ms: "-ms-",
    O: "-o-"
};
function getVendorPrefix() {
    if (vendorPrefix !== undefined) return vendorPrefix;
    vendorPrefix = "";
    var style = document.createElement("p").style;
    var testProp = "Transform";
    for(var key in jsCssMap)if (key + testProp in style) vendorPrefix = key;
    return vendorPrefix;
}
function getTransitionName() {
    return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
    return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node, value) {
    var name = getTransitionName();
    if (name) {
        node.style[name] = value;
        if (name !== "transitionProperty") node.style.transitionProperty = value;
    }
}
function setTransform(node, value) {
    var name = getTransformName();
    if (name) {
        node.style[name] = value;
        if (name !== "transform") node.style.transform = value;
    }
}
function getTransitionProperty(node) {
    return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
    var style = window.getComputedStyle(node, null);
    var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
    if (transform && transform !== "none") {
        var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
        return {
            x: parseFloat(matrix[12] || matrix[4], 0),
            y: parseFloat(matrix[13] || matrix[5], 0)
        };
    }
    return {
        x: 0,
        y: 0
    };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
    var style = window.getComputedStyle(node, null);
    var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
    if (transform && transform !== "none") {
        var arr;
        var match2d = transform.match(matrix2d);
        if (match2d) {
            match2d = match2d[1];
            arr = match2d.split(",").map(function(item) {
                return parseFloat(item, 10);
            });
            arr[4] = xy.x;
            arr[5] = xy.y;
            setTransform(node, "matrix(".concat(arr.join(","), ")"));
        } else {
            var match3d = transform.match(matrix3d)[1];
            arr = match3d.split(",").map(function(item) {
                return parseFloat(item, 10);
            });
            arr[12] = xy.x;
            arr[13] = xy.y;
            setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
        }
    } else setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
    var originalStyle = elem.style.display;
    elem.style.display = "none";
    elem.offsetHeight; // eslint-disable-line
    elem.style.display = originalStyle;
}
function css(el, name, v) {
    var value = v;
    if (_typeof(name) === "object") {
        for(var i in name)if (name.hasOwnProperty(i)) css(el, i, name[i]);
        return undefined;
    }
    if (typeof value !== "undefined") {
        if (typeof value === "number") value = "".concat(value, "px");
        el.style[name] = value;
        return undefined;
    }
    return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
    var box;
    var x;
    var y;
    var doc = elem.ownerDocument;
    var body = doc.body;
    var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
    box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
    // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
    // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
    x = Math.floor(box.left);
    y = Math.floor(box.top); // In IE, most of the time, 2 extra pixels are added to the top and left
    // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
    // IE6 standards mode, this border can be overridden by setting the
    // document element's border to zero -- thus, we cannot rely on the
    // offset always being 2 pixels.
    // In quirks mode, the offset can be determined by querying the body's
    // clientLeft/clientTop, but in standards mode, it is found by querying
    // the document element's clientLeft/clientTop.  Since we already called
    // getClientBoundingRect we have already forced a reflow, so it is not
    // too expensive just to query them all.
    // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
    // 窗口边框标准是设 documentElement ,quirks 时设置 body
    // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
    // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
    // 标准 ie 下 docElem.clientTop 就是 border-top
    // ie7 html 即窗口边框改变不了。永远为 2
    // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
    x -= docElem.clientLeft || body.clientLeft || 0;
    y -= docElem.clientTop || body.clientTop || 0;
    return {
        left: x,
        top: y
    };
}
function getScroll(w, top) {
    var ret = w["page".concat(top ? "Y" : "X", "Offset")];
    var method = "scroll".concat(top ? "Top" : "Left");
    if (typeof ret !== "number") {
        var d = w.document; // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== "number") // quirks mode
        ret = d.body[method];
    }
    return ret;
}
function getScrollLeft(w) {
    return getScroll(w);
}
function getScrollTop(w) {
    return getScroll(w, true);
}
function getOffset(el) {
    var pos = getClientPosition(el);
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScrollLeft(w);
    pos.top += getScrollTop(w);
    return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */ function isWindow(obj) {
    // must use == for ie8
    /* eslint eqeqeq:0 */ return obj !== null && obj !== undefined && obj == obj.window;
}
function getDocument(node) {
    if (isWindow(node)) return node.document;
    if (node.nodeType === 9) return node;
    return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
    var computedStyle = cs;
    var val = "";
    var d = getDocument(elem);
    computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61
    if (computedStyle) val = computedStyle.getPropertyValue(name) || computedStyle[name];
    return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name) {
    // currentStyle maybe null
    // http://msdn.microsoft.com/en-us/library/ms535231.aspx
    var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
    // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
    // 在 ie 下不对，需要直接用 offset 方式
    // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // exclude left right for relativity
    if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
        // Remember the original values
        var style = elem.style;
        var left = style[LEFT];
        var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content
        elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out
        style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
        ret = style.pixelLeft + PX; // Revert the changed values
        style[LEFT] = left;
        elem[RUNTIME_STYLE][LEFT] = rsLeft;
    }
    return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
function getOffsetDirection(dir, option) {
    if (dir === "left") return option.useCssRight ? "right" : dir;
    return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
    if (dir === "left") return "right";
    else if (dir === "right") return "left";
    else if (dir === "top") return "bottom";
    else if (dir === "bottom") return "top";
} // 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
    // set position first, in-case top/left are set even on static elem
    if (css(elem, "position") === "static") elem.style.position = "relative";
    var presetH = -999;
    var presetV = -999;
    var horizontalProperty = getOffsetDirection("left", option);
    var verticalProperty = getOffsetDirection("top", option);
    var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
    var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
    if (horizontalProperty !== "left") presetH = 999;
    if (verticalProperty !== "top") presetV = 999;
    var originalTransition = "";
    var originalOffset = getOffset(elem);
    if ("left" in offset || "top" in offset) {
        originalTransition = getTransitionProperty(elem) || "";
        setTransitionProperty(elem, "none");
    }
    if ("left" in offset) {
        elem.style[oppositeHorizontalProperty] = "";
        elem.style[horizontalProperty] = "".concat(presetH, "px");
    }
    if ("top" in offset) {
        elem.style[oppositeVerticalProperty] = "";
        elem.style[verticalProperty] = "".concat(presetV, "px");
    } // force relayout
    forceRelayout(elem);
    var old = getOffset(elem);
    var originalStyle = {};
    for(var key in offset)if (offset.hasOwnProperty(key)) {
        var dir = getOffsetDirection(key, option);
        var preset = key === "left" ? presetH : presetV;
        var off = originalOffset[key] - old[key];
        if (dir === key) originalStyle[dir] = preset + off;
        else originalStyle[dir] = preset - off;
    }
    css(elem, originalStyle); // force relayout
    forceRelayout(elem);
    if ("left" in offset || "top" in offset) setTransitionProperty(elem, originalTransition);
    var ret = {};
    for(var _key in offset)if (offset.hasOwnProperty(_key)) {
        var _dir = getOffsetDirection(_key, option);
        var _off = offset[_key] - originalOffset[_key];
        if (_key === _dir) ret[_dir] = originalStyle[_dir] + _off;
        else ret[_dir] = originalStyle[_dir] - _off;
    }
    css(elem, ret);
}
function setTransform$1(elem, offset) {
    var originalOffset = getOffset(elem);
    var originalXY = getTransformXY(elem);
    var resultXY = {
        x: originalXY.x,
        y: originalXY.y
    };
    if ("left" in offset) resultXY.x = originalXY.x + offset.left - originalOffset.left;
    if ("top" in offset) resultXY.y = originalXY.y + offset.top - originalOffset.top;
    setTransformXY(elem, resultXY);
}
function setOffset(elem, offset, option) {
    if (option.ignoreShake) {
        var oriOffset = getOffset(elem);
        var oLeft = oriOffset.left.toFixed(0);
        var oTop = oriOffset.top.toFixed(0);
        var tLeft = offset.left.toFixed(0);
        var tTop = offset.top.toFixed(0);
        if (oLeft === tLeft && oTop === tTop) return;
    }
    if (option.useCssRight || option.useCssBottom) setLeftTop(elem, offset, option);
    else if (option.useCssTransform && getTransformName() in document.body.style) setTransform$1(elem, offset);
    else setLeftTop(elem, offset, option);
}
function each(arr, fn) {
    for(var i = 0; i < arr.length; i++)fn(arr[i]);
}
function isBorderBoxFn(elem) {
    return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = [
    "margin",
    "border",
    "padding"
];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
    var old = {};
    var style = elem.style;
    var name; // Remember the old values, and insert the new ones
    for(name in options)if (options.hasOwnProperty(name)) {
        old[name] = style[name];
        style[name] = options[name];
    }
    callback.call(elem); // Revert the old values
    for(name in options)if (options.hasOwnProperty(name)) style[name] = old[name];
}
function getPBMWidth(elem, props, which) {
    var value = 0;
    var prop;
    var j;
    var i;
    for(j = 0; j < props.length; j++){
        prop = props[j];
        if (prop) for(i = 0; i < which.length; i++){
            var cssProp = void 0;
            if (prop === "border") cssProp = "".concat(prop).concat(which[i], "Width");
            else cssProp = prop + which[i];
            value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
        }
    }
    return value;
}
var domUtils = {
    getParent: function getParent(element) {
        var parent = element;
        do if (parent.nodeType === 11 && parent.host) parent = parent.host;
        else parent = parent.parentNode;
        while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
        return parent;
    }
};
each([
    "Width",
    "Height"
], function(name) {
    domUtils["doc".concat(name)] = function(refWin) {
        var d = refWin.document;
        return Math.max(// ie standard mode : documentElement.scrollHeight> body.scrollHeight
        d.documentElement["scroll".concat(name)], d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
    };
    domUtils["viewport".concat(name)] = function(win) {
        // pc browser includes scrollbar in window.innerWidth
        var prop = "client".concat(name);
        var doc = win.document;
        var body = doc.body;
        var documentElement = doc.documentElement;
        var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
        // backcompat 取 body
        return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
    };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */ function getWH(elem, name, ex) {
    var extra = ex;
    if (isWindow(elem)) return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
    else if (elem.nodeType === 9) return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
    var which = name === "width" ? [
        "Left",
        "Right"
    ] : [
        "Top",
        "Bottom"
    ];
    var borderBoxValue = name === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
    var isBorderBox = isBorderBoxFn(elem);
    var cssBoxValue = 0;
    if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
        borderBoxValue = undefined; // Fall back to computed then un computed css if necessary
        cssBoxValue = getComputedStyleX(elem, name);
        if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) cssBoxValue = elem.style[name] || 0;
         // Normalize '', auto, and prepare for extra
        cssBoxValue = parseFloat(cssBoxValue) || 0;
    }
    if (extra === undefined) extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
    var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
    var val = borderBoxValue || cssBoxValue;
    if (extra === CONTENT_INDEX) {
        if (borderBoxValueOrIsBorderBox) return val - getPBMWidth(elem, [
            "border",
            "padding"
        ], which);
        return cssBoxValue;
    } else if (borderBoxValueOrIsBorderBox) {
        if (extra === BORDER_INDEX) return val;
        return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, [
            "border"
        ], which) : getPBMWidth(elem, [
            "margin"
        ], which));
    }
    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
    for(var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++)args[_key2] = arguments[_key2];
    var val;
    var elem = args[0]; // in case elem is window
    // elem.offsetWidth === undefined
    if (elem.offsetWidth !== 0) val = getWH.apply(undefined, args);
    else swap(elem, cssShow, function() {
        val = getWH.apply(undefined, args);
    });
    return val;
}
each([
    "width",
    "height"
], function(name) {
    var first = name.charAt(0).toUpperCase() + name.slice(1);
    domUtils["outer".concat(first)] = function(el, includeMargin) {
        return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
    };
    var which = name === "width" ? [
        "Left",
        "Right"
    ] : [
        "Top",
        "Bottom"
    ];
    domUtils[name] = function(elem, v) {
        var val = v;
        if (val !== undefined) {
            if (elem) {
                var isBorderBox = isBorderBoxFn(elem);
                if (isBorderBox) val += getPBMWidth(elem, [
                    "padding",
                    "border"
                ], which);
                return css(elem, name, val);
            }
            return undefined;
        }
        return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
    };
});
function mix(to, from) {
    for(var i in from)if (from.hasOwnProperty(i)) to[i] = from[i];
    return to;
}
var utils = {
    getWindow: function getWindow(node) {
        if (node && node.document && node.setTimeout) return node;
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },
    getDocument: getDocument,
    offset: function offset(el, value, option) {
        if (typeof value !== "undefined") setOffset(el, value, option || {});
        else return getOffset(el);
    },
    isWindow: isWindow,
    each: each,
    css: css,
    clone: function clone(obj) {
        var i;
        var ret = {};
        for(i in obj)if (obj.hasOwnProperty(i)) ret[i] = obj[i];
        var overflow = obj.overflow;
        if (overflow) {
            for(i in obj)if (obj.hasOwnProperty(i)) ret.overflow[i] = obj.overflow[i];
        }
        return ret;
    },
    mix: mix,
    getWindowScrollLeft: function getWindowScrollLeft(w) {
        return getScrollLeft(w);
    },
    getWindowScrollTop: function getWindowScrollTop(w) {
        return getScrollTop(w);
    },
    merge: function merge() {
        var ret = {};
        for(var i = 0; i < arguments.length; i++)utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
        return ret;
    },
    viewportWidth: 0,
    viewportHeight: 0
};
mix(utils, domUtils);
/**
 * 得到会导致元素显示不全的祖先元素
 */ var getParent = utils.getParent;
function getOffsetParent(element) {
    if (utils.isWindow(element) || element.nodeType === 9) return null;
     // ie 这个也不是完全可行
    /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */ // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
    //  In other browsers it only includes elements with position absolute, relative or
    // fixed, not elements with overflow set to auto or scroll.
    //        if (UA.ie && ieMode < 8) {
    //            return element.offsetParent;
    //        }
    // 统一的 offsetParent 方法
    var doc = utils.getDocument(element);
    var body = doc.body;
    var parent;
    var positionStyle = utils.css(element, "position");
    var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
    if (!skipStatic) return element.nodeName.toLowerCase() === "html" ? null : getParent(element);
    for(parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)){
        positionStyle = utils.css(parent, "position");
        if (positionStyle !== "static") return parent;
    }
    return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
    if (utils.isWindow(element) || element.nodeType === 9) return false;
    var doc = utils.getDocument(element);
    var body = doc.body;
    var parent = null;
    for(parent = getParent$1(element); parent && parent !== body && parent !== doc; parent = getParent$1(parent)){
        var positionStyle = utils.css(parent, "position");
        if (positionStyle === "fixed") return true;
    }
    return false;
}
/**
 * 获得元素的显示部分的区域
 */ function getVisibleRectForElement(element, alwaysByViewport) {
    var visibleRect = {
        left: 0,
        right: Infinity,
        top: 0,
        bottom: Infinity
    };
    var el = getOffsetParent(element);
    var doc = utils.getDocument(element);
    var win = doc.defaultView || doc.parentWindow;
    var body = doc.body;
    var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
    // all scrollable containers.
    while(el){
        // clientWidth is zero for inline block elements in ie.
        if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && // viewport. In some browsers, el.offsetParent may be
        // document.documentElement, so check for that too.
        el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
            var pos = utils.offset(el); // add border
            pos.left += el.clientLeft;
            pos.top += el.clientTop;
            visibleRect.top = Math.max(visibleRect.top, pos.top);
            visibleRect.right = Math.min(visibleRect.right, pos.left + el.clientWidth);
            visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
            visibleRect.left = Math.max(visibleRect.left, pos.left);
        } else if (el === body || el === documentElement) break;
        el = getOffsetParent(el);
    } // Set element position to fixed
    // make sure absolute element itself don't affect it's visible area
    // https://github.com/ant-design/ant-design/issues/7601
    var originalPosition = null;
    if (!utils.isWindow(element) && element.nodeType !== 9) {
        originalPosition = element.style.position;
        var position = utils.css(element, "position");
        if (position === "absolute") element.style.position = "fixed";
    }
    var scrollX = utils.getWindowScrollLeft(win);
    var scrollY = utils.getWindowScrollTop(win);
    var viewportWidth = utils.viewportWidth(win);
    var viewportHeight = utils.viewportHeight(win);
    var documentWidth = documentElement.scrollWidth;
    var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
    // We should cut this ourself.
    var bodyStyle = window.getComputedStyle(body);
    if (bodyStyle.overflowX === "hidden") documentWidth = win.innerWidth;
    if (bodyStyle.overflowY === "hidden") documentHeight = win.innerHeight;
     // Reset element position after calculate the visible area
    if (element.style) element.style.position = originalPosition;
    if (alwaysByViewport || isAncestorFixed(element)) {
        // Clip by viewport's size.
        visibleRect.left = Math.max(visibleRect.left, scrollX);
        visibleRect.top = Math.max(visibleRect.top, scrollY);
        visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
        visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
    } else {
        // Clip by document's size.
        var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
        visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
        var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
        visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
    }
    return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
    var pos = utils.clone(elFuturePos);
    var size = {
        width: elRegion.width,
        height: elRegion.height
    };
    if (overflow.adjustX && pos.left < visibleRect.left) pos.left = visibleRect.left;
     // Left edge inside and right edge outside viewport, try to resize it.
    if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) size.width -= pos.left + size.width - visibleRect.right;
     // Right edge outside viewport, try to move it.
    if (overflow.adjustX && pos.left + size.width > visibleRect.right) // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
     // Top edge outside viewport, try to move it.
    if (overflow.adjustY && pos.top < visibleRect.top) pos.top = visibleRect.top;
     // Top edge inside and bottom edge outside viewport, try to resize it.
    if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) size.height -= pos.top + size.height - visibleRect.bottom;
     // Bottom edge outside viewport, try to move it.
    if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
    return utils.mix(pos, size);
}
function getRegion(node) {
    var offset;
    var w;
    var h;
    if (!utils.isWindow(node) && node.nodeType !== 9) {
        offset = utils.offset(node);
        w = utils.outerWidth(node);
        h = utils.outerHeight(node);
    } else {
        var win = utils.getWindow(node);
        offset = {
            left: utils.getWindowScrollLeft(win),
            top: utils.getWindowScrollTop(win)
        };
        w = utils.viewportWidth(win);
        h = utils.viewportHeight(win);
    }
    offset.width = w;
    offset.height = h;
    return offset;
}
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */ function getAlignOffset(region, align) {
    var V = align.charAt(0);
    var H = align.charAt(1);
    var w = region.width;
    var h = region.height;
    var x = region.left;
    var y = region.top;
    if (V === "c") y += h / 2;
    else if (V === "b") y += h;
    if (H === "c") x += w / 2;
    else if (H === "r") x += w;
    return {
        left: x,
        top: y
    };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
    var p1 = getAlignOffset(refNodeRegion, points[1]);
    var p2 = getAlignOffset(elRegion, points[0]);
    var diff = [
        p2.left - p1.left,
        p2.top - p1.top
    ];
    return {
        left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
        top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
    };
}
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */ function isFailX(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
    var ret = [];
    utils.each(points, function(p) {
        ret.push(p.replace(reg, function(m) {
            return map[m];
        }));
    });
    return ret;
}
function flipOffset(offset, index) {
    offset[index] = -offset[index];
    return offset;
}
function convertOffset(str, offsetLen) {
    var n;
    if (/%$/.test(str)) n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
    else n = parseInt(str, 10);
    return n || 0;
}
function normalizeOffset(offset, el) {
    offset[0] = convertOffset(offset[0], el.width);
    offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */ function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
    var points = align.points;
    var offset = align.offset || [
        0,
        0
    ];
    var targetOffset = align.targetOffset || [
        0,
        0
    ];
    var overflow = align.overflow;
    var source = align.source || el;
    offset = [].concat(offset);
    targetOffset = [].concat(targetOffset);
    overflow = overflow || {};
    var newOverflowCfg = {};
    var fail = 0;
    var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域
    var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height
    var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比
    normalizeOffset(offset, elRegion);
    normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置
    var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域
    var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整
    if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
        if (overflow.adjustX) // 如果横向不能放下
        {
            if (isFailX(elFuturePos, elRegion, visibleRect)) {
                // 对齐位置反下
                var newPoints = flip(points, /[lr]/gi, {
                    l: "r",
                    r: "l"
                }); // 偏移量也反下
                var newOffset = flipOffset(offset, 0);
                var newTargetOffset = flipOffset(targetOffset, 0);
                var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
                if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
                    fail = 1;
                    points = newPoints;
                    offset = newOffset;
                    targetOffset = newTargetOffset;
                }
            }
        }
        if (overflow.adjustY) // 如果纵向不能放下
        {
            if (isFailY(elFuturePos, elRegion, visibleRect)) {
                // 对齐位置反下
                var _newPoints = flip(points, /[tb]/gi, {
                    t: "b",
                    b: "t"
                }); // 偏移量也反下
                var _newOffset = flipOffset(offset, 1);
                var _newTargetOffset = flipOffset(targetOffset, 1);
                var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
                if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
                    fail = 1;
                    points = _newPoints;
                    offset = _newOffset;
                    targetOffset = _newTargetOffset;
                }
            }
        } // 如果失败，重新计算当前节点将要被放置的位置
        if (fail) {
            elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
            utils.mix(newElRegion, elFuturePos);
        }
        var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
        var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
        // 1. 复原修改过的定位参数
        if (isStillFailX || isStillFailY) {
            var _newPoints2 = points; // 重置对应部分的翻转逻辑
            if (isStillFailX) _newPoints2 = flip(points, /[lr]/gi, {
                l: "r",
                r: "l"
            });
            if (isStillFailY) _newPoints2 = flip(points, /[tb]/gi, {
                t: "b",
                b: "t"
            });
            points = _newPoints2;
            offset = align.offset || [
                0,
                0
            ];
            targetOffset = align.targetOffset || [
                0,
                0
            ];
        } // 2. 只有指定了可以调整当前方向才调整
        newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
        newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度
        if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    } // need judge to in case set fixed with in css on height auto element
    if (newElRegion.width !== elRegion.width) utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
    if (newElRegion.height !== elRegion.height) utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
     // https://github.com/kissyteam/kissy/issues/190
    // 相对于屏幕位置没变，而 left/top 变了
    // 例如 <div 'relative'><el absolute></div>
    utils.offset(source, {
        left: newElRegion.left,
        top: newElRegion.top
    }, {
        useCssRight: align.useCssRight,
        useCssBottom: align.useCssBottom,
        useCssTransform: align.useCssTransform,
        ignoreShake: align.ignoreShake
    });
    return {
        points: points,
        offset: offset,
        targetOffset: targetOffset,
        overflow: newOverflowCfg
    };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/ function isOutOfVisibleRect(target, alwaysByViewport) {
    var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
    var targetRegion = getRegion(target);
    return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
    var target = align.target || refNode;
    var refNodeRegion = getRegion(target);
    var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
    return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */ function alignPoint(el, tgtPoint, align) {
    var pageX;
    var pageY;
    var doc = utils.getDocument(el);
    var win = doc.defaultView || doc.parentWindow;
    var scrollX = utils.getWindowScrollLeft(win);
    var scrollY = utils.getWindowScrollTop(win);
    var viewportWidth = utils.viewportWidth(win);
    var viewportHeight = utils.viewportHeight(win);
    if ("pageX" in tgtPoint) pageX = tgtPoint.pageX;
    else pageX = scrollX + tgtPoint.clientX;
    if ("pageY" in tgtPoint) pageY = tgtPoint.pageY;
    else pageY = scrollY + tgtPoint.clientY;
    var tgtRegion = {
        left: pageX,
        top: pageY,
        width: 0,
        height: 0
    };
    var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point
    var points = [
        align.points[0],
        "cc"
    ];
    return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
        points: points
    }), pointInView);
}
exports.default = alignElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XEia":[function(require,module,exports) {
var baseIsEqual = require("./_baseIsEqual");
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
module.exports = isEqual;

},{"./_baseIsEqual":"7i3qr"}],"7i3qr":[function(require,module,exports) {
var baseIsEqualDeep = require("./_baseIsEqualDeep"), isObjectLike = require("./isObjectLike");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"6GoQ9","./isObjectLike":"3BLi4"}],"6GoQ9":[function(require,module,exports) {
var Stack = require("./_Stack"), equalArrays = require("./_equalArrays"), equalByTag = require("./_equalByTag"), equalObjects = require("./_equalObjects"), getTag = require("./_getTag"), isArray = require("./isArray"), isBuffer = require("./isBuffer"), isTypedArray = require("./isTypedArray");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"./_Stack":"atP87","./_equalArrays":"dQBwf","./_equalByTag":"iqa6H","./_equalObjects":"klCEf","./_getTag":"cRPhM","./isArray":"dZaTH","./isBuffer":"cn85h","./isTypedArray":"6SVKk"}],"atP87":[function(require,module,exports) {
var ListCache = require("./_ListCache"), stackClear = require("./_stackClear"), stackDelete = require("./_stackDelete"), stackGet = require("./_stackGet"), stackHas = require("./_stackHas"), stackSet = require("./_stackSet");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":"3UZeo","./_stackClear":"6CpyN","./_stackDelete":"dGFb0","./_stackGet":"6zFUp","./_stackHas":"3VJUX","./_stackSet":"ZfrYM"}],"3UZeo":[function(require,module,exports) {
var listCacheClear = require("./_listCacheClear"), listCacheDelete = require("./_listCacheDelete"), listCacheGet = require("./_listCacheGet"), listCacheHas = require("./_listCacheHas"), listCacheSet = require("./_listCacheSet");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"7AKQv","./_listCacheDelete":"j2Z5O","./_listCacheGet":"6Zrrs","./_listCacheHas":"i1CBK","./_listCacheSet":"2Rcur"}],"7AKQv":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"j2Z5O":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"cRVsl"}],"cRVsl":[function(require,module,exports) {
var eq = require("./eq");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"aVz5f"}],"aVz5f":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"6Zrrs":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"cRVsl"}],"i1CBK":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"cRVsl"}],"2Rcur":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"cRVsl"}],"6CpyN":[function(require,module,exports) {
var ListCache = require("./_ListCache");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"./_ListCache":"3UZeo"}],"dGFb0":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"6zFUp":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"3VJUX":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"ZfrYM":[function(require,module,exports) {
var ListCache = require("./_ListCache"), Map = require("./_Map"), MapCache = require("./_MapCache");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"./_ListCache":"3UZeo","./_Map":"8YjF4","./_MapCache":"664I1"}],"8YjF4":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map");
module.exports = Map;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"9PCIl":[function(require,module,exports) {
var baseIsNative = require("./_baseIsNative"), getValue = require("./_getValue");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"2U9Pn","./_getValue":"kKx5I"}],"2U9Pn":[function(require,module,exports) {
var isFunction = require("./isFunction"), isMasked = require("./_isMasked"), isObject = require("./isObject"), toSource = require("./_toSource");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"cfti6","./_isMasked":"cMDzi","./isObject":"cGhqJ","./_toSource":"bYHc7"}],"cfti6":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObject = require("./isObject");
/** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"lOnbo","./isObject":"cGhqJ"}],"lOnbo":[function(require,module,exports) {
var Symbol = require("./_Symbol"), getRawTag = require("./_getRawTag"), objectToString = require("./_objectToString");
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"7lsL9","./_getRawTag":"995sO","./_objectToString":"bmE3g"}],"7lsL9":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":"dSYUs"}],"dSYUs":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"./_freeGlobal":"kAk32"}],"kAk32":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"995sO":[function(require,module,exports) {
var Symbol = require("./_Symbol");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"7lsL9"}],"bmE3g":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"cGhqJ":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
module.exports = isObject;

},{}],"cMDzi":[function(require,module,exports) {
var coreJsData = require("./_coreJsData");
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"6gJwQ"}],"6gJwQ":[function(require,module,exports) {
var root = require("./_root");
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
module.exports = coreJsData;

},{"./_root":"dSYUs"}],"bYHc7":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
module.exports = toSource;

},{}],"kKx5I":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"664I1":[function(require,module,exports) {
var mapCacheClear = require("./_mapCacheClear"), mapCacheDelete = require("./_mapCacheDelete"), mapCacheGet = require("./_mapCacheGet"), mapCacheHas = require("./_mapCacheHas"), mapCacheSet = require("./_mapCacheSet");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"7kHs4","./_mapCacheDelete":"4ny9y","./_mapCacheGet":"gVeFY","./_mapCacheHas":"idSOY","./_mapCacheSet":"lXUJT"}],"7kHs4":[function(require,module,exports) {
var Hash = require("./_Hash"), ListCache = require("./_ListCache"), Map = require("./_Map");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"jFMT5","./_ListCache":"3UZeo","./_Map":"8YjF4"}],"jFMT5":[function(require,module,exports) {
var hashClear = require("./_hashClear"), hashDelete = require("./_hashDelete"), hashGet = require("./_hashGet"), hashHas = require("./_hashHas"), hashSet = require("./_hashSet");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"f2NRo","./_hashDelete":"cCdgz","./_hashGet":"eKqTO","./_hashHas":"ghnqP","./_hashSet":"6i99R"}],"f2NRo":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"6i8Uf"}],"6i8Uf":[function(require,module,exports) {
var getNative = require("./_getNative");
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, "create");
module.exports = nativeCreate;

},{"./_getNative":"9PCIl"}],"cCdgz":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"eKqTO":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"6i8Uf"}],"ghnqP":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"6i8Uf"}],"6i99R":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"6i8Uf"}],"4ny9y":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"aptgk"}],"aptgk":[function(require,module,exports) {
var isKeyable = require("./_isKeyable");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"icylN"}],"icylN":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
module.exports = isKeyable;

},{}],"gVeFY":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"aptgk"}],"idSOY":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"aptgk"}],"lXUJT":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"aptgk"}],"dQBwf":[function(require,module,exports) {
var SetCache = require("./_SetCache"), arraySome = require("./_arraySome"), cacheHas = require("./_cacheHas");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
module.exports = equalArrays;

},{"./_SetCache":"1SXrY","./_arraySome":"aLDHW","./_cacheHas":"70cVb"}],"1SXrY":[function(require,module,exports) {
var MapCache = require("./_MapCache"), setCacheAdd = require("./_setCacheAdd"), setCacheHas = require("./_setCacheHas");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":"664I1","./_setCacheAdd":"cZViu","./_setCacheHas":"4zNID"}],"cZViu":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"4zNID":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"aLDHW":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"70cVb":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"iqa6H":[function(require,module,exports) {
var Symbol = require("./_Symbol"), Uint8Array = require("./_Uint8Array"), eq = require("./eq"), equalArrays = require("./_equalArrays"), mapToArray = require("./_mapToArray"), setToArray = require("./_setToArray");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"./_Symbol":"7lsL9","./_Uint8Array":"6xFrA","./eq":"aVz5f","./_equalArrays":"dQBwf","./_mapToArray":"kAwkU","./_setToArray":"2qJif"}],"6xFrA":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"./_root":"dSYUs"}],"kAwkU":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"2qJif":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"klCEf":[function(require,module,exports) {
var getAllKeys = require("./_getAllKeys");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
module.exports = equalObjects;

},{"./_getAllKeys":"d2kML"}],"d2kML":[function(require,module,exports) {
var baseGetAllKeys = require("./_baseGetAllKeys"), getSymbols = require("./_getSymbols"), keys = require("./keys");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"./_baseGetAllKeys":"aeckf","./_getSymbols":"5p5Yd","./keys":"6fHVw"}],"aeckf":[function(require,module,exports) {
var arrayPush = require("./_arrayPush"), isArray = require("./isArray");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"./_arrayPush":"ivo5r","./isArray":"dZaTH"}],"ivo5r":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"dZaTH":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"5p5Yd":[function(require,module,exports) {
var arrayFilter = require("./_arrayFilter"), stubArray = require("./stubArray");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"./_arrayFilter":"hmIQ7","./stubArray":"6TgRy"}],"hmIQ7":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"6TgRy":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"6fHVw":[function(require,module,exports) {
var arrayLikeKeys = require("./_arrayLikeKeys"), baseKeys = require("./_baseKeys"), isArrayLike = require("./isArrayLike");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"dquIQ","./_baseKeys":"c0eiI","./isArrayLike":"gMCbp"}],"dquIQ":[function(require,module,exports) {
var baseTimes = require("./_baseTimes"), isArguments = require("./isArguments"), isArray = require("./isArray"), isBuffer = require("./isBuffer"), isIndex = require("./_isIndex"), isTypedArray = require("./isTypedArray");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"odqYd","./isArguments":"8ReNj","./isArray":"dZaTH","./isBuffer":"cn85h","./_isIndex":"aJpx0","./isTypedArray":"6SVKk"}],"odqYd":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"8ReNj":[function(require,module,exports) {
var baseIsArguments = require("./_baseIsArguments"), isObjectLike = require("./isObjectLike");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
module.exports = isArguments;

},{"./_baseIsArguments":"gx70P","./isObjectLike":"3BLi4"}],"gx70P":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"lOnbo","./isObjectLike":"3BLi4"}],"3BLi4":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
module.exports = isObjectLike;

},{}],"cn85h":[function(require,module,exports) {
var root = require("./_root"), stubFalse = require("./stubFalse");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"dSYUs","./stubFalse":"dx4uy"}],"dx4uy":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"aJpx0":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"6SVKk":[function(require,module,exports) {
var baseIsTypedArray = require("./_baseIsTypedArray"), baseUnary = require("./_baseUnary"), nodeUtil = require("./_nodeUtil");
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"lGSsl","./_baseUnary":"eJXq4","./_nodeUtil":"5edNe"}],"lGSsl":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isLength = require("./isLength"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"lOnbo","./isLength":"hrTBx","./isObjectLike":"3BLi4"}],"hrTBx":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"eJXq4":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"5edNe":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"kAk32"}],"c0eiI":[function(require,module,exports) {
var isPrototype = require("./_isPrototype"), nativeKeys = require("./_nativeKeys");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"iG4eR","./_nativeKeys":"k97u2"}],"iG4eR":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"k97u2":[function(require,module,exports) {
var overArg = require("./_overArg");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"dpUvl"}],"dpUvl":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"gMCbp":[function(require,module,exports) {
var isFunction = require("./isFunction"), isLength = require("./isLength");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"cfti6","./isLength":"hrTBx"}],"cRPhM":[function(require,module,exports) {
var DataView = require("./_DataView"), Map = require("./_Map"), Promise = require("./_Promise"), Set = require("./_Set"), WeakMap = require("./_WeakMap"), baseGetTag = require("./_baseGetTag"), toSource = require("./_toSource");
/** `Object#toString` result references. */ var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"./_DataView":"ejRu5","./_Map":"8YjF4","./_Promise":"jbvCt","./_Set":"4xGLf","./_WeakMap":"av50V","./_baseGetTag":"lOnbo","./_toSource":"bYHc7"}],"ejRu5":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView");
module.exports = DataView;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"jbvCt":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, "Promise");
module.exports = Promise;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"4xGLf":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Set = getNative(root, "Set");
module.exports = Set;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"av50V":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, "WeakMap");
module.exports = WeakMap;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"4Czip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSamePoint", ()=>isSamePoint);
parcelHelpers.export(exports, "restoreFocus", ()=>restoreFocus);
parcelHelpers.export(exports, "monitorResize", ()=>monitorResize);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _resizeObserverPolyfill = require("resize-observer-polyfill");
var _resizeObserverPolyfillDefault = parcelHelpers.interopDefault(_resizeObserverPolyfill);
var _contains = require("rc-util/es/Dom/contains");
var _containsDefault = parcelHelpers.interopDefault(_contains);
function isSamePoint(prev, next) {
    if (prev === next) return true;
    if (!prev || !next) return false;
    if ("pageX" in next && "pageY" in next) return prev.pageX === next.pageX && prev.pageY === next.pageY;
    if ("clientX" in next && "clientY" in next) return prev.clientX === next.clientX && prev.clientY === next.clientY;
    return false;
}
function restoreFocus(activeElement, container) {
    // Focus back if is in the container
    if (activeElement !== document.activeElement && (0, _containsDefault.default)(container, activeElement) && typeof activeElement.focus === "function") activeElement.focus();
}
function monitorResize(element, callback) {
    var prevWidth = null;
    var prevHeight = null;
    function onResize(_ref) {
        var _ref2 = (0, _slicedToArrayDefault.default)(_ref, 1), target = _ref2[0].target;
        if (!document.documentElement.contains(target)) return;
        var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
        var fixedWidth = Math.floor(width);
        var fixedHeight = Math.floor(height);
        if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) // https://webkit.org/blog/9997/resizeobserver-in-webkit/
        Promise.resolve().then(function() {
            callback({
                width: fixedWidth,
                height: fixedHeight
            });
        });
        prevWidth = fixedWidth;
        prevHeight = fixedHeight;
    }
    var resizeObserver = new (0, _resizeObserverPolyfillDefault.default)(onResize);
    if (element) resizeObserver.observe(element);
    return function() {
        resizeObserver.disconnect();
    };
}

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","resize-observer-polyfill":"6kpvB","rc-util/es/Dom/contains":"hm8Lm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6kpvB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */ var MapShim = function() {
    if (typeof Map !== "undefined") return Map;
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */ function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */ get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */ class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */ class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) this.__entries__[index][1] = value;
            else this.__entries__.push([
                key,
                value
            ]);
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) entries.splice(index, 1);
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */ class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */ class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) ctx = null;
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
/**
 * Detects whether window and document objects are available in current environment.
 */ var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
// Returns global object of a current environment.
var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) return global;
    if (typeof self !== "undefined" && self.Math === Math) return self;
    if (typeof window !== "undefined" && window.Math === Math) return window;
    // eslint-disable-next-line no-new-func
    return Function("return this")();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */ var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */ function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */ function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) proxy();
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */ function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */ function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) return;
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
    "top",
    "right",
    "bottom",
    "left",
    "width",
    "height",
    "size",
    "weight"
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== "undefined";
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */ var ResizeObserverController = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */ function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */ this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */ this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */ this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */ this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) this.observers_.push(observer);
        // Add listeners if they haven't been added yet.
        if (!this.connected_) this.connect_();
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) observers.splice(index, 1);
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) this.disconnect_();
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) this.refresh();
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ ResizeObserverController.prototype.updateObservers_ = function() {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.connect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) return;
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener("DOMSubtreeModified", this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.disconnect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) return;
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) this.mutationsObserver_.disconnect();
        if (this.mutationEventsAdded_) document.removeEventListener("DOMSubtreeModified", this.refresh);
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) this.refresh();
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ ResizeObserverController.getInstance = function() {
        if (!this.instance_) this.instance_ = new ResizeObserverController();
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */ var defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */ var getWindowOf = function(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
};
// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */ function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */ function getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++)positions[_i - 1] = arguments[_i];
    return positions.reduce(function(size, position) {
        var value = styles["border-" + position + "-width"];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */ function getPaddings(styles) {
    var positions = [
        "top",
        "right",
        "bottom",
        "left"
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles["padding-" + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */ function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */ function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) return emptyRect;
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === "border-box") {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) width -= getBordersSize(styles, "left", "right") + horizPad;
        if (Math.round(height + vertPad) !== clientHeight) height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) width -= vertScrollbar;
        if (Math.abs(horizScrollbar) !== 1) height -= horizScrollbar;
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ var isSVGGraphicsElement = function() {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== "undefined") return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */ function getContentRect(target) {
    if (!isBrowser) return emptyRect;
    if (isSVGGraphicsElement(target)) return getSVGContentRect(target);
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */ function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */ function createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */ var ResizeObservation = /** @class */ function() {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */ function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */ this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */ this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */ this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ ResizeObservation.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var ResizeObserverEntry = /** @class */ function() {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */ function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var ResizeObserverSPI = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */ function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */ this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */ this.observations_ = new MapShim();
        if (typeof callback !== "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === "undefined" || !(Element instanceof Object)) return;
        if (!(target instanceof getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) return;
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === "undefined" || !(Element instanceof Object)) return;
        if (!(target instanceof getWindowOf(target).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) return;
        observations.delete(target);
        if (!observations.size) this.controller_.removeObserver(this);
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) _this.activeObservations_.push(observation);
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.broadcastActive = function() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) return;
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */ var ResizeObserver = /** @class */ function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */ function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
[
    "observe",
    "unobserve",
    "disconnect"
].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});
var index = function() {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== "undefined") return global$1.ResizeObserver;
    return ResizeObserver;
}();
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fL5PH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
exports.default = function(callback, buffer) {
    var calledRef = (0, _reactDefault.default).useRef(false);
    var timeoutRef = (0, _reactDefault.default).useRef(null);
    function cancelTrigger() {
        window.clearTimeout(timeoutRef.current);
    }
    function trigger(force) {
        cancelTrigger();
        if (!calledRef.current || force === true) {
            if (callback() === false) // Not delay since callback cancelled self
            return;
            calledRef.current = true;
            timeoutRef.current = window.setTimeout(function() {
                calledRef.current = false;
            }, buffer);
        } else timeoutRef.current = window.setTimeout(function() {
            calledRef.current = false;
            trigger();
        }, buffer);
    }
    return [
        trigger,
        function() {
            calledRef.current = false;
            cancelTrigger();
        }
    ];
};

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibytU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regeneratorRuntime = require("@babel/runtime/helpers/esm/regeneratorRuntime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
var _asyncToGenerator = require("@babel/runtime/helpers/esm/asyncToGenerator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _raf = require("rc-util/es/raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var _useState = require("rc-util/es/hooks/useState");
var _useStateDefault = parcelHelpers.interopDefault(_useState);
var StatusQueue = [
    "measure",
    "alignPre",
    "align",
    null,
    "motion"
];
exports.default = function(visible, doMeasure) {
    var _useState = (0, _useStateDefault.default)(null), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), status = _useState2[0], setInternalStatus = _useState2[1];
    var rafRef = (0, _react.useRef)();
    function setStatus(nextStatus) {
        setInternalStatus(nextStatus, true);
    }
    function cancelRaf() {
        (0, _rafDefault.default).cancel(rafRef.current);
    }
    function goNextStatus(callback) {
        cancelRaf();
        rafRef.current = (0, _rafDefault.default)(function() {
            // Only align should be manually trigger
            setStatus(function(prev) {
                switch(status){
                    case "align":
                        return "motion";
                    case "motion":
                        return "stable";
                    default:
                }
                return prev;
            });
            callback === null || callback === void 0 || callback();
        });
    } // Init status
    (0, _react.useEffect)(function() {
        setStatus("measure");
    }, [
        visible
    ]); // Go next status
    (0, _react.useEffect)(function() {
        switch(status){
            case "measure":
                doMeasure();
                break;
            default:
        }
        if (status) rafRef.current = (0, _rafDefault.default)(/*#__PURE__*/ (0, _asyncToGeneratorDefault.default)(/*#__PURE__*/ (0, _regeneratorRuntimeDefault.default)().mark(function _callee() {
            var index, nextStatus;
            return (0, _regeneratorRuntimeDefault.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        index = StatusQueue.indexOf(status);
                        nextStatus = StatusQueue[index + 1];
                        if (nextStatus && index !== -1) setStatus(nextStatus);
                    case 3:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        })));
    }, [
        status
    ]);
    (0, _react.useEffect)(function() {
        return function() {
            cancelRaf();
        };
    }, []);
    return [
        status,
        goNextStatus
    ];
};

},{"@babel/runtime/helpers/esm/regeneratorRuntime":"8VPP1","@babel/runtime/helpers/esm/asyncToGenerator":"5Tzvv","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","rc-util/es/raf":"7OvWw","rc-util/es/hooks/useState":"4KG3w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5O9tf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
exports.default = function(stretch) {
    var _React$useState = _react.useState({
        width: 0,
        height: 0
    }), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), targetSize = _React$useState2[0], setTargetSize = _React$useState2[1];
    function measureStretch(element) {
        setTargetSize({
            width: element.offsetWidth,
            height: element.offsetHeight
        });
    } // Merge stretch style
    var style = _react.useMemo(function() {
        var sizeStyle = {};
        if (stretch) {
            var width = targetSize.width, height = targetSize.height; // Stretch with target
            if (stretch.indexOf("height") !== -1 && height) sizeStyle.height = height;
            else if (stretch.indexOf("minHeight") !== -1 && height) sizeStyle.minHeight = height;
            if (stretch.indexOf("width") !== -1 && width) sizeStyle.width = width;
            else if (stretch.indexOf("minWidth") !== -1 && width) sizeStyle.minWidth = width;
        }
        return sizeStyle;
    }, [
        stretch,
        targetSize
    ]);
    return [
        style,
        measureStretch
    ];
};

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VRPz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _react = require("react");
var _rcMotion = require("rc-motion");
var _rcMotionDefault = parcelHelpers.interopDefault(_rcMotion);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var MobilePopupInner = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, visible = props.visible, zIndex = props.zIndex, children = props.children, _props$mobile = props.mobile;
    _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
    var popupClassName = _props$mobile.popupClassName, popupStyle = _props$mobile.popupStyle, _props$mobile$popupMo = _props$mobile.popupMotion, popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo, popupRender = _props$mobile.popupRender, onClick = props.onClick;
    var elementRef = _react.useRef(); // ========================= Refs =========================
    _react.useImperativeHandle(ref, function() {
        return {
            forceAlign: function forceAlign() {},
            getElement: function getElement() {
                return elementRef.current;
            }
        };
    }); // ======================== Render ========================
    var mergedStyle = (0, _objectSpread2Default.default)({
        zIndex: zIndex
    }, popupStyle);
    var childNode = children; // Wrapper when multiple children
    if (_react.Children.count(children) > 1) childNode = /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(prefixCls, "-content")
    }, children);
     // Mobile support additional render
    if (popupRender) childNode = popupRender(childNode);
    return /*#__PURE__*/ _react.createElement((0, _rcMotionDefault.default), (0, _extendsDefault.default)({
        visible: visible,
        ref: elementRef,
        removeOnLeave: true
    }, popupMotion), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var mergedClassName = (0, _classnamesDefault.default)(prefixCls, popupClassName, motionClassName);
        return /*#__PURE__*/ _react.createElement("div", {
            ref: motionRef,
            className: mergedClassName,
            onClick: onClick,
            style: (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, motionStyle), mergedStyle)
        }, childNode);
    });
});
MobilePopupInner.displayName = "MobilePopupInner";
exports.default = MobilePopupInner;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","rc-motion":"aaavi","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3sMva":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var TriggerContext = /*#__PURE__*/ _react.createContext(null);
exports.default = TriggerContext;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YwXw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "placements", ()=>placements);
var autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
var targetOffset = [
    0,
    0
];
var placements = {
    left: {
        points: [
            "cr",
            "cl"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            -4,
            0
        ],
        targetOffset: targetOffset
    },
    right: {
        points: [
            "cl",
            "cr"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            4,
            0
        ],
        targetOffset: targetOffset
    },
    top: {
        points: [
            "bc",
            "tc"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    bottom: {
        points: [
            "tc",
            "bc"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    topLeft: {
        points: [
            "bl",
            "tl"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    leftTop: {
        points: [
            "tr",
            "tl"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            -4,
            0
        ],
        targetOffset: targetOffset
    },
    topRight: {
        points: [
            "br",
            "tr"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            -4
        ],
        targetOffset: targetOffset
    },
    rightTop: {
        points: [
            "tl",
            "tr"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            4,
            0
        ],
        targetOffset: targetOffset
    },
    bottomRight: {
        points: [
            "tr",
            "br"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    rightBottom: {
        points: [
            "bl",
            "br"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            4,
            0
        ],
        targetOffset: targetOffset
    },
    bottomLeft: {
        points: [
            "tl",
            "bl"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            0,
            4
        ],
        targetOffset: targetOffset
    },
    leftBottom: {
        points: [
            "br",
            "bl"
        ],
        overflow: autoAdjustOverflow,
        offset: [
            -4,
            0
        ],
        targetOffset: targetOffset
    }
};
exports.default = placements;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kg0m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
function Popup(props) {
    var showArrow = props.showArrow, arrowContent = props.arrowContent, children = props.children, prefixCls = props.prefixCls, id = props.id, overlayInnerStyle = props.overlayInnerStyle, className = props.className, style = props.style;
    return /*#__PURE__*/ _react.createElement("div", {
        className: (0, _classnamesDefault.default)("".concat(prefixCls, "-content"), className),
        style: style
    }, showArrow !== false && /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(prefixCls, "-arrow"),
        key: "arrow"
    }, arrowContent), /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(prefixCls, "-inner"),
        id: id,
        role: "tooltip",
        style: overlayInnerStyle
    }, typeof children === "function" ? children() : children));
}
exports.default = Popup;

},{"react":"21dqq","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guGeI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _react = require("react");
var _useEvent = require("./useEvent");
var _useEventDefault = parcelHelpers.interopDefault(_useEvent);
var _useLayoutEffect = require("./useLayoutEffect");
var _useLayoutEffectDefault = parcelHelpers.interopDefault(_useLayoutEffect);
var _useState = require("./useState");
var _useStateDefault = parcelHelpers.interopDefault(_useState);
var Source;
(function(Source) {
    Source[Source["INNER"] = 0] = "INNER";
    Source[Source["PROP"] = 1] = "PROP";
})(Source || (Source = {}));
/** We only think `undefined` is empty */ function hasValue(value) {
    return value !== undefined;
}
function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState; // ======================= Init =======================
    var _useState = (0, _useStateDefault.default)(function() {
        var finalValue = undefined;
        var source;
        if (hasValue(value)) {
            finalValue = value;
            source = Source.PROP;
        } else if (hasValue(defaultValue)) {
            finalValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
            source = Source.PROP;
        } else {
            finalValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
            source = Source.INNER;
        }
        return [
            finalValue,
            source,
            finalValue
        ];
    }), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), mergedValue = _useState2[0], setMergedValue = _useState2[1];
    var chosenValue = hasValue(value) ? value : mergedValue[0];
    var postMergedValue = postState ? postState(chosenValue) : chosenValue; // ======================= Sync =======================
    (0, _useLayoutEffect.useLayoutUpdateEffect)(function() {
        setMergedValue(function(_ref2) {
            var _ref3 = (0, _slicedToArrayDefault.default)(_ref2, 1), prevValue = _ref3[0];
            return [
                value,
                Source.PROP,
                prevValue
            ];
        });
    }, [
        value
    ]); // ====================== Update ======================
    var changeEventPrevRef = _react.useRef();
    var triggerChange = (0, _useEventDefault.default)(function(updater, ignoreDestroy) {
        setMergedValue(function(prev) {
            var _prev = (0, _slicedToArrayDefault.default)(prev, 3), prevValue = _prev[0], prevSource = _prev[1], prevPrevValue = _prev[2];
            var nextValue = typeof updater === "function" ? updater(prevValue) : updater; // Do nothing if value not change
            if (nextValue === prevValue) return prev;
             // Use prev prev value if is in a batch update to avoid missing data
            var overridePrevValue = prevSource === Source.INNER && changeEventPrevRef.current !== prevPrevValue ? prevPrevValue : prevValue;
            return [
                nextValue,
                Source.INNER,
                overridePrevValue
            ];
        }, ignoreDestroy);
    }); // ====================== Change ======================
    var onChangeFn = (0, _useEventDefault.default)(onChange);
    (0, _useLayoutEffectDefault.default)(function() {
        var _mergedValue = (0, _slicedToArrayDefault.default)(mergedValue, 3), current = _mergedValue[0], source = _mergedValue[1], prev = _mergedValue[2];
        if (current !== prev && source === Source.INNER) {
            onChangeFn(current, prev);
            changeEventPrevRef.current = prev;
        }
    }, [
        mergedValue
    ]);
    return [
        postMergedValue,
        triggerChange
    ];
}
exports.default = useMergedState;

},{"@babel/runtime/helpers/esm/slicedToArray":"cBZWN","react":"21dqq","./useEvent":"jv4C9","./useLayoutEffect":"b6Tje","./useState":"4KG3w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv4C9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
function useEvent(callback) {
    var fnRef = _react.useRef();
    fnRef.current = callback;
    var memoFn = _react.useCallback(function() {
        var _fnRef$current;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [
            fnRef
        ].concat(args));
    }, []);
    return memoFn;
}
exports.default = useEvent;

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHCm0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PresetStatusColorTypes", ()=>PresetStatusColorTypes);
parcelHelpers.export(exports, "PresetColorTypes", ()=>PresetColorTypes);
var _type = require("./type");
var PresetStatusColorTypes = (0, _type.tuple)("success", "processing", "error", "default", "warning"); // eslint-disable-next-line import/prefer-default-export
var PresetColorTypes = (0, _type.tuple)("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime");

},{"./type":"eWuNf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WP6l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOverflowOptions", ()=>getOverflowOptions);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _placements = require("rc-tooltip/es/placements");
var autoAdjustOverflowEnabled = {
    adjustX: 1,
    adjustY: 1
};
var autoAdjustOverflowDisabled = {
    adjustX: 0,
    adjustY: 0
};
var targetOffset = [
    0,
    0
];
function getOverflowOptions(autoAdjustOverflow) {
    if (typeof autoAdjustOverflow === "boolean") return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
    return (0, _extendsDefault.default)((0, _extendsDefault.default)({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}
function getPlacements(config) {
    var _config$arrowWidth = config.arrowWidth, arrowWidth = _config$arrowWidth === void 0 ? 4 : _config$arrowWidth, _config$horizontalArr = config.horizontalArrowShift, horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr, _config$verticalArrow = config.verticalArrowShift, verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow, autoAdjustOverflow = config.autoAdjustOverflow, arrowPointAtCenter = config.arrowPointAtCenter;
    var placementMap = {
        left: {
            points: [
                "cr",
                "cl"
            ],
            offset: [
                -4,
                0
            ]
        },
        right: {
            points: [
                "cl",
                "cr"
            ],
            offset: [
                4,
                0
            ]
        },
        top: {
            points: [
                "bc",
                "tc"
            ],
            offset: [
                0,
                -4
            ]
        },
        bottom: {
            points: [
                "tc",
                "bc"
            ],
            offset: [
                0,
                4
            ]
        },
        topLeft: {
            points: [
                "bl",
                "tc"
            ],
            offset: [
                -(horizontalArrowShift + arrowWidth),
                -4
            ]
        },
        leftTop: {
            points: [
                "tr",
                "cl"
            ],
            offset: [
                -4,
                -(verticalArrowShift + arrowWidth)
            ]
        },
        topRight: {
            points: [
                "br",
                "tc"
            ],
            offset: [
                horizontalArrowShift + arrowWidth,
                -4
            ]
        },
        rightTop: {
            points: [
                "tl",
                "cr"
            ],
            offset: [
                4,
                -(verticalArrowShift + arrowWidth)
            ]
        },
        bottomRight: {
            points: [
                "tr",
                "bc"
            ],
            offset: [
                horizontalArrowShift + arrowWidth,
                4
            ]
        },
        rightBottom: {
            points: [
                "bl",
                "cr"
            ],
            offset: [
                4,
                verticalArrowShift + arrowWidth
            ]
        },
        bottomLeft: {
            points: [
                "tl",
                "bc"
            ],
            offset: [
                -(horizontalArrowShift + arrowWidth),
                4
            ]
        },
        leftBottom: {
            points: [
                "br",
                "cl"
            ],
            offset: [
                -4,
                verticalArrowShift + arrowWidth
            ]
        }
    };
    Object.keys(placementMap).forEach(function(key) {
        placementMap[key] = arrowPointAtCenter ? (0, _extendsDefault.default)((0, _extendsDefault.default)({}, placementMap[key]), {
            overflow: getOverflowOptions(autoAdjustOverflow),
            targetOffset: targetOffset
        }) : (0, _extendsDefault.default)((0, _extendsDefault.default)({}, (0, _placements.placements)[key]), {
            overflow: getOverflowOptions(autoAdjustOverflow)
        });
        placementMap[key].ignoreShake = true;
    });
    return placementMap;
}
exports.default = getPlacements;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","rc-tooltip/es/placements":"2YwXw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4rIb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _col = require("../grid/col");
var _colDefault = parcelHelpers.interopDefault(_col);
var _context = require("./context");
var _errorList = require("./ErrorList");
var _errorListDefault = parcelHelpers.interopDefault(_errorList);
var FormItemInput = function FormItemInput(props) {
    var prefixCls = props.prefixCls, status = props.status, wrapperCol = props.wrapperCol, children = props.children, errors = props.errors, warnings = props.warnings, formItemRender = props._internalItemRender, extra = props.extra, help = props.help, marginBottom = props.marginBottom, onErrorVisibleChanged = props.onErrorVisibleChanged;
    var baseClassName = "".concat(prefixCls, "-item");
    var formContext = _react.useContext((0, _context.FormContext));
    var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
    var className = (0, _classnamesDefault.default)("".concat(baseClassName, "-control"), mergedWrapperCol.className); // Pass to sub FormItem should not with col info
    var subFormContext = _react.useMemo(function() {
        return (0, _extendsDefault.default)({}, formContext);
    }, [
        formContext
    ]);
    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    var inputDom = /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(baseClassName, "-control-input")
    }, /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(baseClassName, "-control-input-content")
    }, children));
    var formItemContext = _react.useMemo(function() {
        return {
            prefixCls: prefixCls,
            status: status
        };
    }, [
        prefixCls,
        status
    ]);
    var errorListDom = marginBottom !== null || errors.length || warnings.length ? /*#__PURE__*/ _react.createElement("div", {
        style: {
            display: "flex",
            flexWrap: "nowrap"
        }
    }, /*#__PURE__*/ _react.createElement((0, _context.FormItemPrefixContext).Provider, {
        value: formItemContext
    }, /*#__PURE__*/ _react.createElement((0, _errorListDefault.default), {
        errors: errors,
        warnings: warnings,
        help: help,
        helpStatus: status,
        className: "".concat(baseClassName, "-explain-connected"),
        onVisibleChanged: onErrorVisibleChanged
    })), !!marginBottom && /*#__PURE__*/ _react.createElement("div", {
        style: {
            width: 0,
            height: marginBottom
        }
    })) : null; // If extra = 0, && will goes wrong
    // 0&&error -> 0
    var extraDom = extra ? /*#__PURE__*/ _react.createElement("div", {
        className: "".concat(baseClassName, "-extra")
    }, extra) : null;
    var dom = formItemRender && formItemRender.mark === "pro_table_render" && formItemRender.render ? formItemRender.render(props, {
        input: inputDom,
        errorList: errorListDom,
        extra: extraDom
    }) : /*#__PURE__*/ _react.createElement(_react.Fragment, null, inputDom, errorListDom, extraDom);
    return /*#__PURE__*/ _react.createElement((0, _context.FormContext).Provider, {
        value: subFormContext
    }, /*#__PURE__*/ _react.createElement((0, _colDefault.default), (0, _extendsDefault.default)({}, mergedWrapperCol, {
        className: className
    }), dom));
};
exports.default = FormItemInput;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","classnames":"jocGM","react":"21dqq","../grid/col":"6Fvfx","./context":"flRlt","./ErrorList":"gLa2z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VTIE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _rcFieldForm = require("rc-field-form");
var _react = require("react");
var _configProvider = require("../config-provider");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _context = require("./context");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var FormList = function FormList(_a) {
    var customizePrefixCls = _a.prefixCls, children = _a.children, props = __rest(_a, [
        "prefixCls",
        "children"
    ]);
    (0, _warningDefault.default)(!!props.name, "Form.List", "Miss `name` prop.");
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls("form", customizePrefixCls);
    var contextValue = _react.useMemo(function() {
        return {
            prefixCls: prefixCls,
            status: "error"
        };
    }, [
        prefixCls
    ]);
    return /*#__PURE__*/ _react.createElement((0, _rcFieldForm.List), (0, _extendsDefault.default)({}, props), function(fields, operation, meta) {
        return /*#__PURE__*/ _react.createElement((0, _context.FormItemPrefixContext).Provider, {
            value: contextValue
        }, children(fields.map(function(field) {
            return (0, _extendsDefault.default)((0, _extendsDefault.default)({}, field), {
                fieldKey: field.key
            });
        }), operation, {
            errors: meta.errors,
            warnings: meta.warnings
        }));
    });
};
exports.default = FormList;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","rc-field-form":"bdxu5","react":"21dqq","../config-provider":"iMraF","../_util/warning":"daUrm","./context":"flRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8n7yH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _context = require("../context");
function useFormInstance() {
    var _useContext = (0, _react.useContext)((0, _context.FormContext)), form = _useContext.form;
    return form;
}
exports.default = useFormInstance;

},{"react":"21dqq","../context":"flRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3deN7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _group = require("./Group");
var _groupDefault = parcelHelpers.interopDefault(_group);
var _input = require("./Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _password = require("./Password");
var _passwordDefault = parcelHelpers.interopDefault(_password);
var _search = require("./Search");
var _searchDefault = parcelHelpers.interopDefault(_search);
var _textArea = require("./TextArea");
var _textAreaDefault = parcelHelpers.interopDefault(_textArea);
var Input = (0, _inputDefault.default);
Input.Group = (0, _groupDefault.default);
Input.Search = (0, _searchDefault.default);
Input.TextArea = (0, _textAreaDefault.default);
Input.Password = (0, _passwordDefault.default);
exports.default = Input;

},{"./Group":"bOHRq","./Input":"hbGjC","./Password":"jNRIk","./Search":"9DqIl","./TextArea":"lV8jB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOHRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _configProvider = require("../config-provider");
var _context = require("../form/context");
var Group = function Group(props) {
    var _classNames;
    var _useContext = (0, _react.useContext)((0, _configProvider.ConfigContext)), getPrefixCls = _useContext.getPrefixCls, direction = _useContext.direction;
    var customizePrefixCls = props.prefixCls, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className;
    var prefixCls = getPrefixCls("input-group", customizePrefixCls);
    var cls = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-lg"), props.size === "large"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-sm"), props.size === "small"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-compact"), props.compact), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames), className);
    var formItemContext = (0, _react.useContext)((0, _context.FormItemInputContext));
    var groupFormItemContext = (0, _react.useMemo)(function() {
        return (0, _extendsDefault.default)((0, _extendsDefault.default)({}, formItemContext), {
            isFormItemInput: false
        });
    }, [
        formItemContext
    ]);
    return /*#__PURE__*/ _react.createElement("span", {
        className: cls,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onFocus: props.onFocus,
        onBlur: props.onBlur
    }, /*#__PURE__*/ _react.createElement((0, _context.FormItemInputContext).Provider, {
        value: groupFormItemContext
    }, props.children));
};
exports.default = Group;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","classnames":"jocGM","react":"21dqq","../config-provider":"iMraF","../form/context":"flRlt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbGjC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fixControlledValue", ()=>fixControlledValue);
parcelHelpers.export(exports, "resolveOnChange", ()=>resolveOnChange);
parcelHelpers.export(exports, "triggerFocus", ()=>triggerFocus);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _closeCircleFilled = require("@ant-design/icons/es/icons/CloseCircleFilled");
var _closeCircleFilledDefault = parcelHelpers.interopDefault(_closeCircleFilled);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcInput = require("rc-input");
var _rcInputDefault = parcelHelpers.interopDefault(_rcInput);
var _ref = require("rc-util/es/ref");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _configProvider = require("../config-provider");
var _disabledContext = require("../config-provider/DisabledContext");
var _disabledContextDefault = parcelHelpers.interopDefault(_disabledContext);
var _sizeContext = require("../config-provider/SizeContext");
var _sizeContextDefault = parcelHelpers.interopDefault(_sizeContext);
var _context = require("../form/context");
var _statusUtils = require("../_util/statusUtils");
var _warning = require("../_util/warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _utils = require("./utils");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function fixControlledValue(value) {
    if (typeof value === "undefined" || value === null) return "";
    return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
    if (!onChange) return;
    var event = e;
    if (e.type === "click") {
        // Clone a new target for event.
        // Avoid the following usage, the setQuery method gets the original value.
        //
        // const [query, setQuery] = React.useState('');
        // <Input
        //   allowClear
        //   value={query}
        //   onChange={(e)=> {
        //     setQuery((prevStatus) => e.target.value);
        //   }}
        // />
        var currentTarget = target.cloneNode(true); // click clear icon
        event = Object.create(e, {
            target: {
                value: currentTarget
            },
            currentTarget: {
                value: currentTarget
            }
        });
        currentTarget.value = "";
        onChange(event);
        return;
    } // Trigger by composition event, this means we need force change the input value
    if (targetValue !== undefined) {
        event = Object.create(e, {
            target: {
                value: target
            },
            currentTarget: {
                value: target
            }
        });
        target.value = targetValue;
        onChange(event);
        return;
    }
    onChange(event);
}
function triggerFocus(element, option) {
    if (!element) return;
    element.focus(option); // Selection content
    var _ref = option || {}, cursor = _ref.cursor;
    if (cursor) {
        var len = element.value.length;
        switch(cursor){
            case "start":
                element.setSelectionRange(0, 0);
                break;
            case "end":
                element.setSelectionRange(len, len);
                break;
            default:
                element.setSelectionRange(0, len);
        }
    }
}
var Input = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var _classNames, _classNames2, _classNames4;
    var customizePrefixCls = props.prefixCls, _props$bordered = props.bordered, bordered = _props$bordered === void 0 ? true : _props$bordered, customStatus = props.status, customSize = props.size, customDisabled = props.disabled, onBlur = props.onBlur, onFocus = props.onFocus, suffix = props.suffix, allowClear = props.allowClear, addonAfter = props.addonAfter, addonBefore = props.addonBefore, rest = __rest(props, [
        "prefixCls",
        "bordered",
        "status",
        "size",
        "disabled",
        "onBlur",
        "onFocus",
        "suffix",
        "allowClear",
        "addonAfter",
        "addonBefore"
    ]);
    var _React$useContext = (0, _reactDefault.default).useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction, input = _React$useContext.input;
    var prefixCls = getPrefixCls("input", customizePrefixCls);
    var inputRef = (0, _react.useRef)(null); // ===================== Size =====================
    var size = (0, _reactDefault.default).useContext((0, _sizeContextDefault.default));
    var mergedSize = customSize || size; // ===================== Disabled =====================
    var disabled = (0, _reactDefault.default).useContext((0, _disabledContextDefault.default));
    var mergedDisabled = customDisabled || disabled; // ===================== Status =====================
    var _useContext = (0, _react.useContext)((0, _context.FormItemInputContext)), contextStatus = _useContext.status, hasFeedback = _useContext.hasFeedback, feedbackIcon = _useContext.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus); // ===================== Focus warning =====================
    var inputHasPrefixSuffix = (0, _utils.hasPrefixSuffix)(props) || !!hasFeedback;
    var prevHasPrefixSuffix = (0, _react.useRef)(inputHasPrefixSuffix);
    (0, _react.useEffect)(function() {
        var _a;
        if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) (0, _warningDefault.default)(document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input), "Input", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
        prevHasPrefixSuffix.current = inputHasPrefixSuffix;
    }, [
        inputHasPrefixSuffix
    ]); // ===================== Remove Password value =====================
    var removePasswordTimeoutRef = (0, _react.useRef)([]);
    var removePasswordTimeout = function removePasswordTimeout() {
        removePasswordTimeoutRef.current.push(window.setTimeout(function() {
            var _a, _b, _c, _d;
            if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) (_d = inputRef.current) === null || _d === void 0 || _d.input.removeAttribute("value");
        }));
    };
    (0, _react.useEffect)(function() {
        removePasswordTimeout();
        return function() {
            return removePasswordTimeoutRef.current.forEach(function(item) {
                return window.clearTimeout(item);
            });
        };
    }, []);
    var handleBlur = function handleBlur(e) {
        removePasswordTimeout();
        onBlur === null || onBlur === void 0 || onBlur(e);
    };
    var handleFocus = function handleFocus(e) {
        removePasswordTimeout();
        onFocus === null || onFocus === void 0 || onFocus(e);
    };
    var suffixNode = (hasFeedback || suffix) && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, suffix, hasFeedback && feedbackIcon); // Allow clear
    var mergedAllowClear;
    if ((0, _typeofDefault.default)(allowClear) === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) mergedAllowClear = allowClear;
    else if (allowClear) mergedAllowClear = {
        clearIcon: /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _closeCircleFilledDefault.default), null)
    };
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _rcInputDefault.default), (0, _extendsDefault.default)({
        ref: (0, _ref.composeRef)(ref, inputRef),
        prefixCls: prefixCls,
        autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
    }, rest, {
        disabled: mergedDisabled || undefined,
        onBlur: handleBlur,
        onFocus: handleFocus,
        suffix: suffixNode,
        allowClear: mergedAllowClear,
        addonAfter: addonAfter && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _context.NoFormStyle), {
            override: true,
            status: true
        }, addonAfter),
        addonBefore: addonBefore && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _context.NoFormStyle), {
            override: true,
            status: true
        }, addonBefore),
        inputClassName: (0, _classnamesDefault.default)((_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-sm"), mergedSize === "small"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-lg"), mergedSize === "large"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), !inputHasPrefixSuffix && (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
        affixWrapperClassName: (0, _classnamesDefault.default)((_classNames2 = {}, (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === "small"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === "large"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _classNames2), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback)),
        wrapperClassName: (0, _classnamesDefault.default)((0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-group-rtl"), direction === "rtl")),
        groupClassName: (0, _classnamesDefault.default)((_classNames4 = {}, (0, _definePropertyDefault.default)(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), mergedSize === "small"), (0, _definePropertyDefault.default)(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), mergedSize === "large"), (0, _definePropertyDefault.default)(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === "rtl"), _classNames4), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback))
    }));
});
exports.default = Input;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/typeof":"i7HWY","@ant-design/icons/es/icons/CloseCircleFilled":"hNhJu","classnames":"jocGM","rc-input":"fUWB4","rc-util/es/ref":"jS1Z6","react":"21dqq","../config-provider":"iMraF","../config-provider/DisabledContext":"kJAKR","../config-provider/SizeContext":"kxcXW","../form/context":"flRlt","../_util/statusUtils":"gRi8E","../_util/warning":"daUrm","./utils":"bsfuX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUWB4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseInput", ()=>(0, _baseInputDefault.default));
var _baseInput = require("./BaseInput");
var _baseInputDefault = parcelHelpers.interopDefault(_baseInput);
var _input = require("./Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
exports.default = (0, _inputDefault.default);

},{"./BaseInput":"7ndLx","./Input":"3V9ja","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ndLx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _commonUtils = require("./utils/commonUtils");
var BaseInput = function BaseInput(props) {
    var inputElement = props.inputElement, prefixCls = props.prefixCls, prefix = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, style = props.style, affixWrapperClassName = props.affixWrapperClassName, groupClassName = props.groupClassName, wrapperClassName = props.wrapperClassName, disabled = props.disabled, readOnly = props.readOnly, focused = props.focused, triggerFocus = props.triggerFocus, allowClear = props.allowClear, value = props.value, handleReset = props.handleReset, hidden = props.hidden;
    var containerRef = (0, _react.useRef)(null);
    var onInputMouseDown = function onInputMouseDown(e) {
        var _containerRef$current;
        if ((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.contains(e.target)) triggerFocus === null || triggerFocus === void 0 || triggerFocus();
    }; // ================== Clear Icon ================== //
    var getClearIcon = function getClearIcon() {
        var _classNames;
        if (!allowClear) return null;
        var needClear = !disabled && !readOnly && value;
        var clearIconCls = "".concat(prefixCls, "-clear-icon");
        var iconNode = (0, _typeofDefault.default)(allowClear) === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon) ? allowClear.clearIcon : "✖";
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            onClick: handleReset,
            // Do not trigger onBlur when clear input
            // https://github.com/ant-design/ant-design/issues/31200
            onMouseDown: function onMouseDown(e) {
                return e.preventDefault();
            },
            className: (0, _classnamesDefault.default)(clearIconCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(clearIconCls, "-hidden"), !needClear), (0, _definePropertyDefault.default)(_classNames, "".concat(clearIconCls, "-has-suffix"), !!suffix), _classNames)),
            role: "button",
            tabIndex: -1
        }, iconNode);
    };
    var element = /*#__PURE__*/ (0, _react.cloneElement)(inputElement, {
        value: value,
        hidden: hidden
    }); // ================== Prefix & Suffix ================== //
    if ((0, _commonUtils.hasPrefixSuffix)(props)) {
        var _classNames2;
        var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
        var affixWrapperCls = (0, _classnamesDefault.default)(affixWrapperPrefixCls, (_classNames2 = {}, (0, _definePropertyDefault.default)(_classNames2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), (0, _definePropertyDefault.default)(_classNames2, "".concat(affixWrapperPrefixCls, "-focused"), focused), (0, _definePropertyDefault.default)(_classNames2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), (0, _definePropertyDefault.default)(_classNames2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _classNames2), !(0, _commonUtils.hasAddon)(props) && className, affixWrapperClassName);
        var suffixNode = (suffix || allowClear) && /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: "".concat(prefixCls, "-suffix")
        }, getClearIcon(), suffix);
        element = /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: affixWrapperCls,
            style: style,
            hidden: !(0, _commonUtils.hasAddon)(props) && hidden,
            onMouseDown: onInputMouseDown,
            ref: containerRef
        }, prefix && /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: "".concat(prefixCls, "-prefix")
        }, prefix), /*#__PURE__*/ (0, _react.cloneElement)(inputElement, {
            style: null,
            value: value,
            hidden: null
        }), suffixNode);
    } // ================== Addon ================== //
    if ((0, _commonUtils.hasAddon)(props)) {
        var wrapperCls = "".concat(prefixCls, "-group");
        var addonCls = "".concat(wrapperCls, "-addon");
        var mergedWrapperClassName = (0, _classnamesDefault.default)("".concat(prefixCls, "-wrapper"), wrapperCls, wrapperClassName);
        var mergedGroupClassName = (0, _classnamesDefault.default)("".concat(prefixCls, "-group-wrapper"), className, groupClassName); // Need another wrapper for changing display:table to display:inline-block
        // and put style prop in wrapper
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: mergedGroupClassName,
            style: style,
            hidden: hidden
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: mergedWrapperClassName
        }, addonBefore && /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: addonCls
        }, addonBefore), /*#__PURE__*/ (0, _react.cloneElement)(element, {
            style: null,
            hidden: null
        }), addonAfter && /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
            className: addonCls
        }, addonAfter)));
    }
    return element;
};
exports.default = BaseInput;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/typeof":"i7HWY","react":"21dqq","classnames":"jocGM","./utils/commonUtils":"f6GoT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6GoT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasAddon", ()=>hasAddon);
parcelHelpers.export(exports, "hasPrefixSuffix", ()=>hasPrefixSuffix);
parcelHelpers.export(exports, "resolveOnChange", ()=>resolveOnChange);
parcelHelpers.export(exports, "triggerFocus", ()=>triggerFocus);
parcelHelpers.export(exports, "fixControlledValue", ()=>fixControlledValue);
function hasAddon(props) {
    return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange(target, e, onChange, targetValue) {
    if (!onChange) return;
    var event = e;
    if (e.type === "click") {
        // Clone a new target for event.
        // Avoid the following usage, the setQuery method gets the original value.
        //
        // const [query, setQuery] = React.useState('');
        // <Input
        //   allowClear
        //   value={query}
        //   onChange={(e)=> {
        //     setQuery((prevStatus) => e.target.value);
        //   }}
        // />
        var currentTarget = target.cloneNode(true); // click clear icon
        event = Object.create(e, {
            target: {
                value: currentTarget
            },
            currentTarget: {
                value: currentTarget
            }
        });
        currentTarget.value = "";
        onChange(event);
        return;
    } // Trigger by composition event, this means we need force change the input value
    if (targetValue !== undefined) {
        event = Object.create(e, {
            target: {
                value: target
            },
            currentTarget: {
                value: target
            }
        });
        target.value = targetValue;
        onChange(event);
        return;
    }
    onChange(event);
}
function triggerFocus(element, option) {
    if (!element) return;
    element.focus(option); // Selection content
    var _ref = option || {}, cursor = _ref.cursor;
    if (cursor) {
        var len = element.value.length;
        switch(cursor){
            case "start":
                element.setSelectionRange(0, 0);
                break;
            case "end":
                element.setSelectionRange(len, len);
                break;
            default:
                element.setSelectionRange(0, len);
        }
    }
}
function fixControlledValue(value) {
    if (typeof value === "undefined" || value === null) return "";
    return String(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3V9ja":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _baseInput = require("./BaseInput");
var _baseInputDefault = parcelHelpers.interopDefault(_baseInput);
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _commonUtils = require("./utils/commonUtils");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _useMergedState = require("rc-util/es/hooks/useMergedState");
var _useMergedStateDefault = parcelHelpers.interopDefault(_useMergedState);
var _excluded = [
    "autoComplete",
    "onChange",
    "onFocus",
    "onBlur",
    "onPressEnter",
    "onKeyDown",
    "prefixCls",
    "disabled",
    "htmlSize",
    "className",
    "maxLength",
    "suffix",
    "showCount",
    "type",
    "inputClassName"
];
var Input = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var autoComplete = props.autoComplete, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onPressEnter = props.onPressEnter, onKeyDown = props.onKeyDown, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-input" : _props$prefixCls, disabled = props.disabled, htmlSize = props.htmlSize, className = props.className, maxLength = props.maxLength, suffix = props.suffix, showCount = props.showCount, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, inputClassName = props.inputClassName, rest = (0, _objectWithoutPropertiesDefault.default)(props, _excluded);
    var _useMergedState = (0, _useMergedStateDefault.default)(props.defaultValue, {
        value: props.value
    }), _useMergedState2 = (0, _slicedToArrayDefault.default)(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
    var _useState = (0, _react.useState)(false), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), focused = _useState2[0], setFocused = _useState2[1];
    var inputRef = (0, _react.useRef)(null);
    var focus = function focus(option) {
        if (inputRef.current) (0, _commonUtils.triggerFocus)(inputRef.current, option);
    };
    (0, _react.useImperativeHandle)(ref, function() {
        return {
            focus: focus,
            blur: function blur() {
                var _inputRef$current;
                (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.blur();
            },
            setSelectionRange: function setSelectionRange(start, end, direction) {
                var _inputRef$current2;
                (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.setSelectionRange(start, end, direction);
            },
            select: function select() {
                var _inputRef$current3;
                (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || _inputRef$current3.select();
            },
            input: inputRef.current
        };
    });
    (0, _react.useEffect)(function() {
        setFocused(function(prev) {
            return prev && disabled ? false : prev;
        });
    }, [
        disabled
    ]);
    var handleChange = function handleChange(e) {
        if (props.value === undefined) setValue(e.target.value);
        if (inputRef.current) (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
    };
    var handleKeyDown = function handleKeyDown(e) {
        if (onPressEnter && e.key === "Enter") onPressEnter(e);
        onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
    };
    var handleFocus = function handleFocus(e) {
        setFocused(true);
        onFocus === null || onFocus === void 0 || onFocus(e);
    };
    var handleBlur = function handleBlur(e) {
        setFocused(false);
        onBlur === null || onBlur === void 0 || onBlur(e);
    };
    var handleReset = function handleReset(e) {
        setValue("");
        focus();
        if (inputRef.current) (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
    };
    var getInputElement = function getInputElement() {
        // Fix https://fb.me/react-unknown-prop
        var otherProps = (0, _omitDefault.default)(props, [
            "prefixCls",
            "onPressEnter",
            "addonBefore",
            "addonAfter",
            "prefix",
            "suffix",
            "allowClear",
            // specify either the value prop, or the defaultValue prop, but not both.
            "defaultValue",
            "showCount",
            "affixWrapperClassName",
            "groupClassName",
            "inputClassName",
            "wrapperClassName",
            "htmlSize"
        ]);
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("input", (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({
            autoComplete: autoComplete
        }, otherProps), {}, {
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            className: (0, _classnamesDefault.default)(prefixCls, (0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-disabled"), disabled), inputClassName, !(0, _commonUtils.hasAddon)(props) && !(0, _commonUtils.hasPrefixSuffix)(props) && className),
            ref: inputRef,
            size: htmlSize,
            type: type
        }));
    };
    var getSuffix = function getSuffix() {
        // Max length value
        var hasMaxLength = Number(maxLength) > 0;
        if (suffix || showCount) {
            var valueLength = (0, _toConsumableArrayDefault.default)((0, _commonUtils.fixControlledValue)(value)).length;
            var dataCount = (0, _typeofDefault.default)(showCount) === "object" ? showCount.formatter({
                count: valueLength,
                maxLength: maxLength
            }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : "");
            return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, !!showCount && /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
                className: (0, _classnamesDefault.default)("".concat(prefixCls, "-show-count-suffix"), (0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix))
            }, dataCount), suffix);
        }
        return null;
    };
    return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _baseInputDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, rest), {}, {
        prefixCls: prefixCls,
        className: className,
        inputElement: getInputElement(),
        handleReset: handleReset,
        value: (0, _commonUtils.fixControlledValue)(value),
        focused: focused,
        triggerFocus: focus,
        suffix: getSuffix(),
        disabled: disabled
    }));
});
exports.default = Input;

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/objectWithoutProperties":"25tJ4","react":"21dqq","./BaseInput":"7ndLx","rc-util/es/omit":"e7Re6","./utils/commonUtils":"f6GoT","classnames":"jocGM","rc-util/es/hooks/useMergedState":"guGeI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRi8E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStatusClassNames", ()=>getStatusClassNames);
parcelHelpers.export(exports, "getMergedStatus", ()=>getMergedStatus);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _type = require("./type");
var InputStatuses = (0, _type.tuple)("warning", "error", "");
function getStatusClassNames(prefixCls, status, hasFeedback) {
    var _classNames;
    return (0, _classnamesDefault.default)((_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-status-success"), status === "success"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-status-warning"), status === "warning"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-status-error"), status === "error"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-status-validating"), status === "validating"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-has-feedback"), hasFeedback), _classNames));
}
var getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
    return customStatus || contextStatus;
};

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","classnames":"jocGM","./type":"eWuNf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsfuX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line import/prefer-default-export
parcelHelpers.export(exports, "hasPrefixSuffix", ()=>hasPrefixSuffix);
function hasPrefixSuffix(props) {
    return !!(props.prefix || props.suffix || props.allowClear);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNRIk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _eyeInvisibleOutlined = require("@ant-design/icons/es/icons/EyeInvisibleOutlined");
var _eyeInvisibleOutlinedDefault = parcelHelpers.interopDefault(_eyeInvisibleOutlined);
var _eyeOutlined = require("@ant-design/icons/es/icons/EyeOutlined");
var _eyeOutlinedDefault = parcelHelpers.interopDefault(_eyeOutlined);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _react = require("react");
var _configProvider = require("../config-provider");
var _input = require("./Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var ActionMap = {
    click: "onClick",
    hover: "onMouseOver"
};
var Password = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var _useState = (0, _react.useState)(false), _useState2 = (0, _slicedToArrayDefault.default)(_useState, 2), visible = _useState2[0], setVisible = _useState2[1];
    var onVisibleChange = function onVisibleChange() {
        var disabled = props.disabled;
        if (disabled) return;
        setVisible(!visible);
    };
    var getIcon = function getIcon(prefixCls) {
        var _iconProps;
        var action = props.action, _props$iconRender = props.iconRender, iconRender = _props$iconRender === void 0 ? function() {
            return null;
        } : _props$iconRender;
        var iconTrigger = ActionMap[action] || "";
        var icon = iconRender(visible);
        var iconProps = (_iconProps = {}, (0, _definePropertyDefault.default)(_iconProps, iconTrigger, onVisibleChange), (0, _definePropertyDefault.default)(_iconProps, "className", "".concat(prefixCls, "-icon")), (0, _definePropertyDefault.default)(_iconProps, "key", "passwordIcon"), (0, _definePropertyDefault.default)(_iconProps, "onMouseDown", function onMouseDown(e) {
            // Prevent focused state lost
            // https://github.com/ant-design/ant-design/issues/15173
            e.preventDefault();
        }), (0, _definePropertyDefault.default)(_iconProps, "onMouseUp", function onMouseUp(e) {
            // Prevent caret position change
            // https://github.com/ant-design/ant-design/issues/23524
            e.preventDefault();
        }), _iconProps);
        return /*#__PURE__*/ _react.cloneElement(/*#__PURE__*/ _react.isValidElement(icon) ? icon : /*#__PURE__*/ _react.createElement("span", null, icon), iconProps);
    };
    var renderPassword = function renderPassword(_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var className = props.className, customizePrefixCls = props.prefixCls, customizeInputPrefixCls = props.inputPrefixCls, size = props.size, visibilityToggle = props.visibilityToggle, restProps = __rest(props, [
            "className",
            "prefixCls",
            "inputPrefixCls",
            "size",
            "visibilityToggle"
        ]);
        var inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
        var prefixCls = getPrefixCls("input-password", customizePrefixCls);
        var suffixIcon = visibilityToggle && getIcon(prefixCls);
        var inputClassName = (0, _classnamesDefault.default)(prefixCls, className, (0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-").concat(size), !!size));
        var omittedProps = (0, _extendsDefault.default)((0, _extendsDefault.default)({}, (0, _omitDefault.default)(restProps, [
            "suffix",
            "iconRender"
        ])), {
            type: visible ? "text" : "password",
            className: inputClassName,
            prefixCls: inputPrefixCls,
            suffix: suffixIcon
        });
        if (size) omittedProps.size = size;
        return /*#__PURE__*/ _react.createElement((0, _inputDefault.default), (0, _extendsDefault.default)({
            ref: ref
        }, omittedProps));
    };
    return /*#__PURE__*/ _react.createElement((0, _configProvider.ConfigConsumer), null, renderPassword);
});
Password.defaultProps = {
    action: "click",
    visibilityToggle: true,
    iconRender: function iconRender(visible) {
        return visible ? /*#__PURE__*/ _react.createElement((0, _eyeOutlinedDefault.default), null) : /*#__PURE__*/ _react.createElement((0, _eyeInvisibleOutlinedDefault.default), null);
    }
};
Password.displayName = "Password";
exports.default = Password;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@ant-design/icons/es/icons/EyeInvisibleOutlined":"1QXQM","@ant-design/icons/es/icons/EyeOutlined":"8jEZU","classnames":"jocGM","rc-util/es/omit":"e7Re6","react":"21dqq","../config-provider":"iMraF","./Input":"hbGjC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QXQM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _eyeInvisibleOutlined = require("@ant-design/icons-svg/es/asn/EyeInvisibleOutlined");
var _eyeInvisibleOutlinedDefault = parcelHelpers.interopDefault(_eyeInvisibleOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _eyeInvisibleOutlinedDefault.default)
    }));
};
EyeInvisibleOutlined.displayName = "EyeInvisibleOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(EyeInvisibleOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/EyeInvisibleOutlined":"jfVpA","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfVpA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var EyeInvisibleOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
                }
            },
            {
                "tag": "path",
                "attrs": {
                    "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
                }
            }
        ]
    },
    "name": "eye-invisible",
    "theme": "outlined"
};
exports.default = EyeInvisibleOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jEZU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _eyeOutlined = require("@ant-design/icons-svg/es/asn/EyeOutlined");
var _eyeOutlinedDefault = parcelHelpers.interopDefault(_eyeOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var EyeOutlined = function EyeOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _eyeOutlinedDefault.default)
    }));
};
EyeOutlined.displayName = "EyeOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(EyeOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/EyeOutlined":"eZYMR","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZYMR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var EyeOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                }
            }
        ]
    },
    "name": "eye",
    "theme": "outlined"
};
exports.default = EyeOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9DqIl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _searchOutlined = require("@ant-design/icons/es/icons/SearchOutlined");
var _searchOutlinedDefault = parcelHelpers.interopDefault(_searchOutlined);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _ref = require("rc-util/es/ref");
var _react = require("react");
var _button = require("../button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _configProvider = require("../config-provider");
var _sizeContext = require("../config-provider/SizeContext");
var _sizeContextDefault = parcelHelpers.interopDefault(_sizeContext);
var _reactNode = require("../_util/reactNode");
var _input = require("./Input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var Search = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var _classNames;
    var customizePrefixCls = props.prefixCls, customizeInputPrefixCls = props.inputPrefixCls, className = props.className, customizeSize = props.size, suffix = props.suffix, _props$enterButton = props.enterButton, enterButton = _props$enterButton === void 0 ? false : _props$enterButton, addonAfter = props.addonAfter, loading = props.loading, disabled = props.disabled, customOnSearch = props.onSearch, customOnChange = props.onChange, onCompositionStart = props.onCompositionStart, onCompositionEnd = props.onCompositionEnd, restProps = __rest(props, [
        "prefixCls",
        "inputPrefixCls",
        "className",
        "size",
        "suffix",
        "enterButton",
        "addonAfter",
        "loading",
        "disabled",
        "onSearch",
        "onChange",
        "onCompositionStart",
        "onCompositionEnd"
    ]);
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var contextSize = _react.useContext((0, _sizeContextDefault.default));
    var composedRef = _react.useRef(false);
    var size = customizeSize || contextSize;
    var inputRef = _react.useRef(null);
    var onChange = function onChange(e) {
        if (e && e.target && e.type === "click" && customOnSearch) customOnSearch(e.target.value, e);
        if (customOnChange) customOnChange(e);
    };
    var onMouseDown = function onMouseDown(e) {
        var _a;
        if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) e.preventDefault();
    };
    var onSearch = function onSearch(e) {
        var _a, _b;
        if (customOnSearch) customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e);
    };
    var onPressEnter = function onPressEnter(e) {
        if (composedRef.current) return;
        onSearch(e);
    };
    var prefixCls = getPrefixCls("input-search", customizePrefixCls);
    var inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
    var searchIcon = typeof enterButton === "boolean" ? /*#__PURE__*/ _react.createElement((0, _searchOutlinedDefault.default), null) : null;
    var btnClassName = "".concat(prefixCls, "-button");
    var button;
    var enterButtonAsElement = enterButton || {};
    var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
    if (isAntdButton || enterButtonAsElement.type === "button") button = (0, _reactNode.cloneElement)(enterButtonAsElement, (0, _extendsDefault.default)({
        onMouseDown: onMouseDown,
        onClick: function onClick(e) {
            var _a, _b;
            (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 || _b.call(_a, e);
            onSearch(e);
        },
        key: "enterButton"
    }, isAntdButton ? {
        className: btnClassName,
        size: size
    } : {}));
    else button = /*#__PURE__*/ _react.createElement((0, _buttonDefault.default), {
        className: btnClassName,
        type: enterButton ? "primary" : undefined,
        size: size,
        disabled: disabled,
        key: "enterButton",
        onMouseDown: onMouseDown,
        onClick: onSearch,
        loading: loading,
        icon: searchIcon
    }, enterButton);
    if (addonAfter) button = [
        button,
        (0, _reactNode.cloneElement)(addonAfter, {
            key: "addonAfter"
        })
    ];
    var cls = (0, _classnamesDefault.default)(prefixCls, (_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-").concat(size), !!size), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-with-button"), !!enterButton), _classNames), className);
    var handleOnCompositionStart = function handleOnCompositionStart(e) {
        composedRef.current = true;
        onCompositionStart === null || onCompositionStart === void 0 || onCompositionStart(e);
    };
    var handleOnCompositionEnd = function handleOnCompositionEnd(e) {
        composedRef.current = false;
        onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e);
    };
    return /*#__PURE__*/ _react.createElement((0, _inputDefault.default), (0, _extendsDefault.default)({
        ref: (0, _ref.composeRef)(inputRef, ref),
        onPressEnter: onPressEnter
    }, restProps, {
        size: size,
        onCompositionStart: handleOnCompositionStart,
        onCompositionEnd: handleOnCompositionEnd,
        prefixCls: inputPrefixCls,
        addonAfter: button,
        suffix: suffix,
        onChange: onChange,
        className: cls,
        disabled: disabled
    }));
});
Search.displayName = "Search";
exports.default = Search;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","@ant-design/icons/es/icons/SearchOutlined":"eGBoV","classnames":"jocGM","rc-util/es/ref":"jS1Z6","react":"21dqq","../button":"SbZy4","../config-provider":"iMraF","../config-provider/SizeContext":"kxcXW","../_util/reactNode":"d1mV0","./Input":"hbGjC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGBoV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var _react = require("react");
var _searchOutlined = require("@ant-design/icons-svg/es/asn/SearchOutlined");
var _searchOutlinedDefault = parcelHelpers.interopDefault(_searchOutlined);
var _antdIcon = require("../components/AntdIcon");
var _antdIconDefault = parcelHelpers.interopDefault(_antdIcon);
var SearchOutlined = function SearchOutlined(props, ref) {
    return /*#__PURE__*/ _react.createElement((0, _antdIconDefault.default), (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, props), {}, {
        ref: ref,
        icon: (0, _searchOutlinedDefault.default)
    }));
};
SearchOutlined.displayName = "SearchOutlined";
exports.default = /*#__PURE__*/ _react.forwardRef(SearchOutlined);

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","react":"21dqq","@ant-design/icons-svg/es/asn/SearchOutlined":"d4AuG","../components/AntdIcon":"kkong","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4AuG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This icon file is generated automatically.
var SearchOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                }
            }
        ]
    },
    "name": "search",
    "theme": "outlined"
};
exports.default = SearchOutlined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV8jB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _rcTextarea = require("rc-textarea");
var _rcTextareaDefault = parcelHelpers.interopDefault(_rcTextarea);
var _useMergedState = require("rc-util/es/hooks/useMergedState");
var _useMergedStateDefault = parcelHelpers.interopDefault(_useMergedState);
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _react = require("react");
var _configProvider = require("../config-provider");
var _disabledContext = require("../config-provider/DisabledContext");
var _disabledContextDefault = parcelHelpers.interopDefault(_disabledContext);
var _sizeContext = require("../config-provider/SizeContext");
var _sizeContextDefault = parcelHelpers.interopDefault(_sizeContext);
var _context = require("../form/context");
var _statusUtils = require("../_util/statusUtils");
var _clearableLabeledInput = require("./ClearableLabeledInput");
var _clearableLabeledInputDefault = parcelHelpers.interopDefault(_clearableLabeledInput);
var _input = require("./Input");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function fixEmojiLength(value, maxLength) {
    return (0, _toConsumableArrayDefault.default)(value || "").slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
    var newTriggerValue = triggerValue;
    if (isCursorInEnd) // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
    else if ((0, _toConsumableArrayDefault.default)(preValue || "").length < triggerValue.length && (0, _toConsumableArrayDefault.default)(triggerValue || "").length > maxLength) // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
    return newTriggerValue;
}
var TextArea = /*#__PURE__*/ _react.forwardRef(function(_a, ref) {
    var _classNames;
    var customizePrefixCls = _a.prefixCls, _a$bordered = _a.bordered, bordered = _a$bordered === void 0 ? true : _a$bordered, _a$showCount = _a.showCount, showCount = _a$showCount === void 0 ? false : _a$showCount, maxLength = _a.maxLength, className = _a.className, style = _a.style, customizeSize = _a.size, customDisabled = _a.disabled, onCompositionStart = _a.onCompositionStart, onCompositionEnd = _a.onCompositionEnd, onChange = _a.onChange, customStatus = _a.status, props = __rest(_a, [
        "prefixCls",
        "bordered",
        "showCount",
        "maxLength",
        "className",
        "style",
        "size",
        "disabled",
        "onCompositionStart",
        "onCompositionEnd",
        "onChange",
        "status"
    ]);
    var _React$useContext = _react.useContext((0, _configProvider.ConfigContext)), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var size = _react.useContext((0, _sizeContextDefault.default)); // ===================== Disabled =====================
    var disabled = _react.useContext((0, _disabledContextDefault.default));
    var mergedDisabled = customDisabled || disabled;
    var _React$useContext2 = _react.useContext((0, _context.FormItemInputContext)), contextStatus = _React$useContext2.status, hasFeedback = _React$useContext2.hasFeedback, isFormItemInput = _React$useContext2.isFormItemInput, feedbackIcon = _React$useContext2.feedbackIcon;
    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
    var innerRef = _react.useRef(null);
    var clearableInputRef = _react.useRef(null);
    var _React$useState = _react.useState(false), _React$useState2 = (0, _slicedToArrayDefault.default)(_React$useState, 2), compositing = _React$useState2[0], setCompositing = _React$useState2[1];
    var oldCompositionValueRef = _react.useRef();
    var oldSelectionStartRef = _react.useRef(0);
    var _useMergedState = (0, _useMergedStateDefault.default)(props.defaultValue, {
        value: props.value
    }), _useMergedState2 = (0, _slicedToArrayDefault.default)(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
    var hidden = props.hidden;
    var handleSetValue = function handleSetValue(val, callback) {
        if (props.value === undefined) {
            setValue(val);
            callback === null || callback === void 0 || callback();
        }
    }; // =========================== Value Update ===========================
    // Max length value
    var hasMaxLength = Number(maxLength) > 0;
    var onInternalCompositionStart = function onInternalCompositionStart(e) {
        setCompositing(true); // 拼音输入前保存一份旧值
        oldCompositionValueRef.current = value; // 保存旧的光标位置
        oldSelectionStartRef.current = e.currentTarget.selectionStart;
        onCompositionStart === null || onCompositionStart === void 0 || onCompositionStart(e);
    };
    var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
        var _a;
        setCompositing(false);
        var triggerValue = e.currentTarget.value;
        if (hasMaxLength) {
            var isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a = oldCompositionValueRef.current) === null || _a === void 0 ? void 0 : _a.length);
            triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
        } // Patch composition onChange when value changed
        if (triggerValue !== value) {
            handleSetValue(triggerValue);
            (0, _input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
        }
        onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e);
    };
    var handleChange = function handleChange(e) {
        var triggerValue = e.target.value;
        if (!compositing && hasMaxLength) {
            // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
            var isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
            triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
        }
        handleSetValue(triggerValue);
        (0, _input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
    }; // ============================== Reset ===============================
    var handleReset = function handleReset(e) {
        var _a, _b, _c;
        handleSetValue("");
        (_a = innerRef.current) === null || _a === void 0 || _a.focus();
        (0, _input.resolveOnChange)((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
    };
    var prefixCls = getPrefixCls("input", customizePrefixCls);
    _react.useImperativeHandle(ref, function() {
        var _a;
        return {
            resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
            focus: function focus(option) {
                var _a, _b;
                (0, _input.triggerFocus)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
            },
            blur: function blur() {
                var _a;
                return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
            }
        };
    });
    var textArea = /*#__PURE__*/ _react.createElement((0, _rcTextareaDefault.default), (0, _extendsDefault.default)({}, (0, _omitDefault.default)(props, [
        "allowClear"
    ]), {
        disabled: mergedDisabled,
        className: (0, _classnamesDefault.default)((_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0, _definePropertyDefault.default)(_classNames, className, className && !showCount), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-sm"), size === "small" || customizeSize === "small"), (0, _definePropertyDefault.default)(_classNames, "".concat(prefixCls, "-lg"), size === "large" || customizeSize === "large"), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
        style: showCount ? undefined : style,
        prefixCls: prefixCls,
        onCompositionStart: onInternalCompositionStart,
        onChange: handleChange,
        onCompositionEnd: onInternalCompositionEnd,
        ref: innerRef
    }));
    var val = (0, _input.fixControlledValue)(value);
    if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
     // TextArea
    var textareaNode = /*#__PURE__*/ _react.createElement((0, _clearableLabeledInputDefault.default), (0, _extendsDefault.default)({
        disabled: mergedDisabled
    }, props, {
        prefixCls: prefixCls,
        direction: direction,
        inputType: "text",
        value: val,
        element: textArea,
        handleReset: handleReset,
        ref: clearableInputRef,
        bordered: bordered,
        status: customStatus,
        style: showCount ? undefined : style
    })); // Only show text area wrapper when needed
    if (showCount || hasFeedback) {
        var _classNames2;
        var valueLength = (0, _toConsumableArrayDefault.default)(val).length;
        var dataCount = "";
        if ((0, _typeofDefault.default)(showCount) === "object") dataCount = showCount.formatter({
            count: valueLength,
            maxLength: maxLength
        });
        else dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : "");
        return /*#__PURE__*/ _react.createElement("div", {
            hidden: hidden,
            className: (0, _classnamesDefault.default)("".concat(prefixCls, "-textarea"), (_classNames2 = {}, (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-textarea-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-textarea-show-count"), showCount), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-textarea-in-form-item"), isFormItemInput), _classNames2), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-textarea"), mergedStatus, hasFeedback), className),
            style: style,
            "data-count": dataCount
        }, textareaNode, hasFeedback && /*#__PURE__*/ _react.createElement("span", {
            className: "".concat(prefixCls, "-textarea-suffix")
        }, feedbackIcon));
    }
    return textareaNode;
});
exports.default = TextArea;

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/slicedToArray":"cBZWN","@babel/runtime/helpers/esm/toConsumableArray":"bCmCj","classnames":"jocGM","rc-textarea":"d35Ne","rc-util/es/hooks/useMergedState":"guGeI","rc-util/es/omit":"e7Re6","react":"21dqq","../config-provider":"iMraF","../config-provider/DisabledContext":"kJAKR","../config-provider/SizeContext":"kxcXW","../form/context":"flRlt","../_util/statusUtils":"gRi8E","./ClearableLabeledInput":"5Px5C","./Input":"hbGjC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d35Ne":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizableTextArea", ()=>(0, _resizableTextAreaDefault.default));
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var _resizableTextArea = require("./ResizableTextArea");
var _resizableTextAreaDefault = parcelHelpers.interopDefault(_resizableTextArea);
var TextArea = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(TextArea, _React$Component);
    var _super = (0, _createSuperDefault.default)(TextArea);
    function TextArea(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, TextArea);
        _this = _super.call(this, props);
        _this.resizableTextArea = void 0;
        _this.focus = function() {
            _this.resizableTextArea.textArea.focus();
        };
        _this.saveTextArea = function(resizableTextArea) {
            _this.resizableTextArea = resizableTextArea;
        };
        _this.handleChange = function(e) {
            var onChange = _this.props.onChange;
            _this.setValue(e.target.value, function() {
                _this.resizableTextArea.resizeTextarea();
            });
            if (onChange) onChange(e);
        };
        _this.handleKeyDown = function(e) {
            var _this$props = _this.props, onPressEnter = _this$props.onPressEnter, onKeyDown = _this$props.onKeyDown;
            if (e.keyCode === 13 && onPressEnter) onPressEnter(e);
            if (onKeyDown) onKeyDown(e);
        };
        var value = typeof props.value === "undefined" || props.value === null ? props.defaultValue : props.value;
        _this.state = {
            value: value
        };
        return _this;
    }
    (0, _createClassDefault.default)(TextArea, [
        {
            key: "setValue",
            value: function setValue(value, callback) {
                if (!("value" in this.props)) this.setState({
                    value: value
                }, callback);
            }
        },
        {
            key: "blur",
            value: function blur() {
                this.resizableTextArea.textArea.blur();
            }
        },
        {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.createElement((0, _resizableTextAreaDefault.default), (0, _extendsDefault.default)({}, this.props, {
                    value: this.state.value,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange,
                    ref: this.saveTextArea
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps) {
                if ("value" in nextProps) return {
                    value: nextProps.value
                };
                return null;
            }
        }
    ]);
    return TextArea;
}(_react.Component);
exports.default = TextArea;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","./ResizableTextArea":"9oS3H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oS3H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
var _rcResizeObserver = require("rc-resize-observer");
var _rcResizeObserverDefault = parcelHelpers.interopDefault(_rcResizeObserver);
var _omit = require("rc-util/es/omit");
var _omitDefault = parcelHelpers.interopDefault(_omit);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _calculateNodeHeight = require("./calculateNodeHeight");
var _calculateNodeHeightDefault = parcelHelpers.interopDefault(_calculateNodeHeight);
var _shallowequal = require("shallowequal"); // eslint-disable-next-line @typescript-eslint/naming-convention
var _shallowequalDefault = parcelHelpers.interopDefault(_shallowequal);
var RESIZE_STATUS;
(function(RESIZE_STATUS) {
    RESIZE_STATUS[RESIZE_STATUS["NONE"] = 0] = "NONE";
    RESIZE_STATUS[RESIZE_STATUS["RESIZING"] = 1] = "RESIZING";
    RESIZE_STATUS[RESIZE_STATUS["RESIZED"] = 2] = "RESIZED";
})(RESIZE_STATUS || (RESIZE_STATUS = {}));
var ResizableTextArea = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(ResizableTextArea, _React$Component);
    var _super = (0, _createSuperDefault.default)(ResizableTextArea);
    function ResizableTextArea(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, ResizableTextArea);
        _this = _super.call(this, props);
        _this.nextFrameActionId = void 0;
        _this.resizeFrameId = void 0;
        _this.textArea = void 0;
        _this.saveTextArea = function(textArea) {
            _this.textArea = textArea;
        };
        _this.handleResize = function(size) {
            var resizeStatus = _this.state.resizeStatus;
            var _this$props = _this.props, autoSize = _this$props.autoSize, onResize = _this$props.onResize;
            if (resizeStatus !== RESIZE_STATUS.NONE) return;
            if (typeof onResize === "function") onResize(size);
            if (autoSize) _this.resizeOnNextFrame();
        };
        _this.resizeOnNextFrame = function() {
            cancelAnimationFrame(_this.nextFrameActionId);
            _this.nextFrameActionId = requestAnimationFrame(_this.resizeTextarea);
        };
        _this.resizeTextarea = function() {
            var autoSize = _this.props.autoSize;
            if (!autoSize || !_this.textArea) return;
            var minRows = autoSize.minRows, maxRows = autoSize.maxRows;
            var textareaStyles = (0, _calculateNodeHeightDefault.default)(_this.textArea, false, minRows, maxRows);
            _this.setState({
                textareaStyles: textareaStyles,
                resizeStatus: RESIZE_STATUS.RESIZING
            }, function() {
                cancelAnimationFrame(_this.resizeFrameId);
                _this.resizeFrameId = requestAnimationFrame(function() {
                    _this.setState({
                        resizeStatus: RESIZE_STATUS.RESIZED
                    }, function() {
                        _this.resizeFrameId = requestAnimationFrame(function() {
                            _this.setState({
                                resizeStatus: RESIZE_STATUS.NONE
                            });
                            _this.fixFirefoxAutoScroll();
                        });
                    });
                });
            });
        };
        _this.renderTextArea = function() {
            var _this$props2 = _this.props, _this$props2$prefixCl = _this$props2.prefixCls, prefixCls = _this$props2$prefixCl === void 0 ? "rc-textarea" : _this$props2$prefixCl, autoSize = _this$props2.autoSize, onResize = _this$props2.onResize, className = _this$props2.className, disabled = _this$props2.disabled;
            var _this$state = _this.state, textareaStyles = _this$state.textareaStyles, resizeStatus = _this$state.resizeStatus;
            var otherProps = (0, _omitDefault.default)(_this.props, [
                "prefixCls",
                "onPressEnter",
                "autoSize",
                "defaultValue",
                "onResize"
            ]);
            var cls = (0, _classnamesDefault.default)(prefixCls, className, (0, _definePropertyDefault.default)({}, "".concat(prefixCls, "-disabled"), disabled)); // Fix https://github.com/ant-design/ant-design/issues/6776
            // Make sure it could be reset when using form.getFieldDecorator
            if ("value" in otherProps) otherProps.value = otherProps.value || "";
            var style = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, _this.props.style), textareaStyles), resizeStatus === RESIZE_STATUS.RESIZING ? // We need to define this separately.
            {
                overflowX: "hidden",
                overflowY: "hidden"
            } : null);
            return /*#__PURE__*/ _react.createElement((0, _rcResizeObserverDefault.default), {
                onResize: _this.handleResize,
                disabled: !(autoSize || onResize)
            }, /*#__PURE__*/ _react.createElement("textarea", (0, _extendsDefault.default)({}, otherProps, {
                className: cls,
                style: style,
                ref: _this.saveTextArea
            })));
        };
        _this.state = {
            textareaStyles: {},
            resizeStatus: RESIZE_STATUS.NONE
        };
        return _this;
    }
    (0, _createClassDefault.default)(ResizableTextArea, [
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                // Re-render with the new content or new autoSize property then recalculate the height as required.
                if (prevProps.value !== this.props.value || !(0, _shallowequalDefault.default)(prevProps.autoSize, this.props.autoSize)) this.resizeTextarea();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                cancelAnimationFrame(this.nextFrameActionId);
                cancelAnimationFrame(this.resizeFrameId);
            } // https://github.com/ant-design/ant-design/issues/21870
        },
        {
            key: "fixFirefoxAutoScroll",
            value: function fixFirefoxAutoScroll() {
                try {
                    if (document.activeElement === this.textArea) {
                        var currentStart = this.textArea.selectionStart;
                        var currentEnd = this.textArea.selectionEnd;
                        this.textArea.setSelectionRange(currentStart, currentEnd);
                    }
                } catch (e) {
                // Failed to read the 'selectionStart' property from 'HTMLInputElement'
                // http://stackoverflow.com/q/21177489/3040605
                }
            }
        },
        {
            key: "render",
            value: function render() {
                return this.renderTextArea();
            }
        }
    ]);
    return ResizableTextArea;
}(_react.Component);
exports.default = ResizableTextArea;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","rc-resize-observer":"gxwi9","rc-util/es/omit":"e7Re6","classnames":"jocGM","./calculateNodeHeight":"7LjA6","shallowequal":"fjwkp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxwi9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _react = require("react");
var _toArray = require("rc-util/es/Children/toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _warning = require("rc-util/es/warning");
var _singleObserver = require("./SingleObserver");
var _singleObserverDefault = parcelHelpers.interopDefault(_singleObserver);
var _collection = require("./Collection");
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver(props) {
    var children = props.children;
    var childNodes = typeof children === "function" ? [
        children
    ] : (0, _toArrayDefault.default)(children);
    if (childNodes.length > 1) (0, _warning.warning)(false, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.");
    else if (childNodes.length === 0) (0, _warning.warning)(false, "`children` of ResizeObserver is empty. Nothing is in observe.");
    return childNodes.map(function(child, index) {
        var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
        return /*#__PURE__*/ _react.createElement((0, _singleObserverDefault.default), (0, _extendsDefault.default)({}, props, {
            key: key
        }), child);
    });
}
ResizeObserver.Collection = (0, _collection.Collection);
exports.default = ResizeObserver;

},{"@babel/runtime/helpers/esm/extends":"fTBFS","react":"21dqq","rc-util/es/Children/toArray":"itYV7","rc-util/es/warning":"c7oua","./SingleObserver":"hB21e","./Collection":"imrLy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hB21e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _ref = require("rc-util/es/ref");
var _react = require("react");
var _findDOMNode = require("rc-util/es/Dom/findDOMNode");
var _findDOMNodeDefault = parcelHelpers.interopDefault(_findDOMNode);
var _observerUtil = require("../utils/observerUtil");
var _domWrapper = require("./DomWrapper");
var _domWrapperDefault = parcelHelpers.interopDefault(_domWrapper);
var _collection = require("../Collection");
function SingleObserver(props) {
    var children = props.children, disabled = props.disabled;
    var elementRef = _react.useRef(null);
    var wrapperRef = _react.useRef(null);
    var onCollectionResize = _react.useContext((0, _collection.CollectionContext)); // =========================== Children ===========================
    var isRenderProps = typeof children === "function";
    var mergedChildren = isRenderProps ? children(elementRef) : children; // ============================= Size =============================
    var sizeRef = _react.useRef({
        width: -1,
        height: -1,
        offsetWidth: -1,
        offsetHeight: -1
    }); // ============================= Ref ==============================
    var canRef = !isRenderProps && /*#__PURE__*/ _react.isValidElement(mergedChildren) && (0, _ref.supportRef)(mergedChildren);
    var originRef = canRef ? mergedChildren.ref : null;
    var mergedRef = _react.useMemo(function() {
        return (0, _ref.composeRef)(originRef, elementRef);
    }, [
        originRef,
        elementRef
    ]); // =========================== Observe ============================
    var propsRef = _react.useRef(props);
    propsRef.current = props; // Handler
    var onInternalResize = _react.useCallback(function(target) {
        var _propsRef$current = propsRef.current, onResize = _propsRef$current.onResize, data = _propsRef$current.data;
        var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
        var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
        /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */ var fixedWidth = Math.floor(width);
        var fixedHeight = Math.floor(height);
        if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
            var size = {
                width: fixedWidth,
                height: fixedHeight,
                offsetWidth: offsetWidth,
                offsetHeight: offsetHeight
            };
            sizeRef.current = size; // IE is strange, right?
            var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
            var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
            var sizeInfo = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, size), {}, {
                offsetWidth: mergedOffsetWidth,
                offsetHeight: mergedOffsetHeight
            }); // Let collection know what happened
            onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
            if (onResize) // defer the callback but not defer to next frame
            Promise.resolve().then(function() {
                onResize(sizeInfo, target);
            });
        }
    }, []); // Dynamic observe
    _react.useEffect(function() {
        var currentElement = (0, _findDOMNodeDefault.default)(elementRef.current) || (0, _findDOMNodeDefault.default)(wrapperRef.current);
        if (currentElement && !disabled) (0, _observerUtil.observe)(currentElement, onInternalResize);
        return function() {
            return (0, _observerUtil.unobserve)(currentElement, onInternalResize);
        };
    }, [
        elementRef.current,
        disabled
    ]); // ============================ Render ============================
    return /*#__PURE__*/ _react.createElement((0, _domWrapperDefault.default), {
        ref: wrapperRef
    }, canRef ? /*#__PURE__*/ _react.cloneElement(mergedChildren, {
        ref: mergedRef
    }) : mergedChildren);
}
exports.default = SingleObserver;

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","rc-util/es/ref":"jS1Z6","react":"21dqq","rc-util/es/Dom/findDOMNode":"3PTYf","../utils/observerUtil":"auQdi","./DomWrapper":"1eGyB","../Collection":"imrLy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"auQdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_el", ()=>_el);
parcelHelpers.export(exports, "_rs", ()=>_rs);
// ============================== Observe ==============================
parcelHelpers.export(exports, "observe", ()=>observe);
parcelHelpers.export(exports, "unobserve", ()=>unobserve);
var _resizeObserverPolyfill = require("resize-observer-polyfill"); // =============================== Const ===============================
var _resizeObserverPolyfillDefault = parcelHelpers.interopDefault(_resizeObserverPolyfill);
var elementListeners = new Map();
function onResize(entities) {
    entities.forEach(function(entity) {
        var _elementListeners$get;
        var target = entity.target;
        (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
            return listener(target);
        });
    });
} // Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new (0, _resizeObserverPolyfillDefault.default)(onResize); // Dev env only
var _el = elementListeners; // eslint-disable-line
var _rs = onResize; // eslint-disable-line
function observe(element, callback) {
    if (!elementListeners.has(element)) {
        elementListeners.set(element, new Set());
        resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
    if (elementListeners.has(element)) {
        elementListeners.get(element).delete(callback);
        if (!elementListeners.get(element).size) {
            resizeObserver.unobserve(element);
            elementListeners.delete(element);
        }
    }
}

},{"resize-observer-polyfill":"6kpvB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eGyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DomWrapper);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _react = require("react");
/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */ var DomWrapper = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(DomWrapper, _React$Component);
    var _super = (0, _createSuperDefault.default)(DomWrapper);
    function DomWrapper() {
        (0, _classCallCheckDefault.default)(this, DomWrapper);
        return _super.apply(this, arguments);
    }
    (0, _createClassDefault.default)(DomWrapper, [
        {
            key: "render",
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return DomWrapper;
}(_react.Component);

},{"@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"imrLy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollectionContext", ()=>CollectionContext);
/**
 * Collect all the resize event from children ResizeObserver
 */ parcelHelpers.export(exports, "Collection", ()=>Collection);
var _react = require("react");
var CollectionContext = /*#__PURE__*/ _react.createContext(null);
function Collection(_ref) {
    var children = _ref.children, onBatchResize = _ref.onBatchResize;
    var resizeIdRef = _react.useRef(0);
    var resizeInfosRef = _react.useRef([]);
    var onCollectionResize = _react.useContext(CollectionContext);
    var onResize = _react.useCallback(function(size, element, data) {
        resizeIdRef.current += 1;
        var currentId = resizeIdRef.current;
        resizeInfosRef.current.push({
            size: size,
            element: element,
            data: data
        });
        Promise.resolve().then(function() {
            if (currentId === resizeIdRef.current) {
                onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
                resizeInfosRef.current = [];
            }
        }); // Continue bubbling if parent exist
        onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
    }, [
        onBatchResize,
        onCollectionResize
    ]);
    return /*#__PURE__*/ _react.createElement(CollectionContext.Provider, {
        value: onResize
    }, children);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7LjA6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateNodeStyling", ()=>calculateNodeStyling);
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */ var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = [
    "letter-spacing",
    "line-height",
    "padding-top",
    "padding-bottom",
    "font-family",
    "font-weight",
    "font-size",
    "font-variant",
    "text-rendering",
    "text-transform",
    "width",
    "text-indent",
    "padding-left",
    "padding-right",
    "border-width",
    "box-sizing",
    "word-break"
];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
    if (useCache && computedStyleCache[nodeRef]) return computedStyleCache[nodeRef];
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
    var paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
    var borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
    var sizingStyle = SIZING_STYLE.map(function(name) {
        return "".concat(name, ":").concat(style.getPropertyValue(name));
    }).join(";");
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) computedStyleCache[nodeRef] = nodeInfo;
    return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement("textarea");
        hiddenTextarea.setAttribute("tab-index", "-1");
        hiddenTextarea.setAttribute("aria-hidden", "true");
        document.body.appendChild(hiddenTextarea);
    } // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute("wrap")) hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
    else hiddenTextarea.removeAttribute("wrap");
     // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
    var minHeight = Number.MIN_SAFE_INTEGER;
    var maxHeight = Number.MAX_SAFE_INTEGER;
    var height = hiddenTextarea.scrollHeight;
    var overflowY;
    if (boxSizing === "border-box") // border-box: add border, since height = content + padding + border
    height += borderSize;
    else if (boxSizing === "content-box") // remove padding, since height = content
    height -= paddingSize;
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = " ";
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === "border-box") minHeight = minHeight + paddingSize + borderSize;
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === "border-box") maxHeight = maxHeight + paddingSize + borderSize;
            overflowY = height > maxHeight ? "" : "hidden";
            height = Math.min(maxHeight, height);
        }
    }
    return {
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,
        overflowY: overflowY,
        resize: "none"
    };
}
exports.default = calculateNodeHeight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjwkp":[function(require,module,exports) {
//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) return !!ret;
    if (objA === objB) return true;
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) return false;
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) return false;
    }
    return true;
};

},{}],"5Px5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@babel/runtime/helpers/esm/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _classCallCheck = require("@babel/runtime/helpers/esm/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/esm/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _inherits = require("@babel/runtime/helpers/esm/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _createSuper = require("@babel/runtime/helpers/esm/createSuper");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _closeCircleFilled = require("@ant-design/icons/es/icons/CloseCircleFilled");
var _closeCircleFilledDefault = parcelHelpers.interopDefault(_closeCircleFilled);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _context = require("../form/context");
var _reactNode = require("../_util/reactNode");
var _statusUtils = require("../_util/statusUtils");
var _type = require("../_util/type");
var ClearableInputType = (0, _type.tuple)("text", "input");
function hasAddon(props) {
    return !!(props.addonBefore || props.addonAfter);
}
var ClearableLabeledInput = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(ClearableLabeledInput, _React$Component);
    var _super = (0, _createSuperDefault.default)(ClearableLabeledInput);
    function ClearableLabeledInput() {
        (0, _classCallCheckDefault.default)(this, ClearableLabeledInput);
        return _super.apply(this, arguments);
    }
    (0, _createClassDefault.default)(ClearableLabeledInput, [
        {
            key: "renderClearIcon",
            value: function renderClearIcon(prefixCls) {
                var _classNames;
                var _this$props = this.props, value = _this$props.value, disabled = _this$props.disabled, readOnly = _this$props.readOnly, handleReset = _this$props.handleReset, suffix = _this$props.suffix;
                var needClear = !disabled && !readOnly && value;
                var className = "".concat(prefixCls, "-clear-icon");
                return /*#__PURE__*/ _react.createElement((0, _closeCircleFilledDefault.default), {
                    onClick: handleReset,
                    // Do not trigger onBlur when clear input
                    // https://github.com/ant-design/ant-design/issues/31200
                    onMouseDown: function onMouseDown(e) {
                        return e.preventDefault();
                    },
                    className: (0, _classnamesDefault.default)((_classNames = {}, (0, _definePropertyDefault.default)(_classNames, "".concat(className, "-hidden"), !needClear), (0, _definePropertyDefault.default)(_classNames, "".concat(className, "-has-suffix"), !!suffix), _classNames), className),
                    role: "button"
                });
            }
        },
        {
            key: "renderTextAreaWithClearIcon",
            value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
                var _classNames2;
                var _this$props2 = this.props, value = _this$props2.value, allowClear = _this$props2.allowClear, className = _this$props2.className, style = _this$props2.style, direction = _this$props2.direction, bordered = _this$props2.bordered, hidden = _this$props2.hidden, customStatus = _this$props2.status;
                var contextStatus = statusContext.status, hasFeedback = statusContext.hasFeedback;
                if (!allowClear) return (0, _reactNode.cloneElement)(element, {
                    value: value
                });
                var affixWrapperCls = (0, _classnamesDefault.default)("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), (_classNames2 = {}, (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === "rtl"), (0, _definePropertyDefault.default)(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _definePropertyDefault.default)(_classNames2, "".concat(className), !hasAddon(this.props) && className), _classNames2));
                return /*#__PURE__*/ _react.createElement("span", {
                    className: affixWrapperCls,
                    style: style,
                    hidden: hidden
                }, (0, _reactNode.cloneElement)(element, {
                    style: null,
                    value: value
                }), this.renderClearIcon(prefixCls));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return /*#__PURE__*/ _react.createElement((0, _context.FormItemInputContext).Consumer, null, function(statusContext) {
                    var _this$props3 = _this.props, prefixCls = _this$props3.prefixCls, inputType = _this$props3.inputType, element = _this$props3.element;
                    if (inputType === ClearableInputType[0]) return _this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
                });
            }
        }
    ]);
    return ClearableLabeledInput;
}(_react.Component);
exports.default = ClearableLabeledInput;

},{"@babel/runtime/helpers/esm/defineProperty":"hbmCA","@babel/runtime/helpers/esm/classCallCheck":"aNx1x","@babel/runtime/helpers/esm/createClass":"kZyth","@babel/runtime/helpers/esm/inherits":"drFw3","@babel/runtime/helpers/esm/createSuper":"hp3mc","@ant-design/icons/es/icons/CloseCircleFilled":"hNhJu","classnames":"jocGM","react":"21dqq","../form/context":"flRlt","../_util/reactNode":"d1mV0","../_util/statusUtils":"gRi8E","../_util/type":"eWuNf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YkYW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _grid = require("../grid");
exports.default = (0, _grid.Row);

},{"../grid":"2CE2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1xC6H","10K4Z"], null, "parcelRequiree8ef")

//# sourceMappingURL=Dashboard.98ed53f4.js.map
