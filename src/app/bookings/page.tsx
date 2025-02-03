"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BookingCard from "../components/BookingCard/BookingCard";
import { Booking } from "../../types";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const searchParams = useSearchParams();
  const fromOffer = searchParams.get("from") === "offer";

  useEffect(() => {
    fetch("/data/response_bookings.json")
      .then(res => res.json())
      .then(data => setBookings(data.data))
      .catch(error => console.error("Error fetching bookings:", error));
  }, []);

  return (
    <div>
      <h1>Moje rezerwacje</h1>
      {fromOffer ? (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              <BookingCard booking={booking} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
