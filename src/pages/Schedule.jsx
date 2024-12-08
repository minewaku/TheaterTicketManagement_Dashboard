import { DataTable } from '~/components/Table';
import { TABLE_HEADERS } from '~/store/constants';
import { ScheduleModal } from '~/components/Modal';
import { SIZE_OPTIONS_1 } from '~/store/constants';
import * as scheduleService from '~/services/scheduleService';

const Schedule = () => {
    return (
        <DataTable
            label="Schedule"
            headers={TABLE_HEADERS.SCHEDULE}
            modals={ScheduleModal}
            sizeOptions={SIZE_OPTIONS_1}
            apiServices={scheduleService}
        ></DataTable>
    );
};

export default Schedule;
