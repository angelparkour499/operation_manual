const options = document.getElementsByClassName("option")
const select = document.getElementById("select-id")
const select_options = document.getElementById("select-options")
const button = document.getElementById("button")
const secondary_button = document.getElementById("secondary-button")

document.getElementById("button-switch").addEventListener("click", change_button)
document.getElementById("secondary-button-switch").addEventListener("click", change_secondary_button)

function get_value() {
  var value = document.getElementById("select-id").value
  if (value) {
  alert(value)
  }
  else {
      select.classList.add("required-select")
  }
}
var toggle_button = 1
function change_button() {
if (toggle_button) {
    button.disabled = true
    toggle_button = 0
}
else {
    button.disabled = false
    toggle_button = 1
}

    }

    var toggle_button_2 = 1
function change_secondary_button() {
if (toggle_button_2) {
    secondary_button.disabled = true
    toggle_button_2 = 0
}
else {
    secondary_button.disabled = false
    toggle_button_2 = 1
}

    }


for(var index = 0; index < options.length; index ++) {
    options[index].addEventListener("click", handle_value)
}

function handle_value(e) {
    var target_text = e.target.innerHTML
    var target_value = e.target.value
    select.innerHTML = target_text
    select.value = target_value
    for(var i = 0; i < options.length; i++) {
        options[i].classList.remove("selected-option")
    }
    e.target.classList.add("selected-option")
    select.classList.remove("required-select")
}
var toggle_select = 0
var click_count = 0
select.addEventListener("focusin", select_enable) 
select.addEventListener("focusout", select_disable) 
select.addEventListener("click", select_disable_click)
function select_enable(e) {
select_options.classList.add("select-options-open")
toggle_select = 1
}
function select_disable(e) {
    select_options.classList.remove("select-options-open")
    click_count = 0
    }


function select_disable_click(e) {
click_count++
if(click_count%2 == 0) {
    select.blur()
}
else {
    return
}
}
 