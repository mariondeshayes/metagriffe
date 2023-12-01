import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'dtm1se4w',
    dataset: 'production',
  },
  vite: (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        target: 'esnext',
      },
    }
  },
})
