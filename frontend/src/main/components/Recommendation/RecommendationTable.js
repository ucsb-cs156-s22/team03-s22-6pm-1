import OurTable, {_ButtonColumn} from "main/components/OurTable";
//import { useBackendMutation } from "main/utils/useBackend";
//import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/RecommendationUtils"
//import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function RecommendationTable({ recommendation, currentUser }) {

    //const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/Recommendation/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/Recommendation/all"]
    // );
    // Stryker enable all 

    // Stryker disable next-line all
    //const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Email of Requester',
            accessor: 'requesterEmail',
        },
        {
            Header: 'Email of Professor',
            accessor: 'professorEmail',
        },
        {
            Header: 'Explanation',
            accessor: 'explanation',
        },
        {
            Header: 'Date Requested',
            accessor: 'dateRequested',
        },
        {
            Header: 'Date Needed By',
            accessor: 'dateNeeded',
        },
        {
            Header: 'Is Done',
            id: 'done',
            accessor: (row, _rowIndex) => String(row.done)
        }
    ];

    const columnsIfAdmin = [
        ...columns,
        //ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
        //ButtonColumn("Delete", "danger", deleteCallback, "RecommendationTable")
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={recommendation}
        columns={columnsToDisplay}
        testid={"RecommendationTable"}
    />;
};