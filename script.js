const options = document.getElementsByClassName("option")
const select = document.getElementById("select-id")
const select_options = document.getElementById("select-options")
const button = document.getElementById("button")
const secondary_button = document.getElementById("secondary-button")
const checkbox_1 = document.getElementById("check")
const password = document.getElementById("password")
const inputs = document.querySelectorAll("[data-input]")
const input_switch = document.getElementById("input-switch")
const drop_checkbox = document.getElementById("drop-requirement")
const estimator_box = document.getElementsByClassName("estimator-box")
const modal_button = document.getElementsByClassName("modal-trigger")
const modal = document.getElementById("modal-background")
const modal_content = document.querySelectorAll(".modal-background .modal")
const modal_icon = document.getElementsByClassName("modal-close")
const tabs_1 = document.getElementsByClassName("tab-division")
const tab_dropdowns = document.getElementsByClassName("tab-dropdown")
const tab_dropdown = document.getElementById("tab-dropdown")
const tab_dropdown_2 = document.getElementById("tab-dropdown-2")
const tab_dropdown_3 = document.getElementById("tab-dropdown-3")
const tab_target_dropdown = document.querySelector("[data-tab='target']")
const tab_target_dropdown_2 = document.querySelector("[data-tab='target-2']")
const tab_target_dropdown_3 = document.querySelector("[data-tab='target-3']")
const tab_selector = document.getElementsByClassName("tab-selector")
const tab_paragraph = document.getElementsByClassName("tab-show-paragraph")[0]
//button
button.addEventListener("click", show_error)
secondary_button.addEventListener("click", show_error)
document.getElementById("button-switch").addEventListener("click", change_button)
document.getElementById("secondary-button-switch").addEventListener("click", change_secondary_button)
drop_checkbox.addEventListener("click", require_dropdown)

function get_value() {
  var value = document.getElementById("select-id").value
  if (value) {
  alert(value)
  }
  else {
      select.classList.add("required-select")
      drop_checkbox.checked = true
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

function show_error(e) {
    e.target.classList.add("button-require")
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

//dropdown
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
function require_dropdown(e) {
    if(select.className == "select-class") {
        select.classList.add("required-select")
        e.target.checked = true
    }
    else {
        select.classList.remove("required-select")
        e.target.checked = false
    }
}

for(var index = 0; index < estimator_box.length; index++){
estimator_box[index].addEventListener("click", change_border)
}

function change_border(e) {
    for(var index = 0; index < estimator_box.length; index++){
        estimator_box[index].classList.remove("estimator-selected")
        }   
        e.target.classList.add("estimator-selected")
}



 checkbox_1.addEventListener("click", show_password)

 function show_password(e) {
     if(password.type === "password") {
         password.type = "text"
         e.target.innerText = "hide"
     }
     else {
         password.type = "password"
         e.target.innerText = "show"
     }
 }
 
var input_content;
 (function(e) {
for(var i = 0;i < inputs.length; i++) {
    if(inputs[i].disabled) {
        input_content = inputs[i]
        inputs[i].classList.add("disable-input")
    }
}
 })()
 input_switch.addEventListener("click", toggle_enable)
var toggle_input = 0
 function toggle_enable(e) {
     if(toggle_input) {
        for(var i = 0;i < inputs.length; i++) {
                inputs[i].classList.add("disable-input")
                inputs[i].disabled = true
                inputs[i].classList.remove("required-input")
        }
        toggle_input = 0
     }
     else {
        for(var i = 0;i < inputs.length; i++) {
                inputs[i].classList.remove("disable-input")
                inputs[i].classList.remove("required-input")
                inputs[i].disabled = false
            }
        toggle_input = 1
     }
 }
 
 function test_require (e) {
     for(var i = 0; i < inputs.length; i++) {
         if(inputs[i].disabled) {
         }
         else {
             if(!inputs[i].validity.valid){
            inputs[i].classList.add("required-input")
            inputs[i].classList.remove("granted-input")
        }
        else {
            inputs[i].classList.remove("required-input")
            inputs[i].classList.add("granted-input")
         }
         }
     }
 }
 

 /*Modal js*/
for(var index = 0; index < modal_button.length; index++) {
    modal_button[index].addEventListener("click", modal_trigger)
}

for (var index = 0; index < modal_icon.length; index++){
    modal_icon[index].addEventListener("click", close_modal)
}
modal.onclick = function (e) {
    if(e.target == modal_content) {
       return
    }
    else {
        close_modal(e.target)
    }
}

 function modal_trigger (e) {

modal.style.display = "flex"

for(let index = 0; index < modal_content.length; index++) {
    if(e.target.dataset.modalTrigger == modal_content[index].dataset.modal) {

           
           switch(e.target.dataset.modalTrigger){
               case "1":
                setTimeout(() => modal_content[index].classList.add("opened-modal-1"), 100)
                   break;
               case "2":
                setTimeout(() => modal_content[index].classList.add("opened-modal-2"), 100)
                   break;
               case "3":
                setTimeout(() => modal_content[index].classList.add("opened-modal-3"), 100)
                   break;
           }

    }
}    

 }
 function close_modal(e) {
     setTimeout(function(e) {modal.style.display = "none"}, 200)
     for(var index = 0; index < modal_content.length; index++) {
     modal_content[index].classList.remove("opened-modal-1")
     modal_content[index].classList.remove("opened-modal-2")
     modal_content[index].classList.remove("opened-modal-3")
     }
     
 }


 
//tab 3
tab_target_dropdown.addEventListener("click", tab_drop)

function tab_drop(e) {

        for(var index = 0; index < tab_dropdowns.length; index++) {
            tab_dropdowns[index].classList.remove("expanded-tab")
        }
        tab_dropdown.classList.add("expanded-tab")


}

//
tab_target_dropdown_2.addEventListener("click", tab_drop_2)

function tab_drop_2(e) {
        for(var index = 0; index < tab_dropdowns.length; index++) {
            tab_dropdowns[index].classList.remove("expanded-tab")
        }
        tab_dropdown_2.classList.add("expanded-tab")

}

//
tab_target_dropdown_3.addEventListener("click", tab_drop_3)

function tab_drop_3(e) {
        for(var index = 0; index < tab_dropdowns.length; index++) {
            tab_dropdowns[index].classList.remove("expanded-tab")
        }
        tab_dropdown_3.classList.add("expanded-tab")

}

//tab 4
for(var index= 0;index < tab_selector.length; index++) {
    tab_selector[index].addEventListener("click", toggle_tab)
}

function toggle_tab(e) {
    for(var index= 0;index < tab_selector.length; index++) {
        tab_selector[index].classList.remove("tab-selector-used")
    }
    e.target.classList.add("tab-selector-used")
    switch(e.target.dataset.tab) {
        case "1":
            tab_paragraph.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
            break;
        case "2":
            tab_paragraph.innerText = " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            break;
        case "3":
            tab_paragraph.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
            break;
    }
}