const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
  </tr>
  <tr>
    <td>${e.key==" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
  </tr>
</table>
  </div>`
})