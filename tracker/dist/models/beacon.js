'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

exports['default'] = _mongoose2['default'].model('Beacon', {
    uuid: String,
    major: String,
    minor: String,
    lastSeen: { type: Date, 'default': Date.now },
    subscribers: Array
});
module.exports = exports['default'];