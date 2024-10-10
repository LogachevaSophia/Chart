// (function ($) {

function initDashboards(commonColors, datasets) {
  $(document).ready(function () {
  // строка для харда графика трудозатрат  
  if (classInit.flag){
    datasets = classInit.createDashboartPlanFact()
  classInit.flag = false}
    let charts = $(".chart-canvas");
    console.log(charts)
    if (classInit.arrCharts){
      classInit.arrCharts.forEach(el=> el.destroy())
    }
    // charts inits
    const getOrCreateLegendList = (chart, id) => {
      const legendContainer = $(id);
      let listContainer = legendContainer[0].querySelector("ul");

      if (!listContainer) {
        listContainer = document.createElement("ul");
        legendContainer[0].appendChild(listContainer);
      }
      return listContainer;
    };

    const htmlLegendPlugin = {
      id: "htmlLegend",
      afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
          ul.firstChild.remove();
        }

        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        items.forEach((item) => {
          const li = document.createElement("li");
          li.style.alignItems = "center";
          li.style.cursor = "pointer";
          li.style.display = "flex";
          li.style.flexDirection = "row";

          li.onclick = () => {
            const { type } = chart.config;
            if (type === "pie" || type === "doughnut") {
              // Pie and doughnut charts only have a single dataset and visibility is per item
              chart.toggleDataVisibility(item.index);
            } else {
              chart.setDatasetVisibility(
                item.datasetIndex,
                !chart.isDatasetVisible(item.datasetIndex)
              );
            }
            chart.update();
          };

          // Color box
          const boxSpan = document.createElement("span");
          boxSpan.style.background = item.fillStyle;
          boxSpan.style.borderColor = item.strokeStyle;
          boxSpan.style.borderRadius = "50%";
          boxSpan.style.borderWidth = item.lineWidth + "px";
          boxSpan.style.display = "inline-block";
          boxSpan.style.flexShrink = 0;
          boxSpan.style.height = "20px";
          boxSpan.style.marginRight = "10px";
          boxSpan.style.width = "20px";

          // Text
          const textContainer = document.createElement("p");
          textContainer.style.margin = 0;
          textContainer.style.padding = 0;
          textContainer.style.textDecoration = item.hidden
            ? "line-through"
            : "";

          const text = document.createTextNode(item.text);
          textContainer.appendChild(text);

          li.appendChild(boxSpan);
          li.appendChild(textContainer);

          ul.appendChild(li);
        });
      },
    };

    function createTable(chart_container, data, color) {
      const chartBox = $(chart_container)[0];
      $(chartBox).children("canvas")[0].style.display = "none";
      const tablediv = document.createElement("DIV");

      const table = document.createElement("table");
      table.classList.add("chartjs-table");

      const thead = table.createTHead();
      thead.classList.add("chartjs-thead");

      for (let i = 0; i < data.labels.length; i++) {
        thead.insertRow(i);
        thead.rows[i].insertCell(0).innerText = data.data[i];
        thead.rows[i].insertCell(0).innerText = data.labels[i];
        if (i % 2 == 0) {
          thead.rows[i].style.background = color[0];
        }
      }

      thead.insertRow(0);
      thead.rows[0].insertCell(0).innerText = "Количество проектов";
      thead.rows[0].insertCell(0).innerText = "Стоимость";
      

      chartBox.appendChild(tablediv);
      tablediv.appendChild(table);
    }

    console.log(datasets)
    let arrCharts = []
    let i = 0;
    for (let j = 0; j < datasets.length; j++) {
      for (let l = 0; l < datasets[j].datasets.length; l++) {
        let currentChart = $(charts[i]);
        let currentTypeChart = $(currentChart).attr("data-chart-type");
        let currentLegendContainer = $(
          "#legend-container-" + $(currentChart).attr("id")
        );

        let currentConfig = {
          type: currentTypeChart,
          //data: currentTypeChart === 'pie' ? configDataPie : configDataBars,
          data: datasets[j].datasets[l],
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              htmlLegend: {
                containerID: currentLegendContainer[0],
              },
              legend: {
                display: false,
              },
            },
          },
          plugins: [htmlLegendPlugin],
        };

        if (currentTypeChart == "table") {
          createTable($(charts[i]).parent(), datasets[j].datasets[l], [
            "#80" +
              datasets[j].datasets[l].color?.slice(
                1,
                datasets[j].datasets[l].color.length
              ),
          ]);
        } else {
         let newChart = new Chart(currentChart, currentConfig);
         arrCharts.push(newChart)
        }
        i++;
      }
    }
    classInit.arrCharts = arrCharts

    // inits
  });
}

function  checkAll(event){

  //выбрать все чекбоксы
  const checkboxes = $(event).parent().parent().next().find('input[type="checkbox"]');
  for (const checkbox of checkboxes){
    checkbox.checked = event.checked;
  }
}

function deleteAll(event){

  //убрать все чекбоксы
  const checkboxes = $(event).parent().next().find('input[type="checkbox"]');
  for (const checkbox of checkboxes){
    checkbox.checked = false;
  }
}

 // Изменение названия таба,тайтла по клику на триггер
 function changeableInputInit(currentItem) {
  let currentChangeableName = $(currentItem).attr("data-changeable-name");
  let currentChangeableInput = $(
    ".changeable-input[data-changeable-name=" + currentChangeableName + "]"
  );
  let currentChangeableTitle = $(
    ".changeable-title[data-changeable-name=" + currentChangeableName + "]"
  );
  $(currentItem).addClass("active");
  $(currentChangeableInput).removeAttr("readonly");
  $(currentChangeableInput).addClass("active");
  $(currentChangeableTitle).addClass("active");
  $(currentChangeableInput).select();
}
//изменение названия шаблона
function changeableInputInitTemplate(currentItem) {
  console.log("HELLO")
  let currentChangeableName = $(currentItem).attr("data-changeable-name");
  let currentChangeableInput = $(
    "li[data-id="+currentChangeableName+ "] .changeable-input[data-changeable-name=" + currentChangeableName + "]"
  );
  let currentChangeableTitle = $(
    "li[data-id="+currentChangeableName+ "] .changeable-title[data-changeable-name=" + currentChangeableName + "]"
  );

  $(currentItem).addClass("active");
  $(currentChangeableInput).removeAttr("readonly");
  $(currentChangeableInput).addClass("active");
  $(currentChangeableTitle).addClass("active");
  $(currentChangeableInput).select();
}
