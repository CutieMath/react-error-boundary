import { useState } from "react";

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      // do something
      alert("An error occurred!");
    }
  }, [hasError]);

  return props.children;
};

export default ErrorBoundary;
