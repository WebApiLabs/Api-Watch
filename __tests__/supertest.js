const { response } = require('express');
const request = require('supertest');

const server = 'http://localhost:3000';


describe('Route integration', () => {
    describe('/search', () => {
        describe('POST', () => {

            xit('responds with 200 status and application/json content type', () => {
                return request(server)
                .post('/search')
                .expect('Content-Type', /application\/json/)
                .expect(200);
            })

            xit('The Response Body should contain an array', () => {
                return request(server)
                .post('/search')
                .send({"updatedString": 'dune'})
                .expect(200)
                .then(response => {
                    // console.log(response)
                    return(expect(response.body).toBeInstanceOf(Array));
                })
            });
        })
    })

    describe('/signup', () => {
        describe('POST', () => {
            const user = {username: 'Joe', password: 'hello'};
            
            xit('The Server responds with an SSID cookie after a sucesfully sign up', () => {
                return request(server)
                .post('/signup')
                .send(user)
                .expect(200)
                .then( response => {
                    // console.log(response);
                    return( expect( response.headers['set-cookie'][0].slice(0, 4) ).toEqual('ssid') )
                })
            });

            it('The server responds with an error when creating an already existing user', () => {
                return request(server)
                .post('/signup')
                .send(user)
                .expect(500)
            })
        })  
    })
})