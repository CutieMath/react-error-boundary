import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    alert("Something went wrong, please refresh the page or try again later.");
    console.log("Logging: ", error, errorInfo);
  }

  render() {
    // if (this.state.hasError) {
    //   return (
    //     <h1>
    //       Ops.. Something went wrong, please refresh the page or try again
    //       later.
    //     </h1>
    //   );
    // }

    return this.props.children;
  }
}
