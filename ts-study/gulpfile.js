const gulp = require("gulp")
const ts = require("gulp-typescript")
const del = require("del")

const paths = {
    entry: "src/**/*.ts",
    output: "dist"
}

const tasks = {
    clean: function(done){
        del(paths.output)
        console.log("clean done");
        done();
    },
    tsc: function(done){
        gulp.src(paths.entry)
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest(paths.output))
        console.log("ts compile done")
        done();
    },
    test: function(done){
        setTimeout(()=>{
            console.log('done')
            done();
        }, 0)
    },
    tscmon: function(){
        // gulp.watch(paths.entry, gulp.series("tsc"))
        gulp.watch(paths.entry, gulp.parallel("test", "tsc"))
    }
}

module.exports = tasks