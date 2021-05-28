"use strict";

var gulp = require( 'gulp' );
var sourcemap = require( 'gulp-sourcemaps' ) 
var browserify = require( 'browserify' );
var babelify = require( 'babelify' );
var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );

function clean( done ) {

    var packer = browserify( {
        entries: [ './src/stage.js' ],
        paths: [ './src', '../../lib', '../../node_modules' ]
    } ).transform(
        babelify.configure( { 
            presets: [ "es2015", "react" ],
            sourceMaps: true,
            compact: false
        } ) 
    )

    function pack() {
        return (
            packer
                .bundle()
                .pipe( source( 'invre.js' ) )
                .pipe( gulp.dest( '../../static/dist/' ) )
        );
    }

    pack();
    done();
}

gulp.task( 'build', gulp.series( clean ) );


