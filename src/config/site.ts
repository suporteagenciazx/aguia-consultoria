/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite apenas os valores abaixo
 * ============================================================
 */

export const siteConfig = {
  /** Número de WhatsApp usado em TODOS os botões (DDI 55 + DDD + número, só dígitos) */
  whatsappNumber: "5511941290842",

  /** Mensagem que já vem preenchida ao abrir a conversa */
  whatsappMessage: "Olá! Gostaria de falar com um especialista da Águia Consultoria.",

  /** Telefone exibido no rodapé e na área de contato */
  displayPhone: "+55 (11) 94129-0842",

  /** E-mail de contato */
  email: "contato@aguiaempresarial.com",

  /** Economista Chefe exibido na seção de equipe */
  economistaChefe: {
    name: "André Luiz",
    fullName: "André Luiz Koerich",
    role: "Economista Chefe",
    specialty: "Acompanhamento e Liberação de Crédito Empresarial",
    register: "CORECON-SC 3621\nCOFECON 091",
    bio: "Profissional com ampla experiência em economia aplicada e consultoria estratégica empresarial, atuando no assessoramento econômico de empresas de médio e grande porte.",
  },
};

/** Link simples do WhatsApp (usado por todos os botões) */
export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}`;

