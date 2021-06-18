window.onload= function(){

    //var is global and let is local
    var items = document.getElementsByTagName("li")

    for (let i=0; i<items.length; i++){
        items[i].onclick = function(){
            console.log(i)
        }
    }
}