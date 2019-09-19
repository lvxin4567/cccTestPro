var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

var manifest = {
    packageUrl: 'http://localhost/tutorial-hot-update/remote-assets/',
    remoteManifestUrl: 'http://localhost/tutorial-hot-update/remote-assets/project.manifest',
    remoteVersionUrl: 'http://localhost/tutorial-hot-update/remote-assets/version.manifest',
    version: '1.0.0',
    assets: {},
    searchPaths: []
};

var dest = './remote-assets/';
var src = './build/jsb-link/';

// Parse arguments
var i = 2;
while (i < process.argv.length) {
    var arg = process.argv[i];

    switch (arg) {
        case '--url':
        case '-u':
            var url = process.argv[i + 1];
            manifest.packageUrl = url;
            manifest.remoteManifestUrl = url + 'project.manifest';
            manifest.remoteVersionUrl = url + 'version.manifest';
            i += 2;
            break;
        case '--version':
        case '-v':
            manifest.version = process.argv[i + 1];
            i += 2;
            break;
        case '--src':
        case '-s':
            src = process.argv[i + 1];
            i += 2;
            break;
        case '--dest':
        case '-d':
            dest = process.argv[i + 1];
            i += 2;
            break;
        default:
            i++;
            break;
    }
}


function readDir(dir, obj) {
    var stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
        return;
    }
    var subpaths = fs.readdirSync(dir),
        subpath, size, md5, compressed, relative;
    for (var i = 0; i < subpaths.length; ++i) {
        if (subpaths[i][0] === '.') {
            continue;
        }
        subpath = path.join(dir, subpaths[i]);
        stat = fs.statSync(subpath);
        if (stat.isDirectory()) {
            readDir(subpath, obj);
        } else if (stat.isFile()) {
            // Size in Bytes
            size = stat['size'];
            md5 = crypto.createHash('md5').update(fs.readFileSync(subpath, 'binary')).digest('hex');
            compressed = path.extname(subpath).toLowerCase() === '.zip';

            relative = path.relative(src, subpath);
            relative = relative.replace(/\\/g, '/');
            relative = encodeURI(relative);
            obj[relative] = {
                'size': size,
                'md5': md5
            };
            if (compressed) {
                obj[relative].compressed = true;
            }
        }
    }
}

var mkdirSync = function (path) {
    try {
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
}

const copyFile = function (srcPath, tarPath, filter = []) {
    console.log('srcPath' , srcPath)
    console.log('tarPath' , tarPath)
    fs.readdir(srcPath, function (err, files) {
        console.log(files)
        if (err === null) {
            files.forEach(function (filename) {
                let filedir = path.join(srcPath, filename);
                let filterFlag = filter.some(item => item === filename)
                if (!filterFlag) {
                    fs.stat(filedir, function (errs, stats) {
                        let isFile = stats.isFile()
                        if (isFile) { // 复制文件
                            const destPath = path.join(tarPath, filename);
                            fs.copyFile(filedir, destPath, (err) => {})
                        } else { // 创建文件夹
                            let tarFiledir = path.join(tarPath, filename);
                            fs.mkdir(tarFiledir, (err) => {});
                            copyFile(filedir, tarFiledir, filter) // 递归
                        }
                    })
                }
            })
        } else {
            if (err) console.error(err);
        }
    })
}


// Iterate res and src folder
console.log(path.join(src, 'src'));
var newPath = dest + "/" + manifest.version + "/";
mkdirSync(newPath);

//使用
copyFile(src + "/res", newPath + "/res/");
// copyFile(src + "/src", newPath + "/src/");

readDir(path.join(src, 'src'), manifest.assets);
readDir(path.join(src, 'res'), manifest.assets);

var destManifest = path.join(newPath, 'project.manifest');
var destVersion = path.join(newPath, 'version.manifest');

mkdirSync(newPath);

fs.writeFile(destManifest, JSON.stringify(manifest), (err) => {
    if (err) throw err;
    console.log('Manifest successfully generated');
});

delete manifest.assets;
delete manifest.searchPaths;
fs.writeFile(destVersion, JSON.stringify(manifest), (err) => {
    if (err) throw err;
    console.log('Version successfully generated');
});