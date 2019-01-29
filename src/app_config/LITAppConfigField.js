import React from 'react';
import LITPureComponent from '../LITPureComponent';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
// import LITGETConfig from './LITGETConfig';
// import LITPUTConfig from './LITPUTConfig';
import LITProcessing from '../LITProccesing';
import LITAppConfigItemView from './LITAppConfigItemView';

import Modal from 'react-responsive-modal';
import styles from '../index.module.css';
import LITAppConfigExpert from './LITAppConfigExpert';
import { fromJS } from 'immutable';
import LITAppConfigUnit from './LITAppConfigUnit';

class LITAppConfigField extends LITPureComponent {

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

    async onReceiveProps({prj, platform}) {
        console.log('onReceiveProps() prj ->',prj.get('id'), 'platform ->', platform);
        await s.dispatch(r.appConfig.get({prj, platform}));
    }


    onClick(key, value){
        console.log('key ->', key, 'value ->', JSON.stringify(value, null, 2));
        this.configUnitKey = key;
        this.configUnitValue = value;
        
        this.setState({
            modal: true
        });
    }
      

    render() {
        

        const loading = this.props.loading;
        let value = this.props.value;

        console.log('render()');
        
        if (loading) return (<LITProcessing />);
        if (!value) return null;
        let category = this.props.category;
        let collection = value.get(category);

        if (!collection) collection = fromJS({});

        const keys = this.keys(collection);

        console.log('keys -> ', JSON.stringify(keys, null, 2));

        return (
            <div style={{
                // border:'solid 1px', 
                padding: 10, paddingTop: 0}}>

                <LITAppConfigExpert category={category} value={collection} />

                {this.cols(keys, collection)}

                <Modal 
                    open={this.state.modal}
                    onClose={this.onCloseDetail}
                    classNames={{
                        // overlay: styles.customOverlay,
                        modal: styles.customModal,
                    }}
                    >
                    <LITAppConfigUnit 
                        theKey={this.configUnitKey}
                        value={this.configUnitValue}
                        category={category}
                    />
                </Modal>
            </div>
        );
    }


    keys(collection) {
        let arr = [];
        collection.map((value, index) => {
            arr.push(index);
        });
        return arr.sort();
    }

    cols(keys, collection) {
        let cols = [];
        keys.map((key, index) => {
            // console.log('key -> '+key);
            const value = collection.get(key);
            cols.push(  
                <LITAppConfigItemView
                    key={key} 
                    theKey={key}
                    onClick={this.onClick}
                    value={value}
                    category={this.props.category}
                />
            );
        });

        // cols.push(</Row>);
        return cols;
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    let loading = s.get(p.appConfig.loading);
    let value = s.get(p.appConfig.value);

    console.log('config value ->', JSON.stringify(value, null, 2));
    // console.log('loading -> ', loading);

    return {
        category: s.get(p.appConfig.category),
        platform: s.get(p.appConfig.platform),
        prj: s.get(p.prj.value),
        value: value,
        loading: loading,
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigField)






