// let myArray = [ 0, 1, 2, 3, 4 ];
// console.log( myArray );
// let value = myArray.reduce( ( prev, curr ) => prev + curr );
// console.log( myArray );
// console.log( value );
// [ 0, 1, 2, 3, 4 ]
// [ 0, 1, 2, 3, 4 ];
// 10

let depositInfo = {

};
depositBalance += depositInfo.balance ?? 0;



meta = {
    "description": 'Проверяет подключена ли услуга "Email-выписка"',
    "specification": 'Колл проверяет подключена ли услуга "Email-выписка" по номеру договора (account_number)',
    "tags": [ {
        "name": "Проверка"
    } ],
    "inputs": [ {
        "name": "CONTACT_ID",
        "type": "TEXT",
        "optional": false
    }, {
        "name": "ACCOUNT_NUMBER",
        "type": "TEXT",
        "optional": false
    } ],
    "outputs": [ {
        "name": "EMAIL_STATEMENT_ENABLED",
        "type": "BOOL",
        "optional": true
    } ],
    "tests": [ {
        "name": "test1",
        "inputs": [ {
            "name": "CONTACT_ID",
            "type": "TEXT",
            "value": "4-1THBLRYK"
        }, {
            "name": "ACCOUNT_NUMBER",
            "type": "TEXT",
            "value": "5337217607"
        } ],
        "outputs": [
            {
                "name": "EMAIL_STATEMENT_ENABLED",
                "type": "BOOL",
                "value": true
            }
        ]
    } ],
    "urls": [ {
        method: "GET",
        url: "/product/api/v2/customer/*/account/*/services"
    } ]
};

let util = require( "tcrm_js_call_util" );

async function main ( args ) {

    let response = await util.tcrmGet(
        `/product/api/v2/customer/${ args.CONTACT_ID }/account/${ args.ACCOUNT_NUMBER }/services` );

    if ( !response || !response.length ) {
        throw new Error( "Cервер вернул пустой ответ" );
    }

    response = response.find( service => service.name === "E-mail выписка" );

    if ( response.hasOwnProperty( "error" ) ) {
        throw new Error( response.error );
    }

    if ( response.hasOwnProperty( "enabled" ) ) {
        return { EMAIL_STATEMENT_ENABLED: response.enabled };
    }
}