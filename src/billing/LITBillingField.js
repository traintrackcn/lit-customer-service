import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import billingS from '../css/billing.module.css';
import { Table } from 'reactstrap';
import { prj_getConfig } from '../project/prj-utils';

class LITBillingField extends PureComponent {

    // constructor() {
    //     super();
    // }

    async componentDidMount() {
        // let e = s.dispatch(r.intuit.fetchConfig());
    }

    render() {
        let prj = this.props.prj;
        let code = prj_getConfig(prj, 'code');
        let customer = prj_getConfig(prj, 'customer');
        

        return (
            <div className={[billingS.main].join(' ')} style={{padding: 10}}>
            {/* {submenu} */}
            {/* {code}<br />
            {customer} */}

            <Table striped responsive>
       
        <tbody>
          <tr>
            <th scope="row">{code}-2019.1</th>
            <td style={{backgroundColor: 'white'}}><span  style={{color: 'blue', fontWeight:'bold'}}>ISSUE</span></td>
          </tr>
          <tr>
            <th scope="row">
            {code}-2019.2<br/>
            Received: $200
            </th>
            <td style={{backgroundColor: 'green', color: 'white'}}><span  style={{backgroundColor: 'green', color: 'white'}}>PAID</span></td>
          </tr>
          <tr>
            <th scope="row">
            {code}-2019.3<br />
            Received: $20<br />
            Total: $120<br/>
            Balance $100<br />

            Due Data: 2019/10/10
            </th>
            <td style={{backgroundColor: '#F06900', color: 'white'}}>RECEIVING</td>
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