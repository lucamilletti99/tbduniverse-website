import https from './http-common';

class JokesDataService {
  get(choice: string) {
    console.log("choice" + choice);
    if(choice == "1"){
      return https.get(`/joke`);
    }
    else return https.get(`/noJoke`);
    
  }
  create(data: any) {
    return https.post('/joke', data);
  }
}
export default new JokesDataService();