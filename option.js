let page=document.getElementById('buttonDiv');
const TypesOfColor=['yellow','red','blue','white']

function constructButton(TypesOfColor){
    for(let item of TypesOfColor){
        let button= document.createElement('button')
        button.style.background=item
        button.addEventListener('click',function(){
            chrome.storage.sync.set({color:item},function(){
                console.log("this color is "+ item)
            })
        })
        page.appendChild(button)
    }
}
constructButton(TypesOfColor)