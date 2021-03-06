const path = require('path');
const fs = require('fs');
const exec = require('await-exec');
const ProgressBar = require('progress');

const directoryPath = path.join(__dirname, 'img');

var frames = 0;
var bar;
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        const num = parseInt(file);
        if (num > frames) {
            frames = num;
        }
    });
    console.log(`${frames} frames found!`);
    console.log("Processing frames...");
    bar = new ProgressBar(':bar [:current/:total] :percent  ', {
        total: frames
    });
    convertToAsci();
});

var output = new Array();

async function convertToAsci() {
    for (var i = 1; i < frames + 1; i++) {
        bar.tick();
        var frame = await exec(`jp2a ${directoryPath}/${i}.jpeg --size=100x100 --html-raw`);
        output.push(frame.stdout);
    }
    console.log("Saving frames to file...");
    fs.writeFileSync("io/output.json", JSON.stringify({
        "frames": output
    }));
}