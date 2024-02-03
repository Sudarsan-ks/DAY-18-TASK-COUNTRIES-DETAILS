var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

// Using async await function to fetch data via api
async function countries() {

    // It will try to run the api
    try {

        //To get api using await method
        var res = await fetch("https://restcountries.com/v3.1/all");

        //Converting data into json
        var resdata = await res.json();

        // Using for loop to get data of all the countries one by one
        for (var i = 0; i < resdata.length; i++) {

            // Creating a column div to get the data in columns in responsiveness
            var col = document.createElement("div");
            col.className = "col-md-4";
            col.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${resdata[i].flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${resdata[i].name.common}</h5>
                  <p class="card-text"><b>Population:</b> ${resdata[i].population}</p>
                  <p class="card-text"><b>Area:</b> ${resdata[i].area}</p>
                  <p class="card-text"><b>Capital:</b> ${resdata[i].capital}</p>
                  <p class="card-text"><b>continents:</b> ${resdata[i].continents}</p>
                  <p class="card-text"><b>Subregion:</b> ${resdata[i].subregion}</p>
                </div>
              </div>`
            document.body.append(container);
            container.append(row);
            row.append(col);
        }
    }
    // Using catch to get error in display if the api not run in the server to know.
    catch (error) {
        console.log("Error in fethching data" + error.message);
    }


}
countries();
