var faker = require('faker');

function generateData () {
  var lsProponentes = [];
  for (var id = 0; id < 100; id++) {
    let nmCliente = faker.name.findName()
    let idSexo = faker.random.number({min: 0, max: 1});
    let dtNascimento = faker.date.between("1900-01-01", "2018-07-31").toISOString().split("T")[0];
    let nmCPF = faker.random.number({min: 10000000000, max: 99999999999})
    let nmCNPJ = faker.random.number({min: 1000000000000, max: 9999999999999})
    let nmTipoCliente = faker.random.number(1);
    lsProponentes.push({
      "id": id,
      "nmCliente": nmCliente,
      "nmCPF": nmCPF,
      "nmCNPJ": nmCNPJ,
      "dtNascimento": dtNascimento,
      "idSexo": idSexo,
      "nmTipoCliente": nmTipoCliente
    });
  }

  return {lsProponentes};
}

module.exports = generateData;