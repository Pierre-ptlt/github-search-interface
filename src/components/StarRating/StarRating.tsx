import React from "react";
import { IconButton } from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import Star from "@mui/icons-material/Star";
import "./StarRating.css";

interface StarRatingProps {
  currentRating: number;
  onRate: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  currentRating,
  onRate,
}) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((rating) => (
        <IconButton
          className="star__icon"
          onClick={() => onRate(rating)}
          key={rating}
        >
          {rating <= currentRating ? <Star /> : <StarBorder />}
        </IconButton>
      ))}
    </div>
  );
};

export default StarRating;
