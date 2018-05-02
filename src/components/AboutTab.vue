<template>
  <Page class="page">
    <StackLayout>
      <WrapLayout>
        <Label text="tekdroid v" />
        <Label :text="version" />
      </WrapLayout>
      <WrapLayout id="data">
        <Label text="Data directory: " />
        <Label :text="dataDir" />
      </WrapLayout>
      <Label text="Made by Ivan Fonseca <3" />
      <Label text="https://github.com/IvanFon/tekdroid" />
    </StackLayout>
  </Page>
</template>

<script>
  import * as application from 'application';
  import * as fs from 'tns-core-modules/file-system';

  export default {
    computed: {
      dataDir () {
        return fs.path.join(
          android.os.Environment.getExternalStorageDirectory()
            .getAbsolutePath()
            .toString(),
          'tekdroid'
        );
      },
      version () {
        return application.android.context.getPackageManager()
          .getPackageInfo(
            application.android.context.getPackageName(), 0
          ).versionName;
      }
    },
  };
</script>

<style scoped>
  StackLayout {
    margin: 10 20;
    color: white;
    text-align: center;
  }

  WrapLayout#data {
    margin-bottom: 20;
  }
</style>
