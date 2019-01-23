import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import layoutS from './layout.test.module.css';

export default class LITAuthorizedMain extends PureComponent {
    render() {
        return (
            <Container fluid className={layoutS.container} style={{border: '1px solid'}}>
            <Row><div style={{
                height: '10px',
                width: '100%',
                backgroundColor: '#FFF'
                }} /></Row>
            <Row noGutters
                style={{
                    border:'5px solid white',
                }}
            >

                
                <Col style={{
                    // border:'1px solid black',
                    // backgroundColor: 'white',
                }}>
                    {/* <Route path="/:company/:platform/:category" component={LITCategory} /> */}
                </Col>
                
            </Row>
            

            <Switch>
                {/* <Route path="/:company/:platform/:category" component={LITDashboard} />
                <Route path="/:company/:platform" component={LITAdvanceDashboard} /> */}
            </Switch>

            <Row>

            </Row>

          </Container>
        );
    }
}