import { formattedLastDateOfMonth, formattedFirstDateOfMonth } from "../common/date-utils";

export const BILLING_STATUS_ISSUE = 'ISSUE';
export const BILLING_STATUS_RECEIVING = 'RECEIVING';
export const BILLING_STATUS_PAID = 'PAID';
export const BILLING_STATUS_CLOSED = 'CLOSED';
export const BILLING_STATUSES = [
    BILLING_STATUS_ISSUE,
    BILLING_STATUS_RECEIVING,
    BILLING_STATUS_PAID,
    BILLING_STATUS_CLOSED
];

export const BILLING_PERIOD_RECENT_MONTHS = 'Recent 12 months';
export const BILLING_PERIOD_MONTHS_AGO = '12 months ago';
export const BILLING_PERIODS = [
    BILLING_PERIOD_RECENT_MONTHS,
    BILLING_PERIOD_MONTHS_AGO
];

export const BILLING_MONTHS_FROM_PLANS = (rawPlans) => {
    var arr = [];
    rawPlans.forEach(rawPlan => {
        let months = generateMonths(rawPlan);
        arr.push(...months);
    });
    return arr;
}

const generateMonths = (rawPlan) => {
    var arr = rawPlan.split(' ');
    var plan = arr[0];
    var rawPeriod = arr[1];
    var mArr = [];

    console.log('plan ->', plan);
    console.log('rawPeriod ->', rawPeriod);
    let period = rawPeriod.split('~');
    let rawPeroidStart = period[0];
    let rawPeroidEnd = period[1];

    // console.log('rawPeroidStart ->', rawPeroidStart);
    // console.log('rawPeroidEnd ->', rawPeroidEnd);

    let peroidStart = new Date(rawPeroidStart);
    let periodEnd = new Date(rawPeroidEnd);

    // console.log('peroidStart ->', peroidStart);
    // console.log('periodEnd ->', periodEnd);

    let diff = monthsDiff(periodEnd, peroidStart);

    console.log('diff -> ', diff);

    for (let index = 0; index <= diff; index++) {
        // const element = array[index];
        var d = new Date(periodEnd.getTime());
        d.setMonth( d.getMonth() - index);

        // var ld = new Date(d.getFullYear(), d.getMonth()+1, 0); //last day of the month

        var m = {};

        m.date = d.getFullYear()+'.'+(d.getMonth()+1);
        m.startDate = formattedFirstDateOfMonth(d);
        m.endDate = formattedLastDateOfMonth(d);
        m.plan = plan;

        // console.log(d.getFullYear()+'.'+(d.getMonth()+1));
        
        mArr.push(m);
    }

    // let peroidStart = [rawPeroidStart componentsSeparatedByString:@"."];
    // let peroidEnd = [rawPeroidEnd componentsSeparatedByString:@"."];
//     NSInteger startY = [peroidStart.firstObject integerValue];
//     NSInteger startM = [peroidStart.lastObject integerValue];
//     NSInteger endY = [peroidEnd.firstObject integerValue];
//     NSInteger endM = [peroidEnd.lastObject integerValue];
//     NSInteger currentY = self.currentY;
//     NSInteger currentM = self.currentM;
    
//     for (NSInteger Y=startY; Y<=endY; Y++) {
//         NSInteger tmpStartM = -1;
//         NSInteger tmpEndM = -1;
        
//         TLOG(@"Y -> %@ startY -> %@ endY -> %@", @(Y), @(startY), @(endY));
//         TLOG(@"startM -> %@ endM -> %@", @(startM), @(endM));
        
//         if (Y!=startY && Y==endY){
//             tmpStartM = 1;
//             tmpEndM = endM;
//         }
        
//         if (Y==startY && Y!=endY){
//             tmpStartM = startM;
//             tmpEndM = 12;
//         }
        
//         if (Y!=startY && Y!=endY){
//             tmpStartM = 1;
//             tmpEndM = 12;
//         }
        
//         if (Y==startY && Y==endY){
//             tmpStartM = startM;
//             tmpEndM = endM;
//         }
        
        
            
//         for (NSInteger M=tmpStartM; M<=tmpEndM; M++) {
            
//             if (Y>currentY) continue;
//             if (Y==currentY
//                 && M>currentM) continue;
            
//             TLOG(@"Y -> %@ M -> %@ plan -> %@", @(Y), @(M), plan);
//             LITCustomerServiceReport *item = [LITCustomerServiceReport instance];
//             item.Y = Y;
//             item.M = M;
//             item.currentY = currentY;
//             item.currentM = currentM;
//             item.startD = self.startD;
//             item.endD = [self endDFor:Y M:M];
            
// //            LITIntuitProduct *p = [LITIntuitProduct instance];
// //            p.name = productName;
            
//             item.plan = plan;
//             [self.tmpReports addObject:item];
//         }
        
//         TLOG(@"===========");
//     }
    return mArr;
}


const monthsDiff= function(day1,day2){
	var d1= day1,d2= day2;
	if(day1<day2){
		d1= day2;
		d2= day1;
	}
	var m= (d1.getFullYear()-d2.getFullYear())*12+(d1.getMonth()-d2.getMonth());
	if(d1.getDate()<d2.getDate()) --m;
	return m;
}