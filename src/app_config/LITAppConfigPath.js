import LITPath from 'lit-react/src/LITPath';
import LITCommonPath from 'lit-react/src/LITCommonPath';

export default class LITAppConfigPath extends LITPath{
    constructor(path){
        super(path);
        this.company = this.path.concat(['company']);
        this.category = this.path.concat(['category']);
        this.platform = this.path.concat(['platform']);
        this.value = this.path.concat('value');
        this.loading = this.path.concat('loading');
    }
}