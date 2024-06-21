const https = require('https');
const fs = require('fs');
const { exec } = require('child_process');

// let args = process.argv.slice(2);

// function downloadFile(command) {
//     exec(command, (error, stdout, stderr) => {
//         if (error) {
//             console.error('Error downloading file');
//         }

//         console.log('File downloaded');
//     });
// }

// exec('which wget', (error, stdout, stderr) => {
//     if (stdout) {
//         downloadFile(`wget --no-check-certificate 'https://drive.google.com/uc?export=download&id=${args[0]}' -O oci_api_key.pem`);
//         return;
//     } else {
//         downloadFile(`curl -L 'https://drive.google.com/uc?export=download&id=${args[0]}' -o oci_api_key.pem`);
//         return;
//     }
// });

exec('cd ~ && ls', (error, stdout, stderr) => {
    if (stdout) {
        console.log(stdout)
    }
})