import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
import { Spinner, Button } from 'reactstrap';
import LITCodeEditor from './LITCodeEditor';
import { fromJS } from 'immutable';

class LITAppConfigAdvField extends PureComponent {

    constructor(props){
        super(props);
        // this.state = {value: props.value};
        this.state = {};
        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }


    async run({prj, platform}) {
        
        if (!prj) return;

        console.log('LITAppConfigAdvField run() prj ->',prj.get('id'));

        if (prj === this.prj 
            && platform === this.platform) return;

        this.prj = prj;
        this.platform = platform;

        let companyCode = getConfig(prj, 'code');
        console.log('companyCode -> '+companyCode);
        s.set(p.appConfig.company, companyCode);
        s.del(p.appConfig.value);
        
        await s.dispatch(r.appConfig.get());

        let value = s.get(p.appConfig.value);
        this.setState({value: value.toJS()});
    }


    componentWillMount(){
        this.run({
            prj: this.props.prj,
            platform: this.props.platform
        });
    }

    async componentWillReceiveProps(nextProps){
        console.log('LITAppConfigAdvField componentWillReceiveProps()');
        this.run({
            prj: nextProps.prj,
            platform: nextProps.platform,
        });
    }

    onCodeChange({newValue, changed }){
        console.log("onCodeChange");
        this.setState({
            newValue: newValue, 
            changed: changed
        });
    }

    async onSave(){
        const newValue = this.state.newValue;
        console.log('newValue -> '+JSON.stringify(newValue, null, 2));

        s.set(p.appConfig.value, fromJS(newValue));

        this.setState({
            value: newValue,
            newValue: undefined, 
            changed: undefined
        });

        await s.dispatch(r.appConfig.put())

        
    }

    render() {
        const loading = this.props.loading;
        let value = this.state.value;
        
        if (loading) return (<Spinner type='grow' color='primary' />);
        if (!value) return null;

        // const company = this.props.company;
        const platform = this.props.platform;
        const changed = this.state.changed;

        console.log('render()');

        const h = 500;
        // if (!component) return null;
        return (
            <div style={{border: '0px solid', height: h,}}>
                
                    
                <div style={{
                        width: '100%',
                        padding: 5,
                        backgroundColor: '#FEFBDF',
                        // display: 'inline-block',
                    }}>
                    
                    {
                        changed &&
                        <span style={{display: 'inline-block'}}>
                        <Button size='sm' color="primary" onClick={this.onSave}>Save</Button>
                        </span>
                    }
                    
                </div>
                <div style={{padding: 10, height: '50vh'}}>
                <LITCodeEditor value={value} onChange={this.onCodeChange}/>
                </div>

                
                
            </div>
        );
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    let loading = s.get(p.appConfig.loading);
    return {
        platform: s.get(p.appConfig.platform),
        prj: s.get(p.prj.value),
        loading: loading
    }
}
  
export default connect(mapStateToProps)(LITAppConfigAdvField)