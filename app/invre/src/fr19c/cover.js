( function( fr19c, undefined ) {

    class Cover extends React.Component {
        constructor( props ) {
            super( props );
            this.land = this.land.bind( this );
        }
        land() {
            let pltt = press.palette();
            let pale = press.color.grey( 192 );
            return {
                head: press.style.docker( 0, 0, 670, 50 ).font( 32, pltt.white, 1 ),
                goog: press.style.docker( 560, 100, 340, 440 ).edge( 1, pale )
            }
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = this.land();
            let comp = [];

            let lite = press.color.grey( 216 );
            let pale = press.color.grey( 192 );
            let grey = press.color.grey( 128 );
            let dark = press.color.grey( 64 );

            let type = 'FFTrixie';
            let boxa = press.style.docker(  20,  15, 300,  30 ).fontbase( 24, grey, type );
            let boxb = press.style.docker(  20,  55, 300,  30 ).fontbase( 24, grey, type );
            let boxc = press.style.docker(  20, 105, 150,  30 ).fontbase( 20, grey, type );
            let boxd = press.style.docker(  20, 135, 150,  20 ).fontbase( 16, grey, type );
            let boxe = press.style.docker( 200, 115, 100,  30 ).font( 28, dark, 2 );
            let boxf = press.style.docker(  20, 165, 300,  30 ).fontbase( 24, grey, type );
            let boxg = press.style.docker(  20, 205, 300,  30 ).fontbase( 24, grey, type );
            let boxh = press.style.docker(  20, 235, 300,  30 ).fontbase( 24, grey, type );
            let boxi = press.style.docker(  20, 275, 300,  30 ).fontbase( 24, grey, type );
            let boxj = press.style.docker(   0, 310, 340,  10 ).underline( 1, lite );
            let boxk = press.style.docker(  20, 350, 300,  30 ).fontbase( 24, grey, type );
            let boxl = press.style.docker(  20, 390, 300,  30 ).fontbase( 24, dark, type );
            
            comp.push( 
                <div key={ 'goog' } style={ plan.goog }>
                <div style={ boxa }>{ 'Alphabet Inc. Class C' }</div>
                <div style={ boxb }>{ 'ISIN US02079K1079' }</div>
                <div style={ boxc }>{ 'Nasdaq GSM' }</div>
                <div style={ boxd }>{ 'TICKER' }</div>
                <div style={ boxe }>{ 'GOOG' }</div>
                <div style={ boxf }>{ 'Issuer CIK 0001288776' }</div>
                <div style={ boxg }>{ 'CUSIP 02079K107' }</div>
                <div style={ boxh }>{ 'WKN A14Y6H' }</div>
                <div style={ boxi }>{ 'MIC XNGS / XNAS' }</div>
                <div style={ boxj }/>
                <div style={ boxk }>{ 'BUY SIGNAL CIID Formal' }</div>
                <div style={ boxl }>{ 'XNAS-ST-GOOG.20140403' }</div>
                </div>
            );

            let head = [];
            let maja = press.style.docker( 0, 120, 520, 50 ).font( 48, dark, 0 );
            head.push( <div key={ 'maja' } style={ maja }>{ 'Management of' }</div> )
            let majb = press.style.docker( 0, 180, 520, 50 ).font( 48, pltt.black, 3 );
            head.push( <div key={ 'majb' } style={ majb }>{ 'Reference Data and' }</div> )
            let majc = press.style.docker( 0, 240, 520, 50 ).font( 48, pltt.black, 3 );
            head.push( <div key={ 'majc' } style={ majc }>{ 'Corporate Actions' }</div> )
            let minr = press.style.docker( 0, 320, 520, 40 ).font( 30, grey, 1 );
            head.push( <div key={ 'minr' } style={ minr }>{ 'Buy Signal' }</div> );
            let mint = press.style.docker( 0, 370, 520, 30 ).font( 20, pale, 1 );
            head.push( <div key={ 'mint' } style={ mint }>{ 'August 12, 2019' }</div> );
            let minx = press.style.docker( 0, 430, 520, 80 ).font( 14, dark, 1 ).align( 'left', '150%' )
            let text = 'Automating corporate actions has been one of the most difficult technical tasks in the global capital market in the last two decades, tolling several hundred million dollars globally each year. This is a concise description of the topic, the relevance to our business, and our own solution.'
            head.push( <div key={ 'minx' } style={ minx }>{ text }</div> );

            let size = fr19c.grid.basis( devi );
            let base = fr19c.grid.core( devi );
            let blnd = press.style.docker( 0, 0, '100%', '100%' ).clear( 0.8 ).rank( 1000 );
            let body = fr19c.grid.core( devi ).rank( 2000 );
            let back = press.style.docker( 0, 0, '100%', size ).back( pltt.white );
            return (
                <div style={ back }>
                <div style={ base }>{ comp }</div>
                <div style={ blnd }/>
                <div style={ body }>{ head }</div>
                </div>
            );
        }
    }

    fr19c.Cover = Cover;

} )( global.fr19c = global.fr19c || {} )

exports.fr19c = fr19c;
