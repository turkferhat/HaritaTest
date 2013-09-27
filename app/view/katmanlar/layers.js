Ext.define('Gungoren.view.katmanlar.layers', {
	extend: 'Ext.form.CheckboxGroup',
    alias: 'widget.deneme',//Takma Ad   
	
	  title: 'Katmanlar',
	  margin:'20 5 5 5',
    width: 300,
    height: 150,
    bodyPadding: 10,
    renderTo: Ext.getBody(),
    items:[{
        xtype: 'checkboxgroup',
        //fieldLabel: 'Two Columns',
        // Arrange checkboxes into two columns, distributed vertically
        columns: 1,
        vertical: true,
        items: [
            { boxLabel: 'İlçe', name: 'rb', inputValue: '1' },
            { boxLabel: 'Mahalle', name: 'rb', inputValue: '2', checked: true },
            { boxLabel: 'Ada', name: 'rb', inputValue: '3' },
            { boxLabel: 'Parsel', name: 'rb', inputValue: '4' },
            { boxLabel: 'Yol', name: 'rb', inputValue: '5' },
            { boxLabel: 'Yapı', name: 'rb', inputValue: '6' },
			
        ]
    }]
});
		   
		   
		   