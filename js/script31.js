document.oncontextmenu = function(){return false} //funcion para bloquear el click derecho del mouse
	
	
	//   tamaño de la ruleta 
        var padding = {top:0, right:35, bottom:0, left:0},
            w = 600 -  padding.right,
            h = 600  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20b();
      var data = [  	  
					{"name":"Rojo","png":"png/rojo.png", 'id': 18},	  
				    {"name":"Gris","png":"png/gris.png", 'id': 19},
					{"name":"Azul","png":"png/azul.png", 'id': 20},
					{ "name":"Gris", "png":"png/gris.png", 'id': 21},
                    { "name":"Azul", "png":"png/azul.png", 'id': 22},
                    {"name":"Gris","png":"png/gris.png", 'id': 23},
					{"name":"Rojo","png":"png/rojo.png", 'id': 24},
					{ "name":"Gris", "png":"png/gris.png", 'id': 25},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 26},
          { "name":"Gris", "png":"png/gris.png", 'id': 27},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 28},
          { "name":"Gris", "png":"png/gris.png", 'id': 29},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 30},
          { "name":"Gris", "png":"png/gris.png", 'id': 31},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 32},
          { "name":"Gris", "png":"png/gris.png", 'id': 33},
          { "name":"Azul", "png":"png/azul.png", 'id': 34},
          { "name":"Gris", "png":"png/gris.png", 'id': 35},
          { "name":"Azul", "png":"png/azul.png", 'id': 36},
          { "name":"Gris", "png":"png/gris.png", 'id': 37},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 38},
          { "name":"Gris", "png":"png/gris.png", 'id': 39},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 40},
          { "name":"Gris", "png":"png/gris.png", 'id': 41},
          { "name":"Rojo", "png":"png/rojo.png", 'id': 42},
          {"name":"Gris","png":"png/gris.png", 'id': 43},
                    { "name":"Azul", "png":"png/azul.png", 'id': 44}, 
                    {"name":"Gris","png":"png/gris.png", 'id': 45}, 
                    { "name":"Azul","png":"png/azul.png", 'id': 46}, 
                    {"name":"Gris","png":"png/gris.png", 'id': 47}, 
                    { "name":"Rojo", "png":"png/rojo.png", 'id': 48},
                    {"name":"Gris","png":"png/gris.png", 'id': 49},
                    {"name":"Rojo","png":"png/rojo.png", 'id': 50},
                    {"name":"Gris","png":"png/gris.png", 'id': 51}, 
                    { "name":"Rojo", "png":"png/rojo.png", 'id': 52},
                    {"name":"Gris","png":"png/gris.png", 'id': 53}, 
                    {"name":"Azul","png":"png/azul.png", 'id': 54},
                    {"name":"Amarillo","png":"png/amarillo.png", 'id': 1}, 
                    { "name":"Azul", "png":"png/azul.png", 'id': 2}, 
                    {"name":"Gris","png":"png/gris.png", 'id': 3},
                    {"name":"Rojo","png":"png/rojo.png", 'id': 4},
                    {"name":"Gris","png":"png/gris.png", 'id': 5}, 
                    { "name":"Rojo", "png":"png/rojo.png", 'id': 6},        
                    {  "name":"Gris", "png":"png/gris.png", 'id': 7},
                    {"name":"Rojo","png":"png/rojo.png", 'id': 8},
                    {"name":"Gris","png":"png/gris.png", 'id': 9}, 
                    {"name":"Azul","png":"png/azul.png", 'id': 10}, 
                    {"name":"Gris","png":"png/gris.png", 'id': 11}, 
                    {"name":"Azul","png":"png/azul.png", 'id': 12}, 
                    { "name":"Gris", "png":"png/gris.png", 'id': 13}, 
                    {"name":"Rojo","png":"png/rojo.png", 'id': 14},
                    {"name":"Gris","png":"png/gris.png", 'id': 15},
                    {"name":"Rojo","png":"png/rojo.png", 'id': 16},
                    { "name":"Gris", "png":"png/gris.png", 'id': 17} 
        ];
		
		
		
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        
		
		
		var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        
		
		var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
		
		
        // declaranfo  funcion generadora arc
        var arc = d3.svg.arc().outerRadius(r);
		
		
       // seleccionando path, usando el generador arc para dibujar la ruleta
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
             arcs.append("path")
            .attr("fill", function(d, i){ return color(i); })
            .attr("d", function (d) { return arc(d); });
			
			



            d3.select(".slice:nth-child(" + (38) + ") path")
                        .attr("fill", "#FFE149");

            d3.select(".slice:nth-child(" + (39) + ") path")
                        .attr("fill", "#45B6D6");

            d3.select(".slice:nth-child(" + (40) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (41) + ") path")
                        .attr("fill", "#DB2828");                                    

            d3.select(".slice:nth-child(" + (42) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (43) + ") path")
                        .attr("fill", "#DB2828");
                        
            d3.select(".slice:nth-child(" + (44) + ") path")
                        .attr("fill", "#555857");                        

            d3.select(".slice:nth-child(" + (45) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (46) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (47) + ") path")
                        .attr("fill", "#45B6D6");
                        
            d3.select(".slice:nth-child(" + (48) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (49) + ") path")
                        .attr("fill", "#45B6D6");

            d3.select(".slice:nth-child(" + (50) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (51) + ") path")
                        .attr("fill", "#DB2828");                                    

            d3.select(".slice:nth-child(" + (52) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (53) + ") path")
                        .attr("fill", "#DB2828");
                        
            d3.select(".slice:nth-child(" + (54) + ") path")
                        .attr("fill", "#555857");                        

            d3.select(".slice:nth-child(" + (1) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (2) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (3) + ") path")
                        .attr("fill", "#45B6D6");

            d3.select(".slice:nth-child(" + (4) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (5) + ") path")
                        .attr("fill", "#45B6D6");

            d3.select(".slice:nth-child(" + (6) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (7) + ") path")
                        .attr("fill", "#DB2828");                                    

            d3.select(".slice:nth-child(" + (8) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (9) + ") path")
                        .attr("fill", "#DB2828");
                        
            d3.select(".slice:nth-child(" + (10) + ") path")
                        .attr("fill", "#555857");                        

            d3.select(".slice:nth-child(" + (11) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (12) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (13) + ") path")
                        .attr("fill", "#DB2828");
                        
            d3.select(".slice:nth-child(" + (14) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (15) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (16) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (17) + ") path")
                        .attr("fill", "#45B6D6");                                    

            d3.select(".slice:nth-child(" + (18) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (19) + ") path")
                        .attr("fill", "#45B6D6");
                        
            d3.select(".slice:nth-child(" + (20) + ") path")
                        .attr("fill", "#555857");                        

            d3.select(".slice:nth-child(" + (21) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (22) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (23) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (24) + ") path")
                        .attr("fill", "#555857");                        

            d3.select(".slice:nth-child(" + (25) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (26) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (27) + ") path")
                        .attr("fill", "#45B6D6");
                        
            d3.select(".slice:nth-child(" + (28) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (29) + ") path")
                        .attr("fill", "#45B6D6");

            d3.select(".slice:nth-child(" + (30) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (31) + ") path")
                        .attr("fill", "#DB2828");                                    

            d3.select(".slice:nth-child(" + (32) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (33) + ") path")
                        .attr("fill", "#DB2828");
                        
            d3.select(".slice:nth-child(" + (34) + ") path")
                        .attr("fill", "#555857");                        

            d3.select(".slice:nth-child(" + (35) + ") path")
                        .attr("fill", "#DB2828");

            d3.select(".slice:nth-child(" + (36) + ") path")
                        .attr("fill", "#555857");

            d3.select(".slice:nth-child(" + (37) + ") path")
                        .attr("fill", "#45B6D6");                        
                                                

             // añadir el texto de los elementos Y retorna en la ruleta los elementos que necesito mostrar del var
                arcs.append("text").attr("transform", function(d)
                {
                d.innerRadius = 0;
				//aqui se ubican los elementos a mostrar
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
                })


            




            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].value; // + '\n' +data[i].value;  se concateno el return para poder agregar mas cosas a la Ruleta
            });

                











        function girar(){    
           var sonido =document.querySelector("#audio");
           sonido.setAttribute("src","audio/girar.mp3");
        }    


        //container.on("click", spin);
     
	 
		//muetra un sweetalert cuando llega el fin de la ruleta
		function spin(d){  
            container.on("click", null);		      
             if(oldpick.length == data.length){             
              


swal("FIN DEL SORTEO!", 
    "PRESIONE REINICIAR PARA COMENZAR DE NUEVO",
     "success");
                
				
				
				
                container.on("click", null);
                return;
            }
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
				 
				 
            //hace la magia del calculo, entre mas multiplicaciones mas rotacion
            rotation = (Math.round(rng / ps) * ps*5);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
			
                oldpick.push(picked); 
            }
            rotation += 90 - Math.round(ps/2);
            vis.transition()
			


			//rotacion  a menor valor mas rapido a mayor valor mas lento
                .duration(11000) //el valor default es de 10000
                .attrTween("transform", rotTween)
                .each("end", function(){
				
				
                    //marcar como visto "color negro"
                    //d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        //.attr("fill", "#777");
						
						
                    //mostrar la respuesta a la seleccion aleatoria usando el id question 
                  //  d3.select("#question")
                 //   .append("div")
                 //   .append("img")
                //    .attr('src', data[picked].png);	
                     




                    oldrotation = rotation;	




                    d3.select("#resultados")
                    .append("div")
                    .append("img")
                    .attr('src', data[picked].png);
                  

                    Mensaje();
                    function Mensaje(){
                      var SegmentosSeleccionado = data[picked];
                      document.getElementById('conteo').innerHTML=("Casilla ganadora: " + SegmentosSeleccionado.name + " " + SegmentosSeleccionado.id + "!");
                    } 


                     //ejecuta el sweetalert para que reproduzca un audio al caer una opcion 				
					   
                });
        }
		
		
		
		
		
		
		
		
 //creacion del circulo central de la ruleta
     container.append('svg:pattern')
      .attr("id", "img_cirle")
        .attr("width", "100%")     
        .attr("height", "100%")    
       .attr("patternContentUnits", "objectBoundingBox")
       .append("svg:image")
       .attr("xlink:href", 'img/ruleta.png')//url donde esta la imagen
       .attr("width", 1)  
       .attr("height", 1)
       .attr("preserveAspectRatio","none")
       .attr("x", 0)
       .attr("y", 0);
	
		
		//posicionamiento del circulo central
     container.append("circle")  
      .attr("cx", 0)
      .attr("cy", 00)
		
		
		//radio, entre mayor sea mayor espacio ocupara
       .attr("r", 200)
       .style("fill", "url(#img_cirle)");
		
		
	 	//dibujo de la flecha
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"#fff"});
			
			/* NOTA   si se quiere quitar la imagen y colocar un texto en un circulo blanco , reemplazar el comentado por el de arriba y listo
	   //dibujo y forma de la ruleta
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});
	   //texto ruleta
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("GIRAR")
            .style({"font-weight":"bold", "font-size":"30px"});*/
			
			
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }