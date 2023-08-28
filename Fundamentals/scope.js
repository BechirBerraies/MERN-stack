var superHeros = ["superman ","Batman" ,"Spiderman"]

function printRandomHero(list){
    //heroes is block variable : can be seen only in side the function block
    function generateRandomRange(){
        var index = Math.floor(math.random()*list.length)
        for (var i=0 ; i <= index ; i++){
            var item = list[i]
            console.log(item);
        }
    }
    generateRandomRange()

}

printRandomHero(superHeros,"***********");