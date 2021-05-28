( function( press, undefined ) {

    var BoxMuller = function() {
        this.spin = 0;
        this.save = 0.0;
        this.next = () => {
            switch ( this.spin ) {
            case 1:
                this.spin = 0;
                return this.save;
            case 0:
                this.spin = 1;
                let d = Math.sqrt( -2 * Math.log( Math.random() ) );
                let t = 2 * Math.PI * Math.random();
                this.save = d * Math.sin( t ); 
                return d * Math.cos( t );
            }
        }
    }

    var _boxmuller;

    press.gauss = () => {
        if ( !_boxmuller ) {
            _boxmuller = new BoxMuller();
        }
        return _boxmuller.next();
    }

} )( global.press = global.press || {} )

exports.press = press;
