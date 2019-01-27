import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import billingS from '../css/billing.module.css';
import { Table } from 'reactstrap';
import { getConfig } from '../project/prj-utils';

class LITBillingField extends PureComponent {

    // constructor() {
    //     super();
    // }

    async componentDidMount() {
        // let e = s.dispatch(r.intuit.fetchConfig());
    }

    render() {
        let prj = this.props.prj;
        let submenu = this.props.submenu;
        let code = getConfig(prj, 'code');
        let customer = getConfig(prj, 'customer');
        
        console.log('submenu -> '+submenu);

        return (
            <div className={[billingS.main].join(' ')}>
            {/* {submenu} */}
            {code}<br />
            {customer}

            <Table striped responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2019.1</th>
            <td>Billing</td>
          </tr>
          <tr>
            <th scope="row">2019.2</th>
            <td>Paid</td>
          </tr>
          <tr>
            <th scope="row">2019.3</th>
            <td>Payment</td>
          </tr>
        </tbody>
      </Table>

            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        submenu: s.get(p.submenu.value),
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITBillingField)