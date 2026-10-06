/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite apenas os valores abaixo
 * ============================================================
 */

export const siteConfig = {
  /** Número de WhatsApp usado em TODOS os botões (DDI 55 + DDD + número, só dígitos) */
  whatsappNumber: "5511920710385",

  /** Mensagem que já vem preenchida ao abrir a conversa */
  whatsappMessage: "Olá! Gostaria de falar com um especialista da Águia Consultoria.",

  /** Telefone exibido no rodapé e na área de contato */
  displayPhone: "+55 (11) 92071-0385",

  /** E-mail de contato */
  email: "contato@aguiaempresarial.com",

  /** Economista Chefe exibido na seção de equipe */
  economistaChefe: {
    name: "Ademir Tenfen",
    fullName: "Ademir Tenfen",
    role: "Economista Chefe",
    specialty: "Finanças e Perícia e Avaliação Econômica, Contábil e Atuarial",
    register: "CORECON/SC nº 1.417\nCOFECON nº 014",
    bio: "Economista, especialista em Finanças e em Perícia e Avaliação Econômica, Contábil e Atuarial; atua com perícias econômico-financeiras judiciais e extrajudiciais.",
  },
};

/** Link simples do WhatsApp (usado por todos os botões) */
export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}`;

