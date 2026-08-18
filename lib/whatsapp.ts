import { whatsappDefaultMessage, whatsappNumber } from '@/lib/config'

/**
 * Monta o link wa.me com mensagem pre-preenchida.
 * Se o numero ainda nao estiver configurado no ambiente, retorna o link
 * generico do WhatsApp (abre o app sem destino) em vez de um href quebrado.
 */
export function buildWhatsAppUrl(message: string = whatsappDefaultMessage): string {
  const text = encodeURIComponent(message)
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`
}

/** Indica se o CTA esta apontando para um numero real (util em revisao de deploy). */
export const isWhatsAppConfigured: boolean = whatsappNumber.length >= 10
