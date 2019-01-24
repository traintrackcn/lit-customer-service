import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import layoutS from './layout.test.module.css';
import LITProjectField from './project/LITProjectField';
import LITMenuField from './menu/LITMenuField';
import LITContentField from './LITContentField';


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

                {/* <Row noGutters 
                    style={{
                        padding: 10,
                        backgroundColor: '#FDFBD8',
                        // backgroundColor: '#FDFBD8',
                        // borderTop: 'solid 1px #CCC',
                        borderBottom: 'solid 1px #CCC',
                    }}>
                <Col xs='auto'><LITProjectField /></Col>
                </Row> */}
                
                <Row noGutters 
                    style={{
                        // padding: 10,
                        backgroundColor: '#FDFBD8',
                        // backgroundColor: '#FDFBD8',
                        // borderTop: 'solid 1px #CCC',
                        borderBottom: 'solid 1px #CCC',
                    }}>
                <Col xs='auto'>
                <div style={{
                    padding: 10, paddingRight: 0, 
                    display: 'flex',height: '100%', justifyContent:'center', alignItems: 'center'}}>
                <LITProjectField />
                </div></Col>
                <Col><LITMenuField /></Col>
                
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