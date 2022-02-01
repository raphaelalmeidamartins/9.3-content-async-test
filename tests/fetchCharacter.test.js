require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome do personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });

  it('Verifica se a função retorna um erro ao ser executada sem parâmetro', async () => {
    const failedRequest = await fetchCharacter();
    expect(failedRequest).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se a função retorna \'invalid id\' quando é fornecido um parâmetro inválido ', async () => {
    const response = await fetchCharacter('xablau');
    expect(response).toBe('Invalid id');
  });

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
