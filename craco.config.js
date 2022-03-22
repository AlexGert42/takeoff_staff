const { configure } = require('@testing-library/react')
const path = require('path')

module.exports = {
    webpack: {
        alias: {
            "@styles": path.resolve(__dirname, "src/styles"),
            "@components": path.resolve(__dirname, "src/components"),
            "@types": path.resolve(__dirname, "src/types"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@context": path.resolve(__dirname, "src/context"),
            "@api": path.resolve(__dirname, "src/api"),
        }
    },

    jest: {
        configure: {
            moduleNameMapper: {
                "^@styles(.*)$": "<rootDir>/src/styles$1",
                "^@components(.*)$": "<rootDir>/src/components$1",
                "^@types(.*)$": "<rootDir>/src/types$1",
                "^@context(.*)$": "<rootDir>/src/context$1",
                "^@utils(.*)$": "<rootDir>/src/utils$1",
                "^@api(.*)$": "<rootDir>/src/api$1",
            }
        }
    }
}