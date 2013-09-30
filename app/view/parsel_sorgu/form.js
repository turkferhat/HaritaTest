Ext.define('Gungoren.view.parsel_sorgu.form', {
	extend: 'Ext.form.Panel',
    alias: 'widget.parsel_form',//Takma Ad   
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
     text: 'Ada :',
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
		id:'ada'
	 },
	 {
	 xtype: 'label',
	 x: 0,
     y: 60,
     text: 'Parsel :',
		},
	{
	xtype: 'textfield',
	id:'parsel',
	x: 70,
    y: 60,
	width:118,
    hideLabel: true,
    allowBlank: false,
	 blankText:'Boş olmamalı'
	 },
	 {
	 xtype:'button',
	 action:'parsel_buton',
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
		   
		   
		   