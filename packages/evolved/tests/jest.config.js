module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
    testRegex: 'tests/.*(test|spec)\\.ts$',
    rootDir: '../',
    roots: [
        '<rootDir>/../',
        '<rootDir>/tests',
    ],
    moduleDirectories: [
        '<rootDir>/../core/node_modules/',
        '<rootDir>/node_modules/',
    ],
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/../core/src/$1',
        '^@evolved/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        'vue',
    ],
    transform: {
        '^.+\\.ts': 'ts-jest',
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': require.resolve('jest-transform-stub'),
    },
    testURL: 'http://localhost/',
};
