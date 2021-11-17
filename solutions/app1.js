// ## 1. feladat
// - Fájl: `solutions/app1.js`
// - Függvény neve: `converterPromise`
// - Export: a converterPromise függvény legyen a default export!
// - Írj egy olyan függvényt, amely paraméterként kap egy tömböt. A függvény visszatérési értéke egy Promise.  
// - A Promise resolved lesz, amennyiben a tömb minden eleme string, és azok sikeresen nagybetűssé alakíthatók: tehát a Promise visszaad 
// egy új tömböt, amely az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
// - Ellenkező esetben a Promise rejected lesz, a visszatérési érték pontosan: 
// `Error: Not all elements are string type!`

function converterPromise(array) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.every( element => typeof element === 'string')) {
                resolve( array.map( element => element.toUpperCase() ) )
            } else {
                reject('Error: Not all elements are string type!');
            }
        }, 0)
    })
    return promise;
}




export default converterPromise;
