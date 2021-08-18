import { IHtmlCodeSnippetsEntity } from '../interfaces/IHtmlCodeSnippetsEntity';

const SERVICE_DIRECTION = 'http://localhost:3000/htmlSnippetsData.json';

const FAKE_SERVICE_TIMEOUT = 1000;

// A mock function to mimic making an async request for HTML snippets data
export const fetchSnippets = () =>
  new Promise<{ data: IHtmlCodeSnippetsEntity }>(
    (resolveRequest, rejectRequest) =>
      fetch(SERVICE_DIRECTION)
        .then(response => response.json())
        .then(data =>
          setTimeout(() => resolveRequest({ data }), FAKE_SERVICE_TIMEOUT)
        )
        .catch(error => rejectRequest(new Error(error)))
  );
