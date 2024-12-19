const Error = ({ error }) => {
  let errorMessage;

  error
    ? (errorMessage = ` ${error.status} ${error.response.data.msg}`)
    : (errorMessage =
        "We couldn't find the page you were looking for. Please check you URL.");

  return (
    <div className="error-display">
      <h2>Whoops! There seems to be a problem</h2>
      <pre>{errorMessage}</pre>
    </div>
  );
};

export default Error;
