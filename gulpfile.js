const gulp = require('gulp');
const exec = require('child_process').exec;
const path = require('path');


gulp.task('copyImages', (done) => {
  gulp.src('src/docs/images/**/*')
    .pipe(gulp.dest('docs/docs/images'));
  done();
});

gulp.task('copyDocs', function (cb) {
    const command = `asciidoctorjs src/docs/index.adoc -a toc=left --destination-dir docs/docs`
    exec(command, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('default',
  gulp.series([
    'copyImages',
    'copyDocs'
  ])
);