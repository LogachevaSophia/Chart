(function ($) {
  $(document).ready(function () {
    // datas
    let btnTriggerModalRightsSets = $(".btnTriggerModalRightsSets");
    let btnTriggerNewTab = $(".btnTriggerNewTab");
    let optionForCommonSelect = {
      placeholder: "Выберите значение",
      width: "100%",
    };


    function disableChangeableInput(currentItem) {
      $(currentItem).attr("readonly", "true");
      $(currentItem).removeClass("active");
      $(".btnTriggerChangeableIn.active").removeClass("active");
      if ($(currentItem).val().length == 0) {
        $(currentItem).val("Без названия");
      }
      $(".changeable-title.active").text($(currentItem).val());
      $(".changeable-title.active").removeClass("active");
    }
    $(document).on("click", ".btnTriggerChangeableIn", function () {
      changeableInputInit($(this));
    });
    $(document).on("click", ".btnTriggerChangeableInTemplate", function () {
      changeableInputInitTemplate($(this))
     });
    $(document).on("focusout", ".changeable-input.active", function () {
      disableChangeableInput($(this));
    });
    // Изменение названия таба,тайтла по клику на триггер

    // Панель вкладок старт
    // Настройка прав
    $(document).on("click", ".btnTriggerModalRightsSets", function () {
      console.log("sets rights tab");
      const modal = $("[data-trigger-modal-section=rights-sets]")
      console.log(modal)
      const select = modal.find("select[name=person]")[0]
      console.log(select)
      select.innerHTML = "";
      for (const elem of classInit.listOfEmployees){
        const option = document.createElement("option")
        option.innerText = elem.value
        option.setAttribute("value",elem.name)
        select.appendChild(option)
      }
      
    });
    // Настройка прав

    // Изменить название вкладки
    $(document).on("click", ".btnTriggerChangeNameTab", function () {
      console.log("Start renaming tab current input name");
    });
    $(document).on("focusout", ".tabs-input-name.active", function () {
      console.log("Stop renaming tab active input name");
      console.log("ИЗМЕНЕНИЕ НАЗВАНИЕ ВКЛАДКИ");
      let current_tab = $(`.tabs-triggers-list-item.active`).attr(
        "data-tab-name"
      );
      console.log(current_tab);

      current_tab = classInit.tabs.filter((el) => el.id == current_tab)[0];
      let allIds = [];
      if (current_tab) {
        current_tab.dataDasb.forEach((el) => allIds.push(el.id));
      }
      let value = this.value; // новое название
      let id = $(this).attr("data-changeable-name"); //id измененной влкдаки
      console.log(id);
      //09.10.2024
      // BX.ajax
      //   .runComponentAction("rns:dashboard.customizable", "updateDashBoard", {
      //     mode: "class",
      //     datatype: "json",
      //     data: {
      //       data: {
      //         id: id,
      //         // dashboardElements: allIds,
      //         dashboard: {
      //           NAME: value,
      //           ELEMENTS: allIds,
      //         },
      //       },
      //     },
      //   })
      //   .then(
      //     function (response) {
      //       console.log(response);
            // classInit.tabs.find(el => el.id == response.data.id).name = value;
      //     },
      //     function (response) {
      //       console.log(response);
      //     }
      //   );
      console.log(value, id);
    });
    // Изменить название вкладки

    // Добавление новой вкладки
    // потом, наверное, надо будет убрать при интеграции битрикса и заменить на адекватный нейм
    $(btnTriggerNewTab).on("click", function () {

      let NameOfTab = "Без названия";
      // потом, наверное, надо будет убрать при интеграции битрикса и заменить на адекватный нейм
      console.log("СОЗДАНИЕ ВКЛАДКИ");
      // BX.ajax
      //   .runComponentAction(
      //     "rns:dashboard.customizable",
      //     "createDashBoardNew",
      //     {
      //       mode: "class",
      //       datatype: "json",
      //       data: {
      //         data: {
      //           dashboardElements: [],
      //           dashboard: {
      //             NAME: NameOfTab,
      //           },
      //         },
      //       },
      //     }
      //   )
      //   .then(
      //     function (response) {
            classInit.addNewTab({data: {data: {ID: "123", NAME:"Новая вкладка"}}})
      //     },
      //     function (response) {
      //       console.log(response);
      //     }
      //   );
      // classInit.createDashboard();
    });
    // Добавление новой вкладки
    // Сохранение вкладки
    $(document).on("click", ".btnTriggerSaveTab", function () {
      console.log("save tab");
      // сохранение вкладки как шаблона
      let current_tab = $(`.tabs-triggers-list-item.active`).attr(
        "data-tab-name"
      );
      console.log(current_tab) //id вкладки, которую хотят сохранить как шаблон



      // classInit.addNewTab(response) - эту строчку надо вставить в .then() после успешного запроса на бэк
      // response - ответ от бэка. Такой же, как если бы создавали новую вкладку
      // далее я циклом пробегусь по новым дашбордам, которые должны отобразиться и отрисую их


      BX.ajax.runComponentAction('rns:dashboard.customizable', 'saveAsTemplate', {
        mode: 'class',
        datatype: 'json',
        data: {
          data: {
            id: current_tab,
          }
        }
      }).then(function (response) {
        console.log(response);
        classInit.addTemplate(response.data.data.ID,response.data.data.NAME)
        let template = classInit.redrawTemplates()
        let container = $("[data-popup-name='list-of-templates'] > ul")
        container[0].innerHTML = template
        // classInit.addNewTab(response);
       
      }, function (response) {
        console.log("Hello")
        console.log(response);
      });
    });
    // Сохранение вкладки

    // Обновить вкладку
    $(document).on("click", ".btnTriggerRefreshTab", function () {
      console.log("refresh tab");

      // BX.ajax.runComponentAction('rns:dashboard.customizable', 'createDashBoard', {
      //   mode: 'class',
      //   datatype: 'json',
      //   data: {
      //     data:{
      //       dashboardElements: [classInit.newDashboard],
      //       dashboard: {
      //         NAME: classInit.newDashboard.name
      //       }
      //     }
      //   }
      // }).then(function (response) {
      //   console.log(response);
      // }, function (response) {
      //   console.log(response);
      // });
    });
    // Обновить вкладку

    $(document).on('click','.templates ul li .btns-container .btnTriggerChangeableTemplate', function(){
      console.log(this)
      console.log("renaming template")
    })

    $(document).on('click', '.templates ul li p', function () {
      //открытие шаблона
      let id_of_template = $(this).attr("data-changeable-name") // id шаблона, который хотят открыть
      console.log(id_of_template)

      //принажатии на пункт из выпадающего списка "список шаблонов" по тз должна создаваться новая вкладка
      //$('.btnTriggerNewTab').click()

      // тут бэк: выозов контроллера по созданию вкладки или же какой-то новый для получения данных по шаблону
      BX.ajax.runComponentAction('rns:dashboard.customizable', 'createOnTemplateDashboard', {
        mode: 'class',
        datatype: 'json',
        data: {
          data: {
            id: id_of_template,
          }
        }
      }).then(function (response) {
        console.log(response);
        console.log(classInit.initDatasets(response))
        
        classInit.addNewTab({
          data:
          {
            data:
            {
              ID: response.data.data["ID"],
              NAME: response.data.data["NAME"]
            }
          }
        })
        // classInit.addNewTab(response);
      //   response = {
      //     "status": "success",
      //     "data": {
      //         "id": response.data.data["ID"],
      //         "dasboardElement": {
      //             "id": "2023",
      //             "name": "Название дашборда",
      //             "row": "1",
      //             "col": "1",
      //             "sizeX": "1",
      //             "sizeY": "1",
      //             "type": "pie",
      //             "coreEntityType": "Task",
      //             "attributes": [
      //                 "STATUS"
      //             ],
      //             "filterParams": [],
      //             "buildOnOptions": {
      //                 "all": 685,
      //                 "count": {
      //                     "STATUS": {
      //                         "Завершено": 16,
      //                         "Просрочено": 386,
      //                         "Новое (не просмотренo)": 108,
      //                         "Принято ответственным": 169,
      //                         "Выполняется": 2,
      //                         "Отложено": 1,
      //                         "Ждет контроля": 3
      //                     }
      //                 }
      //             }
      //         }
      //     },
      //     "errors": []
      // }
        current_tab = classInit.tabs.filter((el) => el.id == response.data["id"])[0];
        // classInit.addWidjet(current_tab, response)
        initDashboards(classInit.commonColors, classInit.datasets)
      }, function (response) {
        console.log(response);
      });
      //в .then() после удачного запроса вставить 191-200 строки. Сейчас идет добавление вкладки исключительно на фронте в данном клике




    })

    // Удаление вкладки
    $(document).on("click", ".btnTriggerRemoveTab", function () {
      console.log("remove tab");
      if (!confirm("Вы уверены, что хотите удалиь вкладку?")){
        return
      }
      let id_tab = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .attr("data-tab-name"); //id вкладки, которую удаляем
      console.log($(this))
      let parent = $(this)
        .parent()
        .parent()
        .parent()
        .parent()[0];
      $(this)
        .parent()
        .parent()
        .parent()
        .parent().parent()[0].removeChild(parent)
      BX.ajax
        .runComponentAction("rns:dashboard.customizable", "deleteDashBoard", {
          mode: "class",
          datatype: "json",
          data: {
            data: {
              id: id_tab,
            },
          },
        })
        .then(
          function (response) {
            console.log(response);
            let indTab = classInit.tabs.indexOf(classInit.tabs.find(el => el.id == id_tab))
            classInit.tabs.splice(indTab, 1)
          },
          function (response) {
            console.log(response);
          }
        );
    });
    // Удаление вкладки
    // Панель вкладок конец

    // Верхняя панель начало
    // Список шаблонов
    $(document).on("click", ".btnTriggerChangeTitleTemplate", function () {
      console.log("Start renaming template current input name");
    });
    $(document).on("focusout", ".template-input-name.active", function () {
      console.log("Stop renaming template active input name");
      let value = this.value; // новое название
      let id = $(this).attr("data-changeable-name"); //id измененного шаблона
      console.log(value, id)

    });
    // Список шаблонов

    // Удалить шаблон
    $(document).on("click", ".btnTriggerRemoveTemplate", function () {
      console.log("Remove current template");
      console.log($(this).attr("name")) // id шаблона, который хотят удалить
    });

    // Вызов фильтра
    $(document).on("click", ".btnTriggerFilter", function (event) {
      let currentPopupName = $(this).attr("data-popup-name");
      let neededPopup = $(".popup[data-popup-name=" + currentPopupName + "]");
      if ($(neededPopup).hasClass("active")) {
        $(neededPopup).removeClass("active");
        $(this).removeClass("active");
      } else {
        $(neededPopup).addClass("active");
        $(this).addClass("active");
      }
    });

    //модальное коно для создания графика
    $(document).on("click", ".btnTriggerAddNewGraph", function (event) {
      let currentPopupName = $(this).attr("data-popup-name");
      let neededPopup = $(".popup[data-popup-name=" + currentPopupName + "]");
      if ($(neededPopup).hasClass("active")) {
        $(neededPopup).removeClass("active");
        $(this).removeClass("active");
      } else {
        $(neededPopup).addClass("active");
        $(this).addClass("active");
      }
    });

    $(document).on("click", ".popup_addNewGraph .tab button", function (event) {
      const activetab = $(this).parent().find(".active")[0];
      activetab.classList.toggle("active");
      this.classList.toggle("active");
      classInit.newDashboard = new Dashboard();
      classInit.createDashboard();
      classInit.newDashboard.UF_ENTITY_TYPE = $(this).attr("data-code");

      classInit.redrawWidow($(this).attr("data-name"));
    });

    $(document).on("click", ".addAtr", function () {
      const previos = $(this.previousElementSibling);
  
      const index = classInit.newDashboard.attributes[classInit.newDashboard.attributes.length - 1] ? classInit.newDashboard.attributes[classInit.newDashboard.attributes.length - 1].id + 1 : 0
      //отрисовка нового атрибута
      classInit.drawStatus(
        $(".tab .tablinks.active").attr("data-name"),
        index,
        this
      );
    });

    $(document).on("click", ".saveDashb", function () {
      //добавление элемента графика
      let current_tab = $(`.tabs-triggers-list-item.active`).attr(
        "data-tab-name"
      );

      current_tab = classInit.tabs.filter((el) => el.id == current_tab)[0];
      if (current_tab.dataDasb.length == classInit.maxDashbOnTab) {
        alert("Достигнуто максимальное количество графиков на дашборде");
        return;
      }
      let allIds = [];
      if (current_tab) {
        current_tab.dataDasb.forEach((el) => allIds.push(el.id));
      }
      console.log(allIds); // все id виджетов на текущей вкладке
      BX.ajax
        .runComponentAction(
          "rns:dashboard.customizable",
          "createDashBoardElement",
          {
            mode: "class",
            datatype: "json",
            data: {
              data: {
                dashboardElement: classInit.newDashboard,
              },
            },
          }
        )
        .then(
          function (response) {
            //id нового элемента
            console.log(current_tab);
            console.log(response);
            //успешное создание нового дашборда
            let current_tab_html = $(`.tabs-content-block[data-tab-name="${current_tab.id}"]`);
            console.log(current_tab_html.children('div').children('div').children('ul'))
            current_tab_html = current_tab_html.children('div').children('div').children('ul')[0]
           
            classInit.addWidjet(current_tab, response)

            console.log( $(`.popup.active[data-popup-name="addNewGraph"]`))
            $(`.popup.active[data-popup-name="addNewGraph"]`)[0].classList.toggle('active');
            
            allIds.push(response.data.id);
            BX.ajax
              .runComponentAction(
                "rns:dashboard.customizable",
                "updateDashBoard",
                {
                  mode: "class",
                  datatype: "json",
                  data: {
                    data: {
                      id: current_tab.id,
                      // dashboardElements: [classInit.newDashboard],
                      dashboard: {
                        ELEMENTS: allIds,
                        NAME: current_tab.name,
                      },
                    },
                  },
                }
              )
              .then(
                function (response) {
                  //id нового элемента
                  console.log(response);
                  location.reload();
                },
                function (response) {
                  console.log(response);
                }
              );
          },
          function (response) {
            console.log(response);
          }
        );
    });

    // Экспорт
    $(document).on("click", ".btnTriggerExport", function () {
      let currentExportType = $(this).attr("data-export-type");
      console.log("Export to type - " + currentExportType);
    });
    // Экспорт

    // Добавление графика
    $(document).on("click", ".btnTriggerAddNewGraph", function () {
      classInit.createDashboard();
      // BX.ajax.runComponentAction('rns:dashboard.customizable', 'createDashBoardElement', {
      //   mode: 'class',
      //   datatype: 'json',
      //   data: {
      //     data:{
      //       dashboardElements: [classInit.newDashboard],
      //       dashboard: {
      //         NAME: classInit.newDashboard.name
      //       }
      //     }
      //   }
      // }).then(function (response) {
      //   console.log(response);
      // }, function (response) {
      //   console.log(response);
      // });
      // console.log("Add new graphic");
    });
    // Добавление графика
    // Верхняя панель конец

    // Настройки карточки в рабочей области начало
    // Изменить дэшборд
    $(document).on("click", ".btnTriggerRebuildBoard", function () {
      let currentPopupName = $(this).attr("data-popup-name");
      let neededPopup = $(".popup[data-popup-name=" + currentPopupName + "]");
      let id = currentPopupName.substring("filter_item".length, currentPopupName.length)

      // let filter = { id: id };
      if (!$(neededPopup).hasClass("active")) {
        $(neededPopup).addClass("active");
        $(this).addClass("active");
        const li = $(this).closest("li").parent().closest("li");
        if (li.attr("data-col")==1){
          console.log(neededPopup[0].style)
          neededPopup[0].style.left="78px"
        }

        let container = neededPopup[0];
        container.innerHTML = "";
        let containerTabs = document.createElement('div');
        containerTabs.setAttribute("class", "tab");



        containerTabs.innerHTML = drawNamePresets(); //заполнение пресетов слева в окне

        container.appendChild(containerTabs)

        //контент справа фильтра


        //container.appendChild(tabContent)




        // text = document.createElement("label");
        // text.innerText = "Отчетный период";
        // container.appendChild(text);
        // container.appendChild(document.createElement("br"));
        // let block = document.createElement("div");
        // block.className = "ReportSelect";
        // let select = document.createElement("select");
        // select.addEventListener("change", function () {
        //   filter.report = { name: this.value };
        //   let element = classInit.report_type.filter(
        //     (el) => el.code == this.value
        //   )[0];
        //   let parent = $(this).parent()[0];
        //   let childs = parent.childNodes;

        //   if (childs.length > 1) {
        //     //значит уже что-то добавляли
        //     parent.removeChild(childs[1]);
        //   }

        //   if (element?.type == "list") {
        //     //надо добавить дополнительный селект
        //     let block = document.createElement("div");
        //     let selectSubType = document.createElement("select");
        //     element?.select.forEach((item, index, array) => {
        //       let option = document.createElement("option");
        //       option.innerText = item.name;
        //       option.setAttribute("value", item.code);
        //       selectSubType.appendChild(option);
        //     });
        //     selectSubType.addEventListener("change", function () {
        //       filter.report.list = this.value;
        //     });

        //     block.appendChild(selectSubType);
        //     parent.appendChild(block);
        //   }
        //   if (element?.type == "range") {
        //     filter.report = {
        //       name: this.value,
        //       range: ["", ""],
        //     };
        //     //     //добавление двух инпутов для диапазиона
        //     let block = document.createElement("div");
        //     let date1SubType = document.createElement("input");
        //     date1SubType.setAttribute("type", "date");
        //     date1SubType.setAttribute(
        //       "style",
        //       `BACKGROUND-COLOR: #F0F5FF;
        // PADDING: 12PX;
        // BORDER-RADIUS: 12PX;
        // BORDER: NONE;`
        //     );
        //     block.appendChild(date1SubType);
        //     date1SubType.addEventListener("input", function () {
        //       filter.report.range[0] = this.value;
        //     });
        //     date1SubType.addEventListener("change", function () {
        //       filter.report.range[0] = this.value;
        //     });

        //     let date2SubType = document.createElement("input");
        //     date2SubType.setAttribute("type", "date");
        //     date2SubType.setAttribute(
        //       "style",
        //       `BACKGROUND-COLOR: #F0F5FF;
        // PADDING: 12PX;
        // BORDER-RADIUS: 12PX;
        // BORDER: NONE;`
        //     );
        //     block.appendChild(date2SubType);
        //     date2SubType.addEventListener("input", function () {
        //       if (filter.report.range) {
        //         filter.report.range[1] = this.value;
        //       } else {
        //         filter.report.range = ["", ""];
        //       }
        //     });
        //     date2SubType.addEventListener("change", function () {
        //       if (filter.report.range) {
        //         filter.report.range[1] = this.value;
        //       } else {
        //         filter.report.range = ["", ""];
        //       }
        //     });
        //     parent.appendChild(block);
        //   }
        // });
        // let dopopt = document.createElement("option");
        // dopopt.innerHTML = "Выберите опцию";
        // dopopt.setAttribute("value", "default");
        // select.appendChild(dopopt);
        // for (const el of classInit.report_type) {
        //   let option = document.createElement("option");
        //   option.setAttribute("value", el.code);
        //   option.innerText = el.name;
        //   select.appendChild(option);
        // }



        // block.appendChild(select);
        // container.appendChild(block);


        // //состояние проекта
        // text = document.createElement("h3");
        // text.innerHTML = "Аттрибуты";
        // container.appendChild(text);
        // container.appendChild(document.createElement("br"));

        // //аттрибуты на окне изменения
        // let but = document.createElement("button");
        // but.className = "addAttr";
        // but.innerText = "Добавить аттрибут";
        // filter.attributes = [];


        // but.addEventListener("click", function () {
        //   const groupsAttr = classInit.groups.filter((el) => el.name == "Проекты")[0].data;
        //   console.log(groupsAttr)
        //   let index;
        //   if (filter.attributes.length > 0) {
        //     index = filter.attributes[filter.attributes.length - 1].id + 1
        //   }
        //   else {
        //     index = 0
        //   }
        //   let nodediv = document.createElement("div");
        //   nodediv.className = "changeContentStatus";
        //   nodediv.setAttribute("data-attr", index);
        //   filter.attributes.push({ id: index, name: "", data: "" })

        //   let nodeselect = document.createElement("select");
        //   nodeselect.setAttribute("data-attr", index);

        //   for (const el of groupsAttr) {
        //     let option = document.createElement("option");
        //     option.innerText = el.name;
        //     option.setAttribute("value", el.name);
        //     nodeselect.appendChild(option);
        //   }
        //   nodeselect.addEventListener("change", function () {
        //     //изменение аттрибутов
        //     const data_attr = $(this).attr("data-attr"); //номер атттриубта
        //     const elemGroups = classInit.groups.find(
        //       (el) => el.code == "Project"
        //     );
        //     const code_attr = elemGroups.data.find(
        //       (el) => el.code == this.value
        //     );

        //     const parent = $(this).parent()[0];
        //     let block = document.createElement("div");
        //     block.setAttribute("class", "attrInput")
        //     let flag = filter.attributes.filter(el => el.id == data_attr)[0];

        //     let ind = filter.attributes.indexOf(flag);

        //     if (ind >= 0) {
        //       filter.attributes[ind].name = code_attr.code;
        //       filter.attributes[ind].data = "";
        //     }
        //     else {
        //       ind = index
        //       if (filter.attributes) {
        //         filter.attributes.push({ id: index, name: code_attr.code, data: "" });
        //       }
        //       else {
        //         filter.attributes = [{ id: index, name: code_attr.code, data: "" }]
        //       }
        //     }


        //     const childs = $(this).siblings('.attrInput');
        //     let but = $(this).siblings('.deleteAttrBut');
        //     if (childs.length > 0) {
        //       parent.removeChild(childs[0]);
        //     }
        //     console.log(code_attr)
        //     if (code_attr.type == "checkbox") {
        //       //значит у нас чекбокс должен добавиться
        //       let checkbox = document.createElement("input");
        //       checkbox.setAttribute("type", code_attr.type);
        //       filter.attributes[data_attr].data = false;
        //       checkbox.addEventListener("change", function () {
        //         filter.attributes[ind].data = this.checked;

        //       });

        //       let label = document.createElement("label");
        //       label.innerText = "Да/нет";
        //       block.appendChild(checkbox);
        //       block.appendChild(label);

        //     }
        //     if (code_attr.type == "text" || code_attr.type == "number") {
        //       let checkbox = document.createElement("input");
        //       checkbox.setAttribute("type", code_attr.type);
        //       filter.attributes[data_attr].data = "";
        //       checkbox.addEventListener("input", function () {
        //         filter.attributes[ind].data = this.value;

        //       });
        //       block.appendChild(checkbox);

        //     }
        //     if (code_attr.type == "select") {
        //       let select = document.createElement("select");
        //       code_attr.data.forEach((el) => {
        //         let option = document.createElement("option");
        //         option.setAttribute("value", el.code);
        //         option.innerText = el.name;
        //         select.appendChild(option);
        //       });
        //       select.addEventListener("change", function () {
        //         filter.attributes[ind].data = this.value;

        //       });
        //       block.appendChild(select);
        //     }
        //     parent.insertBefore(block, but[0]);

        //   });

        //   let deleteBut = document.createElement('button');
        //   deleteBut.setAttribute("class", "deleteAttrBut");
        //   deleteBut.innerText = "X";
        //   deleteBut.addEventListener("click", function () {
        //     const parent1 = $(this).parent()
        //     const parent2 = parent1.parent()[0]
        //     let id = parent1.attr("data-attr")
        //     filter.attributes = filter.attributes.filter(el => el.id != id)
        //     console.log(filter.attributes)

        //     parent2.removeChild(parent1[0])
        //   })


        //   nodediv.appendChild(nodeselect);
        //   nodediv.appendChild(deleteBut);
        //   container.insertBefore(nodediv, $(".addAttr")[0])

        // })

        // container.appendChild(but);

        // container.appendChild(document.createElement("br"));
        // container.appendChild(document.createElement("br"));









        // //кнопка на вывод
        // but = document.createElement("button");
        // but.innerText = "Применить";
        // but.className = "saveFilter";
        // but.addEventListener("click", function () {
        //   console.log(filter)
        // })
        // container.appendChild(but);
      }
    });

    $(document).on("click", ".change_filters .tab .tablinks", function (event) {
      // const activetab = $(this).parent().parent().find(".active")[0];
      const activetab = $(".change_filters.active").find(".active")[0]
      activetab?.classList.toggle("active");
      $(this).parent()[0].classList.toggle("active");
      let id_preset = $(this).parent().attr("data-id-preset")
      let container = $(".change_filters.active");
      let flFind = container.find(".tabcontent");
      if (flFind.length > 0) {
        container[0].removeChild(flFind[0])
      }
      //отображение содержимого пресета
      container[0].appendChild(classInit.drawPreset(id_preset))
      classInit.copy_preset.data.forEach(el => {
        console.log(el)
        const id_preset = $(".change_filters.active .tabsButton.active").attr("data-id-preset");
        const current_preset = classInit.presets.find(el => el.id == id_preset);
        // const index_of_new_attr = current_preset.data ? current_preset.data[current_preset.data.length - 1].id + 1 : 0
        if (current_preset.unity_type) {
          const name_of_unity = current_preset.unity_type
          const tabcontent = $(".change_filters.active .savePreset")
          tabcontent[0].insertAdjacentHTML('beforebegin', classInit.drawNewAttrForFilter(name_of_unity, el.id))
          let select = $(`.changeContentStatus[data-attr=${el.id}] select`)
          select[0].value = el.code;
          let changeEvent = new Event('change');
          select.val(el.code).trigger('change')
          // const indexPreset = classInit.presets.indexOf(current_preset)
          // classInit.presets[indexPreset].data.push({ id: index_of_new_attr, code: null, value: null })
        }
        else {
          console.log("Не выбрана сущность")
        }
      })
      // activetab.classList.toggle("active");

      // classInit.newDashboard = new Dashboard();
      // classInit.createDashboard();
      // classInit.newDashboard.UF_ENTITY_TYPE = $(this).attr("data-code");
      // classInit.redrawWidow($(this).attr("data-name"));
    });


    // Изменить дэшборд
    // Удалить дэшборд
    $(document).on("click", ".btnTriggerRemoveBoard", function () {
      console.log("remove board item");
      if (!confirm("Вы уверены, что хотите удалить дашборд?")){
        return;
      }
      let id_widjet = $(this).parent().parent().attr("data-popup-name"); //id виджета, который хотят удалить

      BX.ajax
        .runComponentAction(
          "rns:dashboard.customizable",
          "deleteDashBoardElement",
          {
            mode: "class",
            datatype: "json",
            data: {
              data: {
                id: id_widjet,
              },
            },
          }
        )
        .then(
          function (response) {
            console.log(response);
            classInit.deleteDashboard(response.data.id)
          },
          function (response) {
            console.log(response);
          }
        );
    });
    // Удалить дэшборд
    // Настройки карточки в рабочей области конец

    // Изменить права модальное окно начало
    // Добаление нового пользователя
    let newAddPersonCounter = 0;
    $(document).on("click", ".btnRemoveAddPersonBlock", function () {
      let currentParentContainer = $(this).closest(".add-person-block-input");
      let currentSelect = $(currentParentContainer).children("select");
      $(currentSelect).val(null);
      $(currentParentContainer).remove();
    });
    $(document).on("click", ".btnAddPersonNewSelect", function () {
      let addPersonBlock = $(".add-person-block");
      let addPersonTemplate = `
                <div class="add-person-block-input">
                    <p class="placeholder-text">Выберите пользователя:</p>
                    <div class="selector-container">
                        <select name="person-${newAddPersonCounter}" value="" class="select2 newSelect2">
                            <option></option>
                            <option value="v1">Петров И.Д.</option>
                            <option value="v2">Иванов П.Д.</option>
                            <option value="v3">Сидоров П.Д.</option>
                        </select>
                        <button type="button" class="btn btn-icon-small btnRemoveAddPersonBlock">
                            <img src="./assets/img/close.svg" alt="Удалить">
                        </button>
                    </div>
                </div>
            `;
      $(addPersonBlock).append(addPersonTemplate);
      // когда будет подключен битрикс,нужно будет передавать данные через аякс/как-то как будут передаваться данные.
      // будет использоваться методы битрикс ран компонент экшн для отправки получения..
      // ..данных, пока всё будет лететь в класс.пхп, возможно поменяю поведение позже
      $(".newSelect2").select2(optionForCommonSelect);
    });
    // Добаление нового пользователя
    // Изменить права модальное окно конец

    //отрисовка фильтра
    // function drawAttributer(data){

    //     //data = [{id:'project', datasets: [{code: "code", title: "title"}] }]
    //   // for (let i=0;i<data.length;i++){
    //         let template_checkboxes = '<h1>Раздел 1</h1></br><div style=" column-count:3;">';
    //         for (let j=0;j<data.length; j++){
    //             template_checkboxes+=`<div style="display: flex; justify-content: start;gap: 10px;"><input type='checkbox' name='${data[j].code}'/>`;
    //             template_checkboxes+=`<label for='${data[j].code}'>${data[j].name}</label></div><br/>`;
    //         }
    //         template_checkboxes+='</div>';
    //         $('.popup.widjet-popup-position-under[data-popup-name="filter"]')[0].innerHTML += template_checkboxes;
    //    // }

    // }
    // const data = [{id:'project', datasets: [{code: "code", title: "title"}, {code: "code2", title: "title2"}, {code: "code3", title: "titl3"}] }]
    // //drawAttributer(data);

    // // console.log(dashb_array["FIELDS"])
    // for (const elem of dashb_array["FIELDS"]){
    //     // console.log(elem);
    //     drawAttributer(elem);

    // }
    console.log(dashb_array)


    $(document).on('click', '.popupTrigger', function () {
      let currentPopupName = $(this).attr('data-popup-name');
      let neededPopup = $('.popup[data-popup-name=' + currentPopupName + ']');
      if ($(neededPopup).hasClass('active')) {
        $(neededPopup).removeClass('active');
        $(this).removeClass('active');
      } else {
        $(neededPopup).addClass('active');
        $(this).addClass('active');
      }
    })

    $(document).on('mouseup', 'body', function (e) {
      let popupTriggerParent = $(e.target).closest('.popupTrigger'),
        popupBodyParent = $(e.target).closest('.popup');
      if ($(popupTriggerParent).length == 0 && $(popupBodyParent).length == 0) {
        $('.popup').removeClass('active');
        $('.popupTrigger').removeClass('active');
      }
    });

    //жинамическая отрисовка заранее заданных
    function draw_charts_init() {
      const container = $(".tabs-triggers-container .container .tabs-triggers-list");
      container.innerHTML = "";
      for (let i=1; i< dashb_array["DASHBOARDS"];i++){
        container.innerHTML+=generateTemplateDachboards({...dashb_array["DASHBOARDS"], i})
      }
    }
    // draw_charts_init()

    function generateTemplateDachboards({ID, i}){
      const template = ` <div 
      data-tab-name="${ID}"
      data-popup-name="${ID}-settings"
      class="tabs-triggers-list-item ${i==1 ? 'active' : ''} tabPopupTrigger">
      <div class="tabs-triggers-list-item-container">
          <div class="tab-input-container">
              <p class="tabs-triggers-title changeable-title" data-changeable-name="<?=$dashboard['ID']?>"><?=$dashboard['NAME']?></p>
              <input 
                  class="tabs-input-name input-without-any-styles tabs-triggers-title changeable-input" 
                  type="text" 
                  value="Аналитика по трудозатратам (план/факт)" 
                  name="${ID}-name" 
                  data-changeable-name="${ID}"
                  readonly
              >
          </div>

              <div data-popup-name="${ID}-settings" class="popup widjet-popup-position-under">
                  <ul class="popup-list">
                      <li
                          class="btnTriggerChangeNameTab btnTriggerChangeableIn"
                          data-changeable-name="${ID}"
                          data-tab-input="${ID}">
                          <p>Изменить название</p>
                      </li>
                      <li class="btnTriggerSaveTab">
                          <p>Сохранить как шаблон</p>
                      </li>
                      <li class="btnTriggerRefreshTab">
                          <p>Обновить шаблон</p>
                      </li>
                      <li
                          class="btnTriggerModal btnTriggerModalRightsSets"
                          data-trigger-modal-section="rights-sets">
                          <p>Изменить права</p>
                      </li>
                      <li class="btnTriggerRemoveTab">
                          <p>Удалить</p>
                      </li>
                  </ul>
              </div>
      </div>
  </div>`
  return template;
    }



  });
})(jQuery);
