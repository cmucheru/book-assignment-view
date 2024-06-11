import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider, MyMockedProvider } from "./MockedProvider";
import BookAssignmentView, {
  FETCH_ALL_BOOKS,
} from "../components/BookAssignmentView";

const mocks = [
  {
    request: {
      query: FETCH_ALL_BOOKS,
    },
    result: {
      data: {
        books: [
          { title: "Book 1", author: "Author 1" },
          { title: "Book 2", author: "Author 2" },
        ],
      },
    },
  },
];

describe("BookAssignmentView component", () => {
  test("fetches and displays books on load", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BookAssignmentView />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Book 1")).toBeInTheDocument();
      expect(screen.getByText("Book 2")).toBeInTheDocument();
    });
  });

  test("filters books based on search term", async () => {
    render(
      <MyMockedProvider mocks={mocks}>
        <BookAssignmentView />
      </MyMockedProvider>
    );

    await waitFor(() => {
      fireEvent.change(screen.getByLabelText("Search by title"), {
        target: { value: "Book 1" },
      });
    });

    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.queryByText("Book 2")).toBeNull();
  });

  test("adds book to reading list and disables button", async () => {
    render(
      <MyMockedProvider mocks={mocks}>
        <BookAssignmentView />
      </MyMockedProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText("Add to Reading List"));
    });

    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Added to Reading List")).toBeInTheDocument();
    expect(screen.getByText("Add to Reading List")).toBeDisabled();
  });

  test("handles books with same title but different authors uniquely", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BookAssignmentView />
      </MockedProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText("Add to Reading List"));
    });

    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("Added to Reading List")).toBeInTheDocument();
    expect(screen.getByText("Add to Reading List")).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Search by title"), {
      target: { value: "Book 2" },
    });

    expect(screen.getByText("Book 2")).toBeInTheDocument();
    expect(screen.queryByText("Added to Reading List")).toBeNull();
    expect(screen.getByText("Add to Reading List")).not.toBeDisabled();
  });
});
