var common = require('./karma.common.config');

module.exports = function (config) {
    var karmaConfig = common.createCommonConfig(config);
    karmaConfig.singleRun = true;
    config.set(karmaConfig);
};