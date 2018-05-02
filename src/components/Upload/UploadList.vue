<template>
  <ListView for="(upload, index) in uploads" separatorColor="transparent">
    <v-template>
      <StackLayout class="upload">
        <UploadProgress :upload="upload" :index="uploads.length - index - 1" v-if="upload.loading" />
        <UploadCard :upload="upload" :index="uploads.length - index - 1" v-else-if="!upload.loading" />
      </StackLayout>
    </v-template>
  </ListView>
</template>

<script>
  import UploadCard from './UploadCard';
  import UploadProgress from './UploadProgress';

  export default {
    components: {
      UploadCard,
      UploadProgress,
    },
    computed: {
      uploads () {
        return this.$store.getters.reverseUploads;
      },
    },
  };
</script>

<style scoped>
  ListView {
    margin: 16;
  }

  .upload {
    padding-bottom: 15;
  }
</style>
