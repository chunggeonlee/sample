( function( press, undefined ) {
    ( function( wire, undefined ) {
        wire.jsonajax = function( urlpath, callback, failback ) {
            $.ajax( {
                url : urlpath,
                async : true,
                dataType : 'text',
                mimeType : 'application/json',
                method : 'GET',
                success : function( response ) {
                    callback( JSON.parse( response ) );
                },
                error : function( xhrobj, status, thrown ) {
                    if ( status ) {
                        let msg = status;
                        if ( thrown ) {
                            msg += ': ' + thrown;
                        }
                        msg += '\nurl' + urlpath;
                        failback( msg );
                    }
                }
            } );
        };

        wire.gzipajax = function( urlpath, callback, failback ) {
            $.ajax( {
                url : urlpath,
                async : true,
                dataType : 'text',
                mimeType : 'application/gzip',
                method : 'GET',
                success : function( response ) {
                    callback( response );
                },
                error : function( xhrobj, status, thrown ) {
                    if ( status ) {
                        let msg = status;
                        if ( thrown ) {
                            msg += ': ' + thrown;
                        }
                        msg += '\nurl' + urlpath;
                        failback( msg );
                    }
                }
            } );
        };

        wire.fire = function( etag, shout ) {
            if ( document.getElementById( 'stage' ) != undefined )
                document.getElementById( 'stage' ).dispatchEvent(
                    new CustomEvent( 're' + etag, {
                        detail : { what : shout },
                        bubbles : true
                    } )
                );
        };

        wire.b64inflate = function( jraw ) {
            let bstr = atob( jraw );
            let bseq = new Uint8Array(
                bstr.split( '' ).map( function( x ) {
                    return x.charCodeAt( 0 );
                } )
            );
            let jstr = new TextDecoder( 'utf-8' ).decode( pako.inflate( bseq ) );
            return JSON.parse( jstr );
        };
    } )( press.wire = press.wire || {} );
} )( global.press = global.press || {} );

exports.press = press;
