let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
  let sarch = document.querySelector('input').value.toLowerCase();
  let table = document.querySelector('#table');
  let tr = table.getElementsByTagName('tr');
  let slc = document.querySelector('select');
  let val = slc.value;
  //   console.log(val);

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td')[val];

    if (td) {
      let result = td.textContent;
      if (result.toLowerCase().indexOf(sarch) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
});
