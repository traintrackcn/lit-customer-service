
import LITPath from 'lit-react/src/LITPath';
// import LITSignUpPath from './LITSignUpPath';

export default class LITRootPath extends LITPath{
    constructor(path){
        super(path);
        // this.signUp = new LITSignUpPath(this.path.concat(['signUp']));
        this.token = this.path.concat('token');
        this.user = this.path.concat('user');
    }
}