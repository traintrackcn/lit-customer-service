import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
import LITAppConfigAdvField from './LITAppConfigAdvField';
import LITAppConfigField from './LITAppConfigField';
import LITAppConfigNavigator from './LITAppConfigNavigator';

class LITFNLoaderAppConfig extends PureComponent {

    render(){

        let submenu = this.props.submenu;

        return (
            <div style={{
                // border: '1px solid'
                }}>
                <LITAppConfigNavigator />
                {   submenu === "ADVANCED" &&
                    <LITAppConfigAdvField />
                }

                <LITAppConfigField />
            </div>
        )

    }

}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        submenu: s.get(p.submenu.value),
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITFNLoaderAppConfig)