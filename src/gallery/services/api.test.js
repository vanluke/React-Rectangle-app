import { expect } from 'chai';
import sinon from 'sinon';
import {
  getRectangles,
  putRectangles,
  deleteRectangle,
  postRectangle,
} from './api';

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
  });
});
