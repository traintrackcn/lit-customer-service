import LITPath from 'lit-react/src/LITPath';
import LITCommonPath from 'lit-react/src/LITCommonPath';

export default class LITAppConfigPath extends LITPath{
    constructor(path){
        super(path);
        this.category = this.path.concat(['category']);
        this.platform = this.path.concat(['platform']);
    }
}