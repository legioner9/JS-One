describe("pow" , function(){
    it("N pow") , function(){
        assert.equal(pow(2,3),8);
    };
});
function pow(x,n){
    var pownn = x;
    for (var i = 1 ; i < n ; i++) {
        pownn *=x;
    }
    return pownn;
}