import LITBackOfficeFetchInfo from './LITBackOfficeFetchInfo';
import { LITFetch } from '../network/LITFetch';
import { categories } from './LITAppConfigDefine';

export default ({company, platform}) => {
    return new Promise( async (resolve, reject) => {

        if (!company || !platform){
            throw { 'reason': 'invalid PUT'};
        }

        let type = 'apps/'+platform+'/settings';
        // let url = 

        const info = LITBackOfficeFetchInfo({
           type: type,
            company: company,
        });

        console.log('info ->', JSON.stringify(info, null, 2));
            
        try {   
            const r = await LITFetch({info});

            // console.log('r ->', r);

            // categories.forEach((category)=>{
            //     const rCollection = r[category];
            //     const nameOfKeys = category+'Keys';
            //     let keys = [];

            //     for (const key in rCollection) {
            //         keys.push(key);
            //     }
            
            //     keys.sort();
            
            //     r[nameOfKeys] = keys;

            //     console.log('nameOfKeys -> '+nameOfKeys+' keys -> '+JSON.stringify(keys));
            // });





            resolve(r);
        } catch (e) {
            reject(e);
        }

    });
}



