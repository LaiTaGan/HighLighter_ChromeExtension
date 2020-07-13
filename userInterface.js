let textColor=document.getElementById("demoUse");
let textColor2=document.getElementById("login")

chrome.storage.sync.get('color',function(data){
    textColor.style.color=data.color;
    textColor.setAttribute('value',data.color)
    textColor2.style.color=data.color;
    textColor2.setAttribute('value',data.color)
})
 
textColor.onclick=function (element) {
    let color=element.target.value;//mouseEvent.target.color//onclick is mouseEvent
    chrome.tabs.query(
        {active:true, currentWindow:true},function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,{code:'if(document.body.style.color=="black"){document.body.style.color="'+color+'"; document.body.style.backgroundColor="gray"} else{document.body.style.color="black"; document.body.style.backgroundColor="white"}'}
        )
    })
 
}


//For the darkMode
let darkMode=document.getElementById("darkMode")
darkMode.addEventListener('click',function (){
    if(document.body.style.backgroundColor =='white'){
        darkMode.innerHTML="L"
        document.body.style.backgroundColor='gray';
    }
    else{
        darkMode.innerHTML="D";
        document.body.style.backgroundColor='white';
    }
})