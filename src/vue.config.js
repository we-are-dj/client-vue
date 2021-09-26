module.exports = {
    devServer: {
        proxy: {
            target: "https://server.wearedj.club",
            changeOrigin: true,
        },
    },
};
