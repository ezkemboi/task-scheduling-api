import chai, { expect } from 'chai';
import chaHttp from 'chai-http';
import app from '../src/app';

chai.use(chaHttp);

describe("Return App", () => {
    it('should return success on / url', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    })
})
