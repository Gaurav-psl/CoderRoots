// linear regression using javascript
function slope(data){
    let m;
    let Xaxis = data.year;
    let Yaxis = data.profit;
    let submission_x = submission_y = submission_x_sqr = submission_xy= 0 
    let itr = 0
    while(itr != (Xaxis.length )){
        submission_x += Xaxis[itr] ;
        submission_y += Yaxis[itr];
        submission_x_sqr += Xaxis[itr] * Xaxis[itr]
        submission_xy += Xaxis[itr] * Yaxis[itr] 
        itr++; 
    }       
        let numerator = Xaxis.length * submission_xy - submission_x * submission_y
        let denominator = Xaxis.length * submission_x_sqr - submission_x ** 2;
        m = numerator/denominator; 
        return m;
}
function constant (data){
    let c = 0;
    let Xaxis = data.year;
    let Yaxis = data.profit;
    let submission_x = submission_y =  0 
    let itr = 0
    while(itr != (Xaxis.length )){
        submission_x += Xaxis[itr] ;
        submission_y += Yaxis[itr];
        itr++; 
    }       
    c = submission_y - slope(data) * submission_x
    c = c/Xaxis.length;
    return c
}
function linearRegression (data){
    m = slope(data)
    c = constant(data)
    Xaxis = data.year
    Y_predicted = []
    Y_error = []
    itr = 0
    while(itr<Xaxis.length){
        Y_predicted[itr] = m * Xaxis[itr] + c
        Y_error[itr] = Y_error - 
    }
    Y_predicted.push(String(m)+'x+'+String(c))

}
let data = {
    year : [0,1,2,3,4,5,6],
    profit : [200,212,321,323,424,473,397],
};
console.log(slope(data))
console.table(data)


let a = new Number(100)

console.log((a.valueOf()))
