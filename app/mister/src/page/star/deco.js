import { press } from "../../../../../lib/util/time"

class Deco {

    constructor(){
        this.pad = 10;
        this.min_width = 1024;
        this.max_width = 1800;
        this.headPivot = 5;
        this.page_width = window.innerWidth < this.min_width ? this.min_width : window.innerWidth;
        this.page_height = window.innerHeight - this.headPivot - this.pad /2
        if( this.page_width > this.max_width ){
            this.page_width = this.max_width
        }        
        this.cardWidth = 200;        
        this.region_back_color = '#f9f9f9';
        this.font_base_color = '#636373';
        this.back_color = '#e9e9e9'
        this.pure_back_color = '#f3f3f3'
    }
    add( a, b ){
        return a+b; 
    }    
    wrap(){
        let w = this.page_width;
        let h = window.innerHeight - this.headPivot;
        let x = ( window.innerWidth - w ) / 2
        return press.style.docker( x,this.headPivot , w, h )
    }

    body(){
        let y = this.stat_height + this.pad;
        let w = this.page_width - this.cardWidth - this.pad * 3;
        let h = this.page_height;
        this.bx = this.pad + w
        return {
            wrap : press.style.docker( this.pad / 2, y , w, h ).back( this.region_back_color )
        }
    }    
    
    opt(){
        let h = 30;
        let w = 200;
        return {
            wrap: ()=>press.style.fixed().place( this.pad, this.pad ).block( w, 300 ).back( this.pure_back_color ),
            row: ( nth )=>{
                return press.style.docker( this.pad, nth * ( this.pad + h ), w - this.pad*2 , h ).align('left', h )
            }
        }
    }

    stat(){
        let w = this.page_width - this.cardWidth - this.pad * 3;
        let h = 38;
        let b = '5px solid ' + this.back_color
        return {
            wrap : ()=>{
                return press.style.docker( 0, 0, w, h - 1  ).add( { border: 'none', borderBottom: b })
            },
            titl : ()=>{
                return press.style.docker( this.pad, 0, 160, h ).align('left', h ).font( 13, 'grey', 1 )
            },
            tail : ( nth, bactive = true ) => {
                let nw = 80
                let x = w - ( (nth + 1) * ( nw + this.pad )  )
                return press.style.docker( x , 0, nw, h ).align( 'center', h ).font( 13 ,bactive ?'grey': 'silver')
            },
            inpt : () => {
                let nw = 500;
                let b = '1px solid #e9e9e9';
                return press.style.docker( w - 190- nw, 10, nw, h -20 ).add( { border : 'none', borderRight : b, borderLeft: b }).pad( 0 , 10 ).font( 12 ).back('#f9f9f9')
            }
        }
    }

    main(){
        let w = this.page_width - this.cardWidth - this.pad * 3;
        let nw = 410;
        let cn = 1;
        let tag_width = 80;
        let tag_height = 40;
        let b = '6px solid ' + this.back_color
        while( this.pad + (nw ) * ( cn + 1) < w - 20 ){
            cn += 1
        }        
        return { 
          
            tagh : ( nth, bfocus ) => {
                return press.style.docker( (tag_width  )*nth, this.pad * 4 + 3, tag_width, tag_height ).align('center', tag_height ).back( bfocus ? this.pure_back_color:'white').font( 11, '#666666')
            },
            tage : ( nth, color, bfocus, bactive, bhead ) => {
                let vx = bhead ? 40 : 0
                let v = press.style.docker( w - tag_width - nth * ( tag_width + this.pad / 2 ) -this.pad -vx , this.pad*4 + this.pad, tag_width + vx , tag_height - this.pad*2 ).align('center', tag_height - 2*this.pad )
                if( bhead ){
                    v.font( 11,'grey' )    
                    if( bfocus ) {
                        v.add( { borderBottom : '1px solid silver'})
                    }
                }
                else{
                    v.back( !bactive? this.region_back_color : bfocus ? color : this.region_back_color ).font( 12, bactive==false?'silver': bfocus ? 'white' : 'grey' )
                }
                return v
            },
            text : ( mode ) => {
                let tw = mode == 'input' ? w : w - this.pad*2;
                let th = mode == 'input' ? window.innerHeight / 2 + 2*this.pad + 6 : window.innerHeight / 2;
                return  press.style.relative()
                    .place( 0, 7*this.pad + 10 )
                    .block( tw, th )
                    .pad( 10, 10, 10, 10 )
                    .back( this.pure_back_color)
                    .add({ overflowY:'scroll', lineHeight:2.2,border:'none', borderBottom : b }).font( 12,'#666666', 1 ).add({ letterSpacing : 0.5 })
            }
        }
    }

