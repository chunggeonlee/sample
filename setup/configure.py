import sys, os, subprocess, platform, shutil

def bsh( cmd ):

    proc = subprocess.Popen( cmd, shell = True, executable = '/bin/bash' )
    if proc.wait() != 0:
        raise RuntimeError( 'Failed: {0}.'.format( cmd ) )

def npm():

    c = 'curl -sL https://deb.nodesource.com/setup_{0}.x | sudo -E bash -'
    d, v, n = platform.dist()
    b = n.lower()
    bsh( c.format( 4 ) )
    # if b == 'xenial':
    #     bsh( c.format( 6 ) )
    # elif b == 'trusty':
    #     bsh( c.format( 4 ) )
    # else:
    #     raise RuntimeError( 'Unknown platform: {0} {1} {2}'.format( d, v, n ) )

    bsh( 'sudo apt-get install -y nodejs' )
    bsh( 'sudo npm install -g npm' )

def toolset():

    bsh( 'sudo npm install -g gulp' )
    bsh( 'sudo npm install -g babel-core' )
    bsh( 'sudo npm install -g babel-cli' )
    bsh( 'sudo npm install -g create-react-app' )
    bsh( 'sudo npm install -g create-react-native-app' )

def local():

    bsh( 'npm install' )

def thirdparty():

    root = os.path.split( os.path.split( os.path.abspath( __file__ ) )[ 0 ] )[ 0 ]
    pack = os.path.join( root, 'node_modules' )
    dest = os.path.join( root, 'static', 'dist' )
    shutil.copy( os.path.join( pack, 'jquery', 'dist', 'jquery.min.js' ), dest )
    shutil.copy( os.path.join( pack, 'react', 'cjs', 'react.production.min.js' ), dest )
    shutil.copy( os.path.join( pack, 'react-dom', 'cjs', 'react-dom.production.min.js' ), dest )
    shutil.copy( os.path.join( pack, 'velocity-animate', 'velocity.min.js' ), dest )
    shutil.copy( os.path.join( pack, 'velocity-animate', 'velocity.ui.min.js' ), dest )

def main():

    #npm()
    #toolset()
    local()
    thirdparty()

if __name__ == '__main__':

    sys.exit( main() )
