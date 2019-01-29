import React, { PureComponent } from 'react';

export default class LITPureComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.onReceiveProps(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.onReceiveProps(nextProps);
    }

    onReceiveProps(props){
    }

}