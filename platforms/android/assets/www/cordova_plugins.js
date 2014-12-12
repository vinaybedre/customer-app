cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.sms/www/sms.js",
        "id": "org.apache.cordova.plugin.sms.Sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/info.asankan.phonegap.smsplugin/www/smsplugin.js",
        "id": "info.asankan.phonegap.smsplugin.smsplugin",
        "clobbers": [
            "smsplugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.plugin.sms": "0.1.0",
    "info.asankan.phonegap.smsplugin": "0.2.0"
}
// BOTTOM OF METADATA
});