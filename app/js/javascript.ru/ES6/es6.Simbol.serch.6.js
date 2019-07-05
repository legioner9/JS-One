col('rajarao'.search(/rao/));
col('rajarao'.search('rao'));

class Prod {
    constructor(value) {
        this.value = value;
    }

    search(string) {
        return string.indexOf(this.value);
    }

    [Symbol.search](string) {
        return string.indexOf(this.value) >= 0 ? 'found' : 'not found';
    }
}

debugger;
col('d germes'.search());
let germesObj = {arg : 'germes'};
germesObj[Symbol.search] = function (str){
    return str.indexOf(this.arg) >= 0 ? 'found' : 'not found';
}
// let germesObj = new Prod('germes');
col(germesObj[Symbol.search]);
col(germesObj[Symbol.search]('d germes'));
col('d germes'.search(germesObj));
