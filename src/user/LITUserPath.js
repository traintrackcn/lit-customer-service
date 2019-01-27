import LITPath from 'lit-react/src/LITPath';

export default class LITUserPath extends LITPath{
    constructor(path){
        // console.log('path -> '+path);
        super(path);
        this.id = this.path.concat(['id']);
        this.apiKey = this.path.concat(['api_key']);
    }
}