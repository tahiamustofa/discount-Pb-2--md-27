function prevtext(priceId) {
    const priceGivenGet = document.getElementById(priceId).innerText;
    const priceGiven =  parseFloat(priceGivenGet);
    return priceGiven;
}
function withDiscount(priceId,newid){
    const priceGiven = prevtext(priceId);
    const  dis = priceGiven * (0.3);
    const discount = priceGiven - dis;
    const resultId = document.getElementById(newid);
    resultId.innerText = discount;
}

function withOut(priceId,newid){
    
    const resultId = document.getElementById(newid);
    resultId.innerText = prevtext(priceId);
}


document.getElementById('btn').addEventListener('click',function( ){
    const previousPrice = prevtext('prevtext');
    const cupon= document.getElementById('input-cupon').value;

    if (cupon === 'DISC30') {
        withDiscount('prevtext','resultId'); 
    }
    else{
        withOut('prevtext','resultId')
    }
})