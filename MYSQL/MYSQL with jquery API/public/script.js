$(function () {


    let inpname = $('#name')
    let inpage = $('#age')
    let inpcity = $('#city')
    let btnsubmit = $('#submit')
    
    let table_person = $('#person')


    function refreshtable (person) {
       table_person.empty()
       table_person.append(
           `<tr>
           <th>Name</th>
           <th>Age</th>
           <th>City</th>
           </tr>
       `
       )
       for(person of person){
           table_person.append(
               `<tr>
               <td>${person.name}</td>
               <td>${person.age}</td>
               <td>${person.city}</td>
               </tr>`
           ) 
       }
    }

    $.get('/api/person', function(data) {
        refreshtable(data)
    })

    btnsubmit.click(function() {

      $.post('/api/person', 
      {
        name: inpname.val(),
        age: inpage.val(),
        city: inpcity.val()
      },
      function (data) {
        refreshtable(data)
      }
    )

    })

})