    hole(){
        let w = this.page_width - this.cardWidth - this.pad * 3;
        let row_height = 20;
        
        return {
            wrap : press.style.relative().place( 0, this.pad * 8 + 5 ).block( w, window.innerHeight/2 - 13*this.pad   ).add( { overflowY:'scroll', overflowX:'hidden'}),
            rows : () => {
                return press.style.relative().add( { marginTop: 10,width: w } )
            },
            cell : ( nth, x ) => {
                let begin_x = x * (this.pad*2) + 10;
                let cw = w - begin_x - 5*this.pad
                if( nth == 0 ) {
                    return press.style.relative().place( begin_x, 0 ).block( 20 ).font( 11,'#888888', 1 ).align('left')
                }
                else{
                    return press.style.relative().place(begin_x + this.pad*2, 0 ).font( 10, 'grey').align('left').add({ top: -12})
                }
            }
            // rows : ( nth, x ) => {
            //     let nx = x* ( 2* this.pad ) + this.pad
            //     let nh = 30
            //     return press.style.docker( nx + this.pad, nth * ( nh +this.pad  ) + this.pad, w - this.pad*3 - x*(this.pad*2), nh ).align( 'left',34 ).font( 11, '#333333').add({ overflowX:'hidden', overflowY:'hidden'}).back( 'red')
            // },
            // hot : ( nth, x )=>{
            //     return press.style.docker
            // }
        }
    }

    flex(){
        let w = this.page_width - this.cardWidth - this.pad * 3;
        let h = 30;
        let nw = 500;
        let c = parseInt( (w - 2*this.pad) / nw );
        let px = ( w - ( nw + this.pad) * c ) / 2;
        return {

            wrap: press.style.relative().place( 0, this.pad * 8 ).block( w ),
            slct : press.style.docker(0, 0, 200, 40 ).add({ paddingLeft: this.pad,border:'none', backgroundColor:'white'}).font( 12, 'grey' ).back( this.pure_back_color),
            mrap : ()=>{
                return press.style.docker( 0, this.pad * 4, w, window.innerHeight/2 - 16*this.pad + 5  ).add({ overflowX:'hidden', overflowY:'scroll',minHeight: 200, borderBottom : '1px solid #e3e3e3' }).back( this.pure_back_color)
            },
            rows : ( nth, con = true, focus = false ) => {      
                
                let o = 10;          
                let x = px + parseInt( nth % c ) * (nw + this.pad) ;
                let y = ( o + h )  * parseInt( nth / c ) + this.pad
                if( con == false ){
                    return press.style.docker( x,y,nw,h)
                }
                return press.style.docker( x,y,nw,h).add({ border: focus ? '1px solid #cc1111' : 'none', boxShadow:'0px 3px 3px #e3e3e3' }).back('white')
            },
            cell : ( nth , bfocus, span = 0) => {
                let ws = [ 300, 100, 100 ];
                let fx = ( n ) => {
                    return n == 0 ? 0 : ws.slice( 0, n ).reduce( this.add )
                }

                let nw = ws[ nth ] + ( span ? ws[ nth +span ] : 0);
                
                let nx = fx( nth );
                
                return press.style.docker( nx,0 ,nw, h).align( 'center', h).font( 12, bfocus ? 'white' :'#939393' ).back( bfocus ? '#999999': '')
            }
        }
    }   
    side(){
        let y = this.pad + this.stat_height;
        let x = this.bx -5  + this.pad/ 2;
        return {
            wrap : press.style.docker( x, y, this.cardWidth + 15,this.page_height ).back( 'white')
        }
    }
    tree(){
        let w = this.cardWidth;
        let y = this.cardHeight + this.pad*2;
        return {
            wrap : press.style.docker( 0, y, w + this.pad + 10, this.page_height ).add( { overflowY:'scroll', overflowX:'hidden'}),
            head : press.style.docker( this.pad, 0, w, 40 ).font( 13,'grey', 1).align( 'left', 40),
            inpt : press.style.docker( 130, 5, w, 30 ),
            stem : ( bfocus ) => press.style.relative().place( 20 , 50 ).block( w, 30 ).font( 12, bfocus ? '#cc3333' : 'grey' ),
            leaf : ( bfocus ) => press.style.relative().place( 30 ,50 ).block( w -40 , 30 ).font( 11, bfocus ? '#993333' : this.font_base_color ),
        }
    }
    card(){
        let w = this.cardWidth;        
        let h = 20

        return {
            wrap : ( cnt ) => {
                this.cardHeight = 20 + cnt *( this.pad /3*2 + h )
                return press.style.docker( 0 , this.pad, w, this.cardHeight  ).font( 14, this.font_base_color ).add({ borderBottom:'1px solid silver'})
            },
            row : ( nth ) => {
                return press.style.docker( this.pad, nth *( this.pad+ h ), w-20, h )
            },
            
            cell : ( nth, c = 0 ) => {
                let p = [ 
                    [ 60 , w -60 - this.pad*2 ], 
                    [ 230 , w- 260 - this.pad*2, 30 ] , 
                    [ w - this.pad*2 ],
                    [ w /2 - this.pad - 5,10, w /2 - this.pad -5 ]
                ];
                let r = p[ c ];
                let nw = r[ nth ]
                let x = nth == 0 ? 0 : nth == 1? r[ 0 ] : r[ 0 ] + r[ 1 ];
                return press.style.docker( x , c == 1 ? -10 : 0, nw, c == 2 ? h + 5 : h ).align('left', h ).add({ color : nth == 0?'grey': this.font_base_color }).font( 13 )
            },
            head : press.style.relative().font( 15, 'grey',2),
            inpt : press.style.relative().place( 0, 0 ).block( '100%', '70%').add( { border:'none', borderBottom:'1px solid silver'}),
            slct : press.style.relative().place(-2 , 0 ).block( '90%', '90%').add( { border: 'none', backgroundColor:'white'})
        }
    }

