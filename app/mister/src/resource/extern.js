( function ( mister, undefined ){
        ( function ( resource, undefined ) {
            ( function ( extern, undefined ) {

                class Hub {
                    constructor(){
                        this.success = this.success.bind( this );
                        this.get = this.get.bind( this );
                        this.call = this.call.bind( this );
                        this.rec = { }
                    }

                    success( v, e, k ){
                        
                        this.rec[ v ] = JSON.parse( e[ 'body' ])
                        if( this.rec[ v ] ){
                            press.wire.fire( v + ':future', k );
                        }
                        
                            
                    }
                    get( v ){
                        return this.rec[ v ]
                    }
                    call( v, o, key ){
                        press.util.telegram.hub( o, ( e ) => this.success( v, e, key ), () => {} )
                    }
                }

                var _hub = null

                extern.hub = function(){
                    if( _hub == null ){
                        _hub = new Hub();
                    }
                    return _hub
                }
                

            } ) ( resource.extern = resource.extern || {} )
        } ) ( mister.resource = mister.resource || {})
})( global.mister = global.mister || {} )