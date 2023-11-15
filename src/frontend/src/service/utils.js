export class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export const handleApiError = async (response) => {
  const data = await response.json();
  console.error(data.detail);
  throw new HttpError(data.detail, response.status);
};
