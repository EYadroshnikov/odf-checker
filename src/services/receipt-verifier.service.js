import {InconsistentReceiptDto} from "../dtos/inconsistent-receipt.dto.js";

export default {
    /**
     * Compares the total amounts of two lists of objects.
     *
     * @param {OfdDto[]} ofdDtos - An array of objects representing OFD receipts.
     * @param {BagginsDto[]} bagginsDtos - An array of objects representing Beggins DB entries.
     * @returns {boolean} True if the total amounts match, false otherwise.
     */
    checkTotalAmounts(ofdDtos, bagginsDtos) {
        if (ofdDtos.length !== bagginsDtos.length) {
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
        let totalBegginsAmounts = bagginsDtos.reduce((accumulator, currentValue) => {
            if (currentValue.hasOwnProperty('IDK THIS NAME')) {
                return accumulator + currentValue["IDK THIS NAME"];
            } else {
                return accumulator;
            }
        }, 0);

        return totalOfdAmounts === totalBegginsAmounts;
    },

    /**
     * Finds inconsistencies between two arrays of DTOs by comparing their IDs and total sums.
     *
     * @param {OfdDto[]} ofdDtos - An array of objects representing OFD receipts.
     * @param {BagginsDto[]} bagginsDtos - An array of objects representing Beggins DB entries.
     * @returns {InconsistentReceiptDto[]} - An array of InconsistentReceiptDto instances representing the inconsistencies found
     */
    findInconsistencies(ofdDtos, bagginsDtos) {
        let [biggerArray, smallerArray] = ofdDtos.length >= bagginsDtos.length ? ([ofdDtos, bagginsDtos]) : ([bagginsDtos, ofdDtos])
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