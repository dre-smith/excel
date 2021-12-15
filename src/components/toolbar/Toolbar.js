import { ExcelComponent } from '@core/ExcelComponent';
import { createToolbar } from '@/components/toolbar/toolbar.template';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            ...options
        })
    }

    toHTML() {
        return createToolbar()
    }
}