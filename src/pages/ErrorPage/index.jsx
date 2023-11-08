import { useRouteError } from 'react-router-dom';
import { GlobalStyleError } from '../../global/globalStyle';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <GlobalStyleError />
      <div
        id="error-page"
        style={{ backgroundColor: '#232426', color: 'aliceblue' }}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
