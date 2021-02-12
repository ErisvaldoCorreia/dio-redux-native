export const formatCurrency = (value) =>
    Intl.NumberFormat('pt-br', { 
        style: 'currency', currency: 'BRL' 
    }).format(value);
