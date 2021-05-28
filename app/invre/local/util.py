import os

def up( path ):

    return os.path.split( path )[ 0 ]

def isroot( path ):

    test = set( [ 'static', 'app', 'lib', 'build.sh', 'configure.sh' ] )
    return len( set( os.listdir( path ) ) & test ) == len( test )

def findroot():

    path = up( os.path.abspath( __file__ ) )
    while not isroot( path ):
        path = up( path )
    return path
