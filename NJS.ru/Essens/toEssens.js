/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
;(

    Object.prototype._$ = function () {
        let Types = [String, Array, Object, Map, Set];
        let type = this.__proto__.constructor;
        let isType = Types.indexOf(type);
        let Self = this;
        let str_type = type.name;

        let Keys = [];
        let Value = [];
        let Entres = [];
        //========================lib func
        const genKey = (n) => {
            let ar = [];
            for (let i = 0; i < n; i++) {
                ar.push(i);
            }
            return ar;
        }

        //========================Set

        if (type == Set) {

            let en = this.entries();
            for (let item of en) {
                Entres.push(item);
            }
            let va = this.values();
            for (let item of va) {
                Value.push(item);
            }
            let ke = this.keys();
            for (let item of ke) {
                Keys.push(item);
            }

        }
        //========================Map

        if (type == Map) {

            let en = this.entries();
            for (let item of en) {
                Entres.push(item);
            }
            let va = this.values();
            for (let item of va) {
                Value.push(item);
            }
            let ke = this.keys();
            for (let item of ke) {
                Keys.push(item);
            }

        }
        //========================Object

        if (type == Object) {

            let en = Object.entries(this);
            for (let item of en) {
                Entres.push(item);
            }
            let va = Object.values(this);
            for (let item of va) {
                Value.push(item);
            }
            let ke = Object.keys(this);
            for (let item of ke) {
                Keys.push(item);
            }

        }
        //========================Array

        if (type == Array) {
            col(`TYPE OF ${this} is ${str_type} NOT  in _$ essense`);
            Entres = this;
            Value = this;
            Keys = genKey(Entres.length);
        }
        //========================String

        if (type == String) {
            col(`TYPE OF ${this} is ${str_type} NOT  in _$ essense`);
            Entres = this.split('');
            Value = this;
            Keys = genKey(Entres.length);
        }

        let thisEssens = {

            Entres,
            Value,
            Keys,
            Self,
            Type: str_type,
            consruct: type,

            isEmpty: !Boolean(Entres.length),
            isSet: type == Set,
            isMap: type == Map,
            isObj: type == Object,
            isArr: type == Array,
            isStr: type == String,

        }
        return thisEssens;
    }


)();