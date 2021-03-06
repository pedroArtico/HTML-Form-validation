$(document).ready(function()
{
	masks();
	validadeFields();
	onlyNumbers();
	onlyLetters();
	changeBodyColors();
});

function masks()
{
	$("#zipCode").mask('00.000-000');
	$("#telephone").mask('(00)0000-0000');
}
function validadeFields()
{
	var cont=0;
	var error = new Audio("/CRAWLING/Formulario -uso de Jquery/Sounds/error.mp3");
	$("#form_28307").submit(function()
	{
		if(($("#name").val()==""))
		{
			alert("O campo nome não pode estar em branco!");
			cont++;
		}
		if($("#lastName").val()=="")
		{			
			alert("O campo sobrenome não pode estar em branco!");
			cont++;
		}
		if(($("#month").val()=="") || ($("#month").val()==00) || ($("#month").val()>12) || ($("#month").val().length<2))
		{			
			alert("Mês inválido!");
			cont++;
		}		
		if(($("#day").val()=="") || ($("#day").val()==00) || ($("#day").val()>31) || ($("#day").val().length<2))
		{
			alert("Dia inválido!");
			cont++;
		}		
		if($("#year").val()=="" || $("#year").val()<1850 || $("#year").val()>2018)
		{
			alert("Ano inválido!");
			cont++;
		}		
		if(!($("input[id='male']").is(":checked")) && !($("input[id='female']").is(":checked")) && !($("input[id='other']").is(":checked")))
		{
			alert("O campo gênero não pode estar em branco!");
			cont++;
		}
		if($("#address").val()=="")
		{
			alert("O campo endereço não pode estar em branco!");
			cont++;
		}
		if($("#referencePoint").val()=="")
		{
			alert("O campo ponto de referência não pode estar em branco!");
			cont++;
		}
		if($("#city").val()=="")
		{
			alert("O campo cidade não pode estar em branco!");
			cont++;
		}
		if($("#state").val()=="")
		{
			alert("O campo estado não pode estar em branco!");
			cont++;
		}
		if(($("#zipCode").val()=="") || ($("#zipCode").val().lenght<10))
		{
			alert("O campo código postal não pode estar em branco!");
			cont++;
		}
		if($("#country").val()=="selecione uma opção")
		{
			alert("O campo país não pode estar em branco!");
			cont++;
		}
		if(($("#telephone").val()=="") || ($("#telephone").val().length<13))
		{
			alert("Telefone inválido!");
			cont++;
		}
		if($("#email").val()=="")
		{
			alert("O campo e-mail não pode estar em branco!");
			cont++;
		}
		if(cont>0)
		{
			error.play();
			cont=0;
			return false;
		}		
		else if(cont==0)
			{
				return true;
			}	
	});	
}
function onlyNumbers()
{	
	$('#month').keyup(function()
	{
		$(this).val(this.value.replace(/\D/g, ''));
	});
	$('#day').keyup(function()
	{
		$(this).val(this.value.replace(/\D/g, ''));
	});	
	$('#year').keyup(function()
	{
		$(this).val(this.value.replace(/\D/g, ''));
	});
}
function onlyLetters()
{
	$('#name').keyup(function()
	{ 
		this.value = this.value.replace(/[^a-zA-Z^ÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùçÇÃãÕõ ]/g,'');
	});
	$('#lastName').keyup(function()
	{ 
		this.value = this.value.replace(/[^a-zA-Z^ÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùçÇÃãÕõ ]/g,'');
	});
	$('#city').keyup(function()
	{ 
		this.value = this.value.replace(/[^a-zA-Z^ÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùçÇÃãÕõ ]/g,'');
	});
	$('#state').keyup(function()
	{ 
		this.value = this.value.replace(/[^a-zA-Z^ÁáÉéÍíÓóÚúÂâÊêÎîÔôÛûÀàÈèÌìÒòÙùçÇÃãÕõ ]/g,'');
	});
}

