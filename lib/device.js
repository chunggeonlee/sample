( function( press, undefined ) {
    const _agent = {
        IOS : 0,
        ANDROID : 1,
        OTMOB : 2,
        NOMOB : 3 
    };

    const _browser = {
        CHROME : 0,
        SAFARI : 1,
        FIREFOX : 2,
        MSIE : 3,
        OPERA : 4,
        OTHER : 5 
    };

    var Rectangle = function( width, height ) {
        this.lower = function() {
            return Math.min( width, height );
        };
        this.upper = function() {
            return Math.max( width, height );
        };
    };

    var Stat = function( agent, browser, cover, inner ) {
        press.immutable( this, 'agent', agent );
        press.immutable( this, 'browser', browser );
        press.immutable( this, 'cover', cover );
        press.immutable( this, 'inner', inner );
    };

    Stat.prototype.mobile = function() {
        return this.agent != _agent.NOMOB;
    };

    Stat.prototype.ios = function() {
        return this.agent == _agent.IOS;
    };

    Stat.prototype.safari = function() {
        return this.browser == _browser.SAFARI;
    };

    function stat() {
        var s = window.navigator.userAgent.toLowerCase();
        var a;
        if ( s.match( /ipad|iphone|ipod/i ) ) {
            a = _agent.IOS;
        } else if ( s.match( /android/i ) ) {
            a = _agent.ANDROID;
        } else if ( s.match( /webos|iemobile|opera mini/i ) ) {
            a = _agent.OTMOB;
        } else {
            a = _agent.NOMOB;
        }
        var b;
        if ( s.match( /opera/i ) ) {
            b = _browser.OPERA;
        } else if ( s.match( /chrome/i ) ) {
            b = _browser.CHROME;
        } else if ( s.match( /safari/i ) ) {
            b = _browser.SAFARI;
        } else if ( s.match( /firefox/i ) ) {
            b = _browser.FIREFOX;
        } else if ( s.match( /msie/i ) ) {
            b = _browser.MSIE;
        } else {
            b = _browser.OTHER;
        }
        return new Stat( a, b, new Rectangle( window.screen.width, window.screen.height ), new Rectangle( window.innerWidth, window.innerHeight ) );
    }

    var _once;

    press.once = function() {
        if ( !_once ) {
            _once = stat();
        }
        return _once;
    };

    function portrait() {
        const s = press.once();
        if ( s.ios() || s.safari() ) {
            return Math.abs( window.orientation ) != 90;
        } else {
            return 'portrait' == window.screen.orientation.type.substring( 0, 8 );
        }
    }

    press.Device = function() {
        let vert = portrait();
        this.portrait = vert;
        this.outer = ( function() {
            const s = press.once().cover;
            if ( vert ) {
                return { width : s.lower(), height : s.upper() };
            } else {
                return { width : s.upper(), height : s.lower() };
            }
        } )();
        this.inner = ( function() {
            const s = press.once().cover;
            var w = window.innerWidth;
            var h = window.innerHeight;
            var z = s.lower() < Math.min( w, h ) && s.upper() < Math.max( w, h );
            if ( z ) {
                var r = 1;
                if ( vert ) {
                    r = s.lower() / w;
                } else {
                    r = s.upper() / w;
                }
                return { width : w * r, height : h * r };
            } else {
                return { width : w, height : h };
            }
        } )();
        this.client = ( function() {
            var w = document.body.clientWidth;
            var h = document.body.clientHeight;
            return { width: w, height: h };
        } )();
    };
} )( global.press = global.press || {} );

exports.press = press;