    popup(){
        let w = 300
        let h = 100
        let x = window.innerWidth - w - this.pad*2;
        let y = window.innerHeight - h - this.pad*2;
        return {
            wrap : ( i, b) => {
                return press.style.fixed().place( x -20, y + i ).block( w, h ).rank( 1000 ).back( b == 1 ? '#99333399' :'#33333399').font( 13, 'white').add({borderRadius:10}).align('center', h )
            }
            
        }
    }
    

    modal(){
        let minw = 0;
        let maxw = 700;

        let w = window.innerWidth * 0.6

        if( w > maxw ){
            w = maxw;
        }
        else if( w < minw ){
            w = minw;
        }

        let l = ( window.innerWidth - w ) / 2;

        return {
            login : {
                wrap : { 
                    position:'absolute',
                    top: '10%',
                    width: w,
                    left: l,
                    borderRadius : 10,
                    height: 140,
                    border: '1px solid #ececec',
                    backgroundColor:'#fcfcfc',                        
                },
                label : {
                    position : 'absolute',
                    left: '16%',
                    top: '20%',
                    color: '#999999',
                    zIndex: 1,
                    fontSize: 12
                },
                input : {
                    wrap : {
                        position : 'absolute',
                        width: '70%',
                        top: '40%',
                        left : '16%',
                        height: 40,
                    },
                    content : {
                        position : 'absolute',
                        backgroundColor:'white',
                        border: '1px solid silver',
                        width: '80%',
                        height: '95%',
                        padding : 0,
                        paddingLeft: 5,
                        color: 'grey'
                    },
                    button : {
                        position : 'absolute',
                        backgroundColor:'white',
                        border: '1px solid silver',
                        width: '20%',
                        left : '75%',
                        padding: 0,
                        height: '95%',
                        color: 'grey'
                    },
                    msg : {
                        position : 'absolute',
                        top: '77%',
                        left: '16%',
                        fontSize: 10,
                        color: '#993333'
                    }
                },
                
            }
        }
    }
}

export { Deco }