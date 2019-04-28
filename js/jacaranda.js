// Get month
function newMonth() {
    date = new Date;
    day = date.getDate();
    month = date.getMonth()+1;
    year = date.getFullYear();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const d = new Date();
  
    month = monthNames[d.getMonth()];
}

    function seasons() {
        newMonth();

        var month_id = document.getElementById(month.toLowerCase());
        var textnode = document.createTextNode(' \u2022 '); 

        month_id.insertBefore(textnode, month_id.childNodes[3]);
    }

    function ifSeason(){
        newMonth();

        var month_id = document.getElementById('season-boolean');

        if (month == 'April' || month == 'May' || month == 'June') {
        } else {
            month_id.innerHTML = '<b>not</b>';
        }
    }

    function background() {
        newMonth();

        if (month == 'April' || month == 'May' || month == 'June') {
            document.body.setAttribute('id', month.toLowerCase());
        }
    }

  