let DonorHelper = {

    generateDonors(receipts) {
        return _.map(_.uniqBy(receipts, (receipt) => { return receipt.name }), (uniqReceipt) => {
            let filteredReceipts = _.filter(receipts, (receipt) => { return receipt.name == uniqReceipt.name });

            let condensedReceipt = _.clone(filteredReceipts[0]);

            delete(condensedReceipt.id);
            delete(condensedReceipt.createdAt);
            delete(condensedReceipt.dateReceived);
            delete(condensedReceipt.amountString);
    
            condensedReceipt.amount = 0;
            _.map(filteredReceipts, (receipt) => {
                condensedReceipt.amount += receipt.amount
    
                condensedReceipt.occupation = _.isEmpty(condensedReceipt.occupation) ? receipt.occupation : '';
                condensedReceipt.employer = _.isEmpty(condensedReceipt.employer) ? receipt.employer : '';
            });
    
            return condensedReceipt;
        });
    }
};

export default DonorHelper;