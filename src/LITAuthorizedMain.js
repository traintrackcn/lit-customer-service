import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
// import layoutS from './css/main.module.css';
import LITProjectField from './project/LITProjectField';
import LITMenuField from './menu/LITMenuField';
import LITContentField from './LITContentField';
import logo from './images/logo.png'; // Tell Webpack this JS file uses this image
import LITUserInfoField from './user/LITUserInfoField';


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
        // let menuH = 60;

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
                <Col  style={{
                    paddingLeft: 5,
                    // flexDirection: 'row',
                    }}>
                <LITMenuField />
                
                </Col>
                <Col>
                <LITUserInfoField />
                </Col>
                </Row>
                

                <Row noGutters style={{
                    width: '100%',
                    // border: 'solid 1px',
                }}> 
                    <LITContentField />
                </Row>


            

          </Container>
        );
    }
}