/**
 * Represents a Data Transfer Object (DTO) for OFD transactions.
 *
 * @property {string} id - The identifier of the transaction.
 * @property {string} docDateTime - The date and time of the transaction document.
 * @property {number} totalSum - The total sum of the transaction.
 * @property {number} cashSum - The cash sum of the transaction.
 * @property {number} eCashSum - The electronic cash sum of the transaction.
 * @property {number} creditSum - The credit sum of the transaction.
 *
 * @example
 * const ofdDto = new OfdDto({
 *   Id: '123',
 *   DocDateTime: '2023-01-01T00:00:00',
 *   TotalSumm:  100,
 *   CashSumm:  50,
 *   ECashSumm:  50,
 *   CreditSumm:  0
 * });
 */
export class OfdDto {
    id;
    docDateTime;
    totalSum;
    cashSum;
    eCashSum;
    creditSum;

    /**
     * Constructs an OfdDto instance from a given object.
     *
     * @param {Object} obj - The object containing transaction data.
     * @param {string} obj.Id - The identifier of the transaction.
     * @param {string} obj.DocDateTime - The date and time of the transaction document.
     * @param {number} obj.TotalSumm - The total sum of the transaction.
     * @param {number} obj.CashSumm - The cash sum of the transaction.
     * @param {number} obj.ECashSumm - The electronic cash sum of the transaction.
     * @param {number} obj.CreditSumm - The credit sum of the transaction.
     */
    constructor(obj) {
        this.id = obj['Id'];
        this.docDateTime = obj['DocDateTime']
        this.totalSum = obj['TotalSumm'];
        this.cashSum = obj['CashSumm'];
        this.eCashSum = obj['ECashSumm'];
        this.creditSum = obj['CreditSumm'];
    }
}