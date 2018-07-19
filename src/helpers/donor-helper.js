import moment from 'moment';

let DonorHelper = {

    generateDonors(receipts) {
        return _.map(_.uniqBy(receipts, (receipt) => { return receipt.name }), (uniqReceipt) => {
            let filteredReceipts = _.filter(receipts, (receipt) => { return receipt.name == uniqReceipt.name });

            let condensedReceipt = _.clone(filteredReceipts[0]);

            delete(condensedReceipt.createdAt);
            delete(condensedReceipt.dateReceived);
            delete(condensedReceipt.amountString);
    
            condensedReceipt.amount = 0;
            _.map(filteredReceipts, (receipt) => {
                condensedReceipt.amount += receipt.amount
    
                condensedReceipt.occupation = _.isEmpty(condensedReceipt.occupation) ? receipt.occupation : '';
                condensedReceipt.employer = _.isEmpty(condensedReceipt.employer) ? receipt.employer : '';

                condensedReceipt.email = _.isEmpty(condensedReceipt.email) ? receipt.email : '';
                condensedReceipt.phoneNumber = _.isEmpty(condensedReceipt.phoneNumber) ? receipt.phoneNumber : '';
            });
    
            return condensedReceipt;
        });
    },

    generateDonorsInYear(receipts) {
        return this.generateDonors(_.filter(receipts, (receipt) => { return moment(receipt.dateReceived) > moment().subtract(1, 'year') }));
    },

    mergeDonations(receipts, inKinds) {
        let cutReceipts = receipts.map((receipt) => {
            return { id: receipt.id, type: 'Receipt', name: receipt.name, amount: receipt.amount, amountString: receipt.amountString, dateReceived: receipt.dateReceived, address: receipt.address, city: receipt.city, state: receipt.state, country: receipt.country }
        });

        let cutInKinds = inKinds.map((inKind) => {
            return { id: inKind.id, type: 'In Kind', name: inKind.fromWhom, amount: inKind.value, amountString: inKind.valueString, dateReceived: inKind.dateReceived, address: inKind.address, city: inKind.city, state: inKind.state, country: inKind.country }
        });

        return _.concat(cutReceipts, cutInKinds);
    }
};

export default DonorHelper;
