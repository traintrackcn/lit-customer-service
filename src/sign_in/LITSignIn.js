import React, { PureComponent } from 'react';
import { 
    Container, Row, Col, 
    FormGroup, Input, Label, Form,
    Button
} from 'reactstrap';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image
import LITGETUserInfo from '../network/LITGETUserInfo';
import LITGETToken from '../network/LITGETToken';
import s, {r} from '../store';


export default class LITSignIn extends PureComponent {


    constructor() {
        super();
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    async onSubmit(e) {
        e.preventDefault();

        console.log('onSubmit() -> '+JSON.stringify(this.data, null, 2));
        // console.log('e -> '+JSON.stringify(e, null, 2));

        let res = await s.dispatch( 
            r.signIn.fetch({
                user: this.data.user, 
                pwd: this.data.password
            }) 
        );

        console.log("after fetch user info -> "+JSON.stringify(res, null, 2));

    }

    handleChange(e) {

        // console.log('e.target.name -> '+e.target.name);
        // console.log('e.target.value -> '+e.target.value);

        this.data[e.target.name] = e.target.value;

    }


    render() {

        let w = this.state.width;
        let h = this.state.height;

        return (


            <div style={{
                width: w, height: h,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>

           
        <Form onSubmit={this.onSubmit}>

        <FormGroup row style={{
            // fontWeight: 'bold',
            fontSize: '20px', 
            font: 'arial',
            color: '#333',
            paddingLeft: '20px', paddingRight: '20px'}}>
        <div style={{
            // border: '1px solid', 
            // fontSize: '18px',
            justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="Logo" style={{width: '30px', height: '30px'}}/> 
        </div>
        
        &nbsp; eGEM Support
        </FormGroup>
        
        <FormGroup row>
          {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
          <Col sm={12} style={{
            //   border: '1px solid'
              }}>
            <Input type="text" name="user" placeholder="Redmine Account" onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup row>
          {/* <Label for="examplePassword" sm={2}>Password</Label> */}
          <Col sm={12} style={{
            //   border: '1px solid'
              }}>
            <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup  row>
          <Col sm={12} style={{
            //   border: '1px solid'
              }}>
            <Button type="submit" color="primary" style={{width: '100%'}}>Connect</Button>
          </Col>
        </FormGroup>


        </Form>

        </div>

            
        );
    }
}