import * as React from "react";
import { toast } from "react-hot-toast";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      errorInfo: undefined,
      hasError: false,
    };
  }

  //   static getDerivedStateFromError() {
  //     toast.error(
  //       "Lo sentimos, ha ocurrido un error. Por favor intente de nuevo.",
  //       {}
  //     );
  //     return { hasError: true };
  //   }

  componentDidCatch(error, errorInfo) {
    toast.error(
      "Lo sentimos, ha ocurrido un error. Por favor intente de nuevo."
    );
    console.log(errorInfo.componentStack);
    this.setState({
      hasError: true,
      erorr: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <>
          <h1>Ha ocurrido un error</h1>
          <button
            type="button"
            onClick={() =>
              this.setState({
                hasError: undefined,
              })
            }
          >
            Reintentar
          </button>
        </>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
