// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (matrix == undefined) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            res.push(...matrix[i]);
            console.log(...matrix[i]);
        } else {
            res.push(...matrix[i].reverse());
            console.log(...matrix[i]);
        }
    }
    return res;
};
