const https = require('https');
const fs = require('fs');
const { exec } = require('child_process');

let args = process.argv.slice(2);

function downloadFile(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error downloading file');
        }

        console.log('File downloaded');
    });
}

exec('which wget', (error, stdout, stderr) => {
    if (stdout) {
        downloadFile(`wget --no-check-certificate 'https://drive.google.com/uc?export=download&id=${args[0]}' -O oci_api_key.pem`);
        return;
    } else {
        downloadFile(`curl -L 'https://drive.google.com/uc?export=download&id=${args[0]}' -o oci_api_key.pem`);
        return;
    }
});

exec('mkdir -p /home/runner/.oci', (error, stdout, stderr) => {
    if (error) {
        console.error('Error creating directory');
    }

    console.log('Directory created');
});

exec('mv oci_api_key.pem /home/runner/.oci/oci_api_key.pem', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        console.error('Error moving file');
    }

    console.log('File moved');
});

exec('ls /home/runner/.oci', (error, stdout, stderr) => {
    if (stdout) {
        console.log(stdout)
    }
});