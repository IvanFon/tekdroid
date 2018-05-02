<template>
  <GridLayout rows="*" columns="*, 2*" class="upload-card">
    <ImageCacheIt row="0" col="0" width="100%" height="85" stretch="aspectFill" borderRadius="5" :imageUri="upload.fileUrl" v-if="['png', 'jpg', 'jpeg', 'bmp', 'gif'].includes(extension)" />
    <Label row="0" col="0" height="85" :text="extension" v-else />
    <StackLayout row="0" col="1" class="info">
      <Label :text="upload.fileUrl.replace('https://', '')" />
      <GridLayout rows="*, *" columns="2*, 4*, *, 4*, 2*" class="actions">
        <Button row="0" col="1" class="fa upload-action copy" @tap="copy(upload.fileUrl)" :text="'fa-copy' | fonticon" />
        <Button row="0" col="3" class="fa upload-action share" @tap="share(upload.fileUrl)" :text="'fa-share-alt' | fonticon" />
        <Button row="1" col="1" class="fa upload-action info" @tap="info" :text="'fa-info-circle' | fonticon" />
        <Button row="1" col="3" class="fa upload-action delete" @tap="del(index)" :text="'fa-close' | fonticon" />
      </GridLayout>
    </StackLayout>
  </GridLayout>
</template>

<script>
import { android as AndroidApp } from 'application';
  import * as Clipboard from 'nativescript-clipboard';
  import * as Dialogs from 'tns-core-modules/ui/dialogs';
  import * as SocialShare from 'nativescript-social-share';
  import * as Toast from 'nativescript-toast';
  import * as http from 'http';

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
    computed: {
      extension () {
        // Return file extension or file name if no extension
        return (/[^./\\]*$/.exec(this.upload.fileUrl) || '')[0];
      },
    },
    methods: {
      copy (val) {
        Clipboard.setText(val);
        Toast.makeText('URL Copied').show();
      },
      share (val) {
        SocialShare.shareUrl(val, 'tekdroid upload');
      },
      info () {
        const alert = new android.app.AlertDialog.Builder(AndroidApp.foregroundActivity);
        alert.setTitle('Upload Info');
        alert.setMessage(android.text.Html.fromHtml(`
          <b>Upload URL: </b><a href="${this.upload.fileUrl}">${this.upload.fileUrl}</a>
          <br><br>
          <b>Deletion URL: </b><a href="${this.upload.deletionUrl}">${this.upload.deletionUrl}</a>
          <br><br>
          <b>Uploaded on: </b> ${this.upload.uploadTime.toLocaleString()}`));
        alert.setPositiveButton('OK', new android.content.DialogInterface.OnClickListener({
          onClick (dialog) {
            dialog.cancel();
          }
        }));
        alert.show();
      },
      del (index) {
        Dialogs.confirm('This will remove the file from teknik.io. It will not be removed from your device. Are you sure you want to delete it?')
          .then(res => {
            if (res) {
              // Get file
              http.getString(this.upload.deletionUrl)
                .then(() => Toast.makeText('Image Deleted').show());
              // Delete from store
              this.$store.dispatch('deleteUpload', index);
            }
          });
      },
    }
  };
</script>

<style scoped>
  StackLayout.info {
    vertical-align: center;
  }

  Label {
    horizontal-align: center;
  }

  GridLayout.actions {
    padding-top: 15;
  }

  Button.upload-action {
    border-radius: 10;
    height: 35;
  }

  Button.copy, Button.share {
    margin-bottom: 10;
  }
</style>
