import React from 'react';
import { storiesOf  } from '@storybook/react';
import { Stage } from '../app/invre/src/stage';


let invre = storiesOf( 'invre', module )
    .add( 'with page', () => {
        return <div id='stage'><Stage/></div>
    }
    );
  

exports.invre = invre