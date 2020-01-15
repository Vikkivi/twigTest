import Twig from 'twig';
import { wrap } from 'jest-snapshot-serializer-raw';
import pretty from 'pretty';
import cleanHtml from './cleanHtml';

const { twig } = Twig;

export class Twiger {
    constructor(twigParams) {
        this.id = twigParams.id;
        this.path = twigParams.path;

        this.template = twig({
            id: this.id,
            path: this.path,
            async: false,
            base: './templates/'
        });
    }

    renderTwig() {
        const renderResult = this.template.render();
        return renderResult;
    }

    static cleanHtmlForSnapshot(html) {
        return wrap(pretty(cleanHtml(html)));
    }

    static cleanHtml(html) {
        return cleanHtml(html);
    }
}

export class TwigMacros extends Twiger {
    renderTwig(macrosName, params) {
        const renderResult = twig({
            allowInlineIncludes: true,
            data: `{% from "${this.id}" import ${macrosName} %}{{ ${macrosName}(macros_params) }}`
        }).render({macros_params: params});

        return renderResult;
    }
}