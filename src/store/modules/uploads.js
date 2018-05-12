import * as fs from 'tns-core-modules/file-system';

// tekdroid folder path
const tekdroidPath = fs.path.join(
  android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString(),
  'tekdroid',
);
const tekdroidDir = fs.Folder.fromPath(tekdroidPath);

const state = {
  uploads: [],
};

const getters = {
  reverseUploads (state) {
    return state.uploads.slice().reverse();
  },
};

const mutations = {
  loadUploads (state, uploads) {
    // Remove unfinished uploads
    state.uploads = uploads.filter(upload => !upload.loading);
  },
  startUpload (state) {
    state.uploads.push(
      {
        loading: true,
        status: 'Uploading...',
        progress: 0,
        fileUrl: '',
        deletionUrl: '',
        uploadTime: new Date(),
      },
    );
  },
  updateProgress (state, data) {
    state.uploads[data.index].progress = data.progress;
    if (data.progress >= 95) {
      state.uploads[data.index].status = 'Finalizing...';
    }
  },
  finishUpload (state, data) {
    state.uploads[data.index].loading = false;
    state.uploads[data.index].fileUrl = data.fileUrl;
    state.uploads[data.index].deletionUrl = data.deletionUrl;
    state.uploads[data.index].progress = 100;
  },
  deleteUpload (state, index) {
    state.uploads.splice(index, 1);
  },
};

const actions = {
  loadUploads (context) {
    // Check if file exists
    if (fs.File.exists(fs.path.join(tekdroidDir.path, 'uploads.json'))) {
      const file = tekdroidDir.getFile('uploads.json');
      file.readText()
        .then(content => {
          context.commit('loadUploads', JSON.parse(content));
          // Save uploads in case any were removed
          context.dispatch('saveUploads');
        });
    }
  },
  saveUploads (context) {
    const file = tekdroidDir.getFile('uploads.json');
    file.writeText(JSON.stringify(context.state.uploads, null, 4));
  },
  async startUpload (context) {
    return new Promise(async (resolve, reject) => {
      await context.commit('startUpload');
      resolve(context.state.uploads.length - 1);
    });
  },
  updateProgress (context, data) {
    context.commit('updateProgress', data);
  },
  finishUpload (context, data) {
    context.commit('finishUpload', data);
  },
  deleteUpload (context, index) {
    context.commit('deleteUpload', index);
    context.dispatch('saveUploads');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
