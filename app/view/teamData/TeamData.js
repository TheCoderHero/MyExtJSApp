Ext.define('MyApp.view.teamData.TeamData', {
    extend: 'Ext.Panel',
    xtype: 'nflteams',

    requires: [
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
        'Ext.layout.Fit'
    ],

    layout: 'fit',

    items: [{
        xtype: 'grid',

        store: {
            type: 'nfldata'
        },

        columns: [{
            xtype: 'gridcolumn',
            text: 'Division',
            dataIndex: 'division',
            flex: 1
        }, {
            text: 'Team Name',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Wins',
            dataIndex: 'wins',
            flex: 1
        }, {
            text: "Losses",
            dataIndex: 'losses',
            flex: 1
        }, {
            text: "PCT",
            dataIndex: 'pctRatio',
            flex: 1
        }]
    }]
});