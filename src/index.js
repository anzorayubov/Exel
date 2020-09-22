import './scss/index.scss'
import {Exel} from '@/components/exel/Exel';
import {Header} from '@/components/header/Header';
import {Toolbat} from '@/components/toolbar/Toolbat';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const exel = new Exel('#app', {
    components: [Header, Toolbat, Formula, Table],
})

exel.render()
