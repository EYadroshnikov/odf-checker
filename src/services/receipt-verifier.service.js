export default {
    checkTotalSum(ofdList, begginsDbList) {
        if (ofdList.length !== begginsDbList.length) {
            return false;
        }

        let totalOfdSum = ofdList.reduce(function (accumulator, currentValue) {
            if (currentValue.hasOwnProperty('TotalSumm')) {
                return accumulator + currentValue.TotalSumm;
            } else {
                return accumulator;
            }
        }, 0);

        //TODO: figure out the sum name
        let totalBegginsSum = begginsDbList.reduce((accumulator, currentValue) => {
            if (currentValue.hasOwnProperty('IDK THIS NAME')) {
                return accumulator + currentValue["IDK THIS NAME"];
            } else {
                return accumulator;
            }
        }, 0);

        return totalOfdSum === totalBegginsSum;
    }
}