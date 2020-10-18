import {ExelComponent} from '@core/ExelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExelComponent {
    static className = 'exel__table'

    constructor($root) {
        super($root, {
            listeners: ['click', 'mousedown', 'mousemove'],
        });
    }

    toHTML() {
        return createTable()
    }

    onClick() {
        console.log('click')
    }

    onMouseDown() {
        console.log('mouseDown')
    }
    onMouseMove() {
        console.log('mousemove')
    }
}
