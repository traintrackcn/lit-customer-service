
import LITPath from 'lit-react/src/LITPath';
import LITProjectPath from '../project/LITProjectPath';
import LITCommonPath from 'lit-react/src/LITCommonPath';
// import LITSignUpPath from './LITSignUpPath';

export default class LITRootPath extends LITPath{
    constructor(path){
        super(path);
        // this.signUp = new LITSignUpPath(this.path.concat(['signUp']));
        this.token = this.path.concat('token');
        this.user = this.path.concat('user');

        // console.log
        // console.log('path -> '+this.path.concat('prj');

        this.prj = new LITProjectPath(this.path.concat('prj'));
        this.menu = this.path.concat('menu');
    }
}