# Twiger.js

Testing Twig templates via Jest.

## How to run snapshot tests of twig macro

```javascript
import { TwigMacros } from 'Twiger';

const thumbsMacros = new TwigMacros({
    id: 'thumbs',
    path: 'templates/site/macros/thumbs.html.twig'
});

const thumbs = [
    {
        id: "hockey",
        title: "Хоккей"
    },
    {
        id: "football",
        title: "Футбол"
    }
];

describe('thumbs macro', function () {
    it('should render correctly', function () {
        const result = thumbsMacros.renderTwig('thumbs', thumbs);

        expect(TwigMacros.cleanHtmlForSnapshot(result)).toMatchSnapshot();
    });
});
```