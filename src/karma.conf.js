// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-jasmine-html-reporter"),
            require("karma-coverage-istanbul-reporter"),
            require("@angular-devkit/build-angular/plugins/karma"),
            require("karma-coverage"),
            require("karma-coveralls"),
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        reporters: ["progress", "kjhtml", "coverage", "coveralls"],
        preprocessors: {
            "**/lib/*js": "coverage",
        },
        coverageReporter: {
            type: "lcov", // lcov.info or lcovonly are required for generating lcov.info files
            dir: "coverage/",
            subdir: ".",
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        customLaunchers: {
            ChromeHeadlessCI: {
                base: "ChromeHeadless",
                flags: ["--no-sandbox"],
            },
        },
        singleRun: false,
        restartOnFileChange: true,
    });
};
