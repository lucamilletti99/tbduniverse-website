import https from './http-common';

class JokesDataService {
  get(id: number) {
    return https.get(`/joke/${id}`);
  }

  create(data: any) {
    return https.post('/newPerson', data);
  }
}
export default new JokesDataService();