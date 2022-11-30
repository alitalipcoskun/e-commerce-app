module.exports = ({title, layout}) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
        <title>${title}</title>
        </head>
        <body>
        ${layout}
        </body>
    </html>
    
    `
}