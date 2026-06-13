import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  async viteFinal(viteConfig) {
    // React Router の Vite プラグインは Storybook と競合するため除外する
    // （Tailwind など他のプラグインは残す）。
    viteConfig.plugins = (viteConfig.plugins ?? [])
      .flat(Number.POSITIVE_INFINITY)
      .filter(
        (plugin) =>
          !(
            plugin &&
            typeof plugin === 'object' &&
            'name' in plugin &&
            String(plugin.name).startsWith('react-router')
          ),
      )
    return viteConfig
  },
}

export default config
