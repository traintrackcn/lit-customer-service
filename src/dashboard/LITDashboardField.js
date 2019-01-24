import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import LITRecentIssueField from '../issue/LITRecentIssueField';

class LITDashboardField extends PureComponent {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{padding: 0, width: '100%'}}>

                <LITRecentIssueField
                    />

            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITDashboardField)