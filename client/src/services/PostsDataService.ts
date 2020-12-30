import https from './http-common';

class PostsDataService {
  getAll() {
    return https.get('/posts');
  }

  get(id: number) {
    return https.get(`/posts/${id}`);
  }

  create(data: any) {
    return https.post('/posts', data);
  }

  update(id: string, data: any) {
    return https.put(`/posts/${id}`, data);
  }

  delete(id: number) {
    return https.delete(`/posts/${id}`);
  }
}

export default new PostsDataService();
