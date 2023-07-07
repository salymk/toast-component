import React from "react";

export default function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.code === key) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [key, callback]);
}
