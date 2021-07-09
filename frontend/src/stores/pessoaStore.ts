import { action, makeObservable } from 'mobx';
import PessoaDto from '../services/pessoa/dto/pessoaDto';
import pessoaService from '../services/pessoa/pessoaService';

class PessoaStore {
  constructor() { // iniciar os estados das variáveis e métodos
    makeObservable(this, {
      create: action
    });
  }

  public async create(input: PessoaDto) {
    let result = await pessoaService.create(input);
    return result;
  }

}
export default PessoaStore;