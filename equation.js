/**
 * 二元一次方程求解
 * @param a
 * @param b
 * @returns {*|{}}
 */
function compute(a, b){
    // （3x + 4y = 27） * 5
    // 15x + 20y = 135
    am = {
        x: a.x * b.x,
        y: a.y * b.x,
        right: a.right * b.x
    };
    // （5x - 2y = 19） * 3
    // 15x - 6y = 57
    bm = {
        x: b.x * a.x,
        y: b.y * a.x,
        right: b.right * a.x
    };
    // 相减，消元
    // 26y = 78
    sub = {
        x: am.x - bm.x,
        y: am.y - bm.y,
        right: am.right - bm.right
    };
    // y = 3
    result = {}
    result.y = sub.right / sub.y;

    // 代入，求解
    // 3x + 4 * 3 = 27
    // x = (27 - 4*3) / 3
    // x = 5
    result.x = (a.right - a.y * result.y) / a.x;
    return result;
}

function main(){
    // 3x + 4y = 27
    // 5x - 2y = 19
    a = {
        x: 3,
        y: 4,
        right: 27
    };
    b = {
        x: 5,
        y: -2,
        right: 19
    };
    result = compute(a, b);
    console.log("x = " + result.x + ", y = " + result.y);
}

// 3x + 4y = 27
// 5x - 2y = 19

// （3x + 4y = 27） * 5
// 15x + 20y = 135

// （5x - 2y = 19） * 3
// 15x - 6y = 57

// 相减，消元
// 26y = 78

// y = 3

// 代入，求解
// 3x + 4 * 3 = 27
// x = (27 - 4*3) / 3
// x = 5

main();
