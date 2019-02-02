// #import "LITIntuitLoaderCreateInvoice.h"
// #import "LITCustomerServiceReport.h"
// #import "LITIntuit/LITIntuitProduct.h"
// #import "LITIntuitCustomer.h"
// #import "LITIntuitLineItem.h"
// #import "LITIntuitProduct.h"
// #import "LITIntuitLine.h"
// #import "LITInvoice/LITIntuitInvoice.h"

// @implementation LITIntuitLoaderCreateInvoice

// - (NSString *)method{
//     return @"POST";
// }

// - (id)parseRawData:(id)raw{
//     return raw;
// }

// - (NSString *)requestType{
//     NSString *result = [NSString stringWithFormat:@"company/%@/invoice",SESSION.intuitRealmId];
//     return [result stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]];
// }

// - (id)requestBody{
    
//     TLOG(@"self.report.key -> %@", self.report.key);
//     TLOG(@"self.invoice.customer._id -> %@", self.invoice.customer._id);
//     TLOG(@"self.requestBodyOfLine -> %@", self.requestBodyOfLine);
    
//     return @{
//              @"DocNumber": self.report.key,
// //             @"DueDate": self.report.endDate,
//              @"CustomerRef": @{
//                  @"value": self.invoice.customer._id
//              },
//              @"Line": self.requestBodyOfLine,
// //             @"EmailStatus": @"NeedToSend",
//              @"BillEmail": @{
//                  @"Address": self.invoice.customer.email
//                 }
//              };
// }


// - (NSArray *)requestBodyOfLine{
    
//     NSArray *items = self.invoice.line.items;
//     NSMutableArray *tmpArr = [NSMutableArray array];
//     for (NSInteger i = 0; i < items.count; i++) {
//         LITIntuitLineItem *item = [items objectAtIndex:i];
//         LITIntuitProduct *product = item.product;
        
//         TLOG(@"item.amount -> %@", item.amount);
//         TLOG(@"item._description -> %@", item._description);
//         TLOG(@"item.qty -> %@", item.qty);
//         TLOG(@"product.unitPrice -> %@", product.unitPrice);
//         TLOG(@"product._id -> %@", product._id);
        
//         id d = @{
//                     //                @"LineNum": self.report.quotaExceeded,
//                     @"Amount": item.amount,
//                     @"DetailType": @"SalesItemLineDetail",
//                     @"Description": item._description,
//                     @"SalesItemLineDetail": @{
//                             @"Qty": item.qty,
//                             @"UnitPrice": product.unitPrice,
//                             @"ItemRef": @{
//                                     @"value": product._id,
//                                     @"name": product.name
//                                     }
//                             }
//                     };
//         [tmpArr addObject:d];
//     }
    
    
    
//     return tmpArr;
// }

// #pragma mark -

// - (LITIntuitInvoice *)invoice{
//     return self.report.invoice;
// }


// #pragma mark - debug switches

// - (BOOL)debugRequest{
//     return YES;
// }

// - (BOOL)debugHeaders{
//     return YES;
// }


// @end
