Ext.define('Gungoren.view.sorgu.sokak', {
	extend: 'Ext.form.ComboBox',
    alias: 'widget.combo_sok',//Takma Ad   
	
	  fieldLabel: 'Sokak Seciniz',
        queryMode: 'local',
        displayField: 'sok_adi',
        valueField: 'sok_adi',
		width:200,
    //    renderTo: Ext.getBody(),
	    store: 'sokak',
		action:'sbox',
		itemId: 'combox',
initComponent: function() {
        this.callParent(arguments);
    }
		   });