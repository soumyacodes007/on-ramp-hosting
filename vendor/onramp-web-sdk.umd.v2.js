(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["onramp-web-sdk"] = {}));
})(this, (function (exports) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var getStylesForShadowDom = function () {
        var styles = document.createElement('style');
        styles.textContent =
            '.overlay { position: fixed; z-index: 1000; width: 100vw; height: 100vh; height: 100dvh; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, 0.5); display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; } .iframe { border: none; user-select: none; visibility: hidden; position: absolute; } .iframe.visible { visibility: visible; } .close-modal { font-family: Manrope, sans-serif; width: 90%; max-width: 620px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 9999; box-shadow: 0px 54px 200px rgba(36, 37, 57, 0.2); display: flex; flex-flow: column nowrap; justify-content: flex-start; align-items: center; padding: 35px; border-radius: 8px; background: #fff; box-sizing: border-box; } .close-modal * { box-sizing: border-box; } .close-modal__text { margin: 40px auto 30px; font-weight: 600; font-size: 24px; line-height: 36px; text-align: center; color: #242539; text-wrap: pretty; } .close-modal__button-container { width: 318px; display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: center; } .close-modal__button { background: #fff; border: 2px solid #edeef3; border-radius: 74px; width: 152px; height: 56px; cursor: pointer; font-weight: 600; font-size: 14px; line-height: 21px; color: #2b2d56; text-transform: uppercase; } .close-modal__button--exit { background: #151515; box-shadow: 0px 8px 34px rgba(156, 163, 175, 0.6); color: #fff; border-color: transparent; }';
        return styles;
    };
    var prepareOverlayNode = function () {
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        var loader = document.createElement('div');
        loader.classList.add('loader-container');
        // tslint:disable:max-line-length
        loader.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\"rgb(255, 255, 255)\" width = '100' height = '100' viewBox=\"0 0 44 44\" > <g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"1\"> <circle cx=\"22\" cy=\"22\" r=\"1\" stroke-width=\"1\"> <animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\" /> <animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\" /> </circle> <circle cx=\"22\" cy=\"22\" r=\"1\" stroke-width=\"1\"> <animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\" /> <animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\" /> </circle> </g> </svg>\n\t";
        overlay.appendChild(loader);
        return overlay;
    };
    var prepareIframeNode = function (url) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        iframe.id = 'onRampWidget';
        iframe.setAttribute('allow', 'microphone; camera; clipboard-read; clipboard-write');
        iframe.classList.add('iframe');
        return iframe;
    };
    var importFonts = function () {
        if (document.querySelector('[data-onramp-font]')) {
            return;
        }
        var font = document.createElement('link');
        font.setAttribute('href', 'https://fonts.googleapis.com/css?family=Manrope:wght@400;600;700;800&display=swap');
        font.setAttribute('rel', 'stylesheet');
        font.setAttribute('data-onramp-font', '');
        document.head.appendChild(font);
    };
    var prepareCloseModalNode = function () {
        var container = document.createElement('div');
        container.classList.add('close-modal');
        var textEl = document.createElement('div');
        textEl.classList.add('close-modal__text');
        textEl.textContent = 'Are you sure you want to leave & close this widget ?';
        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('close-modal__button-container');
        var cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.classList.add('close-modal__button');
        cancelButton.classList.add('close-modal__button--cancel');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', function (event) {
            event.stopPropagation();
            window.postMessage({
                eventData: {
                    type: 'ONRAMP_WIDGET_CLOSE_REQUEST_CANCELLED',
                    isOnramp: true,
                },
            }, window.location.origin);
        });
        var exitButton = document.createElement('button');
        exitButton.setAttribute('type', 'button');
        exitButton.classList.add('close-modal__button');
        exitButton.classList.add('close-modal__button--exit');
        exitButton.textContent = 'Exit';
        exitButton.addEventListener('click', function (event) {
            event.stopPropagation();
            window.postMessage({
                eventData: {
                    type: 'ONRAMP_WIDGET_CLOSE_REQUEST_CONFIRMED',
                    isOnramp: true,
                },
            }, window.location.origin);
        });
        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(exitButton);
        container.appendChild(textEl);
        container.appendChild(buttonContainer);
        return container;
    };
    var hasOwn = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    var initDOMNodeWithOverlay = function (url, theme, containerId) {
        var body = document.querySelector('body');
        var iframe = prepareIframeNode(url);
        // Container mode - render iframe directly in container
        if (containerId) {
            var container = document.querySelector(containerId);
            if (!container) {
                throw new Error("Container with selector '".concat(containerId, "' not found"));
            }
            // Apply theme attributes
            if (theme) {
                var attrs = {};
                for (var _i = 0, _a = Object.entries(theme); _i < _a.length; _i++) {
                    var _b = _a[_i], mode = _b[0], values = _b[1];
                    switch (mode) {
                        case 'lightMode':
                        case 'darkMode':
                            for (var _c = 0, _d = Object.entries(values || {}); _c < _d.length; _c++) {
                                var _e = _d[_c], key = _e[0], value = _e[1];
                                attrs[String("theme-".concat(mode === 'lightMode' ? 'light' : 'dark', "-").concat(key))] = value;
                            }
                            break;
                        case 'default':
                            attrs['theme-default'] = String(values);
                            break;
                    }
                }
                iframe.setAttribute('name', JSON.stringify(attrs));
            }
            container.appendChild(iframe);
            return {
                body: body,
                iframe: iframe,
                overlay: null,
                shadow: null,
                shadowHost: null,
                container: container,
            };
        }
        // Shadow DOM mode - render with overlay
        var shadowHost = document.createElement('div');
        shadowHost.id = 'onRampWidgetContainer';
        shadowHost.style.width = '100%';
        shadowHost.style.height = '100%';
        var shadow = shadowHost.attachShadow({ mode: 'open' });
        shadow.appendChild(getStylesForShadowDom());
        var overlay = prepareOverlayNode();
        overlay.appendChild(iframe);
        shadow.appendChild(overlay);
        // Apply theme attributes
        if (theme) {
            var attrs = {};
            for (var _f = 0, _g = Object.entries(theme); _f < _g.length; _f++) {
                var _h = _g[_f], mode = _h[0], values = _h[1];
                switch (mode) {
                    case 'lightMode':
                    case 'darkMode':
                        for (var _j = 0, _k = Object.entries(values || {}); _j < _k.length; _j++) {
                            var _l = _k[_j], key = _l[0], value = _l[1];
                            attrs[String("theme-".concat(mode === 'lightMode' ? 'light' : 'dark', "-").concat(key))] = value;
                        }
                        break;
                    case 'default':
                        attrs['theme-default'] = String(values);
                        break;
                }
            }
            iframe.setAttribute('name', JSON.stringify(attrs));
        }
        return {
            body: body,
            iframe: iframe,
            overlay: overlay,
            shadow: shadow,
            shadowHost: shadowHost,
            container: null,
        };
    };
    var isValidHex = function (hex) {
        var hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
        return hexRegex.test(hex);
    };
    var isValidPhoneNumber = function (phoneNumber) {
        var encodedRegex = /^%2[Bb]\d+-\d+$/;
        return encodedRegex.test(phoneNumber);
    };
    var sanityCheck = function (config) {
        var _a, _b, _c, _d, _e, _f;
        if (!hasOwn(config, 'appId')) {
            throw new Error('appId missing when initializing constructor');
        }
        if (hasOwn(config, 'phoneNumber')) {
            if (typeof config.phoneNumber !== 'string' ||
                !isValidPhoneNumber(config.phoneNumber)) {
                throw new Error('Invalid phoneNumber format. Expected URL-encoded "+countryCode-phoneNumber" format; use encodeURIComponent to encode the phone number');
            }
        }
        if (hasOwn(config, 'flowType') &&
            [1, 2, 3].includes(Number(config.flowType))) {
            if (hasOwn(config, 'network') && typeof config.network !== 'string') {
                throw new Error('network only accepts string values. Check param values at https://docs.onramp.money/onramp/widget-integration/hosted-mode#customisation-onramp');
            }
            if (hasOwn(config, 'coinAmount') && hasOwn(config, 'fiatAmount')) {
                throw new Error('use either coinAmount or fiatAmount');
            }
            if (hasOwn(config, 'coinAmount') &&
                typeof config.coinAmount !== 'number') {
                throw new Error('coinAmount only accepts number values');
            }
            if (hasOwn(config, 'fiatAmount') &&
                typeof config.fiatAmount !== 'number') {
                throw new Error('fiatAmount only accepts number values');
            }
            if (hasOwn(config, 'paymentMethod') &&
                !((config === null || config === void 0 ? void 0 : config.paymentMethod) === 1 || (config === null || config === void 0 ? void 0 : config.paymentMethod) === 2)) {
                throw new Error('paymentMethod only accepts number values as 1 => UPI, 2 => Bank Transfers');
            }
        }
        if (hasOwn(config, 'flowType') && [4].includes(Number(config.flowType))) {
            if (hasOwn(config, 'sellAmount') && hasOwn(config, 'receiveAmount')) {
                throw new Error('use either sellAmount or receiveAmount');
            }
            if (hasOwn(config, 'sellAmount') && hasOwn(config, 'receiveAmount')) {
                throw new Error('use either sellAmount or receiveAmount');
            }
        }
        if (hasOwn(config, 'addressTag') && !hasOwn(config, 'walletAddress')) {
            throw new Error('addressTag can only be used along with walletAddress');
        }
        if (hasOwn(config, 'memo')) {
            throw new Error('The memo parameter has been deprecated! Please use the addressTag parameter.');
        }
        if (hasOwn(config, 'theme')) {
            if (!hasOwn(config.theme, 'lightMode') &&
                !hasOwn(config.theme, 'darkMode')) {
                throw new Error('Theme object cannot be empty! Please define a theme.');
            }
            //lightMode
            if (hasOwn(config.theme, 'lightMode')) {
                if (hasOwn((_a = config.theme) === null || _a === void 0 ? void 0 : _a.lightMode, 'baseColor')) {
                    if (!isValidHex(String((_c = (_b = config.theme) === null || _b === void 0 ? void 0 : _b.lightMode) === null || _c === void 0 ? void 0 : _c.baseColor))) {
                        throw new Error('Invaid baseColor provided for lightMode!');
                    }
                }
                else {
                    throw new Error('baseColor property is mandatory for setting theme.');
                }
            }
            //darkMode
            if (hasOwn(config.theme, 'darkMode')) {
                if (hasOwn((_d = config.theme) === null || _d === void 0 ? void 0 : _d.darkMode, 'baseColor')) {
                    if (!isValidHex(String((_f = (_e = config.theme) === null || _e === void 0 ? void 0 : _e.darkMode) === null || _f === void 0 ? void 0 : _f.baseColor))) {
                        throw new Error('Invaid baseColor provided for darkMode!');
                    }
                }
                else {
                    throw new Error('baseColor property is mandatory for setting theme.');
                }
            }
        }
        if (hasOwn(config, 'widgetUrl')) {
            try {
                if (!config.widgetUrl) {
                    throw new Error('Empty widget url not allowed');
                }
                var widgetUrl = new URL(config.widgetUrl);
                if (![
                    'test.onramp.money',
                    'onramp.money',
                    'onramp.trbns.com',
                ].includes(widgetUrl.hostname)) {
                    throw new Error("Invalid widgetUrl origin: ".concat(widgetUrl.hostname, ", url must be from an authorized domain"));
                }
            }
            catch (e) {
                throw e;
            }
        }
        if (hasOwn(config, 'containerId')) {
            if (!config.containerId) {
                throw new Error('Empty containerId not allowed');
            }
            else if (String(config.containerId)[0] !== '#') {
                throw new Error('containerId must start with #');
            }
        }
        return true;
    };
    // returns time for performance metrics
    var getTime = function () {
        try {
            return performance === null || performance === void 0 ? void 0 : performance.now();
        }
        catch (e) {
            console.log('getTime failed', e);
            return 0;
        }
    };

    var appDomain = 'https://onramp.money';
    var sandboxDomain = 'https://test.onramp.money/onramp';
    var path = '/main';
    var startTime, endTime;
    var OnrampWebSDK = /** @class */ (function () {
        function OnrampWebSDK(config) {
            var _this = this;
            this._originalBodyOverflow = null;
            this._clientCallbacks = {};
            this._handleEscapeClick = function (event) {
                var escKeyCode = 27;
                if (event.key === 'Escape' ||
                    event.key === 'Esc' ||
                    event.keyCode === escKeyCode) {
                    var customEvent = new CustomEvent('ONRAMP_WIDGET_CLOSE_REQUEST', {
                        detail: { eventData: { isOnramp: true } },
                    });
                    window.dispatchEvent(customEvent);
                }
            };
            this._widgetMessageHandler = function (e) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if ((_b = (_a = e === null || e === void 0 ? void 0 : e.data) === null || _a === void 0 ? void 0 : _a.eventData) === null || _b === void 0 ? void 0 : _b.isOnramp) {
                    var eventData = e.data.eventData;
                    // TODO: add sanity check for event type
                    // why do we send custom event?
                    var customEvent = new CustomEvent(eventData.type, {
                        detail: eventData,
                    });
                    window.dispatchEvent(customEvent);
                    // also calls any callbacks registered by sdk instance
                    if (eventData === null || eventData === void 0 ? void 0 : eventData.type.startsWith('ONRAMP_WIDGET_TX_')) {
                        (_d = (_c = _this._clientCallbacks) === null || _c === void 0 ? void 0 : _c['TX_EVENTS']) === null || _d === void 0 ? void 0 : _d.call(_c, eventData);
                    }
                    else if ([
                        'ONRAMP_WIDGET_CLOSE_REQUEST_CONFIRMED',
                        'ONRAMP_WIDGET_READY',
                        'ONRAMP_WIDGET_FAILED',
                        'ONRAMP_WIDGET_CONTENT_COPIED',
                    ].includes(eventData === null || eventData === void 0 ? void 0 : eventData.type)) {
                        (_f = (_e = _this._clientCallbacks) === null || _e === void 0 ? void 0 : _e['WIDGET_EVENTS']) === null || _f === void 0 ? void 0 : _f.call(_e, eventData);
                    }
                    else if (eventData === null || eventData === void 0 ? void 0 : eventData.type.startsWith('ONRAMP_KYC_')) {
                        (_h = (_g = _this._clientCallbacks) === null || _g === void 0 ? void 0 : _g['KYC_EVENTS']) === null || _h === void 0 ? void 0 : _h.call(_g, eventData);
                    }
                    else {
                        console.warn('unhandled event received from === ', e === null || e === void 0 ? void 0 : e.origin, e);
                    }
                }
                else {
                    console.log('event received from === ', e === null || e === void 0 ? void 0 : e.origin, e);
                }
            };
            this._widgetCloseRequestHandler = function () {
                var _a;
                // Only show close modal in shadow DOM mode
                if ((_a = _this._domNodes) === null || _a === void 0 ? void 0 : _a.overlay) {
                    var modal = _this._domNodes.overlay.querySelector('.close-modal');
                    if (!modal) {
                        _this._domNodes.overlay.appendChild(prepareCloseModalNode());
                    }
                }
            };
            this._widgetCloseHandler = function () {
                _this._teardownSDKEvents();
                _this.close();
            };
            this._widgetCloseCancelHandler = function () {
                var _a;
                // Only handle modal in shadow DOM mode
                if ((_a = _this._domNodes) === null || _a === void 0 ? void 0 : _a.overlay) {
                    var modal = _this._domNodes.overlay.querySelector('.close-modal');
                    if (modal) {
                        modal.remove();
                    }
                }
            };
            this._widgetReadyHandler = function () {
                var _a, _b, _c, _d, _e;
                // Handle loader removal only in shadow DOM mode
                if ((_a = _this._domNodes) === null || _a === void 0 ? void 0 : _a.overlay) {
                    (_b = _this._domNodes.overlay.querySelector('.loader-container')) === null || _b === void 0 ? void 0 : _b.remove();
                }
                (_e = (_d = (_c = _this._domNodes) === null || _c === void 0 ? void 0 : _c.iframe) === null || _d === void 0 ? void 0 : _d.classList) === null || _e === void 0 ? void 0 : _e.add('visible');
                endTime = getTime();
                if (startTime && endTime) {
                    console.log('Render time in seconds ~~ ', Number((endTime - startTime) / 1000).toPrecision(4));
                }
            };
            this._widgetFailedHandler = function () {
                // this._teardownSDKEvents();
                // this.close();
            };
            this.close = function () {
                var _a, _b;
                if (_this._isVisible) {
                    if ((_a = _this._domNodes) === null || _a === void 0 ? void 0 : _a.shadowHost) {
                        // Shadow DOM mode cleanup
                        _this._domNodes.shadowHost.remove();
                        if (_this._domNodes.body) {
                            _this._domNodes.body.style.overflow =
                                _this._originalBodyOverflow || '';
                        }
                    }
                    else if ((_b = _this._domNodes) === null || _b === void 0 ? void 0 : _b.container) {
                        // Container mode cleanup
                        var iframe = _this._domNodes.container.querySelector('#onRampWidget');
                        if (iframe) {
                            iframe.remove();
                        }
                    }
                    _this._isVisible = false;
                }
                else {
                    throw new Error('no widget to close, please call show method first');
                }
            };
            this.show = function () { return __awaiter(_this, void 0, void 0, function () {
                var dataSanityCheck, widgetUrl;
                var _this = this;
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            startTime = getTime();
                            dataSanityCheck = sanityCheck(this.config);
                            if (!dataSanityCheck) return [3 /*break*/, 2];
                            if (this._isVisible) {
                                throw new Error('Widget is already rendered. Call close method to clear it up');
                            }
                            this._registerSDKEvents();
                            return [4 /*yield*/, this._getURL()];
                        case 1:
                            widgetUrl = _f.sent();
                            this._domNodes = initDOMNodeWithOverlay(widgetUrl, (_a = this.config) === null || _a === void 0 ? void 0 : _a.theme, (_b = this.config) === null || _b === void 0 ? void 0 : _b.containerId);
                            // Only append shadowHost if in shadow DOM mode
                            if (this._domNodes.shadowHost) {
                                (_c = this._domNodes.body) === null || _c === void 0 ? void 0 : _c.appendChild(this._domNodes.shadowHost);
                                if (this._domNodes.body) {
                                    this._originalBodyOverflow =
                                        ((_e = (_d = this._domNodes.body) === null || _d === void 0 ? void 0 : _d.style) === null || _e === void 0 ? void 0 : _e.overflow) || '';
                                    this._domNodes.body.style.overflow = 'hidden';
                                }
                            }
                            this._isVisible = true;
                            setTimeout(function () {
                                _this._widgetReadyHandler();
                            }, 1000);
                            return [3 /*break*/, 3];
                        case 2: return [2 /*return*/, dataSanityCheck];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            this.on = function (eventType, callbackFn) {
                if (['TX_EVENTS', 'WIDGET_EVENTS', 'KYC_EVENTS'].includes(eventType)) {
                    _this._clientCallbacks[eventType] = callbackFn;
                }
            };
            this._appURL = "".concat((config === null || config === void 0 ? void 0 : config.sandbox) === true ? sandboxDomain : appDomain).concat(path);
            this._isVisible = false;
            this.config = config;
            importFonts();
        }
        OnrampWebSDK.prototype._getURL = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, appId, _b, flowType, sandbox, containerId, rest, mode, container, clientHeight, url, params, _i, _c, _d, key, value, response, json;
                var _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _a = this.config, appId = _a.appId, _b = _a.flowType, flowType = _b === void 0 ? 1 : _b, sandbox = _a.sandbox, containerId = _a.containerId, _a.theme, rest = __rest(_a, ["appId", "flowType", "sandbox", "containerId", "theme"]);
                            mode = containerId ? 'embedded' : 'overlay';
                            container = containerId
                                ? document.querySelector(containerId)
                                : null;
                            clientHeight = (container === null || container === void 0 ? void 0 : container.getBoundingClientRect().height) || window.innerHeight;
                            url = new URL('https://api.onramp.money/sdk-apis/generate-url');
                            params = url.searchParams;
                            // Required params
                            params.append('appURL', String(this._appURL));
                            params.append('appId', String(appId));
                            params.append('flowType', String(flowType));
                            params.append('mode', mode);
                            params.append('origin', window.location.origin);
                            params.append('clientHeight', String(clientHeight));
                            if (sandbox !== undefined) {
                                params.append('sandbox', String(sandbox));
                            }
                            // Append all other config values dynamically
                            for (_i = 0, _c = Object.entries(rest); _i < _c.length; _i++) {
                                _d = _c[_i], key = _d[0], value = _d[1];
                                if (value !== undefined && value !== null && value !== '') {
                                    params.append(key, String(value));
                                }
                            }
                            return [4 /*yield*/, fetch(url.href)];
                        case 1:
                            response = _f.sent();
                            if (!response.ok) {
                                throw new Error("Failed to generate widget URL: ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json = _f.sent();
                            if (!((_e = json.data) === null || _e === void 0 ? void 0 : _e.url)) {
                                throw new Error('Invalid response from URL generation API');
                            }
                            return [2 /*return*/, json.data.url];
                    }
                });
            });
        };
        OnrampWebSDK.prototype._registerSDKEvents = function () {
            window.addEventListener('message', this._widgetMessageHandler);
            window.addEventListener('keydown', this._handleEscapeClick);
            window.addEventListener('ONRAMP_WIDGET_CLOSE_REQUEST', this._widgetCloseRequestHandler);
            window.addEventListener('ONRAMP_WIDGET_CLOSE_REQUEST_CONFIRMED', this._widgetCloseHandler);
            window.addEventListener('ONRAMP_WIDGET_CLOSE_REQUEST_CANCELLED', this._widgetCloseCancelHandler);
            window.addEventListener('ONRAMP_WIDGET_READY', this._widgetReadyHandler);
            window.addEventListener('ONRAMP_WIDGET_FAILED', this._widgetFailedHandler);
        };
        OnrampWebSDK.prototype._teardownSDKEvents = function () {
            window.removeEventListener('message', this._widgetMessageHandler);
            window.removeEventListener('keydown', this._handleEscapeClick);
            window.removeEventListener('ONRAMP_WIDGET_CLOSE_REQUEST', this._widgetCloseRequestHandler);
            window.removeEventListener('ONRAMP_WIDGET_CLOSE_REQUEST_CONFIRMED', this._widgetCloseHandler);
            window.removeEventListener('ONRAMP_WIDGET_CLOSE_REQUEST_CANCELLED', this._widgetCloseCancelHandler);
            window.removeEventListener('ONRAMP_WIDGET_READY', this._widgetReadyHandler);
            window.removeEventListener('ONRAMP_WIDGET_FAILED', this._widgetFailedHandler);
        };
        return OnrampWebSDK;
    }());

    exports.OnrampWebSDK = OnrampWebSDK;

}));
//# sourceMappingURL=onramp-web-sdk.umd.js.map
