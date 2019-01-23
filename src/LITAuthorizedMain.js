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

        return (
            <Container fluid style={{
                // border: '1px solid',
                padding: 0,
                width: browserW,
                height: browserH
                }}>
            <Row noGutters
                style={{
                    // border:'1px solid',
                    height: '100%',
                }}
            >

                
                <Col xs={2} style={{
                    borderRight:'1px solid #ccc',
                    height: '100%',
                    // backgroundColor: 'white',
                }}>
                <LITProjectField />
                    {/* <Route path="/:company/:platform/:category" component={LITCategory} /> */}
                </Col>


                <Switch>
                {/* <Route path="/:company/:platform/:category" component={LITDashboard} />
                <Route path="/:company/:platform" component={LITAdvanceDashboard} /> */}
                </Switch>

                <Col style={{
                    // backgroundColor: 'gray',
                    // padding: 0,
                }}>
                    <Container style={{padding: 0}}>

                        <Row noGutters style={{
                            width: '100%',
                            
                            // backgroundColor: '#FDFBD8',
                        }}> 
                        
                        <LITMenuField />
                        </Row>

                        <Row noGutters style={{
                            width: '100%',
                            // height: '60px',
                            border: 'solid 1px',
                        }}> 
                        <LITContentField />
                        </Row>

                    </Container>
                

                </Col>
                
            </Row>
            

            

          </Container>
        );
    }
}