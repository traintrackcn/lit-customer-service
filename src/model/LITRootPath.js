
import LITProjectPath from '../project/LITProjectPath';
import LITPath from 'lit-react/src/LITPath';
import LITIntuitPath from '../intuit/LITIntuitPath';
import LITUserPath from '../user/LITUserPath';
import LITCommonPath from 'lit-react/src/LITCommonPath';

export default class LITRootPath extends LITPath{
    constructor(path){
        super(path);
        // this.signUp = new LITSignUpPath(this.path.concat(['signUp']));
        // this.token = this.path.concat('token');
        this.user = new LITUserPath(this.path.concat('user'));

        // console.log
        // console.log('path -> '+this.path.concat('prj');

        this.prj = new LITProjectPath(this.path.concat('prj'));
        this.menu = this.path.concat('menu');
        this.submenu = new LITCommonPath(this.path.concat('submenu'));
        this.intuit = new LITIntuitPath(this.path.concat('intuit'));
    }
}