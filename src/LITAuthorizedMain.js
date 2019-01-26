import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import layoutS from './layout.test.module.css';
import LITProjectField from './project/LITProjectField';
import LITMenuField from './menu/LITMenuField';
import LITContentField from './LITContentField';
import logo from './images/logo.png'; // Tell Webpack this JS file uses this image
import menuS from './menu/menu.module.css';


export default class LITAuthorizedMain extends PureComponent {


    constructor() {
        super();
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.data = {};
        
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }



    render() {

        const browserW = this.state.width;
        const browserH = this.state.height;
        let menuH = 60;

        return (
            <Container fluid style={{
                // border: '1px solid',
                padding: 0,
                width: browserW,
                height: browserH
                }}>

                 
                
                <Row noGutters 
                    style={{
                    }}>
                <Col xs='12' style={{
                    padding: 0,
                    backgroundColor: '#2C3340',
                    }}>
                <LITProjectField />
                </Col>
                </Row>

                <Row noGutters 
                    style={{
                        backgroundColor: '#007BFF',
                    }}>
                <Col xs='12' style={{
                    paddingLeft: 5,
                    }}>
                <LITMenuField />
                </Col>
                </Row>

                <Row noGutters
                    style={{
                        paddingLeft: 15,
                        // paddingBottom: 6,
                        paddingTop: 6,
                        // border: '1px solid',
                        // background: '#007BFF'
                    }}>
                    {/* <div style={{height: 0.5, width: '100%', backgroundColor: '#FFF'}}></div> */}
                    <span className={[menuS.sub, menuS.selected].join(' ')}>submenu</span>
                    <span className={[menuS.sub, menuS.normal].join(' ')}>submenu</span>
                    <span className={[menuS.sub, menuS.normal].join(' ')}>submenu</span>
                    <span className={[menuS.sub, menuS.normal].join(' ')}>submenu</span>
                    <span className={[menuS.sub, menuS.normal].join(' ')}>submenu</span>
                    <span className={[menuS.sub, menuS.normal].join(' ')}>submenu</span>
                    {/* <div style={{height: 4, width: '100%', border: 'solid 0px'}}></div> */}
                </Row>
                

                <Row noGutters style={{
                    width: '100%',
                    // height: (browserH- menuH),
                    // border: 'solid 1px',
                }}> 
                <LITContentField />
                </Row>


            

          </Container>
        );
    }
}