Ext.define('Gungoren.view.sorgu.mahalle', {
	extend: 'Ext.form.ComboBox',
    alias: 'widget.combox_mah',//Takma Ad   
	
	  fieldLabel: 'Mahalle Seciniz',
        queryMode: 'local',
        displayField: 'mah_adi',
        valueField: 'mah_id',
		width:200,
	    store: 'mahalle',
		action:'mbox',
initComponent: function() {
        this.callParent(arguments);
    }
		   });