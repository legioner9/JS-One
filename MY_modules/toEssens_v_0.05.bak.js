/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
;(function () {
        let _$type_ = function () {
            return this.__proto__.constructor.name;
        }

        let FNc = {}

        let Glob = [
            'Number',
            'String',
            'Symbol',
            'Array',
            'Object',
            'Map',
            'Set',
            'Function',
            'Error',
            'Promise',
            'Proxy',
            'RegExp',
            'Math',
            'Intl',

        ]

        FNc['Universal'] = function (A) {
            let en = A.Self.entries();
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = A.Self.values();
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = A.Self.keys();
            for (let item of ke) {
                A.Keys.push(item);
            }
            if (this.toString() == "NaN") {
                A.IsNan = true;
            } else {
                A.New = {
                    _$new_(n_valume) {
                    },
                };

                A.Enum = {
                    _$entries_() {
                    }
                };

                A.Symb = {};

                A.Prop = {};

                A.Meth = {
                    _$copy_() {
                    },
                    _$clear_() {
                    },
                };
            }
        }

        FNc['Number'] = function (A) {
            A.Entres = [A.Self];
            A.Value = A.Self;
            A.Keys = [A.Self];
            if (this.toString() == "NaN") {
                A.IsNan = true;
            } else {
                A.New = {
                    _$new_Ret_obj() {
                        return new Number(A.Self);
                    },
                    _$new_Ret_prim() {
                        return Number(A.Self);
                    },
                };

                A.Enum = {
                    _$entries_() {
                        return [A.Self];
                    }
                };

                A.Symb = {};

                A.Prop = {};

                A.Meth = {
                    _$copy_() {
                        return A.Self;
                    },
                    _$clear_() {
                        return undefined;
                    },
                    _$toExponential_(digit_after_dot) {
                        return A.Self.toExponential(digit_after_dot);// {3 digit_after_dot }(125 => "1.230e+2")
                    },
                    _$toFixed_(digit_after_dot) {
                        return A.Self.toFixed(digit_after_dot);//{5 digit_after_dot }(125 => "123.00000")
                    },
                    _$toLocaleString_(arr_options) {
                        return A.Self.toLocaleString(arr_options);//{'de-DE' arr_options}(123456.789 =>"123.456,789")
                        //{'ru-RU' arr_options}(123456.789 =>"123 456,789")
                    },
                    _$toPrecision_(volume_of_signif_numb) {
                        return A.Self.toPrecision(volume_of_signif_numb);//{5 volume_of_signif_numb}(0.000123
                        // =>"0.00012300")
                        //{1 volume_of_signif_numb}(0.000123 =>"0.0001")
                    },
                    _$toString_(radix) {
                        return A.Self.toString(radix);//{2 radix }(123 => "1111011")
                    },
                    _$valueOf_() {
                        return A.Self.valueOf();//{ }("123" => 123)
                    },

                };

                A.Parent = {
                    _$isFinite_() {
                        return Number.isFinite(A.Self.valueOf());// not +-Infinity not NaN
                    },
                    _$isNaN_() {
                        return Number.isNaN(A.Self.valueOf());
                    },
                    _$isInteger_() {
                        return Number.isInteger(A.Self.valueOf());
                    },
                    _$isSafeInteger_() {
                        return Number.isSafeInteger(A.Self.valueOf());// yet Infinity
                    },
                    _$parseFloat_() {
                        return Number.parseFloat(A.Self.valueOf());// first dig float from string
                    },
                    _$parseInt_() {
                        return Number.parseInt(A.Self.valueOf());// first dig float from string
                    },
                };
            }
        }

        FNc['Array'] = function (A) {
            let en = A.Self.entries();
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = A.Self.values();
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = A.Self.keys();
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                _$new_arr_length_(n_valume) {
                    return new Array(n_valume);
                },
                _$new_arr_from_(like_arr) {
                    return Array.from(like_arr);
                },
                _$new_arr_of_(any_elem_1, any_elem_n) {
                    return Array.of(any_elem_1, any_elem_n)
                }
            };

            A.Enum = {
                _$entries_Array_Iterator_() {
                    return A.Self.entries();
                },
                _$values_Array_Iterator_() {
                    return A.Self.values();
                },
                _$keys_Array_Iterator_() {
                    return A.Self.keys();
                },
            };

            A.Symb = {
                _$Symbol_iterator() {
                    let A_Self = A.Self;
//return item+1 iterator instead standart
                    return A_Self[Symbol.iterator] = function () {
                        let this_ = this;
                        let i = 0;
                        return {
                            next() {
                                if (i < this_.length) {
                                    return {
                                        done: false,
                                        value: this_[i++] + 1,
                                    }
                                } else {
                                    return {
                                        done: true,
                                        value: undefined,
                                    }
                                }
                            }
                        }
                    }
                },
                _$Symbol_toPrimitive() {
                    let A_Self = A.Self;
                    return A_Self[Symbol.toPrimitive] = function (hint) {
                        if (hint == 'number') {
                            return 0;
                        }
                        if (hint == 'string') {
                            return '';
                        }
                        return true;
                    }
                },

            }
            A.Prop = {};

            A.Meth = {
                _$copy_() {
                    return [].slice(A.Self);
                },
                _$copy_from_() {
                    return Array.from(A.Self.values());
                },
                _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                    Self.copyWithin(targ_pos, start_ins, end_ins);
                },
                _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                    let Self_ = A.Self._$_REss().Meth._$copy_();
                    Self_.copyWithin(targ_pos, start_ins, end_ins);
                    return Self_;
                },
                _$clear_() {
                    A.Self.splice(0);
                },
                _$length_() {
                    return A.Self.length;
                },
                _$concat_(inserted) {
                    return A.Self.concat(inserted);
                },
                _$fill_(value, start_ins, end_ins_includ) {
                    return A.Self.fill(value, start_ins, end_ins_includ);
                    // {value, start_ins, end_ins_ins_includ ; 95 , 1 , 2 } ([0,4,3,5]  =>[0,95,3,5] ) &
                },
                _$filter_(callback, thisArg) {
                    return A.Self.filter(callback, thisArg);
                    // {callback = a=> a>5'} ([3,6,7] =>[6,7]) & all callback => true
                },
                _$find_(callback, thisArg) {
                    return A.Self.find(callback, thisArg);
                    // {callback = a=> a>5'} ([3,7] =>7)& first of find item callback => true
                },
                _$findIndex_(callback, thisArg) {
                    return A.Self.findIndex(callback, thisArg);
                    // {callback = a=> a>5'} ([3,2,7] =>2)& first of find index of item callback => true
                },
                _$every_(callback, thisArg) {
                    //callback = (current , index , init_arr) =>(Boolean)
                    return A.Self.every(callback, thisArg);
                    // {callback = a=> a>5'} ([3,7] =>false)& because callback 3 => false
                },
                _$some(callback, thisArg) {
                    //callback = (current , index , init_arr) =>(Boolean)
                    return A.Self.some(callback, thisArg)
                },
                _$forEach_(callback, thisArray) {
                    //callback = (current , index , init_arr) =>()
                    A.Self.forEach(callback, thisArray);//iterating method
                },
                _$push_(...item_arr) {
                    A.Self.push(...item_arr);//add to end arr; RET undefine
                },
                _$flat_() {
                    A.Self.flat();//subarray UP from first deep level
                    // {} ([0,[4,[3,6]],5] =>[0,4,[3,6],5])& because [3,6] in second deep level
                },
                _$pop_() {
                    A.Self.pop();//remove from end arr; RET
                },
                _$shift_() {
                    A.Self.shift();//remove from head arr
                },
                _$unshift_(...item_arr) {
                    A.Self.unshift(...item_arr);//add to head arr
                },
                _$indexOf_(item) {
                    return A.Self.indexOf(item);//RET first index position of item
                    // {item = 4} ([0,4,3,5,4] =>1)& because first index positin 4 is 1
                },
                _$lastIndexOf_(item) {
                    return A.Self.lastIndexOf(item);//RET last index position of item
                    // {item = 4} ([0,4,3,5,4] =>4)& because last index positin 4 is 4
                },
                _$splice_$CIP(st_ind_del, qantity_del, ...ins_arr) {
                    A.Self.splice(st_ind_del, qantity_del, ...ins_arr);
                },
                _$splice_$RIL(st_ind_del, qantity_del, ...ins_arr) {
                    let Self_ = A.Self._$_REss().Meth._$copy_()
                    Self_.splice(st_ind_del, qantity_del, ...ins_arr);
                    return Self_;
                },
                _$map_as_reduse_(callback, thisArg) {
                    return A.Self
                        .reduce(function (res, b, ind, arr) {
                            res[ind] = callback.call(thisArg, b, ind, arr);
                            return res;
                        }, [])
                },
                _$join_(separator) {
                    return A.Self.join(separator);
                    // {separator ; ','} ([0,4,3,5] =>"0,4,3,5")& join() == join(',')
                },
                _$sort_(compareFunction) {
                    //compareFunction = (previus , current ) =>(Boolean)
                    return A.Self.sort(callback);
                    // {compareFunction ; (a,b) => a-b} ([0,4,3,5,4]=>[0, 3, 4, 4, 5])& if a<b => a before b
                },
                _$isArray_() {
                    return A.Self.isArray();
                },
                _$flatMap_(callback, thisArg) {
                    return A.Self.flatMap(callback, thisArg);
                    // {callback = a=> a*2'} ([[2], [4], [6], [8]] =>[4, 8, 12, 16]) & fist map then flat
                },
                _$includes_(value, from_index) {
                    return A.Self.includes(value, from_index);
                    // {value, from_index ;  'a' ,1 } ([1, 3 , 'a'] =>true) & 3 is present in
                },
                _$reduce_(callback, init_value) {
                    //callback = (accumuator, current , index , init_arr) =>()
                    return A.Self.reduce(callback, init_value);
                },
                _$reduceRight_(callback, init_value) {
                    //callback = (accumuator, current , index , init_arr) =>()
                    return A.Self.reduceRight(callback, init_value);
                },
                _$reverse_() {
                    return A.Self.reverse();
                    // {} ( [0,4,3,5,4] => [4, 5, 3, 4, 0] ) &
                },
                _$slice_() {
                    return A.Self.slice(start_index, end_index);
                    // {start_index, end_index;1,4} ( [0,4,3,5,4] => [4, 3, 5] ) &
                },

            };

            A.Parent = {
                _$par_() {

                }
            };

        }

        FNc['Function'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['String'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                _$length_() {
                    return A.Self.length
                },
                _$anchor_wrap(value_name) {
                    return A.Self.anchor(value_name);
                    // {value_name = 'name_rty'} ('anc' =>"<a name="name_rty">anc</a>")
                },
                _$big_wrap_() {
                    return A.Self.big();
                    // {} ('anc' =>"<big>anc</big>")
                },
                _$blink_wrap_() {
                    return A.Self.blink();
                    // {} ('anc' =>"<blink>anc</blink>")
                },
                _$bold_wrap_() {
                    return A.Self.bold();
                    // {} ('anc' =>"<b>anc</b>")
                },
                _$charAt_(index_for_search) {
                    return A.Self.charAt(index_for_search);
                    // {1 index_for_search} ('anc' =>"n")
                },
                _$charCodeAt_(index_for_search) {
                    return A.Self.charCodeAt(index_for_search);
                    // {0 index_for_search} ('anc' => 97)
                },
                _$codePointAt_(index_for_search) {
                    return A.Self.codePointAt(index_for_search);
                    // {0 index_for_search} ('☃★♲' =>9731)
                },
                _$concat_(arr_of_str) {
                    return A.Self.concat(...arr_of_str);
                    // {[0,' sdfg '] arr_of_str} ('anc' =>"anc0 sdfg "")
                },
                _$endsWith_(str_on_end, position_end_in_init) {
                    return A.Self.endsWith(str_on_end, position_end_in_ini);
                    // { 'c' , 3  ;  str_on_end, position_end_in_ini} ('ancvds' =>true)
                },
                _$fixed_() {
                    return A.Self.fixed();
                    // {} ('anc' =>"<ff>anc</ff>")
                },
                _$fontcolor_wrap_(str_color) {
                    return A.Self.fontcolor(str_color);
                    // {"#45f" str_color} ('anc' =>"<font color="#45f">anc</font>")
                },
                _$fontsize_wrap_(size) {
                    return A.Self.fontsize(size);
                    // {"30" size} ('anc' =>"<font size="30">anc</font>")
                },
                _$includes_(serch_simb, position_start_in_init) {
                    return A.Self.includes(serch_simb, position_start_in_init);
                    // { 'c' , 1  ;  serch_simb, position_start_in_init} ('ancvds' =>true)
                },
                _$indexOf_(serch_simb_from_start) {
                    return A.Self.indexOf(serch_simb_from_start);
                    // { 'c' serch_simb_from_start } ('anc' =>2)
                },
                _$italics_wrap_() {
                    return A.Self.italics();
                    // {} ('anc' =>"<i>anc</i>")
                },
                _$lastIndexOf_(serch_simb_from_end) {
                    return A.Self.lastIndexOf(serch_simb_from_end);
                    // { 'c' serch_simb_from_end } ('ancyuc' =>5)
                },
                _$link_wrap_(value_link) {
                    return A.Self.link(value_link);
                    // {alue_link = "cdf"} ('anc' =>"<a href="cdf">ancrtc</a>")
                },
                _$localeCompare_(str_comp, locales, options) {
                    return A.Self.link(str_comp, locales, options);
                    // { 'z', 'de' ;  str_comp, locales} ('ä' => >0 ) & z after ä
                },
                _$match_(regexp) {
                    return A.Self.match(regexp);
                    // { /c/gi ;  regexp } ('anCrtc' => ["C", "c"] ) & g ret array
                },
                _$matchAll_RArrRes_(regexp) {
                    let RegExpStringIterator = A.Self.matchAll(regexp);//& return iterator of All maches
                    let res = [];
                    for (item of RegExpStringIterator) {
                        res.push(item);
                    }
                    return res;
                    // { /c/gi ;  regexp } ('anCrtc'=>0: ["C", index: 2, input: "anCrtc", groups: undefined]
                    //                                                           1: ["c", index: 5, input: "anCrtc", groups: undefined]
                },
                _$matchAll_RRegExpStringIterator_(regexp) {
                    return A.Self.matchAll(regexp); //& return iterator of All maches RegExpStringIterator
                },
                _$normalize_() {// Any forms {‘NFC’, ‘NFKC’, ‘NFD’, ‘NFKD’}
                    return A.Self.normalize();
                    // {} ("S\u0307\u0323" =>"\u1e68") & both Ṩ bat \u1e68 norm
                },
                _$padEnd_(langth_str_after, padding_str) {
                    return A.Self.padEnd(langth_str_after, padding_str);
                    // {10 , '.' ;  langth_str_after, padding_str } ('anCrtc' =>"anCrtc....")
                },
                _$padStart_(langth_str_after, padding_str) {
                    return A.Self.padStart(langth_str_after, padding_str);
                    // {10 , '.' ;  langth_str_after, padding_str } ('anCrtc' =>"....anCrtc")
                },
                _$repeat_(n_value) {
                    return A.Self.repeat(n_value);
                    // {3 ; n_value} (' anCrtc ' =>" anCrtc  anCrtc  anCrtc ")
                },
                _$replace_(regex, inner_str) {
                    return A.Self.replace(regex, inner_str);
                    // {/c/ig,'b'} ('anCrtc' =>"anbrtb")
                },
                _$search_(regex) {
                    return A.Self.search(regex);
                    // {/c/ig} ('anCrtc' =>2)& firsi serch case
                },
                _$slice_(index_start_copy, index_end_copy) {
                    return A.Self.slice(index_start_copy, index_end_copy);
                    // { 1,4 ; index_start_copy,index_end_copy} ('anCrtc' =>"nCr")
                },
                _$small_wrap_() {
                    return A.Self.small();
                    // {} ('anc' =>"<small>anc</small>")
                },
                _$split_(separator, max_length_res_arr) {
                    return A.Self.split(separator, max_length_res_arr);
                    // {'',4 ; separator, max_length_res_arr} ('anCrtc' =>["a", "n", "C", "r"])
                },
                _$startsWith_(str_for_serch, index_from_serch) {
                    return A.Self.startsWith(str_for_serch, index_from_serch);
                    // {'n',1 ; str_for_serch, index_from_serch} ('anCrtc' =>true)
                },
                _$strike_wrap_() {
                    return A.Self.strike();
                    // {} ('anc' =>"<strike>anc</strike>")&Чебурашка зачеркнутый текст
                },
                _$sub_wrap_() {
                    return A.Self.sub();
                    // {} ('anc' =>"<sub>anc</sub>")&Н2O
                },
                _$substr_(start_index, length_substr) {
                    return A.Self.substr(start_index, length_substr);
                    // {1,5 ; start_index , length_substr} ('anc' =>"<b>anc</b>")
                },
                _$sup_wrap_() {
                    return A.Self.sup();
                    // {} ('anc' =>"<sup>anc</sup>")&PiR2
                },
                _$toLocaleLowerCase_() {
                    return A.Self.toLocaleLowerCase();
                    // {} ('anCrtc' =>"ancrtc")
                },
                _$toLocaleUpperCase_() {
                    return A.Self.toLocaleUpperCase();
                    // {} ('anCrtc' =>"ANCRTC")
                },
                _$toLowerCase_() {
                    return A.Self.toLowerCase();
                    // {} ('anCrtc' =>"ancrtc")
                },
                _$toUpperCase_() {
                    return A.Self.toUpperCase();
                    // {} ('anCrtc' =>"ANCRTC")
                },
                _$toString_() {
                    return A.Self.toString();
                    // {} ({"anCrtc"} =>"anCrtc"") & new String ("anCrtc")  =  {"anCrtc"}
                },
                _$trim_() {
                    return A.Self.trim();
                    // {} (' anc   ' =>"anc")
                },
                _$trimLeft_() {
                    return A.Self.trimLeft();
                    // {} ('  anc   ' =>"anc  ")
                },
                _$trimRight_() {
                    return A.Self.trimRight();
                    // {} (' anc   ' =>"  anc")
                },
                _$trimStart_() {
                    return A.Self.trim();
                    // {} (' anc   ' =>"anc  ")
                },
                _$trimEnd_() {
                    return A.Self.trim();
                    // {} ('  anc   ' =>"  anc")
                },
                _$valueOf_() {
                    return A.Self.valueOf();
                    // {} ({"anCrtc"} =>"anCrtc"") & new String ("anCrtc")  =  {"anCrtc"}
                },
                _$analysis_OfTemplString_() {
                    // function tsf(strings, ...values) {
                    //     return {
                    //         strings,
                    //         values,
                    //     }
                    // }
                    //
                    // return tsf'A.Self';
                }
            };

            A.Parent = {
                _$fromCharCode_() {
                    return String.fromCharCode(A.Self.valueOf());//
                    // {} (56,658,99998 =>"8ʒ蚞") & num_unicode  =>  simbols_string
                },
                _$fromCodePoint_() {
                    return String.fromCodePoint(A.Self.valueOf());
                    // {} (56,658,99998 =>"8ʒ𘚞") & point_unicode  =>  simbols_string
                },
                _$parseFloat_() {
                    return Number.parseFloat(A.Self.valueOf());// first dig float from begin string
                },
                _$parseInt_radix_(radix) {
                    return Number.parseInt(A.Self.valueOf(), radix);//ret first dig Int in radix notation from begin
                    // string
                },
            };
        }

        FNc['Object'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {
                _$_get_localStorage_as_arr_() {
                    let res = [];
                    for (key in localStorage) {
                        if (localStorage.hasOwnProperty(key)) {
                            let r_i = {
                                volume: JSON.parse(localStorage.getItem(key)),
                                key,
                            }
                            res.push(r_i);
                        }
                    }
                    return res;
                },

                _$_set_item_localStorage_(name_item) {
                    localStorage.setItem(name_item, JSON.stringify(A.Self));
                    return JSON.parse(localStorage.getItem(name_item));
                }
            };

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                _$copy_() {
                    return Object.assign({}, A.Self);
                },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Map'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Set'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Error'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Promise'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Proxy'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['RegExp'] = function (A) {

            let en = Object.entries(A.Self.toString());
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self.toString());
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self.toString());
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                _$new_RegExp_(regExp_str, flags) {
                    return new RegExp(regExp_str, flags);
                    //(regExp_str, flags ; '[\\w]+', 'gi'){ => /[\w]+/ig}
                },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {
                _$Symbol_matchAll() {
                    let A_Self = A.Self;
                    return A_Self[Symbol.matchAll] = function (str) {
                        let result = RegExp.prototype[Symbol.matchAll].call(this, str);
                        if (!result) {
                            return null;
                        }
                        return Array.from(result);// Array instead RegExpStringIterator
                    }
                },
                _$Symbol_match() {
                    let A_Self = A.Self;
                    return A_Self[Symbol.match] = function (str) {
                        let result = RegExp.prototype[Symbol.match].call(this, str);
                        if (result) {
                            return 'VALID';
                        }
                        return 'INVALID';
                    }
                },
            };

            A.Prop = {};

            A.Meth = {
                /*                _$copy_() {
                                    let ar = [];
                                    ar = A.Self.slice();
                                    return ar;
                                },
                                _$clear_() {
                                    Self.splice(0);
                                },*/

                _$compile_(regExp_str, flags) {
                    return A.Self.compile(regExp_str, flags); //& A.Self is regExp!
                    //(regExp_str, flags ; '[\\w]+', 'gi'){ => /[\w]+/ig}
                },
                _$exec_(sring_for_serch) {
                    return A.Self.exec(sring_for_serch); //& flag g ignored - first
                    //( sring_for_serch = u.str)
                    // { A.Self = u.regexp }
                    /*
                    Array(4)
                    0: "<span class="my_1">"
                    1: "span class="my_1""
                    2: "span"
                    3: "class="my_1""
                    groups: {teg: "span", volume: "class="my_1"", result: "span class="my_1""}
                    index: 0
                    input: "<span class="my_1">↵<span class="my_2">"
                    length: 4
                    */
                    let u = {
                        str: `<span class="my_1">
<span class="my_2">`,
                        regexp: /<(?<result>(?<teg>[a-z]+)\s*(?<volume>[^>]*))>/g,
                    }
                },
                _$test_(sring_for_serch) {
                    return A.Self.test(sring_for_serch); //& is present => true
                    //( sring_for_serch = u.str)
                    // { A.Self = u.regexp }
                    /*
                    true
                    */
                    let u = {
                        str: `<span class="my_1">
<span class="my_2">`,
                        regexp: /<(?<result>(?<teg>[a-z]+)\s*(?<volume>[^>]*))>/g,
                    }
                },

            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Math'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Any'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }

        FNc['Intl'] = function (A) {

            let en = Object.entries(A.Self);
            for (let item of en) {
                A.Entres.push(item);
            }
            let va = Object.values(A.Self);
            for (let item of va) {
                A.Value.push(item);
            }
            let ke = Object.keys(A.Self);
            for (let item of ke) {
                A.Keys.push(item);
            }

            A.Webapi = {};

            A.New = {
                // _$new_arr_length_(n_valume) {
                //     return new Array(n_valume);
                // },
                // _$new_arr_from_(like_arr) {
                //     return Array.from(like_arr);
                // },
                // _$new_arr_of_(any_elem_1, any_elem_n) {
                //     return Array.of(any_elem_1, any_elem_n)
                // }
            };

            A.Enum = {
                // _$entries_() {
                //     return A.Self.entries();
                // }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                // _$copy_() {
                //     let ar = [];
                //     ar = A.Self.slice();
                //     return ar;
                // },
                // _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                //     Self.copyWithin(targ_pos, start_ins, end_ins);
                // },
                // _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                //     let Self_ = A.Self._$().Meth._$copy_();
                //     Self_.copyWithin(targ_pos, start_ins, end_ins);
                //     return Self_;
                // },
                // _$clear_() {
                //     Self.splice(0);
                // },
                //
                // _$map_as_reduse_(callback, thisArg) {
                //     return A.Self
                //         .reduce(function (res, b, ind, arr) {
                //             res[ind] = callback.call(thisArg, b, ind, arr);
                //             return res;
                //         }, [])
                // },
                //
                // _$isArray_(arr) {
                //     return Arr
                // }
            };

            A.Parent = {
                _$par_() {

                }
            };
        }


        let _$_REss = function () {
            let Keys = [],
                Value = [],
                Entres = [],
                Self = this,
                IsNan = false,
                isEmpty = false;

            let Meth, Prop, Parent, Symb, Enum, New, Webapi, str_type, type;

            let M = {
                Entres,
                Value,
                Keys,
                Self,
                Meth,
                Prop,
                Symb,
                Enum,
                Parent,
                New,
                Webapi,
                isEmpty,
                IsNan,
            }

            type = this.__proto__.constructor;
            str_type = type.name;

            //========================lib func
            const genKey = (n) => {
                let ar = [];
                for (let i = 0; i < n; i++) {
                    ar.push(i);
                }
                return ar;
            }

            if (~Glob.indexOf(str_type)) {
                FNc[str_type](M);
            } else {
                FNc['Any'](M);
                col(`Type :"${str_type}" is\`t Your Essense Type to see result`);
                col(`Add Essense Type : "${str_type}" to FNc[${str_type}]`);

            }

            let thisEssens = {

                Entres: M.Entres,
                Value: M.Value,
                Keys: M.Keys,
                Self: M.Self,
                Type: str_type,
                consruct: type,
                Webapi: M.Webapi,
                New: M.New,
                Meth: M.Meth,
                Prop: M.Prop,
                Parent: M.Parent,
                Symb: M.Symb,
                Enum: M.Enum,
                isNan: M.IsNan,

                isEmpty: !Boolean(M.Entres.length),
                isSet: type == Set,
                isMap: type == Map,
                isObj: type == Object,
                isArr: type == Array,
                isStr: type == String,
                isNumber: type == Number,
                isFunction: type == Function,
                isError: type == Error,
                isPromise: type == Promise,
                isProxy: type == Proxy,
                isRegExp: type == RegExp,
                isMath: type == Math,

                toStringTag: 'Essens',
            };

            return thisEssens;


        }


        let _$_CIP_add_Ess = function () {
            if (this['thisEssens']) {
                return this;
            } else {
                let Keys = [];
                let Value = [];
                let Entres = [];
                let Self = this;
                let Meth, Prop, Symb, Enum, New, str_type, IsNan = false, type;

                type = this.__proto__.constructor;
                str_type = type.name;


                //========================lib func
                const genKey = (n) => {
                    let ar = [];
                    for (let i = 0; i < n; i++) {
                        ar.push(i);
                    }
                    return ar;
                }

                //========================Proxy

                //========================Promise

                //========================Error

                //========================Symbol

                //========================Date

                //========================Nan

                //========================Number

                if (type == Number) {
                    Entres = [this];
                    Value = this;
                    Keys = [this]
                    if (this.toString() == "NaN") {
                        IsNan = true;
                    } else {
                        // Meth = {
                        //     _$clear_() {
                        //         Self.splice(0);
                        //     },
                        //     _$map_(callback, thisArg) {
                        //         Self.map(callback, thisArg);
                        //     },
                        //     _$exec_RETarr(RegExp) {
                        //         RegExp.exec(Self); // RET result
                        //     },
                        //
                        // }
                    }
                }
                //========================RegExp

                if (type == RegExp) {
                    Meth = {}
                }
                //========================Function

                if (type == Function) {
                    Meth = {}
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

                    Meth = function () {
                        let map_;
                        return {
                            _$map_(callback, thisArg) {
                                Self.map(callback, thisArg);
                            }
                        }
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

                    Copy = function () {
                        return new Map(Entres);
                    }

                    Meth = function () {
                        let map_;
                        return {
                            map_(callback, thisArg) {
                                Self.map(callback, thisArg);
                            }
                        }
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

                    Meth = {
                        _$map_(callback, thisArg) {
                            Self.map(callback, thisArg);
                        },
                        _$copy_() {
                            return Object.assign({}, Self);
                        },

                    }
                }

                //========================Array

                if (type == Array) {
                    let en = Self.entries();
                    for (let item of en) {
                        Entres.push(item);
                    }
                    let va = Self.values();
                    for (let item of va) {
                        Value.push(item);
                    }
                    let ke = Self.keys();
                    for (let item of ke) {
                        Keys.push(item);
                    }
                    New = {
                        _$new_arr_length_(n_valume) {
                            return new Array(n_valume);
                        },
                        _$new_arr_from_(like_arr) {
                            return Array.from(like_arr);
                        },
                        _$new_arr_of_(any_elem_1, any_elem_n) {
                            return Array.of(any_elem_1, any_elem_n)
                        }
                    };

                    Enum = {
                        _$entries_() {
                            return Self.entries();
                        }
                    };

                    Symb = {};

                    Prop = {};

                    Meth = {
                        _$copy_() {
                            let ar = [];
                            ar = Self.slice();
                            return ar;
                        },
                        _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                            Self.copyWithin(targ_pos, start_ins, end_ins);
                        },
                        _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                            let Self_ = Self._$().Meth._$copy_();
                            Self_.copyWithin(targ_pos, start_ins, end_ins);
                            return Self_;
                        },
                        _$clear_() {
                            Self.splice(0);
                        },
                        _$map_(callback, thisArg) {
                            Self.map(callback, thisArg);
                        },
                        _$forEach_(item, index, thisArray) {
                            Self.forEach(item, index, thisArr);
                        },
                        _$push_(...item_arr) {
                            Self.push(...item_arr);//add to end arr; RET undefine
                        },
                        _$pop_() {
                            Self.pop();//remove from end arr; RET
                        },
                        _$shift_() {
                            Self.shift();//remove from head arr
                        },
                        _$unshift_(...item_arr) {
                            Self.unshift(...item_arr);//add to head arr
                        },
                        _$indexOf_(item) {
                            Self.indexOf(item);//RET index position of item
                        },
                        _$splice_$CIP(st_ind_del, qantity_del, ...ins_arr) {
                            Self.splice(st_ind_del, qantity_del, ...ins_arr);
                        },
                        _$splice_$RIL(st_ind_del, qantity_del, ...ins_arr) {
                            let Self_ = Self._$().Meth._$copy_()
                            Self_.splice(st_ind_del, qantity_del, ...ins_arr);
                        },
                        _$map_as_reduse_(callback, thisArg) {
                            return Self
                                .reduce(function (res, b, ind, arr) {
                                    res[ind] = callback.call(thisArg, b, ind, arr);
                                    return res;
                                }, [])
                        },

                        _$isArray_(arr) {
                            return Arr
                        }


                    };
                }
                //========================String

                if (type == String) {
                    Entres = this.split('');
                    Value = this;
                    Keys = genKey(Entres.length);


                    Meth = {
                        _$clear_() {
                            Self.splice(0);
                        },
                        _$map_(callback, thisArg) {
                            Self.map(callback, thisArg);
                        },
                        _$exec_RETarr(RegExp) {
                            RegExp.exec(Self); // RET result
                        },

                    }
                }

                let thisEssens = {

                    Entres,
                    Value,
                    Keys,
                    Self,
                    Type: str_type,
                    consruct: type,
                    Meth,
                    Prop,
                    Symb,
                    isNan: IsNan,

                    // isEmpty: !Boolean(Entres.length),
                    isSet: type == Set,
                    isMap: type == Map,
                    isObj: type == Object,
                    isArr: type == Array,
                    isStr: type == String,
                    isNumber: type == Number,

                    toStringTag: 'Essens',
                }
                this['thisEssens'] = thisEssens;
                return this;

            }
        }

        Object.prototype._$ = {
            Ess: _$_REss,
            Status: {},
            type: _$type_
        }
    }
)
();
