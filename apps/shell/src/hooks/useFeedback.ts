import { useState } from "react";

type FeedbackType = "success" | "error";

type Feedback = {
  open: boolean;
  message: string;
  type: FeedbackType;
};

const initialFeedback: Feedback = {
  open: false,
  message: "",
  type: "success",
};

export function useFeedback() {
  const [feedback, setFeedback] = useState<Feedback>(initialFeedback);

  function showFeedback(message: string, type: FeedbackType = "success") {
    setFeedback({
      open: true,
      message,
      type,
    });
  }

  function closeFeedback() {
    setFeedback((currentFeedback) => ({
      ...currentFeedback,
      open: false,
    }));
  }

  return {
    feedback,
    showFeedback,
    closeFeedback,
  };
}