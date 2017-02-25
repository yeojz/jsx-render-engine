import {expect} from 'chai';
import path from 'path';
import reactTemplates from 'src/strategy/reactTemplates';

const file = path.join(__dirname, '..', 'fixtures', 'Default.jsx');

function templateReader() {
  return require(file).default;
}

describe('reactTemplates', function () {
  it('should throw an error when no component passed', function (done) {
    reactTemplates({}, {}, null)
      .then(() => {
        done(new Error('should be an error'));
      })
      .catch((err) => {
        expect(err).to.be.an('error');
        done();
      });
  });

  it('should return a result without react-id', function (done) {
    reactTemplates({}, {isStatic: true}, templateReader)
      .then((result) => {
        expect(result.toString().match(/data-reactid/)).to.eql(null);
        expect(result.toString().match(/data-react-checksum/)).to.eql(null);
        done();
      })
      .catch((err) => done(err));
  });

  it('should return a result with react-id', function (done) {
    reactTemplates({}, {isStatic: false}, templateReader)
      .then((result) => {
        expect(result.toString().match(/data-reactid/)).to.have.length.gt(0);
        expect(result.toString().match(/data-react-checksum/)).to.have.length.gt(0);
        done();
      })
      .catch((err) => done(err));
  });

});
