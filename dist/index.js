(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["winterfell"] = factory(require("react"), require("lodash"));
	else
		root["winterfell"] = factory(root["React"], root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, process) {/*!
 * Copyright (c) 2015 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function (name, definition) {
    if (true) {
        module.exports = definition();
    } else {}
})('validator', function (validator) {

    'use strict';

    validator = { version: '4.9.0', coerce: true };

    var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
    var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;

    var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
    var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;

    var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;

    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/
      , isbn13Maybe = /^(?:[0-9]{13})$/;

    var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

    var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
      , ipv6Block = /^[0-9A-F]{1,4}$/i;

    var uuid = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      , '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      , '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      , all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };

    var alpha = {
        'en-US': /^[A-Z]+$/i,
        'de-DE': /^[A-ZÄÖÜß]+$/i,
        'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
        'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
        'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
        'ru-RU': /^[А-ЯЁа-яё]+$/i
      }
      , alphanumeric = {
        'en-US': /^[0-9A-Z]+$/i,
        'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
        'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
        'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
        'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
        'ru-RU': /^[0-9А-ЯЁа-яё]+$/i
      };

    var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];
    for (var locale, i = 0; i < englishLocales.length; i++) {
        locale = 'en-' + englishLocales[i];
        alpha[locale] = alpha['en-US'];
        alphanumeric[locale] = alphanumeric['en-US'];
    }

    var numeric = /^[-+]?[0-9]+$/
      , int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/
      , float = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
      , hexadecimal = /^[0-9A-F]+$/i
      , decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/
      , hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

    var ascii = /^[\x00-\x7F]+$/
      , multibyte = /[^\x00-\x7F]/
      , fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/
      , halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

    var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    var base64 = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i;

    var phones = {
      'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
      'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
      'el-GR': /^(\+?30)?(69\d{8})$/,
      'en-AU': /^(\+?61|0)4\d{8}$/,
      'en-GB': /^(\+?44|0)7\d{9}$/,
      'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
      'en-IN': /^(\+?91|0)?[789]\d{9}$/,
      'en-NZ': /^(\+?64|0)2\d{7,9}$/,
      'en-ZA': /^(\+?27|0)\d{9}$/,
      'en-ZM': /^(\+?26)?09[567]\d{7}$/,
      'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
      'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
      'fr-FR': /^(\+?33|0)[67]\d{8}$/,
      'nb-NO': /^(\+?47)?[49]\d{7}$/,
      'nn-NO': /^(\+?47)?[49]\d{7}$/,
      'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
      'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
      'ru-RU': /^(\+?7|8)?9\d{9}$/,
      'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
      'zh-CN': /^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,
      'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
    };

    // from http://goo.gl/0ejHHW
    var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

    validator.extend = function (name, fn) {
        validator[name] = function () {
            var args = Array.prototype.slice.call(arguments);
            args[0] = validator.toString(args[0]);
            return fn.apply(validator, args);
        };
    };

    //Right before exporting the validator object, pass each of the builtins
    //through extend() so that their first argument is coerced to a string
    validator.init = function () {
        for (var name in validator) {
            if (typeof validator[name] !== 'function' || name === 'toString' ||
                    name === 'toDate' || name === 'extend' || name === 'init' ||
                    name === 'isServerSide') {
                continue;
            }
            validator.extend(name, validator[name]);
        }
    };

    validator.isServerSide = function () {
        return  true && module &&
            typeof module.exports === 'object' &&
            typeof process === 'object' &&
            "function" === 'function';
    };

    var depd = null;
    validator.deprecation = function (msg) {
        if (depd === null) {
            if (!validator.isServerSide()) {
                return;
            }
            depd = __webpack_require__(6)('validator');
        }
        depd(msg);
    };

    validator.toString = function (input) {
        if (typeof input !== 'string') {
            // The library validates strings only. Currently it coerces all input to a string, but this
            // will go away in an upcoming major version change. Print a deprecation notice for now
            if (!validator.coerce) {
                throw new Error('this library validates strings only');
            }
            validator.deprecation('you tried to validate a ' + typeof input + ' but this library ' +
                    '(validator.js) validates strings only. Please update your code as this will ' +
                    'be an error soon.');
        }
        if (typeof input === 'object' && input !== null) {
            if (typeof input.toString === 'function') {
                input = input.toString();
            } else {
                input = '[object Object]';
            }
        } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
            input = '';
        }
        return '' + input;
    };

    validator.toDate = function (date) {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return date;
        }
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
    };

    validator.toFloat = function (str) {
        return parseFloat(str);
    };

    validator.toInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    validator.toBoolean = function (str, strict) {
        if (strict) {
            return str === '1' || str === 'true';
        }
        return str !== '0' && str !== 'false' && str !== '';
    };

    validator.equals = function (str, comparison) {
        return str === validator.toString(comparison);
    };

    validator.contains = function (str, elem) {
        return str.indexOf(validator.toString(elem)) >= 0;
    };

    validator.matches = function (str, pattern, modifiers) {
        if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
            pattern = new RegExp(pattern, modifiers);
        }
        return pattern.test(str);
    };

    var default_email_options = {
        allow_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true
    };

    validator.isEmail = function (str, options) {
        options = merge(options, default_email_options);

        if (options.allow_display_name) {
            var display_email = str.match(displayName);
            if (display_email) {
                str = display_email[1];
            }
        }

        var parts = str.split('@')
          , domain = parts.pop()
          , user = parts.join('@');

        var lower_domain = domain.toLowerCase();
        if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
            user = user.replace(/\./g, '').toLowerCase();
        }

        if (!validator.isByteLength(user, {max: 64}) ||
                !validator.isByteLength(domain, {max: 256})) {
            return false;
        }

        if (!validator.isFQDN(domain, {require_tld: options.require_tld})) {
            return false;
        }

        if (user[0] === '"') {
            user = user.slice(1, user.length - 1);
            return options.allow_utf8_local_part ?
                quotedEmailUserUtf8.test(user) :
                quotedEmailUser.test(user);
        }

        var pattern = options.allow_utf8_local_part ?
            emailUserUtf8Part : emailUserPart;

        var user_parts = user.split('.');
        for (var i = 0; i < user_parts.length; i++) {
            if (!pattern.test(user_parts[i])) {
                return false;
            }
        }

        return true;
    };

    var default_url_options = {
        protocols: [ 'http', 'https', 'ftp' ]
      , require_tld: true
      , require_protocol: false
      , require_valid_protocol: true
      , allow_underscores: false
      , allow_trailing_dot: false
      , allow_protocol_relative_urls: false
    };

    validator.isURL = function (url, options) {
        if (!url || url.length >= 2083 || /\s/.test(url)) {
            return false;
        }
        if (url.indexOf('mailto:') === 0) {
            return false;
        }
        options = merge(options, default_url_options);
        var protocol, auth, host, hostname, port,
            port_str, split;
        split = url.split('://');
        if (split.length > 1) {
            protocol = split.shift();
            if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
                return false;
            }
        } else if (options.require_protocol) {
            return false;
        }  else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
            split[0] = url.substr(2);
        }
        url = split.join('://');
        split = url.split('#');
        url = split.shift();

        split = url.split('?');
        url = split.shift();

        split = url.split('/');
        url = split.shift();
        split = url.split('@');
        if (split.length > 1) {
            auth = split.shift();
            if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
                return false;
            }
        }
        hostname = split.join('@');
        split = hostname.split(':');
        host = split.shift();
        if (split.length) {
            port_str = split.join(':');
            port = parseInt(port_str, 10);
            if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
                return false;
            }
        }
        if (!validator.isIP(host) && !validator.isFQDN(host, options) &&
                host !== 'localhost') {
            return false;
        }
        if (options.host_whitelist &&
                options.host_whitelist.indexOf(host) === -1) {
            return false;
        }
        if (options.host_blacklist &&
                options.host_blacklist.indexOf(host) !== -1) {
            return false;
        }
        return true;
    };

    validator.isMACAddress = function (str) {
        return macAddress.test(str);
    };

    validator.isIP = function (str, version) {
        version = version ? version + '' : '';
        if (!version) {
            return validator.isIP(str, 4) || validator.isIP(str, 6);
        } else if (version === '4') {
            if (!ipv4Maybe.test(str)) {
                return false;
            }
            var parts = str.split('.').sort(function (a, b) {
                return a - b;
            });
            return parts[3] <= 255;
        } else if (version === '6') {
            var blocks = str.split(':');
            var foundOmissionBlock = false; // marker to indicate ::

            // At least some OS accept the last 32 bits of an IPv6 address
            // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
            // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
            // and '::a.b.c.d' is deprecated, but also valid.
            var foundIPv4TransitionBlock = validator.isIP(blocks[blocks.length - 1], 4);
            var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

            if (blocks.length > expectedNumberOfBlocks)
                return false;

            // initial or final ::
            if (str === '::') {
                return true;
            } else if (str.substr(0, 2) === '::') {
                blocks.shift();
                blocks.shift();
                foundOmissionBlock = true;
            } else if (str.substr(str.length - 2) === '::') {
                blocks.pop();
                blocks.pop();
                foundOmissionBlock = true;
            }

            for (var i = 0; i < blocks.length; ++i) {
                // test for a :: which can not be at the string start/end
                // since those cases have been handled above
                if (blocks[i] === '' && i > 0 && i < blocks.length -1) {
                    if (foundOmissionBlock)
                        return false; // multiple :: in address
                    foundOmissionBlock = true;
                } else if (foundIPv4TransitionBlock && i == blocks.length - 1) {
                    // it has been checked before that the last
                    // block is a valid IPv4 address
                } else if (!ipv6Block.test(blocks[i])) {
                    return false;
                }
            }

            if (foundOmissionBlock) {
                return blocks.length >= 1;
            } else {
                return blocks.length === expectedNumberOfBlocks;
            }
        }
        return false;
    };

    var default_fqdn_options = {
        require_tld: true
      , allow_underscores: false
      , allow_trailing_dot: false
    };

    validator.isFQDN = function (str, options) {
        options = merge(options, default_fqdn_options);

        /* Remove the optional trailing dot before checking validity */
        if (options.allow_trailing_dot && str[str.length - 1] === '.') {
            str = str.substring(0, str.length - 1);
        }
        var parts = str.split('.');
        if (options.require_tld) {
            var tld = parts.pop();
            if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
                return false;
            }
        }
        for (var part, i = 0; i < parts.length; i++) {
            part = parts[i];
            if (options.allow_underscores) {
                if (part.indexOf('__') >= 0) {
                    return false;
                }
                part = part.replace(/_/g, '');
            }
            if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
                return false;
            }
            if (/[\uff01-\uff5e]/.test(part)) {
                // disallow full-width chars
                return false;
            }
            if (part[0] === '-' || part[part.length - 1] === '-') {
                return false;
            }
        }
        return true;
    };

    validator.isBoolean = function(str) {
        return (['true', 'false', '1', '0'].indexOf(str) >= 0);
    };

    validator.isAlpha = function (str, locale) {
        locale = locale || 'en-US';
        if (locale in alpha) {
            return alpha[locale].test(str);
        }
        throw new Error('Invalid locale \'' + locale + '\'');
    };

    validator.isAlphanumeric = function (str, locale) {
        locale = locale || 'en-US';
        if (locale in alphanumeric) {
            return alphanumeric[locale].test(str);
        }
        throw new Error('Invalid locale \'' + locale + '\'');
    };

    validator.isNumeric = function (str) {
        return numeric.test(str);
    };

    validator.isDecimal = function (str) {
        return str !== '' && decimal.test(str);
    };

    validator.isHexadecimal = function (str) {
        return hexadecimal.test(str);
    };

    validator.isHexColor = function (str) {
        return hexcolor.test(str);
    };

    validator.isLowercase = function (str) {
        return str === str.toLowerCase();
    };

    validator.isUppercase = function (str) {
        return str === str.toUpperCase();
    };

    validator.isInt = function (str, options) {
        options = options || {};
        return int.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
    };

    validator.isFloat = function (str, options) {
        options = options || {};
        if (str === '' || str === '.') {
            return false;
        }
        return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
    };

    validator.isDivisibleBy = function (str, num) {
        return validator.toFloat(str) % parseInt(num, 10) === 0;
    };

    validator.isNull = function (str) {
        return str.length === 0;
    };

    validator.isLength = function (str, options) {
        var min, max;
        if (typeof(options) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else { // backwards compatibility: isLength(str, min [, max])
            min = arguments[1];
            max = arguments[2];
        }
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - surrogatePairs.length;
        return len >= min && (typeof max === 'undefined' || len <= max);
    };
    validator.isByteLength = function (str, options) {
        var min, max;
        if (typeof(options) === 'object') {
            min = options.min || 0;
            max = options.max;
        } else { // backwards compatibility: isByteLength(str, min [, max])
            min = arguments[1];
            max = arguments[2];
        }
        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === 'undefined' || len <= max);
    };

    validator.isUUID = function (str, version) {
        var pattern = uuid[version ? version : 'all'];
        return pattern && pattern.test(str);
    };

    function getTimezoneOffset(str) {
        var iso8601Parts = str.match(iso8601)
          , timezone, sign, hours, minutes;
        if (!iso8601Parts) {
            str = str.toLowerCase();
            timezone = str.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/);
            if (!timezone) {
                return str.indexOf('gmt') !== -1 ? 0 : null;
            }
            sign = timezone[1];
            var offset = timezone[2];
            if (offset.length === 3) {
                offset = '0' + offset;
            }
            if (offset.length <= 2) {
                hours = 0;
                minutes = parseInt(offset);
            } else {
                hours = parseInt(offset.slice(0, 2));
                minutes = parseInt(offset.slice(2, 4));
            }
        } else {
            timezone = iso8601Parts[21];
            if (!timezone) {
                // if no hour/minute was provided, the date is GMT
                return !iso8601Parts[12] ? 0 : null;
            }
            if (timezone === 'z' || timezone === 'Z') {
                return 0;
            }
            sign = iso8601Parts[22];
            if (timezone.indexOf(':') !== -1) {
                hours = parseInt(iso8601Parts[23]);
                minutes = parseInt(iso8601Parts[24]);
            } else {
                hours = 0;
                minutes = parseInt(iso8601Parts[23]);
            }
        }
        return (hours * 60 + minutes) * (sign === '-' ? 1 : -1);
    }

    validator.isDate = function (str) {
        var normalizedDate = new Date(Date.parse(str));
        if (isNaN(normalizedDate)) {
            return false;
        }

        // normalizedDate is in the user's timezone. Apply the input
        // timezone offset to the date so that the year and day match
        // the input
        var timezoneOffset = getTimezoneOffset(str);
        if (timezoneOffset !== null) {
            var timezoneDifference = normalizedDate.getTimezoneOffset() -
                timezoneOffset;
            normalizedDate = new Date(normalizedDate.getTime() +
                60000 * timezoneDifference);
        }

        var day = String(normalizedDate.getDate());
        var dayOrYear, dayOrYearMatches, year;
        //check for valid double digits that could be late days
        //check for all matches since a string like '12/23' is a valid date
        //ignore everything with nearby colons
        dayOrYearMatches = str.match(/(^|[^:\d])[23]\d([^:\d]|$)/g);
        if (!dayOrYearMatches) {
            return true;
        }
        dayOrYear = dayOrYearMatches.map(function(digitString) {
            return digitString.match(/\d+/g)[0];
        }).join('/');

        year = String(normalizedDate.getFullYear()).slice(-2);
        if (dayOrYear === day || dayOrYear === year) {
            return true;
        } else if ((dayOrYear === (day + '/' + year)) || (dayOrYear === (year + '/' + day))) {
            return true;
        }
        return false;
    };

    validator.isAfter = function (str, date) {
        var comparison = validator.toDate(date || new Date())
          , original = validator.toDate(str);
        return !!(original && comparison && original > comparison);
    };

    validator.isBefore = function (str, date) {
        var comparison = validator.toDate(date || new Date())
          , original = validator.toDate(str);
        return !!(original && comparison && original < comparison);
    };

    validator.isIn = function (str, options) {
        var i;
        if (Object.prototype.toString.call(options) === '[object Array]') {
            var array = [];
            for (i in options) {
                array[i] = validator.toString(options[i]);
            }
            return array.indexOf(str) >= 0;
        } else if (typeof options === 'object') {
            return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === 'function') {
            return options.indexOf(str) >= 0;
        }
        return false;
    };

    validator.isWhitelisted = function (str, chars) {
        for (var i = str.length - 1; i >= 0; i--) {
            if (chars.indexOf(str[i]) === -1) {
                return false;
            }
        }

        return true;
    };

    validator.isCreditCard = function (str) {
        var sanitized = str.replace(/[^0-9]+/g, '');
        if (!creditCard.test(sanitized)) {
            return false;
        }
        var sum = 0, digit, tmpNum, shouldDouble;
        for (var i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += ((tmpNum % 10) + 1);
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }
        return !!((sum % 10) === 0 ? sanitized : false);
    };

    validator.isISIN = function (str) {
        if (!isin.test(str)) {
            return false;
        }

        var checksumStr = str.replace(/[A-Z]/g, function(character) {
            return parseInt(character, 36);
        });

        var sum = 0, digit, tmpNum, shouldDouble = true;
        for (var i = checksumStr.length - 2; i >= 0; i--) {
            digit = checksumStr.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += tmpNum + 1;
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }

        return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
    };

    validator.isISBN = function (str, version) {
        version = version ? version + '' : '';
        if (!version) {
            return validator.isISBN(str, 10) || validator.isISBN(str, 13);
        }
        var sanitized = str.replace(/[\s-]+/g, '')
          , checksum = 0, i;
        if (version === '10') {
            if (!isbn10Maybe.test(sanitized)) {
                return false;
            }
            for (i = 0; i < 9; i++) {
                checksum += (i + 1) * sanitized.charAt(i);
            }
            if (sanitized.charAt(9) === 'X') {
                checksum += 10 * 10;
            } else {
                checksum += 10 * sanitized.charAt(9);
            }
            if ((checksum % 11) === 0) {
                return !!sanitized;
            }
        } else  if (version === '13') {
            if (!isbn13Maybe.test(sanitized)) {
                return false;
            }
            var factor = [ 1, 3 ];
            for (i = 0; i < 12; i++) {
                checksum += factor[i % 2] * sanitized.charAt(i);
            }
            if (sanitized.charAt(12) - ((10 - (checksum % 10)) % 10) === 0) {
                return !!sanitized;
            }
        }
        return false;
    };

    validator.isMobilePhone = function(str, locale) {
        if (locale in phones) {
            return phones[locale].test(str);
        }
        return false;
    };

    var default_currency_options = {
        symbol: '$'
      , require_symbol: false
      , allow_space_after_symbol: false
      , symbol_after_digits: false
      , allow_negatives: true
      , parens_for_negatives: false
      , negative_sign_before_digits: false
      , negative_sign_after_digits: false
      , allow_negative_sign_placeholder: false
      , thousands_separator: ','
      , decimal_separator: '.'
      , allow_space_after_digits: false
    };

    validator.isCurrency = function (str, options) {
        options = merge(options, default_currency_options);

        return currencyRegex(options).test(str);
    };

    validator.isJSON = function (str) {
        try {
            var obj = JSON.parse(str);
            return !!obj && typeof obj === 'object';
        } catch (e) {}
        return false;
    };

    validator.isMultibyte = function (str) {
        return multibyte.test(str);
    };

    validator.isAscii = function (str) {
        return ascii.test(str);
    };

    validator.isFullWidth = function (str) {
        return fullWidth.test(str);
    };

    validator.isHalfWidth = function (str) {
        return halfWidth.test(str);
    };

    validator.isVariableWidth = function (str) {
        return fullWidth.test(str) && halfWidth.test(str);
    };

    validator.isSurrogatePair = function (str) {
        return surrogatePair.test(str);
    };

    validator.isBase64 = function (str) {
        return base64.test(str);
    };

    validator.isMongoId = function (str) {
        return validator.isHexadecimal(str) && str.length === 24;
    };

    validator.isISO8601 = function (str) {
        return iso8601.test(str);
    };

    validator.ltrim = function (str, chars) {
        var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
        return str.replace(pattern, '');
    };

    validator.rtrim = function (str, chars) {
        var pattern = chars ? new RegExp('[' + chars + ']+$', 'g') : /\s+$/g;
        return str.replace(pattern, '');
    };

    validator.trim = function (str, chars) {
        var pattern = chars ? new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'g') : /^\s+|\s+$/g;
        return str.replace(pattern, '');
    };

    validator.escape = function (str) {
        return (str.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\`/g, '&#96;'));
    };

    validator.stripLow = function (str, keep_new_lines) {
        var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
        return validator.blacklist(str, chars);
    };

    validator.whitelist = function (str, chars) {
        return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
    };

    validator.blacklist = function (str, chars) {
        return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
    };

    var default_normalize_email_options = {
        lowercase: true,
        remove_dots: true,
        remove_extension: true
    };

    validator.normalizeEmail = function (email, options) {
        options = merge(options, default_normalize_email_options);
        if (!validator.isEmail(email)) {
            return false;
        }
        var parts = email.split('@', 2);
        parts[1] = parts[1].toLowerCase();
        if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
            if (options.remove_extension) {
                parts[0] = parts[0].split('+')[0];
            }
            if (options.remove_dots) {
                parts[0] = parts[0].replace(/\./g, '');
            }
            if (!parts[0].length) {
                return false;
            }
            parts[0] = parts[0].toLowerCase();
            parts[1] = 'gmail.com';
        } else if (options.lowercase) {
            parts[0] = parts[0].toLowerCase();
        }
        return parts.join('@');
    };

    function merge(obj, defaults) {
        obj = obj || {};
        for (var key in defaults) {
            if (typeof obj[key] === 'undefined') {
                obj[key] = defaults[key];
            }
        }
        return obj;
    }

    function currencyRegex(options) {
        var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?')
            , negative = '-?'
            , whole_dollar_amount_without_sep = '[1-9]\\d*'
            , whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*'
            , valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep]
            , whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?'
            , decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
        var pattern = whole_dollar_amount + decimal_amount;
        // default is negative sign before symbol, but there are two other options (besides parens)
        if (options.allow_negatives && !options.parens_for_negatives) {
            if (options.negative_sign_after_digits) {
                pattern += negative;
            }
            else if (options.negative_sign_before_digits) {
                pattern = negative + pattern;
            }
        }
        // South African Rand, for example, uses R 123 (space) and R-123 (no space)
        if (options.allow_negative_sign_placeholder) {
            pattern = '( (?!\\-))?' + pattern;
        }
        else if (options.allow_space_after_symbol) {
            pattern = ' ?' + pattern;
        }
        else if (options.allow_space_after_digits) {
            pattern += '( (?!$))?';
        }
        if (options.symbol_after_digits) {
            pattern += symbol;
        } else {
            pattern = symbol + pattern;
        }
        if (options.allow_negatives) {
            if (options.parens_for_negatives) {
                pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
            }
            else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
                pattern = negative + pattern;
            }
        }
        return new RegExp(
            '^' +
            // ensure there's a dollar and/or decimal amount, and that it doesn't start with a space or a negative sign followed by a space
            '(?!-? )(?=.*\\d)' +
            pattern +
            '$'
        );
    }

    validator.init();

    return validator;

});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module), __webpack_require__(5)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
 * Keycodez - Simple and quick keycodes map
 *
 * Copyright (c) 2014 Andrew Hathaway, https://github.com/AndrewHathaway/keycodez
 *
 * The MIT License (MIT)
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
module.exports = {
  3   : 'break',
  8   : 'backspaceDelete',
  9   : 'tab',
  12  : 'clear',
  13  : 'enter',
  16  : 'shift',
  17  : 'ctrl',
  18  : 'alt',
  19  : 'pauseBreak',
  20  : 'capsLock',
  27  : 'escape',
  32  : 'spacebar',
  33  : 'pageUp',
  34  : 'pageDown',
  35  : 'end',
  36  : 'home',
  37  : 'leftArrow',
  38  : 'upArrow',
  39  : 'rightArrow',
  40  : 'downArrow',
  41  : 'select',
  42  : 'print',
  43  : 'execute',
  44  : 'printScreen',
  45  : 'insert',
  46  : 'delete',
  48  : '0',
  49  : '1',
  50  : '2',
  51  : '3',
  52  : '4',
  53  : '5',
  54  : '6',
  55  : '7',
  56  : '8',
  57  : '9',
  65  : 'a',
  66  : 'b',
  67  : 'c',
  68  : 'd',
  69  : 'e',
  70  : 'f',
  71  : 'g',
  72  : 'h',
  73  : 'i',
  74  : 'j',
  75  : 'k',
  76  : 'l',
  77  : 'm',
  78  : 'n',
  79  : 'o',
  80  : 'p',
  81  : 'q',
  82  : 'r',
  83  : 's',
  84  : 't',
  85  : 'u',
  86  : 'v',
  87  : 'w',
  88  : 'x',
  89  : 'y',
  90  : 'z',
  91  : 'windowsKeyLeftCMD',
  92  : 'windowsKeyRight',
  93  : 'windowsKeyRightCMD',
  96  : 'numpad0',
  97  : 'numpad1',
  98  : 'numpad2',
  99  : 'numpad3',
  100 : 'numpad4',
  101 : 'numpad5',
  102 : 'numpad6',
  103 : 'numpad7',
  104 : 'numpad8',
  105 : 'numpad9',
  106 : 'multiply',
  107 : 'add',
  109 : 'subtract',
  110 : 'decimalPoint',
  111 : 'divide',
  112 : 'f1',
  113 : 'f2',
  114 : 'f3',
  115 : 'f4',
  116 : 'f5',
  117 : 'f6',
  118 : 'f7',
  119 : 'f8',
  120 : 'f9',
  121 : 'f10',
  122 : 'f11',
  123 : 'f12',
  124 : 'f13',
  125 : 'f14',
  126 : 'f15',
  127 : 'f16',
  128 : 'f17',
  129 : 'f18',
  130 : 'f19',
  144 : 'numLock',
  145 : 'scrollLock',
  173 : 'toggleMute',
  174 : 'decreaseVolume',
  175 : 'increaseVolume',
  181 : 'fireboxToggleMute',
  182 : 'firefoxDecreaseVolume',
  183 : 'firefoxIncreaseVolume',
  186 : 'semiColon',
  187 : 'equalSign',
  188 : 'comma',
  189 : 'dash',
  190 : 'period',
  191 : 'forwardSlash',
  192 : 'graveAccent',
  219 : 'openBracket',
  220 : 'backSlash',
  221 : 'closeBracket',
  222 : 'singleQuote',
  224 : 'firefoxCMD',
  225 : 'altgr',
  255 : 'toggleTouchpad'
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = depd

/**
 * Create deprecate for namespace in caller.
 */

function depd(namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate(message) {
    // no-op in browser
  }

  deprecate._file = undefined
  deprecate._ignored = true
  deprecate._namespace = namespace
  deprecate._traced = false
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction(fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty(obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }

  return
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./lib/validation.js
var validation_namespaceObject = {};
__webpack_require__.r(validation_namespaceObject);
__webpack_require__.d(validation_namespaceObject, "default", function() { return lib_validation; });

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"}
var external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_ = __webpack_require__(1);
var external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_);

// EXTERNAL MODULE: ../node_modules/keycodez/index.js
var keycodez = __webpack_require__(3);
var keycodez_default = /*#__PURE__*/__webpack_require__.n(keycodez);

// EXTERNAL MODULE: ../node_modules/validator/validator.js
var validator = __webpack_require__(2);
var validator_default = /*#__PURE__*/__webpack_require__.n(validator);

// CONCATENATED MODULE: ./lib/stringParser.js
/* harmony default export */ var stringParser = ((template, params) => {
  template = template || '';
  params = params || {};
  /*
   * Split up template in to array of characters
   */

  var characters = template.split('');
  var buffer = '';
  var parsedTemplate = '';
  var collecting = false;

  for (var i = 0; i < characters.length; i++) {
    var currentChar = characters[i];
    /*
     * If we're not collecting and we're not
     * and opening or closing brace then
     * append the charater to the
     * parsedTemplate and move on
     */

    if (!collecting && currentChar != '{' && currentChar != '}') {
      parsedTemplate += currentChar;
      continue;
    }
    /*
     * If we're an opening brace,
     * start collecting for the buffer
     */


    if (currentChar == '{') {
      collecting = true;
    }
    /*
     * If we're here, we're collecting so if
     * we're not a brace of any sort then add
     * the character to the buffer
     */


    if (currentChar != '{' && currentChar != '}') {
      buffer += currentChar;
    }
    /*
     * If we're a closing brace, then we
     * attempt to get the value with the
     * buffers name from the params object
     * and add it to the parsedTemplate
     */


    if (currentChar == '}') {
      var value = '';

      if (typeof params[buffer] !== 'undefined') {
        value = params[buffer];
      }

      parsedTemplate += value;
      /*
       * Stop collecting and reset
       * the buffer to nothing
       */

      collecting = false;
      buffer = '';
    }
  }

  return parsedTemplate;
});
// CONCATENATED MODULE: ./lib/validation.js



var extraValidators = {
  /*
   * isAccepted Validation Mehod
   */
  isAccepted: (value, expected) => {
    return value == expected;
  },

  /*
   * isAllIn Validation Method
   */
  isAllIn: (value, options) => {
    if (!value) {
      return false;
    }

    return external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.every(value, item => {
      return options.indexOf(item) > -1;
    });
  }
};
/**
 * Validate a value against a validation item
 *
 * @param  any     value          Value being tested
 * @param  object  validationItem Rule set for validator
 * @return boolean                Valid?
 */

var validateAnswer = (value, validationItem, questionAnswers) => {
  var validationMethod = typeof extraValidators[validationItem.type] !== 'undefined' ? extraValidators[validationItem.type] : validator_default.a.hasOwnProperty(validationItem.type) && typeof validator_default.a[validationItem.type] === 'function' ? validator_default.a[validationItem.type] : undefined;

  if (!validationMethod) {
    throw new Error('Winterfell: Attempted to validate for undefined method "' + validationItem.type + '"');
  }
  /*
   * Clone the validation parameters so it doesn't effect the
   * parameters elsewhere by reference.
   */


  var validationParameters = (validationItem.params || []).slice(0);
  /*
   * Run the parameters through the stringParser with the
   * questionAnswers so that it sets the questionAnswer
   * as the parameter.
   */

  validationParameters = validationParameters.map(p => {
    return typeof p === 'string' ? stringParser(p, questionAnswers) : p;
  });
  /*
   * Push the value of the question we're validating to
   * the first parameter of the validationParameters
   */

  validationParameters.unshift(value);
  /*
   * Return the result of the validation method running
   * wtih the validationParameters.
   */

  return validationMethod.apply(null, validationParameters);
};
/**
 * Get active questions from an array of questions,
 * recursively. Follows active conditions.
 *
 * @param  array  questions       Questions to run through
 * @param  object questionAnswers Current answers for questions
 * @param  array  activeQuestions
 * @return array                  All active questions
 */


var getActiveQuestions = (questions, questionAnswers, activeQuestions, questionSetId) => {
  activeQuestions = activeQuestions || [];
  questions.forEach(question => {
    activeQuestions.push({
      questionId: question.questionId,
      validations: question.validations,
      questionSetId
    });

    if (typeof question.input.options === 'undefined' || question.input.options.length === 0) {
      return;
    }

    question.input.options.forEach(option => {
      if (typeof option.conditionalQuestions === 'undefined' || option.conditionalQuestions.length == 0 || questionAnswers[question.questionId] != option.value) {
        return;
      }

      activeQuestions = getActiveQuestions(option.conditionalQuestions, questionAnswers, activeQuestions, questionSetId);
    });
  });
  return activeQuestions;
};
/**
 * Get active questions from multiple question sets
 *
 * @param  array  questionSets    All question sets
 * @param  object questionAnswers Current answers for questions
 * @return array                  All active questions
 */


var getActiveQuestionsFromQuestionSets = (questionSets, questionAnswers) => {
  var questionsToCheck = [];
  questionSets.forEach(questionSet => {
    Array.prototype.push.apply(questionsToCheck, getActiveQuestions(questionSet.questions, questionAnswers, [], questionSet.questionSetId));
  });
  return questionsToCheck;
};
/**
 * Get all invalid questions from question sets
 *
 * @param  array  questionSets     All question sets
 * @param  object questionAnswers  Current answers for questions
 * @return object                  Set of questions and their invalidations
 */


var getQuestionPanelInvalidQuestions = (questionSets, questionAnswers) => {
  var masterQuestionsToCheck = getActiveQuestionsFromQuestionSets(questionSets, questionAnswers).slice();
  var questionsToCheck = masterQuestionsToCheck.slice().filter(question => {
    return question.validations instanceof Array && question.validations.length > 0;
  });
  /*
   * Now we run validations for the questions
   * we need to check for errors.
   *
   * Go through every question, and its validations
   * then run the question and answer through
   * the validation method required.
   */

  var errors = {};
  questionsToCheck.forEach(({
    questionId,
    validations,
    questionSetId
  }) => [].forEach.bind(validations, validation => {
    var valid = validateAnswer(questionAnswers[questionId], validation, questionAnswers);

    if (valid) {
      return;
    }
    /*
     * If we got here, the validation failed. Add
     * an validation error and continue to the next!
     */


    if (typeof errors[questionId] === 'undefined') {
      errors[questionId] = [];
    }

    errors[questionId].push(Object.assign(validation, {
      questionSetId: questionSetId
    }));
  })());
  return errors;
};
/**
 * Add a single validation method
 *
 * @param  string   name   Name of validation method
 * @param  function method Validation method
 */


var addValidationMethod = (name, method) => {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parameter of addValidationMethod ' + 'must be of type string');
  }

  if (typeof method !== 'function') {
    throw new Error('Winterfell: Second parameter of addValidationMethod ' + 'must be of type function');
  }

  extraValidators[name] = method;
};
/**
 * Add multiple validation methods
 *
 * @param  array methods Methods to add. name => func
 */


var addValidationMethods = methods => {
  if (typeof methods !== 'object') {
    throw new Error('Winterfell: First parameter of addValidationMethods ' + 'must be of type object');
  }

  for (var methodName in methods) {
    addValidationMethod(methodName, methods[methodName]);
  }
};

/* harmony default export */ var lib_validation = ({
  validateAnswer: validateAnswer,
  getActiveQuestions: getActiveQuestions,
  getActiveQuestionsFromQuestionSets: getActiveQuestionsFromQuestionSets,
  getQuestionPanelInvalidQuestions: getQuestionPanelInvalidQuestions,
  addValidationMethod: addValidationMethod,
  addValidationMethods: addValidationMethods
});
// CONCATENATED MODULE: ./lib/errors.js
var errorMessages = {
  /*
   * Fallback Error Message
   */
  default: 'Please correct the field below',

  /*
   * Min and Max string left message
   */
  isLength: validationItem => {
    switch (validationItem.params.length) {
      case 1:
        return 'Please enter a value with at least ' + validationItem.params[0] + ' character' + (validationItem.params[0] != 1 ? 's' : '');
        break;

      case 2:
        return 'Please enter a value between ' + validationItem.params[0] + ' and ' + validationItem.params[1] + ' characters long';
        break;

      default:
        return errorMessages.default;
        break;
    }

    return errorMessage;
  },

  /*
   * Valid email address
   */
  isEmail: 'Please enter a valid email address',

  /*
   * String contains seed
   */
  contains: validationItem => {
    return 'Please enter a value that contains "' + validationItem.params[0] + '"';
  },

  /*
   * String equals string
   */
  equals: validationItem => {
    return 'Value must equal ' + validationItem.params[0];
  },

  /*
   * Characters A-Z only
   */
  isAlpha: 'Please only enter letters',

  /*
   * Characters A-Z and 1-9 only
   */
  isAlphanumeric: 'Please only enter letters and numbers',

  /*
   * Credit card
   */
  isCreditCard: 'Please enter a valid credit card number',

  /*
   * Currency
   */
  isCurrency: 'Please enter a current value only',

  /*
   * Date
   */
  isDate: 'Please enter a valid date',

  /*
   * Decimal value
   */
  isDecimal: 'Please enter a decimal value only',

  /*
   * Float value
   */
  isFloat: 'Please enter a float value only',

  /*
   * IP value
   */
  isIP: 'Please enter a valid IP address',

  /*
   * isIn array of items
   */
  isIn: 'Please enter one of the allowed values',

  /*
   * isAllIn array of items
   */
  isAllIn: 'Please enter one of the allowed values',

  /*
   * JSON Value
   */
  isJSON: 'Please enter a valid JSON string',

  /*
   * Lowercase values only
   */
  isLowercase: 'Please enter lowercase characters only',

  /*
   * Uppercase values only
   */
  isUppercase: 'Please enter uppercase characters only',

  /*
   * Mobile phone
   */
  isMobilePhone: 'Please enter a valid mobile number',

  /*
   * MongoId only
   */
  isMongoId: 'Please enter a valid MongoId',

  /*
   * Numbers only
   */
  isNumeric: 'Please enter numbers only',

  /*
   * URL Only
   */
  isURL: 'Please enter a valid URL',

  /*
   * isAccepted - checkbox
   */
  isAccepted: 'Please accept by clicking the checkbox'
};
/**
 * Add a single error message
 *
 * @param  string          type    Error message type
 * @param  string|function message Message or function to get message
 */

errorMessages.addErrorMessage = (type, message) => {
  if (typeof type !== 'string') {
    throw new Error('Winterfell: First parameter of addErrorMessage ' + 'must be of type string');
  }

  if (typeof message !== 'function' && typeof message !== 'string') {
    throw new Error('Winterfell: Second parameter of addErrorMessage ' + 'must be of type function or string');
  }

  setErrorMessage(type, message);
};
/**
 * Add multiple error messages
 *
 * @param  object messages Error messages to add. type => func|string
 */


errorMessages.addErrorMessages = messages => {
  if (typeof messages !== 'object') {
    throw new Error('Winterfell: First parameter of addErrorMessages ' + 'must be of type object');
  }

  for (let type in messages) {
    errorMessages.addErrorMessage(type, messages[type]);
  }
};
/**
 * Get an error message for a validationItem
 *
 * @param  object  validationItem Validation error item
 * @return string                 Error message to display
 */


errorMessages.getErrorMessage = validationItem => {
  var errorMessage = typeof validationItem.message !== 'undefined' ? validationItem.message : typeof errorMessages[validationItem.type] !== 'undefined' ? errorMessages[validationItem.type] : errorMessages.default;
  return typeof errorMessage === 'function' ? errorMessage(validationItem) : errorMessage;
};
/**
 * setErrorMessage
 *
 * @param  string          type    Error message type
 * @param  stirng|function message essage or function to get message
 */


var setErrorMessage = (type, message) => {
  errorMessages[type] = message;
};

/* harmony default export */ var errors = (errorMessages);
// CONCATENATED MODULE: ./button.js


class button_Button extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", {
      href: "#",
      className: this.props.className,
      onClick: this.handleClick.bind(this)
    }, this.props.text);
  }

}

;
button_Button.defaultProps = {
  text: 'Submit',
  className: undefined,
  onClick: () => {}
};
/* harmony default export */ var button_0 = (button_Button);
// CONCATENATED MODULE: ./lib/types.js
const iconMapper = {
  WARNING: 'fas fa-exclamation-circle',
  DANGER: 'fas fa-exclamation-circle',
  SUCCESS: 'fas fa-check'
};
const alertClassMapper = {
  WARNING: 'alert alert-warning',
  DANGER: 'alert alert-danger',
  SUCCESS: 'alert alert-success'
};
// CONCATENATED MODULE: ./components/Alert.js




class Alert_Alert extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  handleClick(e, action) {
    e.preventDefault();
    this.props.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action);
  }

  render() {
    const {
      status = '',
      text = '',
      options = []
    } = this.props.alert;

    const renderIcon = (icon = '') => {
      if (!external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.isEmpty(icon)) {
        return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("i", {
          className: iconMapper[icon]
        });
      }

      return '';
    };

    const renderOptions = options => {
      if (!external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.isEmpty(options)) {
        return [...options].map(option => {
          const {
            text = '',
            action = '',
            icon = ''
          } = option;
          return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
            onClick: e => this.handleClick(e, action)
          }, !external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.isEmpty(icon) ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("i", {
            className: icon
          }) : '', " ", /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, text));
        });
      }
    };

    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: alertClassMapper[status]
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: "alert-wrap"
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, renderIcon(status), " ", text), " ", renderOptions(options)));
  }

}

Alert_Alert.defaultProps = {
  status: '',
  text: '',
  options: []
};
/* harmony default export */ var components_Alert = (Alert_Alert);
// CONCATENATED MODULE: ./inputTypes/checkboxInput.js


class checkboxInput_CheckboxInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultChecked
    };
  }

  handleChange(e) {
    if (e) {
      this.setState({
        checked: !this.state.checked
      }, () => {
        this.props.onChange(this.state.checked ? this.props.value : undefined);
      });
    } else {
      this.props.onChange(this.state.checked ? this.props.value : undefined);
    }
  }

  componentDidMount() {
    if (this.state.checked) {
      this.handleChange();
    }
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.checkboxInput
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
      className: this.props.classes.checkboxLabel,
      id: this.props.labelId
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "checkbox",
      name: this.props.name,
      "aria-labelledby": this.props.labelId,
      className: this.props.classes.checkbox,
      defaultChecked: this.state.checked,
      value: this.props.value,
      required: this.props.required ? 'required' : undefined,
      disabled: this.props.readOnly,
      onChange: this.handleChange.bind(this),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.checked ? this.props.value : undefined)
    }), this.props.text));
  }

}

;
checkboxInput_CheckboxInput.defaultProps = {
  text: '',
  defaultChecked: false,
  classes: {},
  name: '',
  value: '',
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
/* harmony default export */ var checkboxInput = (checkboxInput_CheckboxInput);
// CONCATENATED MODULE: ./lib/cloneArray.js
/* harmony default export */ var cloneArray = (array => {
  return array.slice(0);
});
// CONCATENATED MODULE: ./inputTypes/checkboxOptionsInput.js



class checkboxOptionsInput_CheckboxOptionsInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value.length > 0 ? cloneArray(this.props.value) : []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) this.setState({
      value: nextProps.value
    });
  }

  handleChange(newVal, e) {
    var currentValue = this.state.value;

    if (e.target.checked) {
      currentValue.push(newVal);
    } else {
      currentValue = currentValue.filter(v => v != newVal);
    }

    this.setState({
      value: currentValue
    }, this.props.onChange.bind(null, currentValue));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("ul", {
      className: this.props.classes.checkboxList
    }, this.props.options.map(opt => /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("li", {
      key: opt.value,
      className: this.props.classes.checkboxListItem
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
      className: this.props.classes.checkboxLabel,
      id: this.props.labelId
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "checkbox",
      name: this.props.name,
      "aria-labelledby": this.props.labelId,
      value: opt.value,
      checked: this.state.value.indexOf(opt.value) > -1,
      className: this.props.classes.checkbox,
      required: this.props.required ? 'required' : undefined,
      disabled: this.props.readOnly,
      onChange: this.handleChange.bind(this, opt.value),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value)
    }), opt.text))));
  }

}

;
checkboxOptionsInput_CheckboxOptionsInput.defaultProps = {
  classes: {},
  name: '',
  value: [],
  options: [],
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
/* harmony default export */ var checkboxOptionsInput = (checkboxOptionsInput_CheckboxOptionsInput);
// CONCATENATED MODULE: ./inputTypes/emailInput.js


class emailInput_EmailInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) this.setState({
      value: nextProps.value
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "email",
      name: this.props.name,
      id: this.props.id,
      "aria-labelledby": this.props.labelId,
      className: this.props.classes.input,
      placeholder: this.props.placeholder,
      value: this.state.value,
      disabled: this.props.disabled || this.props.readOnly,
      required: this.props.required ? 'required' : undefined,
      onChange: this.handleChange.bind(this),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value),
      onKeyDown: this.props.onKeyDown
    });
  }

}

;
emailInput_EmailInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  disabled: undefined,
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onFocus: () => {}
};
/* harmony default export */ var emailInput = (emailInput_EmailInput);
// CONCATENATED MODULE: ./inputTypes/fileInput.js


class fileInput_FileInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "file",
      name: this.props.name,
      id: this.props.id,
      "aria-labelledby": this.props.labelId,
      className: this.props.classes.file,
      required: this.props.required ? 'required' : undefined,
      disabled: this.props.readOnly,
      onChange: this.handleChange.bind(this),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value)
    });
  }

}

;
fileInput_FileInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
/* harmony default export */ var fileInput = (fileInput_FileInput);
// CONCATENATED MODULE: ./inputTypes/hiddenInput.js


class hiddenInput_HiddenInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "hidden",
      name: this.props.name,
      value: this.state.value
    });
  }

}

;
hiddenInput_HiddenInput.defaultProps = {
  name: '',
  value: ''
};
/* harmony default export */ var hiddenInput = (hiddenInput_HiddenInput);
// CONCATENATED MODULE: ./inputTypes/passwordInput.js


class passwordInput_PasswordInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "password",
      name: this.props.name,
      id: this.props.id,
      "aria-labelledby": this.props.labelId,
      className: this.props.classes.input,
      placeholder: this.props.placeholder,
      value: this.state.value,
      required: this.props.required ? 'required' : undefined,
      readOnly: this.props.readOnly,
      onChange: this.handleChange.bind(this),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value),
      onKeyDown: this.props.onKeyDown
    });
  }

}

;
passwordInput_PasswordInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onFocus: () => {}
};
/* harmony default export */ var passwordInput = (passwordInput_PasswordInput);
// CONCATENATED MODULE: ./inputTypes/radioOptionsInput.js


class radioOptionsInput_RadioOptionsInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) this.setState({
      value: nextProps.value
    });
  }

  handleChange(value) {
    this.setState({
      value: value
    }, this.props.onChange.bind(null, value));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("ul", {
      className: this.props.classes.radioList
    }, this.props.options.map(opt => /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("li", {
      key: opt.value,
      className: this.props.classes.radioListItem
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
      className: this.props.classes.radioLabel,
      id: this.props.labelId
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "radio",
      name: this.props.name,
      "aria-labelledby": this.props.labelId,
      checked: this.state.value == opt.value,
      className: this.props.classes.radio,
      required: this.props.required ? 'required' : undefined,
      disabled: this.props.readOnly,
      value: opt.value,
      onChange: this.handleChange.bind(this, opt.value),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value)
    }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("span", null, opt.text)))));
  }

}

;
radioOptionsInput_RadioOptionsInput.defaultProps = {
  classes: {},
  name: '',
  value: '',
  options: [],
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
/* harmony default export */ var radioOptionsInput = (radioOptionsInput_RadioOptionsInput);
// CONCATENATED MODULE: ./inputTypes/selectInput.js


class selectInput_SelectInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) this.setState({
      value: nextProps.value
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    var options = this.props.options.map(opt => /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.text));
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("select", {
      name: this.props.name,
      id: this.props.id,
      className: this.props.classes.select,
      value: this.state.value,
      ref: "select",
      required: this.props.required ? 'required' : undefined,
      disabled: this.props.readOnly,
      onChange: this.handleChange.bind(this),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value)
    }, options);
  }

  componentDidMount() {
    /*
     * Selects automatically pick the first item, so
     * make sure we set it.
     */
    this.handleChange({
      target: {
        value: this.refs.select.value
      }
    });
  }

}

;
selectInput_SelectInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  options: [],
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
/* harmony default export */ var selectInput = (selectInput_SelectInput);
// CONCATENATED MODULE: ./inputTypes/textareaInput.js


class textareaInput_TextareaInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) this.setState({
      value: nextProps.value
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("textarea", {
      type: "text",
      name: this.props.name,
      id: this.props.id,
      "aria-labelledby": this.props.labelId,
      className: this.props.classes.input,
      placeholder: this.props.placeholder,
      value: this.state.value,
      disabled: this.props.disabled || this.props.readOnly,
      required: this.props.required ? 'required' : undefined,
      onChange: this.handleChange.bind(this),
      onFocus: this.props.onFocus.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value)
    });
  }

}

;
textareaInput_TextareaInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  disabled: undefined,
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
/* harmony default export */ var textareaInput = (textareaInput_TextareaInput);
// CONCATENATED MODULE: ./inputTypes/textInput.js


class textInput_TextInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) this.setState({
      value: nextProps.value
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
      type: "text",
      name: this.props.name,
      id: this.props.id,
      "aria-labelledby": this.props.labelId,
      className: this.props.classes.input,
      placeholder: this.props.placeholder,
      value: this.state.value,
      disabled: this.props.disabled || this.props.readOnly,
      required: this.props.required ? 'required' : undefined,
      onChange: this.handleChange.bind(this),
      onBlur: this.props.onBlur.bind(null, this.state.value),
      onFocus: this.props.onFocus.bind(this),
      onKeyDown: this.props.onKeyDown
    });
  }

}

;
textInput_TextInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: '',
  placeholder: '',
  disabled: undefined,
  readOnly: false,
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onFocus: () => {}
};
/* harmony default export */ var textInput = (textInput_TextInput);
// CONCATENATED MODULE: ./inputTypes/buttonInput.js


class buttonInput_ButtonInput extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.questionSetId, this.props.id);
  }

  render() {
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", {
      className: this.props.class,
      disabled: this.props.readOnly,
      onClick: this.handleClick.bind(this)
    }, this.props.text);
  }

}

;
buttonInput_ButtonInput.defaultProps = {
  questionSetId: undefined,
  id: undefined,
  action: undefined,
  text: 'Add',
  placeholder: undefined,
  class: '',
  icon: undefined,
  readOnly: false,
  onClick: () => {}
};
/* harmony default export */ var buttonInput = (buttonInput_ButtonInput);
// CONCATENATED MODULE: ./inputTypes/index.js












let inputTypes = {
  checkboxInput: checkboxInput,
  checkboxOptionsInput: checkboxOptionsInput,
  emailInput: emailInput,
  fileInput: fileInput,
  hiddenInput: hiddenInput,
  passwordInput: passwordInput,
  radioOptionsInput: radioOptionsInput,
  selectInput: selectInput,
  textareaInput: textareaInput,
  textInput: textInput,
  buttonInput: buttonInput
};
/**
 * Add an input type
 *
 * @param  type      name     Name of InputType
 * @param  Component instance Input Type Component
 */

inputTypes.addInputType = (name, instance) => {
  if (typeof name !== 'string') {
    throw new Error('Winterfell: First parameter of addInputType ' + 'must be of type string');
  }

  if (!external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component instanceof instance.constructor) {
    throw new Error('Winterfell: Cannot not assign "' + name + '" as an inputType. ' + 'Second paramter expects a React component');
  }

  inputTypes[name] = instance;
};
/**
 * Add multiple InputTypes
 *
 * @param  object types InputTypes to add. string => Component
 */


inputTypes.addInputTypes = types => {
  if (typeof types !== 'object') {
    throw new Error('Winterfell: First parameter of addInputTypes ' + 'must be of type object');
  }

  for (var type in types) {
    inputTypes.addInputType(type, types[type]);
  }
};

/* harmony default export */ var inputTypes_0 = (inputTypes);
// CONCATENATED MODULE: ./question.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class question_Question extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  handleInputChange(questionId, value) {
    this.props.onAnswerChange(questionId, value, this.props.validations, this.props.validateOn);
  }

  handleInputBlur(questionId, value) {
    this.props.onQuestionBlur(questionId, value, this.props.validations, this.props.validateOn);
  }

  handleInputFocus(questionId) {
    this.props.onQuestionFocus(questionId);
  }

  handleInputClick(questionSetId, questionId) {
    this.props.onQuestionClick(questionSetId, questionId);
  }

  handleQuestionAction(e, questionSetId = '', questionId = '', key = '', counts = {}) {
    e.preventDefault();
    this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
  }

  render() {
    var Input = inputTypes_0[this.props.input.type];

    if (!Input) {
      throw new Error('Winterfell: Input Type "' + this.props.input.type + '" not defined as Winterfell Input Type');
    }
    /*
     * Conditional Questions
     *
     * Go through the inputs options and filter them down
     * to options where the value matches the current questions
     * value. If we have conditional questions on a given option,
     * then render this component with the props for the conditional
     * question.
     */


    var conditionalItems = [];

    if (typeof this.props.input.options !== 'undefined') {
      this.props.input.options.filter(option => {
        return this.props.value instanceof Array ? this.props.value.indexOf(option.value) > -1 : this.props.value == option.value;
      }).filter(option => {
        return typeof option.conditionalQuestions !== 'undefined' && option.conditionalQuestions.length > 0;
      }).forEach(option => [].forEach.bind(option.conditionalQuestions, conditionalQuestion => {
        conditionalItems.push( /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(question_Question, {
          key: conditionalQuestion.questionId,
          questionSetId: this.props.questionSetId,
          questionId: conditionalQuestion.questionId,
          question: conditionalQuestion.question,
          text: conditionalQuestion.text,
          postText: conditionalQuestion.postText,
          validateOn: conditionalQuestion.validateOn,
          validations: conditionalQuestion.validations,
          value: this.props.questionAnswers[conditionalQuestion.questionId],
          input: conditionalQuestion.input,
          classes: this.props.classes,
          nested: true,
          renderError: this.props.renderError,
          readOnly: this.props.readOnly,
          questionAnswers: this.props.questionAnswers,
          questionActions: this.props.questionActions,
          questionNotifications: this.props.questionNotifications,
          validationErrors: this.props.validationErrors,
          onAnswerChange: this.props.onAnswerChange,
          onQuestionFocus: this.props.onQuestionFocus,
          onQuestionClick: this.props.onQuestionClick,
          onQuestionAction: this.props.onQuestionAction,
          onQuestionBlur: this.props.onQuestionBlur,
          onKeyDown: this.props.onKeyDown,
          counts: conditionalQuestion.counts
        }));
      })());
    } // Get the current value. If none is set, then use
    // the default if given.


    var value = typeof this.props.value !== 'undefined' ? this.props.value : typeof this.props.input.default !== 'undefined' ? this.props.input.default : typeof this.props.questionAnswers[this.props.questionId] !== 'undefined' ? this.props.questionAnswers[this.props.questionId] : undefined; // Disable input

    var disabled = typeof this.props.input.disabled !== 'undefined' ? this.props.input.disabled : false; // Retrieve the validation errors for the
    // current question and map them in to
    // error-message blocks.

    var validationErrors = typeof this.props.validationErrors[this.props.questionId] !== 'undefined' ? this.props.validationErrors[this.props.questionId].map(error => {
      return typeof this.props.renderError === 'function' ? this.props.renderError(error, this.props.questionId) : /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        key: this.props.questionId + 'Error' + error.type,
        className: this.props.classes.errorMessage
      }, error.message);
    }) : [];
    var questionActions = typeof this.props.questionActions !== 'undefined' && this.props.questionActions.length > 0 ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.actionControl
    }, this.props.questionActions.map(action => {
      let actionCount = 0;
      let actionClass = 'toolTipHidden';

      if (action.key === 'messages' && this.props.counts && this.props.counts.messagesCount > 0) {
        actionCount = this.props.counts.messagesCount;
        actionClass = this.props.classes.toolTip;
      } else if (action.key === 'notes' && this.props.counts && this.props.counts.notesCount > 0) {
        actionCount = this.props.counts.notesCount;
        actionClass = this.props.classes.toolTip;
      }

      return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        key: action.key,
        className: actionClass
      }, actionCount > 0 ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: this.props.classes.actionCount
      }, actionCount) : '', /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("i", {
        className: action.icon,
        style: {
          color: action.color
        },
        onClick: e => this.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action.key, this.props.counts)
      }), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("span", {
        className: `${this.props.classes.toolTipText} ${this.props.classes.toolTipTop}`
      }, action.toolTip));
    })) : '';
    let questionNotifications = '';
    /* if (typeof this.props.questionActions !== 'undefined' && this.props.questionActions.length > 0) {
    	let displayIcons = false;
    	let displayedQuestionActions = this.props.questionActions.map(action => {
    		if (action.count > 0) {
    			displayIcons = true;
    			return (
    				<Fragment>
    					<div key={action.key} className={this.props.classes.toolTip}>
    						<div className={this.props.classes.actionCount}>{action.count}</div>
    						<i
    							className={action.icon}
    							style={{ color: action.color }}
    							onClick={e => this.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action.key)}
    						/>
    							<span className={`${this.props.classes.toolTipText} ${this.props.classes.toolTipTop}`}>{action.toolTip}</span>
    					</div>
    				</Fragment>
    			);
    		}
    	});
    	if (displayIcons) {
    		questionNotifications = <div className={this.props.classes.actionNotifications}>{displayedQuestionActions}</div>;
    	}
    } */

    let labelId = `${this.props.questionId}-label`;
    let readOnly = typeof this.props.input.readOnly !== 'undefined' ? this.props.input.readOnly : this.props.readOnly;
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.nested ? `${this.props.classes.question} ${this.props.classes.question}-${this.props.classes.nested}` : this.props.classes.question
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.questionWrap
    }, !!this.props.question ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_react_commonjs2_react_amd_React_root_React_["Fragment"], null, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
      className: this.props.classes.label,
      id: labelId,
      htmlFor: this.props.questionId
    }, this.props.question, typeof this.props.renderRequiredAsterisk !== 'undefined' && this.props.input.required ? this.props.renderRequiredAsterisk() : undefined), questionNotifications, questionActions) : undefined, !!this.props.text ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
      className: this.props.classes.questionText
    }, this.props.text) : undefined, validationErrors, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Input, _extends({
      name: this.props.questionId,
      id: this.props.questionId,
      questionSetId: this.props.questionSetId,
      labelId: labelId,
      value: value,
      disabled: disabled,
      text: this.props.input.text,
      icon: this.props.input.icon,
      class: this.props.input.class,
      action: this.props.input.action,
      options: this.props.input.options,
      placeholder: this.props.input.placeholder,
      required: this.props.input.required,
      readOnly: readOnly,
      classes: this.props.classes,
      onChange: this.handleInputChange.bind(this, this.props.questionId),
      onFocus: this.handleInputFocus.bind(this, this.props.questionId),
      onClick: this.handleInputClick.bind(this, this.props.questionSetId, this.props.questionId),
      onBlur: this.handleInputBlur.bind(this, this.props.questionId),
      onKeyDown: this.props.onKeyDown
    }, typeof this.props.input.props === 'object' ? this.props.input.props : {})), !!this.props.postText ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
      className: this.props.classes.questionPostText
    }, this.props.postText) : undefined, typeof this.props.input.questionAlert !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(components_Alert, {
      alert: this.props.input.questionAlert,
      questionSetId: this.props.questionSetId,
      questionId: this.props.questionId,
      handleQuestionAction: this.handleQuestionAction.bind(this)
    }) : ''), conditionalItems);
  }

  componentDidMount() {
    if (typeof this.props.input.default === 'undefined' || this.props.input.type === 'checkboxInput' && typeof this.props.questionAnswers[this.props.questionId] === 'undefined') {
      return;
    }

    this.handleInputChange.call(this, this.props.questionId, this.props.input.default);
  }

}

question_Question.defaultProps = {
  questionSetId: undefined,
  questionId: undefined,
  question: '',
  validateOn: 'blur',
  validations: [],
  text: undefined,
  postText: undefined,
  value: undefined,
  input: {
    default: undefined,
    type: 'textInput',
    limit: undefined,
    placeholder: undefined,
    icon: undefined,
    class: undefined,
    action: undefined,
    disabled: undefined,
    questionAlert: undefined,
    readOnly: undefined
  },
  classes: {},
  questionAnswers: {},
  questionActions: [],
  questionNotifications: [],
  validationErrors: {},
  onAnswerChange: () => {},
  onQuestionBlur: () => {},
  onQuestionFocus: () => {},
  onKeyDown: () => {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  nested: false,
  counts: undefined
};
/* harmony default export */ var question_0 = (question_Question);
// CONCATENATED MODULE: ./questionSet.js




class questionSet_QuestionSet extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  render() {
    var questions = this.props.questions.map(question => {
      return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(question_0, {
        key: question.questionId,
        questionSetId: this.props.id,
        questionId: question.questionId,
        question: question.question,
        validateOn: question.validateOn,
        validations: question.validations,
        text: question.text,
        postText: question.postText,
        value: this.props.questionAnswers[question.questionId],
        input: question.input,
        nested: false,
        classes: this.props.classes,
        renderError: this.props.renderError,
        renderRequiredAsterisk: this.props.renderRequiredAsterisk,
        readOnly: this.props.readOnly,
        questionAnswers: this.props.questionAnswers,
        questionActions: this.props.questionActions,
        validationErrors: this.props.validationErrors,
        onAnswerChange: this.props.onAnswerChange,
        onQuestionBlur: this.props.onQuestionBlur,
        onQuestionFocus: this.props.onQuestionFocus,
        onQuestionClick: this.props.onQuestionClick,
        onQuestionAction: this.props.onQuestionAction,
        onKeyDown: this.props.onKeyDown,
        counts: question.counts
      });
    });
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.questionSet
    }, typeof this.props.questionSetHeader !== 'undefined' || typeof this.props.questionSetText !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.questionSetHeaderContainer
    }, typeof this.props.questionSetHeader !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("h4", {
      className: this.props.classes.questionSetHeader
    }, this.props.questionSetHeader) : undefined, typeof this.props.questionSetText !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
      className: this.props.classes.questionSetText
    }, this.props.questionSetText) : undefined) : undefined, questions);
  }

}

;
questionSet_QuestionSet.defaultProps = {
  id: undefined,
  name: '',
  questionSetHeader: undefined,
  questionSetText: undefined,
  questions: [],
  questionAnswers: {},
  questionActions: [],
  classes: {},
  validationErrors: {},
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  onAnswerChange: () => {},
  onQuestionBlur: () => {},
  onQuestionFocus: () => {},
  onQuestionClick: () => {},
  onQuestionAction: () => {},
  onKeyDown: () => {}
};
/* harmony default export */ var questionSet_0 = (questionSet_QuestionSet);
// CONCATENATED MODULE: ./questionPanel.js








class questionPanel_QuestionPanel extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: this.props.validationErrors
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      validationErrors: nextProps.validationErrors
    });
  }

  handleAnswerValidate(questionId, questionAnswer, validations) {
    if (typeof validations === 'undefined' || validations.length === 0) {
      return;
    }
    /*
     * Run the question through its validations and
     * show any error messages if invalid.
     */


    var questionValidationErrors = [];
    validations.forEach(validation => {
      if (lib_validation.validateAnswer(questionAnswer, validation, this.props.questionAnswers)) {
        return;
      }

      questionValidationErrors.push({
        type: validation.type,
        message: errors.getErrorMessage(validation)
      });
    });

    var validationErrors = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.chain(this.state.validationErrors).set(questionId, questionValidationErrors).value();

    this.setState({
      validationErrors: validationErrors
    });
  }

  handleMainButtonClick() {
    var action = this.props.action.default;
    var conditions = this.props.action.conditions || [];
    /*
     * We need to get all the question sets for this panel.
     * Collate a list of the question set IDs required
     * and run through the schema to grab the question sets.
     */

    var questionSetIds = this.props.questionSets.map(qS => qS.questionSetId);

    var questionSets = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.chain(this.props.schema.questionSets).filter(qS => questionSetIds.indexOf(qS.questionSetId) > -1).value();
    /*
     * Get any incorrect fields that need error messages.
     */


    var invalidQuestions = lib_validation.getQuestionPanelInvalidQuestions(questionSets, this.props.questionAnswers);
    /*
     * If the panel isn't valid...
     */

    if (Object.keys(invalidQuestions).length > 0) {
      var validationErrors = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.mapValues(invalidQuestions, validations => {
        return validations.map(validation => {
          return {
            type: validation.type,
            message: errors.getErrorMessage(validation)
          };
        });
      });

      this.setState({
        validationErrors: validationErrors
      });
      return;
    }
    /*
     * Panel is valid. So what do we do next?
     * Check our conditions and act upon them, or the default.
     */


    conditions.forEach(condition => {
      var answer = this.props.questionAnswers[condition.questionId];
      action = answer == condition.value ? {
        action: condition.action,
        target: condition.target
      } : action;
    });
    /*
     * Decide which action to take depending on
     * the action decided upon.
     */

    switch (action.action) {
      case 'GOTO':
        this.props.onSwitchPanel(action.target);
        break;

      case 'SUBMIT':
        this.props.onSubmit(action.target);
        break;
    }
  }

  handleBackButtonClick() {
    if (this.props.panelHistory.length == 0) {
      return;
    }

    this.props.onPanelBack();
  }

  handleAnswerChange(questionId, questionAnswer, validations, validateOn) {
    this.props.onAnswerChange(questionId, questionAnswer);
    this.setState({
      validationErrors: external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.chain(this.state.validationErrors).set(questionId, []).value()
    });

    if (validateOn === 'change') {
      this.handleAnswerValidate(questionId, questionAnswer, validations);
    }
  }

  handleQuestionBlur(questionId, questionAnswer, validations, validateOn) {
    if (validateOn === 'blur') {
      this.handleAnswerValidate(questionId, questionAnswer, validations);
    }
  }

  handleQuestionFocus(questionId) {
    this.props.onQuestionFocus(questionId);
  }

  handleQuestionClick(questionSetId, questionId) {
    this.props.onQuestionClick(questionSetId, questionId);
  }

  handleQuestionAction(e, questionSetId, questionId, key, counts) {
    this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
  }

  handleInputKeyDown(e) {
    if (keycodez_default.a[e.keyCode] === 'enter') {
      e.preventDefault();
      this.handleMainButtonClick.call(this);
    }
  }

  render() {
    var questionSets = this.props.questionSets.map(questionSetMeta => {
      var questionSet = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.find(this.props.schema.questionSets, {
        questionSetId: questionSetMeta.questionSetId
      });

      if (!questionSet) {
        return undefined;
      }

      return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(questionSet_0, {
        key: questionSet.questionSetId,
        id: questionSet.questionSetId,
        name: questionSet.name,
        questionSetHeader: questionSet.questionSetHeader,
        questionSetText: questionSet.questionSetText,
        questions: questionSet.questions,
        classes: this.props.classes,
        questionAnswers: this.props.questionAnswers,
        questionActions: this.props.questionActions,
        renderError: this.props.renderError,
        renderRequiredAsterisk: this.props.renderRequiredAsterisk,
        readOnly: this.props.readOnly,
        validationErrors: this.state.validationErrors,
        onAnswerChange: this.handleAnswerChange.bind(this),
        onQuestionFocus: this.handleQuestionFocus.bind(this),
        onQuestionClick: this.handleQuestionClick.bind(this),
        onQuestionAction: this.handleQuestionAction.bind(this),
        onQuestionBlur: this.handleQuestionBlur.bind(this),
        onKeyDown: this.handleInputKeyDown.bind(this)
      });
    });
    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.questionPanel
    }, typeof this.props.panelHeader !== 'undefined' || typeof this.props.panelText !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.questionPanelHeaderContainer
    }, typeof this.props.panelHeader !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("h3", {
      className: this.props.classes.questionPanelHeaderText
    }, this.props.panelHeader) : undefined, typeof this.props.panelText !== 'undefined' ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
      className: this.props.classes.questionPanelText
    }, this.props.panelText) : undefined) : undefined, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.questionSets
    }, questionSets), /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.props.classes.buttonBar
    }, this.props.panelHistory.length > 1 && !this.props.backButton.disabled ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(button_0, {
      text: this.props.backButton.text || 'Back',
      onClick: this.handleBackButtonClick.bind(this),
      className: this.props.classes.backButton
    }) : undefined, !this.props.button.disabled ? /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(button_0, {
      text: this.props.button.text,
      onClick: this.handleMainButtonClick.bind(this),
      className: this.props.classes.controlButton
    }) : undefined));
  }

}

;
questionPanel_QuestionPanel.defaultProps = {
  validationErrors: {},
  schema: {},
  classes: {},
  panelId: undefined,
  panelIndex: undefined,
  panelHeader: undefined,
  panelText: undefined,
  action: {
    default: {},
    conditions: []
  },
  button: {
    text: 'Submit'
  },
  backButton: {
    text: 'Back'
  },
  questionSets: [],
  questionAnswers: {},
  questionActions: [],
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  onAnswerChange: () => {},
  onQuestionFocus: () => {},
  onQuestionClick: () => {},
  onQuestionAction: () => {},
  onSwitchPanel: () => {},
  onPanelBack: () => {},
  panelHistory: []
};
/* harmony default export */ var questionPanel = (questionPanel_QuestionPanel);
// CONCATENATED MODULE: ./index.js







class index_Winterfell extends external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component {
  constructor(props) {
    super(props);
    this.formComponent = null;
    this.panelHistory = [];

    var schema = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.extend({
      classes: {},
      formPanels: [],
      questionPanels: [],
      questionSets: [],
      questionActions: []
    }, props.schema);

    schema.formPanels = schema.formPanels.sort((a, b) => a.index > b.index);
    var panelId = typeof props.panelId !== 'undefined' ? props.panelId : schema.formPanels.length > 0 ? schema.formPanels[0].panelId : undefined;
    var currentPanel = typeof schema !== 'undefined' && typeof schema.formPanels !== 'undefined' && typeof panelId !== 'undefined' ? external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.find(schema.formPanels, panel => panel.panelId == panelId) : undefined;

    if (!currentPanel) {
      throw new Error('Winterfell: Could not find initial panel and failed to render.');
    }

    this.state = {
      schema: schema,
      currentPanel: currentPanel,
      action: props.action,
      questionAnswers: props.questionAnswers,
      panelId: props.panelId,
      validationErrors: props.validationErrors
    };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.panelId !== 'undefined') {
      this.setState({
        action: nextProps.action,
        schema: nextProps.schema,
        questionAnswers: nextProps.questionAnswers,
        panelId: nextProps.panelId,
        validationErrors: nextProps.validationErrors
      });

      var panel = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.find(this.props.schema.formPanels, {
        panelId: nextProps.panelId
      });

      if (panel) {
        this.setState({
          currentPanel: panel
        }, this.props.onSwitchPanel.bind(null, panel));
      }
    } else {
      this.setState({
        action: nextProps.action,
        schema: nextProps.schema,
        validationErrors: nextProps.validationErrors,
        questionAnswers: nextProps.questionAnswers
      });
    }
  }

  handleAnswerChange(questionId, questionAnswer) {
    var questionAnswers = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.chain(this.state.questionAnswers).set(questionId, questionAnswer).value();

    this.setState({
      questionAnswers: questionAnswers
    }, this.props.onUpdate.bind(null, questionId, questionAnswers));
  }

  handleSwitchPanel(panelId, preventHistory) {
    var panel = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.find(this.props.schema.formPanels, {
      panelId: panelId
    });

    if (!panel) {
      throw new Error('Winterfell: Tried to switch to panel "' + panelId + '", which does not exist.');
    }

    if (!preventHistory) {
      this.panelHistory.push(panel.panelId);
    }

    this.setState({
      currentPanel: panel
    }, this.props.onSwitchPanel.bind(null, panel));
  }

  handleBackButtonClick() {
    this.panelHistory.pop();
    this.handleSwitchPanel.call(this, this.panelHistory[this.panelHistory.length - 1], true);
  }

  handleQuestionFocus(questionId) {
    this.props.onQuestionFocus(questionId);
  }

  handleQuestionClick(questionSetId, questionId) {
    this.props.onQuestionClick(questionSetId, questionId);
  }

  handleQuestionAction(e, questionSetId, questionId, key, counts) {
    this.props.onQuestionAction(e, questionSetId, questionId, key, counts);
  }

  handleSubmit(action) {
    if (this.props.disableSubmit) {
      this.props.onSubmit(this.state.questionAnswers, action);
      return;
    }
    /*
     * If we are not disabling the functionality of the form,
     * we need to set the action provided in the form, then submit.
     */


    this.setState({
      action: action
    }, () => {
      if (!this.formComponent) {
        return;
      }

      this.formComponent.submit();
    });
  }

  render() {
    var currentPanel = external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_default.a.find(this.state.schema.questionPanels, panel => panel.panelId == this.state.currentPanel.panelId);

    return /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("form", {
      method: this.props.method,
      encType: this.props.encType,
      action: this.state.action,
      ref: ref => this.formComponent = ref,
      className: this.state.schema.classes.form
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      className: this.state.schema.classes.questionPanels
    }, /*#__PURE__*/external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(questionPanel, {
      schema: this.state.schema,
      classes: this.state.schema.classes,
      panelId: currentPanel.panelId,
      panelIndex: currentPanel.panelIndex,
      panelHeader: currentPanel.panelHeader,
      panelText: currentPanel.panelText,
      action: currentPanel.action,
      button: currentPanel.button,
      backButton: currentPanel.backButton,
      questionSets: currentPanel.questionSets,
      questionAnswers: this.state.questionAnswers,
      questionActions: this.state.schema.questionActions,
      panelHistory: this.panelHistory,
      validationErrors: this.props.validationErrors,
      renderError: this.props.renderError,
      renderRequiredAsterisk: this.props.renderRequiredAsterisk,
      readOnly: this.props.readOnly,
      onQuestionFocus: this.handleQuestionFocus.bind(this),
      onQuestionClick: this.handleQuestionClick.bind(this),
      onQuestionAction: this.handleQuestionAction.bind(this),
      onAnswerChange: this.handleAnswerChange.bind(this),
      onPanelBack: this.handleBackButtonClick.bind(this),
      onSwitchPanel: this.handleSwitchPanel.bind(this),
      onSubmit: this.handleSubmit.bind(this)
    })));
  }

  componentDidMount() {
    this.panelHistory.push(this.state.currentPanel.panelId);
    this.props.onRender();
  }

}

;
index_Winterfell.inputTypes = inputTypes_0;
index_Winterfell.errorMessages = errors;
index_Winterfell.validation = validation_namespaceObject;
index_Winterfell.addInputType = index_Winterfell.inputTypes.addInputType;
index_Winterfell.addInputTypes = index_Winterfell.inputTypes.addInputTypes;
index_Winterfell.addErrorMessage = index_Winterfell.errorMessages.addErrorMessage;
index_Winterfell.addErrorMessages = index_Winterfell.errorMessages.addErrorMessages;
index_Winterfell.addValidationMethod = index_Winterfell.validation.addValidationMethod;
index_Winterfell.addValidationMethods = index_Winterfell.validation.addValidationMethods;
index_Winterfell.defaultProps = {
  questionAnswers: {},
  encType: 'application/x-www-form-urlencoded',
  method: 'POST',
  action: '',
  panelId: undefined,
  disableSubmit: false,
  renderError: undefined,
  renderRequiredAsterisk: undefined,
  readOnly: false,
  validationErrors: {},
  onSubmit: () => {},
  onUpdate: () => {},
  onSwitchPanel: () => {},
  onRender: () => {},
  onQuestionFocus: () => {},
  onQuestionClick: () => {},
  onQuestionAction: () => {}
};
/* harmony default export */ var index = __webpack_exports__["default"] = (index_Winterfell);

/***/ })
/******/ ]);
});