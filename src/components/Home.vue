<template>
  <StackLayout>
    <TabView>

      <TabViewItem title="Upload">
        <UploadTab />
      </TabViewItem>

      <TabViewItem title="About">
        <AboutTab />
      </TabViewItem>

    </TabView>
  </StackLayout>
</template>

<script>
  import AboutTab from './AboutTab';
  import UploadTab from './Upload/UploadTab';

  export default {
    components: {
      AboutTab,
      UploadTab,
    },
  };
</script>
