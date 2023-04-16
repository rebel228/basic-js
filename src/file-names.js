const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let endNames = names;
  let files = {};
  for (let i = 0; i < endNames.length; i++) {
    if (endNames[i] in files) files[endNames[i]] = files[endNames[i]] + 1;
    else files[endNames[i]] = 0;
  }
  console.log(files);
  for (let i = endNames.length - 1; i >= 0; i--) {
    //console.log('hello')
    let currentFileName = endNames[i];
    if (files[currentFileName] > 0) {
      endNames[i] = `${currentFileName}(${files[currentFileName]})`;
      files[currentFileName] = files[currentFileName] - 1;
      console.log(files);
    }
  }
  const dups = new Set(endNames);
  if (endNames.length !== dups.size) renameFiles(endNames);
  return endNames;
}


console.log('result : ',renameFiles (["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles
};
