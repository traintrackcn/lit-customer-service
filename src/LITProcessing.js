import React, {PureComponent} from 'react';
import { Spinner } from 'reactstrap';
import './index.css';

export default class LITProcessing extends PureComponent {
    render() {

        return(
            <div className='proccesing-container'>
                <Spinner className='processing' type='grow' color='primary' />
            </div>
        )
        
    }
}