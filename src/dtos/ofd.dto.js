/**
 * Data Transfer Object (DTO) for OFD records.
 * Represents the structure of an OFD record with various financial sums.
 */
class OfdDto {
    /**
     * Unique identifier for the OFD record.
     */
    id;

    /**
     * Total sum of transaction included in the OFD record.
     */
    totalSum;

    /**
     * Sum of cash transaction included in the OFD record.
     */
    cashSum;

    /**
     * Sum of electronic cash transaction included in the OFD record.
     */
    eCashSum;

    /**
     * Sum of credit card transaction included in the OFD record.
     */
    creditSum;

    /**
     * Constructs a new instance of the OfdDto class.
     *
     * @param {Object} obj - The object containing the OFD record data.
     * @param {number} obj.Id - The unique identifier for the OFD record.
     * @param {number} obj.TotalSumm - The total sum of transaction.
     * @param {number} obj.CashSumm - The sum of cash transaction.
     * @param {number} obj.ECashSumm - The sum of electronic cash transaction.
     * @param {number} obj.CreditSumm - The sum of credit card transaction.
     */
    constructor(obj) {
        this.id = obj['Id'];
        this.totalSum = obj['TotalSumm'];
        this.cashSum = obj['CashSumm'];
        this.eCashSum = obj['ECashSumm'];
        this.creditSum = obj['CreditSumm'];
    }
}
