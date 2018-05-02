import * as ImagePicker from 'nativescript-imagepicker';

const pickFile = callback => {
  const context = ImagePicker.create({ mode: 'single' });
  context
    .authorize()
    .then(() => {
      return context.present();
    })
    .then(callback);
};

export { pickFile };
