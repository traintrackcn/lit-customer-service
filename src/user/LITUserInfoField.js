import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import mainS from '../css/main.module.css';

class LITUserInfoField extends PureComponent {

    // constructor() {
    //     super();
    // }

    async componentDidMount() {
        // let e = s.dispatch(r.intuit.fetchConfig());
    }

    render() {
        let user = this.props.user;

        if (!user) return null;

        let name = user.get('firstname');
        if (user.get('lastname')){
            name += ' '+user.get('lastname');
        }

        return (
            <div className={mainS.personalInfo}>
                {name}
            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        user: s.get(p.user)
    }
}
  
export default connect(mapStateToProps)(LITUserInfoField)