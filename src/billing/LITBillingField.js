import React from 'react';
import LITPureComponent from '../LITPureComponent';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { prj_getConfig, prj_getPlans } from '../project/prj-utils';
import { BILLING_MONTHS_FROM_PLANS } from './LITBillingDefine';
import LITProcessing from '../LITProcessing';
import '../index.css';
import styles from '../index.module.css';
import LITNewInvoiceField from './LITNewInvoiceField';

class LITBillingField extends LITPureComponent {

  constructor(){
    super();
    
    this.state = {
        modal: false
    };
    this.onCloseDetail = this.onCloseDetail.bind(this);
    this.onClick = this.onClick.bind(this);
}


  onCloseDetail(){
    this.setState({
        modal: false
    });
}

onClick(value){
  // this.configUnitKey = key;
  // this.configUnitValue = value;

  console.log('value ->', value);
  
  this.setState({
      modal: true,
      month: value,
  });
}

    
    async onReceiveProps({prj, status}) {
      if (!status || !prj) return;

      if (status != this.status){
        await s.del(p.billing.invoice.collection);
      }

      this.status = status;

      this.plans = prj_getPlans(prj);
      // console.log('status ->', status, ' plans ->', JSON.stringify(this.plans, null, 2));
      this.months = BILLING_MONTHS_FROM_PLANS(this.plans);

      
      
      await s.dispatch(r.billing.invoice.get({prj}));

      // console.log('state ->', s.get(p.billing));
    }

    render() {

      console.log('render()');
        // let prj = this.props.prj;
        // let code = prj_getConfig(prj, 'code');
        // let customer = prj_getConfig(prj, 'customer');
        const invoices = this.props.invoices;

        if (!invoices){
          return (<LITProcessing />);
        }
        
        return (
            <div className={'billing-main'} style={{padding: 10}}>
              
                  {
                    this.items()
                  }

                <Modal 
                    open={this.state.modal}
                    onClose={this.onCloseDetail}
                    classNames={{
                        // overlay: styles.customOverlay,
                        modal: styles.customModal,
                    }}
                    >
                    <LITNewInvoiceField 
                      prj={this.props.prj}
                      month={this.state.month}
                    />
                </Modal>
            </div>
        );
    }


    items(){

      let prj = this.props.prj;
      let code = prj_getConfig(prj, 'code');
      var arr = [];

      if (this.months){
        this.months.forEach((value, index)=>{
          arr.push(
            <ItemView
              key={code+''+value.date}
              value={value}
              code={code}
              onClick={this.onClick}
            />
          );
        });
      }

      return arr;
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        status: s.get(p.billing.status),
        prj: s.get(p.prj.value),
        invoices: s.get(p.billing.invoice.collection)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITBillingField)

class ItemView extends LITPureComponent{

  constructor(){
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    const value = this.props.value;
    if(this.props.onClick){
      this.props.onClick(value);
    }
  }


  render() {
    const code = this.props.code;
    const value = this.props.value;
    const title = code+'-'+value.plan+'-'+value.date;

    return (
      <div className={'billing-item-container'}>
        <div className={'billing-item-title'}>
        <div>
        {title}
        </div>
        <div><a href="#">review</a></div>
        </div>
        <div className={['billing-item-control', 'billing-item-control-issue'].join(' ')}
          onClick={this.onClick}
        
        >
        <div>ISSUE
        </div>
        </div>
      </div>
    )
  }
}


{/* <div className={'billing-item'}>
        {code}-{value.plan}-{value.date}<br />
        Received: $20<br />
        Total: $120<br/>
        Balance $100<br />

        Due Data: 2019/10/10
        
        <span style={{backgroundColor: '#F06900', color: 'white'}}>RECEIVING</span>
      </div> */}