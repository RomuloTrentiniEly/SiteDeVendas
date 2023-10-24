let atual = new Date()
let datames = atual.getMonth(-2)
const dataHoje = new Date()
const ano = dataHoje.getFullYear();
const mes = String(dataHoje.getMonth() + 1).padStart(2, '0'); // Adicione zero à esquerda se necessário
const dia = String(dataHoje.getDate()).padStart(2, '0'); // Adicione zero à esquerda se necessário
const dataHojeFormatada = `${ano}-${mes}-${dia}`;
console.log(dataHojeFormatada)


const mespassado = String(dataHoje.getMonth() ).padStart(2, '0'); // Adicione zero à esquerda se necessário
const datamespassadoFormatada = `${ano}-${mespassado}-${dia}`
console.log(datamespassadoFormatada)

