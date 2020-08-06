const { override } = require('customize-cra');
const path = require('path');

const resolveTsconfigPathsToAlias = (tsconfigPath) => (config) => {
  const { paths, baseUrl } = require(tsconfigPath).compilerOptions;
  const alias = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    alias[key] = path.resolve(baseUrl, paths[item].join().replace('/*', ''));
  });

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...alias
      }
    }
  };
};

module.exports = override(resolveTsconfigPathsToAlias('./tsconfig.base.json'));
