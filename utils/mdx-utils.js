import { api, doPostRequest } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  const { data } = await api.get(`/posts?id=eq.${id}`);

  return data[0];
};

export const postUserPost = (obj) => {
  api
    .post('/posts', obj)
    .then(function (response) {
      alert('Post enviado!');
    })
    .catch(function (error) {
      alert('Erro ao enviar o post!');
    });
};
