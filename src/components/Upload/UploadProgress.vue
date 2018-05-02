<template>
  <GridLayout rows="*" columns="*, 2*" class="upload-card">
    <ActivityIndicator row="0" col="0" busy="true" />
    <StackLayout row="0" col="1" class="loading">
      <Label :text="upload.status" />
      <Progress :value="upload.progress" />
    </StackLayout>
  </GridLayout>
</template>

<script>
  export default {
    props: {
      upload: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style scoped>
  Label {
    horizontal-align: center;
  }

  StackLayout.loading {
    vertical-align: center;
  }

  ActivityIndicator {
    horizontal-align: center;
    vertical-align: center;
    width: 35;
  }

  Progress {
    margin: 0 35;
  }
</style>
