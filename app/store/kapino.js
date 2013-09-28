
Ext.apply(Ext.data.AjaxProxy.prototype.actionMethods, 
	{
     read: 'POST'
	});
	
Ext.define('Gungoren.store.kapino',
	{
	extend: 'Ext.data.Store',
	fields: ['kapi_no'],
	autoLoad: true, 
	});