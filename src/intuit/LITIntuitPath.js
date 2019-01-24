
import LITCommonPath from 'lit-react/src/LITCommonPath';
// import LITSignUpPath from './LITSignUpPath';
// import LITPath from 'lit-react/src/LITPath';

export default class LITIntuitPath extends LITCommonPath{
    constructor(path){
        // console.log('path -> '+path);
        super(path);
        
        this.config = path.concat(['config']);
    }
}