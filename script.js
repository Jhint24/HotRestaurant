$(".submit").on("click", function() {
   console.log("hi");
   var addSubmit = {
    name: $('#reserve_name').val().trim(),
    phone: $('#reserve_phone').val().trim(),
    email: $('#reserve_email').val().trim(),
    ID: $('#reserve_uniqueID').val().trim()
};

console.log(addSubmit);

});