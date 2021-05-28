( function ( chg20, undefined ){

    class Gene {
        constructor( canvasW, canvasH, gapX, gapY,  ratio = 1 ){
            this.cw = canvasW;
            this.ch = canvasH;
            this.r = ratio;
            this.gx = gapX;
            this.gy = gapY;
        }

        bar( x, y , h, s = 40, c = 'black' ){
            let poll = [];
            let px = x + this.gx;
            poll.push(<path key={ 'graph-line' } d={ press.path(px, y*this.r ).lineTo( px+ h*this.r, y*this.r ).trail } stroke={ c } strokeWidth= { s*this.r }/> )

            return poll;
        }
        lby( x , y ,s,c,val, revert = false){
            let ny = revert ? this.ch  - y - this.gy:  y;
            return <text x = { x } y = { ny } textAnchor= {'middle'} fontSize= { s } fill = { c } >{ val } </text>
        }
        text( nx, y , s, c, val ){
            let x = this.gx + nx;
            return <text x = { x } y = { y } fontSize= { s } fill = { c } >{ val } </text>
        }

        //axis - X
        vrti(){
            return <path key = { 'graph-axis-x' } d={ press.path( this.gx, this.ch - this.gy ).lineTo( this.cw + this.gx , this.ch - this.gy ).trail } stroke = { '#aaaaaa33'} strokeWidth = { 1 } />
        }
        //axis - Y
        poll( guide = 0 ){
            if( guide ){
            return <path key = { 'graph-axis-x' } d={ press.path( this.gx + guide,  0 ).lineTo( this.gx + guide , this.ch - this.gy ).trail } stroke = { '#aaaaaa33'} strokeWidth = { 1 } strokeDasharray="3,3" />
            }
            else
                return <path key = { 'graph-axis-x' } d={ press.path( this.gx + guide,  0 ).lineTo( this.gx + guide , this.ch - this.gy ).trail } stroke = {'white'} strokeWidth = { 1 } />
            
        }

        circle( nx, ny , r, c = 'black' ){
            let cx = nx + this.gx;
            let cy = ( this.ch - ny - this.gy )
            return <path key ={ 'circle' } d = {   'M'+ ( cx -r / 2) + ','+ cy + 'a'+ r/2 + ',' +  r/2 + ' 0 1,1 ' + r+',0 a '+ r/2+ ',' + r/2 + ' 0 1,1 '+ '-' + r + ',0'} fill= { c }></path>
        }

        view( comp ){
            
            return <svg key = { 'graph-bar' } width ={ this.cw } height = { this.ch } viewBox = { '0 0 ' + this.cw* this.r + ' ' + this.ch * this.r } onMouseOver={ ()=>console.log('hi')} >
                { comp }
            </svg>
        }
    }
    

    chg20.gene = function( x, y, gx,gy,r  ) {
        return new Gene( x, y, gx,gy,r  );
    }

}) ( global.chg20 = global.chg20 || {})