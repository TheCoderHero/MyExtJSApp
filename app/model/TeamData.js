Ext.define('MyApp.model.NFLData', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'division',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'wins',
            type: 'int'
        },
        {
            name: 'losses',
            type: 'int'
        },
        {
            name: 'pctRatio',
            type: 'float'
        }
    ]
});