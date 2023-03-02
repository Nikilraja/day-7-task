var nikil = new XMLHttpRequest();

nikil.open("GET", "https://restcountries.com/v3.1/all", true);

nikil.send();

nikil.onload = function () {
  var data = JSON.parse(nikil.response);
  console.log(data);

  var asia = data.filter((element) => element.region == "Asia");
  console.log(asia);

  var population = data.filter((element) => element.population < 200000);
  console.log(population);

  var foreach = data.forEach((element) => {
    let nam = element.name.common;
    //console.log(nam);
    let flg = element.flag;
    //console.log(flg);
    let capit = element.capital;
    console.log(nam, flg, capit);
  });

  var popu = data.reduce((a, b) => a + b.population, 0);
  console.log(popu);

  var dollar = data.filter((element) => element.currencies == "USD");
  console.log(dollar);
};
