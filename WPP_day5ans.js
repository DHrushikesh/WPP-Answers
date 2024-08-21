function removecharacter(str,index){
    if(index<0||index>str.length){
        console.log("Please Enter a Valid Index");
    }
    else{
        part_1 = str.substring(0,index);
        part_2 = str.substring(index+1,str.length);
        console.log(part_1+part_2);
    }
}
var strings="Hello"
removecharacter(strings,1);