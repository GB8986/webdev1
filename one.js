let celciusInput=document.querySelector('#celcius > input')
let fahrenhietInput=document.querySelector('#fahrenhiet>input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
celciusInput.addEventListener('input',function(){
    let cTemp =parseFloat(celciusInput.value)
    let fTemp =(cTemp*(9/5))+32
     
    fahrenhietInput.value =roundNumber(fTemp)
})

fahrenhietInput.addEventListener('input',function(){
    let fTemp =parseFloat(fahrenhietInput.value)

    let cTemp =(fTemp-32) * (5/9)
     
    celciusInput.value =roundNumber(cTemp)
})