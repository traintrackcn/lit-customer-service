import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Spinner } from 'reactstrap';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image
import LITGETCompanyInfo from './LITGETCompanyInfo';

class LITIntuitCompanyField extends PureComponent {

    constructor(){
        super();
        this.state = {};
    }

    async componentDidMount() {
        let res = await LITGETCompanyInfo();
        this.setState({
            info:res
        });
    }

    render() {

        if (!this.state.info) return (<Spinner />);

        let info = this.state.info;
        console.log('info ->', JSON.stringify(info, null, 2));
        let name = info.CompanyName;

        return (
            <div style={{padding: 10}}>
                
                {name}
            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITIntuitCompanyField)