import LITPath from 'lit-react/src/LITPath';
import LITCommonPath from 'lit-react/src/LITCommonPath';

export default class LITBillingPath extends LITPath{
    constructor(path){
        super(path);
        this.plan = this.path.concat(['plan']);
        this.status = this.path.concat(['status']);
        this.period = this.path.concat(['period']);


        this.customer = new LITCommonPath(this.path.concat('customer'));
        this.invoice = new LITCommonPath(this.path.concat('invoice'));
        this.item = new LITCommonPath(this.path.concat('item'));
    }
}