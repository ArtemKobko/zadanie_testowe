import { render, fireEvent, screen } from "@testing-library/react";
import Sidebar from "../app/components/Sidebar/Sidebar";
import { useSearchParams, useRouter } from "next/navigation";

jest.mock("next/navigation");

const getMock: jest.Mock = jest.fn();
const toStringMock: jest.Mock = jest.fn();
(useSearchParams as jest.Mock).mockReturnValue({
  get: getMock,
  toString: toStringMock,
});

const routerPushMock: jest.Mock = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: routerPushMock,
});

it("should render all navigation links with correct text", () => {
  render(<Sidebar />);

  expect(screen.getByText("Moje dane")).toBeInTheDocument();
  expect(screen.getByText("Wiadomości")).toBeInTheDocument();
  expect(screen.getByText("Rezerwacje")).toBeInTheDocument();
  expect(screen.getByText("Dedykowane oferty")).toBeInTheDocument();
  expect(screen.getByText("Wyloguj się")).toBeInTheDocument();
});

it("should navigate to /messages when 'Wiadomości' link is clicked", () => {
  render(<Sidebar />);
  const link = screen.getByText("Wiadomości");
  expect(routerPushMock).not.toHaveBeenCalled();
  fireEvent.click(link);
  expect(routerPushMock).toHaveBeenCalledWith("/messages");
});
