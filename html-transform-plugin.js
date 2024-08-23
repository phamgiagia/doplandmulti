// html-transform-plugin.js
import { parse, serialize } from 'parse5';
import { walk } from 'estree-walker';

export default function htmlTransformPlugin() {
    return {
        name: 'html-transform', // name of the plugin
        enforce: 'post',
        apply: 'build',
        transformIndexHtml(html) {
            const document = parse(html);
            walk(document, {
                enter(node) {
                    if (node.tagName === 'img' && node.attrs) {
                        const srcAttr = node.attrs.find(attr => attr.name === 'src');
                        // Check if the src attribute starts with the specified HTTPS URL
                        if (srcAttr && srcAttr.value.startsWith('https://raw.githubusercontent.com/phamgiagia/doplandmulti/main/')) {
                            // Replace the domain with '../../'
                            srcAttr.value = srcAttr.value.replace(/^https:\/\/raw\.githubusercontent\.com\/phamgiagia\/doplandmulti\/main\//, '../../');
                        }
                    }
                }
            });
            return serialize(document);
        }
    };
}
