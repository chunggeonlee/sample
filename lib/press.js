import { press as util } from './util/index';
import { press as components } from './component/index';

var press;

press = require( './motif.js' ).press;
press = require( './color.js' ).press;
press = require( './style.js' ).press;
press = require( './palette.js' ).press;
press = require( './path.js' ).press;
press = require( './logo.js' ).press;
press = require( './device.js' ).press;
press = require( './stashable.js' ).press;
press = require( './clickable.js' ).press;
press = require( './button.js' ).press;
press = require( './wire.js' ).press;
press = require( './gauss.js' ).press;
press = require( './comm.js' ).press;
press = require( './modal.js' ).press;

press = util;
press = components;

exports.press = press;
