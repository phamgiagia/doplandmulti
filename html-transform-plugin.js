// unplugin-html-transform.js
import { createUnplugin } from 'unplugin';

const HtmlTransformPlugin = createUnplugin(() => ({
    name: 'html-transform',
    enforce: 'pre',
    transformInclude(id) {
        // This method can help identify HTML files or specific cases to apply transforms.
        // Adjust the condition to fit your needs, for example, to target only HTML files.
        return id.endsWith('.html');
    },
    transform(code) {
        // Using a regex to directly replace all matching src attributes in the HTML string
        const updatedCode = code.replace(/src="https:\/\/raw\.githubusercontent\.com\/phamgiagia\/doplandmulti\/main\/[^"]+"/g, (match) => {
            // Replace the full URL leaving only the path after the specific domain
            return match.replace(/https:\/\/raw\.githubusercontent\.com\/phamgiagia\/doplandmulti\/main\//, '../../');
        });
        return {
            code: updatedCode,
            map: null, // Not needed unless you are dealing with source maps
        };
    }
}));

export default HtmlTransformPlugin;
