import React from "react";
import { Star } from "lucide-react";

export default function Stars({ rating = 4.6 }: { rating?: number }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star < Math.round(rating) ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}