

function drawNamePresets() {
    let templatepresets = '';
    for (let i = 0; i < classInit.presets.length; i++) {
        templatepresets += `<div class="tabsButton" data-id-preset='${classInit.presets[i].id}'><button class="tablinks" id="${i == 0 ? "defaultOpen" : ""}" data-id-preset='${classInit.presets[i].id}' data-name="${classInit.presets[i].name}" data-uniti-type="${classInit.presets[i].unity_type}">${classInit.presets[i].name}</button><button class="deletePreset">X</button></div>`;
    }
    templatepresets += `<div class="tabsButton"><button class="addNewPreset">Добавить фильтр</button></div>`
    return templatepresets;
}

$(document).on('click', ".deletePreset", function () {
    let id_preset = $(this).parent().attr("data-id-preset")
    let container = $(".change_filters .tab")[0]
    classInit.deletePreset(id_preset)
    console.log(classInit.presets)
    container.innerHTML = drawNamePresets();
    $(".change_filters .tabcontent")[0].innerHTML = "";


})

$(document).on("click", ".addNewPreset", function () {
    classInit.addNewPreset();
    let container = $(".change_filters .tab")[0]
    container.innerHTML = drawNamePresets();
})

$(document).on("click", ".change_filters.active .addAtr_filter", function () {
    console.log("ДОБАВИТЬ АТРИБУТ")
    const id_preset = $(".change_filters.active .tabsButton.active").attr("data-id-preset");
    const current_preset = classInit.presets.find(el => el.id == id_preset);
    const index_of_new_attr = current_preset.data.length>0 ? current_preset.data[current_preset.data.length - 1].id + 1 : 0
    if (current_preset.unity_type) {
        const name_of_unity = current_preset.unity_type
        const tabcontent = $(".change_filters.active .savePreset")
        tabcontent[0].insertAdjacentHTML('beforebegin', classInit.drawNewAttrForFilter(name_of_unity, index_of_new_attr))
        const indexPreset = classInit.presets.indexOf(current_preset)
        classInit.presets[indexPreset].data.push({ id: index_of_new_attr, code: null, value: null })
    }
    else {
        console.log("Не выбрана сущность")
    }
})

$(document).on("change", ".change_filters.active .changeContentStatus > select", function () {
    console.log(this.value)
    const id_attr = $(this).attr('data-attr');
    const id_preset = $(".change_filters.active .tabsButton.active").attr("data-id-preset");
    let index_preset = classInit.presets.findIndex(el => el.id == id_preset);
    const current_preset = classInit.copy_preset
    let ind_attr = current_preset.data.findIndex(el => el.id == id_attr);
    current_preset.data[ind_attr].code = this.value
    classInit.copy_preset = current_preset
    let template = '';

    if (classInit.copy_preset.unity_type) {
        let findCurGroup = classInit.groups.find(el => el.code == classInit.copy_preset.unity_type)
        if (findCurGroup) {
            let findCutAttr = findCurGroup.data.find(el => el.code == this.value)
            console.log(findCurGroup)
            if (findCutAttr) {
                let container = $(`.change_filters.active .changeContentStatus[data-attr=${id_attr}]`)
                let fakechild = container.find(".attrInput");
                if (fakechild.length > 0) {
                    fakechild.remove();
                }
                let block = document.createElement('div')
                block.className = "attrInput";
                let checkbox;
                switch (findCutAttr.type) {
                    case "checkbox":
                        checkbox = document.createElement("input");
                        checkbox.setAttribute("type", findCutAttr.type);
                        if (classInit.copy_preset.data[ind_attr].value){
                            checkbox.checked = true
                        }
                        
                        
                        // classInit.copy_preset.data[ind_attr].value =  checkbox.checked;
                        

                        checkbox.addEventListener("change", function () {
                            classInit.copy_preset.data[ind_attr].value = this.checked;
                            console.log(classInit.copy_preset.data[ind_attr])
                        });
                        console.log(classInit.copy_preset.data[ind_attr])

                        let label = document.createElement("label");
                        label.innerText = "Да/нет";
                        block.appendChild(checkbox)
                        block.appendChild(label)

                        break;
                    case "text":
                        checkbox = document.createElement("input");
                        checkbox.setAttribute("type", findCutAttr.type);
                        if (classInit.copy_preset.data[ind_attr]) {
                            checkbox.value = classInit.copy_preset.data[ind_attr].value
                        }
                        else{
                            classInit.copy_preset.data[ind_attr].value = "";
                        }
                        
                        checkbox.addEventListener("input", function () {
                            classInit.copy_preset.data[ind_attr].value = this.value;
                        });
                        block.appendChild(checkbox)
                        break;
                    case "number":
                        checkbox = document.createElement("input");
                        checkbox.setAttribute("type", findCutAttr.type);
                        classInit.copy_preset.data[ind_attr].value = "";
                        checkbox.addEventListener("input", function () {
                            classInit.copy_preset.data[ind_attr].value = this.value;
                        });
                        if (classInit.copy_preset.data[ind_attr]) {
                            checkbox.value = classInit.copy_preset.data[ind_attr].value
                        }
                        else{
                            classInit.copy_preset.data[ind_attr].value = "";
                        }
                        block.appendChild(checkbox)
                        break;
                    case "list":
                        break;
                }
                container[0].appendChild(block)

            }
            else {
                console.log(`непонятный атрибут`)
            }
        }
        else {
            console.log(`сущности ${classInit.copy_preset.unity_type} не существует `)
        }
    }
    else {

    }

    console.log(classInit.presets)




})

$(document).on("click", ".change_filters.active .deleteAttr", function () {
    const id_attr = $(this).parent().attr('data-attr')
    console.log(`id_attr = ${id_attr}`)
    const id_preset = $(".change_filters.active .tabsButton.active").attr("data-id-preset");
    console.log(`id_preset = ${id_preset}`)
    classInit.presets.forEach(function (item) {
        if (item.id == id_preset) {
            console.log(item.data)
            item.data = item.data.filter(function (obj) {
                return obj.id != id_attr;
            });
        }
    });
    console.log(classInit.presets)

    $(this).parent().remove()


})




