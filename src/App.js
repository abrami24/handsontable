import React, { useRef, useState } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import "./App.css";
import Pagination from "./Pagination";

registerAllModules();

function App() {
  const hotRef = useRef(null);
  const [first, setFirst] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  var rowsOnSinglePage = 5; //can be changed
  let data = [
    ["Accra", "Ghana", 26, true],
    ["Addis Ababa", "Ethiopia", 19, false],
    ["Adelaide", "Australia", 19, true],
    ["Algiers", "Algeria", 16, true],
    ["Almaty", "Kazakhstan", -8, false],
    ["Amman", "Jordan", 17, false],
    ["Amsterdam", "Netherlands", 5, false],
    ["Anadyr", "Russia", -16, false],
    ["Anchorage", "United States", -7, true],
    ["Ankara", "Turkey", 13, false],
    ["Asuncion", "Paraguay", 25, true],
    ["Athens", "Greece", 16, false],
    ["Atlanta", "United States", 9, true],
    ["Auckland", "New Zeland", 14, true],
    ["Bangkok", "Thailand", 28, true],
    ["Barcelona", "Spain", 15, false],
    ["Beijing", "China", 1, false],
    ["Beirut", "Lebanon", 22, false],
    ["Belgrade", "Serbia", 4, false],
    ["Bengaluru", "India", 28, false],
    ["Berlin", "Germany", 3, true],
    ["Bogota", "Colombia", 13, false],
    ["Boston", "United States", 2, true],
    ["Brasilia", "Brazil", 20, false],
    ["Brisbane", "Australia", 23, false],
    ["Brussels", "Brussels", 4, false],
    ["Bucharest", "Romania", 5, true],
    ["Budapest", "Hungary", 4, false],
    ["Buenos Aires", "Argentina", 21, false],
    ["Cairo", "Egypt", 23, false],
    ["Calgary", "Canada", -2, true],
    ["Canberra", "Australia", 12, true],
    ["Cape Town", "Republic of South Africa", 25, false],
    ["Caracas", "Venezuela", 29, false],
    ["Casablanca", "Maroko", 20, false],
    ["Chicago", "United States", 7, true],
    ["Copenhagen", "Denmark", 2, true],
    ["Dallas", "United States", 21, true],
    ["Dar es Salaam", "Tanzania", 32, true],
    ["Darwin", "Australia", 27, false],
    ["Denver", "United States", 1, false],
    ["Detroit", "United States", 6, true],
    ["Dhaka", "Bangladesh", 23, false],
    ["Doha", "Qatar", 25, true],
    ["Dubai", "United Arab Emirates", 27, true],
    ["Dublin", "Ireland", 7, false],
    ["Edmonton", "Canada", -5, true],
    ["Frankfurt", "Germany", 4, false],
    ["Guatemala City", "Republic of Guatemala", 14, true],
    ["Halifax", "Canada", 0, true],
    ["Hanoi", "Vietnam", 18, false],
    ["Harare", "Zimbabwe", 17, false],
    ["Havana", "Cuba", 15, false],
    ["Helsinki", "Finland", -2, true],
    ["Hong Kong", "Hong Kong", 20, true],
    ["Honolulu", "United States", 23, true],
    ["Houston", "United States", 23, false],
    ["Indianapolis", "United States", 9, false],
    ["Islamabad", "Pakistan", 23, false],
    ["Istanbul", "Turkey", 13, false],
    ["Jakarta", "Republic of Indonesia", 29, true],
    ["Jerusalem", "Israel", 25, false],
    ["Johannesburg", "Republic of South Africa", 27, true],
    ["Karachi", "Pakistan", 29, false],
    ["Kathmandu", "Nepal", 15, false],
    ["Khartoum", "Sudan", 34, false],
    ["Kingston", "Australia", 24, false],
    ["Kinshasa", "Democratic Republic of the Congo", 31, true],
    ["Kiritimati", "Kiribati", 26, false],
    ["Kolkata", "India", 25, false],
    ["Kuala Lumpur", "Malaysia", 28, false],
    ["Kuwait City", "Kuwait", 22, false],
    ["Kyiv", "Ukraine", 1, false],
    ["La Paz", "Bolivia", 9, false],
    ["Lagos", "Nigeria", 34, false],
    ["Lahore", "Pakistan", 25, false],
    ["Las Vegas", "United States", 8, false],
    ["Lima", "Peru", 19, false],
    ["Lisbon", "Portugal", 16, false],
    ["London", "England", 8, false],
    ["Los Angeles", "United States", 9, false],
    ["Madrid", "Spain", 13, false],
    ["Managua", "Nicaragua", 23, false],
    ["Manila", "Philippines", 28],
    ["Melbourne", "Australia", 12],
    ["Mexico City", "Mexico", 9],
    ["Miami", "United States", 22],
    ["Minneapolis", "United States", 11],
    ["Minsk", "Belarus", -2],
    ["Montevideo", "Uruguay", 20],
    ["Montreal", "Canada", -1],
    ["Moscow", "Russia", 1],
    ["Mumbai", "India", 30],
    ["Nairobi", "Kenya", 24],
    ["Nassau", "Bahamas", 23],
    ["New Delhi", "India", 24],
    ["New Orleans", "United States", 18],
    ["New York", "United States", 4],
    ["Oslo", "Norway", 2],
    ["Ottawa", "Canada", -1],
    ["Paris", "France", 6],
    ["Perth", "Australia", 19],
    ["Philadelphia", "United States", 2],
    ["Phoenix", "United States", 9],
    ["Prague", "Czech", 1],
    ["Reykjavik", "Island", 3],
    ["Rio de Janeiro", "Brazil", 30],
    ["Riyadh", "Saudi Arabia", 16],
    ["Rome", "Italy", 13],
    ["Salt Lake City", "United States", 1],
    ["San Francisco", "United States", 11],
    ["San Juan", "Philippines", 22],
    ["San Salvador", "El Salvador", 19],
    ["Santiago", "Philippines", 19],
    ["Santo Domingo", "Dominican Republic", 21],
    ["São Paulo", "Brazil", 27],
    ["Seattle", "United States", 4],
    ["Seoul", "South Korea", 0],
    ["Shanghai", "China", 9],
    ["Singapore", "Singapore", 29],
    ["Sofia", "Bulgaria", 5],
    ["Stockholm", "Sweden", 0],
    ["Suva", "Fiji", 24],
    ["Sydney", "Australia", 22],
    ["Taipei", "Taiwan", 20],
    ["Tallinn", "Estonia", -1],
    ["Tashkent", "Uzbekistan", 1],
    ["Tegucigalpa", "Honduras", 17],
    ["Tehran", "Iran", 10],
    ["Tokyo", "Japan", 10],
    ["Toronto", "Canada", 4],
    ["Vancouver", "Canada", 4],
    ["Vienna", "Austria", 3],
    ["Warsaw", "Poland", -1],
    ["Washington DC", "United States", 3],
    ["Winnipeg", "Canada", 1],
    ["Yangon", "Myanmar", 28],
    ["Zagreb", "Republic of Croatia", 6],
    ["Zürich", "Switzerland", 2],
  ];


  function getArray(clicked) {
    var arr = [];

    if (clicked === 1) {
      for (var i = clicked * rowsOnSinglePage; i < data.length; i++) {
        arr.push(i);
      }
      return arr;
    } else {
      for (var j = 0; j < clicked * rowsOnSinglePage - rowsOnSinglePage; j++) {
        arr.push(j);
      }
      for (var k = clicked * rowsOnSinglePage; k < data.length; k++) {
        arr.push(k);
      }
      return arr;
    }
  }

  const onChangePagination = (event) => {
    const page = event.page + 1;
    const hot = hotRef.current?.hotInstance;
    setFirst(event.first);
    setCurrentPage(page);
    hot.updateSettings({
        hiddenRows: {
          rows: getArray(page),
          indicators: false
        }
    });
  };

  function refreshPaging() {
    const hot = hotRef.current?.hotInstance;
    setFirst(0);
    setCurrentPage(1);
    hot.updateSettings({
        hiddenRows: {
          rows: getArray(1),
          indicators: false,
        },
    });
  }

  return (
    <div className="App">
      <>
        <HotTable
          ref={hotRef}
          settings={{
            data: data,
            colHeaders: ["City", "Country", "Temperature"],
            stretchH: "all",
            dropdownMenu: true,
            columnSorting: true,
            sortIndicator: true,
            filters: true,
            height: "auto",
            rowHeights: 110,
            manualRowResize: true,
            viewportColumnRenderingOffset: 200,
            columns: [
              {},
              {},
              {
                type: "numeric",
              },
              {
                type: "checkbox",
              },
            ],
            hiddenRows: {
              rows: getArray(currentPage),
              indicators: false,
            },
            afterColumnSort: function () {
              refreshPaging();
            },
            afterFilter: function () {
              refreshPaging();
            },
            licenseKey: "non-commercial-and-evaluation",
          }}
        />
        <div className="px-3">
          <Pagination
            totalRecords={data.length}
            first={first}
            setFirst={setFirst}
            rows={rowsOnSinglePage}
            onChange={onChangePagination}
          />
        </div>
      </>
    </div>
  );
}

export default App;
