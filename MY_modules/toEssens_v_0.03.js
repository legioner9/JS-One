/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */
;(function () {
        Object.prototype._$type_ = function () {
            return this.__proto__.constructor.name;
        }

        let FNc = {}

        let Glob = ['Number',
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
                _$entries_() {
                    return A.Self.entries();
                }
            };

            A.Symb = {};

            A.Prop = {};

            A.Meth = {
                _$copy_() {
                    let ar = [];
                    ar = A.Self.slice();
                    return ar;
                },
                _$copyWithin__$CIP(targ_pos, start_ins, end_ins) {
                    Self.copyWithin(targ_pos, start_ins, end_ins);
                },
                _$copyWithin__$RIL(targ_pos, start_ins, end_ins) {
                    let Self_ = A.Self._$().Meth._$copy_();
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
                    let Self_ = A.Self._$().Meth._$copy_()
                    Self_.splice(st_ind_del, qantity_del, ...ins_arr);
                },
                _$map_as_reduse_(callback, thisArg) {
                    return A.Self
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
        }

        FNc['RegExp'] = function (A) {

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
        }


        Object.prototype._$_REss = function () {
            let Keys = [],
                Value = [],
                Entres = [],
                Self = this,
                IsNan = false,
                isEmpty = false;

            let Meth, Prop, Symb, Enum, New, str_type, type;

            let M = {
                Entres,
                Value,
                Keys,
                Self,
                Meth,
                Prop,
                Symb,
                Enum,
                New,
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

                Entres,
                Value,
                Keys,
                Self,
                Type: str_type,
                consruct: type,
                Meth,
                Prop,
                Symb,
                Enum,
                isNan: IsNan,

                isEmpty: !Boolean(Entres.length),
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
            }
            return thisEssens;


        }


        Object.prototype._$_CIP_add_Ess = function () {
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
    }
)
();