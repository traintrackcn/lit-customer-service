import React, { PureComponent, Component } from 'react';
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

class LITAppConfigField extends PureComponent {

    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            modal: false
        };
        this.onCloseDetail = this.onCloseDetail.bind(this);
        this.onOpenDetail = this.onOpenDetail.bind(this);
    }

    onCloseDetail(){
        this.setState({
            modal: false
        });
    }

    onOpenDetail(){
        this.setState({
            modal: true
        });
    }

    async run({prj, platform}) {
        console.log('LITAppConfigField run() prj ->',prj.get('id'), 'platform ->', platform);
        await s.dispatch(r.appConfig.get({prj, platform}));
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
        // let category = this.props.category;
        // // console.log('key ->', key, 'value ->', JSON.stringify(value, null, 2));
        // s.dispatch(r.nav.PUSH({
        //     // comp: LITAppConfigDetail,
        //     key: key, 
        //     category: category
        // }));
        this.onOpenDetail();
    }
      

    render() {
        console.log('LITAppConfigField render()');

        const loading = this.props.loading;
        let value = s.get(p.appConfig.value);
        
        if (loading) return (<LITProcessing />);
        if (!value) return null;
        let category = this.props.category;
        // const collection = value.get(category);
        const keys = value.get(category+'Keys');
        return (
            <div style={{
                // border:'solid 1px', 
                padding: 10}}>
                {this.cols(keys)}

                <Modal 
                    open={this.state.modal}
                    onClose={this.onCloseDetail}
                    classNames={{
                        // overlay: styles.customOverlay,
                        modal: styles.customModal,
                    }}
                    >
                <h2>Simple modal</h2>
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                sdlk dflkd flksdf jdksfj dslkfj kdsfj ldskf dkfjskdjf ksdfj kdsjf kdsjf kdsjf kds jfkdsj fkds jfkdsjf ksdjf ksd jfksdjf ksd jfkdsjfkdsj fkjds kfjsd fksdj fk
                
                 
                </Modal>
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






