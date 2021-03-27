const INPUT_CHANGE = 'INPUT_CHANGE';

const inputAction = (text) => ({
  type: INPUT_CHANGE,
  text,
});
// Sempre receberá um objeto
// o type é obrigatório
// a const declarada na primeira linha se "assemelham" a identidade da função
export default inputAction;
