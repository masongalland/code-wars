function convergence(n){
    
    var current = n;
    var answer = 0;
    var base = [1, 2, 4, 8, 16];

    for(var i = 4; i < 999; i++){
        var baseProduct = String(base[i]).split("").map(Number).filter(e => e > 0).reduce((a,b) => a * b);
        base.push(base[i] + baseProduct);
        if(base[i] >= n){
            var arr = String(current).split("").map(Number)
            
            if(arr.length === 1){
            current += current
            }
            else{
            var product = arr.filter(e => e > 0).reduce((a,b) => a * b);
            current += product;
            }
            
            answer++
            
            if(base.indexOf(current) !== -1){
            return answer
            }
        
        }
    }
}