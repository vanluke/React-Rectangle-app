import request from 'superagent';
import Rectangle from 'output/model';
import config from 'config/config.json';
import rectangleTemplate from 'gallery/rectangle.template.json';

const rectanglesUrl = `${config.api.url}/rect`;

const createEmptyRectangle = template => JSON.parse(JSON.stringify(template));

export const postRectangle = () => {
  const rect = createEmptyRectangle(rectangleTemplate);
  return new Promise((resolve, reject) => {
    request
      .post(rectanglesUrl)
      .send(rect)
      .end((error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(Rectangle(response.body));
      });
  });
};

export const getRectangles = () => (new Promise((resolve, reject) => {
  request
  .get(rectanglesUrl)
  .set('accept', 'application/json')
  .set('content-type', 'application/json')
  .end((error, response) => {
    if (error) {
      return reject(error);
    }
    return resolve(response.body.map(r => Rectangle(r)));
  });
}));

export const putRectangles = (id, rectangle) => (new Promise((resolve, reject) => {
  request
  .put(`${rectanglesUrl}/${id}`)
  .send(rectangle)
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .end((error, response) => {
    if (error) {
      return reject(error);
    }
    return resolve(response.body);
  });
}));

export const deleteRectangle = id => (new Promise((resolve, reject) => {
  request
  .del(`${rectanglesUrl}/${id}`)
  .end((error, response) => {
    if (error) {
      return reject(error);
    }
    return resolve(response.body);
  });
}));
