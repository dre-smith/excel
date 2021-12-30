import { Page } from '@core/Page'
import { $ } from '@core/DOM'
import { getAllRecords } from './dashboard.functions'

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString()

        return $.create('div', 'db').html(`
            <div class="db__header">
                <h1>Excel. Панель управления</h1>
            </div>

            <div class="db__new">
                <div class="db__view">
                    <a href="#excel/${now}" class="db__create">
                        Новая<br />таблица
                    </a>
                </div>
            </div>

            <div class="db__table db__view">
                <div class="db__list-header">
                    <span>Название</span>
                    <span>Дата открытия</span>
                </div>
                <ul class="db__list">
                    ${getAllRecords()}
                </ul>
            </div>
        `)
    }
}