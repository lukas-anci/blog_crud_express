export default class MyFetch {
  static baseUrl = '/api/blog';
  static ownersUrl = '/api/owners';

  static searchOwners(searchTermJson, successCallBack) {
    console.log('search owners');

    fetch(MyFetch.ownersUrl + '/search', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: searchTermJson,
    })
      .then((res) => res.json())
      .then((dataInJs) => successCallBack(dataInJs))
      .catch((err) => console.error(err.message));
  }

  static async getPosts() {
    const res = await fetch(MyFetch.baseUrl);
    const data = await res.json();
    return data;
  }
  //kitas budas bet daro tapati
  //data turi buti paduota json formatu
  static createPost(data, successCallback) {
    fetch(MyFetch.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        successCallback(data);
      });
  }

  static deletePost(id, successCallBack) {
    fetch(MyFetch.baseUrl + '/' + id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => successCallBack(data));
  }

  static updatePost(data, successCallBack) {
    fetch(MyFetch.baseUrl, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => successCallBack(data));
  }

  static createOwner(data, successCallback) {
    fetch('api/owners', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        successCallback(data);
      });
  }
}
