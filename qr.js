
// Data to encode
const data = 'https://techblitz.bluecape.site/register';

// Generate and save to file
QRCode.toFile('./qr-code.png', data, {
  color: {
    dark: '#000',  // QR code color
    light: '#FFF'  // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved to qr-code.png');
});
