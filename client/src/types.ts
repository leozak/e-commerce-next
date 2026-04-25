import { z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatorio!"),
  email: z.email("Email inválido!").min(1, "Email é obrigatorio!"),
  phone: z
    .string()
    .min(9, "Telefone deve ter no minimo 9 digitos e no maximo 11!")
    .max(11, "Telefone deve ter no minimo 9 digitos e no maximo 11!")
    .regex(/^\d+$/, "Telefone deve conter apenas numeros!"),
  address: z.string().min(1, "Endereço é obrigatorio!"),
  city: z.string().min(1, "Cidade é obrigatoria!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Titular do cartão é obrigatorio!"),
  cardNumber: z
    .string()
    .min(16, "Número do cartão é obrigatorio!")
    .max(16, "Numero do cartão é obrigatorio!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Validade do cartão deve estar no formato MM/AA!",
    ),
  cvv: z.string().min(3, "CVV é obrigatorio!").max(3, "CVV é obrigatorio!"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
