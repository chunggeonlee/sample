( function( press, undefined ) {
    var Palette = function() {
        press.immutable( this, 'black', '#000000' );
        press.immutable( this, 'white', '#ffffff' );
        press.immutable( this, 'burgundy', '#450000' );
        press.immutable( this, 'cherry', '#880000' );
        press.immutable( this, 'fuchsia', '#df0066' );
        press.immutable( this, 'azelia', '#a90066' );
        press.immutable( this, 'leaf', '#458b00' );
        press.immutable( this, 'orange', '#de6600' );
        press.immutable( this, 'pig', '#d8c4c4' );
        press.immutable( this, 'red', '#c40000' );
        press.immutable( this, 'rose', '#fab49a' );
        press.immutable( this, 'ruby', '#660000' );
        press.immutable( this, 'blue', '#000096' );
        press.immutable( this, 'steel', '#454545' );
        press.immutable( this, 'fern', '#002800' );
        press.immutable( this, 'turquoise', '#00868b' );
        press.immutable( this, 'ocean', '#004258' );
        press.immutable( this, 'silveralf', '#c0c0ff');
        press.immutable( this, 'mustard', '#daa520' );
        press.immutable( this, 'saphire', '#320096' );
        press.immutable( this, 'gold', '#a2790d' );
        press.immutable( this, 'olive', '#92630a' );
        press.immutable( this, 'navy', '#000028' );
    };

    var _palette;

    press.palette = function() {
        if ( !_palette ) {
            _palette = new Palette();
        }
        return _palette;
    };
} )( global.press = global.press || {} );

exports.press = press;
