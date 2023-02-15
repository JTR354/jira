import React from "react";

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback: (error: Error) => React.ReactElement }>,
  {
    error: Error | undefined;
  }
> {
  state = { error: undefined };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error) {
    if (error) {
      this.setState({ error });
    }
  }
  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;
    if (error && fallback) {
      return fallback(error);
    }
    return children;
  }
}
