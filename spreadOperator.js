window.onload = function() {
    var food = ['Biriyani', 'Samosa', 'Pizza']

    console.log(...food)

    var nums1 = [1,2,3]
    var nums2 =[nums1,4, 5,6]
    var nums3 =[...nums1,4, 5,6]
    console.log("Without spread operator", nums1, nums2)
    console.log("with spread operator", nums3)

    myNum =[3,4,6]
    function addnum(a,b,c){
        //it is expecting three different numbers
        //you can pass a spread operator here and it will
        //sepereate the numbers
        console.log(a+b+c)
    }

    addnum(...myNum)

}