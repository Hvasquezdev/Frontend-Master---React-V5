import React, { ErrorInfo } from "react";
import { Link, Redirect } from "@reach/router";

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean,
  redirect: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error: ", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go to the home page or wait 5 seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
