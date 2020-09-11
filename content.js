const text = document.querySelectorAll('h1,h2,h3,h5,p,li,td,caption,span,a'); 

for (let i=0; i< text.length; i++){
    if(text[i].innerHTML.includes("Donald Trump")){
        text[i].innerHTML = text[i].innerHTML.replace('Donald Trump', 'Bellybutton Fartpants')
    }else if(text[i].innerHTML.includes(`Trump`)){
        text[i].innerHTML = text[i].innerHTML.replace('Trump', 'Fartpants')  
    }
}