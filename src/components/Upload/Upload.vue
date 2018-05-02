<template>
  <StackLayout>
    <Button @tap="upload" class="btn btn-primary" text="Upload" />
  </StackLayout>
</template>

<script>
  import { pickFile } from '../../PickFile.js';
  import { uploadFile } from '../../Upload.js';

  export default {
    methods: {
      upload () {
        // Pick file(s)
        pickFile(async selections => {
          for (const selection of selections) {
            // Create loading upload
            const index = await this.$store.dispatch('startUpload');

            // Upload file
            const task = uploadFile(selection.android, true);

            task.on('progress', e => {
              // Update upload progress
              this.$store.dispatch('updateProgress', {
                index,
                progress: Math.round((e.currentBytes / e.totalBytes) * 100),
              });
            });
            task.on('error', e => console.log(`upload error: ${JSON.stringify(e)}`));
            task.on('responded', res => {
              // Get data
              const fileData = JSON.parse(res.data).result;
              // Finish upload
              const data = {
                index,
                fileUrl: fileData.url,
                deletionUrl: `${fileData.url}/${fileData.deletionKey}`,
              };
              this.$store.dispatch('finishUpload', data);
              this.$store.dispatch('saveUploads');
            });
          }
        });
      },
    },
  };
</script>

<style scoped>
  Button {
    margin-bottom: 0;
  }
</style>
