import { _fireEvent, render, _waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import RecommendationIndexPage from "main/pages/Recommendation/RecommendationIndexPage";


import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
// import { recommendationFixtures } from "fixtures/recommendationFixtures";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
// import mockConsole from "jest-mock-console";


const mockToast = jest.fn();
jest.mock('react-toastify', () => {
    const originalModule = jest.requireActual('react-toastify');
    return {
        __esModule: true,
        ...originalModule,
        toast: (x) => mockToast(x)
    };
});

describe("RecommendationIndexPage tests", () => {

    const axiosMock =new AxiosMockAdapter(axios);

    // const testId = "RecommendationTable";

    const setupUserOnly = () => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    };

    const setupAdminUser = () => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.adminUser);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    };

    test("renders without crashing for regular user", () => {
        setupUserOnly();
        const queryClient = new QueryClient();
        axiosMock.onGet("/api/Recommendation/all").reply(200, []);

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationIndexPage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

    test("renders without crashing for admin user", () => {
        setupAdminUser();
        const queryClient = new QueryClient();
        axiosMock.onGet("/api/Recommendation/all").reply(200, []);

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationIndexPage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

    // test("renders three recommendation requests without crashing for regular user", async () => {
    //     setupUserOnly();
    //     const queryClient = new QueryClient();
    //     axiosMock.onGet("/api/Recommendation/all").reply(200, recommendationFixtures.threeRecommendation);

    //     const { getByTestId } = render(
    //         <QueryClientProvider client={queryClient}>
    //             <MemoryRouter>
    //                 <RecommendationIndexPage />
    //             </MemoryRouter>
    //         </QueryClientProvider>
    //     );

    //     await waitFor(() => { expect(getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent("1"); });
    //     expect(getByTestId(`${testId}-cell-row-1-col-id`)).toHaveTextContent("2");
    //     expect(getByTestId(`${testId}-cell-row-2-col-id`)).toHaveTextContent("3");

    // });

    // test("renders three recommendation without crashing for admin user", async () => {
    //     setupAdminUser();
    //     const queryClient = new QueryClient();
    //     axiosMock.onGet("/api/Recommendation/all").reply(200, recommendationFixtures.threeRecommendation);

    //     const { getByTestId } = render(
    //         <QueryClientProvider client={queryClient}>
    //             <MemoryRouter>
    //                 <RecommendationIndexPage />
    //             </MemoryRouter>
    //         </QueryClientProvider>
    //     );

    //     await waitFor(() => { expect(getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent("1"); });
    //     expect(getByTestId(`${testId}-cell-row-1-col-id`)).toHaveTextContent("2");
    //     expect(getByTestId(`${testId}-cell-row-2-col-id`)).toHaveTextContent("3");

    // });

    // test("renders empty table when backend unavailable, user only", async () => {
    //     setupUserOnly();

    //     const queryClient = new QueryClient();
    //     axiosMock.onGet("/api/Recommendation/all").timeout();

    //     const { queryByTestId } = render(
    //         <QueryClientProvider client={queryClient}>
    //             <MemoryRouter>
    //                 <RecommendationIndexPage />
    //             </MemoryRouter>
    //         </QueryClientProvider>
    //     );

    //     await waitFor(() => { expect(axiosMock.history.get.length).toBeGreaterThanOrEqual(3); });

    //     expect(queryByTestId(`${testId}-cell-row-0-col-id`)).not.toBeInTheDocument();
    // });

    // test("test what happens when you click delete, admin", async () => {
    //     setupAdminUser();

    //     const queryClient = new QueryClient();
    //     axiosMock.onGet("/api/Recommendation/all").reply(200, recommendationFixtures.threeRecommendation);
    //     axiosMock.onDelete("/api/Recommendation").reply(200, "Recommendation with id 1 was deleted");


    //     const { getByTestId } = render(
    //         <QueryClientProvider client={queryClient}>
    //             <MemoryRouter>
    //                 <RecommendationIndexPage />
    //             </MemoryRouter>
    //         </QueryClientProvider>
    //     );

    //     await waitFor(() => { expect(getByTestId(`${testId}-cell-row-0-col-id`)).toBeInTheDocument(); });

    //    expect(getByTestId(`${testId}-cell-row-0-col-id`)).toHaveTextContent("1"); 


    //     const deleteButton = getByTestId(`${testId}-cell-row-0-col-Delete-button`);
    //     expect(deleteButton).toBeInTheDocument();

    //     fireEvent.click(deleteButton);

    //     await waitFor(() => { expect(mockToast).toBeCalledWith("Recommendation with id 1 was deleted") });

    // });

});


