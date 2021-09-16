"use script";

function getData() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x2D59C8C6bcD4Ec1C1a059Bfa4B54E0a987C31bE8"
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data.assets);
      });
  }).catch((err) => {
    console.log(err);
    alert("Error occured");
  });
}

function createTableItem(item) {
  const tableItem = `<tr>
    <td>${item.id}</td>
    <td>
        <img src="${item.image_url}" alt="${item.name}" />
    </td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td>${item.token_id}</td>
    <td>${item.num_sales}</td>
  </tr>`;
  return tableItem;
}

window.addEventListener("DOMContentLoaded", async () => {
  const assets = await getData();
  console.log("assets -->", assets);
  const tableBody = document.querySelector("#tableBody");
  assets.forEach((asset) => {
    const tableItem = createTableItem(asset);
    tableBody.insertAdjacentHTML("beforeend", tableItem);
  });
});
