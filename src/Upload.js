import * as bghttp from 'nativescript-background-http';

const uploadFile = (file, genDeletion) => {
  const session = bghttp.session('image-upload');
  // Request parameters
  const req = {
    url: 'https://api.teknik.io/v1/Upload',
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  };
  // Begin upload
  return session.multipartUpload(
    [
      { name: 'file', filename: file },
      { name: 'genDeletionKey', value: genDeletion.toString() },
    ],
    req,
  );
};

export { uploadFile };
