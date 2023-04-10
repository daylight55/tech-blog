import { defineConfig } from 'vite';

// 他のViteプラグインが必要な場合、ここでインポートします。
// import plugin from 'vite-plugin-example';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [
    // 他のプラグインを追加する場合はここに記述します
    // plugin(),
  ],
});
