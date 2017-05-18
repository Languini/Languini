const chai = require('chai')
const chaiHTTP = require('chai-http')

const should = chai.should()
const server = require('../app')
const { Translation } = require('../models')

chai.use(chaiHTTP)

describe('Translations', () => {
  beforeEach((done) => {
    Translation.destroy({
      where: ''
    }, err => {
      done()
    })
  })
  describe('/GET Translations', () => {
    it('it should GET all the translations', done => {
      chai.request(server)
        .get('/api/translation')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })
  })
})
