import _ from 'lodash';
import moment from 'moment';

let ReportHelper = {

    generateReportType(reportType, campaign) {
        let newReportType = _.clone(reportType);

        let baseDate = campaign[reportType.type];
        if (_.isEmpty(baseDate)) {
            if (_.isEmpty(reportType.dueDate)) { // dissolution, no dates attached
                return newReportType;
            }

            let year = moment().year();
            if (moment().month() == 1) {
                newReportType.dueDate = moment(newReportType.dueDate).year(year);
                newReportType.endingDate = moment(newReportType.endingDate).year(year - 1);
            } else {
                newReportType.dueDate = moment(newReportType.dueDate).year(year + 1);
                newReportType.endingDate = moment(newReportType.endingDate).year(year);
            }
        } else {
            newReportType.dueDate = moment(baseDate).add(Number(reportType.dueDate), 'days');
            newReportType.endingDate = moment(baseDate).add(Number(reportType.endingDate), 'days');
        }

        return newReportType;
    },

    lastOfficialReport(reports) {
        return _.filter(_.reverse(_.sortBy(reports, (report) => { return report.createdAt })), (report) => {
            return report.official;
        })[0];
    }
}

export default ReportHelper;
