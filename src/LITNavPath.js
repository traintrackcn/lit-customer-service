import LITPath from 'lit-react/src/LITPath';

export default class LITNavPath extends LITPath{
    constructor(path){
        super(path);
        this.stack = new LITPath(this.path.concat('stack'));
        this.current = this.path.concat('current');

    }
}