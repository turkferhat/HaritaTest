Ext.define('Gungoren.view.bina_sorgu.form', {
	extend: 'Ext.form.Panel',
    alias: 'widget.bina_form',//Takma Ad   
//bas
    width: 230,
	height:130,
	top:0,
 //url: 'save-form.php',
layout: {
            type: 'absolute',
          //  align: 'middle'
        },
    items: [
	{
	 xtype: 'label',
	 x: 0,
     y: 30,
     text: 'Bina Kodu :',
		},
	{
		xtype: 'numberfield',
		x: 70,
        y: 30,
		 hideTrigger: true,
         keyNavEnabled: false,
        mouseWheelEnabled: false,
		width:118,
        hideLabel: true,
     	allowBlank: false,
		blankText:'Boş olmamalı',
		id:'bin_kod'
	 },
	 {
	 xtype: 'label',
	 x: 0,
     y: 60,
     text: 'Bina Adı :',
		},
	{
	xtype: 'textfield',
	id:'bin_ad',
	x: 70,
    y: 60,
	width:118,
    hideLabel: true,
    allowBlank: false,
	 blankText:'Boş olmamalı'
	 },
	 {
	 xtype:'button',
	 action:'bina_buton',
	  formBind: true,
	 x: 120,
     y: 100,
		  text: 'SORGULA',
		 
		 }
	],
//son
initComponent: function() {
        this.callParent(arguments);
    }
		   });
		   
		   
		   