function changeBodyColors()
{
	$("#vE").click(function()
	{
		$("#title").css("color","#008000");		
		$("body").css("backgroundColor","#008000");
		$(".description").css("color","#008000");
		$("#name").css("color","#008000");
		$('#lastName').css("color","#008000");
		$('#month').css("color","#008000");
		$('#day').css("color","#008000");
		$('#year').css("color","#008000");
		$("#address").css("color","#008000");
		$("#referencePoint").css("color","#008000");
		$("#city").css("color","#008000");
		$("#state").css("color","#008000");
		$("#zipCode").css("color","#008000");
		$("#country").css("color","#008000");
		$("#telephone").css("color","#008000");
		$("#email").css("color","#008000");
		$("h1#info").css("backgroundColor","#228B22");		
		$("label#info").css("color","#008000");
		$("label#info2").css("color","#008000");			
		$("label#info3").css("color","#008000"); 
		$("label#info4").css("color","#008000");
		$("#footer").css("color","#008000");
		});
	$("#vC").click(function()
	{
		$("#title").css("color","#00FF7F");				
		$("body").css("backgroundColor","#00FF7F");
		$(".description").css("color","#00FF7F");
		$("#name").css("color","#00FF7F");
		$('#lastName').css("color","#00FF7F");
		$('#month').css("color","#00FF7F");	
		$('#day').css("color","#00FF7F");
		$('#year').css("color","#00FF7F");
		$("#address").css("color","#00FF7F");
		$("#referencePoint").css("color","#00FF7F");
		$("#city").css("color","#00FF7F");
		$("#state").css("color","#00FF7F");
		$("#zipCode").css("color","#00FF7F");
		$("#country").css("color","#00FF7F");
		$("#telephone").css("color","#00FF7F");
		$("#email").css("color","#00FF7F");		
		$("h1#info").css("backgroundColor","#8EE53F");
		$("label#info").css("color","#00FF7F");
		$("label#info2").css("color","#00FF7F");			
		$("label#info3").css("color","#00FF7F"); 
		$("label#info4").css("color","#00FF7F");		
		$("#footer").css("color","#00FF7F");		
	});
	$("#v").click(function()
	{
		$("#title").css("color","#FF0000");				
		$("body").css("backgroundColor","#FF0000");
		$(".description").css("color","#FF0000");
		$("#name").css("color","#FF0000");
		$('#lastName').css("color","#FF0000");
		$('#month').css("color","#FF0000");
		$('#day').css("color","#FF0000");
		$('#year').css("color","#FF0000");
		$("#address").css("color","#FF0000");
		$("#referencePoint").css("color","#FF0000");
		$("#city").css("color","#FF0000");
		$("#state").css("color","#FF0000");
		$("#zipCode").css("color","#FF0000");
		$("#country").css("color","#FF0000");
		$("#telephone").css("color","#FF0000");
		$("#email").css("color","#FF0000");
		$("h1#info").css("backgroundColor","#FF6347");		
		$("label#info").css("color","#FF0000");
		$("label#info2").css("color","#FF0000");			
		$("label#info3").css("color","#FF0000"); 
		$("label#info4").css("color","#FF0000");				
		$("#footer").css("color","#FF0000");						
	});
	$("#r").click(function()
	{
		$("#title").css("color","#8A008A");						
		$("body").css("backgroundColor","#8A008A");
		$(".description").css("color","#8A008A");
		$("#name").css("color","#8A008A");
		$('#lastName').css("color","#8A008A");
		$('#month').css("color","#8A008A");
		$('#day').css("color","#8A008A");
		$('#year').css("color","#8A008A");
		$("#address").css("color","#8A008A");
		$("#referencePoint").css("color","#8A008A");
		$("#city").css("color","#8A008A");
		$("#state").css("color","#8A008A");
		$("#zipCode").css("color","#8A008A");
		$("#country").css("color","#8A008A");
		$("#telephone").css("color","#8A008A");
		$("#email").css("color","#8A008A");
		$("h1#info").css("backgroundColor","#8878C3");
		$("label#info").css("color","#8A008A");
		$("label#info2").css("color","#8A008A");			
		$("label#info3").css("color","#8A008A"); 
		$("label#info4").css("color","#8A008A");						
		$("#footer").css("color","#8A008A");								
	});
	$("#aC").click(function()
	{
		$("#title").css("color","#00BFFF");								
		$("body").css("backgroundColor","#00BFFF");
		$(".description").css("color","#00BFFF");
		$("#name").css("color","#00BFFF");
		$('#lastName').css("color","#00BFFF");
		$('#month').css("color","#00BFFF");
		$('#day').css("color","#00BFFF");
		$('#year').css("color","#00BFFF");
		$("#address").css("color","#00BFFF");
		$("#referencePoint").css("color","#00BFFF");
		$("#city").css("color","#00BFFF");
		$("#state").css("color","#00BFFF");
		$("#zipCode").css("color","#00BFFF");
		$("#country").css("color","#00BFFF");
		$("#telephone").css("color","#00BFFF");
		$("#email").css("color","#00BFFF");
		$("h1#info").css("backgroundColor","#B0E0E6");								
		$("label#info").css("color","#00BFFF");
		$("label#info2").css("color","#00BFFF");			
		$("label#info3").css("color","#00BFFF"); 
		$("label#info4").css("color","#00BFFF");						
		$("#footer").css("color","#00BFFF");										
	});
	$("#aE").click(function()
	{
		$("#title").css("color","#0000CD");
		$("body").css("backgroundColor","#0000CD");
		$(".description").css("color","#0000CD");
		$("#name").css("color","#0000CD");
		$('#lastName').css("color","#0000CD");
		$('#month').css("color","#0000CD");
		$('#day').css("color","#0000CD");
		$('#year').css("color","#0000CD");
		$("#address").css("color","#0000CD");
		$("#referencePoint").css("color","#0000CD");
		$("#city").css("color","#0000CD");
		$("#state").css("color","#0000CD");
		$("#zipCode").css("color","#0000CD");
		$("#country").css("color","#0000CD");
		$("#telephone").css("color","#0000CD");
		$("#email").css("color","#0000CD");
		$("h1#info").css("backgroundColor","#007FFF");
		$("label#info").css("color","#0000CD");
		$("label#info2").css("color","#0000CD");
		$("label#info3").css("color","#0000CD");
		$("label#info4").css("color","#0000CD");
		$("#footer").css("color","#0000CD");
		});
	$("#rosa").click(function()
	{
		$("#title").css("color","#FF007F");
		$("body").css("backgroundColor","#FF007F");
		$(".description").css("color","#FF007F");
		$("#name").css("color","#FF007F");
		$('#lastName').css("color","#FF007F");
		$('#month').css("color","#FF007F");
		$('#day').css("color","#FF007F");
		$('#year').css("color","#FF007F");
		$("#address").css("color","#FF007F");
		$("#referencePoint").css("color","#FF007F");
		$("#city").css("color","#FF007F");
		$("#state").css("color","#FF007F");
		$("#zipCode").css("color","#FF007F");
		$("#country").css("color","#FF007F");
		$("#telephone").css("color","#FF007F");
		$("#email").css("color","#FF007F");
		$("h1#info").css("backgroundColor","#FF1493");
		$("label#info").css("color","#FF007F");
		$("label#info2").css("color","#FF007F");
		$("label#info3").css("color","#FF007F");
		$("label#info4").css("color","#FF007F");
		$("#footer").css("color","#FF007F");
	});
	$("#preto").click(function()
	{
		$("#title").css("color","#000000");
		$("body").css("backgroundColor","#000000");
		$(".description").css("color","#000000");
		$("#name").css("color","#000000");
		$('#lastName').css("color","#000000");
		$('#month').css("color","#000000");
		$('#day').css("color","#000000");
		$('#year').css("color","#000000");
		$("#address").css("color","#000000");
		$("#referencePoint").css("color","#000000");
		$("#city").css("color","#000000");
		$("#state").css("color","#000000");
		$("#zipCode").css("color","#000000");
		$("#country").css("color","#000000");
		$("#telephone").css("color","#000000");
		$("#email").css("color","#000000");
		$("h1#info").css("backgroundColor","#51484F");
		$("label#info").css("color","#000000");
		$("label#info2").css("color","#000000");
		$("label#info3").css("color","#000000");
		$("label#info4").css("color","#000000");
		$("#footer").css("color","#000000");
	});
	$("#cinza").click(function()
	{
		$("#title").css("color","#C0C0C0");
		$("body").css("backgroundColor","#C0C0C0");
		$(".description").css("color","#C0C0C0");
		$("#name").css("color","#C0C0C0");
		$('#lastName').css("color","#C0C0C0");
		$('#month').css("color","#C0C0C0");
		$('#day').css("color","#C0C0C0");
		$('#year').css("color","#C0C0C0");
		$("#address").css("color","#C0C0C0");
		$("#referencePoint").css("color","#C0C0C0");
		$("#city").css("color","#C0C0C0");
		$("#state").css("color","#C0C0C0");
		$("#zipCode").css("color","#C0C0C0");
		$("#country").css("color","#C0C0C0");
		$("#telephone").css("color","#C0C0C0");
		$("#email").css("color","#C0C0C0");
		$("h1#info").css("backgroundColor","#808080");
		$("label#info").css("color","#C0C0C0");
		$("label#info2").css("color","#C0C0C0");
		$("label#info3").css("color","#C0C0C0");
		$("label#info4").css("color","#C0C0C0");
		$("#footer").css("color","#C0C0C0");
	});
	$("#laranja").click(function()
	{
		$("#title").css("color","#FF6600");
		$("body").css("backgroundColor","#FF6600");
		$(".description").css("color","#FF6600");
		$("#name").css("color","#FF6600");
		$('#lastName').css("color","#FF6600");
		$('#month').css("color","#FF6600");
		$('#day').css("color","#FF6600");
		$('#year').css("color","#FF6600");
		$("#address").css("color","#FF6600");
		$("#referencePoint").css("color","#FF6600");
		$("#city").css("color","#FF6600");
		$("#state").css("color","#FF6600");
		$("#zipCode").css("color","#FF6600");
		$("#country").css("color","#FF6600");
		$("#telephone").css("color","#FF6600");
		$("#email").css("color","#FF6600");
		$("h1#info").css("backgroundColor","#FFA500");
		$("label#info").css("color","#FF6600");
		$("label#info2").css("color","#FF6600");
		$("label#info3").css("color","#FF6600");
		$("label#info4").css("color","#FF6600");
		$("#footer").css("color","#FF6600");
	});
	$("#l").click(function()
	{
		$("#title").css("color","#FF00FF");										
		$("body").css("backgroundColor","#FF00FF");
		$(".description").css("color","#FF00FF");
		$("#name").css("color","#FF00FF");
		$('#lastName').css("color","#FF00FF");
		$('#month').css("color","#FF00FF");
		$('#day').css("color","#FF00FF");
		$('#year').css("color","#FF00FF");
		$("#address").css("color","#FF00FF");
		$("#referencePoint").css("color","#FF00FF");
		$("#city").css("color","#FF00FF");
		$("#state").css("color","#FF00FF");
		$("#zipCode").css("color","#FF00FF");
		$("#country").css("color","#FF00FF");
		$("#telephone").css("color","#FF00FF");
		$("#email").css("color","#FF00FF");
		$("h1#info").css("backgroundColor","#FC0FC0");
		$("label#info").css("color","#FF00FF");
		$("label#info2").css("color","#FF00FF");
		$("label#info3").css("color","#FF00FF");
		$("label#info4").css("color","#FF00FF");
		$("#footer").css("color","#FF00FF");
	});	
}