var linux, darwin, win32;

try {
    var ChromiumEdge = require('@chiragrupani/karma-chromium-edge-launcher')['launcher:Edge'][1].prototype.DEFAULT_CMD;
} catch (ignore) {}

try {
    var ChromiumEdge = require('karma-chromium-edge-launcher')['launcher:Edge'][1].prototype.DEFAULT_CMD;
} catch (ignore) {}

if (ChromiumEdge) {
    linux = ChromiumEdge.linux;
    darwin = ChromiumEdge.darwin;
    win32 = ChromiumEdge.win32;
} else {
    try {
        win32 = require.resolve('edge-launcher/dist/x86/MicrosoftEdgeLauncher.exe');
    } catch (ignore) {}
}

module.exports = {
    name: 'Edge',
    DEFAULT_CMD: {
        linux: [linux || ''],
        darwin: [darwin || ''],
        win32: [win32 || '']
    },
    ENV_CMD: 'EDGE_BIN'
};
