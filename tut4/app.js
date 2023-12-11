function isprime(num){
    if(num==2 || num==3){
        return true
    }
    else{
        for (let i = 2; i < num; i++) {
            if(num%i==0){
                return false
            }
        }
        return true
    }
}
    
console.log(isprime(5))