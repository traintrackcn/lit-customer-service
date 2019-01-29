import LITPath from 'lit-react/src/LITPath';

export default class LITBillingPath extends LITPath{
    constructor(path){
        super(path);
        this.plan = this.path.concat(['plan']);
        this.status = this.path.concat(['status']);
        this.period = this.path.concat(['period']);
    }
}