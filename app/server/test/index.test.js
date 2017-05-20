const chai = require('chai')
const chaiHTTP = require('chai-http')

const assert = chai.assert
const server = require('../app')
const { Translation, Comment } = require('../models')

chai.use(chaiHTTP)

describe('Translations', () => {
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
        request: 'The Lord of the Rings',
        context: 'Big fan',
        language: 'ar'
      }
      chai.request(server)
          .post('/translations')
          .send(translation)
          .end((err, res) => {
            assert.isObject(res.body)
            assert(Object.keys(res.body).length === 0)
            done()
          })
    })
  })
})

describe('Comments', () => {
  describe('/POST Comment', () => {
    it('it should not POST a comment without every field', done => {
      const comment = {
        content: 'The Lord of the Rings',
        UserId: '2'
      }
      chai.request(server)
          .post('/comments')
          .send(comment)
          .end((err, res) => {
            assert.isObject(res.body)
            assert(Object.keys(res.body).length === 0)
            done()
          })
    })
  })
  describe('/GET Comment', () => {
    it('it should not GET a comment without providing appropriate field', done => {
      const comment = {
        jim: '2'
      }
      chai.request(server)
          .get('/comments')
          .send(comment)
          .end((err, res) => {
            assert.isObject(res.body)
            assert(Object.keys(res.body).length === 0)
            done()
          })
    })
  })
})

describe('Answers', () => {
  describe('/POST Answer', () => {
    it('it should not POST an answer without every field', done => {
      const answer = {
        content: 'The Lord of the Rings',
        UserId: '2'
      }
      chai.request(server)
          .post('/answers')
          .send(answer)
          .end((err, res) => {
            assert.isObject(res.body)
            assert(Object.keys(res.body).length === 0)
            done()
          })
    })
  })
  describe('/GET Answer', () => {
    it('it should not GET a answer without providing appropriate field', done => {
      const answer = {
        jim: '2'
      }
      chai.request(server)
          .get('/answers')
          .send(answer)
          .end((err, res) => {
            assert.isObject(res.body)
            assert(Object.keys(res.body).length === 0)
            done()
          })
    })
  })
})
