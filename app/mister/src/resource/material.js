( function ( mister, undefined ){
        ( function ( resource, undefined ) {
            ( function ( material, undefined ) {

                class Path {
                    get( name ){
                        return 'static/data/mister/' + name + '.json';                        
                    }
                }

                class Expo {

                    constructor(){
                        
                        this.path = new Path();
                        this.pack = {};
                        this.refp = {};
                    }

                    read( name ){
                        if( this.refp.hasOwnProperty( name ) == false ) {
                            this.refp[ name ] = {}
                        }
                        let fore =( response ) => {
                            let data = JSON.parse( response );
                            this.pack[ name ] = data
                            press.wire.fire( name )
                        }

                        press.wire.gzipajax( this.path.get( name ), fore , () => {} )                            
                    }

                    save( name ,sub, data ){
                        this.refp[ name ][ sub ] = data
                        var nkey = Object.keys( this.refp[ name ]);
                        var pack = []
                        for( var i =0; i< nkey.length  ; i++ ) {
                            this.refp[ name ][ nkey[ i ] ].map( v => {
                                pack.push( v )
                            })
                        }
                        console.log( pack )
                        const blob = new Blob( [ JSON.stringify( pack ) ], { type : 'application/json'});
                        const url = URL.createObjectURL( blob );
                        const link = document.createElement( 'a' );

                        link.download = name + '.json'
                        link.href = url;
                        link.click();
                    }

                    refac( name ){
                        if( Object.keys( this.refp[ name ] ).length == 0 ) {
                            var obj = {};
                            for( var i = 0; i < this.pack[ name ].length ; i++ ){

                                var label = this.pack[ name ][ i ].label
                                if( label == undefined ){
                                    label = 'total'
                                }
                                if( Object.keys( obj ).indexOf( label ) == -1 ){
                                    obj[ label ] = [];
                                }

                                obj[ label ].push( this.pack[ name ][ i ]);
                            }
                            this.refp[ name ] = obj
                        }
                        console.log( this.refp[ name ])

                        return this.refp[ name ]
                    }


                    load( name ){

                        return this.refac( name )                        
                    }
                }

                var _e = null;

                material.export = function(){
                    
                    if( _e  == null){
                        _e = new Expo()
                    }
                    return _e
                }

            } ) ( resource.material = resource.material || {} )
        } ) ( mister.resource = mister.resource || {})
})( global.mister = global.mister || {} )