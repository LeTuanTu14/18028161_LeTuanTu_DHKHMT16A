$(document).ready(function() {
    var i=1;
    $("#btnDK").click(function() {
        $("#myModal").modal();
    });

    function ktraMa() {
        let mauKT= /^[1-9]{1}[0-9]{9}$/;
        if($("#ma").val().trim() == ""){
            $("#tbma").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#ma").val().trim())){
            $("#tbma").html("Bạn nhập sai, mã gồm 10 số");
            return false;
        }
        $("#tbma").html("*");
            return true;
    }
    $("#ma").blur(ktraMa);

    function ktraTen() {
        let mauKT= /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#ht").val().trim() == ""){
            $("#tbht").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#ht").val().trim())){
            $("#tbht").html("Mỗi ký tữ đầu viết hoa và không có số và ký tự đặc biệt");
            return false;
        }
        $("#tbht").html("*");
            return true;
    }
    $("#ht").blur(ktraTen);


    function ktraNgayTG() {
        if($("#ntg").val() == ""){
            $("#tbntg").html("Không để trống");
            return false;
        }
        var today= new Date();
        var ntt= new Date($("#ntg").val());
        today= today.setDate(today.getDate() +7);
        if(today>ntt){
            $("#tbntg").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbntg").html("*");
            return true;
    }
    $("#ntg").blur(ktraNgayTG);

    function ktraEmail() {
        let mauKT= /^\w+([\.-]?\w+)*@iuh.edu.vn$/;
        if($("#em").val().trim() == ""){
            $("#tbem").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#em").val().trim())){
            $("#tbem").html("Bạn nhập sai, email theo dạng xxx@iuh.edu.vn");
            return false;
        }
        $("#tbem").html("*");
        return true;
    }
    $("#em").blur(ktraEmail);

    function ktraSDT() {
        let mauKT= /^0\d{9}$/;
        if($("#sdt").val().trim() == ""){
            $("#tbsdt").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#sdt").val().trim())){
            $("#tbsdt").html("Số điện thoại có 10 chữ số");
            return false;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#sdt").blur(ktraSDT);




    $("#save").click(function () {
        if(ktraTen() ==true && ktraMa() ==true && ktraEmail() ==true && ktraNgayTG() ==true && ktraSDT() ==true){
            row = "<tr>";
            row += "<td>" +(i++) +"</td>";
            row += "<td>" + $("#ma").val().trim() +"</td>";
            row += "<td>" + $("#ht").val().trim() +"</td>";
            row += "<td>" + $("#ntg").val().trim() +"</td>";
            row += "<td>" + $("#em").val() +"</td>";
            row += "<td>" + $("#sdt").val().trim() +"</td></tr>";
            
            $("#danhSach").append(row);
            $("#myModal").modal("hide");

            $("#ma").val("");
            $("#ht").val("");
            $("#ntg").val("");
            $("#em").val("");
            $("#sdt").val("");
        }else{
            alert("Nhập đầy đủ và chính xác thông tin cá nhân !!");
        }
    });
});