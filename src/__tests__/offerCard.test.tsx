import { render, screen } from "@testing-library/react";
import OfferCard from "@/app/components/OfferCard/OfferCard";
import { Offer } from "@/types";
import { useRouter } from "next/navigation";
jest.mock("next/navigation");

const routerPushMock: jest.Mock = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: routerPushMock,
});

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockOffer: Offer = {
  id: "1",
  name: "Special Offer",
  description: "my description",
  price_description: "price",
  min_price: 50,
  max_price: 200,
  food_description: "lorem.",
  food_type: "Vegetarian",
  location: {
    city: "Warszawa",
    province: "Mazowieckie",
  },
  status: "Active",
  created_at: "2025-02-04T00:00:00Z",
  transport_type: "Bus",
  media: [
    {
      id: "1",
      url: "https://example.com/image1.jpg",
      width: 800,
      height: 600,
      provider: "ImageProvider",
    },
    {
      id: "2",
      url: "https://example.com/image2.jpg",
      width: 800,
      height: 600,
      provider: "ImageProvider",
    },
  ],
  min_trip_start_date: "2025-05-01T00:00:00Z",
  max_trip_end_date: "2025-05-10T00:00:00Z",
  food_diets: ["Vegan", "Gluten-Free"],
};
describe("OfferCard", () => {
  it("should render OfferCard with the mock offer", async () => {
    render(<OfferCard offer={mockOffer} />);

    expect(screen.getByText("Special Offer")).toBeInTheDocument();
    expect(screen.getByText("my description")).toBeInTheDocument();
    expect(screen.getByText(/Warszawa/i)).toBeInTheDocument();
  });
});
