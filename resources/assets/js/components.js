if (typeof window.laradiumFields === 'undefined') {
    window.laradiumFields = {};
}

window.laradiumFields['DocumentEditor'] = require('./components/DocumentEditor.vue').default;
window.laradiumFields['DownloadDocument'] = require('./components/DownloadDocument.vue').default;
window.laradiumFields['EditDocument'] = require('./components/EditDocument.vue').default;
