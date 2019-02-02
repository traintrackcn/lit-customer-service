import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import LITAppConfigNavigator from './LITAppConfigNavigator';
import LITAppConfigField from './LITAppConfigField';

class LITFNLoaderAppConfig extends PureComponent {

    render(){

        // console.log('category -> ', category);
        return (


            <div style={{
                // border: '1px solid'
                }}>
                <LITAppConfigNavigator />
                <LITAppConfigField />
                
            </div>
        )

    }

}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        // prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITFNLoaderAppConfig)