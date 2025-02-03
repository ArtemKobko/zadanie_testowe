"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./BigOfferCard.module.scss";
import { Offer } from "../../../types";

interface BigOfferCardProps {
  offer: Offer;
}

const BigOfferCard = ({ offer }: BigOfferCardProps) => {
  const router = useRouter();
  const navigateToBookingList = () => {
    router.push(`/bookings?from=offer`);
  };
  const navigateToOffers = () => {
    router.push(`/offers/`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.offerDescription}>
        <h2>{offer.name.trim() || "Nazwa Oferty"}</h2>
        <p className={styles.description}>{offer.description}</p>
        <p>
          <b>Cena:</b> {`${offer.min_price} - ${offer.max_price}`}
        </p>
        <p>
          <b>Wyzywienie:</b> {offer.food_description || "Brak informacji"}
        </p>
        <div>
          {offer.food_diets && offer.food_diets.length > 0 && (
            <p>
              <b> Diety:</b> {offer.food_diets.join(", ")}
            </p>
          )}
        </div>
        <p>
          <b>Miasto : </b> {offer.location.city}, <b>Województwo: </b>
          {offer.location.province}
        </p>
        <p>
          <b>Transport: </b> {offer.transport_type}
        </p>
        <div>
          <b>Daty wycieczki: </b>
          {offer.min_trip_start_date && offer.max_trip_end_date ? (
            <span>
              {new Date(offer.min_trip_start_date).toLocaleDateString()} -{" "}
              {new Date(offer.max_trip_end_date).toLocaleDateString()}
            </span>
          ) : (
            <span>Nie okreslone</span>
          )}
        </div>
      </div>

      <div className={styles.mediaContainer}>
        <div className={styles.imageContainer}>
          {offer.media && offer.media.length > 0 ? (
            <img
              src={offer.media[0].url}
              alt="Offer image"
              className={styles.image}
            />
          ) : (
            <img
              src="/images/logo.png"
              alt="Offer image"
              className={styles.defaultImage}
            />
          )}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={navigateToBookingList}>Zarezerwuj</button>
          <button onClick={navigateToOffers}>Wróć do ofert</button>
        </div>
      </div>
    </div>
  );
};

export default BigOfferCard;
