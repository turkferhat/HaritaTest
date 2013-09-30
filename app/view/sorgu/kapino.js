Ext.define('Gungoren.view.sorgu.kapino', {
	extend: 'Ext.form.ComboBox',
    alias: 'widget.combox_kapno',//Takma Ad   
	
	  fieldLabel: 'KapıNo  Seciniz',
        queryMode: 'local',
        displayField: 'kapi_no',
		width:200,
        valueField: 'kapi_geom',
    //    renderTo: Ext.getBody(),
	    store: 'kapino',
		action:'kbox',
		itemId: 'kcombox',
initComponent: function() {
        this.callParent(arguments);
    }
		   });