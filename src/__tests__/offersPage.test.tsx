import { render, screen, waitFor } from "@testing-library/react";
import OffersPage from "../app/offers/page";
import { Offer } from "../types";

const mockOffers: Offer[] = [
  {
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
  },
];

it("should fetch offers and render OfferCard components", async () => {
  global.fetch = jest.fn().mockResolvedValueOnce({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ data: mockOffers }),
  } as Response);

  render(<OffersPage />);

  await waitFor(() => screen.getByText("Special Offer"));

  expect(screen.getByText("Special Offer")).toBeInTheDocument();
});
