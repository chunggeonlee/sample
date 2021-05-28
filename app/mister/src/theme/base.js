( function( mister, undefined) {
    ( function ( theme, undefined ){
        
        class Spacing {
            constructor(){
                this.gap = 20
            }
        }

        class Color {

            constructor(){
                
                this.code = {
                    back : '#D9D9D9',
                    deep : '#12121c',
                    black : '#13131a',
                    white : '#fefefe',
                    mist : '#cecece',
                    red : '#c34464',
                    blue : '#4474f3',
                    sky : '#c9c9f9',
                    orange : '#faa344',
                    green : '#44c363',
                    silver : '#666666',
                    grey : '#333333',
                    
                }
            }
        }        

        class Base extends Spacing {

            constructor( revert = false ){
                super();

                this.color = new Color();
                this.revert = revert
                this.width = 1200

                this.back = '#e9e9e9'
            }

            _getstack( n ){
                const idx = this.content.indexOf( n );
                let ypos = 0;
                for( let i = 0; i < idx; i++ ){
                    ypos += this.hIndex[ i ] + this.gap
                }

                return { x : this.gap,  y : ypos + this.gap, w : this.contentWidth, h : this.hIndex[ idx ] }
            }
            
            wrap(){
                return press.style.docker( 0, 0, window.innerWidth, '100%' ).back( this.back ).font( 13, 'black').add({overflowX:'hidden', overflowY:'hidden'})
            }
            
            desc(){
                return press.style.docker( 0 , 0 ).font( 10, this.color.code[ 'silver'], 1 ).add( { padding : 20})
            }
            
        }


        class Smpl extends Base{
            constructor( p ){
                super( p );
                this.content = [ 'head', 'paper', 'navi' ];
                this.hIndex = [ 40, 500, 40 ];
                this.contentWidth = 970;
            }           

            head(){
                const p = this._getstack( 'head' );
                return press.style.docker( p.x, p.y, p.w, p.h ).back( this.color.code[ 'blue' ] );
            }

            paper(){               
                const p = this._getstack( 'paper' );
                return press.style.docker( p.x, p.y, p.w, p.h ).back( this.color.code[ 'red' ] );
            }

            navi(){
                const p = this._getstack( 'navi' );
                return press.style.docker( p.x, p.y, p.w, p.h ).back( this.color.code[ 'green' ] );
            }
         
        }
        var _base = null;

        theme.base = function( re = false ){

            if( _base == null || re ){
                _base = new Base( re )
            }

            return _base;
        }
        var _smpl = null;
        theme.smpl = function( re = false ){

            if( _smpl == null || re ){
                _smpl = new Smpl()
            }

            return _smpl;
        }
     

    })( mister.theme = mister.theme || {} )
}) ( global.mister = global.mister || {} )