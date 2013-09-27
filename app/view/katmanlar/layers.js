Ext.define('Gungoren.view.katmanlar.layers', {
	extend: 'Ext.form.ComboBox',
    alias: 'widget.deneme',//Takma Ad   
	
	  fieldLabel: 'Mahalle Seciniz',
        queryMode: 'local',
        displayField: 'mah_adi',
        valueField: 'mah_adi',
		width:150,
		height:40,
    //    renderTo: Ext.getBody(),
	    store: ['none'],
		action:'mbox',
initComponent: function() {
        this.callParent(arguments);
    }
		   });