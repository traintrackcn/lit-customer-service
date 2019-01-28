import LITReducer from 'lit-react/src/LITReducer';
import { Map, fromJS, List } from 'immutable';

export default class LITNavReducer extends LITReducer{


    PUSH(data) {
        return {
            ns: this.ns,
            type: 'PUSH',
            data: data
        };
    }


    POP() {
        return {
            ns: this.ns,
            type: 'POP'
        };
    }

    // export const nav_push = ( navData ) => {
//     stack.push(navData);
// }

// export const nav_pop = () => {
//     stack.pop();
// }

// export const nav_current = () => {
//     let lastIdx = stack.length - 1;
//     if (lastIdx < 0) return;
//     return stack[lastIdx];
// }


    main(state = Map(), action) {
        state = super.main(state, action);

        if ( !this.myAction(action) ) return state;

        switch (action.type) {
    
            case 'PUSH':{

                let stack = state.get('stack');
                if (!stack){
                    state = state.set('stack', List());
                    console.log('state -> ', JSON.stringify(state, null, 2));
                }

                stack = state.get('stack');

                stack = stack.push(fromJS(action.data));

                state = state.set('current', fromJS(action.data));
                
                state = state.set('stack', stack);

                console.log('state -> ', JSON.stringify(state, null, 2));

                return state;
            }

            case 'POP':{
                
                let stack = state.get('stack');
                if (!stack){
                    state = state.set('stack', List());
                    console.log('state -> ', JSON.stringify(state, null, 2));
                }

                stack = state.get('stack');

                stack = stack.pop();

                if (stack.size > 0){
                    let lastIdx = stack.size - 1;
                    state = state.set('current', stack.get(lastIdx));
                }else{
                    state = state.delete('current');
                }
                
                state = state.set('stack', stack);

                console.log('state -> ', JSON.stringify(state, null, 2));

                return state;

            }
            
        }
    
        return state;
      
    };

}






// var stack = [];

// export const nav_push = ( navData ) => {
//     stack.push(navData);
// }

// export const nav_pop = () => {
//     stack.pop();
// }

// export const nav_current = () => {
//     let lastIdx = stack.length - 1;
//     if (lastIdx < 0) return;
//     return stack[lastIdx];
// }