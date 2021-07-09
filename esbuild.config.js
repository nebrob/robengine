import esbuild from 'esbuild';
import Args    from './utils/Args.js';

const isDev       = Args.has('dev');
const enableWatch = Args.has('watch');

esbuild.build({
    entryPoints: [
        "src/index.ts",
    ],
    outfile: 'dist/index.js',
    bundle: true,
    minify: isDev,
    sourcemap: isDev ? "external" : false,
    watch: enableWatch ? {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        },
    } : false,
    target: isDev ? ["esnext"] : ["es2020", "chrome58", "firefox57", "safari11", "edge16"],
})
    .catch(() => process.exit(1));