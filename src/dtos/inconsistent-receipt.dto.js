import {OfdDto} from "./ofd.dto.js";
import {BegginsDto} from "./beggins.dto.js";

/**
 * Represents an inconsistency between two receipts, either from OFD or Beggins databases.
 *
 * @property {string} error - The type of inconsistency found.
 * @property {OfdDto} ofdReceipt - The OFD receipt involved in the inconsistency.
 * @property {BegginsDto} bdReceipt - The Beggins receipt involved in the inconsistency.
 */
export class InconsistentReceiptDto {
    error;
    ofdReceipt = null;
    bdReceipt = null;

    /**
     * Constructs an instance of InconsistentReceiptDto.
     *
     * @param {string} error - The error message or type of inconsistency.
     * @param {(OfdDto|BegginsDto)} receipt1 - The first receipt to compare.
     * @param {(OfdDto|BegginsDto)} receipt2 - The second receipt to compare.
     */
    constructor(error, receipt1, receipt2) {
        this.error = error;

        if (receipt1 instanceof OfdDto) {
            this.ofdReceipt = receipt1
        } else if (receipt1 instanceof BegginsDto) {
            this.bdReceipt = receipt1
        }

        if (receipt2 instanceof OfdDto) {
            this.ofdReceipt = receipt2
        } else if (receipt2 instanceof BegginsDto) {
            this.bdReceipt = receipt2
        }
    }
}