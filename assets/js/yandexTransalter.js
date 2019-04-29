	$('#sub').on('click', function(){
				
				let  yandex = new Object();
				     yandex.key   = $('#key').val();
				     yandex.word  = $('#word').val();
				     yandex.from  = $('#fro').val();
				     yandex.to    = $('#tto').val();
				     yandex.rst   = $('#result').val();
				     transalte(yandex);
			});

			function transalte(yandex)
			{
				let url  = 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang='+yandex.from+'-'+yandex.to+'&key='+yandex.key;
				let text = 'text='+yandex.word; 
				$.ajax({
					url  : url,
					type : 'POST',
					dataType : 'text',
					data : text,
					contentType :'application/x-www-form-urlencoded',
					success     : function(response)
					{
						console.log(response);
						let rs = JSON.parse(response);
						console.log(rs);
						if(rs.code === 200)
						{
							$('#result').html(rs.text[0]);
						}else{
							alert('galat');
						}
					},error : function(response)
					{
						let dt  = JSON.parse(response.responseText);
						alert(dt.message)
						
					}

				});
			}