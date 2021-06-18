window.onload = function() {
    var name = "aaa"
    var dressColor = "Purple"

    //old method
    var myOldObject = {
        name : name,
        dressColor : dressColor,
        chop : function(x){
            console.log(`you chopped the  ${x} times`)
        }
    }

    //new method 
    var myNewObject = {
        name, dressColor,
        chop(x){
            console.log(`you chopped the  ${x} times`)
        }
        
    }

    console.log(`dressColor ${myOldObject.dressColor}`)
    console.log(`NewMehod ${myNewObject.chop(10)} and dressColor ${myNewObject.dressColor}`)
}