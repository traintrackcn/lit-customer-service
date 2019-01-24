export const INTUIT_ENTITY_CUSTOMER = "Customer";
export const INTUIT_ENTITY_INVOICE = "Invoice";
export const INTUIT_ENTITY_PRODUCT = "Item";


export default class LITIntuitQuery {

    constructor(){

        let conditionCustomerDisplayName;
        let conditionProductName;
        let conditionInvoiceDocNumber;
        let conditionEntity;

        let limit;
        let offset = 0;

    }

    query() {
        let q = ''
        q += "SELECT";
        q += " *";
        q += " FROM";
        q += " "+this.conditionEntity;
        
        if (this.bWHERE) q += " WHERE";
        if (this.conditionCustomerDisplayName) q += " DisplayName = '"+this.conditionCustomerDisplayName+"'";
        if (this.conditionProductName) q += " Name = '"+this.conditionProductName+"'";
        if (this.conditionInvoiceDocNumber) q += " DocNumber = '"+this.conditionInvoiceDocNumber+"'";
    //    [s appendFormat:@" PrimaryEmailAddr.Address = 'traintrackcn@gmail.com'"];
    //    [s appendFormat:@" MetaData.CreateTime >= '2009-10-14T04:05:05-07:00'"];
    //    [s appendFormat:@" CurrencyRef.name = 'United States Dollar'"];
        
        q += " STARTPOSITION "+this.offset;
        if (this.limit) q += " MAXRESULTS "+this.limit;
    //    if (self.sparse) [s appendFormat:@" SPARSE = %@", self.sparse?@"true":@"false"];
        
        return s;
    }

    bWHERE (){
        if (this.conditionCustomerDisplayName) return true;
        if (this.conditionProductName) return true;
        if (this.conditionInvoiceDocNumber) return true;
        return false;
    }

}


//SELECT * FROM Customer WHERE GivenName = 'greg' STARTPOSITION  10
//SELECT * FROM Customer WHERE Metadata.LastUpdatedTime > '2011-08-10T10:20:30-0700'
//SELECT * FROM Customer WHERE CompanyName = ‘Adam\’s Candy Shop’
//SELECT * FROM Invoice WHERE TotalAmt > '1000.0'
//SELECT * FROM Invoice WHERE MetaData.CreateTime >= '2009-10-14T04:05:05-07:00' AND MetaData.CreateTime <= '2012-10-14T04:05:05-07:00'
//SELECT * FROM Invoice WHERE id in ('64523', '18761', '35767') AND MetaData.CreateTime >= '1990-12-12T12:50:30Z' AND MetaData.LastUpdatedTime <='1990-12-12T12:50:30Z'
//SELECT * FROM Invoice WHERE CustomerRef = '123'
//SELECT * FROM Customer WHERE Active IN (true, false)
//SELECT * FROM Customer WHERE Id = '123456'
//SELECT * FROM Customer WHERE active = true
//SELECT * FROM Customer WHERE GivenName LIKE 'K%h' AND FamilyName LIKE 'Palm%'
//SELECT * FROM Invoice WHERE CustomerId IN ('12')
//SELECT * FROM Invoice WHERE TxnDate > '2011-01-01' AND TxnDate <= CURRENT_DATE
//SELECT * FROM Customer ORDERBY FamilyName
//SELECT * FROM Customer ORDERBY FamilyName DESC
//SELECT * FROM Invoice STARTPOSITION 1 MAXRESULTS 10
//SELECT * FROM Invoice STARTPOSITION 11 MAXRESULTS 10
//SELECT COUNT(*)FROM Customer

//Select Statement = SELECT * | count(*)
//FROM IntuitEntity
//[WHERE WhereClause]
//[ORDERBY OrderByClause]
//[STARTPOSITION  Number] [MAXRESULTS  Number]
