export default function factory($, env) {
    return function task(done) {
        return $.delete([env.paths.output.root + '/*.html'], done);
    };
}
