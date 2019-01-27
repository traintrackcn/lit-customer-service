describe('', () => {

    it('should find out raw plan', ()=>{
        let str = `

        **config-begin**
        platform-->ios
        customer-->Customer A|Customer B
        **config-end**
        
        [plan]
        Elite 2018.9~2018.12
        Basic 2017.8~2017.8
        Basic 2015.11~2017.1
        [plan]
        
        
        `;


        // const regex = /\[plan\-begin\]\w+\[plan\-end\]/g;
        const regex = /\[plan\]([\s\S]*?)\[plan\]/g;
        const matches =  str.match(regex);
        console.log('matches -> '+JSON.stringify(matches, null, 2));
        if (matches.length > 0){
            let match = matches[0];
            let plans = match.match(/\w+\s.+/g);
            console.log('plans -> '+JSON.stringify(plans, null, 2));
        }

        expect(matches).toMatchSnapshot();

    });
    

});