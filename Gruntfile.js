module.exports = function(grunt) {
    grunt.file.readJSON("package.json");
    grunt.loadNpmTasks("grunt-karma-coveralls");
    grunt.registerTask("default", "coveralls");
    grunt.initConfig({
        coveralls: {
            options: {
                debug: true,
                coverageDir: "src/coverage",
                dryRun: true,
                force: true,
                recursive: true,
            },
        },
    });
};
