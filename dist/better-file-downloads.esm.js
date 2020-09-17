var download = function download(blob, fileInfo) {
  if (typeof window.navigator.msSaveOrOpenBlob === 'function') {
    window.navigator.msSaveBlob(blob, "" + fileInfo.fileName + fileInfo.extension);
  } else {
    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = "" + fileInfo.fileName + fileInfo.extension;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
  }
};

var downloadAUrl = function downloadAUrl(fileUrl, fileInfo, accessToken) {
  try {
    var headers = new Headers({
      "Authorization": "Bearer " + accessToken
    });
    return Promise.resolve(fetch(fileUrl, {
      method: 'GET',
      headers: headers
    })).then(function (response) {
      return Promise.resolve(response.blob()).then(function (data) {
        download(data, fileInfo);
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
var downloadABlob = function downloadABlob(fileContent, fileInfo) {
  var blob = new Blob([fileContent], {
    type: fileInfo.contentType
  });
  download(blob, fileInfo);
};

export { downloadABlob, downloadAUrl };
//# sourceMappingURL=better-file-downloads.esm.js.map
