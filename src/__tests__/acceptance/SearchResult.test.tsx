import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { App } from "../../App";
import { store } from "../../store/store";

test('Initial Data sould be BTS', () => {
    const { getByText } = render(
        <Provider store={store}><App /></Provider>
    );
    const inputElement = screen.getByText(/BTS/);
    expect(inputElement).toBeInTheDocument();
})

test('Should return searched data', () => {
    render(
        <Provider store={store}><App /></Provider>
    );
    const searchText = screen.getByTestId("search-input").querySelector("input") as HTMLInputElement;
    const searchButton = screen.getByTestId("search-button");
    fireEvent.change(searchText, { target: { value: 'Ed Sheeran' } });
    fireEvent.click(searchButton);
    const SearchResultValue = screen.findByTestId(/Ed Sheeran/, {}, { timeout: 5000 });
    waitFor(() => expect(SearchResultValue).toBeInTheDocument());
})

test('should return "not found" on empty search', () => {
    render(
        <Provider store={store}><App /></Provider>
    );
    const searchText = screen.getByTestId("search-input").querySelector("input") as HTMLInputElement;
    const searchButton = screen.getByTestId("search-button");
    fireEvent.change(searchText, { target: { value: '' } });
    fireEvent.click(searchButton);
    const SearchResultValue = screen.findByTestId(/There are no results found!/, {}, { timeout: 5000 });
    waitFor(() => expect(SearchResultValue).toBeInTheDocument());
})
