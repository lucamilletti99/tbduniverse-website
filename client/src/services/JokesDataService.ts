import https from './http-common';

class JokesDataService {
  get(choice: string) {
    console.log("choice" + choice);
    if(choice == "1"){
      return https.get(`/noJoke`);
    }
    else return https.get(`/joke`);
    
  }
  create(data: any) {
    return https.post('/jokeSubmit', data);
  }
  getMsg(){
    return https.get('/loginPage');
  }
}
export default new JokesDataService();