'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _events = require('events');

var _symbol = require('symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var EMITTER = (0, _symbol2['default'])('EMITTER');

var EventHubService = (function () {
    function EventHubService() {
        _classCallCheck(this, EventHubService);

        this[EMITTER] = new _events.EventEmitter();
    }

    _createClass(EventHubService, [{
        key: 'on',
        value: function on(eventName, handler) {
            this[EMITTER].addListener(eventName, handler);
        }
    }, {
        key: 'off',
        value: function off(eventName, handler) {
            this[EMITTER].removeListener(eventName, handler);
        }
    }, {
        key: 'emit',
        value: function emit() {
            var _this = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            process.nextTick(function () {
                var _EMITTER;

                (_EMITTER = _this[EMITTER]).emit.apply(_EMITTER, args);
            });
        }
    }]);

    return EventHubService;
})();

exports['default'] = new EventHubService();
module.exports = exports['default'];