// // function tipcalculator(tips){
// //     if (tips < 50 ){
// //        return tips * (15/100)
// //     }
// //        else if (tips >= 50 && tips <= 200 ){
// //          return tips * (20/100)
// //         }
// //        else (tips > 200 )
// //             return tips * (10/100)
// //     }

// // var billa,billb,billc;
// // billa = 120
// // billb = 48
// // billc = 260
// // a = ( tipcalculator(billa))
// // b = ( tipcalculator(billb))
// // c = ( tipcalculator(billc))
// // var arrayofTips= [a,b,c]
// // console.log([a,billa,b,billb,c,billc]);

// var john ={
//     fullname: john,
//     height:5.5,
//     weight:20,
//     bmi:function (){
//        this.age=this.weight /(this.height * this.height)
//     }
// }
// var mark ={
//     fullname: mark,
//     height:6.6,
//     weight:30,
//     bmi:function (){
//         this.age=this.weight / (this.height * this.height)    }
// }
// john.bmi()
// mark.bmi()
// if(john.bmi>mark.bmi){
//     console.log('mark bmi is greater');
// }


var john = {
    bill:[124,48,268,180,42],
    arrTip:[],
    finalValues:[],
    tip:function(){
        for ( var i = 0 ; i < this.bill.length ; i++){
            if(this.bill[i]< 50){
            this.arrTip[i]= this.bill[i] * 50/100
            this.finalValues[i]= this.arrTip[i] + this.bill[i];
            }
            else if(this.bill[i]>= 50 && this.bill[i]<200){
               this.arrTip[i]= this.bill[i] * 15/100
               this.finalValues[i]= this.arrTip[i] + this.bill[i];
                }
            else (this.bill[i]>= 200)
                    this.arrTip[i] = this.bill[i] * 15/100 
                    this.finalValues[i]= this.arrTip[i] + this.bill[i];     
        }
    }
}
var mark = {
    bill:[77,375,110,45],
    arrTip:[],
    finalValues:[],
    tip:function(){
        for ( var i = 0 ; i < this.bill.length ; i++){
            if(this.bill[i]< 100){
            this.arrTip[i]= this.bill[i] * 20/100
            this.finalValues[i]= this.arrTip[i] + this.bill[i];
            }
            else if(this.bill[i]>= 100 && this.bill[i]<300){
               this.arrTip[i]= this.bill[i] * 10/100
               this.finalValues[i]= this.arrTip[i] + this.bill[i];
                }
            else (this.bill[i]>= 300)
                    this.arrTip[i] = this.bill[i] * 25/100 
                    this.finalValues[i]= this.arrTip[i] + this.bill[i];     
        }
    }
}
function avg(tips){
    console.log(tips)
    var sum = 0;
    for(var i =0; i < tips.length; i++){
        sum = sum + tips[i]
    }
        return average = sum / tips.length;
    }
john.tip();
mark.tip();
console.log(john,mark)
console.log(avg(john.arrTip));
console.log(avg(mark.arrTip));