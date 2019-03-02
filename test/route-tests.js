'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const should = chai.should()

chai.use(chaiHttp)

describe('GET /', () => {
    it('it should respond with HTTP 200', (done) => {
    chai.request(app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
})

describe('GET /users', () => {
    it('it should respond with HTTP 200', (done) => {
    chai.request(app)
        .get('/users')
        .end((err, res) => {
            res.should.have.status(200)
            done()
        })
    })
})