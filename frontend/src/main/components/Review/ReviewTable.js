import OurTable, { _ButtonColumn } from "main/components/OurTable";
//import { useBackendMutation } from "main/utils/useBackend";
//import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
//import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function UCSBDatesTable({ review, currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    //Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/MenuItemReview/all"]
    //  );
    //Stryker enable all 

    // // Stryker disable next-line all : TODO try to make a good test for this
    //const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'Item ID',
            accessor: 'itemId', // accessor is the "key" in the data
        },
        {
            Header: 'Reviewer Email',
            accessor: 'reviewerEmail',
        },
        {
            Header: 'Stars',
            accessor: 'stars',
        },
        {
            Header: 'Date Reviewed',
            accessor: 'dateReviewed',
        },
        {
            Header: 'Comments',
            accessor: 'comments',
        }
    ];

     const columnsIfAdmin = [
        ...columns,
    //     ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    //    ButtonColumn("Delete", "danger", deleteCallback, "UCSBDatesTable")
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;


    return <OurTable 
        data={review}
        columns={columnsToDisplay}
        testid={"ReviewTable"}
    />;
};