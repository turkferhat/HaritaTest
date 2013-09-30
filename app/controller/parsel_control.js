 Ext.define('Gungoren.controller.parsel_control', {
    extend: 'Ext.app.Controller',

    views: [
		'parsel_sorgu.form'
    ],
 refs: {
        LoginForm: '#loginForm',
    },	
    init: function() {
		
		this.control({
            
			'button[action=parsel_buton]':
			{
                click:this.deneme
            }
					 });
					 
    	},deneme: function(aa) {

  var ada=Ext.getCmp('ada').getValue();
  
  var parsel=Ext.getCmp('parsel').getValue();
 
// alert(ada + "" + parsel);
  var url='data/parsel_sorgu/parsel.php'
  
 Gungoren.util.Fonksiyon.ajax_veri_cek(url,ada,parsel);
  
  
  
  }

	
});