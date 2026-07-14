import { useState } from "react";

const MIN_LOADING_TIME = 700;

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function useLoadingAction() {
  const [loadingMessage, setLoadingMessage] = useState("");

  const isLoading = Boolean(loadingMessage);

  async function runWithLoading(message: string, action: () => Promise<void>) {
    if (loadingMessage) return;

    setLoadingMessage(message);

    const startTime = Date.now();

    try {
      await action();
    } finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);

      if (remainingTime > 0) {
        await wait(remainingTime);
      }

      setLoadingMessage("");
    }
  }

  return {
    loadingMessage,
    isLoading,
    runWithLoading,
  };
}
