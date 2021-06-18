window.onload = function() {

    var oldMethod = function (name = "Kalyani"){
        console.log(`the old method name is ${name}`)
    }

    var newMethod = (name = "Kalyani") =>  console.log(`the new method name is ${name}`)

    oldMethod()
    newMethod()


    var myFunction = {
        name : "aaa",
        chop(x){
            _this = this
            window.setInterval(function(){
                if(x > 0){
                    console.log(_this.name + " chopped ");
                    x--
                }
            },1000)
        }
    }

   // myFunction.chop(5)

    var myNewArrowFunction = {
        name : "aaa",
        chop(x){           
            window.setInterval(() => {
                if(x > 0){
                    console.log(this.name + " chopped ");
                    x--
                }
            },1000)
        }
    }

    myNewArrowFunction.chop(5)
}