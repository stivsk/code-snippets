/* eslint-disable prefer-promise-reject-errors */
export function fetchCount() {
  return new Promise<{ data: number }>((resolve, reject) =>
    fetch('./counterData.json')
      .then(response => response.json())
      .then(data => setTimeout(() => resolve({ data: data.amount }), 1000))
      .catch(error =>
        reject({
          data: error,
        })
      )
  );
}
