export default function factory($, env) {
    const customOpts = {
        entries: [env.paths.input.scripts.client + '/boot.js'],
        debug: env.name === 'dev'
    };
    const opts = $.lodash.assign({}, $.watchify.args, customOpts);
    let b;

    if (env.build.watch) {
        b = $.watchify($.browserify(opts));
    } else {
        b = $.browserify(opts);
    }

    function bundle() {
        return b
            .bundle()
            .on('error', (err) => {
                $.util.log($.util.colors.red(err.toString()));
                process.exit(1);
            })
            .pipe($.vinylSourceStream('app.js'))
            .pipe($.vinylBuffer())
            .pipe($.if(env.name !== 'dev', $.uglify()))
            .pipe($.gulp.dest(env.paths.output.scripts.client));
    }

    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', $.util.log); // output build logs to terminal

    return bundle;
}
