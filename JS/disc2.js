function prevText(text) {
    const prevText = document.getElementById(text);
    const prevTextPrice= parseFloat(prevText.innerText);
    return  prevTextPrice;
}

function setTextNew(setid, prevTextId, value) {
    const set = document.getElementById(setid);
    const previousTextSellPrice = prevText(prevTextId); // এখানে prevTextId প্যারামিটার পাস করা হয়েছে
    set.innerText = previousTextSellPrice - value;
}

function setTextWithoutDiscout(setid, value) {
    const set = document.getElementById(setid);
    
    set.innerText = (setid,value);

}


document.getElementById('btn').addEventListener('click',function( ){
    
     const previousTextSellPrice = prevText('prevtext');
    //  const newTextSellPrice = prevText('newtext');
     
 
    if (document.getElementById('input-cupon').value == 'DISC30') {
        const discount = previousTextSellPrice * 0.3; 
       
        setTextNew('newtext','prevtext',discount);
     }
     else{
      
        setTextWithoutDiscout('newtext',previousTextSellPrice )}
  
})