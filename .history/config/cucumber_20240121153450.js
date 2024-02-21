module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "@prueba",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/features/"
        ],
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}