const transformIgnorePatterns = [
    '/dist/',
    'node_modules/[^/]+?/(?!(es|node_modules)/)', // Ignore modules without es dir
];

module.exports = {
    verbose: true,
    setupFiles: [
        './tests/setup.js', // 测试启动文件
    ],
    testURL: 'http://localhost', // 测试环境URL
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'], // 单元测试文件检测后缀名
    testPathIgnorePatterns: ['/node_modules/'],
    testRegex: '/__tests__/.*\\.(ts|js)$',
    transformIgnorePatterns,
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        '!components/_style/**/*',
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.test.json',
        },
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif)$": "identity-obj-proxy",
        ".*\\.(less|s?css)$": "<rootDir>/tests/__mocks__/styleMock.js",
        //或者babel-plugin-transform-require-ignore 在.babelrc配置
        //".*\\.(less|s?css)$": "identity-obj-proxy",
    }

};