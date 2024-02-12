
export default {
    /**
     * Compares the total amounts of two lists of objects.
     *
     * @param {OfdDto[]} ofdDtos - An array of objects representing OFD receipts.
     * @param {BegginsDto[]} begginsDtos - An array of objects representing Beggins DB entries.
     * @returns {boolean} True if the total amounts match, false otherwise.
     */
    checkTotalAmounts(ofdDtos, begginsDtos) {
        if (ofdDtos.length !== begginsDtos.length) {
            return false;
        }

        let totalOfdAmounts = ofdDtos.reduce(function (accumulator, currentValue) {
            if (currentValue.hasOwnProperty('TotalSumm')) {
                return accumulator + currentValue.TotalSumm;
            } else {
                return accumulator;
            }
        }, 0);

        //TODO: figure out the sum name
        let totalBegginsAmounts = begginsDtos.reduce((accumulator, currentValue) => {
            if (currentValue.hasOwnProperty('IDK THIS NAME')) {
                return accumulator + currentValue["IDK THIS NAME"];
            } else {
                return accumulator;
            }
        }, 0);

        return totalOfdAmounts === totalBegginsAmounts;
    },

    /**
     * Compares the total amounts of two lists of objects.
     *
     * @param {OfdDto[]} ofdDtos - An array of objects representing OFD receipts.
     * @param {BegginsDto[]} begginsDtos - An array of objects representing Beggins DB entries.
     * @returns {InconsistentReceiptDto[]} - An array of Inconsistencies
     */
    findInconsistencies(ofdDtos, begginsDtos) {
        let [biggerArray, smallerArray] = ofdDtos.length >= begginsDtos ? ([ofdDtos, begginsDtos]) : ([begginsDtos, ofdDtos])
        let listOfInconsistencies = [];
        for (let biggerItem of biggerArray) {
            const foundItem = smallerArray.find(receipt => biggerItem.id === receipt.id);
            if (!foundItem) {
                listOfInconsistencies.push(new InconsistentReceiptDto("not found", biggerItem, null));
            } else if (foundItem.totalSum !== biggerItem.totalSum) {
                listOfInconsistencies.push(new InconsistentReceiptDto("different amounts", biggerItem, foundItem))
            }
        }
        return listOfInconsistencies;
    }
}