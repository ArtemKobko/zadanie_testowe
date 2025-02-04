import React from "react";
import styles from "./BookingCard.module.scss";
import { Booking } from "../../../types";

interface BookingCardProps {
  booking: Booking;
}

const BookingCard = ({ booking }: BookingCardProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Numer rezerwacji: {booking.id}</h2>
      <div className={styles.booking}>
        <div className={styles.info}>
          <p>
            <b>Daty wycieczki</b>:{" "}
            {new Date(booking.start_date).toLocaleDateString()} -{" "}
            {new Date(booking.end_date).toLocaleDateString()}
          </p>

          <p>
            <b>Klient:</b> {booking.parent.full_name}, {booking.parent.email},{" "}
            {booking.parent.phone}
            <br />
            <b>Adres:</b> {booking.parent.postcode} {booking.parent.city},{" "}
            {booking.parent.street}
            {booking.parent.street_number}
          </p>

          <div>
            <b>Uczestnicy:</b>
            {booking.participants.map((participant, index) => (
              <p key={index}>
                {participant.full_name} -{" "}
                {new Date(participant.birth_date).toLocaleDateString()}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.paymentDetails}>
          <h4>Dane płatnicze</h4>
          <div>
            <p className={styles.totalPrice}>
              <b>Cena za osobe :</b>{" "}
              <span>
                {booking.base_price_per_person} {booking.currency}
              </span>
            </p>
            <p className={styles.totalPrice}>
              <b>Cena całkowita :</b>{" "}
              <span>
                {booking.total_price} {booking.currency}{" "}
              </span>
            </p>
          </div>
          <p>
            {" "}
            <b>Status płatności:</b> {booking.payment_status}
          </p>
          <i>
            {booking.status_label} {booking.advance_payment_price}{" "}
            {booking.currency}
          </i>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
