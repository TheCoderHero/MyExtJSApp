Ext.define('MyApp.store.Notifications', {
    extend: 'Ext.data.Store',
    alias: 'store.notifications',

    model: 'MyApp.model.Notification',

    data: [
        {
            date: '2020-07-23T20:03:32Z',
            description: 'The first notification'
        },
        {
            date: '2020-07-23T20:05:32Z',
            description: 'New User added to database'
        },
        {
            date: '2020-07-23T20:23:32Z',
            description: 'Error in purchasing due to xyz...'
        },
        {
            date: '2020-07-23T20:37:32Z',
            description: 'Purchase of Product: B12A9 success!'
        }
    ]
});