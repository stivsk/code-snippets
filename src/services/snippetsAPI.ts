/* eslint-disable prefer-promise-reject-errors */
import { ISnippetsEntity } from '../interfaces/ISnippetsEntity';

// A mock function to mimic making an async request for data
export const fetchSnippets = () =>
  new Promise<{ data: ISnippetsEntity }>((resolve, reject) =>
    fetch('./snippetsData.json')
      .then(response => response.json())
      .then(data => setTimeout(() => resolve({ data }), 500))
      .catch(error =>
        reject({
          data: error,
        })
      )
  );
