// Creates Table of Games on Sale onload
function top_paid() {

    const tbl = document.getElementById("gamedeals");
    const tblBody = document.createElement('tbody');

    const row = tbl.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = "Title"
    cell2.innerHTML = "Sale Price"
    cell3.innerHTML = "Deal Rating"
    cell4.innerHTML = "Steam Rating"
    
    fetch(`https://www.cheapshark.com/api/1.0/deals?pageSize=5&sortBy=Savings`)
        .then((res) => res.json())
        .then((res) => {
            console.log('unedited', res)
            
            for (let i=0; i<5; i++) {
                const row = document.createElement('tr');
    
                const cell_game = document.createElement('td'); //title
                const cell_sale = document.createElement('td'); //salePrice
                const cell_deal = document.createElement('td'); //dealRating
                const cell_rate = document.createElement('td'); //steamRatingText
                
                const cellText1 = document.createTextNode(`${res[i].title}`)
                cell_game.appendChild(cellText1);

                if ((`${res[i].salePrice}`) == "0.00") {
                    cellText2 = document.createTextNode("Free!")
                } else {
                    cellText2 = document.createTextNode(`${res[i].salePrice}`)
                }
                cell_sale.appendChild(cellText2);

                const cellText3 = document.createTextNode(`${res[i].dealRating}`)
                cell_deal.appendChild(cellText3);

                const dratings = parseFloat(`${res[i].dealRating}`)
                if (dratings < 5.00) {
                    cell_deal.style.backgroundColor = "red";
                    cell_deal.style.color = "white";
                } 
                if (dratings > 5.00) {
                    cell_deal.style.backgroundColor = "green";
                    cell_deal.style.color = "white";
                }

                const cellText4 = document.createTextNode(`${res[i].steamRatingText}`)
                cell_rate.appendChild(cellText4);

                if ((`${res[i].steamRatingText}`) == "Overwhelmingly Positive") {
                    cell_rate.style.backgroundColor = "#006203";
                    cell_rate.style.color = "white";
                } else if ((`${res[i].steamRatingText}`) == "Very Positive") {
                    cell_rate.style.backgroundColor = "#0f9200";
                    cell_rate.style.color = "white";
                } else if ((`${res[i].steamRatingText}`) == "Mostly Positive") {
                    cell_rate.style.backgroundColor = "#30cb00";
                    cell_rate.style.color = "white";
                } else if ((`${res[i].steamRatingText}`) == "Mixed") {
                    cell_rate.style.backgroundColor = "#F6BE00";
                    cell_rate.style.color = "white";
                } else {
                    cell_rate.style.backgroundColor = "red";
                    cell_rate.style.color = "white";
                }

                console.log(cellText1, cellText2, cellText3, cellText4)

                row.appendChild(cell_game);
                row.appendChild(cell_sale);
                row.appendChild(cell_deal);
                row.appendChild(cell_rate);
                tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody)
            document.body.appendChild(tbl);
        });
    
}

// Creates Table of Games with form submitted settings