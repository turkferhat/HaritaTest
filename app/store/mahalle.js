Ext.apply(Ext.data.AjaxProxy.prototype.actionMethods, {
     read: 'POST'
});
Ext.define('Gungoren.store.mahalle',{
		 extend: 'Ext.data.Store',
		   fields: ['mah_adi','mah_id'],
		   autoLoad: true, 
		   
		   proxy: {
    type: 'ajax',
	url: 'data/mahalle.php',
    extraParams: {'foo': '{"mah_adi":"baris uluzman"},'},
    api: {
        read: 'data/mahalle.php',
    },
    reader: {
        type: 'json',
        root: 'users',
        successProperty: 'success'
    }
}
});// JavaScript Document