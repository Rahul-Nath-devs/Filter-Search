
//* js starts
function searchFilter(){

      input = document.getElementById(`inputHere`);
      filter = input.value.toUpperCase();
      myTable = document.getElementById(`myTable`);
      tr = myTable.getElementsByTagName(`tr`);
    
    //*   for loop starts

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
    //* js ends & for loop ends