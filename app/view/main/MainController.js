Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Ext.MessageBox'
    ],
    onGo: () => {
        Ext.Msg.alert('Username Saved', 'Your username was sucessfully entered!');
    }
});