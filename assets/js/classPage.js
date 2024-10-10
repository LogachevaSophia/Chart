class SettingDashboards {
  commonColors = [
    "#053B75",
    "#0D4CD3",
    "#E11432",
    "#EE3F58",
    "#FED13E",
    "#F8B200",
    "#FF8A00",
    "#2DC36A",
    "#16A086",
    "#12826E",
    "#9B3BE5",
    "#FCD9DE",
    "#FEF0CC",
    "#DDF5E7",
    "#9DACCE",
  ];

  //инициализация
  constructor() {
    this.allAttributes = this.createObjectAttribites();
    this.datasets = this.initDatasets(); //преобразование входящий данных в массив объектов Dashboard
    this.datasets = [
      {
        "datasets": [
          {
            "datasets": [
              {
                "label": "Завершено",
                "data": [
                  16
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "Просрочено",
                "data": [
                  511
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "Новое (не просмотренo)",
                "data": [
                  63
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "Принято ответственным",
                "data": [
                  90
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "Выполняется",
                "data": [
                  2
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "Отложено",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "Ждет контроля",
                "data": [
                  3
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              }
            ],
            "labels": [
              "Статус"
            ]
          }
        ],
        "attributes": [
          "STATUS"
        ],
        "type": "bar",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "259",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "labels": [
              "21.01.2023 05:02:00",
              "31.01.2023 19:00:00",
              "31.03.2023 19:00:00",
              "31.07.2023 19:00:00",
              "31.10.2023 19:00:00",
              "29.12.2023 19:00:00",
              "30.12.2024 19:00:00",
              "EMPTY",
              "01.02.2023 19:00:00",
              "30.06.2023 19:00:00",
              "29.09.2023 19:00:00",
              "31.08.2023 19:00:00",
              "28.02.2023 19:00:00",
              "31.01.2024 19:00:00",
              "25.01.2023 19:00:00",
              "24.01.2023 19:00:00",
              "30.01.2023 19:00:00",
              "23.01.2023 19:00:00",
              "29.01.2023 19:00:00",
              "27.01.2023 19:00:00",
              "26.01.2023 19:00:00",
              "15.02.2023 19:00:00",
              "30.11.2023 19:00:00",
              "28.04.2023 19:00:00",
              "31.07.2024 19:00:00",
              "30.08.2024 19:00:00",
              "30.09.2024 19:00:00",
              "29.03.2024 19:00:00",
              "28.02.2025 19:00:00",
              "15.01.2023 19:00:00",
              "30.04.2025 19:00:00",
              "31.05.2023 19:00:00",
              "01.05.2023 19:00:00",
              "01.09.2023 19:00:00",
              "15.08.2023 19:00:00",
              "01.12.2023 19:00:00",
              "20.12.2023 19:00:00",
              "30.12.2023 19:00:00",
              "15.08.2024 19:00:00",
              "01.03.2023 19:00:00",
              "28.03.2023 19:00:00",
              "15.06.2023 19:00:00",
              "30.04.2023 19:00:00",
              "20.06.2023 19:00:00",
              "01.07.2023 19:00:00",
              "01.04.2023 19:00:00",
              "01.06.2023 19:00:00",
              "30.09.2023 19:00:00",
              "15.03.2023 19:00:00",
              "28.08.2023 19:00:00",
              "15.12.2023 19:00:00",
              "15.01.2024 19:00:00",
              "15.03.2024 19:00:00",
              "01.08.2023 19:00:00",
              "01.10.2023 19:00:00",
              "15.10.2023 19:00:00",
              "30.10.2023 19:00:00",
              "17.02.2023 19:00:00",
              "28.06.2024 19:00:00",
              "29.09.2024 19:00:00",
              "30.10.2024 19:00:00",
              "30.11.2024 19:00:00",
              "15.12.2024 19:00:00",
              "20.01.2023 19:00:00",
              "24.02.2023 19:00:00",
              "29.02.2024 19:00:00",
              "31.05.2024 19:00:00",
              "30.04.2024 19:00:00",
              "31.03.2025 19:00:00",
              "30.06.2025 19:00:00",
              "28.07.2024 19:00:00",
              "15.07.2023 19:00:00",
              "29.08.2025 19:00:00",
              "15.11.2023 19:00:00",
              "21.02.2023 19:00:00",
              "30.01.2024 19:00:00",
              "20.03.2024 19:00:00",
              "31.03.2024 19:00:00",
              "01.04.2024 19:00:00",
              "15.09.2024 19:00:00",
              "31.12.2025 19:00:00",
              "25.05.2023 19:00:00",
              "25.07.2023 19:00:00",
              "31.12.2023 19:00:00",
              "30.06.2024 19:00:00",
              "01.06.2024 19:00:00",
              "20.06.2024 19:00:00",
              "01.09.2024 19:00:00",
              "30.08.2023 19:00:00",
              "01.01.2024 19:00:00",
              "15.05.2023 19:00:00",
              "30.05.2023 19:00:00",
              "25.10.2023 19:00:00",
              "28.09.2023 19:00:00",
              "15.10.2024 19:00:00",
              "01.11.2024 19:00:00",
              "01.04.2025 19:00:00",
              "01.06.2025 19:00:00",
              "01.07.2025 19:00:00",
              "01.09.2025 19:00:00",
              "01.11.2025 19:00:00",
              "28.02.2024 19:00:00",
              "20.09.2023 19:00:00",
              "10.12.2023 19:00:00",
              "31.10.2024 19:00:00",
              "04.01.2024 19:00:00",
              "15.05.2024 19:00:00",
              "01.08.2024 19:00:00",
              "01.10.2024 19:00:00",
              "15.02.2025 19:00:00",
              "15.04.2025 19:00:00",
              "15.06.2025 19:00:00",
              "20.10.2023 19:00:00",
              "20.01.2024 19:00:00",
              "15.02.2024 19:00:00",
              "01.03.2024 19:00:00",
              "01.05.2024 19:00:00",
              "15.01.2025 19:00:00",
              "15.04.2024 19:00:00",
              "01.08.2025 19:00:00",
              "15.09.2025 19:00:00",
              "15.10.2025 19:00:00",
              "31.10.2025 19:00:00",
              "01.07.2024 19:00:00",
              "15.07.2025 19:00:00",
              "31.07.2025 19:00:00",
              "01.05.2025 19:00:00",
              "01.10.2025 19:00:00",
              "25.10.2025 19:00:00",
              "01.12.2025 19:00:00",
              "15.12.2025 19:00:00",
              "10.04.2023 19:00:00",
              "17.03.2023 19:00:00",
              "05.05.2023 19:00:00",
              "17.07.2023 19:00:00",
              "15.07.2024 19:00:00",
              "28.08.2024 19:00:00",
              "28.11.2024 19:00:00",
              "27.12.2024 19:00:00",
              "27.02.2023 19:00:00",
              "10.03.2023 19:00:00",
              "11.05.2023 19:00:00",
              "20.06.2025 19:00:00",
              "31.12.2024 19:00:00",
              "30.11.2025 19:00:00",
              "30.12.2022 12:00:00",
              "12.05.2023 19:00:00",
              "20.11.2023 19:00:00",
              "03.04.2023 19:00:00",
              "10.11.2023 19:00:00",
              "20.02.2023 19:00:00",
              "14.04.2023 19:00:00",
              "02.06.2023 19:00:00",
              "24.05.2024 19:00:00",
              "10.07.2024 19:00:00",
              "25.07.2024 19:00:00",
              "04.08.2023 19:00:00",
              "30.07.2024 19:00:00",
              "26.01.2024 19:00:00",
              "09.02.2024 19:00:00",
              "01.02.2024 19:00:00",
              "09.02.2023 19:00:00",
              "03.02.2023 19:00:00",
              "08.03.2023 19:00:00",
              "04.02.2023 19:00:00",
              "05.02.2023 17:00:00",
              "11.03.2023 19:00:00",
              "22.09.2023 19:00:00",
              "09.11.2023 19:00:00",
              "13.10.2023 22:00:00",
              "23.10.2023 12:00:00",
              "19.10.2023 19:00:00",
              "16.10.2023 19:00:00",
              "25.10.2023 09:12:00",
              "10.02.2024 19:00:00",
              "23.02.2024 19:00:00",
              "03.10.2023 19:00:00",
              "17.03.2024 19:00:00",
              "24.03.2024 19:00:00",
              "21.02.2024 19:00:00",
              "08.02.2024 19:00:00",
              "06.09.2023 19:00:00",
              "08.09.2023 19:00:00",
              "08.03.2024 19:00:00",
              "11.11.2023 11:24:00",
              "08.11.2023 19:00:00",
              "24.11.2023 19:00:00",
              "16.11.2023 19:00:00"
            ],
            "datasets": [
              {
                "label": "My First Dataset ",
                "data": [
                  1,
                  15,
                  24,
                  15,
                  12,
                  7,
                  3,
                  80,
                  13,
                  19,
                  5,
                  11,
                  37,
                  3,
                  2,
                  1,
                  2,
                  1,
                  1,
                  6,
                  3,
                  8,
                  22,
                  9,
                  2,
                  3,
                  6,
                  3,
                  5,
                  1,
                  2,
                  8,
                  5,
                  7,
                  3,
                  7,
                  6,
                  4,
                  3,
                  20,
                  3,
                  3,
                  10,
                  2,
                  4,
                  4,
                  4,
                  15,
                  4,
                  1,
                  8,
                  2,
                  2,
                  2,
                  5,
                  2,
                  2,
                  3,
                  3,
                  1,
                  1,
                  3,
                  3,
                  1,
                  1,
                  3,
                  1,
                  1,
                  2,
                  6,
                  1,
                  1,
                  1,
                  3,
                  1,
                  1,
                  1,
                  2,
                  3,
                  2,
                  10,
                  2,
                  1,
                  9,
                  5,
                  2,
                  1,
                  3,
                  2,
                  1,
                  2,
                  2,
                  1,
                  1,
                  3,
                  1,
                  3,
                  2,
                  4,
                  2,
                  2,
                  1,
                  4,
                  2,
                  2,
                  1,
                  1,
                  3,
                  3,
                  2,
                  2,
                  3,
                  2,
                  1,
                  1,
                  3,
                  2,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  2,
                  1,
                  1,
                  2,
                  1,
                  1,
                  1,
                  1,
                  2,
                  1,
                  1,
                  2,
                  3,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  1,
                  1,
                  1,
                  2,
                  1,
                  1,
                  3,
                  3,
                  3,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  3,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  2
                ],
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "tension": 0.1,
                "borderWidth": 2
              }
            ]
          }
        ],
        "attributes": [
          "DEADLINE"
        ],
        "type": "line",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "264",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "datasets": [
              {
                "label": "19.01.2023 05:00:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "19.01.2023 17:46:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "19.01.2023 17:48:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "19.01.2023 17:50:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "19.01.2023 17:52:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "19.01.2023 17:55:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "19.01.2023 17:57:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "19.01.2023 17:58:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "19.01.2023 17:59:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "19.01.2023 18:01:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "19.01.2023 18:06:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.01.2023 10:27:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "23.01.2023 10:28:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.01.2023 10:30:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "23.01.2023 10:30:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "23.01.2023 10:34:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "23.01.2023 10:36:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "23.01.2023 10:37:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "23.01.2023 10:38:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "23.01.2023 10:39:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "23.01.2023 10:41:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.01.2023 10:42:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "23.01.2023 10:43:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "23.01.2023 10:45:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "23.01.2023 10:46:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "23.01.2023 10:46:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "23.01.2023 10:47:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "23.01.2023 10:50:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "23.01.2023 11:01:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "23.01.2023 11:06:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "23.01.2023 11:06:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "23.01.2023 11:07:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "23.01.2023 11:08:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "23.01.2023 11:09:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "23.01.2023 11:11:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "23.01.2023 11:12:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "23.01.2023 11:13:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "23.01.2023 14:34:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "23.01.2023 15:15:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "24.01.2023 14:28:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "24.01.2023 15:23:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "24.01.2023 15:44:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "25.01.2023 14:50:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 09:56:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 10:21:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 11:01:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 11:37:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 11:39:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 11:40:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 11:45:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 11:47:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 11:48:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 11:49:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 11:50:38",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 11:54:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 11:54:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 11:55:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 11:56:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 11:58:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 11:59:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 12:00:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 12:00:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 12:01:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 12:03:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 12:03:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 12:04:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:05:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 12:05:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 12:06:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:06:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 12:07:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:08:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 12:09:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 12:10:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:10:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 12:11:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 12:29:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 12:29:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 12:30:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:30:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:31:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:32:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 12:32:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 12:33:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 12:34:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 12:34:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 12:35:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:36:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 12:37:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 12:37:37",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 12:38:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:40:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 12:40:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 12:42:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:42:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:44:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 12:44:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 12:45:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 12:46:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 12:46:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 12:47:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 12:48:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 12:49:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 12:49:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 12:50:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 12:50:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:51:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:52:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 12:52:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 12:53:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:53:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 12:54:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 12:56:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 12:57:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 12:57:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 12:58:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 12:59:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 12:59:37",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 12:59:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 13:01:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 13:01:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 13:03:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 13:04:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 13:04:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 13:05:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 13:05:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 13:06:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 13:08:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 13:10:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 13:10:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 13:12:38",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 13:13:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 13:14:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 13:15:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 13:16:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 13:17:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 13:20:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 13:21:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 13:22:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 13:23:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 13:23:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 13:24:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 13:25:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 13:26:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 13:26:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 13:26:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 13:31:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 13:32:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 13:33:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 13:35:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 13:38:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 13:39:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 13:41:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 13:42:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 13:43:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 13:44:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 13:45:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 13:46:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 13:48:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 13:49:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 13:50:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 13:51:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 13:52:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 13:53:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 13:54:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 13:55:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 13:56:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 14:00:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 14:01:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 14:03:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 14:03:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 14:35:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 14:40:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 14:42:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 14:43:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 14:44:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 14:45:38",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 14:48:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 14:49:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 14:50:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 14:51:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 14:52:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 14:53:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 14:53:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 14:55:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 14:56:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 14:58:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 15:00:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 15:02:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 15:03:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 15:04:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 15:08:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 15:11:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 15:12:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 15:13:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 15:15:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 15:17:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 15:23:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 15:24:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 15:26:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 15:27:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 15:28:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 15:29:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 15:31:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 15:33:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 15:38:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 15:39:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 15:39:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 15:43:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 15:46:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 15:47:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 15:47:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 15:48:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 15:48:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 15:49:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 15:54:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 15:55:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 15:56:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 15:57:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 16:03:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 16:03:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 16:04:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 16:05:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 16:05:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 16:06:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 16:07:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 16:07:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 16:08:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 16:08:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 16:09:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 16:10:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 16:10:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 16:11:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 16:13:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 16:14:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 16:16:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 16:22:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 16:23:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 16:24:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 16:26:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 16:26:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 16:28:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 16:28:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 16:30:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 16:30:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 16:31:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 16:32:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 16:34:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 16:37:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 16:39:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 16:40:49",
                "data": [
                  2
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 16:42:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 16:43:38",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 16:43:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 16:45:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 16:45:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 16:46:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 16:47:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 16:48:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 16:48:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 16:50:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 16:51:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 16:51:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 16:52:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 16:52:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 16:54:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 16:56:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 17:01:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 17:03:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 17:04:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 17:05:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 17:06:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 17:07:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 17:08:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 17:10:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 17:13:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 17:15:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 17:17:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 17:28:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 17:29:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 17:33:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 17:34:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 17:35:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 17:36:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 17:37:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 17:38:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 17:38:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 17:39:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 17:44:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 17:47:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 17:48:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 17:49:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 17:51:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 17:51:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 17:57:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 17:59:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 18:00:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 18:06:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 18:06:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 18:07:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 18:08:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:09:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 18:10:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 18:12:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 18:13:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:14:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:15:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:16:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 18:17:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 18:18:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:19:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 18:20:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 18:20:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:21:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 18:22:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 18:23:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:23:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 18:24:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 18:24:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:25:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 18:27:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 18:29:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 18:30:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 18:31:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 18:32:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 18:34:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 18:39:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 18:42:37",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 18:42:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 18:45:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 18:46:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 18:47:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 18:48:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 18:54:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 19:02:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 19:05:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 19:05:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 19:06:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 19:06:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 19:07:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 19:07:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 19:08:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:09:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 19:09:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 19:10:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 19:11:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:11:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 19:13:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 19:14:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 19:14:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 19:16:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 19:18:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 19:18:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 19:19:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 19:24:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 19:24:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 19:25:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:29:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 19:30:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 19:30:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 19:31:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 19:33:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 19:34:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:35:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 19:36:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:37:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 19:38:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 19:39:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:40:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 19:41:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 19:43:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 19:45:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 19:46:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 19:47:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 19:48:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 19:49:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:52:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 19:54:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 19:56:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 19:57:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 19:58:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 19:59:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 20:09:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 20:11:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 20:12:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 20:14:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 20:15:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 20:16:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 20:17:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 20:19:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "26.01.2023 20:19:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 20:21:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 20:26:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 20:27:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 20:29:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 20:30:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 20:31:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 20:32:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "26.01.2023 20:33:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "26.01.2023 20:34:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "26.01.2023 20:37:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 20:38:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 20:40:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 20:41:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "26.01.2023 20:43:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 20:44:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 20:45:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 20:46:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "26.01.2023 20:47:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "26.01.2023 20:49:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "26.01.2023 20:50:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 20:51:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 21:00:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "26.01.2023 21:01:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "26.01.2023 21:02:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 21:04:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 21:05:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "26.01.2023 21:07:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 21:08:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 21:09:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "26.01.2023 21:10:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "26.01.2023 21:11:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "26.01.2023 21:12:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "26.01.2023 21:13:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 10:04:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 10:06:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 10:08:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 10:09:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 10:13:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 10:14:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 10:15:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 10:16:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 10:18:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 10:19:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 10:23:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 10:25:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 10:27:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 10:33:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 10:34:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 10:35:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 10:36:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 10:37:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 10:39:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 10:40:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 10:41:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 10:42:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 10:59:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 11:03:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 11:06:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 11:07:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 11:08:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 11:08:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 11:11:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 11:14:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 11:17:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 11:18:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 11:20:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 11:22:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 11:26:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 11:28:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 11:31:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 11:34:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 11:36:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 11:41:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 11:42:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 11:44:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 11:53:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 11:54:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 11:56:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 11:58:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 11:59:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 12:00:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 12:00:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 12:00:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 12:01:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 12:17:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 12:19:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 12:20:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 12:27:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 12:30:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 12:48:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 12:50:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 12:52:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 12:54:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 12:56:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 12:58:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 13:01:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 13:08:04",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 13:08:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 13:11:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 13:15:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 13:22:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 13:23:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 13:23:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 13:25:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 13:35:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 13:36:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 13:42:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 13:56:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 13:59:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 14:51:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 14:53:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 14:56:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 15:10:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 15:11:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 15:13:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 15:14:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 15:15:44",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 15:16:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 15:17:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 15:22:09",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 15:32:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 15:34:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 15:35:37",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 15:36:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 15:38:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 15:40:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 15:42:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 15:45:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 15:55:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 15:57:51",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 16:19:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 16:20:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 16:23:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 16:26:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 16:26:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 16:27:37",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 16:27:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 16:28:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 16:30:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 16:31:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 16:32:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 16:34:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 16:35:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 16:37:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 16:42:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 16:43:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 16:46:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 16:50:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "27.01.2023 16:51:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.01.2023 16:53:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 16:57:32",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 17:00:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 17:01:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 17:04:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 17:06:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 17:07:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "27.01.2023 17:09:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 17:12:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 17:14:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 17:18:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 17:20:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 17:22:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "27.01.2023 17:23:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 17:25:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 17:25:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 17:26:35",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 17:27:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 17:28:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 17:29:31",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 17:31:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.01.2023 17:32:16",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 17:33:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 17:35:06",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "27.01.2023 17:36:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "27.01.2023 17:38:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "27.01.2023 17:43:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 17:45:25",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 17:46:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.01.2023 17:49:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 18:05:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "27.01.2023 18:07:49",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "27.01.2023 18:09:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "27.01.2023 18:10:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "27.01.2023 18:11:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.01.2023 18:12:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "27.01.2023 18:13:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "30.01.2023 17:56:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "30.01.2023 18:04:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "30.01.2023 18:21:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "30.01.2023 18:30:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "30.01.2023 19:14:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "31.01.2023 10:34:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "31.01.2023 13:02:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "31.01.2023 13:09:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "01.02.2023 12:41:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "01.02.2023 12:42:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "01.02.2023 18:31:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "16.08.2023 15:18:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "21.09.2023 15:34:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "09.10.2023 09:36:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "11.10.2023 10:28:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "11.10.2023 13:35:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "13.10.2023 14:31:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "13.10.2023 14:31:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "13.10.2023 14:44:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "16.10.2023 11:24:08",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "16.10.2023 14:35:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "17.10.2023 18:08:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "18.10.2023 00:24:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "18.10.2023 00:29:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "19.10.2023 14:36:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "23.10.2023 15:07:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "23.10.2023 15:40:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "23.10.2023 15:41:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "23.10.2023 15:53:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "23.10.2023 15:54:53",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "23.10.2023 15:57:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "23.10.2023 15:58:55",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.10.2023 16:05:01",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.10.2023 16:05:13",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "23.10.2023 16:54:27",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "23.10.2023 16:58:41",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "23.10.2023 17:24:03",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "23.10.2023 17:30:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "23.10.2023 17:39:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "23.10.2023 17:43:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "23.10.2023 18:16:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "23.10.2023 18:54:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.10.2023 18:55:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "23.10.2023 18:56:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "24.10.2023 09:16:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "24.10.2023 09:24:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "30.10.2023 11:46:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "30.10.2023 11:46:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "02.11.2023 09:58:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "02.11.2023 11:26:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "02.11.2023 12:18:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "02.11.2023 12:18:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "02.11.2023 12:28:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "02.11.2023 13:30:21",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "02.11.2023 13:42:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "02.11.2023 17:23:10",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "02.11.2023 17:23:28",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "02.11.2023 17:23:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "02.11.2023 17:23:56",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "02.11.2023 17:27:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "03.11.2023 09:18:39",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "03.11.2023 09:19:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "03.11.2023 11:33:46",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "03.11.2023 11:34:07",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "03.11.2023 11:34:42",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "03.11.2023 11:35:24",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "03.11.2023 11:36:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "03.11.2023 11:41:43",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "03.11.2023 11:54:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "03.11.2023 11:54:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "03.11.2023 11:55:23",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "03.11.2023 11:55:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "03.11.2023 11:56:37",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "03.11.2023 12:30:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "03.11.2023 12:31:57",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "10.11.2023 11:25:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "10.11.2023 11:57:15",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "10.11.2023 11:59:40",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "10.11.2023 12:12:20",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "10.11.2023 12:49:36",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "15.11.2023 11:58:14",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "15.11.2023 17:33:50",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "15.11.2023 17:35:02",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "23.11.2023 11:13:00",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "23.11.2023 11:14:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "23.11.2023 11:28:26",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#12826E"
                ]
              },
              {
                "label": "23.11.2023 11:29:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "24.11.2023 17:57:18",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "24.11.2023 18:27:05",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.11.2023 11:50:54",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#E11432"
                ]
              },
              {
                "label": "27.11.2023 16:35:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9B3BE5"
                ]
              },
              {
                "label": "27.11.2023 17:03:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              },
              {
                "label": "27.11.2023 17:09:17",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "27.11.2023 17:53:12",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FF8A00"
                ]
              },
              {
                "label": "28.11.2023 14:22:34",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              },
              {
                "label": "28.11.2023 14:23:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FEF0CC"
                ]
              },
              {
                "label": "28.11.2023 14:23:48",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FED13E"
                ]
              },
              {
                "label": "28.11.2023 21:51:22",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "28.11.2023 21:54:33",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  null
                ]
              },
              {
                "label": "28.11.2023 22:01:52",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              },
              {
                "label": "28.11.2023 22:23:45",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#2DC36A"
                ]
              },
              {
                "label": "28.11.2023 22:28:19",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "29.11.2023 01:30:59",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "29.11.2023 01:35:11",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#9DACCE"
                ]
              },
              {
                "label": "29.11.2023 02:12:47",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#DDF5E7"
                ]
              },
              {
                "label": "29.11.2023 08:22:29",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#16A086"
                ]
              },
              {
                "label": "29.11.2023 08:26:58",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#0D4CD3"
                ]
              },
              {
                "label": "08.02.2024 15:33:30",
                "data": [
                  1
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#EE3F58"
                ]
              }
            ],
            "labels": [
              ""
            ]
          }
        ],
        "attributes": [
          "CREATED_DATE"
        ],
        "type": "bar",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "265",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "data": [
              1,
              15,
              24,
              15,
              12,
              7,
              3,
              80,
              13,
              19,
              5,
              11,
              37,
              3,
              2,
              1,
              2,
              1,
              1,
              6,
              3,
              8,
              22,
              9,
              2,
              3,
              6,
              3,
              5,
              1,
              2,
              8,
              5,
              7,
              3,
              7,
              6,
              4,
              3,
              20,
              3,
              3,
              10,
              2,
              4,
              4,
              4,
              15,
              4,
              1,
              8,
              2,
              2,
              2,
              5,
              2,
              2,
              3,
              3,
              1,
              1,
              3,
              3,
              1,
              1,
              3,
              1,
              1,
              2,
              6,
              1,
              1,
              1,
              3,
              1,
              1,
              1,
              2,
              3,
              2,
              10,
              2,
              1,
              9,
              5,
              2,
              1,
              3,
              2,
              1,
              2,
              2,
              1,
              1,
              3,
              1,
              3,
              2,
              4,
              2,
              2,
              1,
              4,
              2,
              2,
              1,
              1,
              3,
              3,
              2,
              2,
              3,
              2,
              1,
              1,
              3,
              2,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              1,
              1,
              2,
              1,
              1,
              1,
              1,
              2,
              1,
              1,
              2,
              3,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              1,
              1,
              1,
              2,
              1,
              1,
              3,
              3,
              3,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              3,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2
            ],
            "labels": [
              "21.01.2023 05:02:00",
              "31.01.2023 19:00:00",
              "31.03.2023 19:00:00",
              "31.07.2023 19:00:00",
              "31.10.2023 19:00:00",
              "29.12.2023 19:00:00",
              "30.12.2024 19:00:00",
              "EMPTY",
              "01.02.2023 19:00:00",
              "30.06.2023 19:00:00",
              "29.09.2023 19:00:00",
              "31.08.2023 19:00:00",
              "28.02.2023 19:00:00",
              "31.01.2024 19:00:00",
              "25.01.2023 19:00:00",
              "24.01.2023 19:00:00",
              "30.01.2023 19:00:00",
              "23.01.2023 19:00:00",
              "29.01.2023 19:00:00",
              "27.01.2023 19:00:00",
              "26.01.2023 19:00:00",
              "15.02.2023 19:00:00",
              "30.11.2023 19:00:00",
              "28.04.2023 19:00:00",
              "31.07.2024 19:00:00",
              "30.08.2024 19:00:00",
              "30.09.2024 19:00:00",
              "29.03.2024 19:00:00",
              "28.02.2025 19:00:00",
              "15.01.2023 19:00:00",
              "30.04.2025 19:00:00",
              "31.05.2023 19:00:00",
              "01.05.2023 19:00:00",
              "01.09.2023 19:00:00",
              "15.08.2023 19:00:00",
              "01.12.2023 19:00:00",
              "20.12.2023 19:00:00",
              "30.12.2023 19:00:00",
              "15.08.2024 19:00:00",
              "01.03.2023 19:00:00",
              "28.03.2023 19:00:00",
              "15.06.2023 19:00:00",
              "30.04.2023 19:00:00",
              "20.06.2023 19:00:00",
              "01.07.2023 19:00:00",
              "01.04.2023 19:00:00",
              "01.06.2023 19:00:00",
              "30.09.2023 19:00:00",
              "15.03.2023 19:00:00",
              "28.08.2023 19:00:00",
              "15.12.2023 19:00:00",
              "15.01.2024 19:00:00",
              "15.03.2024 19:00:00",
              "01.08.2023 19:00:00",
              "01.10.2023 19:00:00",
              "15.10.2023 19:00:00",
              "30.10.2023 19:00:00",
              "17.02.2023 19:00:00",
              "28.06.2024 19:00:00",
              "29.09.2024 19:00:00",
              "30.10.2024 19:00:00",
              "30.11.2024 19:00:00",
              "15.12.2024 19:00:00",
              "20.01.2023 19:00:00",
              "24.02.2023 19:00:00",
              "29.02.2024 19:00:00",
              "31.05.2024 19:00:00",
              "30.04.2024 19:00:00",
              "31.03.2025 19:00:00",
              "30.06.2025 19:00:00",
              "28.07.2024 19:00:00",
              "15.07.2023 19:00:00",
              "29.08.2025 19:00:00",
              "15.11.2023 19:00:00",
              "21.02.2023 19:00:00",
              "30.01.2024 19:00:00",
              "20.03.2024 19:00:00",
              "31.03.2024 19:00:00",
              "01.04.2024 19:00:00",
              "15.09.2024 19:00:00",
              "31.12.2025 19:00:00",
              "25.05.2023 19:00:00",
              "25.07.2023 19:00:00",
              "31.12.2023 19:00:00",
              "30.06.2024 19:00:00",
              "01.06.2024 19:00:00",
              "20.06.2024 19:00:00",
              "01.09.2024 19:00:00",
              "30.08.2023 19:00:00",
              "01.01.2024 19:00:00",
              "15.05.2023 19:00:00",
              "30.05.2023 19:00:00",
              "25.10.2023 19:00:00",
              "28.09.2023 19:00:00",
              "15.10.2024 19:00:00",
              "01.11.2024 19:00:00",
              "01.04.2025 19:00:00",
              "01.06.2025 19:00:00",
              "01.07.2025 19:00:00",
              "01.09.2025 19:00:00",
              "01.11.2025 19:00:00",
              "28.02.2024 19:00:00",
              "20.09.2023 19:00:00",
              "10.12.2023 19:00:00",
              "31.10.2024 19:00:00",
              "04.01.2024 19:00:00",
              "15.05.2024 19:00:00",
              "01.08.2024 19:00:00",
              "01.10.2024 19:00:00",
              "15.02.2025 19:00:00",
              "15.04.2025 19:00:00",
              "15.06.2025 19:00:00",
              "20.10.2023 19:00:00",
              "20.01.2024 19:00:00",
              "15.02.2024 19:00:00",
              "01.03.2024 19:00:00",
              "01.05.2024 19:00:00",
              "15.01.2025 19:00:00",
              "15.04.2024 19:00:00",
              "01.08.2025 19:00:00",
              "15.09.2025 19:00:00",
              "15.10.2025 19:00:00",
              "31.10.2025 19:00:00",
              "01.07.2024 19:00:00",
              "15.07.2025 19:00:00",
              "31.07.2025 19:00:00",
              "01.05.2025 19:00:00",
              "01.10.2025 19:00:00",
              "25.10.2025 19:00:00",
              "01.12.2025 19:00:00",
              "15.12.2025 19:00:00",
              "10.04.2023 19:00:00",
              "17.03.2023 19:00:00",
              "05.05.2023 19:00:00",
              "17.07.2023 19:00:00",
              "15.07.2024 19:00:00",
              "28.08.2024 19:00:00",
              "28.11.2024 19:00:00",
              "27.12.2024 19:00:00",
              "27.02.2023 19:00:00",
              "10.03.2023 19:00:00",
              "11.05.2023 19:00:00",
              "20.06.2025 19:00:00",
              "31.12.2024 19:00:00",
              "30.11.2025 19:00:00",
              "30.12.2022 12:00:00",
              "12.05.2023 19:00:00",
              "20.11.2023 19:00:00",
              "03.04.2023 19:00:00",
              "10.11.2023 19:00:00",
              "20.02.2023 19:00:00",
              "14.04.2023 19:00:00",
              "02.06.2023 19:00:00",
              "24.05.2024 19:00:00",
              "10.07.2024 19:00:00",
              "25.07.2024 19:00:00",
              "04.08.2023 19:00:00",
              "30.07.2024 19:00:00",
              "26.01.2024 19:00:00",
              "09.02.2024 19:00:00",
              "01.02.2024 19:00:00",
              "09.02.2023 19:00:00",
              "03.02.2023 19:00:00",
              "08.03.2023 19:00:00",
              "04.02.2023 19:00:00",
              "05.02.2023 17:00:00",
              "11.03.2023 19:00:00",
              "22.09.2023 19:00:00",
              "09.11.2023 19:00:00",
              "13.10.2023 22:00:00",
              "23.10.2023 12:00:00",
              "19.10.2023 19:00:00",
              "16.10.2023 19:00:00",
              "25.10.2023 09:12:00",
              "10.02.2024 19:00:00",
              "23.02.2024 19:00:00",
              "03.10.2023 19:00:00",
              "17.03.2024 19:00:00",
              "24.03.2024 19:00:00",
              "21.02.2024 19:00:00",
              "08.02.2024 19:00:00",
              "06.09.2023 19:00:00",
              "08.09.2023 19:00:00",
              "08.03.2024 19:00:00",
              "11.11.2023 11:24:00",
              "08.11.2023 19:00:00",
              "24.11.2023 19:00:00",
              "16.11.2023 19:00:00"
            ],
            "color": "#2DC36A",
            "datasets": []
          }
        ],
        "attributes": [
          "DEADLINE"
        ],
        "type": "table",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "269",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "data": [
              686
            ],
            "labels": [
              "EMPTY"
            ],
            "color": "#12826E",
            "datasets": []
          }
        ],
        "attributes": [
          ""
        ],
        "type": "table",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "278",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "data": [
              686
            ],
            "labels": [
              "EMPTY"
            ],
            "color": "#E11432",
            "datasets": []
          }
        ],
        "attributes": [
          ""
        ],
        "type": "table",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "279",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "data": [
              88
            ],
            "labels": [
              "EMPTY"
            ],
            "color": "#9DACCE",
            "datasets": []
          }
        ],
        "attributes": [
          "Статус проекта"
        ],
        "type": "table",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "281",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "datasets": [
              {
                "label": "EMPTY",
                "data": [
                  686
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#FCD9DE"
                ]
              }
            ],
            "labels": [
              ""
            ]
          }
        ],
        "attributes": [
          ""
        ],
        "type": "bar",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "283",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "datasets": [
              {
                "label": "EMPTY",
                "data": [
                  686
                ],
                "borderWidth": 1,
                "backgroundColor": [
                  "#F8B200"
                ]
              }
            ],
            "labels": [
              ""
            ]
          }
        ],
        "attributes": [
          ""
        ],
        "type": "bar",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "284",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      },
      {
        "datasets": [
          {
            "labels": [
              "Богданова Дарья",
              "Лесина Алена",
              "Шуба Павел",
              "Раковская Наталья",
              "Ли Умар",
              "Гостех Админ",
              "Волков Максим",
              "Шоханов Андрей",
              "Сидоренко Екатерина",
              "Волков Андрей",
              "Голыго Артем",
              "Ерохин Михаил",
              "Макаренко Константин",
              "Яковлев Алексей",
              "Ледаков Юрий",
              "Липко Анастасия",
              "(1)Цыбина Ирина",
              "Администратор Администратор",
              " Контрольный отдел Руслан",
              "(2)Годлевская Дарья",
              "Иванова Мария",
              "Митина Юлия"
            ],
            "datasets": [
              {
                "label": "ед.",
                "data": [
                  123,
                  108,
                  17,
                  5,
                  15,
                  73,
                  61,
                  43,
                  2,
                  11,
                  10,
                  12,
                  11,
                  110,
                  57,
                  2,
                  9,
                  3,
                  2,
                  6,
                  1,
                  5
                ],
                "borderWidth": 2,
                "backgroundColor": [
                  "#9B3BE5",
                  "#F8B200",
                  "#DDF5E7",
                  "#16A086",
                  "#FEF0CC",
                  "#16A086",
                  "#EE3F58",
                  "#0D4CD3",
                  "#F8B200",
                  "#FEF0CC",
                  "#9DACCE",
                  "#EE3F58",
                  "#F8B200",
                  "#2DC36A",
                  "#FF8A00",
                  "#9B3BE5",
                  "#DDF5E7",
                  "#E11432",
                  null,
                  "#DDF5E7",
                  "#16A086",
                  "#12826E"
                ]
              }
            ]
          }
        ],
        "attributes": [
          "RESPONSIBLE_ID"
        ],
        "type": "pie",
        "filter": [],
        "UF_NAME": "Название дашборда",
        "id": "285",
        "year": 2024,
        "UF_VISUAL_PARAMS": {
          "x": "1",
          "y": "1",
          "col": "1",
          "row": "1",
          "type": ""
        }
      }
    ]
    this.tabs=[
      {
          "id": "1942",
          "name": "Аналитика по трудозатратам (план/факт)",
          "dataDasb": [
              {
                  "datasets": [
                      {
                          "datasets": [
                              {
                                  "label": "Завершено",
                                  "data": [
                                      16
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "Просрочено",
                                  "data": [
                                      511
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "Новое (не просмотренo)",
                                  "data": [
                                      63
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "Принято ответственным",
                                  "data": [
                                      90
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "Выполняется",
                                  "data": [
                                      2
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "Отложено",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "Ждет контроля",
                                  "data": [
                                      3
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              }
                          ],
                          "labels": [
                              "Статус"
                          ]
                      }
                  ],
                  "attributes": [
                      "STATUS"
                  ],
                  "type": "bar",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "259",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              },
              {
                  "datasets": [
                      {
                          "labels": [
                              "21.01.2023 05:02:00",
                              "31.01.2023 19:00:00",
                              "31.03.2023 19:00:00",
                              "31.07.2023 19:00:00",
                              "31.10.2023 19:00:00",
                              "29.12.2023 19:00:00",
                              "30.12.2024 19:00:00",
                              "EMPTY",
                              "01.02.2023 19:00:00",
                              "30.06.2023 19:00:00",
                              "29.09.2023 19:00:00",
                              "31.08.2023 19:00:00",
                              "28.02.2023 19:00:00",
                              "31.01.2024 19:00:00",
                              "25.01.2023 19:00:00",
                              "24.01.2023 19:00:00",
                              "30.01.2023 19:00:00",
                              "23.01.2023 19:00:00",
                              "29.01.2023 19:00:00",
                              "27.01.2023 19:00:00",
                              "26.01.2023 19:00:00",
                              "15.02.2023 19:00:00",
                              "30.11.2023 19:00:00",
                              "28.04.2023 19:00:00",
                              "31.07.2024 19:00:00",
                              "30.08.2024 19:00:00",
                              "30.09.2024 19:00:00",
                              "29.03.2024 19:00:00",
                              "28.02.2025 19:00:00",
                              "15.01.2023 19:00:00",
                              "30.04.2025 19:00:00",
                              "31.05.2023 19:00:00",
                              "01.05.2023 19:00:00",
                              "01.09.2023 19:00:00",
                              "15.08.2023 19:00:00",
                              "01.12.2023 19:00:00",
                              "20.12.2023 19:00:00",
                              "30.12.2023 19:00:00",
                              "15.08.2024 19:00:00",
                              "01.03.2023 19:00:00",
                              "28.03.2023 19:00:00",
                              "15.06.2023 19:00:00",
                              "30.04.2023 19:00:00",
                              "20.06.2023 19:00:00",
                              "01.07.2023 19:00:00",
                              "01.04.2023 19:00:00",
                              "01.06.2023 19:00:00",
                              "30.09.2023 19:00:00",
                              "15.03.2023 19:00:00",
                              "28.08.2023 19:00:00",
                              "15.12.2023 19:00:00",
                              "15.01.2024 19:00:00",
                              "15.03.2024 19:00:00",
                              "01.08.2023 19:00:00",
                              "01.10.2023 19:00:00",
                              "15.10.2023 19:00:00",
                              "30.10.2023 19:00:00",
                              "17.02.2023 19:00:00",
                              "28.06.2024 19:00:00",
                              "29.09.2024 19:00:00",
                              "30.10.2024 19:00:00",
                              "30.11.2024 19:00:00",
                              "15.12.2024 19:00:00",
                              "20.01.2023 19:00:00",
                              "24.02.2023 19:00:00",
                              "29.02.2024 19:00:00",
                              "31.05.2024 19:00:00",
                              "30.04.2024 19:00:00",
                              "31.03.2025 19:00:00",
                              "30.06.2025 19:00:00",
                              "28.07.2024 19:00:00",
                              "15.07.2023 19:00:00",
                              "29.08.2025 19:00:00",
                              "15.11.2023 19:00:00",
                              "21.02.2023 19:00:00",
                              "30.01.2024 19:00:00",
                              "20.03.2024 19:00:00",
                              "31.03.2024 19:00:00",
                              "01.04.2024 19:00:00",
                              "15.09.2024 19:00:00",
                              "31.12.2025 19:00:00",
                              "25.05.2023 19:00:00",
                              "25.07.2023 19:00:00",
                              "31.12.2023 19:00:00",
                              "30.06.2024 19:00:00",
                              "01.06.2024 19:00:00",
                              "20.06.2024 19:00:00",
                              "01.09.2024 19:00:00",
                              "30.08.2023 19:00:00",
                              "01.01.2024 19:00:00",
                              "15.05.2023 19:00:00",
                              "30.05.2023 19:00:00",
                              "25.10.2023 19:00:00",
                              "28.09.2023 19:00:00",
                              "15.10.2024 19:00:00",
                              "01.11.2024 19:00:00",
                              "01.04.2025 19:00:00",
                              "01.06.2025 19:00:00",
                              "01.07.2025 19:00:00",
                              "01.09.2025 19:00:00",
                              "01.11.2025 19:00:00",
                              "28.02.2024 19:00:00",
                              "20.09.2023 19:00:00",
                              "10.12.2023 19:00:00",
                              "31.10.2024 19:00:00",
                              "04.01.2024 19:00:00",
                              "15.05.2024 19:00:00",
                              "01.08.2024 19:00:00",
                              "01.10.2024 19:00:00",
                              "15.02.2025 19:00:00",
                              "15.04.2025 19:00:00",
                              "15.06.2025 19:00:00",
                              "20.10.2023 19:00:00",
                              "20.01.2024 19:00:00",
                              "15.02.2024 19:00:00",
                              "01.03.2024 19:00:00",
                              "01.05.2024 19:00:00",
                              "15.01.2025 19:00:00",
                              "15.04.2024 19:00:00",
                              "01.08.2025 19:00:00",
                              "15.09.2025 19:00:00",
                              "15.10.2025 19:00:00",
                              "31.10.2025 19:00:00",
                              "01.07.2024 19:00:00",
                              "15.07.2025 19:00:00",
                              "31.07.2025 19:00:00",
                              "01.05.2025 19:00:00",
                              "01.10.2025 19:00:00",
                              "25.10.2025 19:00:00",
                              "01.12.2025 19:00:00",
                              "15.12.2025 19:00:00",
                              "10.04.2023 19:00:00",
                              "17.03.2023 19:00:00",
                              "05.05.2023 19:00:00",
                              "17.07.2023 19:00:00",
                              "15.07.2024 19:00:00",
                              "28.08.2024 19:00:00",
                              "28.11.2024 19:00:00",
                              "27.12.2024 19:00:00",
                              "27.02.2023 19:00:00",
                              "10.03.2023 19:00:00",
                              "11.05.2023 19:00:00",
                              "20.06.2025 19:00:00",
                              "31.12.2024 19:00:00",
                              "30.11.2025 19:00:00",
                              "30.12.2022 12:00:00",
                              "12.05.2023 19:00:00",
                              "20.11.2023 19:00:00",
                              "03.04.2023 19:00:00",
                              "10.11.2023 19:00:00",
                              "20.02.2023 19:00:00",
                              "14.04.2023 19:00:00",
                              "02.06.2023 19:00:00",
                              "24.05.2024 19:00:00",
                              "10.07.2024 19:00:00",
                              "25.07.2024 19:00:00",
                              "04.08.2023 19:00:00",
                              "30.07.2024 19:00:00",
                              "26.01.2024 19:00:00",
                              "09.02.2024 19:00:00",
                              "01.02.2024 19:00:00",
                              "09.02.2023 19:00:00",
                              "03.02.2023 19:00:00",
                              "08.03.2023 19:00:00",
                              "04.02.2023 19:00:00",
                              "05.02.2023 17:00:00",
                              "11.03.2023 19:00:00",
                              "22.09.2023 19:00:00",
                              "09.11.2023 19:00:00",
                              "13.10.2023 22:00:00",
                              "23.10.2023 12:00:00",
                              "19.10.2023 19:00:00",
                              "16.10.2023 19:00:00",
                              "25.10.2023 09:12:00",
                              "10.02.2024 19:00:00",
                              "23.02.2024 19:00:00",
                              "03.10.2023 19:00:00",
                              "17.03.2024 19:00:00",
                              "24.03.2024 19:00:00",
                              "21.02.2024 19:00:00",
                              "08.02.2024 19:00:00",
                              "06.09.2023 19:00:00",
                              "08.09.2023 19:00:00",
                              "08.03.2024 19:00:00",
                              "11.11.2023 11:24:00",
                              "08.11.2023 19:00:00",
                              "24.11.2023 19:00:00",
                              "16.11.2023 19:00:00"
                          ],
                          "datasets": [
                              {
                                  "label": "My First Dataset ",
                                  "data": [
                                      1,
                                      15,
                                      24,
                                      15,
                                      12,
                                      7,
                                      3,
                                      80,
                                      13,
                                      19,
                                      5,
                                      11,
                                      37,
                                      3,
                                      2,
                                      1,
                                      2,
                                      1,
                                      1,
                                      6,
                                      3,
                                      8,
                                      22,
                                      9,
                                      2,
                                      3,
                                      6,
                                      3,
                                      5,
                                      1,
                                      2,
                                      8,
                                      5,
                                      7,
                                      3,
                                      7,
                                      6,
                                      4,
                                      3,
                                      20,
                                      3,
                                      3,
                                      10,
                                      2,
                                      4,
                                      4,
                                      4,
                                      15,
                                      4,
                                      1,
                                      8,
                                      2,
                                      2,
                                      2,
                                      5,
                                      2,
                                      2,
                                      3,
                                      3,
                                      1,
                                      1,
                                      3,
                                      3,
                                      1,
                                      1,
                                      3,
                                      1,
                                      1,
                                      2,
                                      6,
                                      1,
                                      1,
                                      1,
                                      3,
                                      1,
                                      1,
                                      1,
                                      2,
                                      3,
                                      2,
                                      10,
                                      2,
                                      1,
                                      9,
                                      5,
                                      2,
                                      1,
                                      3,
                                      2,
                                      1,
                                      2,
                                      2,
                                      1,
                                      1,
                                      3,
                                      1,
                                      3,
                                      2,
                                      4,
                                      2,
                                      2,
                                      1,
                                      4,
                                      2,
                                      2,
                                      1,
                                      1,
                                      3,
                                      3,
                                      2,
                                      2,
                                      3,
                                      2,
                                      1,
                                      1,
                                      3,
                                      2,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      2,
                                      2,
                                      1,
                                      1,
                                      2,
                                      1,
                                      1,
                                      1,
                                      1,
                                      2,
                                      1,
                                      1,
                                      2,
                                      3,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      2,
                                      1,
                                      1,
                                      1,
                                      2,
                                      1,
                                      1,
                                      3,
                                      3,
                                      3,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      2,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      2,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      3,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      1,
                                      2
                                  ],
                                  "fill": false,
                                  "borderColor": "rgb(75, 192, 192)",
                                  "tension": 0.1,
                                  "borderWidth": 2
                              }
                          ]
                      }
                  ],
                  "attributes": [
                      "DEADLINE"
                  ],
                  "type": "line",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "264",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              }
          ]
      },
      {
          "id": "1944",
          "name": "Без названия",
          "dataDasb": [
              {
                  "datasets": [
                      {
                          "datasets": [
                              {
                                  "label": "19.01.2023 05:00:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:46:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:48:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:50:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:52:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:55:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:57:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:58:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 17:59:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 18:01:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "19.01.2023 18:06:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:27:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:28:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:30:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:30:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:34:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:36:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:37:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:38:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:39:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:41:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:42:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:43:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:45:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:46:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:46:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:47:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 10:50:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:01:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:06:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:06:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:07:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:08:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:09:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:11:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:12:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 11:13:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 14:34:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "23.01.2023 15:15:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "24.01.2023 14:28:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "24.01.2023 15:23:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "24.01.2023 15:44:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "25.01.2023 14:50:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 09:56:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 10:21:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:01:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:37:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:39:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:40:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:45:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:47:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:48:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:49:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:50:38",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:54:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:54:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:55:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:56:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:58:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 11:59:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:00:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:00:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:01:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:03:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:03:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:04:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:05:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:05:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:06:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:06:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:07:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:08:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:09:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:10:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:10:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:11:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:29:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:29:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:30:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:30:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:31:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:32:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:32:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:33:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:34:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:34:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:35:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:36:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:37:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:37:37",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:38:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:40:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:40:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:42:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:42:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:44:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:44:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:45:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:46:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:46:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:47:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:48:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:49:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:49:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:50:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:50:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:51:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:52:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:52:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:53:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:53:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:54:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:56:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:57:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:57:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:58:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:59:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:59:37",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 12:59:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:01:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:01:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:03:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:04:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:04:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:05:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:05:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:06:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:08:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:10:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:10:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:12:38",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:13:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:14:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:15:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:16:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:17:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:20:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:21:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:22:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:23:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:23:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:24:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:25:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:26:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:26:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:26:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:31:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:32:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:33:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:35:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:38:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:39:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:41:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:42:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:43:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:44:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:45:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:46:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:48:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:49:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:50:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:51:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:52:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:53:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:54:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:55:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 13:56:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:00:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:01:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:03:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:03:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:35:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:40:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:42:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:43:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:44:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:45:38",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:48:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:49:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:50:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:51:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:52:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:53:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:53:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:55:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:56:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 14:58:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:00:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:02:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:03:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:04:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:08:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:11:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:12:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:13:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:15:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:17:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:23:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:24:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:26:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:27:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:28:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:29:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:31:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:33:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:38:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:39:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:39:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:43:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:46:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:47:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:47:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:48:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:48:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:49:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:54:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:55:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:56:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 15:57:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:03:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:03:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:04:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:05:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:05:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:06:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:07:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:07:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:08:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:08:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:09:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:10:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:10:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:11:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:13:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:14:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:16:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:22:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:23:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:24:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:26:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:26:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:28:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:28:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:30:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:30:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:31:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:32:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:34:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:37:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:39:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:40:49",
                                  "data": [
                                      2
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:42:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:43:38",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:43:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:45:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:45:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:46:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:47:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:48:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:48:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:50:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:51:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:51:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:52:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:52:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:54:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 16:56:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:01:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:03:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:04:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:05:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:06:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:07:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:08:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:10:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:13:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:15:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:17:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:28:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:29:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:33:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:34:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:35:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:36:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:37:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:38:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:38:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:39:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:44:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:47:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:48:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:49:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:51:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:51:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:57:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 17:59:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:00:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:06:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:06:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:07:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:08:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:09:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:10:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:12:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:13:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:14:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:15:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:16:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:17:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:18:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:19:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:20:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:20:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:21:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:22:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:23:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:23:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:24:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:24:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:25:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:27:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:29:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:30:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:31:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:32:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:34:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:39:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:42:37",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:42:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:45:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:46:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:47:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:48:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 18:54:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:02:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:05:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:05:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:06:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:06:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:07:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:07:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:08:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:09:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:09:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:10:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:11:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:11:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:13:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:14:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:14:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:16:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:18:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:18:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:19:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:24:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:24:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:25:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:29:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:30:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:30:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:31:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:33:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:34:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:35:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:36:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:37:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:38:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:39:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:40:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:41:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:43:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:45:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:46:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:47:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:48:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:49:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:52:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:54:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:56:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:57:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:58:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 19:59:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:09:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:11:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:12:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:14:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:15:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:16:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:17:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:19:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:19:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:21:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:26:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:27:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:29:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:30:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:31:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:32:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:33:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:34:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:37:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:38:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:40:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:41:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:43:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:44:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:45:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:46:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:47:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:49:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:50:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 20:51:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:00:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:01:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:02:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:04:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:05:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:07:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:08:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:09:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:10:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:11:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:12:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "26.01.2023 21:13:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:04:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:06:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:08:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:09:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:13:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:14:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:15:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:16:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:18:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:19:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:23:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:25:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:27:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:33:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:34:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:35:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:36:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:37:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:39:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:40:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:41:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:42:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 10:59:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:03:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:06:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:07:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:08:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:08:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:11:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:14:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:17:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:18:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:20:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:22:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:26:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:28:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:31:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:34:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:36:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:41:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:42:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:44:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:53:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:54:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:56:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:58:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 11:59:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:00:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:00:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:00:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:01:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:17:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:19:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:20:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:27:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:30:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:48:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:50:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:52:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:54:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:56:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 12:58:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:01:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:08:04",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:08:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:11:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:15:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:22:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:23:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:23:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:25:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:35:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:36:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:42:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:56:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 13:59:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 14:51:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 14:53:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 14:56:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:10:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:11:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:13:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:14:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:15:44",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:16:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:17:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:22:09",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:32:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:34:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:35:37",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:36:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:38:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:40:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:42:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:45:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:55:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 15:57:51",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:19:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:20:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:23:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:26:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:26:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:27:37",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:27:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:28:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:30:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:31:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:32:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:34:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:35:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:37:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:42:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:43:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:46:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:50:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:51:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:53:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 16:57:32",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:00:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:01:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:04:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:06:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:07:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:09:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:12:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:14:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:18:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:20:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:22:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:23:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:25:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:25:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:26:35",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:27:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:28:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:29:31",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:31:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:32:16",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:33:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:35:06",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:36:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:38:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:43:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:45:25",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:46:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 17:49:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:05:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:07:49",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:09:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:10:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:11:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:12:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "27.01.2023 18:13:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "30.01.2023 17:56:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "30.01.2023 18:04:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "30.01.2023 18:21:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "30.01.2023 18:30:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "30.01.2023 19:14:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "31.01.2023 10:34:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "31.01.2023 13:02:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "31.01.2023 13:09:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "01.02.2023 12:41:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "01.02.2023 12:42:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "01.02.2023 18:31:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "16.08.2023 15:18:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "21.09.2023 15:34:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "09.10.2023 09:36:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "11.10.2023 10:28:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "11.10.2023 13:35:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "13.10.2023 14:31:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "13.10.2023 14:31:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "13.10.2023 14:44:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "16.10.2023 11:24:08",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "16.10.2023 14:35:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "17.10.2023 18:08:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "18.10.2023 00:24:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "18.10.2023 00:29:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "19.10.2023 14:36:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:07:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:40:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:41:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:53:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:54:53",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:57:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 15:58:55",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 16:05:01",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 16:05:13",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 16:54:27",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 16:58:41",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 17:24:03",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 17:30:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#DDF5E7"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 17:39:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 17:43:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 18:16:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 18:54:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 18:55:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "23.10.2023 18:56:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "24.10.2023 09:16:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "24.10.2023 09:24:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "30.10.2023 11:46:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "30.10.2023 11:46:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 09:58:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 11:26:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 12:18:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 12:18:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 12:28:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "02.11.2023 13:30:21",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 13:42:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 17:23:10",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 17:23:28",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 17:23:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 17:23:56",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "02.11.2023 17:27:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9DACCE"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 09:18:39",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 09:19:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:33:46",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:34:07",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:34:42",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:35:24",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:36:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:41:43",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:54:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:54:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:55:23",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:55:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 11:56:37",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 12:30:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "03.11.2023 12:31:57",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "10.11.2023 11:25:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "10.11.2023 11:57:15",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "10.11.2023 11:59:40",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "10.11.2023 12:12:20",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "10.11.2023 12:49:36",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "15.11.2023 11:58:14",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "15.11.2023 17:33:50",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "15.11.2023 17:35:02",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FCD9DE"
                                  ]
                              },
                              {
                                  "label": "23.11.2023 11:13:00",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "23.11.2023 11:14:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "23.11.2023 11:28:26",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FEF0CC"
                                  ]
                              },
                              {
                                  "label": "23.11.2023 11:29:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "24.11.2023 17:57:18",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#16A086"
                                  ]
                              },
                              {
                                  "label": "24.11.2023 18:27:05",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "27.11.2023 11:50:54",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.11.2023 16:35:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "27.11.2023 17:03:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "27.11.2023 17:09:17",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#E11432"
                                  ]
                              },
                              {
                                  "label": "27.11.2023 17:53:12",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      null
                                  ]
                              },
                              {
                                  "label": "28.11.2023 14:22:34",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 14:23:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 14:23:48",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 21:51:22",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 21:54:33",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#12826E"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 22:01:52",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#0D4CD3"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 22:23:45",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              },
                              {
                                  "label": "28.11.2023 22:28:19",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "29.11.2023 01:30:59",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "29.11.2023 01:35:11",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              },
                              {
                                  "label": "29.11.2023 02:12:47",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#F8B200"
                                  ]
                              },
                              {
                                  "label": "29.11.2023 08:22:29",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FF8A00"
                                  ]
                              },
                              {
                                  "label": "29.11.2023 08:26:58",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#2DC36A"
                                  ]
                              },
                              {
                                  "label": "08.02.2024 15:33:30",
                                  "data": [
                                      1
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#FED13E"
                                  ]
                              }
                          ],
                          "labels": [
                              ""
                          ]
                      }
                  ],
                  "attributes": [
                      "CREATED_DATE"
                  ],
                  "type": "bar",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "265",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              }
          ]
      },
      {
          "id": "1945",
          "name": "Аналитика по трудозатратам (план/факт)",
          "dataDasb": [
              {
                  "datasets": [
                      {
                          "data": [
                              1,
                              15,
                              24,
                              15,
                              12,
                              7,
                              3,
                              80,
                              13,
                              19,
                              5,
                              11,
                              37,
                              3,
                              2,
                              1,
                              2,
                              1,
                              1,
                              6,
                              3,
                              8,
                              22,
                              9,
                              2,
                              3,
                              6,
                              3,
                              5,
                              1,
                              2,
                              8,
                              5,
                              7,
                              3,
                              7,
                              6,
                              4,
                              3,
                              20,
                              3,
                              3,
                              10,
                              2,
                              4,
                              4,
                              4,
                              15,
                              4,
                              1,
                              8,
                              2,
                              2,
                              2,
                              5,
                              2,
                              2,
                              3,
                              3,
                              1,
                              1,
                              3,
                              3,
                              1,
                              1,
                              3,
                              1,
                              1,
                              2,
                              6,
                              1,
                              1,
                              1,
                              3,
                              1,
                              1,
                              1,
                              2,
                              3,
                              2,
                              10,
                              2,
                              1,
                              9,
                              5,
                              2,
                              1,
                              3,
                              2,
                              1,
                              2,
                              2,
                              1,
                              1,
                              3,
                              1,
                              3,
                              2,
                              4,
                              2,
                              2,
                              1,
                              4,
                              2,
                              2,
                              1,
                              1,
                              3,
                              3,
                              2,
                              2,
                              3,
                              2,
                              1,
                              1,
                              3,
                              2,
                              1,
                              1,
                              1,
                              1,
                              1,
                              2,
                              2,
                              1,
                              1,
                              2,
                              1,
                              1,
                              1,
                              1,
                              2,
                              1,
                              1,
                              2,
                              3,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              2,
                              1,
                              1,
                              1,
                              2,
                              1,
                              1,
                              3,
                              3,
                              3,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              2,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              2,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              3,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              1,
                              2
                          ],
                          "labels": [
                              "21.01.2023 05:02:00",
                              "31.01.2023 19:00:00",
                              "31.03.2023 19:00:00",
                              "31.07.2023 19:00:00",
                              "31.10.2023 19:00:00",
                              "29.12.2023 19:00:00",
                              "30.12.2024 19:00:00",
                              "EMPTY",
                              "01.02.2023 19:00:00",
                              "30.06.2023 19:00:00",
                              "29.09.2023 19:00:00",
                              "31.08.2023 19:00:00",
                              "28.02.2023 19:00:00",
                              "31.01.2024 19:00:00",
                              "25.01.2023 19:00:00",
                              "24.01.2023 19:00:00",
                              "30.01.2023 19:00:00",
                              "23.01.2023 19:00:00",
                              "29.01.2023 19:00:00",
                              "27.01.2023 19:00:00",
                              "26.01.2023 19:00:00",
                              "15.02.2023 19:00:00",
                              "30.11.2023 19:00:00",
                              "28.04.2023 19:00:00",
                              "31.07.2024 19:00:00",
                              "30.08.2024 19:00:00",
                              "30.09.2024 19:00:00",
                              "29.03.2024 19:00:00",
                              "28.02.2025 19:00:00",
                              "15.01.2023 19:00:00",
                              "30.04.2025 19:00:00",
                              "31.05.2023 19:00:00",
                              "01.05.2023 19:00:00",
                              "01.09.2023 19:00:00",
                              "15.08.2023 19:00:00",
                              "01.12.2023 19:00:00",
                              "20.12.2023 19:00:00",
                              "30.12.2023 19:00:00",
                              "15.08.2024 19:00:00",
                              "01.03.2023 19:00:00",
                              "28.03.2023 19:00:00",
                              "15.06.2023 19:00:00",
                              "30.04.2023 19:00:00",
                              "20.06.2023 19:00:00",
                              "01.07.2023 19:00:00",
                              "01.04.2023 19:00:00",
                              "01.06.2023 19:00:00",
                              "30.09.2023 19:00:00",
                              "15.03.2023 19:00:00",
                              "28.08.2023 19:00:00",
                              "15.12.2023 19:00:00",
                              "15.01.2024 19:00:00",
                              "15.03.2024 19:00:00",
                              "01.08.2023 19:00:00",
                              "01.10.2023 19:00:00",
                              "15.10.2023 19:00:00",
                              "30.10.2023 19:00:00",
                              "17.02.2023 19:00:00",
                              "28.06.2024 19:00:00",
                              "29.09.2024 19:00:00",
                              "30.10.2024 19:00:00",
                              "30.11.2024 19:00:00",
                              "15.12.2024 19:00:00",
                              "20.01.2023 19:00:00",
                              "24.02.2023 19:00:00",
                              "29.02.2024 19:00:00",
                              "31.05.2024 19:00:00",
                              "30.04.2024 19:00:00",
                              "31.03.2025 19:00:00",
                              "30.06.2025 19:00:00",
                              "28.07.2024 19:00:00",
                              "15.07.2023 19:00:00",
                              "29.08.2025 19:00:00",
                              "15.11.2023 19:00:00",
                              "21.02.2023 19:00:00",
                              "30.01.2024 19:00:00",
                              "20.03.2024 19:00:00",
                              "31.03.2024 19:00:00",
                              "01.04.2024 19:00:00",
                              "15.09.2024 19:00:00",
                              "31.12.2025 19:00:00",
                              "25.05.2023 19:00:00",
                              "25.07.2023 19:00:00",
                              "31.12.2023 19:00:00",
                              "30.06.2024 19:00:00",
                              "01.06.2024 19:00:00",
                              "20.06.2024 19:00:00",
                              "01.09.2024 19:00:00",
                              "30.08.2023 19:00:00",
                              "01.01.2024 19:00:00",
                              "15.05.2023 19:00:00",
                              "30.05.2023 19:00:00",
                              "25.10.2023 19:00:00",
                              "28.09.2023 19:00:00",
                              "15.10.2024 19:00:00",
                              "01.11.2024 19:00:00",
                              "01.04.2025 19:00:00",
                              "01.06.2025 19:00:00",
                              "01.07.2025 19:00:00",
                              "01.09.2025 19:00:00",
                              "01.11.2025 19:00:00",
                              "28.02.2024 19:00:00",
                              "20.09.2023 19:00:00",
                              "10.12.2023 19:00:00",
                              "31.10.2024 19:00:00",
                              "04.01.2024 19:00:00",
                              "15.05.2024 19:00:00",
                              "01.08.2024 19:00:00",
                              "01.10.2024 19:00:00",
                              "15.02.2025 19:00:00",
                              "15.04.2025 19:00:00",
                              "15.06.2025 19:00:00",
                              "20.10.2023 19:00:00",
                              "20.01.2024 19:00:00",
                              "15.02.2024 19:00:00",
                              "01.03.2024 19:00:00",
                              "01.05.2024 19:00:00",
                              "15.01.2025 19:00:00",
                              "15.04.2024 19:00:00",
                              "01.08.2025 19:00:00",
                              "15.09.2025 19:00:00",
                              "15.10.2025 19:00:00",
                              "31.10.2025 19:00:00",
                              "01.07.2024 19:00:00",
                              "15.07.2025 19:00:00",
                              "31.07.2025 19:00:00",
                              "01.05.2025 19:00:00",
                              "01.10.2025 19:00:00",
                              "25.10.2025 19:00:00",
                              "01.12.2025 19:00:00",
                              "15.12.2025 19:00:00",
                              "10.04.2023 19:00:00",
                              "17.03.2023 19:00:00",
                              "05.05.2023 19:00:00",
                              "17.07.2023 19:00:00",
                              "15.07.2024 19:00:00",
                              "28.08.2024 19:00:00",
                              "28.11.2024 19:00:00",
                              "27.12.2024 19:00:00",
                              "27.02.2023 19:00:00",
                              "10.03.2023 19:00:00",
                              "11.05.2023 19:00:00",
                              "20.06.2025 19:00:00",
                              "31.12.2024 19:00:00",
                              "30.11.2025 19:00:00",
                              "30.12.2022 12:00:00",
                              "12.05.2023 19:00:00",
                              "20.11.2023 19:00:00",
                              "03.04.2023 19:00:00",
                              "10.11.2023 19:00:00",
                              "20.02.2023 19:00:00",
                              "14.04.2023 19:00:00",
                              "02.06.2023 19:00:00",
                              "24.05.2024 19:00:00",
                              "10.07.2024 19:00:00",
                              "25.07.2024 19:00:00",
                              "04.08.2023 19:00:00",
                              "30.07.2024 19:00:00",
                              "26.01.2024 19:00:00",
                              "09.02.2024 19:00:00",
                              "01.02.2024 19:00:00",
                              "09.02.2023 19:00:00",
                              "03.02.2023 19:00:00",
                              "08.03.2023 19:00:00",
                              "04.02.2023 19:00:00",
                              "05.02.2023 17:00:00",
                              "11.03.2023 19:00:00",
                              "22.09.2023 19:00:00",
                              "09.11.2023 19:00:00",
                              "13.10.2023 22:00:00",
                              "23.10.2023 12:00:00",
                              "19.10.2023 19:00:00",
                              "16.10.2023 19:00:00",
                              "25.10.2023 09:12:00",
                              "10.02.2024 19:00:00",
                              "23.02.2024 19:00:00",
                              "03.10.2023 19:00:00",
                              "17.03.2024 19:00:00",
                              "24.03.2024 19:00:00",
                              "21.02.2024 19:00:00",
                              "08.02.2024 19:00:00",
                              "06.09.2023 19:00:00",
                              "08.09.2023 19:00:00",
                              "08.03.2024 19:00:00",
                              "11.11.2023 11:24:00",
                              "08.11.2023 19:00:00",
                              "24.11.2023 19:00:00",
                              "16.11.2023 19:00:00"
                          ],
                          "color": "#FEF0CC"
                      }
                  ],
                  "attributes": [
                      "DEADLINE"
                  ],
                  "type": "table",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "269",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              },
              {
                  "datasets": [
                      {
                          "data": [
                              686
                          ],
                          "labels": [
                              "EMPTY"
                          ]
                      }
                  ],
                  "attributes": [
                      ""
                  ],
                  "type": "table",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "278",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              },
              {
                  "datasets": [
                      {
                          "data": [
                              686
                          ],
                          "labels": [
                              "EMPTY"
                          ],
                          "color": "#F8B200"
                      }
                  ],
                  "attributes": [
                      ""
                  ],
                  "type": "table",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "279",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              }
          ]
      },
      {
          "id": "1971",
          "name": "123",
          "dataDasb": [
              {
                  "datasets": [
                      {
                          "data": [
                              88
                          ],
                          "labels": [
                              "EMPTY"
                          ],
                          "color": "#0D4CD3"
                      }
                  ],
                  "attributes": [
                      "Статус проекта"
                  ],
                  "type": "table",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "281",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              },
              {
                  "datasets": [
                      {
                          "datasets": [
                              {
                                  "label": "EMPTY",
                                  "data": [
                                      686
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#9B3BE5"
                                  ]
                              }
                          ],
                          "labels": [
                              ""
                          ]
                      }
                  ],
                  "attributes": [
                      ""
                  ],
                  "type": "bar",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "283",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              },
              {
                  "datasets": [
                      {
                          "datasets": [
                              {
                                  "label": "EMPTY",
                                  "data": [
                                      686
                                  ],
                                  "borderWidth": 1,
                                  "backgroundColor": [
                                      "#EE3F58"
                                  ]
                              }
                          ],
                          "labels": [
                              ""
                          ]
                      }
                  ],
                  "attributes": [
                      ""
                  ],
                  "type": "bar",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "284",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              },
              {
                  "datasets": [
                      {
                          "labels": [
                              "Богданова Дарья",
                              "Лесина Алена",
                              "Шуба Павел",
                              "Раковская Наталья",
                              "Ли Умар",
                              "Гостех Админ",
                              "Волков Максим",
                              "Шоханов Андрей",
                              "Сидоренко Екатерина",
                              "Волков Андрей",
                              "Голыго Артем",
                              "Ерохин Михаил",
                              "Макаренко Константин",
                              "Яковлев Алексей",
                              "Ледаков Юрий",
                              "Липко Анастасия",
                              "(1)Цыбина Ирина",
                              "Администратор Администратор",
                              " Контрольный отдел Руслан",
                              "(2)Годлевская Дарья",
                              "Иванова Мария",
                              "Митина Юлия"
                          ],
                          "datasets": [
                              {
                                  "label": "ед.",
                                  "data": [
                                      123,
                                      108,
                                      17,
                                      5,
                                      15,
                                      73,
                                      61,
                                      43,
                                      2,
                                      11,
                                      10,
                                      12,
                                      11,
                                      110,
                                      57,
                                      2,
                                      9,
                                      3,
                                      2,
                                      6,
                                      1,
                                      5
                                  ],
                                  "borderWidth": 2,
                                  "backgroundColor": [
                                      "#9DACCE",
                                      "#9B3BE5",
                                      "#DDF5E7",
                                      "#9DACCE",
                                      "#16A086",
                                      "#E11432",
                                      "#DDF5E7",
                                      "#FCD9DE",
                                      "#FEF0CC",
                                      "#EE3F58",
                                      "#9B3BE5",
                                      "#EE3F58",
                                      "#FF8A00",
                                      "#FEF0CC",
                                      "#EE3F58",
                                      "#12826E",
                                      "#E11432",
                                      "#EE3F58",
                                      "#EE3F58",
                                      "#FED13E",
                                      "#2DC36A",
                                      "#FEF0CC"
                                  ]
                              }
                          ]
                      }
                  ],
                  "attributes": [
                      "RESPONSIBLE_ID"
                  ],
                  "type": "pie",
                  "filter": [],
                  "UF_NAME": "Название дашборда",
                  "id": "285",
                  "year": 2024,
                  "UF_VISUAL_PARAMS": {
                      "x": "1",
                      "y": "1",
                      "col": "1",
                      "row": "1",
                      "type": ""
                  }
              }
          ]
      }
  ]
    console.log(this.datasets)
    console.log()

    // console.log(this.tabs)
    // let response = {
    //   data: {
    //     "id": 1,
    //     "dasboardElement": {
    //       "id": "1",
    //       "name": "Фактические и планруемые трудозатраты",
    //       "row": "2",
    //       "col": "1",
    //       "sizeX": "2",
    //       "sizeY": "1",
    //       "type": "line",
    //       "coreEntityType": "Task",
    //       "attributes": [
    //         "PLAN",
    //         "FACT"
    //       ],
    //       "filterParams": null,
    //       "buildOnOptions": {
    //         "all": 685,
    //         "count": {
    //           "PLAN": {
    //             "Январь": 0,
    //             "Февраль": 0,
    //             "Март": 0,
    //             "Апрель": 0,
    //             "Май": 0,
    //             "Июнь": 0,
    //             "Июль": 0,
    //             "Август": 0,
    //             "Сентябрь": 0,
    //             "Октябрь": 20,
    //             "Ноябрь": 88,
    //             "Декабрь": 50
    //           },
    //           "FACT": {
    //             "Январь": 0,
    //             "Февраль": 0,
    //             "Март": 0,
    //             "Апрель": 0,
    //             "Май": 0,
    //             "Июнь": 0,
    //             "Июль": 0,
    //             "Август": 0,
    //             "Сентябрь": 0,
    //             "Октябрь": 8,
    //             "Ноябрь": 11,
    //             "Декабрь": 1
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // for (let i = 0; i < this.datasets.length; i++) {
    //   this.addWidjet(this.tabs[0].id, response)
    // }
    initDashboards(this.commonColors, this.datasets); //отрисовка графиков

    this.listOfEmployees = [] // список пользователей для изменения прав
    this.createListOfEmployees()

    //добавление аттрибутов
    // this.drawAttributesSetting();

    //группировка
    this.groups = [
      {
        name: "Задачи",
        code: "Task",
        // data: [
        //   { name: "Выберите опцию", code: "Выберите опцию", type: null },
        //   { name: "Важная задача", code: "Важная задача", type: "checkbox" },
        //   {
        //     name: "Внешняя эскалация",
        //     code: "Внешняя эскалация",
        //     type: "checkbox",
        //   },
        //   {
        //     name: "Внутренняя эскалация",
        //     code: "Внутренняя эскалация",
        //     type: "checkbox",
        //   },
        //   { name: "Код задачи", code: "Код задачи", type: "text" },
        //   { name: "Тип задачи", code: "Тип задачи", type: "list", select: [{ name: "Контрольная веха", code: "Контрольная веха" }] },
        //   { name: "Сотрудник", code: "сотрудник", type: "list", select: [{ name: "Employee1", code: "Employee1" }]}
        // ],
        data: [
          { name: "Выберите опцию", code: "Выберите опцию", type: null },
          { name: "Важная задача", code: "Важная задача", type: "checkbox" },
          {
            name: "Внешняя эскалация",
            code: "Внешняя эскалация",
            type: "checkbox",
          },
          {
            name: "Внутренняя эскалация",
            code: "Внутренняя эскалация",
            type: "checkbox",
          },
          {
            name: "Статус", code: "STATUS", type: "list", select: [{ name: "Завершено", code: "5" },
            { name: "Новое (не просмотренo)", code: "-2" },
            { name: "Выполняется", code: "1" },
            { name: "Принято ответственным", code: "2" },
            { name: "Ждет контроля", code: "4" },
            { name: "Отложено", code: "6" },
            { name: "Просрочено", code: "-1" }]
          },
          { name: "Проект (группа)", code: "GROUP_ID", type: "list", select: [{ name: "Project1", code: "Project1" }, { name: "Project2", code: "Project2" }] }, // прокинуть лист проектов"
          { name: "Код задачи", code: "Код задачи", type: "text" },
          { name: "Тип задачи", code: "Тип задачи", type: "list", select: [{ name: "Контрольная веха", code: "Контрольная веха" }] },
          { name: "Сотрудник", code: "Сотрудник", type: "list", select: [{ name: "Employee1", code: "Employee1" }] } // прокинуть лист пользователей
        ],
      },
      {
        name: "Поручения",
        code: "Resolution",
        data: [
          { name: "Выберите опцию", code: "Выберите опцию", type: null },
          { name: "Название", code: "NAME", type: "text" },
          { name: "Эскалация", code: "Эскалация", type: "checkbox" },
          {
            name: "Статус", code: "Статус", type: "list", select: [{ name: "Завершено", code: "Завершено" },
            { name: "Новое (не просмотренo)", code: "Новое (не просмотренo)" },
            { name: "Выполняется", code: "Выполняется" },
            { name: "Принято ответственным", code: "Принято ответственным" },
            { name: "Ждет контроля", code: "Ждет контроля" },
            { name: "Отложено", code: "Отложено" },
            { name: "Просрочено", code: "Просрочено" }]
          },
          {
            name: "Уровень",
            code: "Уровень",
            type: "select",
            data: [
              { name: "Внутренняя", code: "Input" },
              { name: "Внешняя", code: "Output" },
            ],
          },
        ],
      },
      {
        name: "Проекты",
        code: "Project",
        data: [
          { name: "Выберите опцию", code: "Выберите опцию", type: null },
          { name: "Активность", code: "ACTIVE", type: "text" },
          { name: "Стоимость", code: "Стоимость", type: "number" },
          { name: "Статус проекта", code: "Статус проекта", type: "text" },
          { name: "Ответственный", code: "OWNER_LOGIN", type: "text" },
        ],
      },
      {
        name: "Сотрудники",
        code: "User",
        data: [
          { name: "Выберите опцию", code: "Выберите опцию", type: null },
          { name: "Сотрудник", code: "ID", type: "text" }],
      },
    ];

    //типы доступных графиков
    this.type = [
      { name: "Выберите опцию", code: "default" },
      { name: "Столбцы", code: "bar" },
      { name: "Круговая диаграмма", code: "pie" },
      { name: "Таблица", code: "table" },
      { name: "график", code: "line" },
    ];

    //ограничение на количества виджетов на одной вкладке
    this.maxDashbOnTab = 6;

    this.presets = [
      {
        id: 1,
        name: "Первый пресет",
        unity_type: "Task",
        data: [
          {
            id: 1,
            code: "Внешняя эскалация",
            value: true
          },
          {
            id: 2,
            code: "Код задачи",
            value: "123"
          }
        ],
        report: { name: "YEAR", list: "2017" }
      },
      {
        id: 2,
        name: "Второй пресет",
        unity_type: "Task",
        data: [
          {
            id: 1,
            code: "Внешняя эскалация",
            value: false
          },
          {
            id: 2,
            code: "Код задачи",
            value: "12345"
          }
        ],

        report: {
          name: "RANGE", range: [
            "2023-12-07",
            "2023-12-22"
          ]
        }
      }]


    let years = Array(20)
      .fill()
      .map((element, index) => index + 2015);
    let yaers_ = [{ name: "Выберите опцию", code: "default" }];
    years.forEach((item) => {
      yaers_.push({ name: item, code: item });
    });
    this.report_type = [
      // { name: "По фильтру", code: "BY_FILTER", type: null },
      { name: "Диапазон", code: "RANGE", type: "range" },
      {
        name: "Год",
        code: "YEAR",
        type: "list",
        select: yaers_,
      },
      {
        name: "Квартал",
        code: "QUARTER",
        type: "list",
        select: [
          { name: "Выберите опцию", code: "default" },
          { name: "I", code: "1" },
          { name: "II", code: "2" },
          { name: "III", code: "3" },
          { name: "IV", code: "4" },
        ],
      },
      {
        name: "Месяц",
        code: "MONTH",
        type: "list",
        select: [
          { name: "Выберите опцию", code: "default" },
          { name: "Январь", code: "1" },
          { name: "Февраль", code: "2" },
          { name: "Март", code: "3" },
          { name: "Апрель", code: "4" },
          { name: "Май", code: "5" },
          { name: "Июнь", code: "6" },
          { name: "Июль", code: "7" },
          { name: "Август", code: "8" },
          { name: "Сентябрь", code: "9" },
          { name: "Октябрь", code: "10" },
          { name: "Ноябрь", code: "11" },
          { name: "Декабрь", code: "12" },
        ],
      },
      { name: "Текущий месяц", code: "CURRENT_MONTH", type: null },
      { name: "Текущий квартал", code: "CURRENT_QUARTER", type: null },
      { name: "Текущий день", code: "CURRENT_DAY", type: null },
      { name: "Последние 90 дней", code: "LAST_90_DAYS", type: null },
      { name: "Последние 60 дней", code: "LAST_60_DAYS", type: null },
      { name: "Последние 30 дней", code: "LAST_30_DAYS", type: null },
      { name: "Последние 7 дней", code: "LAST_7_DAYS", type: null },
    ];

    //строчки для харда трудозатрат
    //  this.createDashboartPlanFact()
    // this.flag = true;

    //шаблоны
    this.templates = []
    this.initListOfTemplates()

    this.parseGroups()//парс группировки с бэка


  }



  // createDashboartPlanFact() {
  //   try {
  //     let current_tab = this.tabs.find(el => el.id == "1939")
  //     // let current_tab = this.tabs.find(el => el.id == "1836")
  //     let response = {
  //       data: {
  //         "id": 1,
  //         "dasboardElement": {
  //           "id": "1",
  //           "name": "Фактические и планруемые трудозатраты",
  //           "row": "2",
  //           "col": "1",
  //           "sizeX": "2",
  //           "sizeY": "1",
  //           "type": "line",
  //           "coreEntityType": "Task",
  //           "attributes": [
  //             "PLAN",
  //             "FACT"
  //           ],
  //           "filterParams": null,
  //           "buildOnOptions": {
  //             "all": 685,
  //             "count": {
  //               "PLAN": {
  //                 "Январь": 0,
  //                 "Февраль": 0,
  //                 "Март": 0,
  //                 "Апрель": 0,
  //                 "Май": 0,
  //                 "Июнь": 0,
  //                 "Июль": 0,
  //                 "Август": 0,
  //                 "Сентябрь": 0,
  //                 "Октябрь": 20,
  //                 "Ноябрь": 88,
  //                 "Декабрь": 50
  //               },
  //               "FACT": {
  //                 "Январь": 0,
  //                 "Февраль": 0,
  //                 "Март": 0,
  //                 "Апрель": 0,
  //                 "Май": 0,
  //                 "Июнь": 0,
  //                 "Июль": 0,
  //                 "Август": 0,
  //                 "Сентябрь": 0,
  //                 "Октябрь": 8,
  //                 "Ноябрь": 11,
  //                 "Декабрь": 1
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //    // this.addWidjet(current_tab, response)
  //   //  this.addWidjetForTrud(current_tab, response)
  //     // initDashboards(this.commonColors, this.datasets)

  //     let config_data;

  //     let dop = [];
  //     let datasets = []
  //     let dop_labels = [];
  //     let labels = ["Планируемые трудозатраты", "Фактические трудозатраты"]
  //     let i = 0;
  //     for (const grapf of response.data.dasboardElement.attributes) {
  //       dop_labels = [];
  //       let dop_datasets = [];
  //       let buildOnOptions = response.data.dasboardElement.buildOnOptions.count[grapf];
  //       for (const key_buildOnOptions in buildOnOptions) {
  //         dop_labels.push(key_buildOnOptions);
  //         dop_datasets.push(buildOnOptions[key_buildOnOptions]);
  //       }
  //       datasets.push(
  //         {
  //           label: labels[i],
  //           data: dop_datasets,
  //           fill: false,
  //           borderColor: this.getRandomColor(this.commonColors,1),
  //           tension: 0.1,
  //           borderWidth: 2,
  //         },
  //       )
  //       i++;

  //     }
  //     dop.push({
  //       labels: dop_labels,
  //       datasets: datasets
  //     });
  //     config_data = {
  //       type: "line",
  //       data: dop,
  //     };
  //     let newDashb = new Dashboard(
  //       config_data.data,
  //       config_data.type,
  //       response.data.dasboardElement.attributes,
  //       response.data.dasboardElement.filterParams,
  //       response.data.dasboardElement.id,
  //       response.data.dasboardElement.name,
  //       response.data.dasboardElement.sizeX,
  //       response.data.dasboardElement.sizeY,
  //       response.data.dasboardElement.row,
  //       response.data.dasboardElement.col,
  //     );
  //     //ВСТАВИТЬ ДАШБОРД В ВКЛАДКУ
  //     current_tab.dataDasb.push(newDashb)
  //     let doparr = [];
  //     this.tabs.forEach(el => el.dataDasb.forEach(elim => doparr.push(elim)))
  //     this.datasets = doparr;
  //     return this.datasets;
  //     // initDashboards(this.commonColors, this.datasets)
  //   } catch { }

  // }



  // addWidjetForTrud(current_tab, response){

  //   let optionsGridster = {
  //     widget_margins: [12, 14],
  //     widget_base_dimensions: [365, 525],
  //     max_cols: 4,
  //     min_cols: 4,
  //     resize: {
  //       enabled: true,
  //       start: function (event, ui) {
  //         console.log(event, ui);
  //       },
  //       stop: function (event, ui) {
  //         console.log(event, ui);
  //       }
  //     },
  //     draggable: {
  //       start: function (event, ui) {
  //         console.log(event, ui);
  //       },
  //       stop: function (event, ui) {
  //         console.log(event, ui);
  //       }
  //     }
  //   };
  //   let current_tab_html = $(`.tabs-content-block[data-tab-name="${current_tab.id}"]`);
  //   $(`.tabs-content-block[data-tab-name="${current_tab.id}"] .gridster .widjet-list`).gridster(optionsGridster).width("auto");

  //   let gridster = $(`.tabs-content-block[data-tab-name="${current_tab.id}"] .gridster ul`).gridster({
  //     widget_base_dimensions: [100, 120],
  //     widget_margins: [5, 5],
  //     draggable: {
  //       handle: '.dragDiv'
  //     }
  //   }).data('gridster');

  //   let template = `
  //   <li class="widjet-list-item gs-w">
  //     <div class="widjet-list-item-content">
  //       <div class="widjet-list-item-content__title-container">
  //         <p class="widjet-list-item-content__title title-primary">${response.data.dasboardElement.name}</p>
  //         <div class="position-relative">
  //         <button data-popup-name="${response.data.dasboardElement.id}" class="btn btn-icon-small popupTrigger" type="button">
  //           <img src="./assets/img/settings.svg" alt="Иконка настройки">
  //         </button>
  //         <div data-popup-name="${response.data.dasboardElement.id}" class="popup widjet-popup-position-right-zero ready" style="">
  //           <ul class="popup-list" style="width: 110px; position: relative;">
  //             <li class="btnTriggerRebuildBoard" data-popup-name="filter_item${response.data.dasboardElement.id}">
  //               <p> Изменить</p>
  //               <div data-popup-name="filter_item${response.data.dasboardElement.id}" class="popup widjet-popup-position-under popup_filter"></div>
  //             </li>
  //             <li class="btnTriggerRemoveBoard">
  //               <p>Удалить</p>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //     <div class="widjet-list-item-content__viewBlock" style="height:80%; overflow: auto;">`;
  //   //for (let j = 0; j < response.data.dasboardElement.attributes.length; j++) {
  //     template += `

  //   <div class="chart-container chart-${response.data.dasboardElement.type}" ${response.data.dasboardElement.type == "line" ? 'style="position: relative;  width:100%"' : ''}>
  //   <canvas
  //     class="chart-canvas" 
  //     id="item${response.data.dasboardElement.id}-${response.data.dasboardElement.attributes[0]}" 
  //     data-chart-type="${response.data.dasboardElement.type}"
  //     ></canvas>
  //   <div class="chart-legend" id="legend-container-item${response.data.dasboardElement.id}-${response.data.dasboardElement.attributes[0]}"></div>
  //   </div>
  //   `
  // //  }
  //   template += `</div>
  //   </div> 
  //   </li> `
  //   let data = [[template, response.data.dasboardElement.sizeX, response.data.dasboardElement.sizeY]]
  //   $.each(data, function (i, widget) {
  //     gridster.add_widget.apply(gridster, widget)
  //   });





  // }



  createObjectAttribites() {
    let allAttributes = [];
    const names = ["Задачи", "Поручения", "Проекты", "Сотрудники"];
    const codes = ["Task", "Resolution", "Project", "User"]
    // const names = ["Проекты", "Задачи", "Сотрудники", "Поручения"];
    let i = 0;
    console.log("********")
    console.log(dashb_array);
    console.log(dashb_array["ATTRIBUTES"])
    for (const elem of dashb_array["ATTRIBUTES"]) {
      allAttributes.push({ name: names[i], code: codes[i], data: elem });
      i++;
    }

    return allAttributes;
  }


  drawAttributesInSection(data, name, checked) {
    let template_checkboxes = `
    <div class="container">
      <span>${name}</span></br>
      <div style="display: flex; gap:20px; margin-top: 12px;">
        <div class="container_checkbox"> 
          <input type='checkbox'  onClick="checkAll(this)" class="custom-checkbox" name='select-all' value='select-all'/>
          <label for='select-all'>Выбрать все</label>
        </div>
        <span style="text-decoration: underline" onClick="deleteAll(this)">Сбросить всё</span>
      </div>
    <div style="column-count:3;">`;
    for (let j = 0; j < data.length; j++) {
      template_checkboxes += `<div class="container_checkbox"><input type='checkbox'  class="custom-checkbox" name='${data[j].code
        }' ${checked.indexOf(data[j].code) < 0 ? "" : "checked"} value="${data[j].name
        }" id="${data[j].code}"/>`;
      template_checkboxes += `<label for='${data[j].code}'>${data[j].name}</label></div><br/>`;
    }
    template_checkboxes += "</div>";

    return template_checkboxes;
  }
  getRandomColor(arrayColors, lengthNeeded) {
    let minimum = 1;
    let maximum = arrayColors.length;
    let color = [];
    for (let i = 0; i < lengthNeeded; i++) {
      let randomItem =
        arrayColors[
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        ];
      color.push(randomItem);
    }
    return color;
  }

  //преобразование массива в нормальный вид для инициализации
  initDatasets() {
    let datasets = [];
    this.tabs = [];
    console.log(dashb_array)
    // this.countTabs = dashb_array["DASHBOARDS"].length;
    for (const elem of dashb_array["DASHBOARDS"]) {
      const graph_info = elem.grapfInfo;
      let dop_arr_dash = [];
      let newTab = new Tab(elem.ID, elem.NAME);

      for (const elem_graph_ in graph_info) {
        const elem_graph = graph_info[elem_graph_];
        // console.log("elem_graph");
        // console.log(elem_graph);
        let config_data;
        if (elem_graph[0].type == "pie") {
          let dop = [];
          for (const grapf of elem_graph[0].attributes) {
            let dop_labels = [];
            let dop_datasets = [];
            let buildOnOptions = elem_graph[0].buildOnOptions.count[grapf];
            for (const key_buildOnOptions in buildOnOptions) {
              dop_labels.push(key_buildOnOptions);
              dop_datasets.push(buildOnOptions[key_buildOnOptions]);
            }
            dop.push({
              labels: dop_labels,
              datasets: [
                {
                  label: "ед.",
                  data: dop_datasets,
                  borderWidth: 2,
                  backgroundColor: this.getRandomColor(
                    this.commonColors,
                    dop_datasets.length
                  ),
                },
              ],
            });
          }
          config_data = {
            type: "pie",
            data: dop,
          };
        }

        if (elem_graph[0].type == "bar") {
          let dop = [];
          for (const grapf of elem_graph[0].attributes) {
            let dop_labels = [];
            let dop_datasets = [];
            let buildOnOptions = elem_graph[0].buildOnOptions.count[grapf];
            for (const key in buildOnOptions) {
              dop_labels.push(key);
              dop_datasets.push({
                label: key,
                data: [buildOnOptions[key]],
                borderWidth: 1,
                backgroundColor: this.getRandomColor(
                  this.commonColors,
                  [buildOnOptions[key]].length
                ),
              });
            }
            let transcription = "";
            for (const el of this.allAttributes) {
              let dop = el.data.filter((elem) => elem.code == grapf)[0];
              // console.log(dop);
              if (dop?.name) transcription = dop.name;
            }
            dop.push({ datasets: dop_datasets, labels: [transcription] });
          }
          config_data = {
            type: "bar",
            data: dop,
          };
        }

        if (elem_graph[0].type == "line") {
          let dop = [];
          for (const grapf of elem_graph[0].attributes) {
            let dop_labels = [];
            let dop_datasets = [];
            let buildOnOptions = elem_graph[0].buildOnOptions.count[grapf];
            for (const key_buildOnOptions in buildOnOptions) {
              dop_labels.push(key_buildOnOptions);
              dop_datasets.push(buildOnOptions[key_buildOnOptions]);
            }
            dop.push({
              labels: dop_labels,
              datasets: [
                {
                  label: "My First Dataset ",
                  data: dop_datasets,
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                  borderWidth: 2,
                },
              ],
            });
          }
          config_data = {
            type: "line",
            data: dop,
          };
        }
        if (elem_graph[0].type == "table") {
          let dop = [];
          for (const grapf of elem_graph[0].attributes) {
            let dop_labels = [];
            let dop_datasets = [];
            let buildOnOptions = elem_graph[0].buildOnOptions.count[grapf];
            for (const key in buildOnOptions) {
              dop_labels.push(key);
              dop_datasets.push(buildOnOptions[key]);
            }
            dop.push({
              data: dop_datasets,
              labels: dop_labels,
              color: this.getRandomColor(this.commonColors, 1)[0],
            });
          }
          config_data = {
            type: "table",
            data: dop,
          };
        }
        if (config_data) {
          let newDashb = new Dashboard(
            config_data.data,
            config_data.type,
            elem_graph[0].attributes,
            elem_graph[0].filterParams,
            elem_graph[0].id,
            elem_graph[0].name,
            elem_graph[0].sizeX,
            elem_graph[0].sizeY,
            elem_graph[0].row,
            elem_graph[0].col,

          );
          datasets.push(newDashb);
          newTab.addDashb(newDashb)
        }
        dop_arr_dash.push(config_data);
      }
      this.tabs.push(newTab);
    }
    return datasets;
  }

  //сохранение дашборда
  saveDashboard() { }

  //инициализация фильтра
  initFilter() { }

  createDashboard() {
    console.log("CREATE");
    $(".tabcontent")[0].innerHTML = "";
    this.newDashboard = new Dashboard();
    this.newDashboard.name = $(
      ".tabs-triggers-list-item.active.tabPopupTrigger .tab-input-container p"
    )[0]?.innerText;
    this.newDashboard.UF_ENTITY_TYPE = "Project";
    this.newDashboard.UF_VISUAL_PARAMS = {
      x: 1,
      y: 1,
      col: 1,
      row: 1,
      type: "pie",
    };

  }

  drawInutForSelects(evt) {
    let attrs = this.groups.filter(
      (el) => el.code == this.newDashboard.UF_ENTITY_TYPE
    )[0].data;
    let value = evt.value;
    const elem = attrs.filter((el) => el.name == value)[0];

    let parent = $(evt).parent().find(".inputs")[0];
    if (elem?.type != "select") {
      let inp = document.createElement("input");
      inp.setAttribute("type", elem.type);
      inp.setAttribute("name", elem.name);
      inp.addEventListener("change", function () {
        // classInit.changeAtrributeForNewDasb(
        //   $(this).parent().parent().find("select")[0].value,
        //   $(this).parent().parent().find("select").attr("data-attr"),
        //   this
        // );
      });
      parent.appendChild(inp);
      // select = `<input onChange="classInit.changeAtrributeForNewDasb($(this).parent().parent().find('select')[0].value, $(this).parent().parent().find('select').attr('data-attr'), this)" type='${elem.type}' name='${elem.name}'></input>`;
      if (elem?.type == "number") {
        let select = document.createElement("select");
        const arr = [
          { name: "default", code: "default" },
          { name: "Среднее", code: "avg" },
          { name: "Максимум", code: "max" },
          { name: "Минимум ", code: "min" },
          { name: "Сумма ", code: "sum" },
        ];
        arr.forEach((item) => {
          let option = document.createElement("option");
          option.innerText = item.name;
          option.setAttribute("value", item.code);
          select.appendChild(option);
        });
        parent.appendChild(select);
      }
    }

    // parent.innerHTML = select;
    // $(evt).parent().find(".inputs")[0].innerHTML = select;
  }
  changeAtrributeForNewDasb(name, index, value) {
    // console.log(name);
    // console.log(value);
    if ($(value).attr("type") == "checkbox") {
      value = $(value)[0].checked;
    } else {
      // console.log("no checkbox");
      value = $(value)[0] ? $(value)[0].value : "";
    }

    this.newDashboard.attributes[index].name = name;
    this.newDashboard.attributes[index].data = value;
  }

  addAtrributeForNewDasb(name, value, id = null) {
    if (this.newDashboard.attributes) {
      this.newDashboard.attributes.push({ id: id, name: name, data: value });
    } else {
      this.newDashboard.attributes = [{ id: id, name: name, data: value }];
    }
  }



  //добавление аттрибута на вкладку создания
  drawStatus(name, index, but, place = $(".tabcontent")[0]) {
    const groupsAttr = this.allAttributes.filter((el) => el.name == name)[0].data;
    console.log(groupsAttr)

    let nodediv = document.createElement("div");
    nodediv.className = "changeContentStatus";
    nodediv.setAttribute("data-attr", index);

    let nodeselect = document.createElement("select");
    nodeselect.setAttribute("data-attr", index);

    for (const el of groupsAttr) {
      let option = document.createElement("option");
      option.innerText = el.name;
      option.setAttribute("value", el.code);
      nodeselect.appendChild(option);
    }



    nodeselect.addEventListener("change", function () {
      //изменение аттрибутов
      const data_attr = $(this).attr("data-attr"); //номер атттриубта
      const elemGroups = classInit.allAttributes.find(
        (el) => el.code == classInit.newDashboard.UF_ENTITY_TYPE
      );
      const code_attr = elemGroups.data.find(
        (el) => el.code == this.value
      );

      const parent = $(this).parent()[0];
      let block = document.createElement("div");
      block.setAttribute("class", "attrInput")
      let flag = classInit.newDashboard.attributes.filter(el => el.id == data_attr)[0];

      let ind = classInit.newDashboard.attributes.indexOf(flag);

      if (ind >= 0) {
        classInit.newDashboard.attributes[ind].name = code_attr.code;
        classInit.newDashboard.attributes[ind].data = "";
      }
      else {
        ind = index
        console.log('Код атрибут');
        console.log(code_attr);
        classInit.addAtrributeForNewDasb(code_attr.code, "", index)
      }

      const childs = $(this).siblings('.attrInput');
      let but = $(this).siblings('.deleteAttrBut');
      if (childs.length > 0) {
        parent.removeChild(childs[0]);
      }
      if (code_attr.type == "checkbox") {
        //значит у нас чекбокс должен добавиться
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", code_attr.type);
        classInit.newDashboard.attributes[data_attr].data = false;
        checkbox.addEventListener("change", function () {
          classInit.newDashboard.attributes[ind].data = this.checked;
        });

        let label = document.createElement("label");
        label.innerText = "Да/нет";
        block.appendChild(checkbox);
        block.appendChild(label);

      }
      if (code_attr.type == "text" || code_attr.type == "number") {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", code_attr.type);
        classInit.newDashboard.attributes[data_attr].data = "";
        checkbox.addEventListener("input", function () {
          classInit.newDashboard.attributes[ind].data = this.value;
        });
        block.appendChild(checkbox);

      }
      if (code_attr.type == "list") {
        // <select class="js-select2" name="tshead" multiple>
        //    <?foreach($otv_head as $key => $name) echo('<option value="'.$key.'"'.(in_array($key, explode(',', $_REQUEST['tshead'])) ? " selected" : "").'>'.$name.'</option>')?>
        //</select>
        let select = document.createElement("select");
        select.setAttribute("class", "js-select2")
        code_attr.select.forEach((el) => {
          let option = document.createElement("option");
          option.setAttribute("value", el.code);
          option.innerText = el.name;
          select.appendChild(option);
        });
        select.addEventListener("change", function () {
          classInit.newDashboard.attributes[ind].data = this.value;
        });
        block.appendChild(select);
      }
      parent.insertBefore(block, but[0]);
      console.log(classInit.newDashboard.attributes)

    });



    let deleteBut = document.createElement('button');
    deleteBut.setAttribute("class", "deleteAttrBut");
    deleteBut.innerText = "X";
    deleteBut.addEventListener("click", function () {
      const parent1 = $(this).parent()
      const parent2 = parent1.parent()[0]
      let id = parent1.attr("data-attr")


      classInit.newDashboard.attributes = classInit.newDashboard.attributes.filter(el => el.id != id)
      console.log(classInit.newDashboard.attributes)

      parent2.removeChild(parent1[0])
    })



    nodediv.appendChild(nodeselect);
    nodediv.appendChild(deleteBut);
    place.insertBefore(nodediv, but);
    console.log(classInit.newDashboard.attributes)
    const event = new Event("change")
    nodeselect.dispatchEvent(event)
  }


  drawNewAttrForFilter(name, index) { //name - название сущности, по которой строятся арибуты
    let template = ``
    const listAttrs = this.groups.find(el => el.code == name)
    console.log(listAttrs)
    if (listAttrs) {
      template += `<div class="changeContentStatus" data-attr="${index}"><select data-attr="${index}">`;
      listAttrs.data.forEach(function (el) {
        template += `<option value="${el.code}">${el.name}</option>`
      })
      template += `</select>
      <button class="deleteAttr">X</button></div>`
    }
    else {
      console.log(this.groups)
      console.log(`сущности ${name} не существует`)
    }
    return template;


  }

  //добавлени аттрибутов на вкладку изменения фильтров
  drawAttr() {
    let but = document.createElement("button");
    but.className = "addAtr";
    but.innerText = "Добавить аттрибут";
    container.appendChild(but);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
  }

  ////////////перерисовка окна для добавления графика///////////////
  redrawWidow(name) {
    this.newDashboard.report = {};
    this.newDashboard.group = "";
    const container = $(".tabcontent")[0];
    container.innerHTML = "";
    let containetlabel = document.createElement("div");
    containetlabel.className = "containetlabel";

    let text = document.createElement("input");
    text.setAttribute("readonly", "true");
    text.setAttribute("value", this.newDashboard.UF_NAME);
    text.addEventListener("input", function () {
      this.style.width = (this.value.length + 1) * 15 + "px";
      classInit.newDashboard.UF_NAME = this.value;
    });
    text.setAttribute(
      "style",
      "width:" + (this.newDashboard.UF_NAME.length + 1) * 15 + "px"
    );
    containetlabel.appendChild(text);

    text = document.createElement("div");
    text.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2407 5.37002L17.2857 4.32803C16.9165 3.92522 16.2924 3.89329 15.884 4.25633L14.3216 5.64538L16.6198 8.18244L18.1714 6.78989C18.5854 6.41828 18.6166 5.78018 18.2407 5.37002ZM5.5 13.4882L13.2006 6.64207L15.5035 9.18435L7.90674 16.0025H5.5V13.4882ZM19.3465 4.35654L18.3915 3.31455C17.4686 2.30753 15.9083 2.22771 14.8874 3.1353L4.33557 12.5164C4.12212 12.7061 4 12.9781 4 13.2637V16.5025C4 17.0548 4.44772 17.5025 5 17.5025H8.09822C8.34478 17.5025 8.58266 17.4114 8.76616 17.2467L19.1733 7.90621C20.2084 6.97718 20.2863 5.38193 19.3465 4.35654ZM20 18.9992H4V20.4992H20V18.9992Z" fill="#0B1F33"/>
    </svg>`;
    text.addEventListener("click", function () {
      classInit.changeNameOfDashboard($(this).parent().find("input")[0]);
    });
    containetlabel.appendChild(text);
    containetlabel.appendChild(document.createElement("br"));

    container.appendChild(containetlabel);

    /////////////отчетный период///////////////
    text = document.createElement("label");
    text.innerText = "Отчетный период";
    container.appendChild(text);
    container.appendChild(document.createElement("br"));

    let block = document.createElement("div");
    block.className = "ReportSelect";
    let select = document.createElement("select");
    select.addEventListener("change", function () {
      classInit.newDashboard.report = { name: this.value };
      let element = classInit.report_type.filter((el) => el.code == this.value)[0];
      let parent = $(this).parent()[0];
      let childs = parent.childNodes;

      if (childs.length > 1) {
        //значит уже что-то добавляли
        parent.removeChild(childs[1]);
      }

      if (element?.type == "list") {
        //надо добавить дополнительный селект
        let block = document.createElement("div");
        let selectSubType = document.createElement("select");
        element?.select.forEach((item, index, array) => {
          let option = document.createElement("option");
          option.innerText = item.name;
          option.setAttribute("value", item.code);
          selectSubType.appendChild(option);
        });
        selectSubType.addEventListener("change", function () {
          classInit.newDashboard.report.list = this.value;
        });

        block.appendChild(selectSubType);
        parent.appendChild(block);
      }
      if (element?.type == "range") {
        classInit.newDashboard.report = { name: this.value, range: ["", ""] };
        //добавление двух инпутов для диапазиона
        let block = document.createElement("div");
        let date1SubType = document.createElement("input");
        date1SubType.setAttribute("type", "date");
        date1SubType.setAttribute(
          "style",
          `BACKGROUND-COLOR: #F0F5FF;
        PADDING: 12PX;
        BORDER-RADIUS: 12PX;
        BORDER: NONE;`
        );
        block.appendChild(date1SubType);
        date1SubType.addEventListener("input", function () {
          classInit.newDashboard.report.range[0] = this.value;
        });
        date1SubType.addEventListener("change", function () {
          classInit.newDashboard.report.range[0] = this.value;
        });

        let date2SubType = document.createElement("input");
        date2SubType.setAttribute("type", "date");
        date2SubType.setAttribute(
          "style",
          `BACKGROUND-COLOR: #F0F5FF;
        PADDING: 12PX;
        BORDER-RADIUS: 12PX;
        BORDER: NONE;`
        );
        block.appendChild(date2SubType);
        date2SubType.addEventListener("input", function () {
          if (classInit.newDashboard.report.range) {
            classInit.newDashboard.report.range[1] = this.value;
          } else {
            classInit.newDashboard.report.range = ["", ""];
          }
        });
        date2SubType.addEventListener("change", function () {
          if (classInit.newDashboard.report.range) {
            classInit.newDashboard.report.range[1] = this.value;
          } else {
            classInit.newDashboard.report.range = ["", ""];
          }
        });
        parent.appendChild(block);
      }
    });
    // let dopopt = document.createElement("option");
    // dopopt.innerHTML = "Выберите опцию";
    // dopopt.setAttribute("value", "default");
    // select.appendChild(dopopt);
    for (const el of this.report_type) {
      let option = document.createElement("option");
      option.setAttribute("value", el.code);
      option.innerText = el.name;
      select.appendChild(option);
    }
    block.appendChild(select);
    container.appendChild(block);

    /////////////группировка///////////////
    text = document.createElement("label");
    text.innerText = "Группировка";
    container.appendChild(text);
    container.appendChild(document.createElement("br"));
    const attr = this.groups.filter((el) => el.name == name)[0].data;
    block = document.createElement("div");
    block.className = "changeContentGroup";
    let selectgroup = document.createElement("select");

    selectgroup.addEventListener("change", function () {
      classInit.newDashboard.group = this.value;
    });
    // dopopt = document.createElement("option");
    // dopopt.innerHTML = "Выберите опцию";
    // dopopt.setAttribute("value", "default");
    // selectgroup.appendChild(dopopt);

    for (const el of attr) {
      let option = document.createElement("option");
      option.setAttribute("value", el.code);
      option.innerText = el.name;
      selectgroup.appendChild(option);
    }
    block.appendChild(selectgroup);
    container.appendChild(block);
    container.appendChild(document.createElement("br"));

    //атрибуты
    text = document.createElement("h3");
    text.innerHTML = "Аттрибуты";
    container.appendChild(text);
    container.appendChild(document.createElement("br"));

    let but = document.createElement("button");
    but.className = "addAtr";
    but.innerText = "Добавить аттрибут";
    container.appendChild(but);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    //тип графика
    text = document.createElement("h3");
    text.innerHTML = "Тип представления";
    container.appendChild(text);
    let selecttype = document.createElement("select");

    // dopopt = document.createElement("option");
    // dopopt.innerHTML = "Выберите опцию";
    // dopopt.setAttribute("value", "default");
    // selecttype.appendChild(dopopt);
    selecttype.addEventListener("change", function () {
      classInit.newDashboard.UF_VISUAL_PARAMS.type = this.value;
    });
    for (const el of this.type) {
      let option = document.createElement("option");
      option.setAttribute("value", el.code);
      option.innerText = el.name;
      selecttype.appendChild(option);
    }
    container.appendChild(selecttype);
    container.appendChild(document.createElement("br"));

    //кнопка на вывод
    but = document.createElement("button");
    but.innerText = "Создать";
    but.className = "saveDashb";
    container.appendChild(but);
  }

  changeNameOfDashboard(currentItem) {
    if (this.changeState) {
      $(currentItem).attr("readonly");
      this.changeState = false;
    } else {
      $(currentItem).removeAttr("readonly");
      $(currentItem).focus();
      this.changeState = true;
    }
  }

  // создание новго виджета
  addWidjet(current_tab, response)  // объект вкладки
  {
    console.log(response)
    let optionsGridster = {
      widget_margins: [12, 14],
      widget_base_dimensions: [365, 525],
      max_cols: 4,
      min_cols: 4,
      resize: {
        enabled: true,
        start: function (event, ui) {
          console.log(event, ui);
        },
        stop: function (event, ui) {
          console.log(event, ui);
        }
      },
      draggable: {
        start: function (event, ui) {
          console.log(event, ui);
        },
        stop: function (event, ui) {
          console.log(event, ui);
        }
      }
    };
    // let current_tab_html = $(`.tabs-content-block[data-tab-name="${current_tab.id}"]`);
    $(`.tabs-content-block[data-tab-name="${current_tab.id}"] .gridster .widjet-list`).gridster(optionsGridster).width("auto");

    let gridster = $(`.tabs-content-block[data-tab-name="${current_tab.id}"] .gridster ul`).gridster({
      widget_base_dimensions: [100, 120],
      widget_margins: [5, 5],
      draggable: {
        handle: '.dragDiv'
      }
    }).data('gridster');

    let template = `
    <li class="widjet-list-item gs-w">
      <div class="widjet-list-item-content">
        <div class="widjet-list-item-content__title-container">
          <p class="widjet-list-item-content__title title-primary">${response.data.dasboardElement.name}</p>
          <div class="position-relative">
          <button data-popup-name="${response.data.dasboardElement.id}" class="btn btn-icon-small popupTrigger" type="button">
            <img src="./assets/img/settings.svg" alt="Иконка настройки">
          </button>
          <div data-popup-name="${response.data.dasboardElement.id}" class="popup widjet-popup-position-right-zero ready" style="">
            <ul class="popup-list" style="width: 110px; position: relative;">
              <li class="btnTriggerRebuildBoard" data-popup-name="filter_item${response.data.dasboardElement.id}">
                <p> Изменить</p>
                <div data-popup-name="filter_item${response.data.dasboardElement.id}" class="popup widjet-popup-position-under popup_filter change_filters"></div>
              </li>
              <li class="btnTriggerRemoveBoard">
                <p>Удалить</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="widjet-list-item-content__viewBlock" style="height:80%; overflow: auto;">`;
    for (let j = 0; j < response.data.dasboardElement.attributes.length; j++) {
      template += `
  
    <div class="chart-container chart-${response.data.dasboardElement.type}" ${response.data.dasboardElement.type == "line" ? 'style="position: relative;  width:100%"' : ''}>
    <canvas
      class="chart-canvas" 
      id="item${response.data.dasboardElement.id}-${response.data.dasboardElement.attributes[j]}" 
      data-chart-type="${response.data.dasboardElement.type}"
      ></canvas>
    <div class="chart-legend" id="legend-container-item${response.data.dasboardElement.id}-${response.data.dasboardElement.attributes[j]}"></div>
    </div>
    `
    }
    template += `</div>
    </div> 
    </li> `
    let data = [[template, response.data.dasboardElement.sizeX, response.data.dasboardElement.sizeY]]
    $.each(data, function (i, widget) {
      gridster.add_widget.apply(gridster, widget)
    });
    let config_data;
    if (response.data.dasboardElement.type == "pie") {
      let dop = []
      for (const grapf of response.data.dasboardElement.attributes) {
        let dop_labels = [];
        let dop_datasets = [];
        let buildOnOptions = response.data.dasboardElement.buildOnOptions.count[grapf];
        for (const key_buildOnOptions in buildOnOptions) {
          dop_labels.push(key_buildOnOptions);
          dop_datasets.push(buildOnOptions[key_buildOnOptions]);
        }
        dop.push({
          labels: dop_labels,
          datasets: [
            {
              label: "ед.",
              data: dop_datasets,
              borderWidth: 2,
              backgroundColor: classInit.getRandomColor(
                classInit.commonColors,
                dop_datasets.length
              ),
            },
          ],
        });
      }
      config_data = {
        type: "pie",
        data: dop,
      };
    }
    if (response.data.dasboardElement.type == "bar") {
      let dop = [];
      for (const grapf of response.data.dasboardElement.attributes) {
        let dop_labels = [];
        let dop_datasets = [];
        let buildOnOptions = response.data.dasboardElement.buildOnOptions.count[grapf];
        for (const key in buildOnOptions) {
          dop_labels.push(key);
          dop_datasets.push({
            label: key,
            data: [buildOnOptions[key]],
            borderWidth: 1,
            backgroundColor: classInit.getRandomColor(
              classInit.commonColors,
              [buildOnOptions[key]].length
            ),
          });
        }
        let transcription = "";
        for (const el of classInit.allAttributes) {
          let dop = el.data.filter((elem) => elem.code == grapf)[0];
          // console.log(dop);
          if (dop?.name) transcription = dop.name;
        }
        dop.push({ datasets: dop_datasets, labels: [transcription] });
      }
      config_data = {
        type: "bar",
        data: dop,
      };
    }


    if (response.data.dasboardElement.type == "line") {
      let dop = [];
      for (const grapf of response.data.dasboardElement.attributes) {
        let dop_labels = [];
        let dop_datasets = [];
        let buildOnOptions = response.data.dasboardElement.buildOnOptions.count[grapf];
        for (const key_buildOnOptions in buildOnOptions) {
          dop_labels.push(key_buildOnOptions);
          dop_datasets.push(buildOnOptions[key_buildOnOptions]);
        }
        dop.push({
          labels: dop_labels,
          datasets: [
            {
              label: "My First Dataset ",
              data: dop_datasets,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
              borderWidth: 2,
            },
          ],
        });
      }
      config_data = {
        type: "line",
        data: dop,
      };
    }
    if (response.data.dasboardElement.type == "table") {
      let dop = [];
      for (const grapf of response.data.dasboardElement.attributes) {
        let dop_labels = [];
        let dop_datasets = [];
        let buildOnOptions = response.data.dasboardElement.buildOnOptions.count[grapf];
        for (const key in buildOnOptions) {
          dop_labels.push(key);
          dop_datasets.push(buildOnOptions[key]);
        }
        dop.push({
          data: dop_datasets,
          labels: dop_labels,
          color: classInit.getRandomColor(classInit.commonColors, 1)[0],
        });
      }
      config_data = {
        type: "table",
        data: dop,
      };
    }
    if (config_data) {
      let newDashb = new Dashboard(
        config_data.data,
        config_data.type,
        response.data.dasboardElement.attributes,
        response.data.dasboardElement.filterParams,
        response.data.dasboardElement.id,
        response.data.dasboardElement.name,
        response.data.dasboardElement.sizeX,
        response.data.dasboardElement.sizeY,
        response.data.dasboardElement.row,
        response.data.dasboardElement.col,

      );

      //ВСТАВИТЬ ДАШБОРД В ВКЛАДКУ
      current_tab.dataDasb.push(newDashb)
      let doparr = [];
      classInit.tabs.forEach(el => el.dataDasb.forEach(elim => doparr.push(elim)))
      classInit.datasets = doparr;
      initDashboards(classInit.commonColors, classInit.datasets)
    }



  }



  //удаление дашборда из данных
  deleteDashboard(idDashb) {
    let current_tab = $(`.tabs-triggers-list-item.active`).attr(
      "data-tab-name"
    );
    // let section = $(`.tabs - content - block[data - tab - name="${current_tab}"]`)
    let cur_tab_obj = this.tabs.find(el => el.id == current_tab) //объект текущей вкладки
    let cur_tab_ind = this.tabs.indexOf(cur_tab_obj)

    if (cur_tab_obj) {
      let curDashb = this.datasets.find(el => el.id == idDashb)

      let inddashbInTab = this.tabs[cur_tab_ind].dataDasb.indexOf(curDashb)
      this.tabs[cur_tab_ind].dataDasb.splice(inddashbInTab, 1)
      let ind2 = this.datasets.indexOf(curDashb);
      this.datasets.splice(ind2, 1)
      this.arrCharts.splice(ind2, 1)

      let li = $(`button[data-popup-name="${idDashb}"]`).closest('li');
      let parent = li.parent();
      parent[0].removeChild(li[0])
      // this.redrawCurrentTab(this.tabs[cur_tab_ind].id)

    }
  }

  //перерисовка текущей вкладки
  redrawCurrentTab(idTab) {
    let section = $(`.tabs - content - block[data - tab - name="${idTab}"]`)
    section[0].innerHTML = "";
    let template =
      `< div class="container" >
      <div class="gridster">
        <ul class="widjet-list">
          `

    idTab = this.tabs.indexOf(this.tabs.find(el => el.id == idTab));
    for (let i = 0; i < this.tabs[idTab].dataDasb.length; i++) {
      template += `
      <li data-row="${this.tabs[idTab].dataDasb[i].UF_VISUAL_PARAMS.row}" data-col="${this.tabs[idTab].dataDasb[i].UF_VISUAL_PARAMS.col}" data-sizex="${this.tabs[idTab].dataDasb[i].UF_VISUAL_PARAMS.x}" data-sizey="${this.tabs[idTab].dataDasb[i].UF_VISUAL_PARAMS.y}" class="widjet-list-item">
       <div class="widjet-list-item-content">
        <div class="widjet-list-item-content__title-container">
          <p class="widjet-list-item-content__title title-primary">
          ${this.tabs[idTab].dataDasb[i].UF_NAME}
          </p>
          <p>${this.tabs[idTab].dataDasb[i].year}</p>
          <div class="position-relative">
            <button data-popup-name="${this.tabs[idTab].dataDasb[i].id}" class="btn btn-icon-small popupTrigger" type="button">
              <img src="./assets/img/settings.svg" alt="Иконка настройки">
            </button>
            <div data-popup-name="${this.tabs[idTab].dataDasb[i].id}" class="popup widjet-popup-position-right-zero">
              <ul class="popup-list">
                <li class="btnTriggerRebuildBoard" data-popup-name = "filter_item${this.tabs[idTab].dataDasb[i].id}">
                  <p >
                      Изменить    
                  </p>
                  <div data-popup-name="filter_item${this.tabs[idTab].dataDasb[i].id}" class="popup widjet-popup-position-under popup_filter">
              
                  </div>
                </li>
                <li class="btnTriggerRemoveBoard">
                  <p>Удалить</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="widjet-list-item-content__viewBlock" style="height:80%; overflow: auto;">`;

      for (let j = 0; j < this.tabs[idTab].dataDasb[i].attributes.length; j++) {
        template += `
        
          <div class="chart-container chart-${this.tabs[idTab].dataDasb[i].type}" ${this.tabs[idTab].dataDasb[i].type == "line" ? 'style="position: relative;  width:100%"' : ''}>
          <canvas
            class="chart-canvas" 
            id="item${this.tabs[idTab].dataDasb[i].id}-${this.tabs[idTab].dataDasb[i].attributes[j]}" 
            data-chart-type="${this.tabs[idTab].dataDasb[i].type}"
            ></canvas>
          <div class="chart-legend" id="legend-container-item${this.tabs[idTab].dataDasb[i].id}-${this.tabs[idTab].dataDasb[i].attributes[j]}"></div>
          </div>
          `
      }
      template += `</div>
        </div > 
        </li > `

    }
    template += `</ul ></div ></div > `
    section[0].innerHTML = template;

    initDashboards(this.commonColors, this.datasets)

  }


  //отрисовка новой вкладки
  addNewTab(response) {
    let tabsList = $(".tabs-triggers-list");
    let tabsContentContainer = $(".tabs-content-container");
    let id = response.data.data.ID;
    let name = response.data.data.NAME
    this.tabs.push(new Tab(id, name));
    let tabName = id;
    let templateOfTabTrigger = `
                <div 
                    data-tab-name="${tabName}" 
                    data-popup-name="${tabName}-settings" 
                    class="tabs-triggers-list-item tabPopupTrigger">
                    <div class="tabs-triggers-list-item-container">
                        <div class="tab-input-container">
                            <p data-changeable-name="${tabName}" class="tabs-triggers-title changeable-title"></p>
                            <input 
                                class="tabs-input-name input-without-any-styles tabs-triggers-title changeable-input" 
                                type="text" 
                                value="${name}" 
                                name="${tabName}-name" 
                                data-changeable-name="${tabName}" 
                                readonly
                            >
                        </div>
                        <div data-popup-name="${tabName}-settings" class="popup widjet-popup-position-under">
                            <ul class="popup-list">
                                <li
                                    class="btnTriggerChangeNameTab btnTriggerChangeableIn" 
                                    data-changeable-name="${tabName}">
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
                </div>
            `;
    let templateOfTabContent = `
            <div data-tab-name="${tabName}" class="tabs-content-block">
                <div class="container">
                  <div class="gridster">
                    <ul class="widjet-list"></ul>
                  </div>
                </div>
            </div>
        `;
    $(tabsList).append(templateOfTabTrigger);
    $(tabsContentContainer).append(templateOfTabContent);
    $(".tabs-triggers-list-item[data-tab-name=" + tabName + "]").click();
    changeableInputInit(
      $(".tabs-input-name[data-changeable-name=" + tabName + "]")
    );

  }


  drawPreset(id_preset) {
    this.copy_preset = this.presets.find(el => el.id == id_preset)
    let indexOfPreset = this.presets.indexOf(this.copy_preset)
    let tabContent = document.createElement('div')
    tabContent.setAttribute("class", "tabcontent")

    let containetlabel = document.createElement("div");
    containetlabel.className = "containetlabel";

    let text = document.createElement("input");
    text.setAttribute("readonly", "true");
    text.setAttribute("value", this.copy_preset.name);
    text.addEventListener("input", function () {
      this.style.width = (this.value.length + 1) * 15 + "px";
      classInit.copy_preset.name = this.value;
    });
    // text.setAttribute(
    //   "style",
    //   "width:" + (this.newDashboard.UF_NAME.length + 1) * 15 + "px"
    // );
    containetlabel.appendChild(text);

    tabContent.appendChild(containetlabel)

    text = document.createElement("div");
    text.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2407 5.37002L17.2857 4.32803C16.9165 3.92522 16.2924 3.89329 15.884 4.25633L14.3216 5.64538L16.6198 8.18244L18.1714 6.78989C18.5854 6.41828 18.6166 5.78018 18.2407 5.37002ZM5.5 13.4882L13.2006 6.64207L15.5035 9.18435L7.90674 16.0025H5.5V13.4882ZM19.3465 4.35654L18.3915 3.31455C17.4686 2.30753 15.9083 2.22771 14.8874 3.1353L4.33557 12.5164C4.12212 12.7061 4 12.9781 4 13.2637V16.5025C4 17.0548 4.44772 17.5025 5 17.5025H8.09822C8.34478 17.5025 8.58266 17.4114 8.76616 17.2467L19.1733 7.90621C20.2084 6.97718 20.2863 5.38193 19.3465 4.35654ZM20 18.9992H4V20.4992H20V18.9992Z" fill="#0B1F33"/>
    </svg>`;
    text.addEventListener("click", function () {
      classInit.changeNameOfDashboard($(this).parent().find("input")[0]);
    });
    containetlabel.appendChild(text);
    containetlabel.appendChild(document.createElement("br"));





    //отчетный период
    text = document.createElement("label");
    text.innerText = "Отчетный период";
    tabContent.appendChild(text)

    tabContent.appendChild(document.createElement("br"));

    //отчетный период
    let block = document.createElement("div");
    block.className = "ReportSelect";
    let select = document.createElement("select");
    let dopopt = document.createElement("option");
    dopopt.innerHTML = "Выберите опцию";
    dopopt.setAttribute("value", "default");
    select.appendChild(dopopt);
    console.log(this.copy_preset)
    for (const el of classInit.report_type) {
      let option = document.createElement("option");
      option.setAttribute("value", el.code);
      option.innerText = el.name;
      // if ((copy_preset.report) && (copy_preset.report.name == el.code)) {
      //   console.log(el.code)
      //   option.setAttribute("selected", "true");
      // }
      select.appendChild(option);
    }

    block.appendChild(select)

    select.addEventListener("change", function () {
      console.log(classInit.copy_preset.report)
      classInit.copy_preset.report.name = this.value;
      let element = classInit.report_type.filter(
        (el) => el.code == this.value
      )[0];
      let parent = $(this).parent()[0];
      let childs = parent.childNodes;

      if (childs.length > 1) {
        //значит уже что-то добавляли
        parent.removeChild(childs[1]);
      }
      if (element?.type == "list") {
        try {
          delete classInit.copy_preset.report['range']
        }
        catch { }
        //надо добавить дополнительный селект
        let block = document.createElement("div");
        let selectSubType = document.createElement("select");
        element?.select.forEach((item, index, array) => {
          let option = document.createElement("option");
          option.innerText = item.name;
          option.setAttribute("value", item.code);

          selectSubType.appendChild(option);
        });
        if (classInit.copy_preset.report?.list) {
          selectSubType.value = classInit.copy_preset.report?.list
        }
        selectSubType.addEventListener("change", function () {
          classInit.copy_preset.report.list = this.value;

        });

        block.appendChild(selectSubType);
        parent.appendChild(block);
      }
      if (element?.type == "range") {
        // classInit.copy_preset.report = {
        //   name: this.value,
        //   range: ["", ""],
        // };
        try {
          delete classInit.copy_preset.report['list']
        }
        catch { }
        //     //добавление двух инпутов для диапазиона
        let block = document.createElement("div");
        let date1SubType = document.createElement("input");
        date1SubType.setAttribute("type", "date");
        date1SubType.setAttribute(
          "style",
          `BACKGROUND-COLOR: #F0F5FF;
        PADDING: 12PX;
        BORDER-RADIUS: 12PX;
        BORDER: NONE;`
        );
        block.appendChild(date1SubType);
        date1SubType.addEventListener("input", function () {
          classInit.copy_preset.report.range[0] = this.value;
        });
        date1SubType.addEventListener("change", function () {
          classInit.copy_preset.report.range[0] = this.value;
        });
        if (classInit.copy_preset.report?.range) {
          date1SubType.value = classInit.copy_preset.report.range[0]
        }

        let date2SubType = document.createElement("input");
        date2SubType.setAttribute("type", "date");
        date2SubType.setAttribute(
          "style",
          `BACKGROUND-COLOR: #F0F5FF;
        PADDING: 12PX;
        BORDER-RADIUS: 12PX;
        BORDER: NONE;`
        );
        block.appendChild(date2SubType);
        if (classInit.copy_preset.report?.range) {
          date2SubType.value = classInit.copy_preset.report.range[1]
        }
        date2SubType.addEventListener("input", function () {
          // if (classInit.copy_preset.report.range) {
          classInit.copy_preset.report.range[1] = this.value;
          // } else {
          //  classInit. copy_preset.report.range = ["", ""];
          // }
        });
        date2SubType.addEventListener("change", function () {
          // if (classInit.copy_preset.report.range) {
          classInit.copy_preset.report.range[1] = this.value;
          // console.log(classInit.copy_preset)
          // } else {
          // classInit.copy_preset.report.range = ["", ""];
          // }
        });
        parent.appendChild(block);
      }


    })


    //выбор сохраненных параметров по отчетному периоду
    if ((this.copy_preset.report) && (this.copy_preset.report.name)) {
      select.value = this.copy_preset.report.name
      let changeEvent = new Event('change');
      select.dispatchEvent(changeEvent);
    }

    tabContent.appendChild(block)


    //аттрибуты
    text = document.createElement("h3");
    text.innerHTML = "Аттрибуты";
    tabContent.appendChild(text);
    tabContent.appendChild(document.createElement("br"));


    let but = document.createElement("button");
    but.className = "addAtr_filter";
    but.innerText = "Добавить аттрибут";
    tabContent.appendChild(but);



    tabContent.appendChild(document.createElement("br"));
    tabContent.appendChild(document.createElement("br"));


    //сохранить пресет
    but = document.createElement('button');
    but.innerText = "Сохранить фильтр"
    but.className = "savePreset"

    but.addEventListener("click", function () {
      classInit.presets[indexOfPreset] = classInit.copy_preset;
      // const idDashb = $(this).closest(".popup.widjet-popup-position-right-zero.active").attr("data-popup-name")
      // console.log(idDashb)
      console.log(classInit.copy_preset); // структура пресета, который сейчас сохранили
      let container = $(".change_filters .tab")[0]
      container.innerHTML = drawNamePresets();
    })
    tabContent.appendChild(but)
    tabContent.appendChild(document.createElement("br"));
    tabContent.appendChild(document.createElement("br"));


    //Сбросить
    but = document.createElement('button');
    but.innerText = "Сбросить"
    but.className = "ResetPreset"

    but.addEventListener("click", function () {
      classInit.copy_preset.report = {}
      classInit.copy_preset.data = []
      const idDashb = $(this).closest(".popup.widjet-popup-position-right-zero.active").attr("data-popup-name")
      console.log(classInit.copy_preset); // структура пресета, который сейчас сохранили
      //   BX.ajax
      //     .runComponentAction(
      //       "rns:dashboard.customizable",
      //       "setTimeFilterOnDashBoardElement",
      //       {
      //         mode: "class",
      //         datatype: "json",
      //         data: {
      //           data: {
      //             id: idDashb,
      //             preset: classInit.copy_preset,
      //           },
      //         },
      //       }
      //     )
      //     .then(
      //       function (response) {
      //         console.log('dadads');
      //         console.log(response);
      //       },
      //       function (response) {
      //         console.log(response);
      //       }
      //     );

    })
    tabContent.appendChild(but)

    //применить фильтрацию
    but = document.createElement('button');
    but.innerText = "Применить"
    but.className = "applyPreset"

    but.addEventListener("click", function () {
      // classInit.presets[indexOfPreset] = copy_preset;
      const idDashb = $(this).closest(".popup.widjet-popup-position-right-zero.active").attr("data-popup-name")
      console.log(idDashb)
      // console.log(classInit.copy_preset); // структура пресета, который сейчас сохранили
      // BX.ajax
      //   .runComponentAction(
      //     "rns:dashboard.customizable",
      //     "setTimeFilterOnDashBoardElement",
      //     {
      //       mode: "class",
      //       datatype: "json",
      //       data: {
      //         data: {
      //           id: idDashb,
      //           preset: classInit.copy_preset,
      //         },
      //       },
      //     }
      //   )
      //   .then(
      //     function (response) {
      //       console.log('dadads');
      //       console.log(response);
      //     },
      //     function (response) {
      //       console.log(response);
      //     }
      //   );
    })






    tabContent.appendChild(but)
    return tabContent
  }

  deletePreset(id_preset) {

    this.presets = this.presets.filter(el => el.id != id_preset)

  }

  addNewPreset() {
    let new_id = this.presets[this.presets.length - 1] ? this.presets[this.presets.length - 1].id + 1 : 0;
    let new_preset = {
      id: new_id,
      name: "Пресет без имени",
      unity_type: null,
      data: [
      ],
      report: {}
    }
    this.presets.push(new_preset)
  }

  addTemplate(ID, NAME) {
    this.templates.push({ ID, NAME })
  }

  redrawTemplates() {
    let template = ``
    for (let i = 0; i < this.templates.length; i++) {
      template += `<li data-id="${this.templates[i].ID}">
      <p class="changeable-title" data-changeable-name="${this.templates[i].ID}">${this.templates[i].NAME}</p>
      <input
          type="text"
          name="${this.templates[i].ID}"
          value="${this.templates[i].NAME}"
          class="template-input-name input-without-any-styles changeable-input"
          data-changeable-name="${this.templates[i].ID}"
      >
      <div class="btns-container">
          <button
              class="btn btn-with-icon btn-icon-small btnTriggerChangeTitleTemplate btnTriggerChangeableInTemplate"
              data-changeable-name="${this.templates[i].ID}"
              type="button">
              <img src="./assets/img/edit.svg" alt="Иконка редактирования">
          </button>
          <button name=${this.templates[i].ID} class="btn btn-with-icon btn-icon-small btnTriggerRemoveTemplate" type="button">
              <img src="./assets/img/trash.svg" alt="Иконка удалить">
          </button>
      </div>
  </li>`
    }
    return template;
  }

  initListOfTemplates() {
    for (const elem of dashb_array["TEMPLATES"]) {
      this.addTemplate(elem["ID"], elem["NAME"])
    }
  }

  createListOfEmployees() {
    console.log(dashb_array["USERS"])
    for (var key of Object.keys(dashb_array["USERS"])) {
      this.listOfEmployees.push({ name: key, value: dashb_array["USERS"][key] })
    }
    // for (const elem of dashb_array["USERS"]) {
    //   console.lof(elem)
    //   this.listOfEmployees.push({name: elem ,value: elem})
    // }



  }

  parseGroups() {
    console.log(dashb_array)
    // const idProject = this.groups.findIndex(el=> el.code=="Project")
    // const projects = dashb_array["PROJECTS"]
    // let data = []
    // for (let i in projects){
    //   data.push({name: projects[i], code: i})
    // }

    // this.groups[idProject].data = data
    let data = []
    let ind = 0;
    for (let i in dashb_array["FIELDS"]) {
      data = []
      for (let j in dashb_array["FIELDS"][i]) {
        if ((dashb_array["FIELDS"][i][j].type == "list") && (dashb_array["FIELDS"][i][j].select)) {
          let select = []
          for (let item in dashb_array["FIELDS"][i][j].select) {
            select.push(
              {
                name: dashb_array["FIELDS"][i][j].select[item],
                code: item
              }
            )
          }
          data.push({
            code: dashb_array["FIELDS"][i][j].code,
            name: dashb_array["FIELDS"][i][j].name,
            type: dashb_array["FIELDS"][i][j].type,
            select: select
          })
        }
        else {
          data.push({
            code: dashb_array["FIELDS"][i][j].code,
            name: dashb_array["FIELDS"][i][j].name,
            type: dashb_array["FIELDS"][i][j].type
          })
        }
      }
      this.groups[ind].data = data
      ind++;
    }
    console.log(this.groups)



    // {
    //   name: "Проекты",
    //   code: "Project",
    //   data: [
    //     { name: "Выберите опцию", code: "Выберите опцию", type: null },
    //     { name: "Активность", code: "ACTIVE", type: "text" },
    //     { name: "Стоимость", code: "Стоимость", type: "number" },
    //     { name: "Статус проекта", code: "Статус проекта", type: "text" },
    //     { name: "Ответственный", code: "OWNER_LOGIN", type: "text" },
    //   ],
    // },
  }



}

class Dashboard {
  constructor(

    _datasets = [],
    _type = "",
    _attributes = [],
    _filter = [],
    id = null,
    name = "Название дашборда",
    _x = 1, _y = 1, _row = 1, _col = 1, _year = 2024
  ) {
    this.datasets = _datasets; //[{label: data:}, {label: data}]
    this.attributes = _attributes;
    this.type = _type;
    this.filter = _filter;
    this.UF_NAME = name;
    this.id = id;
    this.year = _year

    this.UF_VISUAL_PARAMS = {
      x: _x,
      y: _y,
      col: _col,
      row: _row,
      type: "",
    };

  }
}

class Tab {
  constructor(_id = null, _name = "") {
    this.id = _id;
    this.name = _name;
    this.dataDasb = [];
  }

  addDashb(objDash) {
    this.dataDasb.push(objDash);
  }
}

var classInit = new SettingDashboards();
