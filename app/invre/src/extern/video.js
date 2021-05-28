import { Player, BigPlayButton } from 'video-react';


( function( extern, undefined ){
    class Video extends React.Component{
        constructor( props ){
            super( props );
            this.report = this.report.bind( this );
        }
        report(){
            this.props.report( 'facade' )
        }
        render(){
            let h = this.props.device.inner.height;
            let w = this.props.device.inner.width;
            let px = 0;
            let py = 0;
            let mp = 1200;
            let r = 1024/768
            if ( w > h ){
                if ( h > mp ) h = mp
                w = h*r;
            }
            else {
                if ( w > ( mp * r ) ) w = mp
                h = w/r
            }
            py = ( this.props.device.inner.height - h ) / 2;
            px = ( this.props.device.inner.width - w ) / 2;

            let b = press.style.docker( px, py, w, h )
            let back = press.style.board( 0, '#000000' );
            return <div style={back}>
                <div style={b}>
                    <Player
                        autoPlay
                        playsInline
                        src={"/static/resource/intr_movie_"+this.props.target +'.mp4'}
                        onEnded={ this.report }
                    >
                        <BigPlayButton position="center" disabled />
                    </Player> 
                </div>
            </div>           
        }
    }

    extern.Video = Video;

} )( global.extern = global.extern || {} )

exports.extern = extern