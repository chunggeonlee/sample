( function( fr19b, undefined ) {

    class Systems extends React.Component {
        constructor( props ) {
            super( props );
            this.port = this.port.bind( this );
            this.land = this.land.bind( this );
        }
        port() {
            let pltt = press.palette();
            return {
                basis: 0,
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                synopsis: press.style.docker( 0, 80, 670, 50 ),
                table: press.style.docker( 250, 140, 420, 700 ),
                chart: {
                    wrap: press.style.docker( 0, 140, 250, 700 ),
                    flow: press.style.docker( 130, 0, 120, 700 )
                }
            }
        }
        land() {
            let pltt = press.palette();
            let dark = press.color.grey( 64 );
            return {
                basis: 1,
                head: press.style.docker( 0, 0, 400, 50 ).font( 32, pltt.ruby, 1 ),
                synopsis: press.style.docker( 0, 80, 900, 30 ),
                table: press.style.docker( 0, 120, 900, 350 ),
                chart: {
                    wrap: press.style.docker( 0, 470, 900, 200 ),
                    flow: press.style.docker( 60, 0, 800, 120 )
                }
            }
        }
        garolabel() {
            let pltt = press.palette();
            let blck = pltt.black;
            let part = [];
            let item = ( x, y, s, k, c ) => {
                let deco = press.style.absolute().place( x, y ).font( 14, c, 1 );
                return <div key={ k } style={ deco }>{ s }</div>;
            }
            part.push( item(  30, 108, '3rd party data', 'thrd', pltt.leaf ) );
            part.push( item( 185,  74, 'eod', 'eods', pltt.ruby ) );
            part.push( item( 490,  74, 'intraday', 'intr', pltt.ruby ) );
            part.push( item( 655,  74, 'service', 'srvc', pltt.ruby ) );
            part.push( item( 820,  74, 'client', 'clnt', pltt.mustard ) );
            part.push( item( 310, 108, 'db', 'dbse', pltt.leaf ) );
            part.push( item( 360, 108, 'exchange data', 'exch', pltt.leaf ) );
            part.push( item( 160, 140, 'corporate action handling', 'coac', pltt.ocean ) );
            part.push( item( 160, 160, 'intraday recap', 'reca', pltt.ocean ) );
            part.push( item( 160, 180, 'model calibration', 'cali', pltt.ocean ) );
            part.push( item( 480, 140, 'live calculation', 'live', pltt.ocean ) );
            part.push( item( 640, 140, 'client service', 'clsr', pltt.ocean ) );
            return part;
        }
        serolabel() {
            let pltt = press.palette();
            let blck = pltt.black;
            let part = [];
            let item = ( x, y, s, k, c ) => {
                let deco = press.style.absolute().place( x, y ).font( 14, c, 1 );
                return <div key={ k } style={ deco }>{ s }</div>;
            }
            let meti = ( x, y, s, k, c ) => {
                let deco = press.style.docker( x, y, 130, 20 ).font( 14, c, 1 ).align( 'right', '120%' );
                return <div key={ k } style={ deco }>{ s }</div>;
            }
            part.push( meti(   0,  15, '3rd party data', 'thrd', pltt.leaf ) );
            part.push( item( 175, 113, 'eod', 'eods', pltt.ruby ) );
            part.push( item( 160, 394, 'intraday', 'intr', pltt.ruby ) );
            part.push( item( 164, 513, 'service', 'srvc', pltt.ruby ) );
            part.push( item( 190, 675, 'client', 'clnt', pltt.mustard ) );
            part.push( meti(   0, 213, 'db', 'dbse', pltt.leaf ) );
            part.push( meti(   0, 294, 'exchange data', 'exch', pltt.leaf ) );
            part.push( meti(   0,  83, 'corporate action handling', 'coac', pltt.ocean ) );
            part.push( meti(   0, 123, 'intraday recap', 'reca', pltt.ocean ) );
            part.push( meti(   0, 143, 'model calibration', 'cali', pltt.ocean ) );
            part.push( meti(   0, 394, 'live calculation', 'live', pltt.ocean ) );
            part.push( meti(   0, 513, 'client service', 'clsr', pltt.ocean ) );
            return part;
        }
        table( split ) {
            let dark = press.color.grey( 0 );
            let grey = press.color.grey( 128 );
            let pale = press.color.grey( 216 );
            let tran = press.color.mono( 255, 0 );
            let line = ( p, d, q, s, n ) => {
                let hold = press.style.docker( 0, n * 50, 420, 50 ).underline( 1, pale );
                let topl = press.style.docker( 20, 10, 330, 25 ).font( 14, dark, 1 );
                let topr = press.style.docker( 350, 10, 50, 25 ).font( 14, s, 1 );
                let boto = press.style.docker( 20, 30, 380, 15 ).font( 12, grey, 1 );
                return (
                    <div key={ 'line-' + n } style={ hold }>
                    <div style={ topl }>{ p }</div>
                    <div style={ topr }>{ q }</div>
                    <div style={ boto }>{ d }</div>
                    </div>
                );
            }
            let pltt = press.palette();
            let good = pltt.turquoise;
            let warn = pltt.mustard;
            let data = [];
            let n = 0;
            data.push( line( 'Reference Database', 'lifecycle of securities and derived cashflows', '100%', good, n ) );
            ++ n;
            data.push( line( 'Time Series Database', 'time dependent data', '100%', good, n ) );
            ++ n;
            data.push( line( 'Data Management Tasks', 'various data capture and persistency', '95%', good, n ) );
            ++ n;
            data.push( line( 'Workflow Engine', 'automated ticket system', '90%', good, n ) );
            ++ n;
            data.push( line( 'Operations Database', 'operational data storage', '95%', good, n ) );
            ++ n;
            data.push( line( 'Task Monitoring', 'monitoring automated tasks', '90%', good, n ) );
            ++ n;
            data.push( line( 'Infrastructure Management', 'cloud system management', '90%', good, n ) );
            ++ n;
            if ( split ) {
                n = 0;
            }
            data.push( line( 'Real Time Data Feed', 'data feed from stock exchange', '95%', good, n ) );
            ++ n;
            data.push( line( 'Model Calibration', 'generative machine learning', 'tested', warn, n ) );
            ++ n;
            data.push( line( 'Corporate Event Handler', 'live corporate disclosure capture', '30%', warn, n ) );
            ++ n;
            data.push( line( 'Engine Deployment', 'deploying calibrated model to real time system', '0%', warn, n ) );
            ++ n;
            data.push( line( 'Real Time Computation', 'real time data to probabilities', '0%', warn, n ) );
            ++ n;
            data.push( line( 'Service Engine', 'web + mobile service backend server', '10%', warn, n ) );
            ++ n;
            data.push( line( 'Client Application', 'service front end', '5%', warn, n ) );
            let part = [];
            if ( split ) {
                let west = press.style.docker( 0, 0, 420, 350 ).edge( 1, pale );
                part.push( <div key={ 'west' } style={ west }>{ data.slice( 0, 7 ) }</div> );
                let east = press.style.docker( 480, 0, 420, 350 ).edge( 1, pale );
                part.push( <div key={ 'east' } style={ east }>{ data.slice( 7, 14 ) }</div> );
            } else {
                let both = press.style.docker( 0, 0, 420, 700 ).edge( 1, pale );
                part.push( <div key={ 'both' } style={ both }>{ data }</div> );
            }
            return part;
        }
        synopsis() {
            let grey = press.color.grey( 64 );
            let deco = press.style.docker( 0, 0, '100%', '100%' ).font( 16, grey, 1 )
            let phrs = 'A cloud based system with modern service oriented architecture'
            return <div style={ deco }>{ phrs }</div>;
        }
        render() {
            let devi = this.props.device;
            let pltt = press.palette();
            let plan = fr19b.grid.portrait( devi ) ? this.port() : this.land();

            let comp = [];
            comp.push( <div key={ 'head' } style={ plan.head }>Technology</div> );
            comp.push( <div key={ 'snps' } style={ plan.synopsis }>{ this.synopsis() }</div> );
            let splt = !fr19b.grid.portrait( devi );
            comp.push( <div key={ 'tabi' } style={ plan.table }>{ this.table( splt ) }</div> );

            let grey = press.color.grey( 128 );
            let tran = press.color.mono( 255, 0 );
            if ( plan.basis == 0 ) {
                comp.push( 
                    <div key={ 'chrt' } style={ plan.chart.wrap }>
                    <div style={ plan.chart.flow }>
                    <svg viewBox={ '0 0 12000 70000' }>
                    <path d={ fr19b.dataflow.sero( 2000 ) } stroke={ grey } strokeWidth={ 100 } fill={ tran }/>
                    <path d={ fr19b.dataflow.seroarrow( 2000 ) } fill={ grey }/>
                    <path d={ fr19b.dataflow.serowout( 2000 ) } stroke={ grey } strokeWidth={ 100 } fill={ tran }/>
                    </svg>
                    </div>
                    { this.serolabel() }
                    </div>
                );
            } else {
                comp.push( 
                    <div key={ 'chrt' } style={ plan.chart.wrap }>
                    <div style={ plan.chart.flow }>
                    <svg viewBox={ '0 0 80000 12000' }>
                    <path d={ fr19b.dataflow.garo( 2000 ) } stroke={ grey } strokeWidth={ 100 } fill={ tran }/>
                    <path d={ fr19b.dataflow.garoarrow( 2000 ) } fill={ grey }/>
                    <path d={ fr19b.dataflow.garowout( 2000 ) } stroke={ grey } strokeWidth={ 100 } fill={ tran }/>
                    <path d={ fr19b.dataflow.garowick( 2000 ) } stroke={ grey } strokeWidth={ 100 } fill={ tran }/>
                    </svg>
                    </div>
                    { this.garolabel() }
                    </div>
                );
            }

            let size = fr19b.grid.basis( devi );
            let body = fr19b.grid.core( devi );
            let back = press.style.docker( 0, 6 * size, '100%', size ).back( pltt.white );
            return ( 
                <div ref={ this.refb } style={ back }>
                <div style={ body }>{ comp }</div>
                </div>
            );
        }
    }

    fr19b.Systems = Systems;

} )( global.fr19b = global.fr19b || {} )

exports.fr19b = fr19b;
