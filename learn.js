/**
 * 两数相加的平方
 */
function add2(x, y){
    return (x + y) * (x + y);
}

function addSub(x, y, z){
    return x + y - z;
}

function printArray(){
    arr = [1, 2, 3, 4, 5];
    console.log("数组打印结果", arr);
}

function printObject(){
    obj = {
        name: "张三",
        age: 20,
        sex: "男",
        address: "中国浙江",
    }
    obj.score = 100;
    console.log("数组打印结果", obj);
}

function main(){
    console.log("main方法正在执行");
    a = (1,3)
    console.log("两数相加的平方是：" + a);
    b= addSub(5, 2, 3);
    console.log("5+2-3=" + b);
    c = max(3, 5);
    console.log("3和5中的最大值是：" + c);
    d= loop(100);
    console.log("1+2+3+...+100=" + d);
    printArray();
    printObject();
}

function max(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

function loop(n){
    result = 0;
    for( i = 1; i <= n; i++){
        result = result + i;
    }
    return result;
}

main();
