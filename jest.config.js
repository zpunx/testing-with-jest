module.exports = {
    "moduleNameMapper": { '\\.(css)$': '<rootDir>/mocks/styleMock.js' },
    "setupFilesAfterEnv": ["<rootDir>/src/setupJest.js"],
    "coveragePathIgnorePatterns": [
        "<rootDir>/src/index.js",
        "<rootDir>/src/setupJest.js",
        "<rootDir>/src/examples/*",
    ],
    "collectCoverageFrom": [
        "src/**/*.js"
    ]
}
