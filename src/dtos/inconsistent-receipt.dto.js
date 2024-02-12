class InconsistentReceiptDto {
    error;
    ofdReceipt = null;
    bdReceipt = null;

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