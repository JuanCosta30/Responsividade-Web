function formatPhone(input){
    // Remove todos os caracteres não numéricos do valor atual do campo
    const phoneNumber = input.value.replace(/\D/g, '');
    // Insere automaticamente os parênteses no valor formatado
    const formatPhoneNumber = `+${phoneNumber.slice(0,2)} (${phoneNumber.slice(2,4)}) ${phoneNumber.slice(4)}`;

    // Define o valor formatado no campo de entrada
    input.value = formatPhoneNumber;
  }