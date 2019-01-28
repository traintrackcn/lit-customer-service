import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import LITAppConfigAdvField from './LITAppConfigAdvField';
import LITAppConfigField from './LITAppConfigField';
import LITAppConfigNavigator from './LITAppConfigNavigator';
import LITAppConfigDetail from './LITAppConfigDetail';

class LITFNLoaderAppConfig extends PureComponent {

    render(){

        let category = this.props.category;
        let nav = this.props.nav;

        if (nav){

            console.log('nav -> ', JSON.stringify(nav));
            return (
                <div>
                    <LITAppConfigDetail 
                        theKey={nav.get('key')}
                        category={nav.get('category')}
                    />
                </div>
            );
        }

        // console.log('category -> ', category);
        return (


            <div style={{
                // border: '1px solid'
                }}>
                <LITAppConfigNavigator />
                
                {   category === "CODE" &&
                    <LITAppConfigAdvField />
                }

                <LITAppConfigField />
            </div>
        )

    }

}



const mapStateToProps = (state /*, ownProps*/) => {

    let nav = s.get(p.nav.current);

    return {
        nav:  nav, 
        category: s.get(p.appConfig.category)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITFNLoaderAppConfig)