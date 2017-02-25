import get from 'lodash/get';
import isFunction from 'lodash/isFunction';

import constants from '../constants';
import addFileToCollection from '../utils/addFileToCollection';
import applyBaseFile from '../utils/applyBaseFile';
import applyFileRenames from '../utils/applyFileRenames';
import applyTemplate from '../utils/applyTemplate';
import prepareProps from '../utils/prepareProps';
import preserveRawContents from '../utils/preserveRawContents';
import removeFileFromCollection from '../utils/removeFileFromCollection';

const noTemplate = (files, data, name, debug) => {
  addFileToCollection(files)({
    data,
    name,
    options: {debug}
  });
}

const callbackOrThrow = (err, done) => {
  if (isFunction(done)) {
    done(err.message);
    return;
  }
  throw new Error(err);
}

function processor(files, context, options) {
  return (filename, done) => {
    const data = get(files, filename, {});

    if (!data) {
      callbackOrThrow(`Cannot find ${filename} in the file object`, done);
      return;
    }

    return Promise.resolve({
        context,
        options,
        data,
        name: filename
      })
      .then(removeFileFromCollection(files))
      .then(preserveRawContents)
      .then(prepareProps)
      .then(applyTemplate)
      .then(applyBaseFile)
      .then(applyFileRenames)
      .then(addFileToCollection(files))
      .then(() => done())
      .catch((err) => {
        if (err.message === constants.TEMPLATE_NOT_DEFINED) {
          options.debug(`[${filename}] Template not defined`);
          noTemplate(files, data, filename, options.debug);
        }

        callbackOrThrow(err, done);
      });
  };
}

export default processor;
