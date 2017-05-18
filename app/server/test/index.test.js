const chai = require('chai')
const chaiHTTP = require('chai-http')

const assert = chai.assert
const server = require('../app')
const { Translation } = require('../models')

chai.use(chaiHTTP)

describe('Translations', () => {
  beforeEach(async () => {
    await Translation.destroy({
      where: {
        id: {
          $gte: 1
        }
      }
    })
  })
  describe('/GET Translations', () => {
    it('it should GET all the translations', done => {
      chai.request(server)
        .get('/api/translation')
        .end((err, res) => {
          assert.isObject(res.body)
          assert(Object.keys(res.body).length === 0)
          done()
        })
    })
  })
  describe('/POST Translation', () => {
      it('it should not POST a translation without every field', done => {
        const translation = {
            request: "The Lord of the Rings",
            context: "Big fan",
            language: 'ar'
        }
        chai.request(server)
          .post('/translations')
          .send(translation)
          .end((err, res) => {
            assert.isObject(res.body)
            assert(Object.keys(res.body).length === 0)
            done();
          });
      });
  });
})
