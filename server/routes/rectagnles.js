import assert from 'assert';
import parse from 'co-body';
import config from './../../server.config';
import { MongoClient, ObjectId } from './../mongo-client';

const mongoDbConfig = config.get('mongoDb');

const connect = (cb, params) => new Promise((resolve, reject) => {
  MongoClient.connect(mongoDbConfig.uri, (err, db) => {
    assert.equal(null, err);
    cb(db, params)
    .then((result) => {
      db.close();
      resolve(result);
    }).catch((error) => {
      db.close();
      reject(error);
    });
  });
});

const updateRectangleDocument = (db, rectangle) => {
  /* eslint no-underscore-dangle: 0 */
  const id = new ObjectId(rectangle._id);
  return new Promise((resolve, reject) => {
    db.collection('rectagnles')
    .update({ _id: id }, {
      $set: {
        background: rectangle.background,
        width: rectangle.width,
        height: rectangle.height,
        borderRadius: rectangle.borderRadius,
      },
    },
    rectangle, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const appendRectagnleId = (rectangle, results) =>
  Object.assign({}, rectangle, { _id: results.insertedId });

const insertRectangleDocument = (db, rectangle) =>
  new Promise((resolve, reject) => {
    db.collection('rectagnles')
    .insertOne(rectangle, (err, results) => {
      if (err) {
        reject(err);
      }
      const rectResp = appendRectagnleId(rectangle, results);
      resolve(rectResp);
    });
  });

const getFromServer = db => new Promise((resolve) => {
  resolve(db.collection('rectagnles').find().toArray());
});

const deleteDocument = (db, id) => {
  const objectId = new ObjectId(id);
  return new Promise((resolve, reject) => {
    db.collection('rectagnles')
    .deleteOne({ _id: objectId }, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const putRectangle = async function httpPut() {
  const body = await parse(this);
  const response = await connect(updateRectangleDocument, body);
  this.body = response;
  this.status = 201;
};

const deleteRectangle = async function httpDelete() {
  const id = this.params.id;
  if (!id) {
    this.status = 404;
    return;
  }
  await connect(deleteDocument, id);
  this.status = 204;
};

const getAllRectangles = async function httpGet() {
  const response = await connect(getFromServer);
  this.body = response;
  this.status = 201;
};

const postRectangle = async function httpPost() {
  const body = await parse(this);
  const response = await connect(insertRectangleDocument, body);
  this.body = response;
  this.status = 201;
};

export { getAllRectangles, putRectangle, deleteRectangle, postRectangle };
