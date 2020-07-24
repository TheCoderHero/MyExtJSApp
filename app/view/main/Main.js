Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        "Ext.field.Text"
    ],

    viewModel: {
        data: {
            userName: ""
        }
    },

    items: [{
        title: "Home",
        html: '<h1 class="main-banner">Data Binding - Text Field and Button</h1>',
        items: [
            {
                xtype: 'textfield',
                label: 'Enter Username:',
                bind: '{userName}',
                listeners: {
                    action: 'onGo'
                }
            },
            {
                xtype: 'button',
                handler: 'onGo',
                bind: {
                    disabled: '{!userName}',
                    text: '{userName ? "Save: " + userName : "Save"}'
                }
            }
        ]},
        {
            title: 'Notifications',
            xtype: 'notifications'
        },
        {
            title: "2019 NFL Team Stats",
            xtype: 'nflteams'
        }
    ]
});