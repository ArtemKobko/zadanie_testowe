"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Offer } from "../../../types";
import BigOfferCard from "@/app/components/BigOfferCard/BigOfferCard";

export default function OfferDetailsPage() {
  const { id } = useParams();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/data/response_products.json`)
      .then(res => res.json())
      .then(data => {
        const foundOffer = data.data.find((o: Offer) => o.id === id);
        if (foundOffer) {
          setOffer(foundOffer);
        } else {
          setError("Offer not found.");
        }
      })
      .catch(() => setError("Error fetching offer details."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!offer) return <p>No offer available.</p>;

  return <BigOfferCard offer={offer} />;
}
