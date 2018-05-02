<template>
  <Page class="page">
    <StackLayout>
      <Upload />
      <UploadList />
    </StackLayout>
  </Page>
</template>

<script>
  import * as Dialogs from 'tns-core-modules/ui/dialogs';
  import * as Permissions from 'nativescript-permissions';

  import Upload from './Upload';
  import UploadList from './UploadList';

  export default {
    components: {
      Upload,
      UploadList
    },
    created () {
      Permissions.requestPermissions(
        [
          android.Manifest.permission.READ_EXTERNAL_STORAGE,
          android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
        ],
        "tekdroid needs permission to save your uploads.",
      )
        .then(() => {
          this.$store.dispatch('loadUploads');
        })
        .catch(() => {
          Dialogs.alert('Uploads will not be saved.');
        });
    },
  };
</script>
