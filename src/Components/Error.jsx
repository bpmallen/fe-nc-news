const Error = ({ error }) => {
  return (
    <div className="error-display">
      <h2>Whoops! There seems to be a problem</h2>
      <p>An error occured while trying to fetch data:</p>
      <pre>
        {error.status} {error.response.data.msg}
      </pre>
    </div>
  );
};

export default Error;
