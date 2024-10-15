import React, { useEffect } from "react";
import Review from "../components/Review";

function ReviewPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Review />
    </div>
  );
}

export default ReviewPage;
