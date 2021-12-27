import { Page } from '@core/Page'
import { $ } from '@core/DOM'

export class DashboardPage extends Page {
    getRoot() {
        return $.create('div', 'db').html(`
            <div class="db__header">
                <h1>Excel Dashboard</h1>
            </div>

            <div class="db__new">
                <div class="db__view">
                    <a href="#" class="db__create">
                        Новая<br />Таблица
                    </a>
                </div>
            </div>

            <div class="db__table db__view">
                <div class="db__list-header">
                    <span>Название</span>
                    <span>Дата открытия</span>
                </div>
                <div class="db__list">
                    <li class="db__record">
                        <a href="#">Таблица номер 1</a>
                        <strong>01.01.2022</strong>
                    </li>
                </div>
            </div>
        `)
    }
}