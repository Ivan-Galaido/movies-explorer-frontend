export default class Api {
  constructor({ baseUrl, headers, credentials = "" }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }



  async _handleResponse(response) {
    const description = await response.json();

    if (response.ok) {
      return description;
    } else {
      return Promise.reject({
        status: response.status,
        message: description.message
                 ? description.message
                 : description.error
                   ? description.error
                   : "Что-то пошло не так!\nПопробуйте ещё раз.",
      });
    }
  }
}
