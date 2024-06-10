function f() {
            alert("vous avez cliquer deux fois sur l’image");
        };
        document.getElementById("img").addEventListener("dblclick", f);

        document.getElementById("removeClickListener").onclick = function(){
            document.getElementById("img").removeEventListener("dblclick", f);
        };

        function f2(){
            var input = document.getElementById("inputElement").value;
            if(input.length < 9){
                document.getElementById("inputElement").style.borderColor = "red";
            }else {
                inputElement.style.borderColor = "black";
            }
};
document.getElementById("inputElement").addEventListener("blur", f2);