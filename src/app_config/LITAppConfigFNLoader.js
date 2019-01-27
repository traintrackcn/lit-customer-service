import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
import LITAppConfigAdvField from './LITAppConfigAdvField';
import LITAppConfigField from './LITAppConfigField';

class LITAppConfigFNLoader extends PureComponent {

    render(){

        let submenu = this.props.submenu;

        if (submenu === "ADVANCED"){
            return <LITAppConfigAdvField />;
        }

        return <LITAppConfigField />;

    }

}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        submenu: s.get(p.submenu.value),
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigFNLoader)