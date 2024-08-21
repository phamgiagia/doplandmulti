import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'main': resolve(__dirname, '/index.html'),
                'home': resolve(__dirname, 'home/index.html'),
                'about': resolve(__dirname, 'about/index.html'),
                'contact': resolve(__dirname, 'contact/index.html'),
                'home-desktop': resolve(__dirname, '/home/desktop/index.html'),
                'home-mobile': resolve(__dirname, '/home/mobile/index.html'),
                'home-tablet': resolve(__dirname, '/home/tablet/index.html'),
                'about-desktop': resolve(__dirname, '/about/desktop/index.html'),
                'about-mobile': resolve(__dirname, '/about/mobile/index.html'),
                'about-tablet': resolve(__dirname, '/about/tablet/index.html'),
                'contact-desktop': resolve(__dirname, '/contact/desktop/index.html'),
                'contact-mobile': resolve(__dirname, '/contact/mobile/index.html'),
                'contact-tablet': resolve(__dirname, '/contact/tablet/index.html'),
            },
        },
    },
})