type Media = {
  id: string;
  url: string;
  width: number;
  height: number;
  provider: string;
};

type Location = {
  city: string;
  province: string;
};

export interface Offer {
  id: string;
  name: string;
  description: string;
  price_description: string;
  min_price: number;
  max_price: number;
  food_description: string;
  food_type: string;
  location: Location;
  status: string;
  created_at: string;
  transport_type: string;
  media: Media[];
  min_trip_start_date: string | null;
  max_trip_end_date: string | null;
  food_diets: string[];
}

export interface Booking {
  id: string;
  status: string;
  start_date: string;
  end_date: string;
  total_price: number;
  advance_payment_price: number;
  base_price_per_person: number;
  payment_status: string;
  status_label: string;
  transport_type: string;
  food_diets: string[];
  special_requests: string | null;
  currency: string;
  participants: participant[];
  parent: perent;
}

type participant = {
  full_name: string;
  birth_date: string;
  city: string;
};

type perent = {
  id: string;
  full_name: string;
  email: string;
  city: string;
  phone: string;
  postcode: string;
  province: string;
  street: string;
  street_number: string;
};
