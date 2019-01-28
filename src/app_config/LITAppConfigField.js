import React, { PureComponent, Component } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
// import LITGETConfig from './LITGETConfig';
// import LITPUTConfig from './LITPUTConfig';
import { Row, Container, Spinner, Col } from 'reactstrap';
import LITAppConfigItemView from './LITAppConfigItemView';

class LITAppConfigField extends PureComponent {

    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }

    async run({prj, platform}) {
        
        if (!prj) return;

        console.log('LITAppConfigField run() prj ->',prj.get('id'));

        if (prj === this.prj 
            && platform === this.platform) return;

        this.prj = prj;
        this.platform = platform;

        let companyCode = getConfig(prj, 'code');
        console.log('companyCode -> '+companyCode);
        s.set(p.appConfig.company, companyCode);
        s.del(p.appConfig.value);
        
        await s.dispatch(r.appConfig.get());
    }

    async componentWillMount(){
        console.log('LITAppConfigField componentWillMount()');
        this.run({
            prj: this.props.prj,
            platform: this.props.platform,
        });
    }

    async componentWillReceiveProps(nextProps){
        console.log('LITAppConfigField componentWillReceiveProps()');
        this.run({
            prj: nextProps.prj,
            platform: nextProps.platform,
        });
    }


    onClick(key, value){
        let category = this.props.category;
        // console.log('key ->', key, 'value ->', JSON.stringify(value, null, 2));
        s.dispatch(r.nav.PUSH({
            // comp: LITAppConfigDetail,
            key: key, 
            category: category
        }));
    }
      

    render() {
        console.log('LITAppConfigField render()');

        const loading = this.props.loading;
        let value = s.get(p.appConfig.value);
        
        if (loading) return (<Spinner type='grow' color='primary' />);
        if (!value) return null;
        let category = this.props.category;
        // const collection = value.get(category);
        const keys = value.get(category+'Keys');
        return (
            <div style={{
                border:'solid 1px', 
                padding: 10}}>
                {this.cols(keys)}
            </div>
        );
    }


    cols(keys) {
        let cols = [];
        keys.map((key, index) => {
            // console.log('key -> '+key);
            // const value = collection.get(key);
            cols.push(  
                <LITAppConfigItemView
                    key={key} 
                    theKey={key}
                    onClick={this.onClick}
                />
            );
        });

        // cols.push(</Row>);
        return cols;
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    let loading = s.get(p.appConfig.loading);
    console.log('loading -> ', loading);

    return {
        category: s.get(p.appConfig.category),
        platform: s.get(p.appConfig.platform),
        prj: s.get(p.prj.value),
        loading: loading,
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigField)






