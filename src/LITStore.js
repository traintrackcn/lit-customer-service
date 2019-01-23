export default class LITStore {

    constructor(store){
        console.log('store -> '+store);
        this.store = store;
        this.dispatch = this.dispatch.bind(this);
        this.getState = this.getState.bind(this);
        this.get = this.get.bind(this);
        this.set = this.set.bind(this);
        this.del = this.del.bind(this);
    }

    dispatch (action){
        // console.log('this.store -> '+this.store);
        // console.log('this.store.dispatch -> '+this.store.dispatch);
        return this.store.dispatch(action);
    }

    getState (){
        return this.store.getState();
    }

    get = (path) => {
        
        if (!path) throw { 'reason': 'path is unavailable'};

        if (path.path) path = path.path;

        if (!(path instanceof Array)){
            let current = 'UNKNOWN';
            // console.log('path type -> '+path.prop.constructor);
            if (path.constructor) current = path.constructor.name;
            throw { 'reason': 'path should be array. current '+current};
        }

        const state = this.store.getState();
        return state.getIn(path);

    };
    
    
    set = (path, value) =>{
        const r = this.r;
        // console.log('s.set() path -> '+JSON.stringify(path, null, 2));
        // console.log('s.set() value -> '+JSON.stringify(value, null, 2));
        this.store.dispatch(r.SET(path, value));
    }
    
    del = (path) =>{
        const r = this.r;
        // console.log('setIn -> '+JSON.stringify(path)+' '+value);
        this.store.dispatch(r.DELETE(path));
    }

    
}