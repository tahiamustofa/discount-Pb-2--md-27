function prevText(text) {
    const prevText = document.getElementById(text);
    const prevTextPrice= parseFloat(prevText.innerText);
    return  prevTextPrice;
}

function setTextNew(setid,value) {
    const set = document.getElementById(setid);
    const previousTextSellPrice = prevText('prevtext');
   set.innerText = previousTextSellPrice-value;
}

document.getElementById('btn').addEventListener('click',function( ){
    
     const previousTextSellPrice = prevText('prevtext');
     const newTextSellPrice = prevText('newtext');
     
    discount = previousTextSellPrice * 0.3;
    
    setTextNew('newtext',discount);
    
})