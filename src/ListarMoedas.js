import 'util'
import MOEDAS from './util';

function ListarMoedas() {
   
  function compare(moeda1, moeda2) {
    if (moeda1.descricao < moeda2.descricao) {
      return -1;
    } else if (moeda1.descricao > moeda2.descricao) {
      return 1;
    }
    return 0;
  }

  return MOEDAS.sort(compare).map(moeda =>
      <option value={moeda.sigla} key={moeda.sigla}>
        {moeda.descricao}
      </option>
  );
}

export default ListarMoedas;