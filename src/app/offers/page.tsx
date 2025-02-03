"use client";
import React, { useState, useEffect } from "react";
import OfferCard from "../components/OfferCard/OfferCard";
import { Offer } from "../../types";

export default function OffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    fetch("/data/response_products.json")
      .then(res => res.json())
      .then(data => setOffers(data.data))
      .catch(error => console.error("Error fetching offers:", error));
  }, []);

  return (
    <div>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </div>
  );
}
