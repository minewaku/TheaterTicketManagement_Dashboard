import { DataTable } from '~/components/Table';
import { TABLE_HEADERS } from '~/store/constants';
import { FoodModal } from '~/components/Modal';
import { SIZE_OPTIONS_1 } from '~/store/constants';
import * as foodService from '~/services/foodService';

const Food = () => {
    return (
        <DataTable
            label="Food"
            headers={TABLE_HEADERS.FOOD}
            modals={FoodModal}
            sizeOptions={SIZE_OPTIONS_1}
            apiServices={foodService}
        ></DataTable>
    );
};

export default Food;
