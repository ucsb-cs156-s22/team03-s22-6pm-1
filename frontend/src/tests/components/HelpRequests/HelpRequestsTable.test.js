import {  render } from "@testing-library/react";
import { helpRequestsFixtures } from "fixtures/helpRequestsFixtures";
import HelpRequestsTable from "main/components/HelpRequests/HelpRequestsTable";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { currentUserFixtures } from "fixtures/currentUserFixtures";


const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("HelpRequestsTable tests", () => {
  const queryClient = new QueryClient();


  test("renders without crashing for empty table with user not logged in", () => {
    const currentUser = null;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <HelpRequestsTable helpRequests={[]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );
  });
  test("renders without crashing for empty table for ordinary user", () => {
    const currentUser = currentUserFixtures.userOnly;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <HelpRequestsTable helpRequests={[]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );
  });

  test("renders without crashing for empty table for admin", () => {
    const currentUser = currentUserFixtures.adminUser;

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <HelpRequestsTable helpRequests={[]} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );
  });

  test("Has the expected column headers and content for adminUser", () => {

    const currentUser = currentUserFixtures.adminUser;

    const { getByText, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <HelpRequestsTable helpRequests={helpRequestsFixtures.threeHelpRequests} currentUser={currentUser} />
        </MemoryRouter>
      </QueryClientProvider>

    );


    const expectedHeaders = ['id',  'Requester\'s Email', 'Team ID','Table or Breakout Room','Request Time','Explanation','Solved?'];
    const expectedFields = ['id', 'requesterEmail','teamId', 'tableOrBreakoutRoom','requestTime','explanation','solved'];
    const testId = "HelpRequestsTable";

    expectedHeaders.forEach((headerText) => {
      const header = getByText(headerText);
      expect(header).toBeInTheDocument();
    });

    expectedFields.forEach((field) => {
      const header = getByTestId(`${testId}-cell-row-0-col-${field}`);
      expect(header).toBeInTheDocument();
    });

    expect(getByTestId(`${testId}-cell-row-0-col-requesterEmail`)).toHaveTextContent("fdsaf@ytdghfb.cqq");
    expect(getByTestId(`${testId}-cell-row-1-col-requesterEmail`)).toHaveTextContent("111@321.99999");
    expect(getByTestId(`${testId}-cell-row-0-col-explanation`)).toHaveTextContent("Is there a final for this class");
    expect(getByTestId(`${testId}-cell-row-1-col-explanation`)).toHaveTextContent("Are alien real");
    expect(getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent(0);
    expect(getByTestId(`${testId}-cell-row-1-col-id`)).toHaveTextContent(3);
    expect(getByTestId(`${testId}-cell-row-0-col-teamId`)).toHaveTextContent("59");
    expect(getByTestId(`${testId}-cell-row-1-col-teamId`)).toHaveTextContent("51");
    expect(getByTestId(`${testId}-cell-row-0-col-tableOrBreakoutRoom`)).toHaveTextContent("Earth");
    expect(getByTestId(`${testId}-cell-row-1-col-tableOrBreakoutRoom`)).toHaveTextContent("room 51");
    expect(getByTestId(`${testId}-cell-row-0-col-requestTime`)).toHaveTextContent("2022-05-16T03:15:10");
    expect(getByTestId(`${testId}-cell-row-1-col-requestTime`)).toHaveTextContent("2142-05-15T22:17:52");
    expect(getByTestId(`${testId}-cell-row-0-col-solved`)).toHaveTextContent(false);
    expect(getByTestId(`${testId}-cell-row-1-col-solved`)).toHaveTextContent(false);

    // const editButton = getByTestId(`${testId}-cell-row-0-col-Edit-button`);
    // expect(editButton).toBeInTheDocument();
    // expect(editButton).toHaveClass("btn-primary");

    const deleteButton = getByTestId(`${testId}-cell-row-0-col-Delete-button`);
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass("btn-danger");

  });

  // test("Edit button navigates to the edit page for admin user", async () => {

  //   const currentUser = currentUserFixtures.adminUser;

  //   const { getByTestId } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <MemoryRouter>
  //         <UCSBDatesTable diningCommons={ucsbDatesFixtures.threeDates} currentUser={currentUser} />
  //       </MemoryRouter>
  //     </QueryClientProvider>

  //   );

  //   await waitFor(() => { expect(getByTestId(`UCSBDatesTable-cell-row-0-col-id`)).toHaveTextContent("1"); });

  //   const editButton = getByTestId(`UCSBDatesTable-cell-row-0-col-Edit-button`);
  //   expect(editButton).toBeInTheDocument();
    
  //   fireEvent.click(editButton);

  //   await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('/ucsbdates/edit/1'));

  // });


});

