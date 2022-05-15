import OurTable/*, { ButtonColumn }*/ from "main/components/OurTable";
// import { useBackendMutation } from "main/utils/useBackend";
// import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function MenuItemsTable({ menuItems, currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/ucsbdates/all"]
    // );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    // const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    // "diningCommonsCode": "string",
    // "id": 0,
    // "name": "string",
    // "station": "string"

    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Dining Commons Code',
            accessor: 'diningCommonsCode', // accessor is the "key" in the data
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Station',
            accessor: 'station',
        }
    ];

    // const testid = "MenuItemsTable";

    const columnsIfAdmin = [
        ...columns,
        // ButtonColumn("Edit", "primary", editCallback, testid),
        // ButtonColumn("Delete", "danger", deleteCallback, testid)
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={menuItems}
        columns={columnsToDisplay}
        testid={"MenuItemsTable"}
    />;
}; 