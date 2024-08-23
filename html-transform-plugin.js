// html-transform-plugin.js
import { readFileSync, writeFileSync } from 'fs';
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
                        if (srcAttr && srcAttr.value.startsWith('http://')) {
                            srcAttr.value = srcAttr.value.replace(/^http:\/\/[^/]+/, '../../');
                        }
                    }
                }
            });
            return serialize(document);
        }
    };
}
