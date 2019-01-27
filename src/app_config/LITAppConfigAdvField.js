import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
import LITGETConfig from './LITGETConfig';
import LITPUTConfig from './LITPUTConfig';
import { Row, Container, Spinner, Button } from 'reactstrap';
import LITCodeEditor from './LITCodeEditor';

class LITAppConfigAdvField extends PureComponent {
    constructor(){
        super();
        this.state = {};
        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.platform = 'rn';
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    
    
    

    async componentWillMount(){
        console.log('LITAppConfigField componentWillMount()');
        const company = this.companyCode();
        const platform = this.platform;

        const state = await LITGETConfig({company, platform});

        this.setState({
            'state': state
        });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }


      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }


    onCodeChange({newValue, changed }){
        console.log("onCodeChange");
        this.setState({
            newValue: newValue, 
            changed: changed
        });
    }

    companyCode() {
        let prj = this.props.prj;
        if(!prj) return;

        return getConfig(prj, 'code');

    }

    async onSave(){
        const company = this.companyCode();
        const platform = this.platform;
        const newValue = this.state.newValue;
        console.log('newValue -> '+JSON.stringify(newValue, null, 2));

        LITPUTConfig({
            state: newValue,
            company: company,
            platform: platform
        });

        this.setState({
            state: newValue,
            newValue: undefined, 
            changed: undefined
        });
    }

    render() {
        const state = this.state.state;
        // if (!this.state.state) return null;
        if (!this.state.state) return (<Spinner type='grow' color='primary' />);

        const company = this.companyCode();
        const platform = this.platform;
        const changed = this.state.changed;

        console.log('render()');

        const browserH = this.state.height;
        const h = browserH - 150;
        // if (!component) return null;
        return (
            <div style={{border: '0px solid', height: h,}}>
                
                    
                <div style={{
                        width: '100%',
                        padding: 5,
                        backgroundColor: '#FEFBDF',
                        // display: 'inline-block',
                    }}>
                    
                    
                    <span style={{marginRight: 10,display: 'inline-block', color: '#492E01', fontWeight: 'bold', fontSize: 13}}>platform -> {platform}</span>
                    
                    {
                        changed &&
                        <span style={{display: 'inline-block'}}>
                        <Button size='sm' color="primary" onClick={this.onSave}>Save</Button>
                        </span>
                    }
                    
                </div>
                    
                <LITCodeEditor value={state} onChange={this.onCodeChange}/>
                

                
                
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
  
export default connect(mapStateToProps)(LITAppConfigAdvField)