import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import billingS from '../css/billing.module.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class LITBillingField extends PureComponent {

    // constructor() {
    //     super();
    // }

    async componentDidMount() {
        // let e = s.dispatch(r.intuit.fetchConfig());
    }

    render() {

        let submenu = this.props.submenu;
        
        console.log('submenu -> '+submenu);

        return (
            <div className={[billingS.main].join(' ')}>
            {/* {submenu} */}

            <div style={{border: 'solid 1px'}}>
            <div style={{fontWeight: 'bold'}}>
                #2018-1@VBN
            </div>
            </div>

            <div style={{border: 'solid 1px'}}>
            <div style={{fontWeight: 'bold'}}>
                #2018-1@VBN
            </div>
            </div>

            <div style={{border: 'solid 1px'}}>
            <div style={{fontWeight: 'bold'}}>
                #2018-1@VBN
            </div>
            </div>

            <div style={{border: 'solid 1px'}}>
            <div style={{fontWeight: 'bold'}}>
                #2018-1@VBN
            </div>
            </div>

            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        submenu: s.get(p.submenu.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITBillingField)