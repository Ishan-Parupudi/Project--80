function show_para(){
    var inputs= [];

    for(var i=1;i<=6;i++){
      inputs.push(document.getElementById("para1_input_box_" + i).value);
      inputs.join=". "
      console.log[inputs]
      document.getElementById("Show_Paragraph").innerHTML = inputs.join(". ")  ;
    }
}
