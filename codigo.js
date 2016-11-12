//mapa google
var map;
//vetor para guardar marcas
var gmarkers = [];
		
$(document).ready(function () {
		$(".modal").hide();
		$(".overlay").hide();
		$(".overlay").on("click",function(){
			$(".modal").hide();
			$(".overlay").hide();
		});
		$("#cancel").on("click",function(){
			$(".modal").hide();
			$(".overlay").hide();
			$("#nome").val("");
		});
		$("#ok").on("click",function(){
			$(".modal").hide();
			$(".overlay").hide();
			var l=$("#nome").val();
			var lt=$("#latitude").val();
			var ln=$("#longitude").val();
			$.post("guardar.php",
                 {
					'local' : l,
					'lat' : lt,
					'lng' : ln
				},
                function (data,status) {
					console.log(data);
					$("#nome").val("");
					$("#latitude").val("");
					$("#longitude").val("");
					$("#txtSearch").trigger("keyup");
				}
			);
		});
        function initialize() {
            var mapProp = {
                center: new google.maps.LatLng(20.593684, 78.96288),
                zoom: 2,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
			//evento click no mapa
			google.maps.event.addDomListener(map,'click',function(event){
				//alert(event.latLng);
				//addMarker(map,event.latLng.lat(),event.latLng.lng());
				$("#longitude").val(event.latLng.lng());
				$("#latitude").val(event.latLng.lat());
				$(".modal").show();
				$(".overlay").show();
			});
        }

        google.maps.event.addDomListener(window, "load", initialize);
		
        //pedido ajax quando tecla premida
        $("#txtSearch").keyup(function () {
            var x = $("#txtSearch").val();
            //console.log(x);
            //limpar as marcas
            for (i = 0; i < gmarkers.length; i++)
                gmarkers[i].setMap(null);

           // gmarkers = [];
            $.ajax({
                type: "POST",
                url: 'pesquisa.php?local='+x,  //"../Map/Search"
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ "Location": x }),
                dataType: "json",
                success: function (data) {
					//console.log(data);
                    var table = "<table class='table'>";
                    $.each(data, function (index, value) {
                        table += "<tr><td>" + value.LocationName + "</td></tr>";
                        //marcas no mapa
						gmarkers.push(addMarker(map,value.Latitude,value.Longitude));
                        /*var latlng = new google.maps.LatLng(value.Latitude, value.Longitude);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            icon: "./marcador.png",
                            map: map
                        });
                        //guarda a marca no vetor
                        gmarkers.push(marker);*/
                    });
                    table += "</table>";
                    //alert(table);
                    $("#myData").html(table);

                    if (x === "") {
                        //limpar as marcas
                        for (i = 0; i < gmarkers.length; i++)
                            gmarkers[i].setMap(null);
                    }
                }
            });
        });
		//preenche a tabela de países logo a partida
		$("#txtSearch").trigger("keyup");
	});
	
	function addMarker(map,lt,lng){
		var latlng = new google.maps.LatLng(lt, lng);
		var marker = new google.maps.Marker({
			position: latlng,
			icon: "./marcador.png",
			map: map
		});
		return marker;
	}