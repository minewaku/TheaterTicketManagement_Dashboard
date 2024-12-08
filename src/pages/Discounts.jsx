import { DataTable } from "~/components/Table"
import { TABLE_HEADERS } from "~/store/constants"
import { DiscountModal } from "~/components/Modal"
import { SIZE_OPTIONS_1 } from "~/store/constants"
import * as discountService from '~/services/discountService';

const Discounts = () => {
    return <DataTable label="Discount" headers={TABLE_HEADERS.DISCOUNTS} modals={DiscountModal} sizeOptions={SIZE_OPTIONS_1} apiServices={discountService}></DataTable>
}

export default Discounts
