import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5b9ejyv9',
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
