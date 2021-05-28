import React from 'react';
import { storiesOf  } from '@storybook/react';
import { Stage } from '../app/mister/src/stage'

let mister = storiesOf( 'corpi', module )
    .add( 'with page', () => {       
        return <div id='stage'><Stage/></div>
    })

exports.mister = mister