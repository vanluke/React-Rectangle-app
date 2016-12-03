import { expect } from 'chai';
import nock from 'nock';
import sinon from 'sinon';
import {
  getRectangles,
  putRectangles,
  deleteRectangle,
  postRectangle,
  createEmptyRectangle,
} from 'gallery/services/api';
import config from 'config/config.json';
import rectangleTemplate from 'gallery/rectangle.template.json';

describe('Gallery', () => {
  let getRequest;
  let postRequest;
  let putRequest;
  let deleteRequest;
  before(() => {
    getRequest = sinon.spy(getRectangles);
    putRequest = sinon.spy(putRectangles);
    deleteRequest = sinon.spy(deleteRectangle);
    postRequest = sinon.spy(postRectangle);
  });

  describe('services', () => {
    it('get rectagles called', () => {
      getRequest();

      // eslint-disable-next-line no-unused-expressions
      expect(getRequest.called).to.be.true;
    });

    it('post rectagles called', () => {
      postRequest();

      // eslint-disable-next-line no-unused-expressions
      expect(postRequest.called).to.be.true;
    });

    it('putRectangles called', () => {
      putRequest();

      // eslint-disable-next-line no-unused-expressions
      expect(putRequest.called).to.be.true;
    });

    it('deleteRectangle called', () => {
      deleteRequest();

      // eslint-disable-next-line no-unused-expressions
      expect(deleteRequest.called).to.be.true;
    });

    it('should edit rectangle', async () => {
      const editRectangle = {
        ...rectangleTemplate,
        background: '#fff',
      };
      nock(config.api.url)
      .put('/rect/1')
      .reply(201, ...rectangleTemplate);

      const response = await putRectangles(1, editRectangle);

      // eslint-disable-next-line no-unused-expressions
      expect(response).to.be.empty;
    });

    it('should create rectangle', async () => {
      const rect = createEmptyRectangle(rectangleTemplate);
      nock(config.api.url)
        .post('/rect', rect)
        .reply(201, rect);

      const response = await postRectangle();
      // eslint-disable-next-line no-unused-expressions
      expect(response).to.not.be.empty;
      expect(response).to.have.property('id', '1');
    });


    it('should delete rectagle', async () => {
      nock(config.api.url)
        .delete('/rect/1')
        .reply(202);

      const response = await deleteRequest(1);
      // eslint-disable-next-line no-unused-expressions
      expect(response).to.be.empty;
    });

    it('should returns rectagles', async () => {
      nock(config.api.url)
        .get('/rect')
        .reply(201, [rectangleTemplate, rectangleTemplate]);

      const response = await getRectangles();
      expect(response).to.have.deep.property('[0].id', '1');
    });
  });
});
