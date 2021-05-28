from flask import render_template, Flask
from util import findroot
import os

RPATH = findroot()
SPATH = os.path.join( RPATH, 'static' )
TPATH = os.path.join( RPATH, 'app', 'invre', 'templates' )

print( RPATH )
print( SPATH )
print( TPATH )

Wine = Flask( 
    __name__, 
    template_folder = TPATH,
    static_folder = SPATH, 
    instance_relative_config = True 
)

@Wine.route( '/' )
def landing():

    return render_template( 'index.html' )
