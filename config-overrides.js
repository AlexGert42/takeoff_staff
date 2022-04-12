const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@styles': 'src/styles',
        '@components': 'src/components',
        '@type': 'src/type',
        '@utils': 'src/utils',
        '@context': 'src/context',
        '@api': 'src/api',
        '@assets': 'src/assets'
    })(config)
    return config
}